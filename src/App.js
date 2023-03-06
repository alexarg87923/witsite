import About from './pages/About/About';
import Landing from './pages/Landing/Landing';
import Events from './pages/Events/Events';
import Join from './pages/Join/Join';
import Contact from './pages/Contact/Contact';

import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

function App() {
  return (
      <Router>
      <Routes>
          <Route exact path='/' element={<Landing />} />
          <Route path='/about' element={<About/>} />
          <Route path='/events' element={<Events/>} />
          <Route path='/join' element={<Join/>} />
          <Route path='/contact' element={<Contact/>} />
      </Routes>
      </Router>
  );
  }

  export default App;
