const csv = require('csv-parser');
const fs = require('fs');
const express = require('express');
const router = express.Router();
const jwt = require('express-jwt');
const auth = jwt({
    secret: process.env.JWT_SECRET,
    userProperty: 'payload'
});
const mongoose = require('mongoose');
const ctrlAuth = require('../controllers/authentication');
const ctrlPara = require('../controllers/paras');
//const ctrlWord = require('../controllers/word');
const Word = mongoose.model('Word');

router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);
//router.post('/isuser', ctrlAuth.isuser);

router.get('/paras/:paratype', ctrlPara.parasByType);
router.route('/paras')
    .patch(auth, ctrlPara.parasByName)
    .post(auth, ctrlPara.paraCreate);

router.route('/paras/:paraid')
    .delete(auth, ctrlPara.paraDeleteOne);

// router.route('/words')
//     .post(auth,ctrlWord.wordsCreate);

// For City collectioon
var count=0;
fs.createReadStream('word8000.csv')
  .pipe(csv())
  .on('data', (data) => {
    //let zipArr = data['zips'].split(" ");
    var newWord = new Word({
        wdId: parseInt(data['wdId']),
        eng:data['eng'],
        chi:data['chi'],
        grade:data['gradechi'],
        memo:data['grade']
    });
    console.log(newWord);
    newWord.save(function(err, item) {
      if (item) {
        count++
        //console.log(", "+count);
      }
      if (err) {
       console.log("Error");
       console.log(err);
      }
    });
    })
  .on('end', () => {
    console.log("Done" +count);
  });
    
module.exports = router;