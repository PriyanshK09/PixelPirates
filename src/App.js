import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Steps from './components/Steps';
import Footer from './components/Footer';
import './App.css';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Hero />
            <Portfolio />
            <Services />
            <Steps />
            <Footer />
        </div>
    );
}

export default App;
