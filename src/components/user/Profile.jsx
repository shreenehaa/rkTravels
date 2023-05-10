import axios from "../../axios";
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar_user from './Navbar_user';
import '../css/profile.css'

export default function Profile() {
  const [book, setBook] = useState(null);
  const [prof,setProf]=useState(null);
  const auth = localStorage.getItem("user_data");
  const email = JSON.parse(auth)?.email;


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/profile/get/${email}`);
        const res= await axios.get(`/profile/get_det/${email}`);
        setBook(response.data);
        setProf(res.data)
        // console.log(res.data)
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    fetchData();
  }, [email]);
  const getStatusClass = (status) => {
    switch (status) {
      case 'approved':
        return 'status-green';
      case 'rejected':
        return 'status-red';
      case 'pending':
        return 'status-yellow';
      default:
        return '';
    }
  };

  return (
    <div>
      <Navbar_user />
      <div class="container">
  <div class="row">
    <div class="col">
    
    {prof &&
            prof.map((prf) => (
              <>
               <div class="card-container cc">
            
            <div class="card card_prof" >
            <center><h2>MY DETAILS</h2> 
                <div class="card-body cb">
                
                 
              Email :<span>{prf.email}</span><br></br>
              First name: <span>{prf.fname}</span><br></br>
              Last name : <span>{prf.lname}</span><br></br>
              Phone     : <span>{prf.phone}</span><br></br>
              country   : <span>{prf.country}</span><br></br>
              </div>
              </center>
              </div>
              </div>

              </>
            ))}

    </div>
    <div class="col-6">
      <br></br>
    <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile No.1</th>
            <th>Mobile No.2</th>
            <th>Title</th>
            <th>From Date</th>
            <th>To Date</th>
            <th>Status</th>
          
          </tr>
        </thead>
        <tbody>
          {book &&
            book.map((pkg) => (
              <tr key={pkg.id}>
                
                <td>{pkg.name}</td>
                <td>{pkg.email}</td>
                <td>{pkg.mb1}</td>
                <td>{pkg.mb2}</td>
                <td>{pkg.title}</td>
                <td>{new Date(pkg.from).toLocaleDateString()}</td>
                <td>{new Date(pkg.to).toLocaleDateString()}</td>
                <td className={getStatusClass(pkg.status)}>{pkg.status}</td>
               
              </tr>
            ))}
        </tbody>
      </table>
    </div>
    <div class="col">
    
    </div>
  </div>
  </div>
     
     
    </div>
  );
}
