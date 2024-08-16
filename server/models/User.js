import mongoose from 'mongoose';


const UserSchema = new mongoose.Schema(
    {
        username: {
        type: String,
        required: true,
        unique: true,
        },
        email: {
        type: String,
        required: true,
        unique: true,
        },
        password: {
        type: String,
        required: true
        },
        age: {
        type: Number,
        default: null,
        },
    },
    { timestamps: true }
);

export default UserSchema;


// // sample users to add
// async function seedUsers() {
//   try {
//     await UserSchema.insertMany([
//       { username: 'user1', email: 'user1@example.com', password: 'user1pass', age: 25 },
//       { username: 'user2', email: 'user2@example.com', password: 'user2pass', age: 30 },
//       { username: 'user3', email: 'user3@example.com', password: 'user3pass', age: 35 },
//     ]);
//     console.log('Sample users added successfully.');
//   } catch (error) {
//     console.log('Error inserting sample users:', error);
//   }
// }

// // you can call this function to seed the database with sample users
// seedUsers();
