import React from "react";
import AuRegister from "../authentic/AuRegister";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header";
import { Link } from "react-router-dom";
import { useState } from "react";

function Register () {
  const marginatas = {
    marginTop: '100px'
  };

  const tinggi = {
    minHeight: "100vh",  
  }

  const [isHovered, setIsHovered] = useState(false);

  const backLinkStyle = {
    color: "white",
    marginRight: "3px",
    textDecoration: "none", 
    transition: "text-decoration 0.3s", 
  };

  const backLinkHoverStyle = {
    textDecoration: "underline", 
  };

  return (
    <div className="bg-primary" style={tinggi}>
      <div>
        <Header />
      </div>
      <div>
        <AuRegister />
      </div>
      <div className="text-center text-blue" style={marginatas}>
        <Link
          to="/Login"
          className="text-white nav-link"
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
          Back
        </Link>  
      </div>
    </div>
  );
};

export default Register;
