const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    engs: {
        type: [String],
        required: true
    },
    exDate: {
        type: Date,
        required: true
    },
    done: String,
    latestId: Number
});
mongoose.model('word', exerciseSchema);