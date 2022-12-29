const index = require('./index');

const filter = {
    coordinates: true
}
const getAll = async() => console.log(await index.getStates('pakistan',filter));

getAll();
