import logo from './logo.svg';
// import './App.css';
import Navbar from './components/Navbar';


import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import Package from './components/Package';
import Vehicle_booking from './components/Vehicle_booking';
import Contact_Us from './components/Contact_us';
import About_Us from './components/About_us';
import Gallery from './components/Gallery';
import Add_package from './components/Add_package';
import Admin from './components/Admin';
import Navbar1 from './components/Navbar1';
import Services from './components/Services';
import Login_user from './components/user/Login_user';
import Signup_user from './components/user/Signup_user'
import Navbar_user from './components/user/Navbar_user';
import New_page from './components/New_page';
import Bookform from './components/Bookform';
import Mybooking from './components/user/Mybooking'
import User_package from './components/user/User_package';
import User_newpage from './components/user/User_newpage';
import All_Booking from './components/Admin/All_Booking';
import PrivateComponent from './components/user/PrivateComponent';
import Home_user from './components/user/Home_user';
import User_services from './components/user/User_services';
import User_Gallery from './components/user/User_Gallery';
import User_Aboutus from './components/user/User_Aboutus';
import Profile from './components/user/Profile';

function App() {
  return (
  
    <BrowserRouter>
     
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Package' element={
        <div><Navbar /><Package /></div>} />
        <Route path='/Contact_Us' element={<Contact_Us />} />
        <Route path='/Gallery' element={<Gallery />}/>
        <Route path='/About_Us' element={<About_Us />} /> 
        <Route path='/Vehicle_booking' element={<Vehicle_booking />} /> 
        <Route path='/Add_package' element={
        <div><Navbar1 /><Add_package /></div>} /> 
        <Route path="/New_page/:buttonValue" element={<New_page />} />
        <Route path='/Navbar1' element={<Navbar1 />} /> 
       <Route path='/Admin' element={<Admin/>}></Route>
        <Route path='/Services' element={<Services />} />
        <Route path='/Login_user' element={<Login_user />} />  
        <Route path='/Signup_user' element={<Signup_user />} />  
        <Route path='/Navbar_user' element={<Navbar_user />} /> 
        <Route path='/Bookform' element={<Bookform />} />  
        <Route path='/Mybooking' element={<Mybooking />} />
      
        <Route path='/All_booking' element={<All_Booking />} />
      <Route element={<PrivateComponent/>}>
        <Route path='/User_package' element={<div><User_package /></div>}/>
        <Route path='/User_newpage/:buttonValue' element={<User_newpage />} />
        <Route path='/User_services' element={<div><User_services /></div>} />
        <Route path='/User_Gallery' element={<div><User_Gallery /></div>} />
        <Route path='/User_Aboutus' element={<div><User_Aboutus /></div>} />
        <Route path='/Home_user' element={<Home_user />} />
        <Route path='/Profile' element={<Profile/>}/>
       
        </Route>
      </Routes>
    </BrowserRouter>
  
     
 
  );
}

export default App;
