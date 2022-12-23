const expect = require("chai").expect;
const countryController = require('./../controllers/countryController');
const stateController   = require('./../controllers/stateController');
const cityController    = require('./../controllers/cityController');

//Test Cases for Country Controller
describe('Country Controller Test', ()=>{

    it('should find all countries', async() => {
        const getData = await countryController.getCountries();
        expect(getData).to.be.a('array');
        expect(getData.length).to.be.greaterThan(0);
      });
    
    it('Should get data if some argument pass to it', async()=>{
        const getData = await countryController.getCountries('asd');
        expect(getData).to.be.a('array');
        expect(getData.length).to.be.greaterThan(0);
    })
});
//Test Cases for States Controler
describe('State Controller Test', ()=>{
    it('Retrieve all States', async() => {
        const states = await stateController.getStates();
        expect(states).to.be.a('array')
    });
    
    it('Should get data if some argument pass to it', async()=>{
        const getData = await stateController.getStates('pakistan')
        expect(getData).to.be.a('array')
    })
});

//Test Cases for City Controler
describe('City Controller Test', ()=>{
    it('return cities of country', async() => {
        const getData = await cityController.getCities('pakistan')
        expect(getData.length).to.be.greaterThan(0);
    });
});


