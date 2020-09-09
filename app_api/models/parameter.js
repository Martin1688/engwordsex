const mongoose = require('mongoose');

const paraSchema = new mongoose.Schema({
    paraType: {
        type: String,
        required: true
    },
    paraName: {
        type: String,
        required: true
    },
    paraText: String,
    paraNo: Number,
    paraMemo: String
});
mongoose.model('Paras', paraSchema);