import React, { useEffect } from 'react';
import { useGoalsContext } from '../Hooks/useGoalsContext.js';
import { useExercisesContext } from '../Hooks/useExercisesContext.js';

import { useAuthContext } from '../Hooks/useAuthContext.js';

const Dashboard = () => {
  const { goals, dispatch: goalsDispatch } = useGoalsContext();
  const { exercises, dispatch: exercisesDispatch } = useExercisesContext();
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchGoals = async () => {
      const response = await fetch('http://localhost:5000/api/goals', {
        headers: { 'Authorization': `Bearer ${user.token}` },
      });
      const data = await response.json();
      if (response.ok) {
        goalsDispatch({ type: 'SET_GOALS', payload: data });
      }
    };

    const fetchExercises = async () => {
      const response = await fetch('http://localhost:5000/api/exercises', {
        headers: { 'Authorization': `Bearer ${user.token}` },
      });
      const data = await response.json();
      if (response.ok) {
        exercisesDispatch({ type: 'SET_EXERCISES', payload: data });
      }
    };

    if (user) {
      fetchGoals();
      fetchExercises();
    }
  }, [user, goalsDispatch, exercisesDispatch]);

  console.log('Goals:', goals);
  console.log('Exercises:', exercises);

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>

      <div className="profile-overview">
        <h3>Profile Overview</h3>
        {/* Add profile-related content here */}
      </div>

      <div className="recent-activities">
        <h3>Recent Activities</h3>

        <div className="recent-goal">
          <h4>Recent Goal</h4>
          {goals && goals.length > 0 ? (
            goals.slice(0, 3).map((goal, index) => (
              <p key={index}>{goal.title}</p>
            ))
          ) : (
            <p>No goals yet</p>
          )}
        </div>

        <div className="recent-exercise">
          <h4>Recent Exercise</h4>
          {exercises && exercises.length > 0 ? (
            exercises.slice(0, 3).map((exercise, index) => (
              <p>{exercises[0].title}</p>
            ))
          ) : (
            <p>No exercises yet</p>
          )}
        </div>
      </div>

      <div className="account-settings">
        <h3>Account Settings</h3>
        {/* Add account settings-related content here */}
      </div>
    </div>
  );
};

export default Dashboard;
