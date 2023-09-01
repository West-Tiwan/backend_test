const http = require("http");
http.createServer((req,res)=>{
    res.write("<h1>This is the test for backend</h1>");
    res.end();
}).listen("3000");