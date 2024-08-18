import mongoose from 'mongoose';
import GoalSchema from '../models/Goal.js';


const GoalModel = mongoose.model("Goal", GoalSchema);

const seedGoals = async () => {
    try {
        const existingData = await GoalModel.find();
        if (existingData.length === 0) {
            const initialGoals = [
                {
                    username: 'alvinmulih',
                    title: 'Jogging',
                    description: 'Jog for 30 minutes',
                    type: 'cardio',
                    target: 'Maintain a heart rate of 120bpm',
                    frequency: 'Daily',
                    start_date: new Date('2024-08-19'),
                    end_date: new Date('2024-12-31'),
                    UserId: '66c1343d639debb5a60d3c93'
                },
                {
                    username: 'alvinmulih',
                    title: 'Aerobics',
                    description: 'increase Zumba workout duration by 15 minutes',
                    type: 'cardio',
                    target: 'Maintain a heart rate of 120bpm',
                    frequency: 'weekly',
                    start_date: new Date('2024-09-01'),
                    end_date: new Date('2024-10-31'),
                    UserId: '66c1343d639debb5a60d3c93'
                },
                {
                    username: 'kamau11',
                    title: 'Swimming',
                    description: '5 laps of freestyle swimming',
                    type: 'cardio',
                    target: 'maintain steady rythm of 30bpm',
                    frequency: 'Daily',
                    start_date: new Date('2024-08-19'),
                    end_date: new Date('2024-12-31'),
                    UserId: '66c1343d639debb5a60d3c92'
                },
                {
                    username: 'kamau11',
                    title: 'Jogging',
                    description: 'Jog for 30 minutes',
                    type: 'cardio',
                    target: 'Maintain a heart rate of 120bpm',
                    frequency: 'Daily',
                    start_date: new Date('2024-08-19'),
                    end_date: new Date('2024-12-31'),
                    UserId: '66c1343d639debb5a60d3c92'
                },
                {
                    username: 'Michelle23',
                    title: 'Yoga',
                    description: '30 minute yoga session',
                    type: 'flexibility',
                    target: 'increase limberness',
                    frequency: 'Daily',
                    start_date: new Date('2024-08-25'),
                    end_date: new Date('2025-02-28'),
                    UserId: '66c1343d639debb5a60d3c94'
                },
            ];
            await GoalModel.insertMany(initialGoals);
            console.log('Goals seeded successfully.');
        } else {
            console.log('Goals data already exists. Skipping ahead.');
        }
    } catch (error) {
        console.log('Error seeding goals:', error.message);
    }
};

export default seedGoals;