const expect = require("chai").expect;
const countryController = require('./../controllers/countryController');
const stateController   = require('./../controllers/stateController');
const cityController    = require('./../controllers/cityController');

describe('Country )', async()=>{
    it('if fail connection return Connection Error or Successful on pass', async()=>{
        const getMessage = await countryController.getAllCountries();
        if(typeof(getMessage) === 'string'){
            expect(getMessage).to.be.a('string');
            expect(getMessage).equal('Internal Server Error!!!');
        }else{
            expect(getMessage.data).to.be.a('array');
        }
    });
});
