import express from 'express';
import { createExercise, getExercises, updateExercise, deleteExercise } from '../controllers/exerciseController.js';

const router = express.Router();

router.post('/exercises', createExercise);
router.get('/exercises', getExercises);
router.put('/exercises/:id', updateExercise);
router.post('/exercises/:id', deleteExercise);

export default router;