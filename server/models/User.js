/**
 * The User model represents a user of the application.
 * A user has a unique username and an email address.
 * The user's password is stored securely using bcrypt.
 * A user can have multiple goals and exercises.
 * A user can have multiple progress entries.
 */
import mongoose from 'mongoose';


const userSchema = new mongoose.Schema(
    {
        username: {
        type: String,
        required: true,
        unique: true,
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
        age: {
        type: Number,
        default: null,
        },
        isAdmin: {
            type: Boolean,
            default: false,
        }
    },
    { timestamps: true }
);

const User = mongoose.model('user', userSchema);

export default User;
