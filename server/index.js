import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectMongoDB from './utils/db.js';
import authRoutes from './routes/authRoutes.js';
import goalRoutes from './routes/goalRoutes.js';
import exerciseRoutes from './routes/exerciseRoutes.js';
import progressRoutes from './routes/progressRoutes.js';






dotenv.config();

const PORT = process.env.PORT || 5000;




const app = express();

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
});

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));




//
// This server is built with Express.js and uses the Mongoose library to connect
// to a MongoDB database. It uses the CORS middleware to allow cross-origin
// resource sharing, which is necessary for the React frontend to make requests
// to the server.
//
// The server is configured to listen on the port specified in the PORT
// environment variable, or 5000 if that variable is not set.
//
// The connectMongoDB function is a promise that resolves when a connection to the
// MongoDB database is established. The callback function that is passed to the
// then method is called when the connection is established, and it sets up the
// "/members/all" route.
//
// The "/members/all" route sends a GET request to the MongoDB database to
// retrieve all documents in the "users" collection, and sends the result back
// to the client as JSON.
//

connectMongoDB();




app.use("/api/auth", authRoutes);
app.use("/api/goals", goalRoutes);
app.use("/api/exercises", exerciseRoutes);
app.use("/api/progress", progressRoutes);



app.get("/", (req, res) => {
    res.status(200).json({ mssg: 'UzimaPath app.'});
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})