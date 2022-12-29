const model = require('./../models');
const {Op} = model.Sequelize;
const countryModel = model.country;

//Get countries
const getCountries = async(name = '',filters ={coordinates: false,region:false,currency:false,timezone:false,capital:false}) =>{
    try{
        let search = {}
        name = name || null
        if(typeof name === 'object'){
            filters = name
            name = '';
            name = name || null
            
        }
        name !== null ? search = {where:{country_name: {[Op.like]: name}}} : ''

        if(filters !== null){
            const getFields =  filterFields(filters);
            getFields.length > 0 ? search['attributes'] = getFields : '';
        }

        const country = await countryModel.findAll(search)

        let getCountries = [];
        for(let i=0;i<country.length;+i++)getCountries.push(country[i].dataValues);
        getCountries.length === 0 ? getCountries.push('No Countries'): ''

        return getCountries;
    }catch(error){
        return 'Db connection Error!!!'
    }
}


//Filter Fields
const filterFields = (filters)=>{
    let keyArrtibutes = {coordinates: ['latitude','longitude'],region:['region','subregion'],currency:['currency','currency_symbol','currency_name'],timezone:['timezone','zone_city','UTC'],capital:['country_name','country_domain','phone_code','iso_code']}
    let concludeArray = []
    for (let [key, value] of Object.entries(filters)) {
    if(value && key in keyArrtibutes)
        concludeArray= concludeArray.concat(keyArrtibutes[key])
        
    }
    return concludeArray;
}
module.exports = {
    getCountries
}
