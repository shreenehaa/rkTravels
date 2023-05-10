import React,{useState} from 'react'

import './css/home.css'

import Services from './Services'
// import { Navbar } from 'react-bootstrap'
import Navbar from './Navbar'
export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);
    const [isHovered4, setIsHovered4] = useState(false);
    const imageStyle = {
        float: 'left',
        borderRadius:'10px',
        height:'320px',
        width:'590px',
       
        transition: 'transform 0.3s ease',
        transform: isHovered ? 'scale(1.1)' : 'scale(1)'
      };
      const hoverStyle = {
        transform: 'scale(1.1)'
      };
      const imageStyle1 = {
        float: 'left',
        borderRadius:'10px',
        height:'320px',
        width:'370px',
       
        transition: 'transform 0.3s ease',
        transform: isHovered1 ? 'scale(1.1)' : 'scale(1)'
      };
      const hoverStyle1 = {
        transform: 'scale(1.1)'
      };
      const imageStyle2 = {
        float: 'left',
        borderRadius:'10px',
        height:'240px',
        width:'280px',
       
        transition: 'transform 0.3s ease',
        transform: isHovered2 ? 'scale(1.1)' : 'scale(1)'
      };
      const hoverStyle2 = {
        transform: 'scale(1.1)'
      };
      const imageStyle3 = {
        float: 'left',
        borderRadius:'10px',
        height:'240px',
        width:'280px',
       
       
        transition: 'transform 0.3s ease',
        transform: isHovered3 ? 'scale(1.1)' : 'scale(1)'
      };
      const hoverStyle3 = {
        transform: 'scale(1.1)'
      };
      const imageStyle4 = {
        float: 'left',
        borderRadius:'10px',
        height:'240px',
        width:'365px',
       
        transition: 'transform 0.3s ease',
        transform: isHovered4 ? 'scale(1.1)' : 'scale(1)'
      };
      const hoverStyle4 = {
        transform: 'scale(1.1)'
      };
      const textStyle = {
        position: 'absolute',
        position: 'absolute',
        bottom: '0',
        left: '60px',
        top:'250px',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        color: '#fff',
        padding: '10px',
        fontSize: '44px',
        fontWeight: 'bold',
        textShadow: '2px 2px #000'
};
const textStyle1 = {
    position: 'absolute',
    position: 'absolute',
    bottom: '0',
    left: '60px',
    top:'160px',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    color: '#fff',
    padding: '10px',
    fontSize: '44px',
    fontWeight: 'bold',
    textShadow: '2px 2px #000'
};
// const cardStyle = {
//     width: '18rem'
//   };
const [isHoveredc1, setIsHoveredc1] = useState(false);
const [isHoveredc2, setIsHoveredc2] = useState(false);
const [isHoveredc3, setIsHoveredc3] = useState(false);

  const handleMouseEnter = () => {
    setIsHoveredc1(true);
  };

  const handleMouseLeave = () => {
    setIsHoveredc1(false);
  };
  const handleMouseEnter1 = () => {
    setIsHoveredc2(true);
  };

  const handleMouseLeave1 = () => {
    setIsHoveredc2(false);
  };
  const handleMouseEnter2 = () => {
    setIsHoveredc3(true);
  };

  const handleMouseLeave2 = () => {
    setIsHoveredc3(false);
  };
  const imageStylec1 = {
      height : '150px',
      width:'240px',
      
      

  }
  const imageStylec2 = {
    height : '220px',
    width:'250px',
    

}
  const imageStylec3 = {
    height : '120px',
    width:'120px',
    
    

}



  return (
    
      <div>
         <Navbar/>
         <div class="home">
        <div class="content">
            <h5>Welcome To <span id="homerk">RK Travels</span></h5>
            <h1>Visit <span class="changecontent"></span></h1>
            <p>Travel is an investment in yourself.</p>
            <a href="#">Book Place</a>
        </div>
    </div>
    <div class="container-fluid">
  <div class="row">
    <div class="col-md-1">
      
    </div>
    <div class="col-md-10">
    <div className="card-container card2">
        
      <div className="card card1" onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ transform: isHoveredc1 ? "scale(1.05)" : "scale(1)" }}>
        <div className="card-body1"><br></br><br></br>
          <h5 className="card-title1"></h5>
          <center><img src="https://img.freepik.com/premium-vector/continuous-one-line-drawing-happy-boy-take-photo-with-smartphone-travel-experience-concept-single-line-draw-design-vector-graphic-illustration_612079-1974.jpg?w=2000" alt="My Image"  style={imageStylec1} /></center><br></br>
          <center><b><p className="card-text1" style={{fontSize:'25px'}}>500+ Trips</p></b></center>
        </div>
      </div>
      <div className="card card1" onMouseEnter={handleMouseEnter1}
      onMouseLeave={handleMouseLeave1}
      style={{ transform: isHoveredc2 ? "scale(1.05)" : "scale(1)" }}>
        <div className="card-body1">
       
          <center><img src="https://media.istockphoto.com/id/1084243376/vector/star-like-hand-line-icon-feedback-rating-sign-vector.jpg?s=612x612&w=0&k=20&c=L5DgTEaP1-lpcwq8xnZjRwZCWD06575wArGbGcRREbo="  style={imageStylec2} /></center>
          <center><b><p className="card-text1" style={{fontSize:'25px'}}>Happy Travelers</p></b></center>
        </div>
      </div>
      <div className="card card1" onMouseEnter={handleMouseEnter2}
      onMouseLeave={handleMouseLeave2}
      style={{ transform: isHoveredc3 ? "scale(1.05)" : "scale(1)" }}>
        <div className="card-body1">
          <h5 className="card-title1"></h5><br></br><br></br>
          <center><img src="data:image/jpeg;base64,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" alt="My Image"  style={imageStylec3} /></center><br></br><br></br>
           <center><b><p className="card-text1" style={{fontSize:'22px'}}>Handcrafted Experience</p></b></center>
        </div>
      </div>
      </div>
    </div>
    <div class="col-md-1">
     
    </div>
  </div>
