import mongoose from 'mongoose';
import ProgressSchema from '../models/Progress.js';

const ProgressData = mongoose.model('Progress', ProgressSchema);


const seedProgress = async () => {
    try {
        const existingData = await ProgressData.find();
        if (existingData.length === 0) {
            const initialProgress = [
                {
                    user: '66c1343d639debb5a60d3c92',
                    goal: '66c1c21bf928121690ed9f72',
                    progressAmount: 20,
                    date: new Date('2024-08-03')
                },
                {
                    user: '66c1343d639debb5a60d3c92',
                    goal: '66c1c21bf928121690ed9f72',
                    progressAmount: 22,
                    date: new Date('2024-08-05')
                },
                {
                    user: '66c1343d639debb5a60d3c92',
                    goal: '66c1c21bf928121690ed9f72',
                    progressAmount: 25,
                    date: new Date('2024-08-06')
                },
                {
                    user: '66c1343d639debb5a60d3c92',
                    goal: '66c1c21bf928121690ed9f72',
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