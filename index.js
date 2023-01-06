const {getCountry,getCountries} = require('./controllers/countryController');
const {getState,getStates}   = require('./controllers/stateController');
const {getCity,getCities}    = require('./controllers/cityController');

module.exports = {
    getCountry,
    getCountries,
    getState,
    getStates,
    getCity,
    getCities
}