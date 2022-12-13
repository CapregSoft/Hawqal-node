const sqlite3 = require('sqlite3').verbose();



const createConnection  =() =>{
    let db = new sqlite3.Database('./db/info.sqlite', (err) => {
        err ? console.log('Theres is error while connecting db') : console.log('Connected Successfully!')     
    });
    return db
}




module.exports = {
    createConnection
};