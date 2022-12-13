const sqlite3 = require('sqlite3').verbose();


let db = new sqlite3.Database('./db/information.db', (err) => {
    err ? console.log('Theres is error while connecting db') : console.log('Connected Successfully!')     
});


module.exports = db;