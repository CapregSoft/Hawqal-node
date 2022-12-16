const model = require('./../models');
const asyncAwait = require('./../utils/catchAsync');

const cityModel = model.city;

//Get all Cities 
const getAllCities =  async(offset = 1)=>{
   const limit = 100;
   if(typeof(offset) !== 'number')
      offset =1
   const skip = (offset -1) * limit;
   try{
      const getAll =  await cityModel.findAll({
         limit: limit,
         offset: skip
      });
      let getCities;
      getAll ? getCities = getAll.map(all => all.dataValues) :  getCities = 'No Cities'
      return {
         data: getCities
      }
   }catch(error){
      return 'Internal Server Error!!!';
   }
}

//Get States By Country Name
const getAllCitiesByStateID = async(stateID = 0,offset = 1)=>{
   try{
      if(typeof(offset) !== 'number')offset = 1
      const limit =100
      const skip = (offset -1 ) * limit;
      const getAll = await cityModel.findAll({where: {state_id: stateID},
      offset:skip,
      limit:limit
      }
      );
      let getCities;
      getAll ? getCities = getAll.map(all => all.dataValues) :  getCities = 'No Cities'
      return {
         data: getCities
      }
   }catch(error){
      return 'Internal Server Error!!!';
   }
}

module.exports = {
   getAllCities,
   getAllCitiesByStateID
}
