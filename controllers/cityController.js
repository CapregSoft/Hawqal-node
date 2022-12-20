const { where } = require('sequelize');
const country = require('../models/country');
const model = require('./../models');
const asyncAwait = require('./../utils/catchAsync');
const {Op} = model.Sequelize;

const cityModel = model.city;
const stateModel = model.state;

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

//states getAllBy State Name
const getCitiesByStateName = async(name, countryName = null) =>{
   try{
      let condition = { name:{[Op.like]: name}};
      if(countryName !== null)
         condition.country_name = {[Op.like]: countryName}
      const cities =await stateModel.findAll({
         where:condition,
         include: cityModel,
      });
      if(cities.length>0){
         let Getcities =[]; 
         cities.map(el => {
            for (let city of el.dataValues.cities) {
               Getcities.push(city.name);
            }
         });
         return Getcities;
      }else
         return 'No Cities!!!'

   }catch(error){
      return 'Internal Server Error!!!';
   }

}

module.exports = {
   getAllCitiesByCountryName,
   getCitiesByStateName
}
