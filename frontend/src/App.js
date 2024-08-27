import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './Hooks/useAuthContext.js';

import Signup from './pages/Signup.js';
import Login from './pages/Login.js';
import LandingPage from './pages/LandingPage.js';
import Exercises from './pages/Exercises.js';
import Goals from './pages/Goals.js';
import Navbar from './components/Navbar.js';
import Admin from './pages/Admin.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js';
import Dashboard from './pages/Dashboard.js';


function App() {
  const { user } = useAuthContext();

  return (
    <BrowserRouter>
      <Navbar />
      <div className="pages">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/signup"
            element={user ?  <Navigate to="/dashboard" />: <Signup /> }
          />
          <Route
            path="/login"
            element={user ? <Navigate to="/dashboard" /> : <Login /> }
          />
          <Route
            path="/dashboard"
            element={user ? <Dashboard /> : <Navigate to="/login" />}
          />
          <Route
            path="/exercises"
            element={user ? <Exercises /> : <Navigate to="/login" />}
          />
          <Route
            path="/goals"
            element={user ? <Goals /> : <Navigate to="/login" />}
          />
          <Route path="/admin" element={user && user.isAdmin ? <Admin /> : <Navigate to="/login" />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
