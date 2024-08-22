import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import Exercises from './pages/Exercises.js';
import Goals from './pages/Goals.js';
import Navbar from './components/Navbar.js';
import Admin from './pages/Admin.js';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exercises" element={<Exercises />} />
            <Route path="/goals" element={<Goals />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
