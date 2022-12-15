const expect = require("chai").expect;
const assert = require('assert');
const countryController = require('./../controllers/countryController');
const stateController   = require('./../controllers/stateController');
const cityController    = require('./../controllers/cityController');
const { count } = require("console");

//Test Cases for Country Controller
describe('Country Controller Test', ()=>{

    it('should find all countries', async() => {
        const getData = await countryController.getAllCountries();
        assert.notEqual(getData.data,null)
        assert.equal(getData.data.length,250);
        // return User.findOne({ where: { username: 'johndoe' } }).then(user => {
        //   assert.equal(user.username, 'johndoe');
        // });
      });
    
    it('Should get data if some argument pass to it', async()=>{
        const getData = await countryController.getAllCountries('qwe');
        const length = getData.data.length;
        assert.equal(length,250)
    })
    
      it('(Country By Name) Should find countryController By NAME', async ()=>{
        const countryData = await countryController.getContryByName('Pakistan')
        assert.equal(countryData.data.country_id,167)
      })
    
      it('(Country By Name) Should Get No Found  (on Wrong or may parameter less)', async ()=>{
        const selectedCountry = await countryController.getContryByName(123);
        assert.equal(selectedCountry.data,'No Countries')
      })
});
//Test Cases for States Controler
describe('State Controller Test', ()=>{
    it('should find all States', async() => {
        const getData = await stateController.getAllStates();
        assert.notEqual(getData.data,null)
    });
    
    it('Should get data if some argument pass to it', async()=>{
        const getData = await stateController.getAllStates('Pakistan')
        assert.notEqual(getData.data,'No States')
    })
    
    it('(State By Country Name) Should find States By NAME', async ()=>{
        const countryData = await stateController.getAllStatesByCountryName('Pakistan')
        let count =0;
        countryData.data.length> 0 ? count = countryData.data.length : count = -1
        assert.equal(countryData.data.length,count)
    })
    
    it('(States By Name) Should Get No Found  (on Wrong or may parameter less)', async ()=>{
        const selectedSates= await stateController.getAllStatesByCountryName();
        assert.equal(selectedSates.data.length,0)
    })
});

//Test Cases for City Controler
describe('City Controller Test', ()=>{
    // it('should find all Cities', async() => {
    //     const getData = await cityController.getAllCities();
    // });
    
    it('(Cities By State ID) Should find Cities By ID', async ()=>{
        const cityData = await cityController.getAllCitiesByStateID(1)
        let count =0;
        cityData.data.length> 0 ? count = cityData.data.length : count = 0
        assert.equal(cityData.data.length,33)
    })
    
    it('(Cities By State ID) Should Get No Found  (on Wrong or may parameter less)', async ()=>{
        const selectedCityies= await cityController.getAllCitiesByStateID();
        assert.equal(selectedCityies.data.length,0)
    })
});


