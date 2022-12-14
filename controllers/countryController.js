const model = require('./../models');
const catchAsync = require('./../utils/catchAsync');
const countryModel = model.country;

//get All countries
const getAllCountries = catchAsync(async(next) =>{
   const all = await countryModel.findAll({id:1})
   const countryData = all.map(all => all.dataValues); 
    console.table(countryData);
})

const getContryByName = catchAsync(async(countryName,next) =>{
    const country = await countryModel.findOne({where:{country_name: countryName}})
    if(country)
        {
            const selectedCountry = country.dataValues;
            console.log(selectedCountry)
        }
    else
    console.log('Not found')
})
getContryByName('Afghanistan')