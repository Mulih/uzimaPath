/**
 * index.js
 *
 * This is the main entry point for the server application.
 * It sets up the Express server and configures various middleware and routes.
 *
 * The server uses the following libraries:
 * - Express: a minimal and flexible Node.js web application framework
 * - Cors: a Node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options
 * - Dotenv: a zero-dependency module that loads environment variables from a .env file into process.env
 *
 * The server connects to MongoDB using the connectMongoDB function from the utils/db.js module.
 * It mounts several routes for handling authentication, goals, exercises, and progress.
 * Each route is defined in its own module (routes/authRoutes.js, routes/goalRoutes.js, routes/exerciseRoutes.js, routes/progressRoutes.js),
 * and uses the corresponding controller functions from the controllers/ folder.
 *
 * The server listens on the port specified by the PORT environment variable, or defaults to 5000.
 */
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectMongoDB from './utils/db.js';
import authRoutes from './routes/authRoutes.js';
import goalRoutes from './routes/goalRoutes.js';
import exerciseRoutes from './routes/exerciseRoutes.js';
import progressRoutes from './routes/progressRoutes.js';

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
