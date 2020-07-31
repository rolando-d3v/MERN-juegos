import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Form, Button, Alert } from "react-bootstrap";
import { signin, authenticate, isAuthenticated } from "./apiCore";

const Signin = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    redirectToReferrer: false,
  });

  useEffect(() => {}, []);

  const { email, password, loading, error, redirectToReferrer } = values;
  const { user } = isAuthenticated();

  const obtenerData = (e) => {
    setValues({
      ...values,
      error: false,
      [e.target.name]: e.target.value,
    });
  };

  const enviarData = (e) => {
    e.preventDefault();
    setValues({ ...values, error: false, loading: true });
    signin({ email, password }).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, loading: false });
      } else {
        authenticate(data, () => {
          setValues({
            ...values,
            redirectToReferrer: true,
          });
        });
      }
    });
  };

  const redirectUser = () => {
    if (redirectToReferrer) {
      if (user && user.role === 1) {
        return <Redirect to="/admin/dashboard" />;
      } else {
        return <Redirect to="/" />;
      }
    }
    if (isAuthenticated()) {
      return <Redirect to="/" />;
    }
  };

  const showError = () => <Alert className="alert-danger alert"
  style={{display: error ? '' : 'none'}}
  >{error}</Alert>;

  const showLoading = () =>
    loading && (
      <Alert className="alert-info alert">
        {" "}
        <h3>Cargando...</h3>{" "}
      </Alert>
    );

  return (
    <div className="container-fluid">
      <div className="row p-5">
        <div className="col-6 ">
          <div className="d-flex justify-content-center">
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/81EonCXB05L._AC_SX425_.jpg"
              alt="logo"
              style={{ width: "78%", height: "78%" }}
            />
          </div>
        </div>
        <div className="col-6">
          <div className="d-flex justify-content-center">
            <Form className="p-3 w-75 mt-5" onSubmit={enviarData}>
              <h4 className="text-center">Login</h4>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={obtenerData}
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={obtenerData}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
          {showError()}
      {showLoading()}
      {redirectUser()}
        </div>
      </div>
    </div>
  );
};

export default Signin;
