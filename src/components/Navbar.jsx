import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav>
      <Link to="/" className="nav-logo">GGT<span>.</span></Link>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/rooms">Rooms</Link></li>
        <li><Link to="/dining">Dining</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
      <Link to="/booking">
        <button className="nav-cta">Book Now</button>
      </Link>
    </nav>
  );
};
export default Navbar;
