import Progress from '../models/Progress.js';
import mongoose from 'mongoose';

export const createProgress = async (req, res) => {
    const { user, goal, progressAmount } = req.body;
    try {
        const progress = await Progress.create({ user, goal, progressAmount });
        res.status(200).json(progress);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getProgress = async (req, res) => {
    const { goal } = req.params;


    if (!mongoose.Types.ObjectId.isValid(goal)) {
        return res.status(400).json({ error: 'No such progress exists' });
    }

    try {

        const progress = await Progress.find(goal);
        if (!progress){
            return res.status(404).json({ error: 'Couldnt display progress. Try again after a few minutes.' });
        }
        res.status(200).json(progress);
    } catch (error) {
        res.status(500).json({ error: 'Couldnt display progress. Try again after a few minutes.' });
    }
};

export const updateProgress = async (req, res) => {
    try {
        const updatedProgress = await Progress.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedProgress) {
            return res.status(404).json({ error: 'Progress entry not found.' });
        }
        res.status(200).json(updatedGoal);
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong!' });
    }
};
export const deleteProgress = async (req, res) => {
    try {
        const deletedProgress = await Progress.findByIdAndDelete(req.params.id);
        if (!deletedProgress) {
            return res.status(404).json({ error: 'Progress not found.' });
        }
        res.status(200).json({ message: 'Progress entry deleted successfully!' });
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong!' });
    }
};