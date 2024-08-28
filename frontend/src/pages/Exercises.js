import {  useEffect } from 'react';
import { useExercisesContext } from '../Hooks/useExercisesContext.js';
import { useAuthContext } from '../Hooks/useAuthContext.js';

//components
import ExerciseDetails from '../components/ExerciseDetails.js';
import ExerciseForm from '../components/ExerciseForm.js';


const Exercises = () =>  {
    const { exercises, dispatch } = useExercisesContext();
    const { user } = useAuthContext();

    useEffect(() => {
        const fetchExercises = async () => {
            const response = await fetch('http://localhost:5000/api/exercises', {
              headers: {
                'Authorization': `Bearer ${user.token}`
              }
            });
            const data = await response.json();

            if (response.ok) {
              dispatch({ type: 'SET_EXERCISES', payload: data });
            }
        }

        if (user) {
          fetchExercises();
        }
    }, [dispatch, user]);

	return (
	  <div className='workouts'>
      <div className='pb-4 pt-4'>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/">Home</a></li>
          <li class="breadcrumb-item active" aria-current="page">Exercises</li>
          </ol>
        </nav>
        <div className='exercises row'>
          {exercises && exercises.map((exercise) => (
            <ExerciseDetails key={exercise._id} exercise={exercise} />
          ))}
        </div>
      </div>
      <ExerciseForm />

	  </div>
	);
};

export default Exercises;
