const axios = require("axios");
const getLocation = require("./location");
module.exports = async function weather(city){
    try{
    var location =city;
    var response = await axios.get(
        `https://www.metaweather.com/api/location/search/?query=${location}`
    );
    var respdata = response["data"];
    var woeid = respdata[0]["woeid"];
    var weatherresp = await axios.get(
        `https://www.metaweather.com/api/location/${woeid}`
    );    
    var weather = weatherresp["data"];
    //console.log(weather);
    var weatherarr = weather["consolidated_weather"];
    //console.log(weatherarr);
            
    return weatherarr;    
}catch(err){
    console.log(err)
}
}
//helper();
