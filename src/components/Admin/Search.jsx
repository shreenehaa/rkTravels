import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar1 from '../Navbar1';

export default function Search() {
  const [selectedDate, setSelectedDate] = useState('');
  const [det, setDet] = useState([]);

  const handleDateChange = (event) => {
    const selectedDate = new Date(event.target.value).toISOString();
    setSelectedDate(selectedDate);
  };
  

  const fetchBookDetails = async (event) => {
  event.preventDefault(); 

    try {
        const response = await axios.get(`http://localhost:4000/booking/search/get/${encodeURIComponent(selectedDate)}`);

      console.log("hiii try")
      setDet(response.data);
    } catch (error) {
      console.error('Error fetching search data:', error);
    }
  };
  

  useEffect(() => {
    console.log(JSON.stringify(det)); // Log the updated value of det whenever it changes
  }, [det]);

  return (
    <div>
        <Navbar1/>
        <br></br>
        <form onSubmit={fetchBookDetails}>
      <input type="date" onChange={handleDateChange} name="date" />
      <button type="date" >Get Details</button>
      </form>
     
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
          {
            det.map((pkg) => (
              <tr key={pkg.id}>
                <td>{pkg.name}</td>
                <td>{pkg.email}</td>
                <td>{pkg.mb1}</td>
                <td>{pkg.mb2}</td>
                <td>{pkg.title}</td>
                <td>{new Date(pkg.from).toLocaleDateString()}</td>
                <td>{new Date(pkg.to).toLocaleDateString()}</td>
                <td>{pkg.status}</td>
                
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
