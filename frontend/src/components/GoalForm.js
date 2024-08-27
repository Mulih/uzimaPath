import { useState } from 'react';
import { useGoalsContext } from '../Hooks/useGoalsContext.js';
import { useAuthContext } from '../Hooks/useAuthContext.js';


export const GoalForm = () =>  {
  const { dispatch } = useGoalsContext();
  const { user } = useAuthContext();

  const [title, setTitle] = useState('');
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  const [target, setTarget] = useState('');
  const [start_date, setStart_date] = useState('');
  const [progress, setProgress] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setError('You must be logged in')
      return;
    }

    const goal = { title, type, description, target, start_date, progress };

    const response = await fetch('http://localhost:5000/api/goals/', {
      method: 'POST',
      body: JSON.stringify(goal),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      }
    })
    const data = await response.json();

    if (!response.ok) {
      setError(data.error);
    }
    if (response.ok) {
      setError(null);
      setTitle('');
      setType('');
      setDescription('');
      setTarget('');
      setStart_date('');
      setProgress('');
      dispatch({ type: 'CREATE_GOAL', payload: data });
      console.log('Goal added:', data);
    }
  }

  return (
    <form className='create-form' onSubmit={handleSubmit}>
        <h3>Add a Goal</h3>

        <label>Goal title: </label>
        <input
            type='text'
            onChange={(e) => setTitle(e.target.value)}
            value={title}

        />
        <label>Type: </label>
        <select
            onChange={(e) => setType(e.target.value)}
            value={type}
            required
        >
            <option value='diet'>Diet</option>
            <option value='exercise'>Exercise</option>
            <option value='productivity'>Productivity</option>
            <option value='wellness'>Wellness</option>
        </select>

        <label>Description: </label>
        <input
            type='text'
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            required

        />
        <label>Target: </label>
        <input
            type='text'
            onChange={(e) => setTarget(e.target.value)}
            value={target}
            required
        />
        <label>Start</label>
        <input
            type='date'
            onChange={(e) => setStart_date(e.target.value)}
            value={start_date}
        />


        <button className='btn btn-primary btn-dark btn-lg px-4 me-md-2'>Add Goal</button>
        {error && <div className='error'>Please fill in all the required field  s</div>}
      </form>

  );
}

export default GoalForm;
