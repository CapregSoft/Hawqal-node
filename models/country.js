module.exports = (sequelize, Sequelize) => {
    const country = sequelize.define("country", {
        country_id:{
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        country_name:{
            type: Sequelize.TEXT
        }
    },{
        freezeTableName: true,
        timestamps: false
    }
    );
    return country;
};