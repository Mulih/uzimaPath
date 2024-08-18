import Exercise from '../models/Exercise.js';

export const createExercise = async (req, res) => {
    try {
        const exercise = new Exercise(req.body);
        await exercise.save();
        res.status(201).json({ message: 'Goal created successfully!', exercise });
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong!' });
    }
};

export const getExercises = async (req, res) => {
    try {

        const exercises = await Exercise.find({ });
        res.status(200).json(exercises);
    } catch (error) {
        res.status(500).json({ error: 'Couldnt display exercises. Try again after a few minutes.' });
    }
};

export const updateExercise = async (req, res) => {
    try {
        const updateExercise = await Exercise.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedExercise) {
            return res.status(404).json({ error: 'No such Exercise exists' });
        }
        res.status(200).json(updatedExercise);
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong!' });
    }
};
export const deleteExercise = async (req, res) => {
    try {
        const deletedExercisel = await Exercise.findByIdAndDelete(req.params.id);
        if (!deletedGoal) {
            return res.status(404).json({ error: 'Exercise not found.' });
        }
        res.status(200).json({ message: 'Exercise deleted successfully!' });
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong!' });
    }
};