const model = require('./../models');
const {Op} = model.Sequelize;
const countryModel = model.country;

//Get countries
const getCountries = async(name = '') =>{
    try{
        let search = {}
        name = name || null
        name !== null ? search = {where:{country_name: {[Op.like]: name}}} : ''
        const country = await countryModel.findAll(search)
        let getCountries = [];
        for(let i=0;i<country.length;+i++)getCountries.push(country[i].dataValues);
        getCountries.length === 0 ? getCountries.push('No Countries'): ''

        return getCountries;
    }catch(error){
        return 'Db connection Error!!!'
    }
}

module.exports = {
    getCountries
}
