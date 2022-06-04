
// require built-in modules
const http = require('http'); //Common JS Module pattern (CJS). first line whenever want to use node.js; 
const fs = require('fs');

const port = 3000;

// when we creat a server instance, it is IMMUTABLE = cannot be change (every time the node server.js is running the server will be create,
// so if we want to change something and the see the change, we need to restart the server to see the change)
const server = http.createServer(function(req,res){
    // console.log(__dirname); for test.
    fs.readFile(__dirname + req.url, function(err,data){  //my dirname + request url. the function converse the url files to data, then return the data to res.end(data)
        if(err){
            res.writeHead(404); // response 404 status - file not found
            console.log(`ERROR:${err.message}`); // output the error message to dev console
            // return here is to stop the code running, otherwise it will display console.log(data)'s message, too 
            // (the return here is kind of like a break). or use if else  
            return res.end(err.message); // output the error message to the page 
        }

        // else no error
        res.writeHead(200); // response 200 status - all ok
        
        return res.end(data); // output the data (output the file that was read to page). the data comes from my dirname + request url. for example,index.html. 
        
    });
});

server.listen(port,function(){
    console.log(`Server running at Port:${port}`);
})
