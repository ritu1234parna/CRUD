// controllers/userController.js
const User = require('../models/User');


// Create a new user
exports.createUser = async (req, res) => {
    try {
        console.log("I am in create users");
        const user = new User(req.body);
        console.log("User="+user);
        await user.save();
        console.log("User saved=",user);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all users
exports.getUsers = async (req, res) => {
    console.log("I am in get users");
    //res.send("I am here in get User");
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get test
exports.getTest = async (req, res) => {
    console.log("I am in get users");
    res.send("I am here in Test");
    
};

// Get user by ID
exports.getUserById = async (req, res) => {
    try {
        const users = await User.find(req.params.id);
        if(!users)
            res.status.json({message:"User not found"});
        
            res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update user by ID
exports.updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete user by ID
exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.status(200).json({ message: 'User deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};