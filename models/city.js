module.exports = (sequelize, Sequelize) => {
    const city = sequelize.define("cities", {
        city_id:{
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        city_name:{
            type: Sequelize.TEXT
        },
        state_name:{
            type: Sequelize.TEXT
        },
        state_id:{
            type: Sequelize.INTEGER,
        },
        country_name:{
            type: Sequelize.TEXT
        },
        latitude:{
            type: Sequelize.TEXT
        },
        longitude:{
            type: Sequelize.TEXT
        }
    },{
        freezeTableName: true,
        timestamps: false
    });
    return city;
};