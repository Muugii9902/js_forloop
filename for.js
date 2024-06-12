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
let num = 3;
let num1 = 4;
for (let i = 0; i <= 4; i++) {
  sum2 = sum2 * too2 * num * num1;
}
console.log("1-100 niilber", sum2);
