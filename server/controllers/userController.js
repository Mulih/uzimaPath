import bcrypt from 'bcryptjs/dist/bcrypt.js';
import User from '../models/User.js';
import jwt from 'jsonwebtoken';

/**
 * This function creates a JSON Web Token (JWT) with the user's _id and a secret key.
 * The JWT is used to authenticate the user and is sent back to the client as a response.
 *
 * @param {string} _id - The unique identifier of the user.
 * @return {string} The JSON Web Token (JWT) with the user's _id and a secret key.
 */
const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SCRT, { expiresIn: '3d' });
}

// This function is an asynchronous function that handles the signup functionality of the application.
// It takes in two parameters: req (request object) and res (response object).

const signupUser = async (req, res) => {

    // Destructuring the firstName, lastName, email, and password properties from the request body
    const { firstName, lastName, email, password } = req.body;

    try {
        // Calling the signup static method of the User model to create a new user in the database
        // The signup method takes in the firstName, lastName, email, and password as parameters
        // It returns the newly created user object
        const user = await User.signup(firstName, lastName, email, password);

        // Creating a JSON Web Token (JWT) with the user's _id and a secret key
        // The JWT is used to authenticate the user and is sent back to the client as a response
        const token = createToken(user._id);

        // Sending a JSON response with the email and token properties
        // The email is used to display the user's email on the client side
        // The token is used to authenticate the user for future requests
        res.status(200).json({email, token});

    } catch (error) {
        // If an error occurs during the signup process, a JSON response with an error message is sent back to the client
        res.status(400).json({error: error.message});

    }
};

// This function is an asynchronous function that handles the login functionality of the application.
// It takes in two parameters: req (request object) and res (response object).

const loginUser = async (req, res) => {

    // Destructuring the email and password properties from the request body
    const { email, password } = req.body;

    try {
        // Calling the User.login static method from the User model with the email and password as arguments
        // This method checks if the user with the given email exists and if the password matches the user's password
        // If the user exists and the password is correct, the user object is returned
        const user = await User.login(email, password);

        // Calling the createToken function with the user's _id as an argument
        // This function creates a JSON Web Token (JWT) with the user's _id and a secret key
        // The JWT is used to authenticate the user and is sent back to the client as a response
        const token = createToken(user._id);

        // Sending a JSON response with the email and token properties
        // The email is used to display the user's email on the client side
        // The token is used to authenticate the user for future requests
        res.status(200).json({email, token});

    } catch (error) {
        // If an error occurs during the login process, a JSON response with an error message is sent back to the client
        res.status(400).json({error: error.message});

    }
};


/**
 * This function updates the user's password in the database.
 * It checks if the current password matches the user's password in the database.
 * If the passwords match, it updates the user's password in the database with the new password.
 *
 * @param {Object} req - The request object containing the current password and new password.
 * @param {Object} res - The response object used to send a success or error message.
 * @returns {Object} - The response object with a success or error message.
 */
const updateUserPassword = async (req, res) => {
    // Destructure the current password and new password from the request body
    const { currentPassword, newPassword } = req.body;
    // Destructure the user ID from the request object
    const { id } = req.user._id;

    try {
        // Find the user in the database using the user ID
        const user = await User.findById(id);
        // Check if the current password matches the user's password in the database
        const match = await bcrypt.compare(currentPassword, user.password);

        // If the passwords do not match, return a 400 status code with an error message
        if (!match) {
            return res.status(400).json({ error: 'Passwords do not match.' });
        }

        // Hash the new password using bcrypt
        const hash = await bcrypt.hash(newPassword, 10);
        // Update the user's password in the database with the new password
        user.password = hash;
        await user.save();

        // Return a 200 status code with a success message
        res.status(200).json({ message: 'Password updated successfully.' });
    } catch (error) {
        // If an error occurs, return a 400 status code with an error message
        res.status(400).json({ error: error.message });
    }
};

const updateUserDetails = async () => {
    const { firstName, lastName, email } = req.body;
    const user_id = req.user._id;

    try {
        const updatedUser = await User.findByIdAndUpdate(user_id, { firstName, lastName, email }, { new: true });
        res.status(200).json(updatedUser);

    } catch (error) {
        res.status(400).json({ error: error.message });
    };
};

export { signupUser, loginUser, updateUserPassword, updateUserDetails };