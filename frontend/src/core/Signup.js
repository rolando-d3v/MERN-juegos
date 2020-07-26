import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const Signup = () => {

  const [datos, setDatos] = useState({
    name: "",
    email: ""
  })

  const obtenerDatos = (e) => {
    
  };

  return (
    <div className="container-fluid">
      <div className="row p-5">
        <div className="col-6 ">
          <div className="d-flex justify-content-center">
            <img
              src="https://dnsgamer.s3-accelerate.amazonaws.com/wp-content/uploads/2020/01/Tekken-7-Rematch.jpg"
              alt="logo"
              style={{ width: "70%", height: "70%" }}
            />
          </div>
        </div>
        <div className="col-6">
          <div className="d-flex justify-content-center ">
            <Form className="p-3 w-75 mt-5 border-success border">
              <h4 className="text-center">Sign Up Form</h4>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter email"
                  onChange={obtenerDatos}
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  onChange={obtenerDatos}
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={obtenerDatos}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
