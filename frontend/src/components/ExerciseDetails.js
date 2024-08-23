import { useExercisesContext } from '../Hooks/useExercisesContext.js';

import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const ExerciseDetails = ({ exercise }) =>  {

  const { dispatch } = useExercisesContext();

  const handleClick = async () => {
    const response = await fetch('http://localhost:5000/api/exercises/' + exercise._id, {
      method: 'DELETE',
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
        <p><strong>Sets: </strong> {exercise.set}</p>
        <p><strong>Duration:</strong> {exercise.duration}</p>
        <p>{formatDistanceToNow(new Date(exercise.createdAt), { addSuffix: true })}</p>
        <span className="material-symbols-outlined" onClick={handleClick}>remove</span>
    </div>
  );
}

export default ExerciseDetails;
