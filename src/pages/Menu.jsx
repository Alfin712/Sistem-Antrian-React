import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const tinggi = {
    height: "735px",
    width: "250px"  
}

const lis = {
    style: "none"
}

function Menu(){
    return(
        <div className="bg-primary container-fluid" style={tinggi}>
            <nav>
            <ul className="li-nav" style={{display: "flex", flexDirection: "column", gap: "100px"}}>
                <li className="nav-link">
                    <Link to="/" className="text-white nav-link">Home</Link>
                </li>
                <li className="nav-link">
                    <Link to="/Login" className="text-white nav-link">Login</Link>
                </li>
                <li className="nav-link">
                    <Link to="/Register" className="text-white nav-link">Register</Link>
                </li>
            </ul>
            </nav>
        </div>
    );
}

export default Menu;