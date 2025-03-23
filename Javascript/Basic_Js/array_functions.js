arr=[1,65,53,3,5];
console.log(arr);

// array push
arr.push(6); // add element at the end
console.log(arr);


// array pop
arr.pop(); // remove element from the end
console.log(arr);

// array shift
arr.shift(); // remove element from the start
console.log(arr);

// array unshift
arr.unshift(13); // add element at the start
console.log(arr);

// array splice
arr.splice(2, 0, 7); // Inserts 7 at index 2
console.log(arr); // [1, 65, 7, 53, 3, 5, 6]

// array splice
arr.splice(3, 1); // Removes 1 element from index 3
console.log(arr); // [1, 65, 7, 3, 5, 6]

// array length
console.log(arr.length); // 6

// array reverse
arr.reverse();
console.log(arr); // [6, 5, 3, 7, 65, 1]

// array sort
arr.sort();
console.log(arr); // [1, 3, 5, 6, 65, 7]

// array concat
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = arr1.concat(arr2);
console.log(arr3); // [1, 2, 3, 4, 5, 6]

// array slice
let arr4 = arr3.slice(2, 5);
console.log(arr4); // [3, 4, 5]

// array join
let arr5 = arr4.join("-");
console.log(arr5); // "3-4-5"

// array indexOf
let index = arr5.indexOf("4");
console.log(index); // 2

// array lastIndexOf
let lastIndex = arr5.lastIndexOf("4");
console.log(lastIndex); // 2

// array includes
let isPresent = arr5.includes("4");
console.log(isPresent); // true

// array find
let found = arr5.find((element) => element > 3);
console.log(found); // 4

// array findIndex
let foundIndex = arr5.findIndex((element) => element > 3);
console.log(foundIndex); // 1

// tostring
let str = arr5.toString();
console.log(str); // "3,4,5"

// delete
delete arr5[1];
console.log(arr5); // [3, empty, 5]


