const worldData = require('./index');

const getAllCities = async() =>{
    const getAll = await worldData.getAllCitiesByCountryName();
    // /const getAll = await worldData.getAllCitiesByCountryName()
    console.log(getAll)
}
getAllCities();

