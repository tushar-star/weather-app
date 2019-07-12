#!/usr/bin/env node
module.exports=async function helper(){
var json = require("./../package.json");
console.log(`v${json.version}`);
};
