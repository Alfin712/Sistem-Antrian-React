import gambar from "./../../assets/bca.png";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function Header1(props) {
    const bgStyle = {
        backgroundColor: "rgba(169, 169, 169, 0.7)",
        minHeight: "210px"
    };

    const headerTextStyle = {
        color: "black",
        fontSize: "42px",
        fontFamily: "Bahnschrift SemiBold",
        marginLeft: "50px",
        marginTop: "10px" 
    };

    return (
        <div>
            <div style={bgStyle}>
                <Link to="/" className="text-decoration-none">
                    <img src={gambar} style={{ height: "110px", width: "150px", marginLeft: "50px", marginTop: "10px" }}/>
                </Link>
                <h1 style={headerTextStyle}>{props.title}</h1>
            </div>
        </div>
    )
  }
  
  export default Header1;