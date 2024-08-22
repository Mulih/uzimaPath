import React from 'react';

  const GoalDetails = ({ goal }) =>  {
	return (
	  <div className='goal-details'>
        <h4>{goal.title}</h4>
        <p><strong>username: </strong> {goal.username}</p>
        <p><strong>description: </strong> {goal.description}</p>
        <p><strong>type: </strong> {goal.type}</p>
        <p><strong>target: </strong> {goal.target}</p>
        <p><strong>frequency: </strong> {goal.frequency}</p>
        <p><strong>start_date: </strong> {goal.start_date}</p>
        <p><strong>end_date: </strong> {goal.end_date}</p>

	  </div>
	);
  }

  export default GoalDetails;
