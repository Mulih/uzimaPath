import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectMongoDB from './utils/db.js';

dotenv.config();

const PORT = process.env.PORT || 5000;



const app = express();
app.use(cors());
app.use(express.json());

connectMongoDB();
// sample users to add
const seedUsers = async () => {
  try {
        const existingData = await UserSchema.find();
        if (existingData.length === 0) {
            const initialData = [
                {
                    username: 'alvinmulih',
                    email: 'kyalomuli1@gmail.com',
                    password: 'password123',
                    age: 25
                },
                {
                    username: 'Michelle23',
                    email: 'Michelle23@example.com',
                    password: 'user2pass',
                    age: 30
                },
                {
                    username: 'user3',
                    email: 'user3@example.com',
                    password: 'user3pass',
                    age: 35
                },
            ];
            await UserSchema.insertMany(initialData);
            console.log('Data seeded successfully.');
        } else {
            console.log('Error seeding data:', error.message)
        }



    console.log('Sample users added successfully.');
  } catch (error) {
    console.log('Error inserting sample users:', error);
  }
}

// you can call this function to seed the database with sample users
seedUsers()


app.get('/', (req, res) => {
    res.status(200).json({
        message: 'UzimaPath'
    });
});

app.listen(5000, () => {
    console.log(`Server is running on port ${PORT}`);
})