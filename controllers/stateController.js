const model = require('./../models');
const asyncAwait = require('./../utils/catchAsync');

const stateModel = model.state;

//Get all States 
const getAllStates = async ()=>{
   try{
      const getAll = await stateModel.findAll();
      let getStates;
      getAll ? getStates = getAll.map(all => all.dataValues) : getStates ='No States'
      return {
         data: getStates
      }
   }catch(error){
      return 'Internal Server Error!!!';
   }    
}

//Get States By Country Name
const getAllStatesByCountryName = async (countryName = '')=>{
   try{
      const getAll = await stateModel.findAll({where: {country_name: countryName}});
      let getStates;
      getAll ? getStates = getAll.map(all => all.dataValues) : getStates ='No States'
      return {
         data: getStates
      }
   }catch(error){
      return 'Internal Server Error!!!'
   }
}

module.exports = {
   getAllStates,
   getAllStatesByCountryName
}