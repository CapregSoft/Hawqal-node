const model = require('./../models');
const  {countryFilter} = require('./../models/filters');
const {filterFields,capitalizeString} = require('./../utils/filteration');

const countryModel = model.country;

/**
 * Asynchronously retrieves a country from the database based on the specified country name and filters.
 * @param {string} country - The name of the country to retrieve.
 * @param {Object} [filter=countryFilter] - An object containing field names to include in the result.
 * @returns {(Object[]|string)} An array of country objects, or a string indicating that no country was found or that an error occurred.
 */

const getCountry = async(country,filter=countryFilter) =>{
    try {
        //if country not define then return msg 
        if(!country) return 'country name must be define'
        //if country is define capitalize it or set null
        country = capitalizeString(country) || null
        //search query set where condition and attributes
        const searchQuery = {
            where:{country_name: country},
            attributes: filterFields(filter,'country')
        }
        //get country from country model by searchquery
        const getCountry = await countryModel.findAll(searchQuery);

        return getCountry.length>0 ? getCountry.map(country => country.dataValues) : 'no country found'

    } catch (error) {
        return error
    }
}

/**
 * Asynchronously retrieves a list of countries from the database, filtered by the specified fields.
 * @param {Object} [filter=countryFilter] - An object containing field names to include in the result.
 * @returns {(Object[]|string)} An array of country objects, or an empty string if no countries were found or if an error occurred.
 */

const getCountries = async(filter = countryFilter) =>{
    try{
       //set only atttributes fields for countries as provided in filter 
       const searchQuery ={
            attributes: filterFields(filter,'country')
       } 
       //get countries from country model 
       const getCountries = await countryModel.findAll(searchQuery);

       return getCountries.length >0 ? getCountries.map(country => country.dataValues) : ''
       
    }catch(error){
        return error
    }
}

module.exports = {
    getCountry,
    getCountries
}