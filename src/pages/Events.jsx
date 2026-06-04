const Events = () => {
  const eventSpaces = [
    {
      name: 'GRAND BALLROOM',
      capacity: '500+ Guests',
      size: '450m²',
      desc: 'Our flagship event space perfect for weddings, galas, and large corporate functions.',
      features: ['Stage & AV Equipment', 'Catering Kitchen', 'VIP Lounge']
    },
    {
      name: 'CONFERENCE CENTER',
      capacity: '200 Guests',
      size: '280m²',
      desc: 'Modern meeting rooms with state-of-the-art technology for business events.',
      features: ['Video Conferencing', 'Projector Systems', 'Breakout Rooms']
    },
    {
      name: 'GARDEN TERRACE',
      capacity: '150 Guests',
      size: 'Outdoor',
      desc: 'Beautiful outdoor space with stunning views for intimate celebrations.',
      features: ['Natural Lighting', 'Flexible Layout', 'Weather Protection']
    },
    {
      name: 'BOARDROOM',
      capacity: '20 Guests',
      size: '60m²',
      desc: 'Executive meeting space for high-level discussions and private events.',
      features: ['Private Entrance', 'Catering Service', 'Privacy Guaranteed']
    }
  ];

  return (
    <section className="section">
      <div style={{ textAlign: 'center', marginBottom: '56px' }}>
        <div className="section-eyebrow" style={{ justifyContent: 'center' }}>Celebrate With Us</div>
        <h1 className="section-title">EVENTS &<br />MEETINGS</h1>
        <p className="rooms-header-desc" style={{ textAlign: 'center', margin: '0 auto', maxWidth: '600px' }}>
          From intimate gatherings to grand celebrations, our versatile spaces transform to match your vision.
        </p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2px' }}>
        {eventSpaces.map((space, idx) => (
          <div key={idx} className="exp-panel" style={{ minHeight: '350px', padding: '40px 32px' }}>
            <div style={{ marginBottom: '16px' }}>
              <h3 className="exp-title" style={{ fontSize: '36px', marginBottom: '12px' }}>{space.name}</h3>
              <div className="exp-divider"></div>
            </div>
            <p className="exp-desc" style={{ fontSize: '14px', marginBottom: '20px' }}>{space.desc}</p>
            <div style={{ display: 'flex', gap: '24px', marginBottom: '20px' }}>
              <div>
                <div style={{ fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '4px' }}>Capacity</div>
                <div style={{ fontSize: '18px', fontFamily: 'var(--font-display)' }}>{space.capacity}</div>
              </div>
              <div>
                <div style={{ fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '4px' }}>Size</div>
                <div style={{ fontSize: '18px', fontFamily: 'var(--font-display)' }}>{space.size}</div>
              </div>
            </div>
            <ul style={{ listStyle: 'none' }}>
              {space.features.map((feature, fIdx) => (
                <li key={fIdx} style={{ fontSize: '12px', color: 'var(--muted)', marginBottom: '6px' }}>✦ {feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '48px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
        <div style={{ background: 'var(--dark-3)', padding: '32px' }}>
          <h3 style={{ fontFamily: 'var(--font-cond)', fontSize: '14px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>
            WEDDINGS
          </h3>
          <p style={{ fontSize: '14px', color: 'var(--muted)', marginBottom: '20px' }}>
            Let us create your perfect day. Our wedding packages include catering, decoration, and dedicated coordination.
          </p>
          <button className="btn-ghost">Wedding Packages →</button>
        </div>
        <div style={{ background: 'var(--dark-3)', padding: '32px' }}>
          <h3 style={{ fontFamily: 'var(--font-cond)', fontSize: '14px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>
            CORPORATE EVENTS
          </h3>
          <p style={{ fontSize: '14px', color: 'var(--muted)', marginBottom: '20px' }}>
            Professional event planning for conferences, seminars, and corporate retreats with full AV support.
          </p>
          <button className="btn-ghost">Corporate Inquiry →</button>
        </div>
      </div>
    </section>
  );
};
export default Events;
