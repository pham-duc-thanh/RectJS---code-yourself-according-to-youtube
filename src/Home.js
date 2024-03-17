import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom';

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
    <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
        <h1>List of Users</h1>
        <div className='w-75 rounded bg-white border shadow p-4'>
            <div className='d-flex justify-content-end'>
                <Link to="/create" className='btn btn-success'>Add +</Link>
            </div>
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
                                    <Link to={`/read/${d.id}`} className='btn btn-sm btn-info me-2'>Read</Link>
                                    <Link to={`/update/${d.id}`} className='btn btn-sm btn-primary me-2'>Edit</Link>
                                    <button onClick={e => handleDelete(d.id)} className='btn btn-sm btn-danger'>Delete</button>
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