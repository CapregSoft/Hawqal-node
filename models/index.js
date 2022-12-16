const dbConfig = require('../config/db.config');

const Sequelize = require('sequelize');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    logging: false,
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

// const connect = async () => {
//     try {
//       await sequelize.authenticate();
//       console.log('Connection has been established successfully.');
  
//       // Define your models and export them as an object
//       const db = {};
//       db.Sequelize = Sequelize;
//       db.sequelize = sequelize;
//       db.country = await require("./country")(sequelize, Sequelize);
//       db.state   = await require("./state")(sequelize, Sequelize);
//       db.city    = await require('./city')(sequelize, Sequelize);
//       db.error = 0;
//       return db;
//     } catch (error) {
//       console.error('Internal Server Error', error);
//       return { error: 1 };
//     }
// };
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.country = require("./country")(sequelize, Sequelize);
db.state   = require("./state")(sequelize, Sequelize);
db.city    = require('./city')(sequelize, Sequelize);
module.exports = db
