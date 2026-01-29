const fs = require("fs")

let a = 10;
let b = "Hii hii Hello..."

console.log(a);

function divide(a,b){
    return a/b;
}

// const data = fs.readFileSync("./data.json","utf-8");
// console.log(data);

fs.readFile("./data.json","utf-8",(err,res)=>{
    console.log(res);  // undefined is printing but data.json file data should print 
})

setTimeout(()=>{
   console.log("Hello Time Out");
},3000);

console.log(b);
console.log(divide(2,1));
