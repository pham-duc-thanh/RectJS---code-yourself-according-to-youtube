import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../styles/home.css";
import createUser from "../model/user";
import UserItem from "./UserItem";

const URL_USER = "https://65f64ed641d90c1c5e0ab776.mockapi.io/api/users";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(URL_USER)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("MuỐn xoá à ?");

    if (confirmDelete) {
      axios
        .delete(`${URL_USER}/${id}`)
        .then((reponse) => {
          setData((prevData) => prevData.filter((item) => item.id !== id));
          navigate("/");
        })
        .catch((err) => console.log(err));
    }
  };

  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = data.slice(firstIndex, lastIndex);
  const npage = Math.ceil(data.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  return (
    // user-list-card,
    <div className="user-list-container">
      <h1>List of Users</h1>
      <div className="user-list-card">
        <div className="card-header">
          <Link to="/create" className="btn-add">
            Add +
          </Link>
        </div>

        {/* table table-striped */}
        <table className="table table-striped">
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
            {records.map((users, index) => (
              <tr key={index}>
                <td>{users.id}</td>
                <td>{users.fullname}</td>
                <td>{users.username}</td>
                <td>{users.email}</td>
                <td>{users.phone}</td>
                <td>
                  <Link to={`/read/${users.id}`} className="btn-read">
                    Show
                  </Link>
                  <Link to={`/update/${users.id}`} className="btn-edit">
                    Edit
                  </Link>
                  <button
                    onClick={(e) => handleDelete(users.id)}
                    className="btn-delete"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {/* {
                        data.map((users, index) => {
                            const current = new createUser(users);
                            console.log("users...", users);
                            console.log("current...", current);
                            return <UserItem key={index} data={current} handleDelete={handleDelete} />;
                          })
                    } */}
          </tbody>
        </table>

        <nav style={{float: "right"}}>
          <ul className="pagination">
            <li className="page-item">
              <button href="#" className="page-link" onClick={prePage}>
                Prev
              </button>
            </li>
            {numbers.map((n, i) => (
              <li
                className={`page-item ${currentPage == n ? "active" : ""}`}
                key={i}
              >
                <button
                  href="#"
                  className="page-link"
                  onClick={() => changeCPage(n)}
                >
                  {n}
                </button>
              </li>
            ))}
            <li className="page-item">
              <button href="#" className="page-link" onClick={nextPage}>
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );

  function prePage() {
    if(currentPage !== firstIndex) {
        setCurrentPage(currentPage -1)
    }
  }

  function changeCPage(id) {
    setCurrentPage(id)
  }

  function nextPage() {
    if(currentPage !== lastIndex) {
        setCurrentPage(currentPage + 1)
    }
  }
};

export default Home;
