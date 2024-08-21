import React from 'react';

  const ExerciseDetails = ({ exercise }) =>  {
	return (
	  <div className='exercise-details'>
        <h4>{exercise.title}</h4>
        <p><strong>Weight (kg): </strong> {exercise.weight}</p>
        <p><strong>Duration:</strong> {exercise.duration}</p>
        <p>{exercise.createdAt}</p>
	  </div>
	);
  }

  export default ExerciseDetails;
