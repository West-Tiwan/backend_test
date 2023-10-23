const fs = require("fs");
fs.writeFileSync("bio.txt","test from thapa technical ");
fs.appendFileSync("bio.txt","this is in video 6");
const readed = fs.readFile("bio.txt","UTF-8",(err,data)=>{
    console.log(data);
});
fs.renameSync("bio.txt","mybio.txt");
fs.rmSync("mybio.txt");