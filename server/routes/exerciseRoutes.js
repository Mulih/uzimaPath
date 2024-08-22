/**
 * This file defines the routes for the exercises resource.
 * It uses the Express.js framework to define routes that
 * handle the standard CRUD operations for exercises.
 */

import express from 'express';
import { createExercise, getExercise, getExercises, updateExercise, deleteExercise } from '../controllers/exerciseController.js';

const router = express.Router();

router.post('/', createExercise);
router.get('/', getExercises);
router.get('/:id', getExercise);
router.put('/:id', updateExercise);
router.post('/:id', deleteExercise);

export default router;