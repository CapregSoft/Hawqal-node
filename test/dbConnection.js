const expect = require("chai").expect;
const countryController = require('./../controllers/countryController');
const stateController   = require('./../controllers/stateController');
const cityController    = require('./../controllers/cityController');

describe('Country )', async()=>{
    it('if fail connection return Strong (INTERNAL SERVER ERROR!!!', async()=>{
        const getString = await countryController.getAllCountries();
        expect(getString).to.be.a('string');
        expect(getString).equal('Internal Server Error!!!');
    });
});

describe('State', async()=>{
    it('if fail connection return Strong (INTERNAL SERVER ERROR!!!', async()=>{
        const getString = await stateController.getAllStates();
        expect(getString).to.be.a('string');
        expect(getString).to.be.equal('Internal Server Error!!!');
    });
});

describe('City', async()=>{
    it('if fail connection return Strong (INTERNAL SERVER ERROR!!!', async()=>{
        const getString = await cityController.getAllCities();
        expect(getString).to.be.a('string');
        expect(getString).to.be.equal('Internal Server Error!!!');
    });
});
