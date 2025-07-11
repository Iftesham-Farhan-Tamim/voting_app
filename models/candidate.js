const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

// Define the person schema
const candidateSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    party: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        required: true
    },
    votes: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
                required: true
            },
            votedAt: {
                type: Date,
                default: Date.now()
            }
        }
    ],
    voteCount: {
        type: Number,
        default: 0
    }
});

// Create person model
const Candidate = mongoose.model('Candidate', candidateSchema);
module.exports = Candidate;