const http = require('http'); //Common JS Module pattern (CJS). first line whenever want to use node.js; 
const fs = require('fs');

const server = http.createServer(function(req,res){
    console.log(__dirname);
});