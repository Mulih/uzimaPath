import { useState } from 'react';

  const ExerciseForm = () =>  {
    const [title, setTitle] = useState('');
    const [weight, setWeight] = useState('');
    const [duration, setDuration] = useState('');

    const handleSubmit = async (e) => {
      e.preventDefault();
    }

	return (
	  <form className='create-form' onSubmit={handleSubmit}>
        <h3>Add an exercise</h3>

        <label>Exercise title: </label>
        <input
            type='text'
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
        />
        <label>Weight (kg): </label>
        <input
            type='number'
            onChange={(e) => setWeight(e.target.value)}
            value={weight}
            required
        />
        <label>Duration: </label>
        <input
            type='number'
            onChange={(e) => setDuration(e.target.value)}
            value={duration}
            required
        />

        <button>Add Exercise</button>
      </form>

	);
  }

  export default ExerciseForm;
