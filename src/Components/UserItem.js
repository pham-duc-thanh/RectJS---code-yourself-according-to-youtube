import React from "react";
import { Link } from "react-router-dom";

export default function UserItem({ data, handleDelete }) {
  const { id, fullname, username, email, phone } = data;

  return (
    <tr>
      <td>{id}</td>
      <td>{fullname}</td>
      <td>{username}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>
        <Link to={`/read/${id}`} className='btn-read'>Show</Link>
        <Link to={`/update/${id}`} className='btn-edit'>Edit</Link>
        <button onClick={() => handleDelete(id)} className='btn-delete'>Delete</button>
      </td>
    </tr>
  );
}