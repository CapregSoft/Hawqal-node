const model = require('./../models');
const catchAsync = require('./../utils/catchAsync');
const AppError   = require('./../utils/appError');
const countryModel = model.country;




//get All countries
const getAllCountries = async() =>{
   try{
        const getAll = await countryModel.findAll()
        let getCountries;
        getAll ? getCountries = getAll.map(all => all.dataValues) :  getCountries = 'No Countries'
        return {
            data: getCountries
        }
    
    }catch(error){
        return 'Internal Server Error!!!'
    }
};
//Get country BY name
const getContryByName = async(countryName = '') =>{
    try{
        const country = await countryModel.findOne({where:{country_name: countryName}})
        let getCountries;
        country ? getCountries = country.dataValues :  getCountries = 'No Countries'
        return {
            data: getCountries
        }
    }catch(error){
        return 'Internal Server Error!!!'
    }
}

module.exports = {
    getAllCountries,
    getContryByName
}
