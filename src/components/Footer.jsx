import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-logo">GGT<span>.</span></div>
          <p className="footer-tagline">Where energy meets comfort. The boldest hotel experience in Adama, Ethiopia.</p>
          <div className="social-links">
            <a href="#" className="social-link">𝕏</a>
            <a href="#" className="social-link">in</a>
            <a href="#" className="social-link">f</a>
            <a href="#" className="social-link">▶</a>
          </div>
        </div>
        <div className="footer-col">
          <div className="footer-col-title">Explore</div>
          <ul className="footer-links">
            <li><Link to="/rooms">Rooms & Suites</Link></li>
            <li><Link to="/dining">Dining</Link></li>
            <li><Link to="/events">Events & Weddings</Link></li>
            <li><Link to="/virtual-tour">Virtual Tour</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <div className="footer-col-title">Stay</div>
          <ul className="footer-links">
            <li><Link to="/booking">Book a Room</Link></li>
            <li><a href="#">Special Offers</a></li>
            <li><a href="#">Corporate Rates</a></li>
            <li><a href="#">Long Stay</a></li>
            <li><a href="#">Cancellation Policy</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <div className="footer-col-title">Contact</div>
          <ul className="footer-links">
            <li><a href="#">Location & Map</a></li>
            <li><a href="#">WhatsApp</a></li>
            <li><a href="#">Email Us</a></li>
            <li><a href="#">TripAdvisor</a></li>
            <li><a href="#">Media Enquiries</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-copy">© 2025 GGT International Hotel, Adama · All rights reserved Developed by <a href="https://officialcloverdigital.com/" target="_blank" rel="noopener noreferrer">Clover Digital</a></div>
        <div className="footer-watermark">Designed for bold living</div>
      </div>
    </footer>
  );
};
export default Footer;
