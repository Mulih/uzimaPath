import React, { useEffect } from 'react';
import { useGoalsContext } from '../Hooks/useGoalsContext.js';
import { useAuthContext } from '../Hooks/useAuthContext.js';

import GoalDetails from '../components/GoalDetails.js';
import GoalForm from '../components/GoalForm.js';




const Goals = () =>  {
    const { goals, dispatch } = useGoalsContext();
    const { user } = useAuthContext();


    useEffect(() => {
      const fetchGoals = async () => {

        const response = await fetch('http://localhost:5000/api/goals', {
          headers: {
            'Authorization': `Bearer ${user.token}`
          }
        });
        const data = await response.json();

        if (response.ok) {
          dispatch({ type: 'SET_GOALS', payload: data });
        }
      }
      if (user) {
        fetchGoals();
      }
  }, [dispatch, user]);

	return (
	  <div className='workouts'>
      <div className='goals'>
        {goals && goals.map((goal) => (
          <GoalDetails key={goal._id} goal={goal} />
        ))}
      </div>
      <GoalForm />
	  </div>
	);
  }

  export default Goals;
