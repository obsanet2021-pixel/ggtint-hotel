import { Link } from 'react-router-dom';
const Rooms = () => {
  const roomData = [
    { name: 'PRESIDENTIAL SUITE', tag: 'Signature Suite', price: '8,500', size: '120m²', guests: '4 Guests', features: ['Private Lounge', 'Jacuzzi', 'Panoramic View'] },
    { name: 'EXECUTIVE DELUXE', tag: 'Deluxe Room', price: '4,200', size: '65m²', guests: '2 Guests', features: ['City View', 'Work Desk', 'Mini Bar'] },
    { name: 'SUPERIOR ROOM', tag: 'Standard Room', price: '2,800', size: '45m²', guests: '2 Guests', features: ['Comfort Bed', 'Smart TV', 'Rain Shower'] },
    { name: 'FAMILY SUITE', tag: 'Family Room', price: '5,500', size: '95m²', guests: '4-5 Guests', features: ['Two Bedrooms', 'Kitchenette', 'Children Area'] }
  ];
  return (
    <section className="section">
      <div className="rooms-header" style={{ marginBottom: '56px' }}>
        <div>
          <div className="section-eyebrow">Accommodations</div>
          <h1 className="section-title">OUR ROOMS<br />&amp; SUITES</h1>
        </div>
        <div className="rooms-header-right">
          <p className="rooms-header-desc">Choose your perfect stay. Each room is thoughtfully designed with premium amenities and bold aesthetics.</p>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px' }}>
        {roomData.map((room, idx) => (
          <div key={idx} className="room-card" style={{ height: '400px', borderRadius: '0' }}>
            <div className="room-img-bg" style={{ background: 'var(--dark-3)' }}></div>
            <div className="room-overlay"></div>
            <div className="room-info">
              <div className="room-tag">{room.tag}</div>
              <div className="room-name">{room.name}</div>
              <div style={{ marginTop: '12px', display: 'flex', gap: '16px', fontSize: '13px', color: 'var(--muted)' }}>
                <span>📐 {room.size}</span>
                <span>👥 {room.guests}</span>
              </div>
              <div className="room-meta">
                <div className="room-price">from <strong>ETB {room.price}</strong> / night</div>
                <Link to="/booking">
                  <div className="room-arrow">→</div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Rooms;
