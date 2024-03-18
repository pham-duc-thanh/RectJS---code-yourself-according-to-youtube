import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import '../styles/read.css'

const URL_USER = "https://65f64ed641d90c1c5e0ab776.mockapi.io/api/users";

const Read = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${URL_USER}/${id}`)
      .then(res => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container-read">
      {/* w-50 border bg-white shadow px-5 pt-3 pb-5 rounded */}
      <div className="read-list-card">
        <h3>Detail of User</h3>
          <div className="container-input">
            <strong>Fullname: {data.fullname}</strong>
          </div>

          <div className="container-input">
            <strong>Username: {data.username}</strong>
          </div>

          <div className="container-input">
            <strong>Email: {data.email}</strong>
          </div>
 
          <div className="container-input">
            <strong>Phone: {data.phone}</strong>
          </div>

        {/* btn btn-success */}
          <Link to={`/update/${id}`} className="btn btn-success">Edit</Link>
          <Link to="/" className="btn btn-primary ms-3">Back</Link>
      </div>
    </div>
  );
};

export default Read;
