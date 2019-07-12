const axios = require('axios');
module.exports = async function location() {
    try{
    const response = await axios.get('http://ip-api.com/json/');
    return response["data"]["city"];
}catch(err){
    console.log(err);
    }
};

