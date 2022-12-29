const model = require('./../models');
const {Op}  = model.Sequelize;
const stateModel = model.state;

//Get all States 
const getStates = async (country = '',filter = {coordinates: false, country: false})=>{
   try{
      country = country || null
      let quries = {}; 
      if(country !== null){
            quries= {
               where: {
                  country_name: {
                     [Op.like]: country
               }
            }
         }
      }
      if(typeof country === 'object'){
         filter = country
         country = '';
         country = country || null
         
     }
      if(filter !== null){
         const getFields =  filterFields(filter);
         getFields.length > 0 ? quries['attributes'] = getFields : '';
      }
      const getAll = await stateModel.findAll(quries);
      let getStates = [];
      for(let i=0;i<getAll.length;i++)getStates.push(getAll[i].dataValues)
      return getStates;
   }catch(error){
      return 'Db connection Error!!!';
   }    
}

//Filter Fields
const filterFields = (filters)=>{
   let keyArrtibutes = {coordinates: ['latitude','longitude'],country: ['country_name']}
   let concludeArray = ['state_name']
   for (let [key, value] of Object.entries(filters)) {
   if(value && key in keyArrtibutes)
       concludeArray= concludeArray.concat(keyArrtibutes[key])
       
   }
   return concludeArray;
}

module.exports = {
   getStates
}