const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

// 1
// if (randomNumber > 0.7) {
//   alert('Greater than 0.7!');
// }

// 2 - indexing the array elements (numbers)
const numbers = [1, 2, 3, 4, 5];

// 2a)
// for (i of numbers) {
//   console.log(i);
// }

// 2b)
// for (i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// 2c)
// let counter = 0;
// while (counter < numbers.length) {
//   console.log(numbers[counter]);
//   counter++;
// }

//3 - iterating through the array backwards

// 3a
// for (i = numbers.length; i >= 0; i--) {
//   console.log(numbers[i]);
// }

// 3b (array indexing is starting from 0, so the last element of the array has index array.lenght -1)
for (let i = numbers.length - 1; i >= 0; i--) {
  console.log(numbers[i]);
}

//4
const randomNumber2 = Math.random();

console.log(randomNumber);
console.log(randomNumber2);
// if (randomNumber > 0.7 && randomNumber2 > 0.7) {
//   alert('Both are greater than 0.7');
// } else if (randomNumber <= 0.2 || randomNumber2 <= 0.2) {
//   alert('One of randomNumbers is not greater than 0.2');
// }
if (
  (randomNumber > 0.7 && randomNumber2 > 0.7) ||
  randomNumber <= 0.2 ||
  randomNumber2 <= 0.2
) {
  alert('Greater than 0.7 or smaller than 0.2');
}
