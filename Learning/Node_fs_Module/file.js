const fs = require('fs');
const os = require('os');


// == cerate and write in the file 

// fs.writeFileSync("./test.txt","Hello This is testing file",)
// fs.writeFile("./test.txt","Hello This is testing file for async",()=>{
// console.log("Done async")
// })


// == Read file  in the file 
// const res = fs.readFileSync("./test.txt","utf-8")
// console.log(res)
// fs.readFile("./test.txt","utf-8",(err,data)=>{
//     console.log(data)
// })


// == Append new content in the existing file 


// fs.appendFileSync("./test.txt","Hello Updated test")

// fs.renameSync("./test.txt","test2.txt")


// Blocking code
// const res = fs.readFileSync("./test.txt","utf-8");

// console.log(res)


// // Non blocking code
// fs.readFile("./test.txt","utf-8",(err, data)=>{
//     console.log(data)
// })


console.log(os.cpus().length)



