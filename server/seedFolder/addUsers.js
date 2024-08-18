import UserSchema from '../models/User.js';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const UserData = mongoose.model("User", UserSchema);

const saltRounds = 10;

const seedUsers = async () => {
    try {

          const existingData = await UserData.find();
          if (existingData.length === 0) {
              const initialData = [
                  {
                      username: 'kamau11',
                      email: 'kamau@gmail.com',
                      password: 'password1234',
                      age: 25,
                      isAdmin: false
                  },
                  {
                      username: 'alvinmulih',
                      email: 'kyalomuli1@gmail.com',
                      password: 'passwd123',
                      age: 25,
                      isAdmin: true
                  },
                  {
                      username: 'Michelle23',
                      email: 'Michelle23@example.com',
                      password: 'user2pass',
                      age: 30,
                      isAdmin: false
                  },
                  {
                      username: 'user3',
                      email: 'user3@example.com',
                      password: 'user3pass',
                      age: 35,
                      isAdmin: false
                  },
              ];
              const hashedDataPromises = initialData.map(async (user) => ({
                ...user,
                password: await bcrypt.hash(user.password, saltRounds),
              }));

              const hashedData = await Promise.all(hashedDataPromises);
              await UserData.insertMany(hashedData);
              console.log('Users seeded successfully.');
          } else {
              console.log('Users already exists. Skipping ahead.');
          }
    } catch (error) {
      console.log('Error inserting sample users:', error);
    }
  }

export default seedUsers;