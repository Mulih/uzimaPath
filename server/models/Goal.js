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
        username: {
            type: String,
            required: true
        },
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
        frequency: {
            type: String,
        },
        start_date: {
            type: Date,
        },
        end_date: {
            type: Date
        },
        UserId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    },
)

const Goal = mongoose.model('Goal', GoalSchema);

export default Goal;
