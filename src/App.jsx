import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import CustomCursor from './components/CustomCursor';
import Home from './pages/Home';
import About from './pages/About';
import Rooms from './pages/Rooms';
import Services from './pages/Services';
import Booking from './pages/Booking';
import Gallery from './pages/Gallery';
import Dining from './pages/Dining';
import Events from './pages/Events';
import VirtualTour from './pages/VirtualTour';
import './App.css';
function App() {
  return (
    // add basename so BrowserRouter works correctly on GitHub Pages
    <Router basename="/ggtint-hotel">
      <CustomCursor />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/services" element={<Services />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/dining" element={<Dining />} />
          <Route path="/events" element={<Events />} />
          <Route path="/virtual-tour" element={<VirtualTour />} />
        </Routes>
      </main>
      <Footer />
      <FloatingButtons />
    </Router>
  );
}
export default App;
