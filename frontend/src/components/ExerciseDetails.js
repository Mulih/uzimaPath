import { useExercisesContext } from '../Hooks/useExercisesContext.js';
import { useAuthContext } from '../Hooks/useAuthContext.js';

import formatDistanceToNow from 'date-fns/formatDistanceToNow';

export const ExerciseDetails = ({ exercise }) =>  {

  const { dispatch } = useExercisesContext();
  const { user } = useAuthContext();

  const handleClick = async () => {
    if (!user) {
      console.log('You must be logged in');
      return;
    }
    const response = await fetch('http://localhost:5000/api/exercises/' + exercise._id, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    });
    const data = await response.json();

    if (response.ok) {
      dispatch({ type: 'DELETE_EXERCISE', payload: data });
      console.log('Exercise deleted:', data);
    }
  }

  return (
    <div className='exercise-details'>
        <h4>{exercise.title}</h4>
        <p><strong>Weight (kg): </strong> {exercise.weight}</p>
        <p><strong>Sets: </strong> {exercise.sets}</p>
        <p><strong>Duration:</strong> {exercise.duration}</p>
        <p>{formatDistanceToNow(new Date(exercise.createdAt), { addSuffix: true })}</p>
        <span className="material-symbols-outlined" onClick={handleClick}>remove</span>
    </div>
  );
}

export default ExerciseDetails;
