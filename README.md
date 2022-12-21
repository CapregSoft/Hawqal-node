
![](https://img.shields.io/node/v/@capregsoft/hawqal?style=for-the-badge)

# Hawqal

This package that contains the data of world's countries,states and their cities name

## Functionalities

- Get All Countries
- Get State By Country 
- Get Cities By Country
- Get Cities By State 

## Installation
```
npm i @capregsoft/hawqal
```
## Usage/Examples

- ### All Countries
```node
const worldData = require('@capregsoft/hawqal')
const getCountries = async () =>{
    console.log(await hawqal.getAllCountries());
}
getCountries();
```
``
Use Asyc and await to get meaningful response
``

## Success Response

- {
  data: [
    { country_id: 1, country_name: 'Afghanistan' },
    { country_id: 2, country_name: 'Aland Islands' },
    { country_id: 3, country_name: 'Albania' },
    { country_id: 4, country_name: 'Algeria' },
    { country_id: 5, country_name: 'American Samoa' },
    { country_id: 6, country_name: 'Andorra' },
    { country_id: 7, country_name: 'Angola' }.....

## Error Response

- {
    data:[]
}
------------------------------------------------------------------------------------------
- ### States By Country Name
```node
const worldData = require('@capregsoft/hawqal')
const getStates = async () =>{
    console.log(await worldData.getAllStatesByCountryName('pakistan'));
}
getStates();
```
``
Use Asyc and await to get meaningful response
``

## Success Response

- {
  data: [
    {
      state_id: 3172,
      name: 'Azad Kashmir',
      country_id: 167,
      country_name: 'Pakistan'
    },
    {
      state_id: 3174,
      name: 'Balochistan',
      country_id: 167,
      country_name: 'Pakistan'
    },...

## Error Response

- {
    data: No States
    }
- {
    INTERNAL SERVER ERROR!!!
    }
------------------------------------------------------------------------------------------
- ### Cities By State Name & Cities by Country Name Only
```node
const worldData = require('@capregsoft/hawqal')
const getCities = async () =>{
    console.log(await worldData.getCitiesByStateName('punjab'));
}

const getCitiesByCountryName = async (countryName) =>{
    console.log(await worldData.getAllCitiesByCountryName(countryName));
}
getCities();
getCitiesByCountryName('finland')
```
``
Use Asyc and await to get meaningful response
``

## Success Response

- {
  data: [
    'Abohar',          'Adampur',      'Ajitgarh',
    'Ajnala',          'Akalgarh',     'Alawalpur',
    'Amloh',           'Amritsar',     'Anandpur Sahib',
    'Badhni Kalan',    'Bakloh',       'Banga',,...

## Error Response

- {
    data: No Cities
    }
- {
    INTERNAL SERVER ERROR!!!
    }

## Tech Stack

**Client:** Node 16.x


## Authors

- [Capregsoft](https://www.github.com/capregsoft)
- [Ihtisham Bashir](https://www.github.com/ihtisham007)

