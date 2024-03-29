import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const URL_USER = "https://65f64ed641d90c1c5e0ab776.mockapi.io/api/users";

const Create = () => {
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

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(URL_USER, values)
      .then((res) => {
        console.log("res...", res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h1>Add a User</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlFor="name">FullName:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter Name"
              onChange={handleChangeFullname}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="username">FullName:</label>
            <input
              type="text"
              name="username"
              className="form-control"
              placeholder="Enter Username"
              onChange={handleChangeUsername}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter Email"
              onChange={handleChangeEmail}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="phone">Phone:</label>
            <input
              type="text"
              name="phone"
              className="form-control"
              placeholder="Enter Phone"
              onChange={handleChangePhone}
            />
          </div>
          <button
            className="btn btn-success
            "
          >
            Submit
          </button>
          <Link to="/" className="btn btn-primary ms-3">
            Back
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Create;
