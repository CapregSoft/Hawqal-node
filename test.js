const index = require('./index');

const getAll = async() => console.log(await index.getCountries());

getAll();