import React, { useState, useEffect } from 'react';
import { fetchGoals } from '../services/api.js';


const Goals = () => {
    const [goals, setGoals] = useState([]);

    useEffect(() => {
        fetchGoals()
            .then(response => setGoals(response.data))
            .catch(console.error);
    }, []);

    return (
        <div>
            <h1>Goals</h1>
            <ul>
                {goals.map(goal => {
                    <li key={goal._id}>{goal.title} - {goal.description}</li>
                })}
            </ul>
        </div>
    );
};

  export default Goals;
