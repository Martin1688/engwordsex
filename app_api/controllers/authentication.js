const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('User');

const register = (req, res) => {
    //console.log(req.body);
    if (!req.body.name || !req.body.email || !req.body.password) {
        return res
            .status(400)
            .json({ "message": "All fields required" });
    }

    const user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.role = req.body.role;
    user.grade = req.body.grade;
    user.memo = req.body.memo;
    user.signdate = req.body.signdate;
    // res.status('304').json('fromMartin');
    user.setPassword(req.body.password);
    user.save((err) => {
        if (err) {
            res
                .status(401)
                .json(err);
        } else {
            const token = user.generateJwt();
            res
                .status(200)
                .json({ 'token': token, 'name': user.name, 'grade': user.grade });
        }
    })
};

const login = (req, res) => {
    if (!req.body.email || !req.body.password) {
        return res
            .status(400)
            .json({ "message": "email and password required" });
    }
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            return res
                .status(404)
                .json(err);
        }
        if (user) {
            const token = user.generateJwt();
            res.set({ 'content-type': 'application/json; charset=utf-8' })
                .status(200)
                .json({ 'token': token, 'name': user.name, 'grade': user.grade });
        } else {
            res
                .status(403)
                .json(info);
        }
    })(req, res);
};

//重設密碼

//用email 取回1個使用者資料
const aUser = (req, res) => {
    //console.log(req.body.email);
    if (!req.body.email) {
        return res
            .status(400)
            .json({ "message": "email  required" });
    } else {
        User.findOne({ email: req.body.email }, (err, row) => { //查看看練習檔中使用者有無紀錄
            if (err) {
                console.log(err);
                res.status(401).json({ "error": err });
                return;
            }
            if (row) {
                res.status(200).json(row);
            }
        });
    }
}

//產生指定長度的亂數密碼
const updateUser = (req, res) => {
    //console.log(req.body.email);
    const role = req.body.role;
    const grade = req.body.grade;
    const name = req.body.name;

    if (!req.body.email) {
        return res
            .status(400)
            .json({ "message": "email  required" });
    } else {
        User.findOne({ email: req.body.email }, (err, row) => { //查看看練習檔中使用者有無紀錄
            if (err) {
                console.log(err);
                res.status(401).json({ "error": err });
                return;
            }
            if (row) {
                row.role = role;
                row.grade = grade;
                row.name = name;
                row.save();
                res.status(200).send({ "message": "資料已更新" });
            }
        });
    }

}
const delUser = (req, res) => {
    const { email } = req.params;
    User.deleteOne({ email: email }, (err, row) => {
        if (err) {
            console.log(err);
            res.status(401).json({ "error": err });
            return;
        }
        if (row) {
            res.status(200).send({ "message": "資料已刪除" });
        }

    })

}

const completeMails = (req, res) => {
    //const str = req.body.startChar;
    //const mm = `/^${str}/`;
    //console.log('str');
    User.find({}).limit(1000).exec((err, rows) => {
        if (err) {
            console.log(err);
            res.status(401).json({ "error": err });
            return;
        }
        if (rows) {
            let ary = rows.map(x => {
                    return x.email;
                })
                console.log(ary);
            res.status(200).json({ ary });
        }
    });
}


module.exports = {
    register,
    login,
    updateUser,
    aUser,
    completeMails,
    delUser
};