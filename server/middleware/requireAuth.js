import jwt from 'jsonwebtoken';
import User from '../models/User.js';

/**
 * This function is an asynchronous middleware that verifies the user's authentication
 * by checking for the presence of an authorization token in the request headers. If the
 * token is present, it is verified using the secret key stored in the environment
 * variable SCRT. If the token is valid, the user's ID is extracted from the token and
 * used to find the user in the database. If the user is found, their ID is attached to
 * the request object for future use in the application. If the token is not valid or
 * not present, a 401 Unauthorized response is returned.
 *
 * @param {Object} req - The request object, which contains the request headers.
 * @param {Object} res - The response object, which is used to send the response back
 *                       to the client.
 * @param {Function} next - The next middleware function in the chain.
 * @return {Promise<void>} - A Promise that resolves when the function completes.
 */
export const requireAuth = async (req, res, next) => {
    // Check if the authorization token is present in the request headers
    const { authorization } = req.headers;

    // If the token is not present, return a 401 Unauthorized response
    if (!authorization) {
        return res.status(401).json({ error: 'Authorization token required.' });
    }

    // Extract the token from the request headers
    const token = authorization.split(' ')[1];

    try {
        // Verify the token using the secret key stored in the environment variable SCRT
        const { _id } = jwt.verify(token, process.env.SCRT);

        // Find the user in the database using the ID extracted from the token
        req.user = await User.findOne({ _id }).select('_id');

        // Call the next middleware function in the chain
        next();

    } catch (error) {
        // If there is an error verifying the token, log the error and return a 401 Unauthorized response
        console.log(error);
        return res.status(401).json({ error: 'Request is not authorized' });
    }
};

export default requireAuth;