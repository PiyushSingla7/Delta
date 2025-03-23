// array declaration and initialization
let details = ["Piyush", 19, 92, false];
console.log(details);

// object declaration and initialization method 1
let obj = {
  name: "Piyush",
  age: 19,
  grade: 92,
  isPassed: false,
  "isplaced": true,
  'isstudying': false,
};
console.log(obj); // printing method 1
console.log(obj.name); // printing method 2
console.log(obj["name"]); // printing method 3
console.log(obj['age']); // printing method 4
console.log(obj['isplaced']); 

// object declaration and initialization method 2
let obj2 = new Object();
obj2.name = "Raghav";
obj2.age = 20;
obj2.grade = 82;
obj2.isPassed = false;
console.log(obj2);

// printing using forin loop method 1
for (let key in obj) {
  console.log(key, obj[key]);
}
