import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom';
import '../styles/home.css'

const URL_USER = "https://65f64ed641d90c1c5e0ab776.mockapi.io/api/users";

const Home = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get(URL_USER)
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }, []);

    const handleDelete = (id) => {
        const confirm = window.confirm("MuỐn xoá à ?");

        if(confirm) {
            axios.delete(`${URL_USER}/${id}`)
                .then(res => {
                    navigate("/");
                })
                .catch(err => console.log(err));
        }
    }

    const navigate = useNavigate();
  return (

    // user-list-card, 
    <div className='user-list-container'>
        <h1>List of Users</h1>
        <div className='user-list-card'>
            <div className='card-header'>
                <Link to="/create" className='btn-add'>Add +</Link>
            </div>

            {/* table table-striped */}
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>FullName</td>
                        <td>Username</td>
                        <td>Email</td>
                        <td>Phone</td>
                        <td>Action</td>
                    </tr>
                </thead>

                <tbody>

                    {
                        data.map((d, i) => (
                            <tr key={i}>
                                <td>{d.id}</td>
                                <td>{d.fullname}</td>
                                <td>{d.username}</td>
                                <td>{d.email}</td>
                                <td>{d.phone}</td>
                                <td>
                                    <Link to={`/read/${d.id}`} className='btn-read'>Read</Link>
                                    <Link to={`/update/${d.id}`} className='btn-edit'>Edit</Link>
                                    <button onClick={e => handleDelete(d.id)} className='btn-delete'>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Home