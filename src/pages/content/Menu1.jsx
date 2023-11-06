import React from "react";
import { Link, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import glogin from "./../../assets/login.png";
import services from "./../../assets/undo.png";
import account from "./../../assets/user.png";

const tinggi = {
    minHeight: "100vh",
    display: "flex",   // Menggunakan Flexbox
    flexDirection: "column",  // Tampilkan elemen secara vertikal
    justifyContent: "center",  // Mendorong elemen ke bawah
    alignItems: "center",  // Meletakkan elemen di kiri
    paddingRight: "10px"
}

function Menu1() {
    const location = useLocation();
    const currentPath = location.pathname;

    const isPelangganPage = currentPath === "/dashboard/pelanggan";
    const isPelanggantellerPage = currentPath === "/dashboard/teller-ticket";
    const isPelanggancsPage = currentPath === "/dashboard/cs-ticket";
    const isAdmincsPage = currentPath === "/dashboard/cs";
    const isAdminHcsPage = currentPath === "/dashboard/history-cs";
    const isAdmintellerPage = currentPath === "/dashboard/teller";
    const isAdminHtellerPage = currentPath === "/dashboard/history-teller";

    return (
        <>
            {isPelangganPage && (
                <div className="bg-primary" style={tinggi}>
                    <nav>
                        <ul className="li-nav" style={{ display: "flex", flexDirection: "column", gap: "10vh" }}>
                            <li className="nav-link" style={{ marginBottom: "500px", marginTop: "30px" }}>
                                <Link to="/dashboard/pelanggan-account" className="text-white nav-link">
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <img src={account} style={{ height: "45px", width: "45px", marginRight: "20px" }} />
                                    </div>
                                </Link>
                            </li>
                            <li className="nav-link">
                                <Link to="/" className="text-white nav-link">
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <img src={glogin} style={{ height: "45px", width: "45px", marginRight: "20px" }} />
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            )}
            {isPelanggantellerPage && (
                <div className="bg-primary" style={tinggi}>
                    <nav>
                        <ul className="li-nav" style={{ display: "flex", flexDirection: "column", gap: "10vh" }}>
                            <li className="nav-link" style={{ marginBottom: "385px", marginTop: "30px" }}>
                                <Link to="/dashboard/pelanggan-account" className="text-white nav-link">
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <img src={account} style={{ height: "45px", width: "45px", marginRight: "20px" }} />
                                    </div>
                                </Link>
                            </li>
                            <li className="nav-link">
                                <Link to="/dashboard/pelanggan" className="text-white nav-link">
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <img src={services} style={{ height: "40px", width: "40px", marginLeft: "5px" }} />
                                    </div>
                                </Link>
                            </li>
                            <li className="nav-link">
                                <Link to="/" className="text-white nav-link">
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <img src={glogin} style={{ height: "45px", width: "45px", marginRight: "20px" }} />
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            )}
            {isPelanggancsPage && (
                <div className="bg-primary" style={tinggi}>
                    <nav>
                        <ul className="li-nav" style={{ display: "flex", flexDirection: "column", gap: "10vh" }}>
                            <li className="nav-link" style={{ marginBottom: "385px", marginTop: "30px" }}>
                                <Link to="/dashboard/pelanggan-account" className="text-white nav-link">
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <img src={account} style={{ height: "45px", width: "45px", marginRight: "20px" }} />
                                    </div>
                                </Link>
                            </li>
                            <li className="nav-link">
                                <Link to="/dashboard/pelanggan" className="text-white nav-link">
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <img src={services} style={{ height: "40px", width: "40px", marginLeft: "5px" }} />
                                    </div>
                                </Link>
                            </li>
                            <li className="nav-link">
                                <Link to="/" className="text-white nav-link">
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <img src={glogin} style={{ height: "45px", width: "45px", marginRight: "20px" }} />
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            )}
            {isAdmincsPage && (
                <div className="bg-primary" style={tinggi}>
                    <nav>
                        <ul className="li-nav" style={{ display: "flex", flexDirection: "column", gap: "10vh" }}>
                            <li className="nav-link" style={{ marginBottom: "500px", marginTop: "30px" }}>
                                <Link to="/dashboard/pelanggan-account" className="text-white nav-link">
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <img src={account} style={{ height: "45px", width: "45px", marginRight: "20px" }} />
                                    </div>
                                </Link>
                            </li>
                            <li className="nav-link">
                                <Link to="/" className="text-white nav-link">
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <img src={glogin} style={{ height: "45px", width: "45px", marginRight: "20px" }} />
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            )}
            {isAdminHcsPage && (
                <div className="bg-primary" style={tinggi}>
                    <nav>
                        <ul className="li-nav" style={{ display: "flex", flexDirection: "column", gap: "10vh" }}>
                            <li className="nav-link" style={{ marginBottom: "500px", marginTop: "30px" }}>
                                <Link to="/dashboard/pelanggan-account" className="text-white nav-link">
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <img src={account} style={{ height: "45px", width: "45px", marginRight: "20px" }} />
                                    </div>
                                </Link>
                            </li>
                            <li className="nav-link">
                                <Link to="/" className="text-white nav-link">
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <img src={glogin} style={{ height: "45px", width: "45px", marginRight: "20px" }} />
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            )}
            {isAdmintellerPage && (
                <div className="bg-primary" style={tinggi}>
                    <nav>
                        <ul className="li-nav" style={{ display: "flex", flexDirection: "column", gap: "10vh" }}>
                            <li className="nav-link" style={{ marginBottom: "500px", marginTop: "30px" }}>
                                <Link to="/dashboard/pelanggan-account" className="text-white nav-link">
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <img src={account} style={{ height: "45px", width: "45px", marginRight: "20px" }} />
                                    </div>
                                </Link>
                            </li>
                            <li className="nav-link">
                                <Link to="/" className="text-white nav-link">
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <img src={glogin} style={{ height: "45px", width: "45px", marginRight: "20px" }} />
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            )}{isAdminHtellerPage && (
                <div className="bg-primary" style={tinggi}>
                    <nav>
                        <ul className="li-nav" style={{ display: "flex", flexDirection: "column", gap: "10vh" }}>
                            <li className="nav-link" style={{ marginBottom: "500px", marginTop: "30px" }}>
                                <Link to="/dashboard/pelanggan-account" className="text-white nav-link">
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <img src={account} style={{ height: "45px", width: "45px", marginRight: "20px" }} />
                                    </div>
                                </Link>
                            </li>
                            <li className="nav-link">
                                <Link to="/" className="text-white nav-link">
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <img src={glogin} style={{ height: "45px", width: "45px", marginRight: "20px" }} />
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            )}
        </>
    );
}

export default Menu1;