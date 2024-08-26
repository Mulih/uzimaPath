// import axios from 'axios';

// const API_BASE_URL = 'http://localhost:5000';

// // This function signs up a new user
// // It takes in a userData object, which should have an email and a password
// // It makes a POST request to the /api/user/signup route on the server
// // The server is expected to validate the email and password, and then
// // create a new user and return a JSON response with the user's data
// // The response is then returned from this function
// export const signup = async (userData) => {
//     const response = await axios.post(`${API_BASE_URL}/api/user/signup`, userData);
//     return response.data;
// };

// /**
//  * This function logs in a user
//  *
//  * It takes in a userData object, which should have an email and a password
//  *
//  * It makes a POST request to the /api/user/login route on the server
//  *
//  * The server is expected to validate the email and password, and then
//  * return a JSON response with the user's data
//  *
//  * The response is then returned from this function
//  */
// export const login = async (userData) => {
//     const response = await axios.post(`${API_BASE_URL}/api/user/login`, userData);
//     return response.data;
// };


// /**
//  * This function retrieves all exercises from the database
//  *
//  * It makes a GET request to the /api/exercises route on the server
//  *
//  * The server is expected to return a JSON response with an array of exercises
//  *
//  * The response is then returned from this function
//  */
// export const fetchExercises = () => axios.get(`${API_BASE_URL}/api/exercises`);

// /**
//  * This function creates a new exercise
//  *
//  * It takes in a newExercise object, which should have title, type, sets, weight, and duration
//  *
//  * It makes a POST request to the /api/exercises route on the server
//  *
//  * The server is expected to create a new exercise in the database
//  *
//  * The response is then returned from this function
//  */
// export const createExercise = (newExercise) => axios.post(`${API_BASE_URL}/api/exercises`, newExercise);

// /**
//  * This function updates an existing exercise in the database
//  *
//  * It takes in an id, which is the id of the exercise to update
//  * and an exerciseData object, which should have the fields
//  * that need to be updated
//  *
//  * It makes a PUT request to the /api/exercises/:id route on the server
//  *
//  * The server is expected to update the exercise in the database
//  *
//  * The response is then returned from this function
//  */
// export  const updateExercise = (id, exerciseData) => axios.put(`${API_BASE_URL}/api/exercises/${id}`, exerciseData);

// /**
//  * This function deletes an exercise from the database
//  *
//  * It takes in an id, which is the id of the exercise to delete
//  *
//  * It makes a DELETE request to the /api/exercises/:id route on the server
//  *
//  * The server is expected to delete the exercise in the database
//  *
//  * The response is then returned from this function
//  */
// export const deleteExercise = (id) => axios.delete(`${API_BASE_URL}/api/exercises/${id}`);

// // Goals
// export const fetchGoals = () => axios.get(`${API_BASE_URL}/api/goals`);
// export const createGoal = (goalData) => axios.post(`${API_BASE_URL}/api/goals`, goalData);
// export const updateGoal = (id, goalData) => axios.put(`${API_BASE_URL}/api/goals/${id}`, goalData);
// export const deleteGoal = (id) => axios.post(`${API_BASE_URL}/api/goals/${id}`);