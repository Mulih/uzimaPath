import express from 'express';
import { createGoal, getGoals, updateGoal, deleteGoal } from '../controllers/goalController.js';
import { requireAuth } from '../middleware/requireAuth.js';

const router = express.Router();

// Require authentication for all routes
router.use(requireAuth);


// POST /api/goals - This route is used to create a new goal by sending a request to the server
// with the necessary data. The createGoal function from the goalController is called to handle the request.
router.post('/', createGoal);

// GET /api/goals - This route is used to retrieve all goals from the server. The getGoals function from the goalController
// is called to handle the request and return the list of goals.
router.get('/', getGoals);

// PUT /api/goals/:id - This route is used to update an existing goal by sending a request to the server
// with the necessary data. The updateGoal function from the goalController is called to handle the request and update the goal.
// The :id parameter is used to identify the specific goal that needs to be updated.
router.put('/:id', updateGoal);

// POST /api/goals/:id - This route is used to delete an existing goal by sending a request to the server.
// The deleteGoal function from the goalController is called to handle the request and delete the goal.
// The :id parameter is used to identify the specific goal that needs to be deleted.
router.post('/:id', deleteGoal);

export default router;