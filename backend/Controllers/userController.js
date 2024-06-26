import User from '../Models/userModel.js';

export const listUsers = async (req, res) => {
    try {
        const users = await User.find({ isDeleted: false });
        res.json({message : "Details of all the users have been fetched successfully", users});
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};

export const getUserById = async (req, res) => {
    try {
        const { userId } = req.params;

        const user = await User.findById(userId).where({ isDeleted: false });
        if (user) {
            res.json({message : "User details have been fetched successfully", user });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};

export const createUser = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.validate();

        await user.save();
        res.status(201).json({message : "User created successfully", user});
    } catch (error) {
        res.status(400).json({ message: 'Bad Request', error: error.message });
    }
};

export const updateUser = async (req, res) => {
    try {
        const { userId } = req.params;

        const updatedUser = await User.findByIdAndUpdate(userId, req.body, { new: true, runValidators: true }).where({ isDeleted: false });
        if (updatedUser) {
            res.json({message : "User updated successfully", updatedUser});
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(400).json({ message: 'Bad Request', error: error.message });
    }
};

export const softDeleteUser = async (req, res) => {
    try {
        const { userId } = req.params;

        const user = await User.findByIdAndUpdate(userId, { isDeleted: true }, { new: true });
        if (user) {
            res.json({message : "User deleted successfully", user});
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};
