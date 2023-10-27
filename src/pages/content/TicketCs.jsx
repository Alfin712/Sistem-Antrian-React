import React, { useState } from 'react';
import Header from "./Header1";
import { Link } from "react-router-dom";
import { Modal, Button, Form } from 'react-bootstrap';

function TicketCs() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lakukan sesuatu dengan data formulir
        handleClose();
    };

    return (
        <>
            <Header title={"Customer Service Counter Ticket"} />
            <div className="container">
                <div>
                    <div className="d-flex align-items-center mt-1 ms-5 p-5" style={{ height: "55vh" }}>
                        <div style={{ height: "250px", width: "350px", marginRight: "80px" }}>
                            <div className="rounded-top shadow-lg text-primary text-center p-2">
                                <span className="fs-2">
                                    Current Status
                                </span>
                            </div>
                            <div className="bg-primary rounded-bottom shadow text-white text-center d-flex justify-content-center align-items-center" style={{ height: "200px" }}>
                                <span style={{ fontSize: "60px" }}>
                                    B 102
                                </span>
                            </div>
                        </div>
                        <div>
                            <div style={{ marginLeft: "20px" }}>
                                <span style={{ fontSize: "30px", fontWeight: "500" }}>
                                    Waiting List
                                </span>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", marginTop: "20px" }}>
                                <div style={{ display: "flex", flexDirection: "row", marginBottom: "40px" }}>
                                    <div className="bg-primary rounded shadow text-white text-center d-flex justify-content-center align-items-center" style={{ height: "100px", width: "170px", marginRight: "40px" }}>
                                        <span style={{ fontSize: "40px" }}>
                                            B 103
                                        </span>
                                    </div>
                                    <div className="bg-primary rounded shadow text-white text-center d-flex justify-content-center align-items-center" style={{ height: "100px", width: "170px", marginRight: "40px" }}>
                                        <span style={{ fontSize: "40px" }}>
                                            B 104
                                        </span>
                                    </div>
                                    <div className="bg-primary rounded shadow text-white text-center d-flex justify-content-center align-items-center" style={{ height: "100px", width: "170px", marginRight: "40px" }}>
                                        <span style={{ fontSize: "40px" }}>
                                            B 105
                                        </span>
                                    </div>
                                </div>
                                <div style={{ display: "flex", flexDirection: "row", marginBottom: "40px" }}>
                                    <div className="bg-primary rounded shadow text-white text-center d-flex justify-content-center align-items-center" style={{ height: "100px", width: "170px", marginRight: "40px" }}>
                                        <span style={{ fontSize: "40px" }}>
                                            B 106
                                        </span>
                                    </div>
                                    <div className="bg-primary rounded shadow text-white text-center d-flex justify-content-center align-items-center" style={{ height: "100px", width: "170px", marginRight: "40px" }}>
                                        <span style={{ fontSize: "40px" }}>
                                            B 107
                                        </span>
                                    </div>
                                    <div className="bg-primary rounded shadow text-white text-center d-flex justify-content-center align-items-center" style={{ height: "100px", width: "170px", marginRight: "40px" }}>
                                        <span style={{ fontSize: "40px" }}>
                                            B 108
                                        </span>
                                    </div>
                                    <div className="bg-primary rounded shadow-lg" style={{ height: "40px", width: "100px", marginTop: "60px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                                        <span style={{ fontSize: "20px", color: "white" }}>
                                            +10 more
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-start", marginLeft: "95px" }}>
                    <Button variant="white" className="btn shadow-lg rounded" onClick={handleShow}>
                        Take Ticket
                    </Button>
                </div>
                <Modal show={show} onHide={handleClose} centered>
                    <div className="bg-primary text-white p-3 rounded shadow">
                        <Modal.Header style={{ border: 'none' }}>
                            <Modal.Title>Form Ticket</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                                    <Form.Label>WhatsApp Number</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                                <a
                                    href="#"  // Ganti dengan path gambar yang ingin Anda unduh
                                    download="ticket.png" // Ganti dengan nama gambar yang sesuai
                                    className="btn shadow-lg float-end mb-3 mt-5"
                                    variant="light" type="submit"
                                    style={{ background: 'transparent', border: '1px solid white', borderRadius: '10px', color: 'white' }}>
                                    Download
                                </a>
                            </Form>
                        </Modal.Body>
                    </div>
                </Modal>
            </div>


        </>
    )
}

export default TicketCs;