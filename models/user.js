const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

// Define the person schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    },
    email: {
        type: String
    },
    mobile: {
        type: String
    },
    address: {
        type: String,
        require: true
    },
    nidCardNumber: {
        type: Number,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    role: {
        type: String,
        enum: ['voter', 'admin'],
        default: 'voter'
    },
    isVoted: {
        type: Boolean,
        require: false
    },
});

// Create person model
const User = mongoose.model('User', userSchema);
module.exports = User;