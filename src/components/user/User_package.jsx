import axios from "../../axios";
import React,{useEffect,useState} from 'react';
import { Routes,Route,Link, BrowserRouter,useLocation} from 'react-router-dom';

import '../css/package.css'
import Navbar_user from "./Navbar_user";

export default function User_package() {
  const [packages, setPackages] = useState("");
  const [buttonValue, setButtonValue] = useState(null);
  const handleClick = (id) => {
    console.log('hiiiii')
    console.log(id)
    setButtonValue(id);
   
  }

useEffect(()=>{
  const fetchdata= async ()=>{
    const data=await axios.get('/packages/get');
    setPackages(data);
    
  };
  fetchdata();
},[]);

const location=useLocation()

  return (
    
    
        <div>
          <Navbar_user/>
          <br></br><br></br>
     
        {packages &&
          packages?.data.map((packages) => (
            
           <div class="card-container">
            
            <div class="card" style={{ width: "23rem"}}>
                <img class="card-img-top" src={packages.imgurl} />   
                <div class="card-body">
                <ul class="list-group list-group-flush">
                {/* <li class="list-group-item"> title={packages._id}</li>  */}
                  <p ><b>{packages.title}</b></p>
                  <p ><i class="fas fa-clock" ></i>  {packages.days}</p>
                   <p> <i class="fas fa-thumbtack"></i>  {packages.place}</p>
                   {/* <li class="list-group-item"> place={packages._id}</li> */}
                   {/* id={packages._id} */}
                 
           
                <p key={packages._id}>

            <Link to={`/User_newpage/${packages._id}`}>
              <button className="btn btn-primary but123" onClick={() => handleClick(packages._id)} >View More</button>
            </Link>
                </p>
                </ul> 
              </div>
             </div>
            
             
            
             
    
    </div>
    


              
          ))}
      </div>
   
  )
};

