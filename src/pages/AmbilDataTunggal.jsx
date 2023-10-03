import React, {useState, useEffect} from "react";
import axios from 'axios';

const AmbilDataTunggal = () => {
    const [produk, setProduk]       = useState({});
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
            
            <p>Kode     : {produk.kode}</p>
            <p>Nama     : {produk.jenis}</p>
            <p>Kategori : {produk.merk}</p>
            <p>Harga    : {produk.harga}</p>
        </div>
    )
}

export default AmbilDataTunggal;