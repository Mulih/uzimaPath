import UserSchema from './models/User.js';
import mongoose from 'mongoose';
import UserSchema from './models/UserSchema.js';

const UserData = mongoose.model("User", UserSchema);

const seedUsers = async () => {
    try {

          const existingData = await UserData.find();
          if (existingData.length === 0) {
              const initialData = [
                  {
                      username: 'kamau11',
                      email: 'kamau@gmail.com',
                      password: 'password1234',
                      age: 25
                  },
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
              await UserData.insertMany(initialData);
              console.log('Data seeded successfully.');
          } else {
              console.log('Data already exists. Skipping ahead.');
          }
    } catch (error) {
      console.log('Error inserting sample users:', error);
    }
  }

export default seedUsers;