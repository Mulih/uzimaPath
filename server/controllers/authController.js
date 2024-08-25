import User from '../models/User.js';
import jwt from 'jsonwebtoken';

/**
 * Creates a JSON Web Token (JWT) for a given user ID.
 *
 * The returned token is a string that contains the user's ID as a payload.
 * The token is signed with a secret key (process.env.SCRT) and has an expiration date of 1 day.
 *
 * The token is created using the jsonwebtoken library, which is a popular library for creating and verifying JWTs.
 *
 * @param {string} _id - The user ID to create the token for.
 * @returns {string} The created token.
 */
const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SCRT, { expiresIn: '1d'});
}

// Signs up a new user with the provided email and password.
//
// This function takes an object with an email and a password as its only argument.
// It then tries to create a new user with the provided email and password using the signup method on the User model.
// If the signup is successful, it creates a JSON Web Token (JWT) for the user using the createToken function, which is defined above.
// The JWT is then returned to the client in the response, along with the email address of the newly created user.
//
// If the signup fails, the function catches the error and returns a JSON response with a status code of 400 (Bad Request) and an error message containing the error message from the signup method.
//
// Note that this function does not handle any validation of the email and password; it simply passes them straight through to the signup method on the User model, which is responsible for validating them.
const signupUser = async (req, res) => {

    const { email, password } = req.body;
    try {
        const user = await User.signup(email, password);

        const token = createToken(user._id);

        res.status(200).json({ email, token });

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// Logs in an existing user with the provided email and password.
//
// This function takes an object with an email and a password as its only argument.
// It then tries to log in the user with the provided email and password using the login method on the User model.
// If the login is successful, it creates a JSON Web Token (JWT) for the user using the createToken function, which is defined above.
// The JWT is then returned to the client in the response, along with the email address of the user.
//
// If the login fails, the function catches the error and returns a JSON response with a status code of 400 (Bad Request) and an error message containing the error message from the login method.
//
// Note that this function does not handle any validation of the email and password; it simply passes them straight through to the login method on the User model, which is responsible for validating them.
const loginUser = async (req, res) => {

    // Get the email and password from the request body
    const { email, password } = req.body;

    // Try to log in the user
    try {
        // Attempt to log in the user using the login method on the User model
        const user = await User.login(email, password);

        // If the login is successful, create a JSON Web Token (JWT) for the user
        const token = createToken(user._id);

        // Return the JWT and the email address of the user in the response
        res.status(200).json({ email, token });

    } catch (error) {
        // If the login fails, catch the error and return a JSON response with a status code of 400 (Bad Request) and an error message containing the error message from the login method
        res.status(400).json({ error: error.message });
    }

}



export { signupUser, loginUser };