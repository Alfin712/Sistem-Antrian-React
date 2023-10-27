import gambar from "./../assets/bca.png";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {

    return (
        <div>
            <div>
                <img src={gambar} style={{ height: "110px", width: "150px", marginLeft: "50px", marginTop: "10px" }} />
                <Outlet />
            </div>
            <div className="text-white d-flex justify-content-center align-items-center">
                <span style={{ fontSize: '40px', fontWeight: 'bolder', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                    Ticket Centre
                </span>
            </div>
        </div>
    )
}

export default Header;