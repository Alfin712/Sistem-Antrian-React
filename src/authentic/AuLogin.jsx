import React, { useState } from "react";
import { Container, Form, Button, Modal } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/style.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AuLoginV from "./AuLoginV";

function Login() {
  const [loginForm, setLogin] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const handleLogin = (e) => {
    const { name, value } = e.target;
    setLogin({ ...loginForm, [name]: value });
  };
  const [isFormValid, setIsFormValid] = useState(true);

  const [userRole, setuserRole] = useState('');

  const navigate = useNavigate();
  const handleRedirect = () => {
    switch (userRole) {
      case 'cs':
        navigate('/dashboard/cs');
        break;
      case 'teller':
        navigate('/dashboard/teller');
        break;
      case 'pelanggan':
        navigate('/dashboard/pelanggan');
        break;
      default:
        navigate('/');
        break;
    }
  }

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const validationErrors = AuLoginV(loginForm);
    setErrors(validationErrors);

    // Periksa apakah ada error validasi
    if (
      validationErrors.roll ||
      validationErrors.email ||
      validationErrors.password
    ) {
      // Jika ada error, tandai formulir sebagai tidak valid
      setIsFormValid(false);
    } else {
      // Jika tidak ada error, tandai formulir sebagai valid
      setIsFormValid(true);
    }
    if (isFormValid) {
      // Jika formulir valid, kirim permintaan
      axios.post('http://localhost:5000/', loginForm)
        .then((res) => {
          if (res.data.status === "Success") { // Memeriksa status "Success" dari respons
            const userRole = res.data.role; // Mengambil peran dari respons
            if (userRole) {
              setuserRole(userRole); // Mengatur peran dari respons server
              handleRedirect();
            } else {
              alert("Peran tidak ditemukan dalam respons server");
            }
          } else {
            alert("Data tidak ada");
          }
        })
        .catch((err) => {
          console.log(err);
        });

    } else {
      // Jika formulir tidak valid, tidak perlu mengirim permintaan
      alert("Terdapat kesalahan pada form. Periksa kembali.");
    }
  };

  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');
  const [forgotPassword, setForgotPassword] = useState('');

  const handleShowForgotPasswordModal = () => {
    setShowForgotPasswordModal(true);
  };

  const handleCloseForgotPasswordModal = () => {
    setShowForgotPasswordModal(false);
  };

  const handleForgotEmailChange = (e) => {
    setForgotEmail(e.target.value);
  };
  const handleForgotPasswordChange = (e) => {
    setForgotPassword(e.target.value);
  };

  const handleForgotPasswordSubmit = (e) => {
    e.preventDefault();
    // Implementasi logika untuk mengirim permintaan reset password ke backend
    // Pastikan untuk memvalidasi alamat email dan menangani respons dari backend.
    // Anda dapat menggunakan Axios atau fetch untuk mengirim permintaan ke API reset password.

    // Setelah permintaan berhasil dikirim, Anda dapat menampilkan pesan sukses atau menutup modal.
    handleCloseForgotPasswordModal();
  };

  const [isHovered, setIsHovered] = useState(false);

  const registerLinkStyle = {
    color: "blue",
    marginRight: "3px",
    textDecoration: "none",
    transition: "text-decoration 0.3s",
  };

  const registerLinkHoverStyle = {
    color: "black",
    textDecoration: "underline",
  };


  return (
    <Container className="bg-white rounded custom-width custom-height">
      <h2 className="mt-3 pt-4 text-primary ms-5">Account Login</h2>
      <Form className="mt-5 custom-width-2" onSubmit={handleLoginSubmit}>
        <Form.Group controlId="email">
          <Form.Label className="text-black-50">Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            onChange={handleLogin} />
          {errors.email && <div className="text-danger">{errors.email}</div>}
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label className="text-black-50">Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            onChange={handleLogin} />
          {errors.password && <div className="text-danger">{errors.password}</div>}
        </Form.Group>

        <Button className="mt-5" variant="primary" type="submit">
          Login
        </Button>

        <Button
          className="mt-3 text-decoration-none"
          variant="link"
          onClick={handleShowForgotPasswordModal}
          style={{
            ...registerLinkStyle,
            ...(isHovered && registerLinkHoverStyle),
          }}
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}>
          Forgot Password?
        </Button>
      </Form>

      <Modal className="d-flex justify-content-center align-items-center" show={showForgotPasswordModal} onHide={handleCloseForgotPasswordModal}>
        <h2 className="mt-4 text-primary ms-5">Reset Account</h2>
        <Modal.Body>
          <Form className="mt-3" style={{ width: "400px", marginLeft: "35px", marginRight: "35px" }} onSubmit={handleForgotPasswordSubmit}>
            <Form.Group controlId="forgotEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={forgotEmail}
                onChange={handleForgotEmailChange}
              />
            </Form.Group>
            <Form.Group controlId="forgotPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={forgotPassword}
                onChange={handleForgotPasswordChange}
              />
            </Form.Group>
            <Button className="mt-5 mb-3" variant="primary" type="submit">
              Reset Password
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default Login;
