// for (let tooluur = 0; tooluur <= 10; tooluur++) {
//   console.log("tooluur", tooluur);
// }
// bodlogo 2

for (let i = 1; i <= 10; i += 2) {
  console.log("1-10 hurtleh sondgoi too", i);
}
// bodlogo 3
for (let i = 0; i <= 10; i += 2) {
  console.log("1-10 hurtleh tegsh too", i);
}
// bodlogo 4
let sum = 0;
let too = 0;
for (let i = 1; i <= 100; i++) {
  too = too + 1;
  sum = sum + too;
}
console.log("1-100 niilber", sum);
// bodlogo 5
let sum1 = 0;
let too1 = 0;
for (let i = 1; i <= 101; i++) {
  too1 = too1 + 1;
  sum1 = sum1 + too1;
}
console.log("1-100 niilber", sum1);
// bodlogo 6
let sum2 = 1;
let too2 = 2;

let num1 = 4;
for (let i = 0; i <= 4; i++) {
  sum2 = sum2 * too2 * num * num1;
}
console.log("1-100 niilber", sum2);
// 5 Write a program to print natural numbers up to N and find their sum
sum = 0;
let n = 4;
for (let i = 1; i <= n; i++) {
  sum += i;
}
console.log("The sum of the natural numbers is:", sum);

// 6 Write a program to find the factorial of N numbers use wile loop
let fact = 1;
while (n > 1) {
  fact *= n;
  n--;
}
console.log("The factorial is:", fact);

// 7 Find the sum of the all digits in the given number
sum = 0;
let num = 1234567;
while (num > 0) {
  let digit = num % 10; // Get the last digit of the number.
  sum += digit; // Add it to the sum.
  num = (num - digit) / 10; // Remove the last digit from the number.
}
console.log("The sum of the all digits is:", sum);

// 8 Find the sum of the even digits in the given number
sum = 0;
num = 1234567;
while (num > 0) {
  let digit = num % 10; // Get the last digit of the number.
  if (digit % 2 === 0) {
    // Check if the digit is even.
    sum += digit; // Add it to the sum.
  }
  num = (num - digit) / 10; // Remove the last digit from the number.
}
console.log("The sum of the even digits is:", sum);

// 9 Write a program to print odd numbers up to N and find their sum
n = 89;
sum = 0;
while (n > 0) {
  if (n % 2 !== 0) {
    // Check if n is odd.
    console.log(n); // Print the odd number.
    sum += n; // Add it to the sum.
  }
  n--;
}
console.log("The sum of the odd digits is:", sum);
// 10 Write a program to print even numbers up to N and find their sum
n = 89;
sum = 0;
while (n > 0) {
  if (n % 2 === 0) {
    // Check if n is even.
    console.log(n); // Print the even number.
    sum += n; // Add it to the sum.
  }
  n--;
}
console.log("The sum of the even digits is:", sum);
// 11 Write a program to print the inverse of the given positive number eg input: 123 output: 321
let reversed = 0;
num = 8934;
let originalNum = num;
while (num > 0) {
  let digit = num % 10; // Get the last digit of the number.
  reversed = reversed * 10 + digit; // Append it to the reversed number.
  num = (num - digit) / 10; // Remove the last digit from the number.
}
console.log("The inverse of", originalNum, "is:", reversed);
