import React, {useState, useEffect} from "react";
import axios from 'axios';

const AmbilDataSemua = () => {
    const [no, setNomor]            = useState(1);
    const [produk, setProduk]       = useState([]);
    const [isLoading, setLoading]   = useState(true);
    const [isErr, setErr]           = useState(false);

    useEffect(()=>{
        axios
            .get('http://localhost/tugas15/dataproduk.php')
            .then(res=>{
                console.log(res)
                setProduk(res.data);
                setLoading(false);
            })
            .catch(err=>{
                console.log(err);
                setErr(true);
            });
    },[]);

    return(
        <div>
            <h1>Data Produk</h1>
            <hr/>
            {isLoading && <div className="text-secondary">
                Loading...</div>
            }
            {/* {isErr && <div className="text-danger">
                terjadi kesalahan akses REST API</div>
            } */}

            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Kode</th>
                        <th scope="col">Jenis</th>
                        <th scope="col">Merk</th>
                        <th scope="col">Harga</th>
                    </tr>
                </thead>

                <tbody>
                    {produk.map((row,idx)=>(
                        <tr key={row.kode}>
                            <td>{idx+1}</td>
                            <td>{row.kode}</td>
                            <td>{row.jenis}</td>
                            <td>{row.merk}</td>
                            <td>{row.harga}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default AmbilDataSemua;