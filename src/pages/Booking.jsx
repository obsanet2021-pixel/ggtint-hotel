import { useState } from 'react';
const Booking = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', checkIn: '', checkOut: '', guests: '2', roomType: 'superior'
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your booking request! We will contact you shortly.');
  };
  return (
    <section className="section" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }}>
      <div>
        <div className="section-eyebrow">Secure Your Stay</div>
        <h1 className="hero-title" style={{ marginBottom: '24px' }}>
          <span>BOOK</span>
          <span className="line-accent">YOUR</span>
          <span>ROOM</span>
        </h1>
        <p style={{ fontSize: '16px', lineHeight: '1.7', color: 'rgba(245,240,232,0.6)', marginBottom: '32px' }}>
          Experience the energy of Adama at GGT International. Fill out the form and our team will confirm your reservation within 2 hours.
        </p>
        <div style={{ background: 'var(--dark-3)', padding: '24px', borderLeft: '3px solid var(--gold)' }}>
          <div style={{ fontFamily: 'var(--font-cond)', fontSize: '12px', letterSpacing: '0.2em', color: 'var(--gold)', marginBottom: '8px' }}>WHY BOOK DIRECT?</div>
          <ul style={{ listStyle: 'none' }}>
            <li style={{ marginBottom: '8px', fontSize: '14px' }}>✓ Best Rate Guarantee</li>
            <li style={{ marginBottom: '8px', fontSize: '14px' }}>✓ Free Airport Transfer (3+ nights)</li>
            <li style={{ marginBottom: '8px', fontSize: '14px' }}>✓ Late Check-out (subject to availability)</li>
            <li style={{ fontSize: '14px' }}>✓ Welcome Drink on Arrival</li>
          </ul>
        </div>
      </div>
      <div style={{ background: 'var(--dark-3)', padding: '40px' }}>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '28px', marginBottom: '24px' }}>Reservation Form</h3>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px', color: 'var(--muted)' }}>Full Name *</label>
            <input type="text" name="name" required onChange={handleChange} style={{ width: '100%', background: 'var(--dark-4)', border: '1px solid rgba(245,240,232,0.1)', padding: '14px', color: 'var(--off-white)', fontFamily: 'var(--font-body)' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px', color: 'var(--muted)' }}>Email</label>
              <input type="email" name="email" onChange={handleChange} style={{ width: '100%', background: 'var(--dark-4)', border: '1px solid rgba(245,240,232,0.1)', padding: '14px', color: 'var(--off-white)' }} />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px', color: 'var(--muted)' }}>Phone *</label>
              <input type="tel" name="phone" required onChange={handleChange} style={{ width: '100%', background: 'var(--dark-4)', border: '1px solid rgba(245,240,232,0.1)', padding: '14px', color: 'var(--off-white)' }} />
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px', color: 'var(--muted)' }}>Check-in</label>
              <input type="date" name="checkIn" onChange={handleChange} style={{ width: '100%', background: 'var(--dark-4)', border: '1px solid rgba(245,240,232,0.1)', padding: '14px', color: 'var(--off-white)' }} />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px', color: 'var(--muted)' }}>Check-out</label>
              <input type="date" name="checkOut" onChange={handleChange} style={{ width: '100%', background: 'var(--dark-4)', border: '1px solid rgba(245,240,232,0.1)', padding: '14px', color: 'var(--off-white)' }} />
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '28px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px', color: 'var(--muted)' }}>Guests</label>
              <select name="guests" onChange={handleChange} style={{ width: '100%', background: 'var(--dark-4)', border: '1px solid rgba(245,240,232,0.1)', padding: '14px', color: 'var(--off-white)' }}>
                <option>1</option><option selected>2</option><option>3</option><option>4</option><option>5+</option>
              </select>
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px', color: 'var(--muted)' }}>Room Type</label>
              <select name="roomType" onChange={handleChange} style={{ width: '100%', background: 'var(--dark-4)', border: '1px solid rgba(245,240,232,0.1)', padding: '14px', color: 'var(--off-white)' }}>
                <option value="superior">Superior Room - ETB 2,800/night</option>
                <option value="deluxe">Executive Deluxe - ETB 4,200/night</option>
                <option value="family">Family Suite - ETB 5,500/night</option>
                <option value="presidential">Presidential Suite - ETB 8,500/night</option>
              </select>
            </div>
          </div>
          <button type="submit" className="btn-primary" style={{ width: '100%' }}><span>Request Booking</span></button>
          <p style={{ fontSize: '11px', textAlign: 'center', marginTop: '16px', color: 'var(--muted)' }}>No payment required now. We'll confirm availability.</p>
        </form>
      </div>
    </section>
  );
};
export default Booking;
