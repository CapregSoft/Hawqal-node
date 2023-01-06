
//city filter 
const cityFilter = {
    city_id: true,

    city_name:true,

    state_name:true,

    state_id:true,

    country_name:true,

    latitude:true,

    longitude:true

}
//state filter
const stateFilter = {
    state_id:true,

    state_name:true,

    country_name:true,

    latitude:true,

    longitude:true
}
//country filter
const countryFilter = {

    country_name:true,

    iso_code:true,

    phone_code:true,

    capital:true,

    currency:true,

    currency_name:true,

    currency_symbol:true,

    country_domain:true,

    region:true,

    subregion:true,

    timezone:true,

    zone_city:true,

    UTC:true,

    latitude:true,

    longitude:true
}


module.exports = {
    cityFilter,
    stateFilter,
    countryFilter
}

