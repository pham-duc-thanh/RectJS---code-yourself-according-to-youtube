import React, { useEffect, useState } from 'react'
import { Link,  useNavigate,  useParams } from 'react-router-dom'
import axios from "axios";
import '../styles/update.css'

const URL_USER = "https://65f64ed641d90c1c5e0ab776.mockapi.io/api/users";

const Update = () => {

  // const [data, setData] = useState([]);
  const { id } = useParams();
  const [values, setValues] = useState({
    fullname: "",
    username: "",
    email: "",
    phone: "",
  });

  const handleChangeFullname = (e) => {
    const newVal = e.target.value;
    console.log("newVal...", newVal);

    setValues((prev) => ({
      ...prev,
      fullname: newVal,
    }));
  };

  const handleChangeUsername = (e) => {
    const newVal = e.target.value;
    console.log("newVal...", newVal);

    setValues((prev) => ({
      ...prev,
      username: newVal,
    }));
  };

  const handleChangeEmail = (e) => {
    const newVal = e.target.value;
    console.log("newVal...", newVal);

    setValues((prev) => ({
      ...prev,
      email: newVal,
    }));
  };

  const handleChangePhone = (e) => {
    const newVal = e.target.value;
    console.log("newVal...", newVal);

    setValues((prev) => ({
      ...prev,
      phone: newVal,
    }));
  };

  

  useEffect(() => {
    axios
      .get(`${URL_USER}/${id}`)
      .then(res => setValues(res.data))
      .catch((err) => console.log(err));
  }, []);

  const navigate = useNavigate();
  
  const handleUpdate = (e) => {
    e.preventDefault(); 

    const URL_USER = "https://65f64ed641d90c1c5e0ab776.mockapi.io/api/users";
    axios.put(URL_USER + "/" + id, values)
      .then((res) => {
        console.log("res...", res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="container-update">
      <div className="update-list-card">
        <h1>Update User</h1>
        <form onSubmit={handleUpdate}>
          <div className="container-input">
            <label htmlFor="name">FullName:</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Enter Name"
              value={values.fullname}
              onChange={handleChangeFullname}
            />
          </div>

          <div className="container-input">
            <label htmlFor="username">FullName:</label>
            <input
              type="text"
              name="username"
              className="input"
              placeholder="Enter Username"
              value={values.username}
              onChange={handleChangeUsername}
            />
          </div>

          <div className="container-input">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Enter Email"
              value={values.email}
              onChange={handleChangeEmail}
            />
          </div>

          <div className="container-input">
            <label htmlFor="phone">Phone:</label>
            <input
              type="text"
              name="phone"
              className="input"
              placeholder="Enter Phone"
              value={values.phone}
              onChange={handleChangePhone}
            />
          </div>

          <div className='container-btn'>
            <button
              className="btn btn-success"
            >
              Update
            </button>
            <Link to="/" className="btn btn-primary ms-3">
              Back
            </Link>
          </div>
          
        </form>
      </div>
    </div>
  )
}

export default Update