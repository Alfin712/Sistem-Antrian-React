import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import axios from "axios"; // Impor Axios
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/style.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: email,
      password: password,
    };

    const loginUrl = "https://localhost/api.php/login";

    // Menggunakan Axios untuk mengirim data ke backend
    axios.post(loginUrl, data)
      .then(response => {
        // Handle respons dari backend jika login berhasil
        console.log("Login berhasil:", response.data);
        // Tambahkan logika untuk mengarahkan pengguna jika diperlukan
      })
      .catch(error => {
        // Handle error jika login gagal
        console.error("Login gagal:", error);
        // Tambahkan logika untuk menampilkan pesan kesalahan kepada pengguna jika diperlukan
      });
  };

  return (
    <Container className="bg-white rounded custom-width custom-height">
      <h2 className="mt-5 pt-4 text-primary ms-5">Account Login</h2>
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
          Login
        </Button>
      </Form>

    </Container>
  );
}

export default Login;
