import About from './About';
import Landing from './Landing';

import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

function App() {
  return (
      <Router>
      <Routes>
          <Route exact path='/' element={<Landing />} />
          <Route path='/about' element={<About/>} />
      </Routes>
      </Router>
  );
  }

  export default App;
