var Dictionary = require("oxford-dictionary");

var config = {
    app_id: process.env.DIC_ID,
    app_key: process.env.DIC_KEY,
    source_lang: "en-us"
};

var dict = new Dictionary(config);
const dictionaryWord = (req, res) => {
    const qWord = req.body.word;
    //console.log(qWord);
    if (!qWord) {
        res.status('200').send('請輸入查詢的英文字');
        return;
    }
    var lookup = dict.find(qWord);
    lookup.then(function(data) {
            const result = data.results.map(x => { return x.lexicalEntries });
            const entries = result[0].map(x => { return x.entries });
            const senses = entries[0].map(x => { return x.senses });
            const examples = senses[0].map(x => { return x.examples });

            const arrays = examples.flat(Infinity).filter(Boolean);
            let list = [];
            if (arrays.length) {
                list = arrays.map(x => { return x.text.charAt(0).toUpperCase() + x.text.slice(1) });
            }
            //console.log(arrays);
            res.status('200').send(list);
        },
        function(err) {
            console.log(err);
            res.status(402).send({ "message": "查無" + qWord })
        });

}

module.exports = {
    dictionaryWord
}