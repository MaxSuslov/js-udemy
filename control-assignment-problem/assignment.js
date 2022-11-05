const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

// 1
if (randomNumber > 0.7) {
  alert('Greater than 0.7!');
}

// 2
const numbers = [1, 2, 3, 4, 5];
// for (i of numbers) {
//   console.log(i);
// }

//3
// for (i = numbers.length; i >= 0; i--) {
//   console.log(numbers[i]);
// }

//4
const randomNumber2 = Math.random();

if (randomNumber > 0.7 && randomNumber2 > 0.7) {
  alert('Both are greater than 0.7');
} else if (randomNumber || randomNumber2 <= 0.2) {
  alert('One of randomNumbers is not greater than 0.2');
}
