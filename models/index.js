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

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.country = require("./country")(sequelize, Sequelize);
db.state   = require("./state")(sequelize, Sequelize);
db.city    = require('./city')(sequelize, Sequelize);

module.exports = db
