import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import glogin from "./../assets/login.png";
import product from "./../assets/cubes.png";
import services from "./../assets/like.png";
import promo from "./../assets/bag.png";
import chat from "./../assets/chat.png";

const tinggi = {
    height: "739px",
    width: "13%"  
}

function Menu(){
    return(
        <div className="bg-primary" style={tinggi}>
            <nav style={{marginTop: "70px"}}>
            <ul className="li-nav" style={{display: "flex", flexDirection: "column", gap: "100px"}}>
            <li className="nav-link">
                    <Link to="/Login" className="text-white nav-link">
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <span className="d-none d-md-inline">Login</span>
                            <img src={glogin} style={{ height: "40px", width: "40px", marginLeft: "auto", marginRight: "20px" }}/>
                        </div>
                    </Link>
                </li>
                <li className="nav-link">
                    <Link to="#" className="text-white nav-link">
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <span className="d-none d-md-inline">Product</span>
                            <img src={product} style={{ height: "40px", width: "40px", marginLeft: "auto", marginRight: "20px" }}/>
                        </div>
                    </Link>
                </li>
                <li className="nav-link">
                    <Link to="#" className="text-white nav-link">
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <span className="d-none d-md-inline">Services</span>
                            <img src={services} style={{ height: "40px", width: "40px", marginLeft: "auto", marginRight: "20px" }}/>
                        </div>
                    </Link>
                </li>
                <li className="nav-link">
                    <Link to="#" className="text-white nav-link">
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <span className="d-none d-md-inline">Promo</span>
                            <img src={promo} style={{ height: "40px", width: "40px", marginLeft: "auto", marginRight: "20px" }}/>
                        </div>
                    </Link>
                </li>
                <li className="nav-link">
                    <Link to="#" className="text-white nav-link">
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <span className="d-none d-md-inline">Chat</span>
                            <img src={chat} style={{ height: "40px", width: "40px", marginLeft: "auto", marginRight: "20px" }}/>
                        </div>
                    </Link> 
                </li>
            </ul>
            </nav>
        </div>
    );
}

export default Menu;