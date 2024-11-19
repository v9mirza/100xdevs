
// function sum(a,b){
//     return a+b;
// }
// let ans = sum(68,1)
// console.log(ans);

 
// function sum(n) {
//     let ans = 0;
//     for (let i = 0; i <= n; i++) {
//         ans += i;
//     }
//     return ans;
// }

// let ans = sum(10);
// console.log(ans);


// /*Synchronously */
let fs = require("fs");

let data = fs.readFileSync("a.txt", "utf-8"); 
console.log(data);

let data2 = fs.readFileSync("b.txt", "utf-8") 
console.log(data2);




// Asynchronous
function print(error, data){
    console.log(data);
} 
let fs = require("fs");

fs.readFile("a.txt", "utf-8", print); 

fs.readFile("b.txt", "utf-8", print);

console.log("Done");


// //  Functional Argument
// function sum(a,b){
//     return a+b;
// }
// console.log(sum(68,1));

// function doOperation(a,b,op){
//     return op(a,b);
// }
// console.log(doOperation(68,1,sum));
