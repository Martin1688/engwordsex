const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
    userEmail: {
        type: String,
        unique: true,
        required: true
    },
    startIndex: {
        type: Number,
        required: true
    },
    endIndex: Number,
    exDate: {
        type: Date,
        required: true
    },
    doneDate: Date,
    done: Boolean,
    wordCount: Number
});
mongoose.model('Exercise', exerciseSchema);