const {getAllCountries,getContryByName} = require('./controllers/countryController');
const {getAllStates,getAllStatesByCountryName}   = require('./controllers/stateController');
const {getAllCities,getAllCitiesByStateID}    = require('./controllers/cityController');

module.exports = {
    getAllCountries,
    getContryByName,
    getAllStates,
    getAllStatesByCountryName,
    getAllCities,
    getAllCitiesByStateID
}