const model = require('./../models');
const {Op}  = model.Sequelize;
const stateModel = model.state;

//Get all States 
const getStates = async (country = '')=>{
   try{
      country = country || null
      console.log(country);
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
      const getAll = await stateModel.findAll(quries);
      let getStates = [];
      for(let i=0;i<getAll.length;i++)getStates.push(getAll[i].dataValues.name)
      return getStates;
   }catch(error){
      return 'Db connection Error!!!';
   }    
}

module.exports = {
   getStates
}