const db = require('./config/connection');

const getCountries = async () =>{
    const dbConntecd = await db.createConnection();
    const sql = 'select * from country';
    dbConntecd.all(sql, (err, rows) => {
        if (err) {
          return console.error(err.message);
        }
        console.log(rows.length)
    });

    await db.closeConnection(dbConntecd);
}

const getCountiresByName = async(name) =>{
    const dbConnection = await db.createConnection();
    const sql = `select * from country where country_name like '${name}'`
    dbConnection.get(sql, (err, row) => {
        if (err) {
          return console.error(err.message);
        }
        console.log(row)
    });

    await db.closeConnection(dbConnection);
}

getCountiresByName('India');

module.exports = {
    getCountries,
    getCountiresByName
}