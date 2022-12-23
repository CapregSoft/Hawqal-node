const model = require('./../models');
const countryModel = model.country;

//Get countries
const getCountries = async() =>{
    try{
        const country = await countryModel.findAll()
        let getCountries= [];
        for(let i=0;i<country.length;+i++)getCountries.push(country[i].dataValues.country_name)
        getCountries.length === 0 ? getCountries.push('No Countries'): ''
        return getCountries;
    }catch(error){
        return 'Db connection Error!!!'
    }
}

module.exports = {
    getCountries
}
