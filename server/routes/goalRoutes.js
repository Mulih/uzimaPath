import express from 'express';
import { createGoal, getGoals, updateGoal, deleteGoal } from '../controllers/goalController.js';

const router = express.Router();

router.post('/goals', createGoal);
router.get('/goals', getGoals);
router.put('/goals/:id', updateGoal);
router.post('/goals/:id', deleteGoal);

export default router;