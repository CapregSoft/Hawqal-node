const index =require('./index');

const getAll = async() =>{
    const data = await index.getCitiesByStateName('punjab');
}