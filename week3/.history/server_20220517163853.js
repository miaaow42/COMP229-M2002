
// require built-in modules
const http = require('http'); //Common JS Module pattern (CJS). first line whenever want to use node.js; 
const fs = require('fs');

const port = 3000;
const server = http.createServer(function(req,res){
    // console.log(__dirname); for test.
    fs.readFile(__dirname + req.url, function(err,data){
        if(err){
            res.writeHead(404); // response 404 status - file not found
            res.end(err.message); // output the error message to the page
        }
        res.writeHead(200); // response 200 status - all ok
        res.end(data); // output the data. the data comes from my dirname request url. for example,index.html. 
    });
});

server.listen(port,function(){
    console.log(`Server running at Port:${port}`);
})
