#!/usr/bin/env node
const ora = require("ora");
//const axios = require("axios");
const getLocation = require("./../utilis/location")
const getWeather = require("./../utilis/weather");
module.exports = async function helper(miniargs){
    try{
    var spinner= ora(" loading weather");
    spinner.start();
    const city  = miniargs.location||miniargs.l||await getLocation();
    const response = await getWeather(city);
    spinner.stop();
    var temp = Math.ceil(response[0]["the_temp"]);
    var conditions = response[0]["weather_state_name"];
    console.log(`Current conditions in ${city}`);
    console.log(`${temp} ${conditions}`);
    }catch(err){
        console.log(err);
    }

}
// helper();
