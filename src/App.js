import React from 'react';
import About from './pages/About/About';
import Landing from './pages/Landing/Landing';
import Events from './pages/Events/Events';
import Join from './pages/Join/Join';
import Contact from './pages/Contact/Contact';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/events" element={<Events />} />
        <Route exact path="/join" element={<Join />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
