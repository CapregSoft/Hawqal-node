const sqlite3 = require('sqlite3').verbose();



const createConnection  =() =>{
    let db = new sqlite3.Database('./db/info.sqlite', (err) => {
        err ? console.log('Theres is error while connecting db') : console.log('Connected Successfully!')     
    });
    return db
}

const closeConnection = (db) =>{
    db.close((err) => {
        if (err) {
          return console.error(err.message);
        }
        console.log('Close the database connection.');
    });
}




module.exports = {
    createConnection,
    closeConnection
};