import { useState} from 'react';
import { UseSignup } from '../Hooks/useSignup.js';

  const Signup = () =>  {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { signup, error, isLoading } = UseSignup();

    const  handleSubmit = async (e) => {
        e.preventDefault();

        await signup(email, password);
    }

	return (
	  <form className="signup" onSubmit={handleSubmit}>

        <h3>Sign up</h3>

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

        <button disabled={isLoading} className='btn btn-primary btn-dark btn-lg px-4 me-md-2'>Sign up</button>
        {error && <div className="error">{error}</div>}
      </form>
	);
  }

  export default Signup;
