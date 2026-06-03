import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="hero-photo-sim">
          <div className="hero-arch">
            <svg viewBox="0 0 1440 900" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="white" strokeWidth="0.5">
              <line x1="720" y1="0" x2="200" y2="900"/>
              <line x1="720" y1="0" x2="1240" y2="900"/>
              <line x1="720" y1="0" x2="720" y2="900"/>
              <line x1="720" y1="0" x2="0" y2="600"/>
              <line x1="720" y1="0" x2="1440" y2="600"/>
              <line x1="0" y1="900" x2="1440" y2="300"/>
              <line x1="0" y1="300" x2="1440" y2="300" strokeWidth="0.3"/>
              <line x1="0" y1="600" x2="1440" y2="600" strokeWidth="0.3"/>
              <line x1="360" y1="0" x2="360" y2="900" strokeWidth="0.3"/>
              <line x1="720" y1="0" x2="720" y2="900" strokeWidth="0.3"/>
              <line x1="1080" y1="0" x2="1080" y2="900" strokeWidth="0.3"/>
            </svg>
          </div>
        </div>
        <div className="hero-content">
          <div className="hero-left">
            <div className="hero-eyebrow">International Hotel — Adama, Ethiopia</div>
            <h1 className="hero-title">
              <span>Where</span>
              <span className="line-accent">Adama</span>
              <span className="line-outline">Comes</span>
              <span>Alive.</span>
            </h1>
            <p className="hero-desc">Bold comfort, vibrant energy, and unforgettable experiences at the heart of Oromia's most electric city.</p>
            <div className="hero-actions">
              <Link to="/rooms">
                <button className="btn-primary"><span>Explore Rooms</span></button>
              </Link>
              <Link to="/virtual-tour">
                <button className="btn-ghost">Virtual Tour →</button>
              </Link>
            </div>
          </div>
          <div className="hero-right">
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-num">48<span>+</span></div>
                <div className="stat-label">Premium Rooms</div>
              </div>
              <div className="stat-item">
                <div className="stat-num">4<span>★</span></div>
                <div className="stat-label">Star Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-num">3<span>×</span></div>
                <div className="stat-label">Dining Venues</div>
              </div>
            </div>
            <div className="hero-scroll">
              <div className="scroll-line"></div>
              Scroll to explore
            </div>
          </div>
        </div>
      </section>
      {/* MARQUEE */}
      <div className="marquee-strip">
        <div className="marquee-track">
          <span className="marquee-item">Premium Rooms</span>
          <span className="marquee-dot">✦</span>
          <span className="marquee-item">Rooftop Dining</span>
          <span className="marquee-dot">✦</span>
          <span className="marquee-item">360° Virtual Tour</span>
          <span className="marquee-dot">✦</span>
          <span className="marquee-item">Event Spaces</span>
          <span className="marquee-dot">✦</span>
          <span className="marquee-item">City Center Location</span>
          <span className="marquee-dot">✦</span>
          <span className="marquee-item">Free WiFi</span>
          <span className="marquee-dot">✦</span>
          <span className="marquee-item">Business Facilities</span>
          <span className="marquee-dot">✦</span>
          <span className="marquee-item">Premium Rooms</span>
          <span className="marquee-dot">✦</span>
          <span className="marquee-item">Rooftop Dining</span>
          <span className="marquee-dot">✦</span>
          <span className="marquee-item">360° Virtual Tour</span>
          <span className="marquee-dot">✦</span>
          <span className="marquee-item">Event Spaces</span>
          <span className="marquee-dot">✦</span>
          <span className="marquee-item">City Center Location</span>
          <span className="marquee-dot">✦</span>
          <span className="marquee-item">Free WiFi</span>
          <span className="marquee-dot">✦</span>
          <span className="marquee-item">Business Facilities</span>
          <span className="marquee-dot">✦</span>
        </div>
      </div>
      {/* ROOMS SECTION */}
      <section className="section">
        <div className="rooms-header">
          <div>
            <div className="section-eyebrow">Accommodations</div>
            <h2 className="section-title">ROOMS<br />&amp; SUITES</h2>
          </div>
          <div className="rooms-header-right">
            <p className="rooms-header-desc">Every room designed to energize. From our signature suites to our executive floors — bold comfort, every night.</p>
            <Link to="/rooms">
              <button className="btn-ghost">View All Rooms →</button>
            </Link>
          </div>
        </div>
        <div className="rooms-grid">
          <div className="room-card">
            <div className="room-img-bg">
              <svg className="room-decor" viewBox="0 0 600 560" fill="none" stroke="white" strokeWidth="0.4">
                <rect x="40" y="40" width="520" height="340" rx="2"/>
                <rect x="80" y="80" width="200" height="260" rx="1"/>
                <rect x="320" y="80" width="200" height="120" rx="1"/>
                <line x1="40" y1="420" x2="560" y2="420"/>
                <rect x="80" y="440" width="120" height="60" rx="1"/>
                <rect x="240" y="440" width="80" height="60" rx="1"/>
              </svg>
            </div>
            <div className="room-overlay"></div>
            <div className="badge-360">
              <div className="badge-360-icon"></div>
              <span>360° Tour</span>
            </div>
            <div className="room-info">
              <div className="room-tag">Signature Suite</div>
              <div className="room-name">PRESIDENTIAL<br />SUITE</div>
              <div className="room-meta">
                <div className="room-price">from <strong>ETB 8,500</strong> / night</div>
                <div className="room-arrow">→</div>
              </div>
            </div>
          </div>
          <div className="room-card">
            <div className="room-img-bg">
              <svg className="room-decor" viewBox="0 0 300 560" fill="none" stroke="white" strokeWidth="0.4">
                <rect x="20" y="30" width="260" height="180" rx="2"/>
                <rect x="40" y="240" width="100" height="80" rx="1"/>
                <rect x="160" y="240" width="100" height="80" rx="1"/>
                <line x1="20" y1="350" x2="280" y2="350"/>
              </svg>
            </div>
            <div className="room-overlay"></div>
            <div className="badge-360">
              <div className="badge-360-icon"></div>
              <span>360°</span>
            </div>
            <div className="room-info">
              <div className="room-tag">Deluxe Room</div>
              <div className="room-name">EXECUTIVE<br />DELUXE</div>
              <div className="room-meta">
                <div className="room-price">from <strong>ETB 4,200</strong></div>
                <div className="room-arrow">→</div>
              </div>
            </div>
          </div>
          <div className="room-card">
            <div className="room-img-bg">
              <svg className="room-decor" viewBox="0 0 300 560" fill="none" stroke="white" strokeWidth="0.4">
                <rect x="20" y="30" width="260" height="160" rx="2"/>
                <rect x="50" y="220" width="200" height="100" rx="1"/>
                <line x1="20" y1="340" x2="280" y2="340"/>
                <circle cx="150" cy="380" r="30"/>
              </svg>
            </div>
            <div className="room-overlay"></div>
            <div className="room-info">
              <div className="room-tag">Standard Room</div>
              <div className="room-name">SUPERIOR<br />ROOM</div>
              <div className="room-meta">
                <div className="room-price">from <strong>ETB 2,800</strong></div>
                <div className="room-arrow">→</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="gold-line"></div>
      {/* EXPERIENCE SECTION */}
      <section className="experience-section">
        <div style={{ paddingBottom: '56px' }}>
          <div className="section-eyebrow">What We Offer</div>
          <h2 className="section-title">THE GGT<br />EXPERIENCE</h2>
        </div>
        <div className="experience-grid">
          <div className="exp-panel">
            <div className="exp-num">01</div>
            <span className="exp-icon">🍽</span>
            <h3 className="exp-title">ROOFTOP<br />DINING &amp;<br />BAR</h3>
            <div className="exp-divider"></div>
            <p className="exp-desc">Three dining venues — from traditional Ethiopian cuisine to international fusion. The rooftop bar offers panoramic views of Adama by night.</p>
          </div>
          <div className="exp-panel">
            <div className="exp-num">02</div>
            <span className="exp-icon">🎉</span>
            <h3 className="exp-title">EVENTS &amp;<br />MEETINGS</h3>
            <div className="exp-divider"></div>
            <p className="exp-desc">Fully-equipped conference halls, banquet spaces, and intimate event rooms for every occasion.</p>
          </div>
          <div className="exp-panel" style={{ cursor: 'none' }}>
            <div className="exp-num">03</div>
            <span className="exp-icon">📍</span>
            <h3 className="exp-title">EXPLORE<br />IN 360°</h3>
            <div className="exp-divider"></div>
            <p className="exp-desc">Tour every room, lobby, and dining space from anywhere in the world before you arrive.</p>
            <Link to="/virtual-tour">
              <button className="btn-primary" style={{ marginTop: '24px', alignSelf: 'flex-start' }}><span>Start Tour →</span></button>
            </Link>
          </div>
        </div>
      </section>
      {/* TESTIMONIAL */}
      <section className="testimonial-section">
        <div className="testimonial-inner">
          <div className="testimonial-stars">
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
          </div>
          <p className="testimonial-text">"GGT is unlike any hotel in Adama. The energy is different — from the moment you walk in, you feel it. Rooms are immaculate, staff are incredible. This is the standard."</p>
          <div className="testimonial-author">
            <div className="author-avatar">YA</div>
            <div className="author-info">
              <div className="author-name">Yohannes Abebe</div>
              <div className="author-role">Business Traveler · Addis Ababa</div>
            </div>
          </div>
        </div>
      </section>
      {/* LOCATION */}
      <section className="location-section">
        <div className="location-map-mock">
          <div className="map-grid"></div>
          <svg className="map-roads" viewBox="0 0 500 500" fill="none">
            <line x1="0" y1="250" x2="500" y2="250" stroke="rgba(212,168,67,0.12)" strokeWidth="8"/>
            <line x1="250" y1="0" x2="250" y2="500" stroke="rgba(212,168,67,0.12)" strokeWidth="8"/>
            <line x1="0" y1="170" x2="500" y2="170" stroke="rgba(212,168,67,0.05)" strokeWidth="4"/>
            <line x1="0" y1="330" x2="500" y2="330" stroke="rgba(212,168,67,0.05)" strokeWidth="4"/>
            <line x1="160" y1="0" x2="160" y2="500" stroke="rgba(212,168,67,0.05)" strokeWidth="4"/>
            <line x1="340" y1="0" x2="340" y2="500" stroke="rgba(212,168,67,0.05)" strokeWidth="4"/>
            <line x1="0" y1="0" x2="500" y2="500" stroke="rgba(212,168,67,0.04)" strokeWidth="3"/>
            <line x1="500" y1="0" x2="0" y2="500" stroke="rgba(212,168,67,0.04)" strokeWidth="3"/>
          </svg>
          <div className="map-pin">
            <div className="pin-dot"></div>
            <div className="pin-label">GGT Hotel Adama</div>
          </div>
        </div>
        <div className="location-info">
          <div className="section-eyebrow">Find Us</div>
          <h2 className="section-title" style={{ marginBottom: '40px' }}>HEART OF<br />THE CITY</h2>
          <div className="location-detail">
            <div className="detail-icon">📍</div>
            <div>
              <div className="detail-label">Address</div>
              <div className="detail-text">Near Oliyad Cinema, Adama<br />Oromia Region, Ethiopia</div>
            </div>
          </div>
          <div className="location-detail">
            <div className="detail-icon">📞</div>
            <div>
              <div className="detail-label">Reservations</div>
              <div className="detail-text">+251 912 345 678<br />Available 24/7</div>
            </div>
          </div>
          <div className="location-detail">
            <div className="detail-icon">✈️</div>
            <div>
              <div className="detail-label">From Addis Ababa</div>
              <div className="detail-text">99 km · 90 min drive<br />Airport transfers available</div>
            </div>
          </div>
          <div style={{ marginTop: '36px', display: 'flex', gap: '16px' }}>
            <button className="btn-primary"><span>Get Directions</span></button>
            <button className="btn-ghost">WhatsApp Us</button>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
