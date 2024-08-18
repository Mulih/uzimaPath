import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000';

//Authentication
export const register = async (userData) => {
    const response = await axios.post(`${API_BASE_URL}/api/register`, userData);
    return response.data;
};

export const login = async (userData) => {
    const response = await axios.post(`${API_BASE_URL}/api/login`, userData);
    return response.data;
};


// Exercises
export const fetchExercises = () => axios.get(`${API_BASE_URL}/api/exercises`);
export const createExercise = (newExercise) => axios.post(`${API_BASE_URL}/api/exercises`, newExercise);
export  const updateExercise = (id, exerciseData) => axios.put(`${API_BASE_URL}/api/exercises/${id}`, exerciseData);
export const deleteExercise = (id) => axios.delete(`${API_BASE_URL}/api/exercises/${id}`)