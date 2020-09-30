const mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const secretWord = process.env.JWT_SECRET || 'heyheymyyPrivateSecret';

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    role: String,
    grade: String,
    memo: String,
    hash: String,
    salt: String,
    signdate: String
});
userSchema.methods.setPassword = function(password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto
        .pbkdf2Sync(password, this.salt, 1000, 64, 'sha512')
        .toString('hex');
};
userSchema.methods.validPassword = function(password) {
    const hash = crypto
        .pbkdf2Sync(password, this.salt, 1000, 64, 'sha512')
        .toString('hex');
    return this.hash === hash;
};
userSchema.methods.generateJwt = function() {
    const expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);
    console.log(this);
    //console.log(secretWord);
    return jwt.sign({
        _id: this._id,
        email: this.email,
        role: this.role,
        exp: parseInt(expiry.getTime() / 1000, 10),
    }, secretWord);
};

userSchema.methods.genePassword = function(charCnt) {
    this.memo = crypto.randomBytes(charCnt).toString();
};

mongoose.model('User', userSchema);