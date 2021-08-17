const sana = (n) => {
  console.log(n);
  if (n <= 1) return;
  sana(n - 1);
};

sana(10);

const factorial = (n) => {
  console.log(n);
  if (n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};

console.log(factorial(6));
