import React, { useState, useEffect } from 'react';

import GoalDetails from '../components/GoalDetails.js';




  const Goals = () =>  {
    const [goals, setGoals] = useState(null);

    useEffect(() => {
        const fetchGoals = async () => {
          try {
            const response = await fetch('http://localhost:5000/api/goals');
            const data = await response.json();

            if (response.ok) {
              setGoals(data);
            } else {
              throw new Error(`HTTP error! status:, ${response.status}`);
            }
          } catch (error) {
            console.error('Failed to fetch goals:', error);
          }
        }

        fetchGoals();
    }, []);

	return (
	  <div className='workouts'>
      <div className='goals'>
        {goals && goals.map((goal) => (
          <GoalDetails key={goal._id} goal={goal} />
        ))}
      </div>



	  </div>
	);
  }

  export default Goals;
