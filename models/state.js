module.exports = (sequelize, Sequelize) => {
    const state = sequelize.define("state", {
        state_id:{
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        name:{
            type: Sequelize.TEXT
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
    return state;
};