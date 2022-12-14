const model = require('./../models');
const asyncAwait = require('./../utils/catchAsync');

const cityModel = model.city;

//Get all Cities 
const getAllCities = asyncAwait(async (next)=>{
    const getAll = await cityModel.findAll();
    if(getAll)
     {
        const getSelected = getAll.map(all => all.dataValues);
        console.log(getSelected);
     }   
     else
        console.log('No states')
})

//Get States By Country Name
const getAllCitiesByStateID = asyncAwait(async (stateID,next)=>{
    const getAll = await cityModel.findAll({where: {state_id: stateID}});
    if(getAll)
     {
        const getSelected = getAll.map(all => all.dataValues);
        console.log(getSelected);
     }   
     else
        console.log('No states')
})
