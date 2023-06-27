import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';

import About from './pages/About/About';
import Landing from './pages/Landing/Landing';
import Events from './pages/Events/Events';
import AddEvents from './pages/AddEvents/AddEvents';
import Contact from './pages/Contact/Contact';
import Error from './pages/Error/Error';

import { toast, ToastContainer } from 'react-toastify';
import './assets/css/toast.css';
import { CloseButton } from './components/common/Toast/Toast';

import Nav from './components/common/Nav/NavBar';
import Footer from './components/common/Footer/Footer';

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/events" element={<Events />} />
          <Route exact path="/addevents" element={<AddEvents />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
      <ToastContainer
        closeButton={CloseButton}
        icon={false}
        position={toast.POSITION.BOTTOM_LEFT}
      />
    </>
  );
}

export default App;
