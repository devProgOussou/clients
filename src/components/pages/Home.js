import React, { useState, useEffect } from "react";
import "../../css/index.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [users, setUser] = useState([]);
  const loadUsers = async (e) => {
    const result = await axios.get(`http://localhost:5000/api`);
    setUser(result.data.reverse());
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:5000/api/${id}`);
    loadUsers();
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12">
          <table className="table table-dark">
            <thead>
              <tr>
                <th scope="col">fullname</th>
                <th scope="col">username</th>
                <th scope="col">email</th>
                <th scope="col">phone</th>
                <th scope="col">website</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <th>{user.fullname}</th>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.website}</td>
                  <td>
                    <Link
                      to={`/users/show/${user._id}`}
                      className="btn btn-primary"
                    >
                      view
                    </Link>
                    <Link
                      to={`/users/edit/${user._id}`}
                      className="btn btn-warning"
                    >
                      edit
                    </Link>
                    <Link
                      to="#"
                      onClick={() => deleteUser(user._id)}
                      className="btn btn-danger"
                    >
                      delete
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Home;
