import axios from "../axios";
import React ,{ useState } from 'react';

import './css/add_package.css'

export default function () {
    const [imgurl,setImgurl]=useState("");
    const [title,setTitle]=useState("");
    const [days,setDays]=useState("");
    const [place,setPlace]=useState("");
    const [location,setLocation]=useState("");
    const [desc,setDesc]=useState("");
    const [placeError, setPlaceError] = useState('');
    function validatePlace(place) {
      const nameRegex = /^[A-Za-z]+$/;
      return nameRegex.test(place);
    }
    function handlePlaceChange(e) {
      const newPlace = e.target.value;
      setPlace(newPlace); 
    }
  
  



    const addPackage =(e)=>{
        e.preventDefault();
        if (!validatePlace(place)) {
          setPlaceError('Please enter only characters.');
          return; // Return early if validation fails
        }
      
        // Clear the error message if validation succeeds
        setPlaceError('');

        axios.post('/package/add',{imgurl,title,days,place,location,desc}).then(()=>{
            setImgurl("");
            setTitle("");
            setDays(0);
            setPlace("");
            setLocation("");
            setDesc("");
            
        }).catch((error)=>alert(error.message));
    };

    const div4={
      border : '1px solid black',
    'box-shadow': '0px -5px 10px 0px rgba(0, 0, 0, 0.5)',
    width:'50%',
    'margin-left':"50px"
    }
  return (
    <div>
        <br></br>
        <br></br>
        <br></br>
        <center>
          <div style={div4}>
        <h1>Add package</h1>
      <form onSubmit={addPackage}>
  <div class="form-group">
  
    <input type="text" class="form-control" name="imgurl" placeholder="Image url" onChange={(e)=>setImgurl(e.target.value)} value={imgurl} required/>
  </div>
  <div class="form-group">
   
    <input type="text" class="form-control" required name="title" placeholder="Title" onChange={(e)=>setTitle(e.target.value)} value={title}/>
  </div>
  <div class="form-group">
  
    <input type="text" class="form-control" required name="days" placeholder="Days" onChange={(e)=>setDays(e.target.value)} value={days}/>
  </div>
  <div class="form-group">
   <div>
   <input type="text" class="form-control" required name="place" placeholder="Place" onChange={(e) => handlePlaceChange(e)} value={place}/>

   
  </div>
                  {placeError && (
                      <small style={{ color: 'red' }}>{placeError}</small>
                  )}
  </div>
  <div class="form-group">
   
    <input type="text" class="form-control" required name="location" placeholder="Location landmark" onChange={(e)=>setLocation(e.target.value)} value={location}/>
  </div>
  <div class="form-group">
   
    <textarea class="form-control" name="desc" required rows="3" placeholder="Description about travel" onChange={(e)=>setDesc(e.target.value)} value={desc}></textarea>
  </div>
  <div class="form-group">
   
    <button type="Submit" class="btn btn-lg btn-primary " >SUBMIT</button>
  </div>
 
  
</form>
</div>
</center>
    </div>
  )
}
