const model = require('./../models');
const errorApp = require('./../utils/appError');
const catchAsync = require('./../utils/catchAsync');
const {stateFilter} = require('./../models/filters');
const {filterFields,capitalizeString} = require('./../utils/filteration');

const stateModel = model.state;

/**
 * 
 * Asynchronously retrieves a state from the database based on the specified state name and filters.
 * @param {string} state - The name of the state to retrieve.
 * @param {Object} [filter=stateFilter] - An object containing field names to include in the result.
 * @returns {(Object[]|string)} An array of state objects, or a string indicating that no state was found or that an error occurred.
 * 
 */

const getState = async(state,filter = stateFilter) =>{
   try {
      //if state name is set then return msg and if state name is set then save it in capitalization
      if(!state) return 'state must be set';
      state = capitalizeString(state) || null
      //search query for searching city name and set attributes from filter
      let searchQuery = {
         where:{state_name:state},
         attributes: filterFields(filter,'state')
      }
      //get states from model by passing search query object
      const states = await stateModel.findAll(searchQuery);
      //if there any state matches then return or return error msg 
      return states.length > 0 ? states.map(el => el.dataValues) : 'no state found'

   } catch (error) {
      
   }
}

/**
 * 
 * Asynchronously retrieves a list of states from the database based on the specified country name and filters.
 * If no country name is provided, all states will be retrieved.
 * @param {string} [country=''] - The name of the country to filter the states by.
 * @param {Object} [filter=stateFilter] - An object containing field names to include in the result.
 * @returns {(Object[]|string)} An array of state objects, or a string indicating that no states were found or that an error occurred.
 * 
 */

const getStates =  async(country = '',filter = stateFilter)=>{
   try{
      //if country is provided then capitalize it or set it null
      country = capitalizeString(country) || null;
      //search query for searching by country if country is not null
      let searchQuery = {};
      country !== null ? searchQuery={where:{country_name: country}} : ''
      //set attributes if there filters are provided
      searchQuery['attributes'] =  filterFields(filter,'state');
      //seach from model by search query
      const getstates = await stateModel.findAll(searchQuery);
      //return list of states if there is any thing in 
      return getstates.length> 0 ?  getstates.map(el => el.dataValues) :  'no states found'
      
   }catch(error){
      return error
   }    
};

module.exports = {
   getState,
   getStates,
}