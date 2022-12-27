
![](https://img.shields.io/node/v/@capregsoft/hawqal?style=for-the-badge)
![npm version](https://img.shields.io/npm/v/@capregsoft/hawqal?style=for-the-badge)
# Hawqal

This package that contains the data of world's countries,states and their cities name

## Functionalities

- Get Countries
- Get States 
- Get Cities

## Installation
```
npm i @capregsoft/hawqal
```
## Usage/Examples
``
Use Asyc and await to get meaningful response
``
- ### Get Countries
```Countries
const worldData = require('@capregsoft/hawqal')
const getData = async () =>{
    console.log(await worldData.getCountries());
}
getData();
```
- ### States By Country Name

```States
const worldData = require('@capregsoft/hawqal')
const getStates = async () =>{
    console.log(await await index.getStates('pakistan'));
}
getStates();
```

- ### Cities
```Cities
const worldData = require('@capregsoft/hawqal')
const getCities = async () =>{
     //get all cities
    console.log(await await index.getCities());
    //get state cities
    console.log(await await index.getCities('','punjab'));
    //get country cities
    console.log(await await index.getCities('pakistan'));
    //get country,state cities
    console.log(await await index.getCities('pakistan','punjab'));
}
getCities();
```


## Success Response
```
Get Countries
 [
  'Afghanistan',
  'Aland Islands',
  'Albania',
  'Algeria',
  'American Samoa',
  'Andorra',
  'Angola',
  'Anguilla',...
]
Get States
[
  'Azad Kashmir',
  'Balochistan',
  'Federally Administered Tribal Areas',
  'Gilgit-Baltistan',
  'Islamabad Capital Territory',
  'Khyber Pakhtunkhwa',
  'Punjab',
  'Sindh'
]
Get Cities By States and Countries
[
  'Fatehgarh Sahib', 'Firozpur',     'Firozpur District',
  'Fazilka',         'Gardhiwala',   'Garhshankar',
  'Ghanaur',         'Giddarbaha',   'Gurdaspur',
  'Guru Har Sahai',  'Hariana',      'Hoshiarpur',
  'Hajipur',         'Jagraon',      'Jaito',
]
```
## Error Response

- []
- Db connection Error!!!

## Tech Stack

**Client:** Node 16.x


## Authors

- [Capregsoft](https://www.github.com/capregsoft)
- [Ihtisham Bashir](https://www.github.com/ihtisham007)

