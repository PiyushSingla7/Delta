let args = process.argv;
for (let i = 0; i < args.length; i++) {
  console.log(args[i]);
}

let math = require("./math");
console.log(math.sum(3, 4));
console.log(math.PI);

let banana=require("./Fruits/banana");
let mango=require("./Fruits/mango");
let apple=require("./Fruits/apple");

console.log(banana);
console.log(apple);
console.log(mango);