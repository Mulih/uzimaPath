import mongoose from 'mongoose';
import ProgressSchema from '../models/Progress.js';

const ProgressData = mongoose.model("Progress", ProgressSchema);

const seedProgress = async () => {
    try {
        const existingData = await ProgressData.find();
        if (existingData.length === 0) {
            const initialProgress = [
                {
                    user: '626c8d7e4b5e6a7e4b5e6a7e',
                    goal: '66bfb28da0e39b7a04adde1f',
                    progressAmount: 20,
                    date: new Date('2024-08-03')
                },
                {
                    user: '626c8d7e4b5e6a7e4b5e6a7e',
                    goal: '66bfb28da0e39b7a04adde1f',
                    progressAmount: 22,
                    date: new Date('2024-08-05')
                },
                {
                    user: '626c8d7e4b5e6a7e4b5e6a7e',
                    goal: '66bfb28da0e39b7a04adde1f',
                    progressAmount: 25,
                    date: new Date('2024-08-06')
                },
                {
                    user: '626c8d7e4b5e6a7e4b5e6a7e',
                    goal: '66bfb28da0e39b7a04adde1f',
                    progressAmount: 29,
                    date: new Date('2024-08-08')
                },
            ];
            await ProgressData.insertMany(initialProgress);
            console.log('Progress entries seeded successfully.');
        } else {
            console.log('Progress entries already exist. Skipping ahead.');
        }
    } catch (error) {
        console.log('Error inserting progress entries:', error.message);
    }
};

export default seedProgress;