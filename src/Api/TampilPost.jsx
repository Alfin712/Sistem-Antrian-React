import React, {useState, useEffect} from "react";
import axios from 'axios';

const TampilPost = () =>{
    const [posting, setPosting] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [isErr, setErr] = useState(false);
    useEffect(()=>{
        axios
            .get('https://jsonplaceholder.typicode.com/posts/')
            .then(res=>{
                console.log(res)
                setPosting(res.data);
                setLoading(false);
            })
            .catch(err=>{
                console.log(err);
                setErr(true);
            });
    },[]);

    return(
        <div>
            <h1>Daftar Posting</h1>
            <hr/>
            {isLoading && <div className="text-secondary">
                Loading...</div>
            }
            {isErr && <div className="text-danger">
                terjadi kesalahan akses REST API</div>
            }
            {posting.map((row)=>(
                <div key={row.id}>
                    <h3>{row.title}</h3>
                    <p>{row.body}</p>
                </div>
            ))}
        </div>
    )
}

export default TampilPost;