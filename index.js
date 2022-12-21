const {getAllCountries} = require('./controllers/countryController');
const {getAllStatesByCountryName}   = require('./controllers/stateController');
const {getCitiesByStateName,getAllCitiesByCountryName}    = require('./controllers/cityController');

module.exports = {
    getAllCountries,
    getAllStatesByCountryName,
    getAllCitiesByCountryName,
    getCitiesByStateName,
}