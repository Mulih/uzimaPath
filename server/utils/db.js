import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const Client = process.env.MONGO_URL;

const connectMongoDB = () => {
    mongoose
      .connect(Client)
      .then(() => console.log("Connected to Mongo DB"))
      .catch((err) => {
        console.error("failed to connect with mongo");
        console.error(err);
      });
  };

export default connectMongoDB;