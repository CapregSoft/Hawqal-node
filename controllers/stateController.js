const model = require('./../models');
const asyncAwait = require('./../utils/catchAsync');

const stateModel = model.state;

//Get all States 
const getAllStates = asyncAwait(async (next)=>{
    const getAll = await stateModel.findAll();
    if(getAll)
     {
        const getSelected = getAll.map(all => all.dataValues);
        console.log(getSelected);
     }   
     else
        console.log('No states')
})

//Get States By Country Name
const getAllStatesByCountryName = asyncAwait(async (countryName,next)=>{
    const getAll = await stateModel.findAll({where: {country_name: countryName}});
    if(getAll)
     {
        const getSelected = getAll.map(all => all.dataValues);
        console.log(getSelected);
     }   
     else
        console.log('No states')
})

getAllStatesByCountryName('India');