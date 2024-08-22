import { useState } from 'react';

  const ExerciseForm = () =>  {
    const [title, setTitle] = useState('');
    const [weight, setWeight] = useState('');
    const [duration, setDuration] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
      e.preventDefault();

      const exercise = { title, weight, duration };

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
        setTitle('');
        setWeight('');
        setDuration('');
        setError(null);
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
        <label>Weight (kg): </label>
        <input
            type='number'
            onChange={(e) => setWeight(e.target.value)}
            value={weight}

        />
        <label>Duration (min): </label>
        <input
            type='number'
            onChange={(e) => setDuration(e.target.value)}
            value={duration}

        />

        <button>Add Exercise</button>
        {error && <div className='error'>{error}</div>}
      </form>

	);
  }

  export default ExerciseForm;
