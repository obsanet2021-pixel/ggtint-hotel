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
import './App.css';
function App() {
  return (
    <Router>
      <CustomCursor />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/services" element={<Services />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/dining" element={<Services />} />
          <Route path="/events" element={<Services />} />
          <Route path="/virtual-tour" element={<Services />} />
        </Routes>
      </main>
      <Footer />
      <FloatingButtons />
    </Router>
  );
}
export default App;
