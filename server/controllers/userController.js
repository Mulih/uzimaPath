import bcrypt from 'bcryptjs/dist/bcrypt.js';
import User from '../models/User.js';
import jwt from 'jsonwebtoken';

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SCRT, { expiresIn: '3d' })
}

const signupUser = async (req, res) => {

    const { firstName, lastName, email, password } = req.body;

    try {
        const user = await User.signup(firstName, lastName, email, password);

        const token = createToken(user._id);

        res.status(200).json({email, token});

    } catch (error) {
        res.status(400).json({error: error.message});

    }
};

const loginUser = async (req, res) => {

    const { email, password } = req.body;

    try {
        const user = await User.login(email, password);

        const token = createToken(user._id);

        res.status(200).json({email, token});

    } catch (error) {
        res.status(400).json({error: error.message});

    }
};

const updateUserPassword = async (req, res) => {
    const { currentPassword, newPassword } = req.body;
    const { _id } = req.user;
    try {
        const user = await User.findById(_id);
        const match = await bcrypt.compare(currentPassword, user.password);

        if (!match) {
            return res.status(400).json({ error: 'Passwords do not match.' });
        }

        const hash = await bcrypt.hash(newPassword, 10);
        user.password = hash;
        await user.save();

        res.status(200).json({ message: 'Password updated successfully.' });
    } catch (error) {
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