import gambar from "./../assets/bcaputih.png";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
    return (
        <div>
            <Link to="/" className="text-decoration-none">
                <img src={gambar} style={{height: "100px", width: "150px", marginLeft: "50px", marginTop: "20px" }}/>
            </Link>
            <Outlet/>
        </div>       
    )
  }
  
  export default Header;