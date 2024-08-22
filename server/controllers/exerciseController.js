import Exercise from '../models/Exercise.js';
import mongoose from 'mongoose';

/**
 * Creates a new exercise document in the database.
 *
 * This is a controller function that will be called when the
 * user makes a POST request to the /api/exercises endpoint.
 *
 * It takes in the request and response objects as arguments.
 *
 * The request object contains the user's input from the
 * exercise form, which is stored in the request body.
 *
 * The response object is used to send the newly created
 * exercise document back to the client in JSON format.
 *
 * @param {Object} req - The HTTP request object.
 * @param {Object} res - The HTTP response object.
 * @return {Object} The newly created exercise document in JSON format.
 */
export const createExercise = async (req, res) => {
    const {
        title,   // The title of the exercise
        type,    // The type of exercise (cardio, resistance, flexibility, etc.)
        sets,    // The number of sets performed
        weight,  // The amount of weight used (in pounds)
        duration // The duration of the exercise (in minutes)
    } = req.body;

    try {
        // Create a new exercise document in the database
        const exercise = await Exercise.create({
            title,
            type,
            sets,
            weight,
            duration
        });

        // If the exercise was created successfully, send it back to the client in JSON format
        res.status(200).json(exercise);

    } catch (error) {
        // If the exercise creation failed, send an error message back to the client
        res.status(400).json({ error: error.message });
    }
};

/**
 * This function retrieves all exercises from the database and sends them back
 * to the client in JSON format.
 *
 * @param {Object} req - The HTTP request object.
 * @param {Object} res - The HTTP response object.
 */
export const getExercises = async (req, res) => {
    try {
        // Retrieve all documents from the Exercise collection in the database.
        // The sort method is used to sort the documents by the "createdAt" field in descending order.
        // This means that the most recently created exercises will be returned first.
        const exercises = await Exercise.find({ }).sort({createdAt: -1});

        // Set the HTTP status code to 200 (success) and send the retrieved exercises back to the client
        // in JSON format.
        res.status(200).json(exercises);

    } catch (error) {
        // If an error occurred while retrieving the exercises, set the HTTP status code to 500 (server error)
        // and send an error message back to the client.
        res.status(500).json({ error: 'Couldn\'t display exercises. Try again after a few minutes.' });
    }
};
/**
 * This function retrieves a single exercise from the database based on the provided ID.
 *
 * @param {Object} req - The HTTP request object.
 * @param {Object} res - The HTTP response object.
 */
export const getExercise = async (req, res) => {
    // Extract the ID parameter from the request URL
    const { id } = req.params;

    // Check if the provided ID is a valid MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
        // If the ID is invalid, return a 404 status code with an error message
        return res.status(404).json({ error: 'No such Exercise exists' });
    }

    try {
        // Attempt to find an exercise in the database with the provided ID
        const exercise = await Exercise.findById(id);

        // Check if the exercise was found
        if (!exercise) {
            // If the exercise was not found, return a 404 status code with an error message
            return res.status(404).json({ error: 'No such Exercise exists' });
        }

        // If the exercise was found, return a 200 status code with the exercise data in JSON format
        res.status(200).json(exercise);
    } catch (error) {
        // If an error occurred while retrieving the exercise, return a 500 status code with an error message
        res.status(500).json({ error: 'Couldn\'t display exercises. Try again after a few minutes.' });
    }
};

/**
 * This function updates an existing exercise in the database based on the provided ID.
 * The function takes in a request object and a response object.
 * The request object contains information about the HTTP request, including the ID of the exercise to update.
 * The response object is used to send a response back to the client.
 */
export const updateExercise = async (req, res) => {
    // Extract the ID parameter from the request URL
    const { id } = req.params;

    // Check if the provided ID is a valid MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
        // If the ID is invalid, return a 404 status code with an error message
        return res.status(404).json({ error: 'No such Exercise exists' });
    }

    try {
        // Attempt to find and update an exercise in the database with the provided ID
        // The findByIdAndUpdate method takes two arguments: the ID of the exercise to update and the new data to update it with.
        // The spread operator is used to merge the new data with the existing data in the database.
        const updateExercise = await Exercise.findByIdAndUpdate({_id: id}, {
            ...req.body
        });

        // Check if the exercise was found and updated
        if (!updateExercise) {
            // If the exercise was not found, return a 404 status code with an error message
            return res.status(404).json({ error: 'No such Exercise exists' });
        }

        // If the exercise was found and updated, return a 200 status code with the updated exercise data in JSON format
        res.status(200).json(updateExercise);
    } catch (error) {
        // If an error occurred while updating the exercise, return a 500 status code with an error message
        res.status(500).json({ error: 'Something went wrong!' });
    }
};
/**
 * This function is an Express.js controller that handles HTTP DELETE requests
 * to delete an exercise from the database.
 *
 * @param {Object} req - The HTTP request object, containing information about the request.
 * @param {Object} req.params - The parameters of the HTTP request. In this case, we are interested in the 'id' parameter,
 * which is the ID of the exercise to delete.
 * @param {Object} res - The HTTP response object, used to send a response back to the client.
 *
 * @return {Promise<void>} - This function does not return anything. Instead, it sends a response back to the client.
 */
export const deleteExercise = async (req, res) => {
    // Extract the 'id' parameter from the request parameters.
    const { id } = req.params;

    // Check if the provided 'id' is a valid MongoDB ObjectId.
    // If it is not a valid ObjectId, return a 404 status code with an error message.
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such Exercise exists' });
    }

    try {
        // Attempt to find and delete an exercise from the database based on the provided 'id'.
        // The findByIdAndDelete method takes an object with an '_id' property, which is set to the provided 'id'.
        // It returns the deleted exercise if it exists, or null if it does not.
        const deletedExercise = await Exercise.findByIdAndDelete({_id: id});

        // Check if the exercise was found and deleted.
        // If it was not found, return a 404 status code with an error message.
        if (!deletedExercise) {
            return res.status(404).json({ error: 'Exercise not found.' });
        }

        // If the exercise was found and deleted, return a 200 status code with a success message.
        res.status(200).json({ message: 'Exercise deleted successfully!' });
    } catch (error) {
        // If an error occurred while deleting the exercise, return a 500 status code with an error message.
        res.status(500).json({ error: 'Something went wrong!' });
    }
};
