/*
setTimeout
fs.readfile.
fetch.
*/

const fs = require("fs");
// File system

fs.readFile("a.txt", "utf-8", function(err, data){
    console.log(data);
})