const path = require('path');
module.exports = {
    HOST: path.join(__dirname,'./../db/info.sqlite'),
    USER: "",
    PASSWORD: "",
    DB: "info",
    dialect: "sqlite",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };