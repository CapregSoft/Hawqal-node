const {getAllCountries,getCountryByName} = require('./controllers/countryController');
const {getAllStates,getAllStatesByCountryName}   = require('./controllers/stateController');
const {getCitiesByStateName,getAllCitiesByCountryName}    = require('./controllers/cityController');

module.exports = {
    getAllCountries,
    getAllStatesByCountryName,
    getAllCitiesByCountryName,
    getCitiesByStateName,
}