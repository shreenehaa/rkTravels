import React from 'react'
import { useLocation ,Link, useNavigate} from 'react-router-dom'
import '../css/navbar_user.css'
export default function Navbar_user() {
  const auth=localStorage.getItem('user_data');
    const navigate=useNavigate();
    const logout=()=>{
      localStorage.clear();
      navigate('/signup')
    }


  return (
    <div>
        <nav class="navbar navbar-expand-lg" id="navbar">
        <div class="container">
          <a class="navbar-brand" href="index.html" id="logo"><span>RK Travels</span></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
            <span><i class="fa-solid fa-bars"></i></span>
          </button>
          <div class="collapse navbar-collapse" id="mynavbar">
            <ul class="navbar-nav me-auto">
              <li class="nav-item">
              <Link to='/Home_user' class="nav-link">Home</Link>
              </li>
              
              <li class="nav-item"><Link to='/User_package' class="nav-link">
              Packages</Link>
              </li>
             <li class="nav-item"> <Link to='/User_Services' class="nav-link">
               Services</Link>
              </li>
              <li class="nav-item"><Link to='/User_Gallery' class="nav-link">
                Gallery</Link>
              </li>
              <li class="nav-item"><Link to='/User_Aboutus' class="nav-link">
               About Us</Link>
              </li>
              <li class="nav-item"><Link to='/Profile' class="nav-link">
               Profile</Link>
              </li>
             
                {/* <Link to='/Login_user' class="nav-link">
              {location.state.id} </Link> */}
              

             <li>
           
            {
              auth ? <li><Link onClick={logout} to="/">Logout  {JSON.parse(auth).email}</Link></li>:
              <>
              <li><Link to="/Signup_user">Signup</Link></li>
              <li><Link to="/Login_user"></Link></li>
              </>
            }
            </li>
             </ul>
            <form class="d-flex">
              <input class="form-control me-2" type="text" placeholder="Search"/>
              <button class="btn btn-primary" type="button">Search</button>
            </form>
          </div>
        </div>
      </nav>
        
        </div>
  )
}
