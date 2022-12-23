const {getCountries} = require('./controllers/countryController');
const {getStates}   = require('./controllers/stateController');
const {getCities}    = require('./controllers/cityController');

module.exports = {
    getCountries,
    getStates,
    getCities
}