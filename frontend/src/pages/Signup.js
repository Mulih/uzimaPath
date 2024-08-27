import { useState } from 'react';
import { useSignup } from '../Hooks/useSignup.js';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signup, isLoading, error } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(firstName, lastName, email, password);
  };


  return (
    <form className="signup" onSubmit={handleSubmit}>

      <h3>Sign up</h3>

      <label>First Name:</label>
      <input
        type="text"
        onChange={(e) => setFirstName(e.target.value)}
        value={firstName}
      />
      <label>Last Name:</label>
      <input
        type="text"
        onChange={(e) => setLastName(e.target.value)}
        value={lastName}
      />

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
      <div>
        Already have an account?Log in <Link to="/login">here</Link>
      </div>
    </form>
  );

};

export default Signup