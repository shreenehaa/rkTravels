import axios from "../axios";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Navbar from "./Navbar";

export default function Admin() {
  const navigate = useNavigate();
  const [userid, setUserid] = useState('');
  const [password, setPassword] = useState('');


  async function submit(e) {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/login", {
        userid,
        password
      });

      if (res.data.userid && res.data.password) {
       
        navigate("/Navbar1");
      } else {
        alert(" recheck the email and password");
      }
    } catch (e) {
      alert("Wrong details");
      console.log(e);
    }
  }

  return  (
   
    <div>
     <Navbar/>
      <div>
        <center>
          <h1>Admin login</h1>
          <form
            onSubmit={submit}
            className="form-horizontal body-FORM"
            method="post"
          >
            <div className="form-group" />
            <div className="col-sm-10" />
            <input
              type="text"
              className="form-control"
              placeholder="Enter email"
              name="userid" onChange={(e) => setUserid(e.target.value)}
            />
            <br />
            <div className="form-group" />
            <br />
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              name="password" onChange={(e) => setPassword(e.target.value)}
            />
            <div className="form-group" />
            <div className="col-sm-offset-2 col-sm-10" />
            <div className="col-sm-offset-2 col-sm-10" />
            <br />
            <button type="submit" className="btn btn-primary btn-sm">
              Submit
            </button>
          </form>
        </center>
      </div>
    </div>
  );
}
