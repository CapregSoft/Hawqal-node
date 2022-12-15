const model = require('./../models');
const asyncAwait = require('./../utils/catchAsync');

const cityModel = model.city;

//Get all Cities 
const getAllCities =  async()=>{
   const getAll =  await cityModel.findAll();
   let getCities;
   getAll ? getCities = getAll.map(all => all.dataValues) :  getCities = 'No Cities'
   return {
      data: getCities
   }
}

//Get States By Country Name
const getAllCitiesByStateID = async(stateID = 0)=>{
    const getAll = await cityModel.findAll({where: {state_id: stateID}});
    let getCities;
    getAll ? getCities = getAll.map(all => all.dataValues) :  getCities = 'No Cities'
    return {
      data: getCities
   }
}

module.exports = {
   getAllCities,
   getAllCitiesByStateID
}
