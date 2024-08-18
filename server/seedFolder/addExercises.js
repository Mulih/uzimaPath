import mongoose from 'mongoose';
import ExerciseSchema from '../models/Exercise.js';

const Exercise = mongoose.model('Exercise', ExerciseSchema);

const seedExercises = async () => {
  try {
    const existingData = await Exercise.find();
    if (existingData.length === 0) {
      const initialExercises = [
        {
          user: '66c1343d639debb5a60d3c92', // Assuming 'user' is a reference to a User document
          type: 'cardio',
          sets: [
            { reps: 10, weight: 100, duration: 30 },
            { reps: 15, weight: 80, duration: 25 }
          ],
          duration: 60,
          date: new Date('2024-08-01'),
          // Add other fields as necessary
        },
        {
          user: '66c1343d639debb5a60d3c93', // Assuming 'user' is a reference to a User document
          type: 'resistance',
          sets: [
            { reps: 8, weight: 150, duration: 45 },
            { reps: 12, weight: 120, duration: 35 }
          ],
          duration: 90,
          date: new Date('2024-08-02'),
          // Add other fields as necessary
        },
        {
          user: '66c1343d639debb5a60d3c94', // Assuming 'user' is a reference to a User document
          type: 'flexibility',
          sets: [
            { reps: 8, weight: 150, duration: 45 },
            { reps: 12, weight: 120, duration: 35 }
          ],
          duration: 90,
          date: new Date('2024-08-05'),
          // Add other fields as necessary
        },
        {
          user: '66c1343d639debb5a60d3c93', // Assuming 'user' is a reference to a User document
          type: 'resistance',
          sets: [
            { reps: 8, weight: 150, duration: 45 },
            { reps: 12, weight: 120, duration: 35 }
          ],
          duration: 75,
          date: new Date('2024-08-02'),
        },
        {
          user: '66c1343d639debb5a60d3c93', // Assuming 'user' is a reference to a User document
          type: 'cardio',
          sets: [
            { reps: 10, weight: 200, duration: 30 },
            { reps: 15, weight: 50, duration: 25 }
          ],
          duration: 55,
          date: new Date('2024-08-02'),
          // Add other fields as necessary
        },
        {
          user: '66c1343d639debb5a60d3c92', // Assuming 'user' is a reference to a User document
          type: 'cardio',
          sets: [
            { reps: 10, weight: 200, duration: 30 },
            { reps: 15, weight: 50, duration: 25 }
          ],
          duration: 55,
          date: new Date('2024-08-02'),
          // Add other fields as necessary
        },
        // Add more exercise objects as needed
      ];

      await Exercise.insertMany(initialExercises);
      console.log('Exercises seeded successfully.');
    } else {
      console.log('Exercises already exist. Skipping ahead.');
    }
  } catch (error) {
    console.log('Error seeding exercises:', error);
  }
};

export default seedExercises;