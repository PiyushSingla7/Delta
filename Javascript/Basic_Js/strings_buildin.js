let str = "   Hello, World!   ";

// Convert to uppercase
let uppercaseStr = str.toUpperCase();
console.log(uppercaseStr); // Output: "   HELLO, WORLD!   "

// Convert to lowercase
let lowercaseStr = str.toLowerCase();
console.log(lowercaseStr); // Output: "   hello, world!   "

// Trim leading and trailing whitespace
let trimmedStr = str.trim();
console.log(trimmedStr); // Output: "Hello, World!"

// Get the length of the string
let length = str.length;
console.log(length); // Output: 19

// Check if the string starts with a specific substring
let startsWithHello = str.startsWith("Hello"); //it will return true if we input "   Hello"
console.log(startsWithHello); // Output: false

// Check if the string ends with a specific substring
let endsWithWorld = str.endsWith("World!");
console.log(endsWithWorld); // Output: false

// Find the index of a specific substring
let indexOfComma = str.indexOf(",");
console.log(indexOfComma); // Output: 8

// Replace a substring with another substring
let replacedStr = str.replace("World", "Universe");
console.log(replacedStr); // Output: "   Hello, Universe!   "

// Split the string into an array of substrings
let splitStr = str.split(",");
console.log(splitStr); // Output: ["   Hello", " World!   "]

// Extract a substring
let substring = str.substring(7, 12);
console.log(substring); // Output: "World"

// Extract a substring with a specified length
let substr = str.substr(7, 5);
console.log(substr); // Output: "World"

// Concatenate strings
let str1 = "Hello";
let str2 = "World";
let concatenatedStr = str1.concat(", ", str2, "!");
console.log(concatenatedStr); // Output: "Hello, World!"

// Repeat a string
let repeatedStr = str.repeat(3);
console.log(repeatedStr); // Output: "   Hello, World!   Hello, World!   Hello, World!   "

// Check if a string includes a specific substring
let includesHello = str.includes("Hello");
console.log(includesHello); // Output: true

// Slice a string
let slicedStr = str.slice(7, 12);
console.log(slicedStr); // Output: "World"

// CharAt
let charAt = str.charAt(7);
console.log(charAt); // Output: "W"

// at
let at = str.at(7);
console.log(at); // Output: "W"

// charCodeAt
let charCodeAt = str.charCodeAt(7);
console.log(charCodeAt); // Output: 87

