import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Navbar';
export default function Signup_user() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
 useEffect(()=>{
  const auth=localStorage.getItem('user_data')
  if(auth)
  {
    navigate('/Signup_user')
  }
 })
  async function submit(e) {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/Signup_user", {
        email,
        password,
        fname,lname,phone,country
      });

      if (res.data === "exist") {
        alert("User already exists");
      } else  {
        localStorage.setItem("user_data", JSON.stringify(res.data));
        navigate("/Navbar_user", { state: { id: email } });
      }
    } catch (e) {
      alert("Wrong details");
      console.log(e);
    }
  }
  const div1 ={
    border : '1px solid black',
    'box-shadow': '0px -5px 10px 0px rgba(0, 0, 0, 0.5)',
    width:'50%',
    'margin-left':"50px"

  }

  

  return (
    <div><Navbar/><br></br>
    <center>
      <div style={div1}>
      <h1>Signup</h1>
      <form>
        <center>        <div className='in'>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
     
        <div className="form-group grp1">
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
     
        <div className="form-group grp1">
          <input
            type="text1"
            className="form-control"
            name="fname"
            placeholder="first name"
            onChange={(e) => setFname(e.target.value)}
          />
        </div>
        
        <div className="form-group grp1">
          <input
            type="text1"
            className="form-control"
            name="lname"
            placeholder="last name"
            onChange={(e) => setLname(e.target.value)}
          />
        </div>
       
        <div className="form-group grp1">
          <input
            type="tel"
            className="form-control"
            name="phone"
            placeholder="Phone"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
      
        <div className="form-group grp1">
          <input
            type="text1"
            className="form-control"
            name="country"
            placeholder="country"
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>
        
        <div className="form-group grp1">
          <button type="button" className="btn btn-lg btn-primary" onClick={submit}>
            Submit
          </button>
        </div></div>
        </center>

      </form>
      or <Link to="/Login_user">Login</Link>
    </div>
    </center>
    </div>
  );
}
