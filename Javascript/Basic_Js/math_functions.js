//Math.abs() function returns the absolute value of a number, that is, the value of the number without its sign.
console.log(Math.abs(-10)); //10
console.log(Math.abs(10)); //10

// Math.max() function returns the largest of zero or more numbers.
console.log(Math.max(5, 10, 15)); // 15
console.log(Math.max(-5, -10, -15)); // -5

// Math.min() function returns the smallest of zero or more numbers.
console.log(Math.min(5, 10, 15)); // 5
console.log(Math.min(-5, -10, -15)); // -15

// Math.ceil() function returns the smallest integer greater than or equal to a given number.
console.log(Math.ceil(4.2)); // 5
console.log(Math.ceil(-4.2)); // -4

// Math.floor() function returns the largest integer less than or equal to a given number.
console.log(Math.floor(4.8)); // 4
console.log(Math.floor(-4.8)); // -5

// Math.round() function returns the value of a number rounded to the nearest integer.holds till 0.49
console.log(Math.round(4.2)); // 4
console.log(Math.round(4.8)); // 5

// Math.random() function returns a random number between 0 (inclusive) and 1 (exclusive).
console.log(Math.random()); // 0.123456789

// Math.random() function returns a random number between 1 and 10.
console.log(Math.floor(Math.random() * 10) + 1); // 1 to 10

// Math.random() function returns a random number between 5 and 15.
console.log(Math.floor(Math.random() * 10) + 5); // 5 to 15

// Returns a random integer from 0 to 99:
Math.floor(Math.random() * 100);

// Returns a random integer from 1 to 100:
Math.floor(Math.random() * 100) + 1;

// Returns a random integer from -10 to 10 both inclusive:
console.log(Math.floor(Math.random() * 21) - 10);

// Math.pow() function returns the base to the exponent power.
console.log(Math.pow(2, 3)); // 8
console.log(Math.pow(10, -2)); // 0.01

// Math.sqrt() function returns the square root of a number.
console.log(Math.sqrt(16)); // 4
console.log(Math.sqrt(25)); // 5

// Math.PI property represents the ratio of the circumference of a circle to its diameter.
console.log(Math.PI); // 3.141592653589793

// Math.E property represents the base of natural logarithms, approximately 2.718.
console.log(Math.E); // 2.718281828459045

// Math.log() function returns the natural logarithm (base E) of a number.
console.log(Math.log(2)); // 0.6931471805599453

// Math.exp() function returns E raised to the power of a number.
console.log(Math.exp(1)); // 2.718281828459045

// Math.cbrt() function returns the cube root of a number.
console.log(Math.cbrt(8)); // 2 

