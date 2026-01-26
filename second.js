// const muliii = require("./first");
const {multiply,divide} = require("./first");  

console.log("second file using require('fileName')");

// 1 : example
// muliii(2,4); // not work so add this  module.exports = multiply; to remove it from PRIVATE 

// 2 example
multiply(2,4);
divide(2,3);

// Ques 1. what if i call function from another file
// Ans: so by default sare vailables PRIVATE bn jate he
// second thing jb hm 