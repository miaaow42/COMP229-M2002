const http = require('http'); //Common JS Module pattern (CJS). first line whenever want to use node.js; 
const fs = require('fs');

const port = 3000;
const server = http.createServer(function(req,res){
    console.log(__dirname);
});

server.listen(port,function(){
    console.log(`Server running at Port:${port}`);
})
