const http = require("http");
const url = require("url");
const fs = require("fs");
const server = http.createServer((req,res)=>{
    if(req.url=="/"){
        res.end("hello from /");
    }
    else if(req.url=="/about"){
        res.end("hello from /about");
    }
    else if(req.url=="/contact"){
        res.end("hello from /contact");
    }
    else if(req.url=="/api"){
        fs.readFile(`${__dirname}/user.json`,"utf-8",(err,data)=>{
            console.log(data);
        });
        res.end("hello from /api");
    }
    else{
        res.writeHead(404,{"Content-type":"text/html"})
        res.end("<h1>404 error page</h1>");
    }
});
server.listen(3000,"127.0.0.1",()=>{
    console.log("listening on port 3000");
});