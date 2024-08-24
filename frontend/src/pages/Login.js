import { useState} from 'react';
import { Link } from 'react-router-dom';

  const Login = () =>  {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const  handleSubmit = async (e) => {
        e.preventDefault();

        console.log('Login form submitted with:', email, password);
    }

	return (
	  <form className="login" onSubmit={handleSubmit}>

        <h3>Login</h3>

        <label>Email:</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label>Password:</label>
        <input
          type="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <button className='btn btn-primary btn-dark btn-lg px-4 me-md-2'>Login</button>
        <div>
            Don't have an account?Sign up today <Link to="/login">Sign up</Link>
        </div>
      </form>
	);
  }

  export default Login;
