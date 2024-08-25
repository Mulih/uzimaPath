/**
 * The User model represents a user of the application.
 * A user has a unique username and an email address.
 * The user's password is stored securely using bcrypt.
 * A user can have multiple goals and exercises.
 * A user can have multiple progress entries.
 */
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import validator from 'validator';


const userSchema = new mongoose.Schema(
    {
        email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        },
        password: {
        type: String,
        required: true,
        minlength: 8,
        },
    },
    { timestamps: true }
);

/**
 * Signs up a new user with the provided email and password.
 *
 * @param {string} email - The email address of the new user.
 * @param {string} password - The password for the new user.
 * @return {object} The newly created user object.
 */
userSchema.statics.signup = async function(email, password) {

    // First, check to make sure that both the email and password were provided
    if (!email || !password) {
        throw Error('All fields must be filled.');
    }

    // Next, ensure that the email is valid
    if (!validator.isEmail(email)) {
        throw Error('Email not valid.');
    }

    // Then, check that the password is strong enough
    if (!validator.isStrongPassword(password)) {
        throw Error('Password not strong enough.');
    }

    // Now, log the request to the console
    console.log('User signup called with email:', email, 'and password:', password);

    // Check to see if the user already exists
    const exists = await this.findOne({ email });
    if (exists) {
        throw Error('Email already in use.');
    }

    // Generate a salt to use for hashing the password
    const salt = await bcrypt.genSalt(10);

    // Hash the password
    const hash = await bcrypt.hash(password, salt);

    // Create the new user
    const user = await this.create({ email, password: hash });

    // If the user was created successfully, log it to the console
    if (user) {
        console.log('User created:', user);
    }

    // Return the user
    res.status(201).json({ user: { _id: user._id, email: user.email }});
    return user;
}

/**
 * Logs in a user with the provided email and password.
 *
 * @param {string} email - The email address of the user to log in.
 * @param {string} password - The password of the user to log in.
 * @return {object} The user object if the login is successful.
 * @throws {Error} If the login is unsuccessful.
 */
userSchema.statics.login = async function(email, password) {
    // First, check to make sure that both the email and password were provided
    if (!email || !password) {
        throw Error('All fields must be filled.');
    }

    // Next, check to see if the user exists
    const user = await this.findOne({ email });
    if (!user) {
        // If the user does not exist, throw an error
        throw Error('Invalid login credentials.');
    }

    // Now, compare the provided password with the hashed password in the DB
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
        // If the passwords do not match, throw an error
        throw Error('Invalid login credentials.');
    }

    // If the passwords match, return the user object
    return user;
}


const User = mongoose.model('User', userSchema);

export default User;
