const About = () => {
  return (
    <section className="section" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div className="section-eyebrow">Our Story</div>
      <h1 className="hero-title" style={{ marginBottom: '32px' }}>
        <span>About</span>
        <span className="line-accent">GGT</span>
        <span>International</span>
      </h1>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <p style={{ fontSize: '18px', lineHeight: '1.8', marginBottom: '24px', color: 'rgba(245,240,232,0.8)' }}>
          GGT International Hotel stands as a beacon of modern luxury in the heart of Adama, Ethiopia. 
          Since our founding, we've redefined hospitality by blending contemporary design with authentic Ethiopian warmth.
        </p>
        <p style={{ fontSize: '16px', lineHeight: '1.7', color: 'rgba(245,240,232,0.6)' }}>
          Our name — GGT — represents our commitment to Greatness, Generosity, and Tradition. We believe every guest 
          deserves an experience that energizes and inspires. From our meticulously designed rooms to our world-class dining, 
          every detail is crafted with purpose.
        </p>
        <div className="gold-line" style={{ margin: '48px 0' }}></div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px', marginTop: '48px' }}>
          <div>
            <div className="stat-num" style={{ fontSize: '36px' }}>2018</div>
            <div className="stat-label">Year Established</div>
          </div>
          <div>
            <div className="stat-num" style={{ fontSize: '36px' }}>48+</div>
            <div className="stat-label">Luxury Rooms</div>
          </div>
          <div>
            <div className="stat-num" style={{ fontSize: '36px' }}>100+</div>
            <div className="stat-label">Happy Staff</div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
