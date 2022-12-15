const model = require('./../models');
const asyncAwait = require('./../utils/catchAsync');

const stateModel = model.state;

//Get all States 
const getAllStates = async ()=>{
    const getAll = await stateModel.findAll();
    let getStates;
    getAll ? getStates = getAll.map(all => all.dataValues) : getStates ='No States'
    return {
      data: getStates
   }    
}

//Get States By Country Name
const getAllStatesByCountryName = async (countryName)=>{
    const getAll = await stateModel.findAll({where: {country_name: countryName}});
    let getStates;
    getAll ? getStates = getAll.map(all => all.dataValues) : getStates ='No States'
    return {
      data: getStates
   }
}

module.exports = {
   getAllStates,
   getAllStatesByCountryName
}