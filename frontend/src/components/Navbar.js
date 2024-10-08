import { Link } from 'react-router-dom';
import { useLogout } from '../Hooks/useLogout.js';
import { useAuthContext } from '../Hooks/useAuthContext.js';




  const Navbar = () =>  {
    const { logout } = useLogout();
    const { user } = useAuthContext();

    const handleClick = () => {
      logout();
    }


    return (
      <header>
        <div className="container">
          <div className='logo'>
            <div className='logo-links'>
              <Link to='/'>
                <h1>Uzima</h1>
              </Link>
              <Link to='/'>
                <img src={process.env.PUBLIC_URL + '/logo.png'} alt="" style={{ width: '100px', height: 'auto' }} />
              </Link>
              <Link to='/'>
                <h1>Path</h1>
              </Link>
              <nav className='user-links'>
                {user && (
                    <div>
                      <Link to={"/Home"}>Home</Link>
                      <Link to="/dashboard">Dashboard</Link>
                      <Link to="/exercises">Exercises</Link>
                      <Link to="/goals">Goals</Link>
                    </div>
                )}
              </nav>
            </div>
          </div>

          <nav>
            {user && (
              <div className='user-details'>
                <span className='email'>{user ? user.email: ''}</span>
                <button onClick={handleClick}>Log out</button>
              </div>
            )}


            {!user && (
              <div className='links'>
                <Link to='/About'>About</Link>
                <Link to='/Contact'>Contact</Link>
              </div>
            )}

          </nav>
        </div>
      </header>
    );
  }

  export default Navbar;
