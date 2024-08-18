import Goal from '../models/Goal.js';

export const createGoal = async (req, res) => {
    try {
        const goal = new Goal(req.body);
        await goal.save();
        res.status(201).json({ message: 'Goal created successfully!', goal });
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong!' });
    }
};

export const getGoals = async (req, res) => {
    try {
        const goals = await Goal.find({});
        res.status(200).json(goals);
        console.log(goals);
    } catch (error) {
        res.status(500).json({ error: 'Couldnt display goals. Try again after a few minutes.' });
    }
};

export const updateGoal = async (req, res) => {
    try {
        const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedGoal) {
            return res.status(404).json({ error: 'No such goal exists' });
        }
        res.status(200).json(updatedGoal);
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong!' });
    }
};
export const deleteGoal = async (req, res) => {
    try {
        const deletedGoal = await Goal.findByIdAndDelete(req.params.id);
        if (!deletedGoal) {
            return res.status(404).json({ error: 'Goal not found.' });
        }
        res.status(200).json({ message: 'Goal deleted successfully!' });
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong!' });
    }
};