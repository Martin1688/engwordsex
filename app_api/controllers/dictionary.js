var http = require("https");
var Dictionary = require("oxford-dictionary");

const dictionaryWord = (req, res) => {
    const qWord = req.body.word;
    //console.log(qWord);
    if (!qWord) {
        res.status('200').send('請輸入查詢的英文字');
        return;
    }

    var config = {
        app_id: process.env.DIC_ID,
        app_key: process.env.DIC_KEY,
        source_lang: "en-us"
    };

    var dict = new Dictionary(config);

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

const dictionarySentences = (req, resp) => {
    const qWord = req.body.word;
    const myPath = '/define?term=' + qWord;
    console.log(myPath);


    var options = {
        "method": "GET",
        "hostname": "mashape-community-urban-dictionary.p.rapidapi.com",
        "port": null,
        "path": myPath,
        "headers": {
            "x-rapidapi-host": "mashape-community-urban-dictionary.p.rapidapi.com",
            "x-rapidapi-key": "47610b520emsh1d56b9acfb396f9p14dcf4jsn7989fbd05eea",
            "useQueryString": true
        }
    };
    let ary = [];
    var req = http.request(options, function(res) {
        var chunks = [];

        res.on("data", function(chunk) {
            chunks.push(chunk);
        });

        res.on("end", function() {
            var body = Buffer.concat(chunks);
            const data = body.toString();
            ary = JSON.parse(data).list.map(x => { return x.example.replace(/(\r\n|\n|\r)/gm, " ") });
            resp.status(200).send(ary);
            console.log(ary);
        });
    });

    req.end();

}

module.exports = {
    dictionaryWord,
    dictionarySentences
}