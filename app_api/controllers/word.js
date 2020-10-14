const mongoose = require('mongoose');
const word = mongoose.model('Word');
const exercise = mongoose.model('Exercise');

const wordsCreate = (req, res) => {
    console.log(req.body.eng);
    // word.find({ eng: req.body.eng, chi: req.body.chi }, (err, rows) => {
    //     console.log(rows.length);
    //     console.log('querying' + i.toString());
    //     if (rows.length === 0) {
    //         console.log('queried');
    //         // word.create({
    //         //     wdId: parseInt(req.body.wdId),
    //         //     eng: req.body.eng,
    //         //     chi: req.body.chi,
    //         //     grade: req.body.grade
    //         // }, (err, row) => {
    //         //     console.log('created');
    //         //     console.log(row);
    //         //     if (err) {
    //         //         console.log(err);
    //         //         res.status(400).json({ "error": err.message });
    //         //         return;
    //         //     } else{
    //         //         res.status(200).json({
    //         //             "ok": true,
    //         //        });
    //         //     }
    //         // });
    //     } else{
    //         res.status(200).json({
    //             "ok": false,
    //        });
    //     }
    // })



};

function put2db(ary) {
    if (ary.length > 0) {
        const ary = words[i].split(',');
        console.log(ary);
    }
};
const wordsGet = (req, res) => {
    console.log(req.body);
    exercise.findOne({ userEmail: req.body.email }, (err, row) => { //查看看練習檔中使用者有無紀錄
        if (err) {
            console.log(err);
            res.status(401).json({ "error": err });
            return;
        }
        if (row) { //如果有更新練習參數
            //console.log(row);
            if (row.done) { //如果上次的練習達到標準
                row.startIndex = row.endIndex === null ? 1 : row.endIndex;
                //row.endIndex += parseInt(req.body.wordCount);
                row.wordCount = parseInt(req.body.wordCount);
                row.done = false;
                row.exDate = new Date();
                row.doneDate = null;
                //row.save();
            } else { //如果上次的練習未達到標準
                //row.endIndex = row.startIndex + parseInt(req.body.wordCount) - 1;
                row.wordCount = parseInt(req.body.wordCount);
                row.done = false;
                row.exDate = new Date();
                row.doneDate = null;
                //row.save();
            }
            //讀取使用者設定的練習字數
            word.find({ grade: req.body.grade, wdId: { $gt: row.startIndex } }).limit(parseInt(req.body.wordCount)).exec((err, rows) => {
                    if (err) {
                        console.log(err);
                        res.status(402).json(err);
                        return;
                    }
                    if (rows) {
                        row.endIndex = rows[rows.length - 1].wdId; //紀錄最後一筆資料的wdId，以便作為下個查詢的startIndex
                        row.save();
                        res.status(200).json(rows);
                    }

                })
                // word.find({ wdId: { $gt: row.startIndex - 1, $lte: row.endIndex } }, (err, rows) => {
                //     if (err) {
                //         console.log(err);
                //         res.status(402).json(err);
                //         return;
                //     }
                //     if (rows) {
                //         res.status(200).json(rows);
                //     }
                // })
        } else { //練習檔中使用者無紀錄
            exercise.create({ //建1筆紀錄
                userEmail: req.body.email,
                startIndex: 1,
                endIndex: null,
                exDate: new Date(),
                done: false,
                wordCount: parseInt(req.body.wordCount)
            }, (err, row) => {
                if (err) {
                    console.log(err);
                    res.status(403).json({ "error": err });
                    return;
                }
                //console.log(row);
                //讀取使用者設定的練習字數
                word.find({ grade: req.body.grade, wdId: { $gt: row.startIndex } }).limit(parseInt(req.body.wordCount)).exec((err, rows) => {
                        if (err) {
                            console.log(err);
                            res.status(402).json(err);
                            return;
                        }
                        if (rows) {
                            row.endIndex = rows[rows.length - 1].wdId; //紀錄最後一筆資料的wdId，以便作為下個查詢的startIndex
                            row.save();
                            res.status(200).json(rows);
                        }

                    })
                    // word.find({ wdId: { $gt: row.startIndex - 1, $lt: row.endIndex } }, (err, rows) => {
                    //     if (err) {
                    //         console.log(err);
                    //         res.status(404).json(err);
                    //         return;
                    //     }
                    //     if (rows) {
                    //         res.status(200).json(rows);
                    //     }
                    // })
            });
        }
    });
}

const exerciseDone = (req, res) => {
    console.log(req.body.email);
    exercise.findOne({ userEmail: req.body.email }, (err, row) => {
        if (err) {
            console.log(err);
            res.status(401).json({ "error": err });
            return;
        }
        if (row) {
            row.done = true;
            row.doneDate = new Date();
            row.save();
            res.status(200).json({ "ok": true });
        }
    });
}

const exerciseDel = (req, res) => {
    exercise.deleteOne({ userEmail: req.body.email }, (err, row) => {
        if (err) {
            console.log(err);
            res.status(401).json({ "error": err });
            return;
        }
        if (row) {
            res.status(200).json({ row });
        }

    })
}

const completeWords = (req, res) => {
    const str = req.body.startChar;
    //const mm = `/^${str}/`;
    console.log(str);
    word.find({ eng: new RegExp('^' + str + '.*') }).limit(1000).exec((err, rows) => {
        if (err) {
            console.log(err);
            res.status(401).json({ "error": err });
            return;
        }
        if (rows) {
            let ary = rows.map(x => {
                return x.eng;
            })
            console.log(ary.length);
            res.status(200).json({ ary });
        }
    });
}

const wordsGetOne = (req, res) => {
    const str = req.body.eng;
    console.log(str);
    word.find({ eng: str }, (err, rows) => {
        if (err) {
            // console.log(err);
            res.status(401).json({ "error": err });
            return;
        }
        if (rows) {
            const row = rows[0];
            // console.log(row);
            if (row) {
                res.status(200).json({ row });
            } else {
                const other = '查不到' + str;
                res.status(200).json({ "error": other });
            }
        }

    })

}

//依據傳入的英文單字陣列由DB取回對應的單字物件
const selectChinese = (req, res) => {
    const words = req.body.words;
    word.find({ eng: { $in: words } }, (err, rows) => {
        if (err) {
            console.log(err);
            res.status(401).json({ "error": err });
            return;
        }
        if (rows) {
            res.status(200).send(rows);
        }
    })
}

const get3chiary = (req, res) => {
    let ary = [];
    let cnt = req.body.length;
    get3chi(ary, cnt, res, () => {
        if (ary.length > 0) {
            res.status(200).send(ary);
        }
    });
}
const get3chi = (ary, cnt, res, callback) => {
    const no = Math.floor(Math.random() * Math.floor(7800));
    const ans = (no % 4);
    cnt--;
    word.find({ wdId: { $gt: no } }).limit(10).exec((err, rows) => {
        if (err) {
            console.log(err);
            res.status(400).send(err);
            return;
        }
        const ret = rows.map(x => { return x.chi });
        const rets = `${ret[3]},${ret[6]},${ret[9]},${ans}`;
        ary.push(rets);
        console.log(rets);
        if (cnt > 0) {
            get3chi(ary, cnt, res, callback);
        } else {
            callback();
        }

    })
}



module.exports = {
    wordsCreate,
    wordsGet,
    exerciseDone,
    exerciseDel,
    completeWords,
    wordsGetOne,
    selectChinese,
    get3chiary
};