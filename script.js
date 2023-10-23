const fs = require("fs");
fs.writeFileSync("bio.txt","test from thapa technical ");
fs.appendFileSync("bio.txt","this is in video 6");
const readed = fs.readFileSync("bio.txt");
console.log(readed.toString());
fs.renameSync("bio.txt","mybio.txt");