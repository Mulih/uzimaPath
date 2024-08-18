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
                <ul key={exercise.user.id}>{exercise.user._username} : ({exercise.type} - {exercise.duration})</ul>
            ))}
        </ul>
        {/* Form to log new exercise */}
        {/* Add more detailed exercise view here */}
	  </div>
	);
  }

  export default Exercises;
