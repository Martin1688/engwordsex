const mongoose = require('mongoose');
const host = process.env.DB_HOST || '127.0.0.1'
    //const dbURL = `mongodb://${host}/Loc8r`;
    //mongodb+srv://MartinMvc5:<password>@cluster0-62eu6.mongodb.net/<dbname>?retryWrites=true&w=majority
const dbURL = "mongodb+srv://MartinMvc5:pan557333@cluster0-62eu6.mongodb.net/vocabulary?retryWrites=true&w=majority";
const readLine = require('readline');

const connect = () => {
    setTimeout(() => mongoose.connect(dbURL, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }), 1000);
}

mongoose.connection.on('connected', () => {
    console.log('db connected');
});

mongoose.connection.on('error', err => {
    console.log('error: ' + err);
    return connect();
});

mongoose.connection.on('disconnected', () => {
    console.log('db disconnected');
});

if (process.platform === 'win32') {
    const rl = readLine.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.on('SIGINT', () => {
        process.emit("SIGINT");
    });
}

const gracefulShutdown = (msg, callback) => {
    db.close(() => {
        console.log(`db disconnected through ${msg}`);
        callback();
    });
};

process.once('SIGUSR2', () => {
    gracefulShutdown('nodemon restart', () => {
        process.kill(process.pid, 'SIGUSR2');
    });
});
process.on('SIGINT', () => {
    gracefulShutdown('app termination', () => {
        process.exit(0);
    });
});
process.on('SIGTERM', () => {
    gracefulShutdown('Heroku app shutdown', () => {
        process.exit(0);
    });
});
connect();
require('./word');
require('./exercise');
require('./user');
require('./parameter');