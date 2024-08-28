import express from 'express';
import { createProgress, getProgress, updateProgress, deleteProgress } from '../controllers/progressController.js';

const router = express.Router();


// POST /api/progress - This route is used to create a new progress entry in the database. It expects a request body with the following fields:
// - user: the ID of the user associated with the progress entry
// - goal: the ID of the goal associated with the progress entry
// - progressAmount: the amount of progress made towards the goal
//
// The createProgress function from the progressController is called to handle the request. It creates a new progress entry in the database using the provided data and returns the newly created progress entry.
router.post('/', createProgress);

// GET /api/progress/:id - This route is used to retrieve a single progress entry by its ID from the database.
// The getProgress function from the progressController is called to handle the request. It retrieves the progress entry with the specified ID and returns it.
router.get('/:id', getProgress);

// PUT /api/progress/:id - This route is used to update an existing progress entry in the database. It expects a request body with the following fields:
// - user: the ID of the user associated with the progress entry (optional)
// - goal: the ID of the goal associated with the progress entry (optional)
// - progressAmount: the amount of progress made towards the goal (optional)
//
// The updateProgress function from the progressController is called to handle the request. It updates the progress entry with the specified ID using the provided data and returns the updated progress entry.
router.put('/:id', updateProgress);

// POST /api/progress/:id - This route is used to delete an existing progress entry from the database. It does not expect a request body.
// The deleteProgress function from the progressController is called to handle the request. It deletes the progress entry with the specified ID and returns a success message.
router.post('/:id', deleteProgress);

export default router;