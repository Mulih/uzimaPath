/**
 * ExerciseSchema defines the schema for an Exercise document in the database.
 * It includes the following fields:
 * - username: the username of the user who performed the exercise
 * - type: the type of exercise (cardio, resistance, flexibility)
 * - sets: an array of objects, each representing a set of the exercise.
 *   Each set object includes the following fields:
 *   - reps: the number of repetitions performed in the set
 *   - weight: the weight used in the set (in pounds)
 *   - duration: the duration of the set (in minutes)
 * - duration: the total duration of the exercise (in minutes)
 * - date: the date the exercise was performed
 * - UserId: the ID of the User who performed the exercise
 */
import mongoose from 'mongoose';

const ExerciseSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        title: {
            type: String,
            required: true
        },
        type: {
            type: String,
            enum: ['cardio', 'resistance', 'flexibility', 'strength', 'yoga'],

        },
        sets: {
            type: Number,

        },
        weight: {
            type: Number,
            required: true
        },
        duration: {
            type: Number,

        },
        date: {
            type: Date,
            default: Date.now
        },
    },
    { timestamps: true }
);

const Exercise = mongoose.model('exercise', ExerciseSchema);

export default Exercise;