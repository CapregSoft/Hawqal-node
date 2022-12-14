module.exports = (sequelize, Sequelize) => {
    const city = sequelize.define("city", {
        city_id:{
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        name:{
            type: Sequelize.TEXT
        },
        state_id:{
            type: Sequelize.INTEGER
        },
        country_id:{
            type: Sequelize.INTEGER
        },
        country_name:{
            type: Sequelize.TEXT
        },
    },{
        freezeTableName: true,
        timestamps: false
    }
    );
    return city;
};