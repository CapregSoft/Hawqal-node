const model = require('./../models');
const  {cityFilter} = require('./../models/filters');
const {filterFields,capitalizeString} = require('./../utils/filteration');

const {Op} = model.Sequelize;
const cityModel = model.city;

/**
 * Retrieves a city from the database given the city name and an optional filter.
 * 
 * @param {string} city - The name of the city to retrieve.
 * @param {Object} [filter] - An optional filter to apply to the search.
 * @returns {Array|string} - An array of city objects if a city is found, or a string message if no city is found or an error occurs.
 * 
 */

const getCity = async(city, filter = cityFilter) => {
   try {
      //check if city is define then capitalize, or return mesage 'city name must be set'
      if(!city)  return 'city Must be set'
      city = capitalizeString(city) || null
      //search query for searching city from city and set attributes from filter
      let searchQuery = {
         where:{city_name: city},
         attributes: filterFields(filter,'city')
      }
      //get city from cities model
      const getCity = await cityModel.findAll(searchQuery)

      if(getCity.length>0) return getCity.map(el => el.dataValues);else return 'no city found!!!'

   } catch (error) {
      return error
   }
  
}

/**
 * 
 * Retrieves cities from a database based on provided search criteria.
 * @param {string} country - An optional The name of the country to search for. If an empty string is provided, it will be treated as null.
 * @param {string} state - An optional The name of the state to search for. If an empty string is provided, it will be treated as null.
 * @param {object} filter - An optional An object that specifies which fields should be included in the results. If not provided, a default set of fields will be used.
 * @returns {Array|string} - An array of city objects, or a string indicating that no cities were found.
 * 
 */
const getCities = async(country = '',state = '',filter = cityFilter) =>{
   try{
      // Create a search query object based on the provided country and state names
      let searchingQueries = createSearchingQuery(country,state);
      // Add the field filter to the search query
      searchingQueries['attributes'] =filterFields(filter,'city');
      // Retrieve the cities from the database
      const cities = await cityModel.findAll(searchingQueries);
      // Return the array of city objects, or a message indicating that no cities were found
      if(cities.length>0) return cities.map(el => el.dataValues);else return 'No Cities!!!'

   }catch(error){
      return error;
   }

}

//create search query for country or state if these are set
const createSearchingQuery = (country,state)=>{
   country = capitalizeString(country) || null;
   state   = capitalizeString(state)   || null
   let searchQuries = {}
   //get cities by country name and state name 
   if(country !== null || state !== null){
      //if country and state are provieded then and will apply, or for one of them is provided
      country !== null && state !== null ? 
      searchQuries = {where: {[Op.and] : [{country_name: country},{state_name: state}]}} : 
      searchQuries = {where: {[Op.or] : [{country_name: country},{state_name: state}]}}

   }
   return searchQuries;
}

module.exports = {
   getCities,
   getCity
}
