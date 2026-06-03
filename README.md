<div align="center">
  
  <img src="https://img.shields.io/badge/React-18.2-61DAFB?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React">
  <img src="https://img.shields.io/badge/Vite-5.0-646CFF?style=for-the-badge&logo=vite&logoColor=646CFF" alt="Vite">
  <img src="https://img.shields.io/badge/Router-6.22-CA4245?style=for-the-badge&logo=react-router&logoColor=CA4245" alt="React Router">
  
  <br>
  
  <img src="https://img.shields.io/badge/status-live-00C853?style=flat-square" alt="Status">
  <img src="https://img.shields.io/badge/license-MIT-blue?style=flat-square" alt="License">
  
</div>

---

<h1 align="center">
  🏨 GGT INTERNATIONAL HOTEL
</h1>

<p align="center">
  <b>Where Adama Comes Alive — Bold Comfort, Vibrant Energy, Unforgettable Experiences</b>
</p>

<p align="center">
  A premium hotel booking platform with immersive 360° virtual tours, modern UI/UX, and seamless booking experience.
</p>

<br>

<p align="center">
  <img src="https://via.placeholder.com/1200x600/0A0A08/D4A843?text=GGT+Hotel+Preview" alt="GGT Hotel Preview" width="90%">
</p>

<br>

## 📋 Table of Contents

- [✨ Features](#-features)
- [🎨 Design System](#-design-system)
- [📁 Project Structure](#-project-structure)
- [🚀 Quick Start](#-quick-start)
- [🛠️ Tech Stack](#️-tech-stack)
- [📱 Pages & Routes](#-pages--routes)
- [🎯 Core Components](#-core-components)
- [⚙️ Installation & Setup](#️-installation--setup)
- [🔧 Build & Deployment](#-build--deployment)
- [🌍 Environment Variables](#-environment-variables)
- [📝 Code Style](#-code-style)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [📞 Contact & Support](#-contact--support)

<br>

## ✨ Features

### 🏆 Premium Functionality

| Feature | Description |
|---------|-------------|
| 🎨 **Bold Modern UI** | Dark theme with elegant gold accents, custom cursor animations, and smooth transitions |
| 🔄 **360° Virtual Tours** | Immersive room previews before booking |
| 📱 **Fully Responsive** | Optimized for desktop, tablet, and mobile devices |
| 🏨 **Room Management** | Display of suites, deluxe rooms, and standard accommodations with dynamic pricing |
| 🍽️ **Service Showcase** | Dining venues, event spaces, and amenities presented in an engaging grid layout |
| 📍 **Location Integration** | Interactive map simulation with address and contact details |
| ⭐ **Testimonials** | Social proof section with guest reviews and ratings |
| 💬 **WhatsApp Booking** | Direct messaging integration for instant reservations |
| 🖱️ **Custom Cursor** | Premium interactive cursor experience matching brand aesthetics |
| ♿ **Accessibility Ready** | Semantic HTML and keyboard-navigable components |

### 🎯 User Experience Highlights

- ⚡ **Lightning Fast** — Built with Vite for instant hot reload and optimized production builds
- 🎬 **Smooth Animations** — CSS-powered fade-ups, marquee strips, and hover effects
- 📱 **Mobile First** — Responsive design that looks stunning on any device
- 🔒 **Secure Booking** — Form validation and secure data handling
- 🌙 **Dark Theme** — Elegant dark design that reduces eye strain and looks premium

<br>

## 🎨 Design System

### Color Palette

```css
:root {
  --gold: #D4A843;           /* Primary accent */
  --gold-light: #F0C96A;     /* Hover states */
  --gold-dim: #8A6B28;       /* Subtle accents */
  --dark: #0A0A08;           /* Primary background */
  --dark-2: #111110;         /* Secondary background */
  --dark-3: #1A1A17;         /* Card backgrounds */
  --dark-4: #242420;         /* Surface elevations */
  --off-white: #F5F0E8;      /* Primary text */
  --muted: #8A8880;          /* Secondary text */
}
```

Typography

- Bebas Neue — Display, Headings, Hero Titles
- Barlow Condensed — Navigation, Buttons, Labels, Stats
- Barlow — Body text, Descriptions, Testimonials

Spacing system: base unit 4px (0.25rem). Section padding and component gaps as needed.


## 📁 Project Structure

```
ggtint-hotel/
├── public/                      # Static assets
│   └── vite.svg                 # Favicon / logo
├── src/
│   ├── components/              # Reusable UI components
│   │   ├── Navbar.jsx           # Main navigation with booking CTA
│   │   ├── Footer.jsx           # Footer with links and social media
│   │   ├── FloatingButtons.jsx  # WhatsApp & booking floaters
│   │   └── CustomCursor.jsx     # Custom cursor implementation
│   ├── pages/                   # Route-based pages
│   │   ├── Home.jsx             # Landing page with hero, rooms, experience
│   │   ├── About.jsx            # Hotel story, stats, values
│   │   ├── Rooms.jsx            # All room types with details
│   │   ├── Services.jsx         # Amenities, dining, events, wellness
│   │   └── Booking.jsx          # Reservation form with validation
│   ├── App.jsx                  # Main app with routing configuration
│   ├── main.jsx                 # Application entry point
│   └── index.css                # Global variables & base styles
├── index.html                   # HTML entry point
├── package.json                 # Dependencies & scripts
├── vite.config.js               # Vite configuration
└── README.md                    # Documentation (you are here)
```

## 🚀 Quick Start

Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0 or yarn >= 1.22.0

One-Click Setup

```bash
# Clone the repository
git clone https://github.com/obsanet2021-pixel/ggtint-hotel.git
cd ggtint-hotel

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will open at http://localhost:3000 by default.


## 🛠️ Tech Stack

- React 18.2.0 — UI library
- React Router DOM 6.22.0 — Client-side routing
- Vite 5.x — Dev server & build tool
- Plain CSS with CSS variables for theming


## 📱 Pages & Routes

- / — Home
- /about — About
- /rooms — Rooms
- /services — Services
- /booking — Booking
- /virtual-tour — 360° Virtual Tour


## ⚙️ Installation & Setup

Follow Quick Start above. See package.json for scripts (dev, build, preview).


## 🔧 Build & Deployment

Production build:

```bash
npm run build
```

Deploy to Vercel, Netlify, GitHub Pages, or S3/CloudFront as preferred.


## 🌍 Environment Variables

Create a .env file in the project root for runtime configuration. Example:

```
VITE_API_URL=https://api.ggthotel.com
VITE_WHATSAPP_NUMBER=251912345678
VITE_GOOGLE_MAPS_KEY=your_api_key_here
```


## 📝 Code Style

Follow consistent component structure, meaningful commit messages, and test responsive layouts.


## 🤝 Contributing

Contributions welcome — fork the repo, create a branch, and open a pull request. Follow development guidelines in this README.


## 📄 License

This project is licensed under the MIT License — see the LICENSE file for details.


## 📞 Contact & Support

- Project Lead — @yourusername
- Technical Support — tech@ggthotel.com
- Reservations — +251 912 345 678
- Website — www.ggthotel.com
- Address — Near Oliyad Cinema, Adama, Oromia Region, Ethiopia

<div align="center">
⭐ Star this repo if you find it useful!

<sub>© 2025 GGT International Hotel. All rights reserved.</sub>

</div>
