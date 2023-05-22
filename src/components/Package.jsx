import axios from "../axios";
import React,{useEffect,useState} from 'react';
import { Routes,Route,Link, BrowserRouter} from 'react-router-dom';
import New_page from './New_page';
import './css/package.css'

export default function Package() {
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


  return (
    
        <div>
          <br></br><br></br>
        
        {packages &&
          packages?.data.map((packages) => (
            
           <div class="card-container">
            
            <div class="card card12" style={{ width: "23rem"}}>
                <img class="card-img-top" src={packages.imgurl} />   
                <div class="card-body">
                <ul class="list-group list-group-flush">
                {/* <li class="list-group-item"> title={packages._id}</li>  */}
                  <p><b>{packages.title}</b></p>
                  <p ><i class="fas fa-clock" ></i>  {packages.days}</p>
                   <p> <i class="fas fa-thumbtack"></i>  {packages.place}</p>
                   {/* <li class="list-group-item"> place={packages._id}</li> */}
                   {/* id={packages._id} */}
                 
           
                <p key={packages._id}>

            <Link to={`/New_page/${packages._id}`}>
              <button className="btn btn-primary but123" onClick={() => handleClick(packages._id)} >Click me</button>
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

