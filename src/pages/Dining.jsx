const Dining = () => {
  const diningOptions = [
    {
      name: 'ROOFTOP GRILL',
      type: 'Fine Dining',
      hours: '6PM - 11PM',
      desc: 'Premium steaks and international cuisine with panoramic views of Adama by night.',
      features: ['Panoramic City Views', 'Live Music (Weekends)', 'Wine Selection']
    },
    {
      name: 'ETHIOPIAN HERITAGE',
      type: 'Traditional',
      hours: '12PM - 10PM',
      desc: 'Authentic Ethiopian cuisine featuring injera, doro wat, and regional specialties.',
      features: ['Traditional Coffee Ceremony', 'Cultural Performance', 'Vegetarian Options']
    },
    {
      name: 'LOUNGE BAR',
      type: 'Casual',
      hours: '4PM - 1AM',
      desc: 'Relaxed atmosphere with craft cocktails, light bites, and ambient music.',
      features: ['Craft Cocktails', 'Happy Hour (5-7PM)', 'Light Menu']
    }
  ];

  return (
    <section className="section">
      <div style={{ textAlign: 'center', marginBottom: '56px' }}>
        <div className="section-eyebrow" style={{ justifyContent: 'center' }}>Culinary Excellence</div>
        <h1 className="section-title">DINING<br />EXPERIENCES</h1>
        <p className="rooms-header-desc" style={{ textAlign: 'center', margin: '0 auto', maxWidth: '600px' }}>
          Three exceptional venues — from traditional Ethiopian cuisine to international fusion. Every meal is a journey.
        </p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px' }}>
        {diningOptions.map((venue, idx) => (
          <div key={idx} className="exp-panel" style={{ minHeight: '400px', padding: '40px 32px' }}>
            <div style={{ marginBottom: '16px' }}>
              <div style={{ 
                fontFamily: 'var(--font-cond)', 
                fontSize: '11px', 
                letterSpacing: '0.3em', 
                textTransform: 'uppercase',
                color: 'var(--gold)',
                marginBottom: '8px'
              }}>{venue.type}</div>
              <h3 className="exp-title" style={{ fontSize: '32px', marginBottom: '12px' }}>{venue.name}</h3>
              <div className="exp-divider"></div>
            </div>
            <p className="exp-desc" style={{ fontSize: '14px', marginBottom: '16px' }}>{venue.desc}</p>
            <div style={{ marginBottom: '20px' }}>
              <div style={{ fontSize: '12px', color: 'var(--muted)', marginBottom: '8px' }}>
                <span style={{ color: 'var(--gold)' }}>●</span> {venue.hours}
              </div>
            </div>
            <ul style={{ listStyle: 'none', marginTop: '16px' }}>
              {venue.features.map((feature, fIdx) => (
                <li key={fIdx} style={{ fontSize: '12px', color: 'var(--muted)', marginBottom: '6px' }}>✦ {feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '48px', textAlign: 'center' }}>
        <div style={{ background: 'var(--dark-3)', padding: '32px', maxWidth: '600px', margin: '0 auto' }}>
          <h3 style={{ fontFamily: 'var(--font-cond)', fontSize: '14px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>
            RESERVATIONS
          </h3>
          <p style={{ fontSize: '14px', color: 'var(--muted)', marginBottom: '24px' }}>
            For groups of 8 or more, please contact us directly for special arrangements.
          </p>
          <button className="btn-primary"><span>Book a Table</span></button>
        </div>
      </div>
    </section>
  );
};
export default Dining;
