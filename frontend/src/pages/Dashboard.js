import React from 'react';
import { useAuthContext } from '../Hooks/useAuthContext.js';

const Dashboard = () => {

    const { user } = useAuthContext();
    const { firstName, lastName } = user;

    const greetUser = () => {

        return `Hello ${firstName} ${lastName}!`;
    }

    return (
        <div>
            <h1>Dashboard</h1>
            <div>
                <h4>{greetUser()}</h4>
            </div>
        </div>
    )
}

export default Dashboard;
