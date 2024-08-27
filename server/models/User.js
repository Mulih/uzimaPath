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

// static signup method
userSchema.statics.signup = async function(firstName, lastName, email, password) {

    // validation
    if (!firstName, !lastName, !email || !password) {
        throw Error('All fields must be filled!');
    }
    if (!validator.isEmail(email)) {
        throw Error('Email is not valid!');
    }
    if (!validator.isStrongPassword(password)) {
        throw Error('Password not strong enough!');
    }

    const exists = await this.findOne({ email });
    if (exists) {
        throw Error('Email already in use.');
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await this.create({ firstName, lastName, email, password: hash });

    return user;

};

// static login method
userSchema.statics.login = async function(email, password) {
    if (!email || !password) {
        throw Error('All fields must be filled!');
    }

    const user = await this.findOne({ email });

    if (!user) {
        throw Error('Incorrect email.');
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
        throw Error('Incorrect password.');
    }

    return user;
};

const User = mongoose.model('User', userSchema);

export default User;
