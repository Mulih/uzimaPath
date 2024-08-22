import {  useEffect } from 'react';
import { useExercisesContext } from '../Hooks/useExercisesContext.js';

import ExerciseDetails from '../components/ExerciseDetails.js';
import ExerciseForm from '../components/ExerciseForm.js';


  const Exercises = () =>  {
    const { exercises, dispatch } = useExercisesContext();

    useEffect(() => {
        const fetchExercises = async () => {
            const response = await fetch('http://localhost:5000/api/exercises');
            const data = await response.json();

            if (response.ok) {
              dispatch({ type: 'SET_EXERCISES', payload: data });
            }
        }

        fetchExercises();
    }, [dispatch]);

	return (
	  <div className='workouts'>
      <div className='exercises'>
        {exercises && exercises.map((exercise) => (
          <ExerciseDetails key={exercise._id} exercise={exercise} />
        ))}
      </div>
      <ExerciseForm />

	  </div>
	);
  }

  export default Exercises;
