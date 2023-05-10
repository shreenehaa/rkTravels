
import axios from "../axios";
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import React from 'react';
import './css/new_page.css'


export default function New_page() {
  const { buttonValue } = useParams();
  const [packages, setPackages] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`/packages/get/${buttonValue}`);
      setPackages(response.data);
    };
    fetchData();
  }, [buttonValue]);

  return (
    <div>
      <br />
      <br />
      <br />
     
      {packages && (
        <>
          <center><img src={packages.imgurl} /></center><br/><br></br>
          <center><div className="card_page">
          <span><b>{packages.title}</b></span><br />
          <span>{packages.place}</span><br />
          <span>Days:{packages.days}</span><br />
          
          <textarea rows="10">{packages.desc}</textarea>
         <Link to="/Login_user"> <input type="button" class="btn btn-primary" value="Book now" /></Link>
        </div></center><br />
         
        </>
      )}
    </div>
  )
}