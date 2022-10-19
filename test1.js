const check = (arr) => {
  let dict = {};
  let jawaban = 0;
  for (const n of arr) {
    if (!dict[n]) {
      dict[n] = 1;
    } else {
      dict[n] += 1;
    }
  }
  for (const value of Object.values(dict)) {
    jawaban += Math.floor(value / 2);
  }
  return jawaban;
};

console.log(check([5, 7, 7, 9, 10, 4, 5, 10, 6, 5]));
console.log(check([10, 20, 20, 10, 10, 30, 50, 10, 20]));
console.log(check([6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3, 3, 5]));
console.log(check([1, 1, 3, 1, 2, 1, 3, 3, 3, 3]));
