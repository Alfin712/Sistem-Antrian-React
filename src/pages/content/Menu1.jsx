import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import glogin from "./../../assets/login.png";
import services from "./../../assets/ticket.png";

const tinggi = {
    minHeight: "100vh", 
    display: "flex",   // Menggunakan Flexbox
    flexDirection: "column",  // Tampilkan elemen secara vertikal
    justifyContent: "flex-end",  // Mendorong elemen ke bawah
    alignItems: "flex-start",  // Meletakkan elemen di kiri
}

function Menu1() {
    return (
        <div className="bg-primary" style={tinggi}>
            <nav>
                <ul className="li-nav" style={{ display: "flex", flexDirection: "column", gap: "10vh" }}>
                    <li className="nav-link">
                        <Link to="/dashboard/pelanggan" className="text-white nav-link">
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <img src={services} style={{ height: "40px", width: "40px", marginRight: "20px" }} />
                            </div>
                        </Link>
                    </li>
                    <li className="nav-link">
                        <Link to="/" className="text-white nav-link">
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <img src={glogin} style={{ height: "40px", width: "40px", marginRight: "20px" }} />
                            </div>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Menu1;
