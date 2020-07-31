import React, { useState, useEffect } from "react";
import {Alert} from 'react-bootstrap';
import { isAuthenticated, getCategories, createVideogame } from "./apiCore";

const AddVideogame = () => {
  const [values, setValues] = useState({
    name: "",
    description: "",
    price: "",
    categories: [],
    category: "",
    quantity: "",
    photo: "",
    loading: false,
    error: "",
    createdVideogame: "",
    redirectToProfile: false,
    formData: "",
  });

  const {
    name,
    description,
    price,
    categories,
    category,
    quantity,
    photo,
    loading,
    error,
    createdVideogame,
    redirectToProfile,
    formData,
  } = values;

  const { user, token } = isAuthenticated();

  const init = () => {
    getCategories().then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({ ...values, categories: data, formData: new FormData() });
      }
    });
  };

  useEffect(() => {
    setValues({ ...values, formData: new FormData() });
    init();
  }, []);

  const obtenerDatos =  name => event => {
    const value = name === "photo" ? event.target.files[0] : event.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value });
  };

  const enviarVideogame = event => {
    event.preventDefault()
    setValues({ ...values, error: '', loading: true })
    createVideogame(user._id, token, formData).then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error })
      } else {
        setValues({
          ...values,
          name: '',
          description: '',
          photo: '',
          price: '',
          quantity: '',
          loading: false,
          createdVideogame: data.name
        })
      }
    })
  }




  const showError = () => (
    <Alert
      className="alert-danger alert"
      style={{ display: error ? "" : "none" }}
    >
      {error}
    </Alert>
  );

  const showSuccess = () => (
    <Alert
      className="alert-info alert"
      style={{ display: createdVideogame ? "" : "none" }}
    >
      <h3>{`${createdVideogame} ha sido creado correctamente`} </h3>
    </Alert>
  );

  const showLoading = () =>
    loading && (
      <Alert className="alert-success alert">
        {" "}
        <h3>Cargando...</h3>{" "}
      </Alert>
    );

  return (
    <div className="container mt-5" >
      <h3>Add Videogame</h3>
      <form className='mb-3' onSubmit={enviarVideogame}>
      <h4>Post Photo</h4>
      <div className='form-group'>
        <label className='btn btn-secondary'>
          <input
            onChange={obtenerDatos('photo')}
            type='file'
            name='photo'
            accept='image/*'
          />
        </label>
      </div>
      <div className='form-group'>
        <label className='text-muted'>Name</label>
        <input
          onChange={obtenerDatos('name')}
          type='text'
          className='form-control'
          value={name}
        />
      </div>
      <div className='form-group'>
        <label className='text-muted'>Description</label>
        <input
          onChange={obtenerDatos('description')}
          type='text'
          className='form-control'
          value={description}
        />
      </div>
      <div className='form-group'>
        <label className='text-muted'>Price</label>
        <input
          onChange={obtenerDatos('price')}
          type='text'
          className='form-control'
          value={price}
        />
      </div>
      <div className='form-group'>
        <label className='text-muted'>Category</label>
        <select
          onChange={obtenerDatos('category')}
          type='text'
          className='form-control'
        >
          <option>Select Category</option>
          {categories &&
            categories.map((c, i) => (
              <option key={i} value={c._id}>
                {c.name}
              </option>
            ))}
        </select>
      </div>
      <div className='form-group'>
        <label className='text-muted'>Quantity</label>
        <input
          onChange={obtenerDatos('quantity')}
          type='number'
          className='form-control'
          value={quantity}
        />
      </div>
      <button className='btn btn-outline-primary'>Create Product</button>
    </form>
    {showError()}
    {showSuccess()}
    {showLoading()}
    </div>
  );
};

export default AddVideogame;
