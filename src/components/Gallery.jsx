import React from 'react';
import './css/gallery.css';
import Navbar from './Navbar';
const GalleryPage = () => {
  return (
    <div className="gallery-page">
      <Navbar/>
      <h1>Gallery</h1>
      <div className="gallery-images">
        <div className="image-card">
          <img src="https://i0.wp.com/pinklungi.com/wp-content/uploads/2022/08/10-1.jpg?fit=1200%2C675&ssl=1" alt="Image 1" />
          <div className="image-card-overlay">
            <h3>Wayanad</h3>
          </div>
        </div>
        <div className="image-card">
          <img src="https://cdn-imgix.headout.com/media/images/3bec9d37206796348d327c3042f8d789-Education%20and%20Research%20Work%20in%20Langkawi%20Underwater%20World.jpg" alt="Image 2" />
          <div className="image-card-overlay">
            <h3>Lankawi</h3>
          </div>
        </div>
        <div className="image-card">
          <img src="https://dynamic.tourtravelworld.com/package-images/photo-big/dir_18/526414/254027.jpg" alt="Image 3" />
          <div className="image-card-overlay">
            <h3>chikmagalur</h3>
          </div>
        </div>
        <div className="image-card">
          <img src="https://i0.wp.com/www.dharmwani.com/wp-content/uploads/2022/11/TIRUPATI-BALAJI-MANDIR_1.png?fit=1000%2C561&ssl=1" alt="Image 4" />
          <div className="image-card-overlay">
            <h3>Tirupati</h3>
          </div>
        </div>
        <div className="image-card">
          <img src="https://1.bp.blogspot.com/-8cjUEBT4OFw/XoRIEqX4f_I/AAAAAAAAUAk/_mVEXut541UueLyJLWHS_-eKFWrZ_iTJgCLcBGAsYHQ/s1600/brihadeshwara.jpg" alt="Image 5" />
          <div className="image-card-overlay">
            <h3>Brihadeshwara Temple</h3>
          </div>
        </div>
        <div className="image-card">
          <img src="https://www.southtourism.in/blog/wp-content/uploads/2019/11/velankanni-church-1.jpg" alt="Image 6" />
          <div className="image-card-overlay">
            <h3>Velankanni Church</h3>
          </div>
        </div>
        <div className="image-card">
          <img src="https://c.ndtvimg.com/gws/631/assets/1.jpeg?1594735876" alt="Image 5" />
          <div className="image-card-overlay">
            <h3>Madurai</h3>
          </div>
        </div>
        <div className="image-card">
          <img src="https://assets.traveltriangle.com/blog/wp-content/uploads/2018/04/kanyakumari-beach1.jpg" alt="Image 5" />
          <div className="image-card-overlay">
            <h3>Kanyakamari</h3>
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

export default GalleryPage;
