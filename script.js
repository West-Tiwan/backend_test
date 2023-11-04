const http = require("http");
const fs = require("fs");
const server = http.createServer();
server.on('request', (req, res) => {
    fs.readFile('input.txt', function (err, data) {
        const rstream = fs.createReadStream("input.txt");
        rstream.pipe(res);
    })});
server.listen(3000, "127.0.0.1", () => {
    console.log("listening on port 3000");
});