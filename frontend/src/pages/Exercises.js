import React, { useState, useEffect } from 'react';

import ExerciseDetails from '../components/ExerciseDetails.js';


  const Exercises = () =>  {
    const [exercises, setExercises] = useState(null);

    useEffect(() => {
        const fetchExercises = async () => {
          try {
            const response = await fetch('http://localhost:5000/api/exercises');
            const json = await response.json();

            if (response.ok) {
              setExercises(json);
            } else {
              throw new Error(`HTTP error! status:, ${response.status}`);
            }
          } catch (error) {
            console.error('Failed to fetch exercises:', error);
          }
        }

        fetchExercises();
    }, []);

	return (
	  <div className='workouts'>
      <div className='exercises'>
        {exercises && exercises.map((exercise) => (
          <ExerciseDetails key={exercise._id} exercise={exercise} />

        ))}
      </div>

	  </div>
	);
  }

  export default Exercises;
