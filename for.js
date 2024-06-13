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
let n = 10;
let sum1 = 0;
for (let i = 1; i <= n; i++) {
  sum1 += n;
}
console.log("n-toonii niilber", sum1);
//bodlogo 6
let n1 = 5;
let urjver = 1;
for (let i = 1; i <= n1; i++) {
  urjver *= i;
}
console.log("n hurtleh toonii urjver", urjver);
//bodlogo 7
let number = 123;
let digit = 0;
let dum = 0;
while (number !== 0) {
  digit = number % 10;
  number = number - digit;
  number = number / 10;
  dum = dum + digit;
}
console.log("digit dum", dum);
// bodlogo 8
let number1 = 1234;
let digit1 = 0;
let dum1 = 0;
while (number !== 0) {
  digit1 = number1 % 10;
  number1 = number1 - digit1;
  number1 = number1 / 10;
  dum = dum + digit1;
  if (digit1 % 2 === 0) {
    dum1 = dum1 + digit1;
  }
}
console.log("even digit", dum1);
//bodlogo 9
let n2 = 28;
let sondgoitoo = 0;
for (let i = 1; i <= n2; i += 2) {
  console.log("sondgoi-too", i);
  sondgoitoo = sondgoitoo + n2;
}
console.log("sondgoitoo", sondgoitoo);
