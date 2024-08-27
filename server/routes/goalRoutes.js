import express from 'express';
import { createGoal, getGoals, updateGoal, deleteGoal } from '../controllers/goalController.js';
import { requireAuth } from '../middleware/requireAuth.js';

const router = express.Router();

// Require authentication for all routes
router.use(requireAuth);

router.post('/', createGoal);
router.get('/', getGoals);
router.put('/:id', updateGoal);
router.post('/:id', deleteGoal);

export default router;