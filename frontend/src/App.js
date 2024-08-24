import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup.js';
import Login from './pages/Login.js';
import LandingPage from './pages/LandingPage.js';
import Home from './pages/Home.js';
import Exercises from './pages/Exercises.js';
import Goals from './pages/Goals.js';
import Navbar from './components/Navbar.js';
import Admin from './pages/Admin.js';
import About from './pages/About.js';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="pages">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/exercises" element={<Exercises />} />
            <Route path="/goals" element={<Goals />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
