const express = require('express');
const router = express.Router();
const jwt = require('express-jwt');
const auth = jwt({
    secret: process.env.JWT_SECRET,
    userProperty: 'payload'
});
const ctrlAuth = require('../controllers/authentication');
const ctrlPara = require('../controllers/paras');



module.exports = router;