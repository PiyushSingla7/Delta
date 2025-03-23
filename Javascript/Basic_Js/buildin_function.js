// callback function ek aisa function hota hai jisme ki hum ek function ko argument ke roop me pass karte hai.
function product(a, b, c) {
  return a * b * c;
}

function fun(x, y) {
  return x - y;
}

let num = fun(product(2, 3, 4), 5); // 24 - 5 = 19

console.log(num); // 19

// setTimeout and setInterval are two functions provided by the browser to work with the time.
// setTimeout is used to run a function once after the interval of time.
// setInterval is used to run a function repeatedly after the interval of time.
function greet() {
  console.log("Hello World");
}

setTimeout(greet, 2000); // prints "Hello World" after 2 seconds
setInterval(greet, 2000); // prints "Hello World" every 2 seconds

// print numbers from 1 to n after an delay of 1 seconds
function one_to_n(n) {
  for (let i = 1; i <= n; i++) {
    setTimeout(function () {
      console.log(i);
    }, 1000 * i);
  }
}

function print(i) {
  console.log(i);
}

one_to_n(10);

// print "Hello World" after 2 seconds using setTimeout function method 2
setTimeout(function () {
  console.log("Hello World");
}, 2000);

// map function is used to create a new array by calling a function on each element of the input array.
let arr = [1, 2, 3, 4, 5];
let newArr = arr.map(function (element) {
  return element * 2;
});

console.log(newArr); // [2, 4, 6, 8, 10]

// filter function is used to create a new array by filtering out elements from the input array based on a condition.
let newArrr = arr.filter(function (element) {
  return element % 2 === 0;
});

console.log(newArrr); // [2, 4]

// reduce function is used to reduce an array to a single value by calling a function on each element of the array.
let sum = arr.reduce(function (accumulator, element) {
  return accumulator + element;
}, 0);

console.log(sum); // 15

// find function is used to find the first element in the array that satisfies a condition.
let found = arr.find(function (element) {
  return element > 3;
});

console.log(found); // 4

//sort function is used to sort the elements of an array.
let arr2 = [5, 3, 1, 4, 2];
let sorted = arr2.sort();  //sort function gives wrong sorted array
console.log(sorted); // [1, 2, 3, 4, 5]

let sorted2 = arr2.sort((a, b) => a - b); //sort function gives correct sorted array
console.log(sorted2); // [1, 2, 3, 4, 5]
