import Goal from '../models/Goal.js';
import mongoose from 'mongoose';

/**
 * This function creates a new goal in the database.
 *
 * It is an asynchronous function that takes in the request and response objects as parameters.
 * The request object contains the data provided by the user through the form.
 * The response object is used to send the newly created goal back to the client in JSON format.
 *
 * The function first extracts the necessary data from the request body.
 * It then tries to create a new goal in the database using the extracted data.
 * If the goal is successfully created, it sends the newly created goal back to the client.
 * If there is an error during the creation process, it sends an error message back to the client.
 *
 * @param {Object} req - The HTTP request object.
 * @param {Object} res - The HTTP response object.
 * @return {Object} The newly created goal in JSON format or an error message.
 */
export const createGoal = async (req, res) => {
    // Extract the necessary data from the request body
    const {
        title, // The title of the goal
        description, // The description of the goal
        type, // The type of the goal (e.g., diet, fitness)
        target, // The target amount or duration of the goal
        start_date, // The start date of the goal
    } = req.body;

    try {
        // Create a new goal in the database using the extracted data
        const user_id = req.user._id;
        const goal = await Goal.create({
            title,
            description,
            type,
            target,
            start_date,
            user_id,
        })
        // Send the newly created goal back to the client in JSON format
        res.status(200).json(goal);

    } catch (error) {
        // Send an error message back to the client if there is an error during the creation process
        res.status(400).json({ error: error.message });
    }
};

/**
 * This function retrieves all goals from the database and sends them back
 * to the client in JSON format.
 *
 * @param {Object} req - The HTTP request object.
 * @param {Object} res - The HTTP response object.
 */
export const getGoals = async (req, res) => {
    try {
        // Extract the user ID from the request object
        const user_id = req.user._id;

        // Retrieve all documents from the Goal collection in the database
        // that belong to the user with the specified user_id.
        // The sort method is used to sort the documents by the "createdAt" field in descending order.
        // This means that the most recently created goals will be returned first.
        const goals = await Goal.find({user_id}).sort({createdAt: -1});

        // Set the HTTP status code to 200 (success) and send the retrieved goals back to the client
        // in JSON format.
        res.status(200).json(goals);

    } catch (error) {
        // If an error occurred while retrieving the goals, set the HTTP status code to 500 (server error)
        // and send an error message back to the client.
        res.status(500).json({ error: 'Couldn\'t display goals. Try again after a few minutes.' });
    }
};
/**
 * This function retrieves a single goal from the database based on the provided ID.
 *
 * @param {Object} req - The HTTP request object.
 * @param {Object} res - The HTTP response object.
 */
export const getGoal = async (req, res) => {
    // Extract the user ID from the request URL parameter
    const { user_id } = req.params;

    // Check if the provided ID is a valid MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(user_id)) {
        // If the ID is invalid, return a 404 status code with an error message
        return res.status(404).json({ error: 'No such goal exists' });
    }

    try {
        // Attempt to find a goal in the database with the provided ID
        const goals = await Goal.findById(user_id);

        // Check if the goal was found
        if (!goals) {
            // If the goal was not found, return a 404 status code with an error message
            return res.status(404).json({ error: 'No such goal exists' });
        }

        // If the goal was found, return a 200 status code with the goal data in JSON format
        res.status(200).json(goals);
    } catch (error) {
        // If an error occurred while retrieving the goal, return a 500 status code with an error message
        res.status(500).json({ error: 'Couldn\'t display goal. Try again after a few minutes.' });
    }
};

/**
 * This function updates a goal in the database based on the provided ID.
 *
 * @param {Object} req - The HTTP request object.
 * @param {Object} res - The HTTP response object.
 */
export const updateGoal = async (req, res) => {
    // Extract the goal ID from the request URL parameter
    const { id } = req.params;

    // Check if the provided ID is a valid MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
        // If the ID is invalid, return a 404 status code with an error message
        return res.status(404).json({ error: 'No such goal exists' });
    }

    try {
        // Attempt to find and update a goal in the database with the provided ID
        // The findByIdAndUpdate method takes two arguments: the ID of the goal to update and the new data to update it with.
        // The spread operator is used to merge the new data with the existing data in the database.
        const updatedGoal = await Goal.findByIdAndUpdate({ _id: id }, {
            ...req.body
        });

        // Check if the goal was found and updated
        if (!updatedGoal) {
            // If the goal was not found, return a 404 status code with an error message
            return res.status(404).json({ error: 'No such goal exists' });
        }

        // If the goal was found and updated, return a 200 status code with the updated goal data in JSON format
        res.status(200).json(updatedGoal);
    } catch (error) {
        // If an error occurred while updating the goal, return a 500 status code with an error message
        res.status(500).json({ error: 'Something went wrong!' });
    }
};
/**
 * This function is an Express.js controller that handles HTTP DELETE requests
 * to delete a goal from the database.
 *
 * @param {Object} req - The HTTP request object, containing information about the request.
 * @param {Object} req.params - The parameters of the HTTP request. In this case, we are interested in the 'id' parameter,
 * which is the ID of the goal to delete.
 * @param {Object} res - The HTTP response object, used to send a response back to the client.
 *
 * @return {Promise<void>} - This function does not return anything. Instead, it sends a response back to the client.
 */
export const deleteGoal = async (req, res) => {
    // Extract the 'id' parameter from the request parameters.
    const { id } = req.params;

    // Check if the provided 'id' is a valid MongoDB ObjectId.
    // If it is not a valid ObjectId, return a 404 status code with an error message.
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such goal exists' });
    }

    try {
        // Attempt to find and delete a goal from the database based on the provided 'id'.
        // The findByIdAndDelete method takes an object with an '_id' property, which is set to the provided 'id'.
        // It returns the deleted goal if it exists, or null if it does not.
        const goal = await Goal.findByIdAndDelete({_id: id});

        // Check if the goal was found and deleted.
        // If it was not found, return a 404 status code with an error message.
        if (!goal) {
            return res.status(404).json({ error: 'Goal not found.' });
        }

        // If the goal was found and deleted, log a success message and return a 200 status code with the deleted goal data in JSON format.
        console.log('Goal deleted successfully!');
        res.status(200).json(goal);
    } catch (error) {
        // If an error occurred while deleting the goal, log an error message and return a 500 status code with an error message.
        console.log('Error while deleting goal', error);
        res.status(500).json({ error: 'Something went wrong!' });
    }
};
