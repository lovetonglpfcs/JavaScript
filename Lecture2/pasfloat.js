function circumference(r) {
  if (Number.isNaN(Number.parseFloat(r))) {
    return 0;
  }
  return parseFloat(r) * 2.0 * Math.PI;
}

console.log(circumference("4.567abcdefgh"));
// expected output: 28.695307297889173

console.log(circumference("abcdefgh"));
// expected output: 0

console.log(Math.floor(5.05));
// expected output: 5

console.log(Math.ceil(7.004));
// expected output: 8

console.log(Math.random());
// expected output: a number from 0 to <1

console.log(Math.min(-2, -3, -1));
// expected output: -3
