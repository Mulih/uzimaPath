import Progress from '../models/Progress.js';

export const createProgress = async (req, res) => {
    try {
        const progress = new Progress(req.body);
        await progress.save();
        res.status(201).json({ message: 'Progress created successfully!', progress });
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong!' });
    }
};

export const getProgressByUserId = async (req, res) => {
    try {
        const progressEntries = await Progress.find({ user: req.params.userId }.populate('goal'));
        res.status(200).json(progressEntries);
    } catch (error) {
        res.status(500).json({ error: 'Couldnt display Progress. Try again after a few minutes.' });
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