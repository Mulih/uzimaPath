import mongoose from 'mongoose';

const ProgressSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        goal: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Goal',
            required: true
        },
        progressAmount: {
            type: Number,
            required: true
        },
        date: {
            type: Date,
            default: Date.now
        },
    },
    { timestamps: true }
);

const Progress = mongoose.model('Progress', ProgressSchema);

export default Progress;