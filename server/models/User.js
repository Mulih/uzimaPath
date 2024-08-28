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
        firstName: {
            type: String,
            required: true,
            unique: true
        },
        lastName: {
            type: String,
            required: true,
            unique: true
        },
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

// The signup method is a static method on the UserSchema.
// This means that it can be called directly on the UserSchema
// object itself, rather than on an instance of the User model.
// This is a common pattern in Mongoose to add custom methods to the schema.
userSchema.statics.signup = async function(firstName, lastName, email, password) {

    // First, we do some basic validation of the input parameters.
    // We check that all the required parameters are provided,
    // and that the email and password are in the correct format.
    // If any of these checks fail, we throw an error with a corresponding message.

    // We use the logical OR operator (||) to check that all the required parameters
    // are provided. If any parameter is falsy (i.e., an empty string, null, undefined, etc.),
    // then the expression evaluates to true, and the error is thrown.
    if (!firstName || !lastName || !email || !password) {
        throw Error('All fields must be filled!');
    }

    // We use the validator library to check that the email is in the correct format.
    // If the email is not valid, we throw an error with a corresponding message.
    if (!validator.isEmail(email)) {
        throw Error('Email is not valid!');
    }

    // We use the validator library to check that the password is strong enough.
    // If the password is not strong enough, we throw an error with a corresponding message.
    if (!validator.isStrongPassword(password)) {
        throw Error('Password not strong enough!');
    }

    // We check that the email is not already in use by calling the findOne method
    // on the User model. We pass in an object with the email property set to the
    // email parameter of the function. If a user with that email already exists,
    // the findOne method will return that user, and we throw an error with a
    // corresponding message.
    const exists = await this.findOne({ email });
    if (exists) {
        throw Error('Email already in use.');
    }

    // We generate a salt using bcrypt.genSalt, which is a slow hash function
    // that takes in a number of rounds parameter and returns a promise that
    // resolves to the salt. We pass in 10 rounds, which is a reasonable number
    // for security.
    const salt = await bcrypt.genSalt(10);

    // We hash the password using bcrypt.hash, which takes in the password and the salt
    // and returns a promise that resolves to the hashed password.
    const hash = await bcrypt.hash(password, salt);

    // We create a new user in the database using the create method on the User model.
    // We pass in an object with the firstName, lastName, email, and password properties
    // set to the corresponding parameters of the function. The password property is set
    // to the hashed password.
    const user = await this.create({ firstName, lastName, email, password: hash });

    // We return the newly created user.
    return user;

};

// This is a static method called login that allows a user to log in to their account.
// It takes in an email and password as parameters.
// The method first checks if all fields are filled in by throwing an error if either the email or password is missing.
//
// Next, the method uses the findOne method of the User model to search for a user with the given email in the database.
// If a user is found, the method proceeds to check if the password provided matches the hashed password stored in the database.
// It does this by using the bcrypt.compare method, which takes in the password and the hashed password and returns a promise that resolves to a boolean.
// If the passwords match, the method returns the user object.
// If the passwords do not match, an error is thrown with the message "Incorrect password".
// If no user is found with the given email, an error is thrown with the message "Incorrect email".
userSchema.statics.login = async function(email, password) {
    // Check if all fields are filled in
    if (!email || !password) {
        throw Error('All fields must be filled!');
    }

    // Find the user with the given email
    const user = await this.findOne({ email });

    // If no user is found, throw an error
    if (!user) {
        throw Error('Incorrect email.');
    }

    // Check if the provided password matches the hashed password in the database
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
        throw Error('Incorrect password.');
    }

    // Return the user object if the email and password match
    return user;
};

const User = mongoose.model('User', userSchema);

export default User;
