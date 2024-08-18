import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.js';
import Exercises from './pages/Exercises.js';
function App() {
  return (

    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercises" element={<Exercises />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
