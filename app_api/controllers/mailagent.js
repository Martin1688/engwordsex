const nodemailer = require("nodemailer");
const mongoose = require('mongoose');
const crypto = require('crypto');
const User = mongoose.model('User');
//const ctrlAuth = require('../controllers/authentication');
//const pws = "Ab123456";
const EMAIL = process.env.EMAIL;
const PASSWORD = process.env.PASSWORD;
let done = false;
let transporter = nodemailer.createTransport({
    service: "Yahoo",
    secure: true,
    auth: {
        user: EMAIL,
        pass: PASSWORD,
    },
});
const sendMail = (req, res) => {
    const pws = crypto.randomBytes(5).toString('hex').toUpperCase();
    const userMailUrl = req.body.email;
    //console.log(userMailUrl);
    //console.log(pws);
    User.findOne({ email: userMailUrl }, (err, row) => { //查看看練習檔中使用者有無紀錄
        if (err) {
            console.log(err);

            //return err;
        }
        if (row) {
            done = true;
            //console.log(done);
            //console.log(row);
            row.setPassword(pws);
            row.save();
            // return 'Password changed.';
        }
    });


    setTimeout(() => {
        const mailOptions = {
            from: EMAIL,
            to: userMailUrl,
            subject: "英文生字記憶秘笈網站用戶新密碼",
            html: `<h4>貴用戶的新密碼：${pws}</h4>`
        };
        if (done) {
            transporter.sendMail(mailOptions, (err, info) => {
                //console.log('sending mail');
                if (err) {
                    console.log(err);
                    return;
                }
                if (info) {
                    console.log('ok' + info);
                }
                return res.status(200).send({
                    "message": "Password set and Email Send Successfully."
                });
            });
        } else {
            return res.status(400).send({ "message": "Account not found or error" })
        }

    }, 1000);
}

const changePws = (req, res) => {
    const userMailUrl = req.body.email;
    const oldPassword = req.body.oldPassword;
    const newPassword = req.body.newPassword;
    //console.log(userMailUrl);
    //console.log(oldPassword);
    //console.log(newPassword);
    User.findOne({ email: userMailUrl }, (err, row) => { //查看看練習檔中使用者有無紀錄
        if (err) {
            console.log(err);
            return res.status(402).send({ "message": "查無此email" });
        }
        if (row) {
            //console.log(row);
            if (row.validPassword(oldPassword)) {
                done = true;
                row.setPassword(newPassword);
                row.save();
            } else {
                return res.status(403).send({ "message": "舊密碼不正確" });
            }
        }
    });


    setTimeout(() => {
        const mailOptions = {
            from: EMAIL,
            to: userMailUrl,
            subject: "英文生字記憶秘笈網站用戶新密碼",
            html: `<h4>貴用戶的新密碼：${newPassword}</h4>`
        };
        if (done) {
            transporter.sendMail(mailOptions, (err, info) => {
                console.log('sending mail for change password');
                if (err) {
                    console.log(err);
                    return res.status(200).send({ "message": "新密碼已更改，但未發email" });
                }
                if (info) {
                    console.log('ok' + info);
                }
                return res.status(200).send({
                    "message": "新密碼已更改，並發email到註冊的信箱"
                });
            });
        }

    }, 1000);
}


module.exports = {
    sendMail,
    changePws
}