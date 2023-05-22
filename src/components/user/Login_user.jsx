import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../css/login_user.css';
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
        navigate("/User_package", { state: { id: email } });
      } else {
        alert("User not signed up or recheck the email and password");
      }
    } catch (e) {
      alert("Wrong details");
      console.log(e);
    }
  }

  const hed2 = {
    color: 'grey'
  };

  return (
    <>
      <div className="bgimg">
        <div>
          <Navbar />
          <br></br>
          <div>
            <br></br>
            <center>
              <b></b>
              <h2 style={hed2}>Good to see you again!</h2>
            </center>
          </div>
          <br></br>
          <div className="login-container">
            <center>
              <br />
              <br />
              <form onSubmit={submit}>
                <div className="form-group">
                  <div class="input-container">
                    <i class="fa fa-user icon"></i>
                    <input
                      class="input-field"
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Eg:abc@gmail.com"
                      name="email" id="email"
                      required
                    />
                  </div>
                </div>
                <br />
                <div className="form-group">
                  <div class="input-container">
                    <i class="fa fa-key icon"></i>
                    <input
                      class="input-field"
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Eg:abc123*"
                      name="password" id="password"
                      required
                    />
                  </div>
                </div>
                <br />
                <div className="form-group">
                  <button
                    type="submit"
                    className="btn btn-lg but1"
                  >
                    Login
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
        <br></br><br></br><br></br>
      </div>
    </>
  );
}
