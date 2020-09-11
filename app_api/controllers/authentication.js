const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('User');

const register = (req, res) => {
    console.log(req.body);
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
                .status(401)
                .json(info);
        }
    })(req, res);
};

module.exports = {
    register,
    login
};