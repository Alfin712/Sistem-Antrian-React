import React, { useState } from 'react';
import Header from "./Header1";
import { Link } from "react-router-dom";
import { Modal } from 'react-bootstrap';

function CsIndex() {

    const [showModal, setShowModal] = useState(false);
    const [selectedPerson, setSelectedPerson] = useState(null);

    // Fungsi untuk menampilkan modal dengan informasi lengkap
    const showPersonInfo = (person) => {
        setSelectedPerson(person);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setSelectedPerson(null);
        setShowModal(false);
    };

    const peopleData = [
        {
            id: 1,
            status : "Process",
            name: "Ahmad Nur Bintang",
            number: "B 104",
            admin: "Agus Sehat",
            time: "10:02:31",
            date: "14-05-2023",
            phone: "08123456789",
            // Tambahkan informasi lain yang diperlukan
        },
        {
            id: 2,
            status : "Waiting",
            name: "Supriyanti Asmara",
            number: "B 105",
            admin: "Hermansyah",
            time: "11:22:52",
            date: "14-05-2023",
            phone: "08567890123",
            // Tambahkan informasi lain yang diperlukan
        },
        {
            id: 3,
            status : "Waiting",
            name: "Yusuf Mahmud",
            number: "B 106",
            admin: "Agus Sehat",
            time: "12:10:12",
            date: "14-05-2023",
            phone: "08351334551",
            // Tambahkan informasi lain yang diperlukan
        },
        {
            id: 4,
            status : "Waiting",
            name: "Rehan Genteng",
            number: "B 107",
            admin: "Agus Sehat",
            time: "15:02:11",
            date: "14-05-2023",
            phone: "08351334551",
            // Tambahkan informasi lain yang diperlukan
        },
        {
            id: 5,
            status : "Waiting",
            name: "Ady R",
            number: "B 108",
            admin: "Agus Sehat",
            time: "16:02:33",
            date: "14-05-2023",
            phone: "08351334551",
            // Tambahkan informasi lain yang diperlukan
        },
        {
            id: 6,
            status : "Waiting",
            name: "Farhan Kebab",
            number: "B 109",
            admin: "Agus Sehat",
            time: "17:52:20",
            date: "14-05-2023",
            phone: "08351334551",
            // Tambahkan informasi lain yang diperlukan
        },
        // Tambahkan data orang lain di sini
    ];

    return (
        <>
            <Header title={"Customer Services Ticket Information"} />
            <div className="text-white m-4 rounded bg-primary" style={{ height: "65vh" }}>
                <div style={{ height: "55vh", overflowY: "auto" }}>
                    <ul className="d-flex justify-content-center" style={{ listStyle: "none", paddingTop: "20px", paddingBottom: "20px", borderBottom: "1px solid white", display: "flex", justifyContent: "center" }}>
                        <li style={{ flex: 1, textAlign: "center" }}>Status</li>
                        <li style={{ flex: 2, textAlign: "center" }}>Name</li>
                        <li style={{ flex: 2, textAlign: "center" }}>Ticket Number</li>
                        <li style={{ flex: 2, textAlign: "center" }}>Tellers</li>
                        <li style={{ flex: 2, textAlign: "center" }}>Time</li>
                        <li style={{ flex: 1, textAlign: "center" }}>Date</li>
                    </ul>
                    {peopleData.map((person) => (
                        <ul
                            key={person.id}
                            className="d-flex justify-content-center"
                            style={{ listStyle: "none", paddingTop: "10px", paddingBottom: "20px", borderBottom: "1px solid white", display: "flex", justifyContent: "center" }}
                            onClick={() => showPersonInfo(person)}>
                            <li style={{ flex: 1, textAlign: "center" }}>{person.status}</li>
                            <li style={{ flex: 2, textAlign: "center" }}>{person.name}</li>
                            <li style={{ flex: 2, textAlign: "center" }}>{person.number}</li>
                            <li style={{ flex: 2, textAlign: "center" }}>{person.admin}</li>
                            <li style={{ flex: 2, textAlign: "center" }}>{person.time}</li>
                            <li style={{ flex: 1, textAlign: "center" }}>{person.date}</li>
                        </ul>
                    ))}
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end", marginRight: "50px", marginTop: "20px" }}>
                    <Link to="/dashboard/history-cs" className="btn btn-primary" style={{ width: "150px", background: "white", color: "blue" }} >
                        History
                    </Link>
                </div>
            </div>

            {/* Modal untuk menampilkan informasi lengkap */}
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Informasi Orang</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedPerson && (
                        <div>
                            <p>Nama: {selectedPerson.name}</p>
                            <p>Nomor HP: {selectedPerson.phone}</p>
                        </div>
                    )}
                </Modal.Body>
            </Modal>
        </>
    );
}

export default CsIndex;
