const Services = () => {
  const services = [
    { icon: '🍽', title: 'DINING EXPERIENCES', desc: 'Three exceptional venues — from traditional Ethiopian cuisine to international fusion.', features: ['Rooftop Bar', '24/7 Room Service', 'Buffet Breakfast'] },
    { icon: '💼', title: 'BUSINESS & EVENTS', desc: 'Fully-equipped meeting rooms and conference halls for corporate and social gatherings.', features: ['500+ Capacity Hall', 'AV Equipment', 'Catering Services'] },
    { icon: '🏋️', title: 'WELLNESS & FITNESS', desc: 'Stay energized with our premium fitness center and spa facilities.', features: ['Gym', 'Sauna', 'Massage Services'] },
    { icon: '🚗', title: 'CONCIERGE SERVICES', desc: 'Let us take care of every detail — from airport transfers to city tours.', features: ['Airport Shuttle', 'City Guide', 'Laundry Service'] },
    { icon: '🎉', title: 'CELEBRATIONS', desc: 'Create unforgettable memories with our wedding and event planning services.', features: ['Wedding Packages', 'Birthday Events', 'Custom Menus'] },
    { icon: '🔒', title: 'SECURITY & SAFETY', desc: 'Your safety is our priority with 24/7 security and modern safety systems.', features: ['CCTV', 'Safe Deposit', 'Medical Assistance'] }
  ];
  return (
    <section className="section">
      <div style={{ textAlign: 'center', marginBottom: '56px' }}>
        <div className="section-eyebrow" style={{ justifyContent: 'center' }}>Premium Services</div>
        <h1 className="section-title">WORLD-CLASS<br />AMENITIES</h1>
        <p className="rooms-header-desc" style={{ textAlign: 'center', margin: '0 auto', maxWidth: '600px' }}>
          Experience the finest hospitality services tailored to your every need.
        </p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px' }}>
        {services.map((service, idx) => (
          <div key={idx} className="exp-panel" style={{ minHeight: '320px', padding: '40px 32px' }}>
            <span className="exp-icon" style={{ fontSize: '32px' }}>{service.icon}</span>
            <h3 className="exp-title" style={{ fontSize: '28px', marginBottom: '12px' }}>{service.title}</h3>
            <div className="exp-divider"></div>
            <p className="exp-desc" style={{ fontSize: '13px', marginBottom: '16px' }}>{service.desc}</p>
            <ul style={{ listStyle: 'none', marginTop: '16px' }}>
              {service.features.map((feature, fIdx) => (
                <li key={fIdx} style={{ fontSize: '12px', color: 'var(--muted)', marginBottom: '6px' }}>✦ {feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Services;
