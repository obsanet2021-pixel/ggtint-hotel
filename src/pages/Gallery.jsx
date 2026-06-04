const Gallery = () => {
  const galleryItems = [
    { title: 'Presidential Suite', category: 'Rooms' },
    { title: 'Rooftop Dining', category: 'Dining' },
    { title: 'Conference Hall', category: 'Events' },
    { title: 'Executive Deluxe', category: 'Rooms' },
    { title: 'Lobby Lounge', category: 'Common Areas' },
    { title: 'Spa & Wellness', category: 'Amenities' },
    { title: 'Pool Area', category: 'Amenities' },
    { title: 'Banquet Hall', category: 'Events' },
    { title: 'Superior Room', category: 'Rooms' },
  ];

  return (
    <section className="section">
      <div style={{ textAlign: 'center', marginBottom: '56px' }}>
        <div className="section-eyebrow" style={{ justifyContent: 'center' }}>Visual Journey</div>
        <h1 className="section-title">GALLERY</h1>
        <p className="rooms-header-desc" style={{ textAlign: 'center', margin: '0 auto', maxWidth: '600px' }}>
          Explore the spaces that make GGT International Hotel a destination of bold comfort and vibrant energy.
        </p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px' }}>
        {galleryItems.map((item, idx) => (
          <div key={idx} style={{ 
            aspectRatio: '4/3', 
            background: 'var(--dark-3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{ 
              position: 'absolute',
              inset: 0,
              background: `linear-gradient(135deg, var(--dark-4) 0%, var(--dark-3) 100%)`,
              opacity: 0.5
            }}></div>
            <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
              <div style={{ 
                fontFamily: 'var(--font-display)', 
                fontSize: '24px', 
                color: 'var(--off-white)',
                marginBottom: '8px'
              }}>{item.title}</div>
              <div style={{ 
                fontFamily: 'var(--font-cond)', 
                fontSize: '11px', 
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--gold)'
              }}>{item.category}</div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '48px', textAlign: 'center' }}>
        <p style={{ fontSize: '14px', color: 'var(--muted)', marginBottom: '24px' }}>
          More images coming soon. Experience our spaces in person with a 360° virtual tour.
        </p>
        <button className="btn-ghost">View Virtual Tour →</button>
      </div>
    </section>
  );
};
export default Gallery;
