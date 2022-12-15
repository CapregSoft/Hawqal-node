const model = require('./../models');
const catchAsync = require('./../utils/catchAsync');
const countryModel = model.country;

//get All countries
const getAllCountries = async() =>{
   const getAll = await countryModel.findAll()
   let getCountries;
   getAll ? getCountries = getAll.map(all => all.dataValues) :  getCountries = 'No Countries'
   return {
    data: getCountries
    }
}
//Get country BY name
const getContryByName = async(countryName) =>{
    const country = await countryModel.findOne({where:{country_name: countryName}})
    let getCountries;
    country ? getCountries = country.dataValues :  getCountries = 'No Countries'
   return {
    data: getCountries
    }
}

module.exports = {
    getAllCountries,
    getContryByName
}
