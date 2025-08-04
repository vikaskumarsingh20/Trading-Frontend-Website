import React from 'react';
import Navbar from './components/landingPage/Navbar.jsx';
import Trades from './components/landingPage/Trades.jsx';
import OurServices from './components/landingPage/OurServices.jsx';
import HowItsWork from './components/landingPage/HowItsWork.jsx'; 
import PriceAndPlans from './components/landingPage/PriceAndPlans.jsx';
import Footer from './components/landingPage/Footer.jsx'; // Assuming this is the correct import path
import Feedback from './components/landingPage/Feedback.jsx';
function App() {


  return (
    <>
      <Navbar />
      <Trades />
      <OurServices />
      <HowItsWork />
      <PriceAndPlans /> 
      <Feedback />
      <Footer/>
    </>
  )
}

export default App
