//const nodemailer = require("nodemailer");
const mongoose = require('mongoose');
const dns = require("dns");
const crypto = require('crypto');
const User = mongoose.model('User');
const mailobj = require('./emailsendinblue');
//const ctrlAuth = require('../controllers/authentication');
//const pws = "Ab123456";
const EMAIL = process.env.EMAIL;
const PASSWORD = process.env.PASSWORD;
let done = false;
// let transporter = nodemailer.createTransport({
//     service: "gmail",
//     secure: true,
//     auth: {
//         user: EMAIL,
//         pass: PASSWORD,
//     },
// });
const sendMail = (req, res) => {
    //const pws = crypto.randomBytes(5).toString('hex').toUpperCase();
    const pws = 'vocabulary888';
    const userMailUrl = req.body.email;
    //console.log(userMailUrl);
    //console.log(pws);
    const maildomain = userMailUrl.split('@')[1];//取出mail server的domain name
    dns.lookup(maildomain, (error, address, family) => { //判斷mail server是否存在
        if (error) {
            console.log(error);
            res.status(400)
                .json({ "message": `${userMailUrl} 不存在，請用真正的email`, "data": error })

        } else {
            console.log(
                `The ip address is ${address} and the ip version is ${family}`
            );

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
                    setTimeout(() => {
                        if (done){
                            mailobj.mailOfForgetPws(req,res,pws,row.name)
                        }
                    }, 1000);
                }
            });
        }
    });


    // setTimeout(() => {
    //     const mailOptions = {
    //         from: EMAIL,
    //         to: userMailUrl,
    //         subject: "英文生字記憶秘笈網站用戶新密碼",
    //         html: `<h4>貴用戶的新密碼：${pws}</h4>`
    //     };
    //     if (done) {
    //         transporter.sendMail(mailOptions, (err, info) => {
    //             //console.log('sending mail');
    //             if (err) {
    //                 console.log(err);
    //                 return;
    //             }
    //             if (info) {
    //                 console.log('ok' + info);
    //             }
    //             return res.status(200).send({
    //                 "message": "Password set and Email Send Successfully."
    //             });
    //         });
    //     } else {
    //         return res.status(400).send({ "message": "Account not found or error" })
    //     }

    // }, 1000);
}

const forgetPws=(req,res)=>{
    const pws = 'vocabulary888';
    const userMailUrl = req.body.email;
    //console.log(userMailUrl);
    //console.log(pws);
    const maildomain = userMailUrl.split('@')[1];//取出mail server的domain name
    dns.lookup(maildomain, (error, address, family) => { //判斷mail server是否存在
        if (error) {
            console.log(error);
            res.status(400)
                .json({ "message": `${userMailUrl} 不存在，請用真正的email`, "data": error })

        } else {
            User.findOne({ email: userMailUrl }, (err, row) => { //查看看練習檔中使用者有無紀錄
                if (err) {
                    console.log(err);
                    res
                    .status(400)
                    .json({ "message": `${userMailUrl}不是會員的EMail，無法重設密碼`, "data": ""  });
        
                }
                if (row) {
                    done = true;
                    //console.log(done);
                    //console.log(row);
                    row.setPassword(pws);
                    row.save((err) => {
                        if (err) {
                        console.log(err);
                            res
                                .status(409)
                                .json({ "message": " 重設密碼失敗;"+err, "data": ""  });
                        } else {
                            mailobj.mailOfForgetPws(req,res,pws,row.name)
                        }
                    });
                }
                else {
                    res
                    .status(403)
                    .json({ "message": `${userMailUrl}不是會員的EMail，無法重設密碼`, "data": ""  });
                }
            });
        
        }
    });
}


const changePws = (req, res) => {
    const userMailUrl = req.body.email;
    const oldPassword = req.body.oldPassword;
    const newPassword = req.body.newPassword;
    // console.log(userMailUrl);
    // console.log(oldPassword);
    // console.log(newPassword);

    const maildomain = userMailUrl.split('@')[1];//取出mail server的domain name
    dns.lookup(maildomain, (error, address, family) => { //判斷mail server是否存在
        if (error) {
            console.log(error);
            res.status(400)
                .json({ "message": `${userMailUrl} 不存在，請用真正的email`, "data": error })

        } else {
            User.findOne({ email: userMailUrl }, (err, row) => { //查看看練習檔中使用者有無紀錄
                if (err) {
                    console.log(err);
                    return res.status(402).send({ "message": "查無此email" });
                }
                if (row) {
                    console.log(row);
                    const verified=row.validPassword(oldPassword);
                    console.log(verified);
                    if (verified) {
                        done = true;
                        row.setPassword(newPassword);
                        row.save((err) => {
                            if (err) {
                            console.log(err);
                                res
                                    .status(409)
                                    .json({ "message": " 重設密碼失敗;"+err, "data": ""  });
                            } else {
                                res
                                .status(200)
                                .json({ "message": `密碼已更新為(${newPassword})`, "data": `密碼已更新為(${newPassword})` });
                    
                            }
                        })
                    } else {
                        return res.status(403).send({ "message": "舊密碼不正確" });
                    }
                }
            });            
        }

    });


    

    // setTimeout(() => {
    //     const mailOptions = {
    //         from: EMAIL,
    //         to: userMailUrl,
    //         subject: "英文生字記憶秘笈網站用戶新密碼",
    //         html: `<h4>貴用戶的新密碼：${newPassword}</h4>`
    //     };
    //     if (done) {
    //         transporter.sendMail(mailOptions, (err, info) => {
    //             console.log('sending mail for change password');
    //             if (err) {
    //                 console.log(err);
    //                 return res.status(200).send({ "message": "新密碼已更改，但未發email" });
    //             }
    //             if (info) {
    //                 console.log('ok' + info);
    //             }
    //             return res.status(200).send({
    //                 "message": "新密碼已更改，並發email到註冊的信箱"
    //             });
    //         });
    //     }

    // }, 1000);
}


module.exports = {
    forgetPws,
    changePws
}