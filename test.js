const index = require('./index');

const allData = async() =>{
  const data = await index.getAllCitiesByStateID(3175,1);
  console.log(data.data);
}
allData();