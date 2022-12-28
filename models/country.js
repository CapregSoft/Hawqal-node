module.exports = (sequelize, Sequelize) => {
    const country = sequelize.define("countries", {
        country_name:{
            type: Sequelize.TEXT,
            primaryKey: true
        },
        iso_code: {
            type: Sequelize.TEXT
        },
        phone_code:{
            type: Sequelize.TEXT
        },
        capital:{
            type: Sequelize.TEXT
        },
        currency:{
            type: Sequelize.TEXT
        },
        currency_name:{
            type: Sequelize.TEXT
        },
        currency_symbol:{
            type: Sequelize.TEXT
        },
        country_domain:{
            type: Sequelize.TEXT
        },
        region:{
            type: Sequelize.TEXT
        },
        subregion: {
            type: Sequelize.TEXT
        },
        timezone:{
            type: Sequelize.TEXT
        },
        zone_city:{
            type: Sequelize.TEXT
        },
        UTC:{
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
    }
    );
    return country;
};