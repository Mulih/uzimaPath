import { useGoalsContext } from '../Hooks/useGoalsContext.js';
import { useAuthContext } from '../Hooks/useAuthContext.js';

import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const GoalDetails = ({ goal }) =>  {

  const { dispatch } = useGoalsContext();
  const { user } = useAuthContext();

  const handleClick = async () => {
    if (!user) {
      console.log('You must be logged in');
      return;
    }
    const response = await fetch('http://localhost:5000/api/goals/' + goal._id, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    });
    const data = await response.json();

    if (response.ok) {
      dispatch({ type: 'DELETE_GOAL', payload: data });
      console.log('Goal deleted:', data);
    }
  }

  return (
    <div className='goal-details'>
        <h4>{goal.title}</h4>
        <p><strong>title: </strong> {goal.title}</p>
        <p><strong>description: </strong> {goal.description}</p>
        <p><strong>type: </strong> {goal.type}</p>
        <p><strong>target: </strong> {goal.target}</p>
        <p><strong>start_date: </strong> {goal.start_date}</p>
        <p>{formatDistanceToNow(new Date(goal.createdAt), { addSuffix: true })}</p>
        <span className="material-symbols-outlined" onClick={handleClick}>remove</span>
    </div>
  );
}

export default GoalDetails;



// import React from 'react';

//   const GoalDetails = ({ goal }) =>  {
// 	return (
// 	  <div className='goal-details'>
//         <h4>{goal.title}</h4>
//         <p><strong>username: </strong> {goal.username}</p>
//         <p><strong>description: </strong> {goal.description}</p>
//         <p><strong>type: </strong> {goal.type}</p>
//         <p><strong>target: </strong> {goal.target}</p>
//         <p><strong>frequency: </strong> {goal.frequency}</p>
//         <p><strong>start_date: </strong> {goal.start_date}</p>
//         <p><strong>end_date: </strong> {goal.end_date}</p>

// 	  </div>
// 	);
//   }

//   export default GoalDetails;