</div>
<br></br><br></br>
    <div class="container-fluid">
  <div class="row">
  <div class="col-md-1">
      
    </div>
    <div class="col-md-6">
    <img src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8a2VyYWxhJTIwdG91cmlzbXxlbnwwfHwwfHw%3D&w=1000&q=80" alt="My Image" height={360} width={790} style={imageStyle} onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)} />
        <span style={textStyle}>Wayanad,Kerala</span>
    </div>
    <div class="col-md-4">
    <img src="https://www.fabhotels.com/blog/wp-content/uploads/2018/07/Mysore-Maharaja-Palace.jpg" alt="My Image" height={360} width={570} style={imageStyle1} onMouseOver={() => setIsHovered1(true)}
        onMouseOut={() => setIsHovered1(false)}/>
       
    </div>
    <div class="col-md-1">
     
    </div>
    
  </div>
</div>
<br>
</br>
<div class="container-fluid">
  <div class="row">
  <div class="col-md-1">
      
    </div>
    <div class="col-md-3">
    <img src="https://images.pexels.com/photos/1583244/pexels-photo-1583244.jpeg?cs=srgb&dl=pexels-mayur-rawte-1583244.jpg&fm=jpg" alt="My Image" height={1000} width={390}style={imageStyle2} onMouseOver={() => setIsHovered2(true)}
        onMouseOut={() => setIsHovered2(false)} />
    </div>
    <div class="col-md-3">
    <img src="https://images5.alphacoders.com/385/thumb-1920-385306.jpg" alt="My Image" height={300} width={390}style={imageStyle3} onMouseOver={() => setIsHovered3(true)}
        onMouseOut={() => setIsHovered3(false)}/>
    </div>
    <div class="col-md-4">
    <img src="https://www.tfninternational.com/wp-content/uploads/2022/10/284181423_10161854520983662_9001667888433292420_n-1024x648.jpg" alt="My Image" height={300} width={570}style={imageStyle4} onMouseOver={() => setIsHovered4(true)}
        onMouseOut={() => setIsHovered4(false)}/>
         <span style={textStyle1}>Kodaikanal</span>
    </div>
    <div class="col-md-1">
      
    </div>
    
  </div>
