import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import glogin from "./../../assets/user.png";
import product from "./../../assets/cubes.png";
import services from "./../../assets/like.png";
import promo from "./../../assets/bag.png";
import chat from "./../../assets/chat.png";

const tinggi = {
    minHeight: "100vh", 
    minHwidth: "7vh"  
}

function Menu1(){
    return(
        <div className="bg-primary" style={tinggi}>
            <nav style={{marginTop: "70px"}}>
            <ul className="li-nav" style={{display: "flex", flexDirection: "column", gap: "14vh", marginRight: "30px"}}>
            <li className="nav-link">
                    <Link to="/Login" className="text-white nav-link">
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <img src={glogin} style={{ height: "40px", width: "40px" }}/>
                        </div>
                    </Link>
                </li>
                <li className="nav-link">
                    <Link to="#" className="text-white nav-link">
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <img src={product} style={{ height: "40px", width: "40px" }}/>
                        </div>
                    </Link>
                </li>
                <li className="nav-link">
                    <Link to="#" className="text-white nav-link">
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <img src={services} style={{ height: "40px", width: "40px" }}/>
                        </div>
                    </Link>
                </li>
                <li className="nav-link">
                    <Link to="#" className="text-white nav-link">
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <img src={promo} style={{ height: "40px", width: "40px" }}/>
                        </div>
                    </Link>
                </li>
                <li className="nav-link">
                    <Link to="#" className="text-white nav-link">
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <img src={chat} style={{ height: "40px", width: "40px" }}/>
                        </div>
                    </Link> 
                </li>
            </ul>
            </nav>
        </div>
    );
}

export default Menu1;