/**
 * GoalSchema defines the schema for a Goal document in the database.
 * It includes the following fields:
 * - username: the username of the user who created the goal
 * - title: the title of the goal
 * - description: a description of the goal
 * - type: the type of goal (diet, exercise, productivity, wellness)
 * - target: the target value for the goal (e.g., weight loss in pounds)
 * - frequency: the frequency of progress towards the goal (e.g., daily, weekly)
 * - start_date: the date the goal was started
 * - end_date: the date the goal is set to be completed
 * - UserId: the ID of the User who created the goal
 */
import mongoose from 'mongoose';

const GoalSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        type:{
            type: String,
            required: true
        },
        target: {
            type: String,
        },
        start_date: {
            type: Date,
            required: true
        },
        user_id: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
)

// Define a method on the Goal model that updates the progress of a goal.
// This method takes a date argument and checks if the progress array already contains a progress entry for that date.
// If it does, it updates the existing progress entry with the new date.
// If it doesn't, it adds a new progress entry to the array and saves the goal to the database.
GoalSchema.methods.updateProgress = async function(date) {
    // Find the index of the progress entry in the array that matches the given date.
    // Use the findIndex method to iterate over the array and return the index of the first element that satisfies the provided testing function.
    const index = this.progress.findIndex(p => p.getTime() === date.getTime());

    // Check if the progress array does not contain a progress entry for the given date.
    // If it does not, add a new progress entry to the array and save the goal to the database.
    if (index === -1) {
        // Create a new Date object from the given date argument and add it to the progress array.
        this.progress.push(new Date(date));
        // Save the goal to the database using the save method provided by Mongoose.
        await this.save();
    }
    // If the progress array already contains a progress entry for the given date,
    // update the existing progress entry with the new date and save the goal to the database.
    else {
        // Replace the progress entry at the given index with a new Date object created from the given date argument.
        this.progress[index] = new Date(date);
        // Save the goal to the database using the save method provided by Mongoose.
        await this.save();
    }
};

const Goal = mongoose.model('Goal', GoalSchema);

export default Goal;
