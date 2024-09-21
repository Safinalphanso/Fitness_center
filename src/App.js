import React, { useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Services from './Components/Services';
import About from './Components/About';
import Plans from './Components/Plans';
import Review from './Components/Review';
import Footer from './Components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Animation easing
    });
  }, []);

  return (
    <div>
      <Header />
      <Home />
      <Services />
      <About />
      <Plans />
      <Review />
      <Footer />
    </div>
  );
}

export default App;
