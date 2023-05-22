import React from 'react';
import './css/about_us.css';
import Navbar from './Navbar';


const About_us = () => {
  return (
    <div className="about-us-page">
     <Navbar />
      <div className="about-us-content">
        <h1>About Us</h1>
        <p>Welcome to RK Travels!</p>
        <p>
          We are a leading travel agency providing exceptional travel experiences
          to our customers. With years of expertise in the industry, we offer
          customized travel packages, luxury accommodations, and seamless
          transportation services.
        </p>
        <div className="card">
          <h2>Vision</h2>
          <p>
            Our vision is to become the top choice for travelers by offering
            unparalleled customer service, unique travel experiences, and
            personalized solutions for every journey.
          </p>
        </div>
        <div className="card">
          <h2>Mission</h2>
          <p>
            Our mission is to create memorable travel experiences that inspire and
            enrich the lives of our customers. We strive to exceed expectations by
            delivering exceptional service, quality, and value in every aspect of
            our business.
          </p>
        </div>
        <p>
          Explore our website to discover a wide range of destinations, exciting
          activities, and exclusive deals. Contact us today to start planning your
          next adventure with RK Travels!
        </p>
      </div>
      <div className="about-us-images">
        <div className="image-card">
          <img src="https://www.nativeplanet.com/img/2022/12/hd-wallpaper-3021072-19202-1671288069.jpg" alt="RK Travels" />
          <div className="image-card-overlay">
            <h3>Exotic Destinations</h3>
          </div>
        </div>
        <div className="image-card">
          <img src="https://www.ooralba.com/wp-content/uploads/2018/03/luxury-accommodation-southern-highlands-ooralba-estate.jpg" alt="RK Travels" />
          <div className="image-card-overlay">
            <h3>Luxury Accommodations</h3>
          </div>
        </div>
        <div className="image-card">
          <img src="https://www.smartlinktrans-freight.com/images/multi-service.jpg" alt="RK Travels" />
          <div className="image-card-overlay">
            <h3>Seamless Transportation</h3>
          </div>
        </div>
      </div>
      <footer id="footer">
      <h3><span>RK</span> Travels</h3>
      <p>"RK Travels: Your gateway to unforgettable journeys and seamless adventures."</p>
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
  );
};

export default About_us;
