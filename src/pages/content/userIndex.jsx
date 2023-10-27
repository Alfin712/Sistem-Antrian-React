import React from "react";
import Header from './Header1'
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function UserIndex() {
    return (
        <>
            <Header title={"Ticket Information"} />
            <div className="container mt-1 d-flex h-50 justify-content-center">
                <div className="m-5 shadow" style={{width: "400px"}}>
                    <div className="shadow rounded-top text-uppercase fs-3 d-flex align-items-center justify-content-center" style={{height: "100px"}}>
                        <span className="w-100 text-center">
                            Tellers Current Status
                        </span>
                    </div>
                    <div className="bg-primary h-75 shadow rounded-bottom d-flex align-items-center justify-content-center">
                        <span className="w-100 text-center text-white fs-1 fw-bolder">
                            A 102
                        </span>
                    </div>
                    <Link to="/dashboard/teller-ticket" className="text-white nav-link">
                        <div className="mt-5 text-primary shadow rounded text-uppercase d-flex align-items-center justify-content-center" style={{width: "250px", height: "80px", marginLeft: "70px"}}>
                            <span className="w-100 text-center fs-4">
                                Take Tellers Ticket
                            </span>
                        </div>
                    </Link>
                </div>
                <div className="m-5 shadow" style={{width: "400px"}}>
                    <div className="shadow rounded-top text-uppercase fs-3 d-flex align-items-center justify-content-center" style={{height: "100px"}}>
                        <span className="w-100 text-center m-5">
                            Customer Service Current Status
                        </span>
                    </div>
                    <div className="bg-primary h-75 shadow rounded-bottom d-flex align-items-center justify-content-center">
                        <span className="w-100 text-center text-white fs-1 fw-bolder">
                            B 102
                        </span>
                    </div>
                    <Link to="/dashboard/cs-ticket" className="text-white nav-link">
                        <div className="mt-5 text-primary shadow rounded text-uppercase d-flex align-items-center justify-content-center" style={{width: "250px", height: "80px", marginLeft: "70px"}}>
                            <span className="w-100 text-center fs-4">
                                Take Customers Service Ticket
                            </span>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default UserIndex;