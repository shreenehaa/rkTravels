import React from 'react'
import {BrowserRouter, Routes,Route, Link, useLocation} from 'react-router-dom';
import Home from './Home';
import Package from './Package';
import Vehicle_booking from './Vehicle_booking';
import Contact_Us from './Contact_us';
import About_Us from './About_us';
import Add_package from './Add_package';
// import './css/navbar.css'
import './css/style.css'
import New_page from './New_page';
import Admin from './Admin';
import Navbar1 from './Navbar1';
import Services from './Services';
import Login_user from './user/Login_user';
import Signup_user from './user/Signup_user'
import Navbar_user from './user/Navbar_user';
// export default function Navbar() {
//   return (
//     <BrowserRouter>
//       <Nav />
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/Package' element={<Package />} />
//         <Route path='/Contact_Us' element={<Contact_Us />} />
//         <Route path='/About_Us' element={<About_Us />} /> 
//         <Route path='/Vehicle_booking' element={<Vehicle_booking />} /> 
//         {/* <Route path='/Add_package' element={
//         <div><Navbar1 /><Add_package /></div>} />  */}
//         <Route path="/New_page/:buttonValue" element={<New_page />} />
//         <Route path='/Navbar1' element={<Navbar1 />} /> 
         
//         <Route path='/Services' element={<Services />} />
//         <Route path='/Login_user' element={<Login_user />} />  
//         <Route path='/Signup_user' element={<Signup_user />} />  
//         <Route path='/Navbar_user' element={<Navbar_user />} />  
//       </Routes>
//     </BrowserRouter>
//   );
// }

export default function Navbar() {
  const location = useLocation();

  return (
    <>
      {location.pathname==='/Admin'? <Admin /> : (
        <nav class="navbar navbar-expand-lg" id="navbar">
        <div class="container">
          <a class="navbar-brand" href="index.html" id="logo"><span>RK Travels</span></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
            <span><i class="fa-solid fa-bars"></i></span>
          </button>
          <div class="collapse navbar-collapse" id="mynavbar">
            <ul class="navbar-nav me-auto">
              <li class="nav-item">
              <Link to='/' class="nav-link">Home</Link>
              </li>
               {/* <li class="nav-item">
               <Link to='/Request_package' class="nav-link">Request Package</Link>
              </li> */}
              <li class="nav-item"><Link to='/Package' class="nav-link">
                Packages</Link>
              </li>
             <li class="nav-item"> <Link to='/Services' class="nav-link">
               Services</Link>
              </li>
              <li class="nav-item"><Link to='/Gallery' class="nav-link">
                Gallery</Link>
              </li>
              <li class="nav-item"><Link to='/About_us' class="nav-link">
               About Us</Link>
              </li>
              <li class="nav-item"><Link to='/Login_user' class="nav-link">
               login</Link>
              </li>
              <li class="nav-item"><Link to='/Admin' class="nav-link">
               Admin</Link>
              </li>
             
            </ul>
           
          </div>
        </div>
      </nav>
      )}
    </>
  );
}
