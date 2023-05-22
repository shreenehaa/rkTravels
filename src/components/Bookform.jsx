import React ,{ useState } from 'react';
import axios from "../axios";
import { Link,useNavigate } from 'react-router-dom';
import './css/bookform.css'
import Navbar_user from './user/Navbar_user';
export default function Bookform() {
    const navigate = useNavigate();
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [mb1,setMb1]=useState("");
    const [mb2,setMb2]=useState("");
    const [title,setTitle]=useState("");
    const [from,setFrom]=useState("");
    const [to,setTo]=useState("");
    const [nameError, setNameError] = useState('');
    function validateName(name) {
     
      const nameRegex = /^[A-Za-z]+$/;
      return nameRegex.test(name);
    }


    const Bookplace =(e)=>{
        e.preventDefault();
       
        console.log("hiii");
        axios.post('/book/add',{name,email,mb1,mb2,title,from,to}).then(()=>{
            setName("");
            setEmail("");
            setMb1(0);
            setMb2("");
            setTitle("");
            setFrom("");
            setTo("");
            alert("booking successful wait for conformation")
            navigate('/Navbar_user');
        }).catch((error)=>alert(error.message));
        
    };
    const div3={
      border : '1px solid black',
    'box-shadow': '0px -5px 10px 0px rgba(0, 0, 0, 0.5)',
    width:'50%',
    'margin-left':"290px"


    }
    
  return (
    
    <div>
        <Navbar_user/> 
        <br></br>
        <div style={div3}>
        <br></br>
       
        <center>
       <h1>Booking form</h1> 
       <div className='bform'>
         <form onSubmit={Bookplace}>
  <div class="form-group g1">
  
    <input type="text1" size="20" class="form-control i1" name="name" placeholder="name" onChange={(e)=>setName(e.target.value)} value={name} required />
  </div><br></br>
  <div class="form-group">
   
    <input type="email" class="form-control i2" name="email" placeholder="email"  onChange={(e)=>setEmail(e.target.value)} value={email} required />
  </div><br></br>
  <div class="form-group">
  
    <input type="text1" class="form-control i3" name="mb1" placeholder="mb1" onChange={(e)=>setMb1(e.target.value)} value={mb1} required />
  </div><br></br>
  <div class="form-group">
   
    <input type="text1" class="form-control i4" name="mb2" placeholder="mb2" onChange={(e)=>setMb2(e.target.value)} value={mb2} required />
  </div><br></br>
  <div class="form-group">
   
    <input type="text1" class="form-control i5" name="title" placeholder="title"  onChange={(e)=>setTitle(e.target.value)} value={title} required />
  </div><br></br>
  <div class="form-group">
   
   <input type="date" class="form-control i6" name="from" placeholder="from date"   onChange={(e)=>setFrom(e.target.value)} value={from} required />
 </div><br></br>
 <div class="form-group">
   
   <input type="date" class="form-control i7" name="to" placeholder="to date"  onChange={(e)=>setTo(e.target.value)} value={to} required />
 </div><br></br>

 
 <div class="form-group">
  <button type="submit" class="btn btn-lg btn-primary custom-button">
   Submit
  </button>
</div>
 
  
</form>
</div>
</center>
</div>
    </div>
  )
}
