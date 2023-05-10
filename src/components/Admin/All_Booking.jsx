import axios from "../../axios";
import React, { useEffect, useState } from 'react';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import '../css/all_Booking.css';
import Navbar1 from "../Navbar1";
export default function All_booking() {
  const [packages, setPackages] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('/booking/get');
      setPackages(response.data);
    };
    fetchData();
  }, []);

  const handleAccept = async (id) => {
    try {
      await axios.put(`/booking/update/${id}`, { status: 'approved' });
      // Refresh the data after updating
      const response = await axios.get('/booking/get');
      setPackages(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  

  const handleReject = async (id) => {
    try {
      await axios.put(`/booking/update/${id}`, { status: 'rejected' });
      
      const response = await axios.get('/booking/get');
      setPackages(response.data);
    } catch (error) {
      console.error(error);
    }
  };

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
     
      <Navbar1/>
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
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {packages &&
            packages.map((pkg) => (
              <tr key={pkg.id}>
                <td>{pkg.name}</td>
                <td>{pkg.email}</td>
                <td>{pkg.mb1}</td>
                <td>{pkg.mb2}</td>
                <td>{pkg.title}</td>
                <td>{new Date(pkg.from).toLocaleDateString()}</td>
                <td>{new Date(pkg.to).toLocaleDateString()}</td>
                <td className={getStatusClass(pkg.status)}>{pkg.status}</td>
                <td>
                  <span>
                    <button className="btn btn-success" onClick={() => handleAccept(pkg._id)}>Accept</button>
                    <button className="btn btn-danger" onClick={() => handleReject(pkg._id)}>Reject</button>
                  </span>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
