// level {2}
// Write a function in Javascript to print the sum of the first n fibonaccinacci numbers ?

function calculateSum(n) {
  let fibonacci = [];
  if (n <= 0) return 0;

  fibonacci[0] = 0;
  fibonacci[1] = 1;

  let sum = fibonacci[0] + fibonacci[1];

  for (let i = 2; i <= n; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    sum += fibonacci[i];
  }

  return sum;
}
let n = 6;
document.write(`Sum of fibonaccinacci numbers is :
          ${calculateSum(n)} `);
