const fs = require("fs");
fs.writeFileSync("shreya/bio.txt","my name is shreya jain");
const data = fs.readFileSync("shreya/bio.txt","utf8");
console.log(data);
fs.renameSync("shreya/bio.txt","shreya/mybio.txt");
fs.unlinkSync("shreya/mybio.txt");
fs.rmdirSync("shreya");
