import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { isAuthenticated, createCategory } from "./apiCore";

const AddCategory = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const { user, token } = isAuthenticated();

  const obtenerDatos = (e) => {
    setError("");
    setName(e.target.value);
  };

  const agregarCategory = (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    createCategory(user._id, token, { name }).then((data) => {
      if (data.error) {
        setError(true);
      } else {
        setError("");
        setSuccess(true);
      }
    });
  };

  const showSuccess = () => {
    if (success) {
      return (
        <Alert className="alert-success alert">
          {" "}
          la categoria {name} se ha creado{" "}
        </Alert>
      );
    }
  };

  const showError = () => {
    if (error) {
      return (
        <Alert className="alert-danger alert">
          la categoria {name} ya existe
        </Alert>
      );
    }
  };

  const goBack = () => (
    <div className="m-3">
      <Link to="/" className="text-warning">
        Back Dashboard{" "}
      </Link>
    </div>
  );

  return (
    <div className="container d-flex justify-content-center">
      <Form className="mt-5 col-7 " onSubmit={agregarCategory}>
        <h4>Add New Category</h4>
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Ingresa Categoria"
            onChange={obtenerDatos}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Crear Category
        </Button>
        {goBack()}
        <div>
          {showError()}
          {showSuccess()}
        </div>
      </Form>
    </div>
  );
};

export default AddCategory;
