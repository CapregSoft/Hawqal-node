const db = require('./config/connection');
const sqlite3 = require('sqlite3').verbose();

const getCountries = async () =>{
    const dbConntecd = await db.createConnection();
}

const getCountiresByName = (name) =>{

}

getCountries();

module.exports = {
    getCountries,
    getCountiresByName
}