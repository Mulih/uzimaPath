import Goal from '../models/Goal.js';
import mongoose from 'mongoose';

export const createGoal = async (req, res) => {
    const {
        title,
        description,
        type,
        target,
        start_date,
    } = req.body;
    try {
        const user_id = req.user._id;
        const goal = await Goal.create({
            title,
            description,
            type,
            target,
            start_date,
            user_id,
        })
        res.status(200).json(goal);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getGoals = async (req, res) => {


    try {
        const user_id = req.user._id;
        const goals = await Goal.find({user_id}).sort({ createdAt: -1 });
        res.status(200).json(goals);
    } catch (error) {
        res.status(500).json({ error: 'Couldnt display goals. Try again after a few minutes.' });
    }
};
export const getGoal = async (req, res) => {
    const { user_id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(user_id)) {
        return res.status(404).json({ error: 'No such goal exists' });
    }

    try {
        const goals = await Goal.findById(user_id);

        if(!goals) {
            return res.status(404).json({ error: 'No such goal exists' });
        }
        res.status(200).json(goals);
    } catch (error) {
        res.status(500).json({ error: 'Couldnt display goals. Try again after a few minutes.' });
    }
};

export const updateGoal = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such goal exists' });
    }
    try {
        const updatedGoal = await Goal.findByIdAndUpdate({ _id: id }, {
            ...req.body
        });
        if (!updatedGoal) {
            return res.status(404).json({ error: 'No such goal exists' });
        }
        res.status(200).json(updatedGoal);
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong!' });
    }
};
export const deleteGoal = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such goal exists' });
    }
    try {
        const goal = await Goal.findByIdAndDelete({_id: id});
        if (!goal) {
            return res.status(404).json({ error: 'Goal not found.' });
        }
        console.log('Goal deleted successfully!')
        res.status(200).json(goal);
    } catch (error) {
        console.log('Error while deleting goal', error);
        res.status(500).json({ error: 'Something went wrong!' });
    }
};