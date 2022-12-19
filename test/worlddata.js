const expect = require("chai").expect;
const countryController = require('./../controllers/countryController');
const stateController   = require('./../controllers/stateController');
const cityController    = require('./../controllers/cityController');

//Test Cases for Country Controller
describe('Country Controller Test', ()=>{

    it('should find all countries', async() => {
        const getData = await countryController.getAllCountries();
        expect(getData.data).to.be.a('array');
        expect(getData.data.length).to.be.greaterThan(0);
      });
    
    it('Should get data if some argument pass to it', async()=>{
        const getData = await countryController.getAllCountries('qwe');
        expect(getData.data).to.be.a('array');
        expect(getData.data.length).to.be.greaterThan(0);
    })
    
      it('(Country By Name) Should find countryController By NAME', async ()=>{
        const countryData = await countryController.getCountryByName('Pakistan')
        expect(countryData.data).to.be.a('object');
      })
    
      it('(Country By Name) Should Get No Found  (on Wrong or may parameter less)', async ()=>{
        const selectedCountry = await countryController.getCountryByName(123);
        expect(selectedCountry.data).to.be.a('string');
        expect(selectedCountry.data).equal('No Countries')
      })
});
//Test Cases for States Controler
describe('State Controller Test', ()=>{
    it('Retrieve all States', async() => {
        const states = await stateController.getAllStates();
        expect(states.data).to.be.a('array')
    });
    
    it('Should get data if some argument pass to it', async()=>{
        const getData = await stateController.getAllStates('Pakistan')
        expect(getData.data).to.be.a('array')
    })
    
    it('(State By Country Name) Should find States By NAME', async ()=>{
        const stateData = await stateController.getAllStatesByCountryName('Pakistan')
        expect(stateData.data).to.be.a('array')
        expect(stateData.data.length).to.be.equal(8)
    })
    
    it('(States By Name) Should Get No Found  (on Wrong or may parameter less)', async ()=>{
        const selectedSates= await stateController.getAllStatesByCountryName();
        expect(selectedSates.data).to.be.a('array');
        expect(selectedSates.data.length).to.be.equal(0);
    })
});

//Test Cases for City Controler
describe('City Controller Test', ()=>{
    it('parameter less Should return No cities in msg', async() => {
        const getData = await cityController.getAllCitiesByCountryName()
        expect(getData).to.be.a('object');
        expect(getData.data).equal('No Cities');
    });

    it('Should return all cities from passing an country name', async() => {
        const getData = await cityController.getAllCitiesByCountryName('pakistan');
        expect(getData.data).to.be.a('array');
        expect(getData.data.length).to.be.greaterThan(0)
    });
    
    it('(Cities By State ID) Should find Cities By ID', async ()=>{
        const cityData = await cityController.getAllCitiesByStateID(1)
        expect(cityData.data).to.be.a('array')
        expect(cityData.data.length).to.be.greaterThan(0);
    })
    
    it('(Cities By State ID) Should Get No Found  (on Wrong or may parameter less)', async ()=>{
        const selectedCityies= await cityController.getAllCitiesByStateID();
        expect(selectedCityies).to.be.a('object')
        expect(selectedCityies.data).to.be.equal('No Cities');
    })  
});


