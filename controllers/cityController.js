const { where } = require('sequelize');
const country = require('../models/country');
const model = require('./../models');
const asyncAwait = require('./../utils/catchAsync');
const {Op} = model.Sequelize;

const cityModel = model.city;

//Get States By Country Name
const getAllCitiesByStateID = async(stateID = 0,offset = 1)=>{
   if(stateID === '') return  `Country can't be empty`
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
      getAll.length>0 ? getCities = getAll.map(all => all.dataValues) :  getCities = 'No Cities'
      return {
         data: getCities
      }
   }catch(error){
      return 'Internal Server Error!!!';
   }
}

//retrieve all cities by country name
const getAllCitiesByCountryName = async(name = '')=>{
   try{
      //cityModel.findAll({where: {country_name:{ $regexp: name}}});
      const getAll = await cityModel.findAll({
         where: {
           country_name: {
             [Op.like]:name
           }
         }
       });
      let getCities;
      getAll.length>0 ? getCities = getAll.map(all => all.dataValues) :  getCities = 'No Cities'
      return {
         data: getCities
      }
   }catch(error){
      return 'Internal Server Error!!!';
   }
}

module.exports = {
   getAllCitiesByStateID,
   getAllCitiesByCountryName
}
