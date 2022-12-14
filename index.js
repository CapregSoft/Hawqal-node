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


//Get All States
const getStates = async () =>{
    const dbConnection = await db.createConnection();
    const sql ='select * from state';
    dbConnection.all(sql,(err,rows) =>{
        if(err) return console.error(err.message)
        console.log(rows);
    })
    await db.closeConnection(dbConnection);
}

//Get States By Country Name
const getStatesByCountryName = async (countryName) =>{
    const dbConnection = db.createConnection();
    const sql = `select * from state where country_name like '${countryName}'`
    dbConnection.all(sql,(err,rows) =>{
        if(err) return console.error(err.message)
        console.log(rows);
    })
    await db.closeConnection(dbConnection);
}

//Get All Cities 
const getCities = async() =>{
    const dbConnection = await db.createConnection();
    const sql = 'select * from city'
    dbConnection.all(sql,(err,rows)=>{
        if(err) return console.error(err.message);
        console.log(rows);
    })
    await db.closeConnection();
}

//Get all cities from state 
const getCitiesfromStateName = async(stateID) =>{
    const dbConnection = await db.createConnection();
    const sql = `select * from city where state_id= ${stateID}`
    dbConnection.all(sql,(err,rows)=>{
        if(err) return console.error(err.message);
        console.log(rows);
    })
    await db.closeConnection(dbConnection);
}
module.exports = {
    getCountries,
    getCountiresByName,
    getStates,
    
}