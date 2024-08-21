import Exercise from '../models/Exercise.js';
import mongoose from 'mongoose';

export const createExercise = async (req, res) => {
    const { title, type, sets, weight, duration } = req.body;

    try {
        const exercise = await Exercise.create({ title, type, sets, weight, duration });
        res.status(200).json(exercise);

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getExercises = async (req, res) => {

    try {

        const exercises = await Exercise.find({ }).sort({createdAt: -1});
        res.status(200).json(exercises);
    } catch (error) {
        res.status(500).json({ error: 'Couldnt display exercises. Try again after a few minutes.' });
    }
};
export const getExercise = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such Exercise exists' });
    }
    try {

        const exercises = await Exercise.findById(id);

        if(!exercises) {
            return res.status(404).json({ error: 'No such Exercise exists' });
        }

        res.status(200).json(exercises);
    } catch (error) {
        res.status(500).json({ error: 'Couldnt display exercises. Try again after a few minutes.' });
    }
};

export const updateExercise = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such Exercise exists' });
    }

    try {

        const updateExercise = await Exercise.findByIdAndUpdate({_id: id}, {
            ...req.body
        });
        if (!updateExercise) {
            return res.status(404).json({ error: 'No such Exercise exists' });
        }
        res.status(200).json(updatedExercise);
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong!' });
    }
};
export const deleteExercise = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such Exercise exists' });
    }
    try {
        const deletedExercise = await Exercise.findByIdAndDelete({_id: id});
        if (!deletedExercise) {
            return res.status(404).json({ error: 'Exercise not found.' });
        }
        res.status(200).json({ message: 'Exercise deleted successfully!' });
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong!' });
    }
};