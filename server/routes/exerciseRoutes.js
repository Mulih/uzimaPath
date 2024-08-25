/**
 * This file defines the routes for the exercises resource.
 * It uses the Express.js framework to define routes that
 * handle the standard CRUD operations for exercises.
 *
 * The routes are defined as follows:
 * - POST /exercises: creates a new exercise with the data sent in the request body.
 * - GET /exercises: retrieves a list of all exercises in the database.
 * - GET /exercises/:id: retrieves a single exercise by its ID.
 * - PUT /exercises/:id: updates an existing exercise with the data sent in the request body.
 * - DELETE /exercises/:id: deletes an existing exercise by its ID.
 */

import express from 'express';
import { createExercise, getExercise, getExercises, updateExercise, deleteExercise } from '../controllers/exerciseController.js';

const router = express.Router();

// Create a new exercise
router.post('/', createExercise);

// Retrieve a list of all exercises
router.get('/', getExercises);

// Retrieve a single exercise by its ID
router.get('/:id', getExercise);

// Update an existing exercise
router.put('/:id', updateExercise);

// Delete an existing exercise by its ID
router.delete('/:id', deleteExercise);

export default router;
