import React from 'react';
import Goals from '../pages/Goals.js';
import Exercises from '../pages/Exercises.js';

  const Admin = () =>  {
	return (
	  <div>
        <h1>Admin Panel</h1>
        <p>Manage users, goals, and exercises</p>
        <div className='divider'>
          <div>
            <h2>Users</h2>
            <p>View, add, edit, or delete users</p>
          </div>
          <div className='divider'>
            <h2>Exercises</h2>
            <p>View, add, edit, or delete exercises</p>
            <Exercises />
          </div>
          <div className='divider'>
            <h2>Goals</h2>
            <p>View, add, edit, or delete goals</p>
            <Goals />
          </div>
        </div>





	  </div>
	);
  }

  export default Admin;
