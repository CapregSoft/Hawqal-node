const {getAllCountries,getCountryByName} = require('./controllers/countryController');
const {getAllStates,getAllStatesByCountryName}   = require('./controllers/stateController');
const {getAllCitiesByStateID,getAllCitiesByCountryName}    = require('./controllers/cityController');

module.exports = {
    getAllCountries,
    getCountryByName,
    getAllStates,
    getAllStatesByCountryName,
    getAllCitiesByStateID,
    getAllCitiesByCountryName
}