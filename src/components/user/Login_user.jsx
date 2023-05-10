import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../css/login_user.css'
import Navbar from '../Navbar';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function submit(e) {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/login_user", {
        email,
        password
      });

      if (res.data.email && res.data.password) {
        localStorage.setItem("user_data", JSON.stringify(res.data));
        navigate("/Navbar_user", { state: { id: email } });
      } else {
        alert("User not signed up or recheck the email and password");
      }
    } catch (e) {
      alert("Wrong details");
      console.log(e);
    }
  }

  return (
    <div>
      <Navbar />
      <br /><br /><br />
      <div className="login-container">
        <center>
          <br />
          <h1>Login</h1>
          <br />
          <form>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <br />
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <br />
            <div className="form-group">
              <button
                type="button"
                className="btn btn-lg btn-primary"
                onClick={submit}
              >
                Submit
              </button>
            </div>
          </form>
          <p>
            or <Link to="/Signup_user">Signup</Link>
          </p>
          <br />
        </center>
      </div>
    </div>
  );
}
