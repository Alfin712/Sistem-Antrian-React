import React, { useEffect, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import AuRegisterV from "./AuRegisterV";

function Register() {

  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(true);
  const navigate = useNavigate();

  const [RegisterForm, setRegisterForm] = useState({
    nama_pelanggan: '',
    email: '',
    password: '',
    password_confirmation: ''
  });

  const handleRegisterFormChange = (e) => {
    const { name, value } = e.target;
    setRegisterForm({ ...RegisterForm, [name]: value });
  };

  useEffect(() => {
    axios.get('http://localhost:5000/Register')
      .then(res => setRegisterForm(res.data)) // Ini perlu diperbaiki, jika tidak diperlukan, Anda bisa menghapusnya
      .catch(err => console.log(err));
  }, []);

  function handleRegister(e) {
    e.preventDefault();
    const validationErrors = AuRegisterV(RegisterForm);
    setErrors(validationErrors);

    // Periksa apakah ada error validasi
    if (
      validationErrors.nama_pelanggan ||
      validationErrors.email ||
      validationErrors.password ||
      validationErrors.confirmPassword
    ) {
      // Jika ada error, tandai formulir sebagai tidak valid
      setIsFormValid(false);
    } else {
      // Jika tidak ada error, tandai formulir sebagai valid
      setIsFormValid(true);
    }
    if (isFormValid){
       axios.post('http://localhost:5000/Register', RegisterForm)
      .then((res) => {
        setRegisterForm(res); // Ini sebaiknya diperbaiki sesuai kebutuhan aplikasi Anda
        navigate('/dashboard/pelanggan'); // Redirect ke halaman setelah registrasi
      })
      .catch(err => console.log(err));
    } else {
      // Jika formulir tidak valid, tidak perlu mengirim permintaan
      alert("Terdapat kesalahan pada form. Periksa kembali.");
    }
   
  }

  return (
    <Container className="bg-white rounded" style={{ width: "500px", height: "450px" }}>
      <h2 className="mt-3 pt-3 text-primary ms-5">Register</h2>
      <Form onSubmit={handleRegister} className="mt-4 custom-width-2">

        <Form.Group controlId="name">
          <Form.Label className="text-black-50">Name</Form.Label>
          <Form.Control
            type="name"
            name="nama_pelanggan"
            onChange={handleRegisterFormChange}
          />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label className="text-black-50">Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            onChange={handleRegisterFormChange}
          />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label className="text-black-50">Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            onChange={handleRegisterFormChange}
          />
        </Form.Group>

        <Form.Group controlId="password_confirmation">
          <Form.Label className="text-black-50">Password Confirmation</Form.Label>
          <Form.Control
            type="password"
            onChange={handleRegisterFormChange}
          />
        </Form.Group>

        <Button className="mt-4 " variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </Container>
  );
}

export default Register;
