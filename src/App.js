import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import TechRoadmap from './components/TechRoadmap';
import Steps from './components/Steps';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import HireUs from './components/HireUs'; // Import the new HireUs component
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Portfolio />
              <Services />
              <TechRoadmap />
              <Steps />
              <Testimonials />
            </>
          } />
          <Route path="/hire-us" element={<HireUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;