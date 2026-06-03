import { Link } from 'react-router-dom';
const FloatingButtons = () => {
  return (
    <div className="booking-float">
      <a href="https://wa.me/251912345678" target="_blank" rel="noopener noreferrer">
        <button className="float-btn float-wa">📱 WhatsApp Booking</button>
      </a>
      <Link to="/booking">
        <button className="float-btn">Book a Room</button>
      </Link>
    </div>
  );
};
export default FloatingButtons;
