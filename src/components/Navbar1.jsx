import React from 'react'
import {BrowserRouter, Routes,Route, Link, useLocation} from 'react-router-dom';

import Package from './Package';
import Home from './Home';
import Add_package from './Add_package';
import './css/style.css'
// import './css/navbar.css'


export default function Navbar1() {
  return (
    <>
    
     <br></br>
    
    <nav class="navbar navbar-expand-lg" id="navbar">
        <div class="container">
          <a class="navbar-brand" href="index.html" id="logo"><span>RK Travels</span></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
            <span><i class="fa-solid fa-bars"></i></span>
          </button>
          <div class="collapse navbar-collapse" id="mynavbar">
            <ul class="navbar-nav me-auto">
              <li class="nav-item">
              <Link to='/Add_package' class="nav-link">Add package</Link>
              </li>
               <li class="nav-item">
               <Link to='/All_booking' class="nav-link">view booking</Link>
              </li>
              <li class="nav-item"><Link to='/View_enquiry' class="nav-link">
              view enquiry</Link>
              </li>
             </ul>
        </div>
        </div>
      </nav>
      </>
  )  
}
