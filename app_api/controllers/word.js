const mongoose = require('mongoose');
const word = mongoose.model('Word');


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
}


module.exports = {
    wordsCreate
};