</div>
<br></br><br></br>
<center>
<div class="why">
  <div className='content1'>
    <h1 class="text-9 fw-600 text-center">Why choose Rk Travels</h1>
    <p class="lead mb-5 text-center"> There are many reason why people should choose Rk travels, some reasons are below</p>
   
    <div class="container">
        <div class="row g-4">
        <div class="col-md-4">
        <h3 class="title"><i class="fa fa-inr"  /> No peak time prices</h3>
            <p>pay  the same proce for a journey,no matter what time you travel.So you get the best deal every time</p>
          </div>
          <div class="col-md-4">
        <h3 class="title"><i class="fa fa-ban"  /> Zero Cancellation Charges</h3>
            <p>Cancel your ticket any time before departure, and get full refund.</p>
          </div>
        <div class="col-md-4">
        <h3 class="title"><i class="fa fa-trash"  /> Zero Rescheduling Fee</h3>
            <p>Now you can make any changes to your bookings at no extra cost.</p>
        </div>
      </div>
     </div>
     <div class="container">
        <div class="row g-4">
        <div class="col-md-4">
        <h3 class="title"><i class="fa fa-hand-peace-o"  /> A to Z Guaranteed</h3>
            <p>No matter what it takes, we guarantee we'll get you from the start to the end point of your journey.</p>
          </div>
          <div class="col-md-4">
        <h3 class="title"><i class="fa fa-wind" /> Air-Conditioned Coaches</h3>
            <p>You can enjoy the ride with our air-conditioned coach. With panoramic windows, every seat has an elevated view.</p>
          </div>
        <div class="col-md-4">
        <h3 class="title"><i class="fa fa-chair"  /> Comfortable Seats</h3>
            <p>For increased comfort, we are introducing special cushion seats in the Vehicle </p>
        </div>
      </div>
     </div>
     <div class="container">
        <div class="row g-4">
        <div class="col-md-4">
        <h3 class="title"><i class="fa fa-lock"  /> 100% Secure Payments</h3>
            <p>Moving your card details to a much more secured place.</p>
          </div>
          <div class="col-md-4">
        <h3 class="title"><i class="fa fa-thumbs-up" /> Trust pay</h3>
            <p>100% Payment Protection. Easy Return Policy.</p>
          </div>
        <div class="col-md-4">
        <h3 class="title"><i class="fa fa-clock"  /> 24X7 Support</h3>
            <p>We're here to help. Have a query and need help ? Call us</p>
        </div>
      </div>
      <br></br>
     </div>
    
    

   </div>
   </div>
   </center>
   <section class="pt-5 pb-5">
    <div class="container">
        <div class="row">
            <div class="col-2">
                <h3 class="mb-1">Top Picks: </h3>
            </div>
            <div class="col-10 text-right">
                <a class="btn btn-primary mb-3 mr-1" href="#carouselExampleIndicators2" role="button" data-slide="prev" style={{backgroundColor:'#002D82'}}>
                    <i class="fa fa-arrow-left" color='#002D82'></i>
                </a>
                <a class="btn btn-primary mb-3 " href="#carouselExampleIndicators2" role="button" data-slide="next" style={{backgroundColor:'#002D82'}}>
                    <i class="fa fa-arrow-right"></i>
                </a>
            </div>
            <div class="col-12">
                <div id="carouselExampleIndicators2" class="carousel slide" data-ride="carousel">

                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div class="row">

                                <div class="col-md-4 mb-3">
                                    <div class="card">
                                        <img class="img-fluid" alt="100%x280" src="https://media.istockphoto.com/id/1266651692/photo/houseboat-in-alappuzha-backwaters-kerala.jpg?b=1&s=170667a&w=0&k=20&c=BVVxjzeqLdreKBP1dM6iE-6Q7P1nHd2EQx_EbmD9Cac=" height={500} width={900}/>
                                        <div class="card-body">
                                        
                                        <h4 class="card-title" style={{float: 'left'}}>Kerala</h4><br></br>
                                            <p class="card-text" style={{float: 'left'}}>With supporting text below as a natural lead-in to additional content.</p>

                                        </div>

                                    </div>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <div class="card">
                                        <img class="img-fluid" alt="100%x280" src="https://cdn.pixabay.com/photo/2016/12/30/23/16/manali-1941810__340.jpg" />
                                        
                                        <div class="card-body">
                                        <h4 class="card-title" style={{float: 'left'}}>Manali</h4><br></br>
                                            <p class="card-text" style={{float: 'left'}}>With supporting text below as a natural lead-in to additional content.</p>

                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <div class="card">
                                        <img class="img-fluid" alt="100%x280" src="https://media.istockphoto.com/id/470248962/photo/tea-plantations-sunset.jpg?b=1&s=170667a&w=0&k=20&c=ErT9uz48hIi2TzOwbypbFtcTCzcqngtg87HCmuwQhA0=" />
                                        <div class="card-body">
                                        <h4 class="card-title" style={{float: 'left'}}>Wayanad</h4><br></br>
                                            <p class="card-text" style={{float: 'left'}}>With supporting text below as a natural lead-in to additional content.</p>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="row">

                                <div class="col-md-4 mb-3">
                                    <div class="card">
                                        <img class="img-fluid" alt="100%x280" src="https://www.holidify.com/images/cmsuploads/compressed/Sun_rise_in_kanyakumari_20181008180645.jpg" />
                                        <div class="card-body">
                                        <h4 class="card-title" style={{float: 'left'}}>Kanyakumari</h4><br></br>
                                            <p class="card-text" style={{float: 'left'}}>With supporting text below as a natural lead-in to additional content.</p>

                                        </div>

                                    </div>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <div class="card">
                                        <img class="img-fluid" alt="100%x280" src="https://www.deccanherald.com/sites/dh/files/p2-1175124-1672030786.png" />
                                        <div class="card-body">
                                        <h4 class="card-title" style={{float: 'left'}}>Ooty</h4><br></br>
                                            <p class="card-text" style={{float: 'left'}}>With supporting text below as a natural lead-in to additional content.</p>

                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <div class="card">
                                        <img class="img-fluid" alt="100%x280" src="https://i0.wp.com/www.transindiatravels.com/wp-content/uploads/kodai-lake-1.jpg?resize=800%2C530" />
                                        <div class="card-body">
                                        <h4 class="card-title" style={{float: 'left'}}>Kodaikanal</h4><br></br>
                                            <p class="card-text" style={{float: 'left'}}>With supporting text below as a natural lead-in to additional content.</p>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="row">

                                <div class="col-md-4 mb-3">
                                    <div class="card">
                                        <img class="img-fluid" alt="100%x280" src="https://i0.wp.com/www.travelkingindia.com/wp-content/uploads/2022/08/Lansdown.jpg?fit=800%2C530&ssl=1" />
                                        <div class="card-body">
                                        <h4 class="card-title" style={{float: 'left'}}>Vagamon</h4><br></br>
                                            <p class="card-text" style={{float: 'left'}}>With supporting text below as a natural lead-in to additional content.</p>

                                        </div>

                                    </div>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <div class="card">
                                        <img class="img-fluid" alt="100%x280" src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Alappuzha_Boat_Beauty_W.jpg" />
                                        <div class="card-body">
                                        <h4 class="card-title" style={{float: 'left'}}>Alleppey</h4><br></br>
                                            <p class="card-text" style={{float: 'left'}}>With supporting text below as a natural lead-in to additional content.</p>

                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 mb-3">
                                <div class="card">
  <img class="img-fluid" alt="100%x280" src="https://www.industraveller.com/wp-content/uploads/2019/04/Madurai-Meenakshi-temple.jpg" />
  <div class="card-body">
    <h4 class="card-title" style={{float: 'left'}}>Madurai</h4><br></br>
    <p class="card-text" style={{float: 'left'}}>With supporting text below as a natural lead-in to additional content.</p>
  </div>
</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<footer id="footer">
      <h1><span>RK</span> Travels</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus fugiat, ipsa quos nulla qui alias.</p>
      <div class="social-links">
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-youtube"></i>
        <i class="fa-brands fa-pinterest-p"></i>
      </div>
      <div class="copyright">
        <p>Further Queries Contact : +91 - 98765 54321</p>
      </div>
    </footer>
</div>
    
    
    
   
  )
}
