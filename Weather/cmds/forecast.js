#!/usr/bin/env node
const ora = require("ora");
const axios = require("axios");
const getLocation = require("./../utilis/location")
const getWeather = require("./../utilis/weather");
module.exports = async function helper(miniargs){
    const city  = miniargs.location||miniargs.l||await getLocation();
    const arr = await getWeather(city);
    console.log(`forecast for ${city}:`);
    arr.forEach(short);    
}
// helper();
function short(todayWeather){
    try{
    var date = todayWeather["applicable_date"];
    var low = Math.ceil(todayWeather["min_temp"]);
    var high = Math.ceil(todayWeather["max_temp"]);
    var conditions = todayWeather["weather_state_name"];
    console.log(`\t${date} - Low: ${low} -high: ${high} ${conditions}`);
    }catch(err){
        console.log(err);
    }
}

