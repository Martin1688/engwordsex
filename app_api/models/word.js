const mongoose = require('mongoose');

const wordSchema = new mongoose.Schema({
    wdId: {
        type: Number,
        unique: true,
        required: true
    },
    eng: {
        type: String,
        required: true
    },
    chi: {
        type: String,
        required: true
    },
    grade: {
        type: String,
        required: true
    },
    memo: String
});

const newLocal = 'Word';
mongoose.model(newLocal, wordSchema);