// Importing necessary modules
import express from 'express'; // Express is a Node.js web application framework
import cors from 'cors'; // CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options
import dotenv from 'dotenv'; // Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env
import connectMongoDB from './utils/db.js'; // Connecting to MongoDB
import authRoutes from './routes/authRoutes.js'; // Importing authentication routes
import goalRoutes from './routes/goalRoutes.js'; // Importing goal routes
import exerciseRoutes from './routes/exerciseRoutes.js'; // Importing exercise routes
import progressRoutes from './routes/progressRoutes.js'; // Importing progress routes

// Loading environment variables from .env file
dotenv.config();

// Setting the port number from the environment variable or defaulting to 5000
const PORT = process.env.PORT || 5000;

// Creating an instance of the Express application
const app = express();

// Middleware function to log the request path and method before handling the request
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
});

// Middleware to enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Mounting the authentication routes at /api/auth
app.use("/api/auth", authRoutes);

// Mounting the goal routes at /api/goals
app.use("/api/goals", goalRoutes);

// Mounting the exercise routes at /api/exercises
app.use("/api/exercises", exerciseRoutes);

// Mounting the progress routes at /api/progress
app.use("/api/progress", progressRoutes);

// Function to start the server
const startServer = () => {
    // Connecting to MongoDB
    connectMongoDB();

    // Starting the server on the specified port
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    })
}

startServer();
