import React from "react";
import AuRegister from "../authentic/AuRegister";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header";
import { Link } from "react-router-dom";
import { useState } from "react";

function Register () {
  const marginatas = {
    marginTop: '30px'
  };

  const tinggi = {
    minHeight: "100vh",  
  }

  const [isHovered, setIsHovered] = useState(false);

  const backLinkStyle = {
    color: "blue",
    marginRight: "3px",
    textDecoration: "none", 
    transition: "text-decoration 0.3s", 
  };

  const backLinkHoverStyle = {
    color: "white",
    textDecoration: "underline", 
  };

  return (
    <div style={tinggi}>
      <div>
        <Header />
      </div>
      <div>
        <AuRegister />
      </div>
      <div className="text-center text-blue d-flex justify-content-center" style={marginatas}>
        <p style={{ color: "white", marginRight: "3px" }}>Already have an account? try</p>
        <Link
          to="/"
          className="nav-link"
          style={{
            ...backLinkStyle,
            ...(isHovered && backLinkHoverStyle),
          }}
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          Login
        </Link>  
      </div>
    </div>
  );
};

export default Register;
