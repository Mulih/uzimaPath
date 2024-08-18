import React, { useState, useEffect } from 'react';
import { fetchExercises, createExercise } from '../services/api.js';

  const Exercises = () =>  {
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        fetchExercises()
            .then(response => setExercises(response.data))
            .catch(console.error);
    }, []);

	return (
	  <div>
        <h1>Exercises</h1>
        <ul>
            {exercises.map(exercise => (
                <li key={exercise.id}>{exercise.name}</li>
            ))}
        </ul>
        {/* Form to log new exercise */}
        {/* Add more detailed exercise view here */}
	  </div>
	);
  }

  export default Exercises;
