const express = require('express');
const router = express.Router();
const jwt = require('express-jwt');
const auth = jwt({
    secret: process.env.JWT_SECRET,
    userProperty: 'payload'
});
const ctrlAuth = require('../controllers/authentication');
const ctrlPara = require('../controllers/paras');
const ctrlWord = require('../controllers/word');

router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);
//router.post('/isuser', ctrlAuth.isuser);

router.get('/paras/:paratype', ctrlPara.parasByType);
router.route('/paras')
    .patch(auth, ctrlPara.parasByName)
    .post(auth, ctrlPara.paraCreate);

router.route('/paras/:paraid')
    .delete(auth, ctrlPara.paraDeleteOne);

router.route('/words')
    .post(auth,ctrlWord.wordsCreate);
    
module.exports = router;