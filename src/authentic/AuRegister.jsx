import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import "../css/style.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Register() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    
    try {
    await axios.post('/register', {name, email, password, password_confirmation});
      setEmail("");
      setPassword("");
      setPasswordConfirmation("");
      setName("");
      navigate("/dashboard/user")
    } catch(e){
      console.log(e);
      }
    }

  return (
    <Container className="bg-white rounded" style={{width: "500px", height: "450px"}}>
      <h2 className="mt-3 pt-3 text-primary ms-5">Register</h2>
      <Form onSubmit={handleRegister} className="mt-4 custom-width-2">

        <Form.Group controlId="name">
          <Form.Label className="text-black-50">Name</Form.Label>
          <Form.Control
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

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

        <Form.Group controlId="password_confirmation">
          <Form.Label className="text-black-50">Password Confirmation</Form.Label>
          <Form.Control
            type="password"
            value={password_confirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
        </Form.Group>

        <Button className="mt-4 " variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </Container>
  );

};

export default Register;
