import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const AddUser = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    fullname: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  const { fullname, username, email, phone, website } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`http://localhost:5000/api`, user);
    history.push("/");
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8 offset-2">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="fullname" className="form-label">
                fullname
              </label>
              <input
                value={fullname}
                name="fullname"
                type="text"
                className="form-control"
                id="fullname"
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                username
              </label>
              <input
                value={username}
                name="username"
                type="text"
                className="form-control"
                id="username"
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                email
              </label>
              <input
                value={email}
                name="email"
                type="email"
                className="form-control"
                id="email"
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                phone
              </label>
              <input
                value={phone}
                name="phone"
                type="text"
                className="form-control"
                id="phone"
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="website" className="form-label">
                website
              </label>
              <input
                value={website}
                name="website"
                type="text"
                className="form-control"
                id="website"
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="d-grid gap-2">
              <button className="btn btn-primary" type="submit">
                Add user
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
