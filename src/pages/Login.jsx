import React from "react";
import AuLogin from "./../authentic/AuLogin";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header";
import { Link } from "react-router-dom";
import { useState } from "react";

function Login () {
  const marginatas = {
    marginTop: '100px'
  };

  const tinggi = {
    minHeight: "100vh",  
  }

  const [isHovered, setIsHovered] = useState(false);

  const registerLinkStyle = {
    color: "white",
    marginRight: "3px",
    textDecoration: "none",
    transition: "text-decoration 0.3s",
  };

  const registerLinkHoverStyle = {
    textDecoration: "underline",
  };
  
  return (
    <div className="bg-primary" style={tinggi}>
      <div>
        <Header />
      </div>
      <div>
        <AuLogin />
      </div>
      <div className="text-center text-blue d-flex justify-content-center" style={marginatas}>
        <p style={{ color: "white", marginRight: "3px" }}>Don't have an account? try</p>
        <Link
          to="/Register"
          className="text-white nav-link register-link"
          style={{
            ...registerLinkStyle,
            ...(isHovered && registerLinkHoverStyle),
          }}
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          Register
        </Link>  
      </div>
    </div>
  );
};

export default Login;
