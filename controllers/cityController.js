const model = require('./../models');
const {Op} = model.Sequelize;

const cityModel = model.city;
const stateModel = model.state;


//states getAllBy State Name
const getCities = async(country = '',state = '') =>{
   try{
      state = state || null;
      country = country || null;
      let quries = {}
      if(state !== null || country !== null){
         if(state !== null && country !== null){
               quries = {
                     name:{[Op.like]: state},
                     country_name:{[Op.like]: country} 
            }
         }  
         else if(state !== null ){
            quries = {
               name:{[Op.like]: state},
            }
         }
         else{
            quries = {
               country_name:{[Op.like]: country} 
            }
         }
         
      }
      const cities =await stateModel.findAll({
         where:quries,
         include: cityModel,
      });
      if(cities.length>0){
         let Getcities =[]; 
         cities.map(el => {
            for (let city of el.dataValues.cities) {
               Getcities.push(city.name);
            }
         });
         return Getcities
         
      }else
         return 'No Cities!!!'

   }catch(error){
      return 'Db connection Error!!!';
   }

}

module.exports = {
   getCities
}
