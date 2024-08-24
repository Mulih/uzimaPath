import { Link } from 'react-router-dom';


  const Navbar = () =>  {
    return (
      <header>
        <div className="container">
          <div className='logo'>
            <Link to='/'>
              <h1>Uzima</h1>
            </Link>
            <Link to='/'>
              <img src={process.env.PUBLIC_URL + '/logo.png'} alt="" style={{ width: '100px', height: 'auto' }} />
            </Link>
            <Link to='/'>
              <h1>Path</h1>
            </Link>
          </div>
          <nav className='links'>
            <Link to='/About'>About</Link>
            <Link to='/Contact'>Contact</Link>
          </nav>
        </div>
      </header>
    );
  }

  export default Navbar;
