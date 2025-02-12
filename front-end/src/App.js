import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';

import About from './pages/About/About.js';
import Landing from './pages/Landing/Landing.js';
import Events from './pages/Events/Events.js';
import AddEvents from './pages/AddEvents/AddEvents.js';
import Contact from './pages/Contact/Contact.js';
import Error from './pages/Error/Error.js';
import AdminContact from './pages/AdminPage/AdminContact.js';
import AdminEvent from './pages/AdminPage/AdminEvent.js';

import { toast, ToastContainer } from 'react-toastify';
import './assets/css/toast.css';
import { CloseButton } from './components/common/Toast/Toast.js';

import Nav from './components/common/Nav/NavBar.js';
import Footer from './components/common/Footer/Footer.js';


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
          <Route exact path="/admin-contact" element={<AdminContact />} />
          <Route exact path="/admin-event" element={<AdminEvent />} />
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
};

export default App;
