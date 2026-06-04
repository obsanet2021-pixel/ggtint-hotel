const VirtualTour = () => {
  const tourLocations = [
    { name: 'Presidential Suite', floor: 'Floor 5', status: 'Available' },
    { name: 'Rooftop Restaurant', floor: 'Rooftop', status: 'Available' },
    { name: 'Lobby & Reception', floor: 'Ground Floor', status: 'Available' },
    { name: 'Conference Hall', floor: 'Floor 2', status: 'Available' },
    { name: 'Executive Deluxe', floor: 'Floor 4', status: 'Available' },
    { name: 'Spa & Wellness', floor: 'Floor 1', status: 'Coming Soon' },
  ];

  return (
    <section className="section">
      <div style={{ textAlign: 'center', marginBottom: '56px' }}>
        <div className="section-eyebrow" style={{ justifyContent: 'center' }}>Explore From Anywhere</div>
        <h1 className="section-title">360°<br />VIRTUAL TOUR</h1>
        <p className="rooms-header-desc" style={{ textAlign: 'center', margin: '0 auto', maxWidth: '600px' }}>
          Experience every corner of GGT International Hotel before you arrive. Tour rooms, dining spaces, and event venues in immersive 360°.
        </p>
      </div>
      
      <div style={{ 
        background: 'var(--dark-3)', 
        padding: '48px', 
        marginBottom: '48px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ 
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(212,168,67,0.1) 0%, transparent 60%)'
        }}></div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ fontSize: '64px', marginBottom: '24px' }}>🎥</div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '32px', marginBottom: '16px' }}>
            Interactive Tour Experience
          </h3>
          <p style={{ fontSize: '15px', color: 'var(--muted)', marginBottom: '32px', maxWidth: '400px', margin: '0 auto 32px' }}>
            Click and drag to look around. Navigate between rooms using the hotspots. Experience GGT Hotel from anywhere.
          </p>
          <button className="btn-primary" style={{ fontSize: '14px', padding: '18px 48px' }}>
            <span>Start Full Tour</span>
          </button>
        </div>
      </div>

      <div style={{ marginBottom: '48px' }}>
        <h3 style={{ fontFamily: 'var(--font-cond)', fontSize: '14px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '24px', textAlign: 'center' }}>
          TOUR LOCATIONS
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px' }}>
          {tourLocations.map((location, idx) => (
            <div key={idx} style={{ 
              background: 'var(--dark-3)', 
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '120px'
            }}>
              <div>
                <div style={{ fontSize: '18px', fontFamily: 'var(--font-display)', marginBottom: '8px' }}>{location.name}</div>
                <div style={{ fontSize: '12px', color: 'var(--muted)' }}>{location.floor}</div>
              </div>
              <div style={{ 
                fontSize: '11px', 
                letterSpacing: '0.15em', 
                textTransform: 'uppercase',
                color: location.status === 'Available' ? 'var(--gold)' : 'var(--muted)',
                marginTop: '16px'
              }}>
                {location.status === 'Available' ? '● Ready to View' : '○ Coming Soon'}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ textAlign: 'center' }}>
        <div style={{ background: 'var(--dark-2)', padding: '32px', maxWidth: '700px', margin: '0 auto', border: '1px solid rgba(245,240,232,0.06)' }}>
          <h3 style={{ fontFamily: 'var(--font-cond)', fontSize: '14px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>
            TOUR TIPS
          </h3>
          <ul style={{ listStyle: 'none', textAlign: 'left', maxWidth: '400px', margin: '0 auto' }}>
            <li style={{ fontSize: '14px', color: 'var(--muted)', marginBottom: '12px', display: 'flex', gap: '12px' }}>
              <span style={{ color: 'var(--gold)' }}>→</span> Use desktop for best experience
            </li>
            <li style={{ fontSize: '14px', color: 'var(--muted)', marginBottom: '12px', display: 'flex', gap: '12px' }}>
              <span style={{ color: 'var(--gold)' }}>→</span> Click hotspots to move between rooms
            </li>
            <li style={{ fontSize: '14px', color: 'var(--muted)', marginBottom: '12px', display: 'flex', gap: '12px' }}>
              <span style={{ color: 'var(--gold)' }}>→</span> Drag to look around 360°
            </li>
            <li style={{ fontSize: '14px', color: 'var(--muted)', display: 'flex', gap: '12px' }}>
              <span style={{ color: 'var(--gold)' }}>→</span> Fullscreen mode available
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default VirtualTour;
