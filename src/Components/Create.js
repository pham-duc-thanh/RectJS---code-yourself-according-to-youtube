import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import '../styles/create.css'

const URL_USER = "https://65f64ed641d90c1c5e0ab776.mockapi.io/api/users";

const Create = () => {
  const [values, setValues] = useState({
    fullname: "",
    username: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({
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
      fullname: newVal ,
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

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!values.fullname.trim()) {
      setErrors((prev) => ({
        ...prev,
        fullname: "Hãy nhập fullname"
      }));
      return; // Dừng hàm handleSubmit nếu có lỗi
    } else if(!values.username.trim()) {
      setErrors((prev) => ({
        ...prev,
        username: "Hãy nhập username"
      }));
      return; // Dừng hàm handleSubmit nếu có lỗi
    } else if(!values.email.trim()) {
      setErrors((prev) => ({
        ...prev,
        email: "Hãy nhập email"
      }));
      return; // Dừng hàm handleSubmit nếu có lỗi
    } else if(!values.phone.trim()) {
      setErrors((prev) => ({
        ...prev,
        phone: "Hãy nhập phone"
      }));
      return; // Dừng hàm handleSubmit nếu có lỗi
    }

    axios
      .post(URL_USER, values)
      .then((res) => {
        console.log("res...", res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container-create">
      {/* w-50 border bg-white shadow px-5 pt-3 pb-5 rounded */}
      <div className="create-list-card">
        <h1>Add a User</h1>
        <form onSubmit={handleSubmit}>
          <div className="container-input">
            <label htmlFor="name">FullName:</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Enter Name"
              onChange={handleChangeFullname}
            />
             
          </div>
          <p style={{color: "red"}} className="error">{errors.fullname}</p>

          <div className="container-input">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              name="username"
              className="input"
              placeholder="Enter Username"
              onChange={handleChangeUsername}
            />
          </div>
          <p style={{color: "red"}} className="error">{errors.username}</p>

          <div className="container-input">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Enter Email"
              onChange={handleChangeEmail}
            />
          </div>
          <p style={{color: "red"}} className="error">{errors.email}</p>

          <div className="container-input">
            <label htmlFor="phone">Phone:</label>
            <input
              type="text"
              name="phone"
              className="input"
              placeholder="Enter Phone"
              onChange={handleChangePhone}
            />
          </div>
          <p style={{color: "red"}} className="error">{errors.phone}</p>

          <div className="container-btn">
            <button
              className="btn btn-success"
            >
              Submit
            </button>
            <Link to="/" className="btn btn-primary ms-3">
              Back
            </Link>
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default Create;
