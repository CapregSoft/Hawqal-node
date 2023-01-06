//capitilize every first character of string
exports.capitalizeString = (string) => string.replace(/\b[a-z]/g, char => char.toUpperCase())

//Filters an object to only include certain fields.
exports.filterFields  = (filter,table) =>{

    let fields = getFieldsArrayOfTable(table);
    for(let [key,value] of Object.entries(filter)) {
        !value && fields.filter(el => el === key).length>0 ? 
        fields = fields.filter((fields) => fields !== key) : ''
    };
    return fields;
}

const getFieldsArrayOfTable = (tableName) =>{
    if(tableName === 'city')
        return ['city_id','city_name','state_id','state_name','country_name','latitude','longitude'];
    else if (tableName === 'state')
        return ['state_id','state_name','country_name','latitude','longitude'];
    else
        return ['country_name','iso_code','phone_code','capital','currency','currency_name','currency_symbol','country_domain','region','subregion','timezone','UTC','latitude','longitude']      
}