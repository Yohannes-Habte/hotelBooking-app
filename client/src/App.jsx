import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/homePage/Home';
import About from './views/aboutPage/About';
import Hotels from './views/hotelsPage/Hotels';
import Hotel from './views/hotelPage/Hotel';
import Login from './views/loginPage/Login';
import Register from './views/registerPage/Register';
import Navbar from './components/navbar/Navbar';
import Contact from './views/contactPage/Contact';
import Rooms from './views/roomsPage/Rooms';
import Footer from './components/footer/Footer';
import StripeSuccess from './views/payment/StripeSuccess';
import StripeCancel from './views/payment/StripeCancel';
import HotelReservation from './views/bookingPage/HotelReservation';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/hotels/:hotelId" element={<Hotel />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/payment" element={<HotelReservation />} />
          <Route path="/stripe-success" element={<StripeSuccess />} />
          <Route path="/stripe-cancel" element={<StripeCancel />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
