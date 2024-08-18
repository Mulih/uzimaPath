import express from 'express';
import { createGoal, getGoals, updateGoal, deleteGoal } from '../controllers/goalController.js';

const router = express.Router();

router.post('/goal', createGoal);
router.get('/goal', getGoals);
router.put('/goal/:id', updateGoal);
router.post('/goal/:id', deleteGoal);

export default router;