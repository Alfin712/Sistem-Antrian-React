import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import "../css/style.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle Register logic here
  };

  return (
    <Container className="bg-white rounded custom-width custom-height">
      <h2 className="mt-5 pt-4 text-primary ms-5">Register</h2>
      <Form onSubmit={handleSubmit} className="mt-5 custom-width-2">
        <Form.Group controlId="email">
          <Form.Label className="text-black-50">Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label className="text-black-50">Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button className="mt-5 " variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </Container>
  );
};

export default Register;
