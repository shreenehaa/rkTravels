import axios from "../axios";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/login_user.css'
import Navbar from "./Navbar";

export default function Admin() {
  const navigate = useNavigate();
  const [userid, setUserid] = useState('');
  const [password, setPassword] = useState('');

  console.log("hii")
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
  const div5={
    border : '1px solid black',
    'box-shadow': '0px -5px 10px 0px rgba(0, 0, 0, 0.5)',
    width:'50%',
    'margin-left':"300px"
  }

  return  (
   
    <div className="bgimg">
     {/* <Navbar/> */}
      <div>
        <br /><br />
        <div style={div5}>
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
              type="text1"
              className="form-control"
              placeholder="Enter admin_id"
              name="userid" onChange={(e) => setUserid(e.target.value)} required
            />
           
            <div className="form-group" />
            <br />
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              name="password" onChange={(e) => setPassword(e.target.value)} required
            />
            <div className="form-group" />
            <div className="col-sm-offset-2 col-sm-10" />
            <div className="col-sm-offset-2 col-sm-10" />
            <br />
            
            <button type="submit" className="btn btn-primary btn-lg">
              Submit
            </button>
            <br /><br />
          </form>
        </center>
        </div>
      </div>
    </div>
  );
}
