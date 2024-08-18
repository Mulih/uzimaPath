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
