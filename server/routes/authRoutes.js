/**
 * This file defines the routes for the authentication endpoints.
 * It imports the express library, as well as the signupUser and loginUser functions
 * from the authController module.
 *
 * The router is an instance of the express Router class, which is used to define the
 * routes. The signupUser function is used to handle the POST request to the /signup
 * endpoint, while the loginUser function is used to handle the POST request to the
 * /login endpoint.
 *
 * The export statement at the end of the file exports the router as the default export
 * of the module.
 */
import express from 'express';
import { signupUser, loginUser } from '../controllers/authController.js';
const router = express.Router();

/**
 * This route handles the POST request to the /signup endpoint.
 * It calls the signupUser function, which is responsible for creating a new user in the
 * database and returning the newly created user object.
 */
router.post('/signup', signupUser);

/**
 * This route handles the POST request to the /login endpoint.
 * It calls the loginUser function, which is responsible for authenticating a user and
 * returning the user object if authentication is successful.
 */
router.post('/login', loginUser);

/**
 * This statement exports the router as the default export of the module.
 * This allows other modules to import the router and use it to define routes.
 */
export default router;
