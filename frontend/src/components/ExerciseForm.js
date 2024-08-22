import { useState } from 'react';
import { useExercisesContext } from '../Hooks/useExercisesContext.js';


const ExerciseForm = () =>  {
  const { dispatch } = useExercisesContext();

  const [title, setTitle] = useState('');
  const [weight, setWeight] = useState('');
  const [sets, setSet] = useState('');
  const [duration, setDuration] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const exercise = { title, weight, sets, duration };

    const response = await fetch('http://localhost:5000/api/exercises/', {
      method: 'POST',
      body: JSON.stringify(exercise),
      headers: {
        'Content-Type': 'application/json',
      }
    })
    const data = await response.json();

    if (!response.ok) {
      setError(data.error);
    }
    if (response.ok) {
      setError(null);
      setTitle('');
      setWeight('');
      setSet('');
      setDuration('');
      dispatch({ type: 'CREATE_EXERCISE', payload: data });
      console.log('Exercise added:', data);
    }
  }

  return (
    <form className='create-form' onSubmit={handleSubmit}>
        <h3>Add an exercise</h3>

        <label>Exercise title: </label>
        <input
            type='text'
            onChange={(e) => setTitle(e.target.value)}
            value={title}

        />
        <label>Weight (in kg): </label>
        <input
            type='number'
            onChange={(e) => setWeight(e.target.value)}
            value={weight}
            required

        />
        <label>Sets: </label>
        <input
            type='number'
            onChange={(e) => setSet(e.target.value)}
            value={sets}
            required

        />
        <label>Duration (min): </label>
        <input
            type='number'
            onChange={(e) => setDuration(e.target.value)}
            value={duration}
            required

        />

        <button>Add Exercise</button>
        {error && <div className='error'>Please fill in all the required fields</div>}
      </form>

  );
}

export default ExerciseForm;
