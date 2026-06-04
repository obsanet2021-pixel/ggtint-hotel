import { useState } from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav>
      <Link to="/" className="nav-logo">GGT<span>.</span></Link>
      <button className="hamburger" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
        <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
        <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
        <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
      </button>
      <ul className={`nav-links ${isOpen ? 'nav-open' : ''}`}>
        <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
        <li><Link to="/rooms" onClick={() => setIsOpen(false)}>Rooms</Link></li>
        <li><Link to="/dining" onClick={() => setIsOpen(false)}>Dining</Link></li>
        <li><Link to="/events" onClick={() => setIsOpen(false)}>Events</Link></li>
        <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
        <li className="mobile-cta">
          <Link to="/booking" onClick={() => setIsOpen(false)}>
            <button className="nav-cta">Book Now</button>
          </Link>
        </li>
      </ul>
      <Link to="/booking" className="desktop-cta">
        <button className="nav-cta">Book Now</button>
      </Link>
    </nav>
  );
};
export default Navbar;
