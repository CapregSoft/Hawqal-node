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
            type: Sequelize.INTEGER,
            references: {
                model: 'state', // name of Target model
                key: 'state_id', // key in Target model that we're referencing
            } 
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
    });
    return city;
};