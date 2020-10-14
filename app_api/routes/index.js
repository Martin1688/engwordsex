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
const ctrlMail = require('../controllers/mailagent');
const ctrlDic = require('../controllers/dictionary');


router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);
//router.post('/isuser', ctrlAuth.isuser);

router.get('/paras/:paratype', ctrlPara.parasByType);
router.route('/paras')
    .patch(auth, ctrlPara.parasByName) //
    .post(auth, ctrlPara.paraCreate); //

router.route('/paras/:paraid')
    .delete(auth, ctrlPara.paraDeleteOne);

router.route('/words')
    //.post(auth, ctrlWord.wordsCreate) // 用於建立英文單字資料庫，此API沒研發成功，後改由server端直接匯入
    .post(auth, ctrlWord.exerciseDone) // 設定練習完成
    .patch(auth, ctrlWord.wordsGet); //讀取要練習的英文字，並將相關參數紀錄於英文練習參數檔中

router.route('/exercise')
    .post(auth, ctrlWord.exerciseDone) // 用於設定英文練習參數檔done = true, 及doneDate()
    .patch(auth, ctrlWord.exerciseDel); // 用於刪除英文練習參數檔

router.route('/complete')
    .post(auth, ctrlWord.completeWords) //取得autocomplete 所需的英文字
    .patch(auth, ctrlWord.wordsGetOne); //用eng 查 1個 字物件返回


router.post('/usernewpsw', ctrlMail.sendMail);

router.route('/changepws')
    .post(auth, ctrlMail.changePws);

router.route('/user')
    .put(auth, ctrlAuth.updateUser)
    .patch(auth, ctrlAuth.aUser);
router.route('/user/:email')
    .delete(auth, ctrlAuth.delUser);

router.route('/mailcpl')
    .post(auth, ctrlAuth.completeMails);

router.route('/dictionary')
    .post(auth, ctrlDic.dictionarySentences)
    .patch(auth, ctrlDic.fetchSentence);

router.route('/selectChinese')
    .post(auth, ctrlWord.selectChinese)
    .patch(auth, ctrlWord.get3chiary);

module.exports = router;