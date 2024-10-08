import { useState} from 'react';
import { useLogin } from '../Hooks/useLogin.js';
import { Link } from 'react-router-dom';

const Login = () =>  {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, isLoading, error } = useLogin();

  const handleSubmit = async (e) => {
      e.preventDefault();

      await login(email, password);
  };

  return (
    <form className="login" onSubmit={handleSubmit}>

        <h3>Log in</h3>

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

        <button disabled={isLoading} className='btn btn-primary btn-dark btn-lg px-4 me-md-2'>Log in</button>
        {error && <div className="error">{error}</div>}
        <div>
            Don't have an account?Sign up today <Link to="/signup">here</Link>
        </div>
      </form>
  );
};

export default Login;
