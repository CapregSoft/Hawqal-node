const model = require('./../models');
const {Op} = model.Sequelize;

const cityModel = model.city;


//states getAllBy State Name
const getCities = async(country = '',state = '',filter = {coordinates: false,country:false,state:false}) =>{
   try{
      if(typeof country === typeof {} || typeof state === typeof {}){
         if(typeof country === typeof {}){
            filter = country
            country = ''
         }
         if (typeof state === typeof {}){
            filter = state
            state = '';
         }
      }
      state = state || null;
      country = country || null;
      let quries = {}

      if(state !== null || country !== null){
         if(state !== null && country !== null){
               quries = {
                  where:{
                     state_name:{[Op.like]: state},
                     country_name:{[Op.like]: country} 
                  }
               }
         } 
         else{
            let search;
            country !== null ? search = country : search = state
            quries = {
               where: {
                  [Op.or] : [
                     {country_name:{[Op.like]: search}},
                     {state_name:{[Op.like]: search}}
                  ]
               }
            }
         } 
         
      }
      quries['attributes'] = ['city_name']
      if(country === null) quries['attributes'] = quries['attributes'].concat('country_name')
      if(state === null) quries['attributes'] = quries['attributes'].concat('state_name')

      const getFields =  filterFields(filter);
      getFields.length > 0 ? quries['attributes'] = quries['attributes'].concat(getFields) : '';

      const cities =await cityModel.findAll(quries);
      if(cities.length>0) return cities.map(el => el.dataValues);  
      else return 'No Cities!!!'

   }catch(error){
      return 'Db connection Error!!!';
   }

}

//Filter Fields of cities
const filterFields = (filters)=>{
   let keyArrtibutes = {coordinates: ['latitude','longitude'],state:['state_name'],country: ['country_name']}
   let concludeArray = []
   for (let [key, value] of Object.entries(filters)) {
   if(value && key in keyArrtibutes)
       concludeArray= concludeArray.concat(keyArrtibutes[key])  
   }
   return concludeArray;
}

module.exports = {
   getCities
}
