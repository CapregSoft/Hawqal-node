module.exports = (sequelize, Sequelize) => {
    const state = sequelize.define("states", {
        state_id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
        },
        state_name:{
            type: Sequelize.TEXT
        },
        country_name:{
            type: Sequelize.TEXT
        },
        latitude:{
            type: Sequelize.DECIMAL
        },
        longitude:{
            type: Sequelize.DECIMAL
        }
    },{
        freezeTableName: true,
        timestamps: false,
    });
    return state;
};