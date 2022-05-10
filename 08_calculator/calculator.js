const add = function (a, b) {

  if (isNaN(a) || isNaN(b)) {

    return 'error';
  } else {
    return a + b;
  }
};

const subtract = function (a, b) {
  if (!isNaN(a) && !isNaN(b)) {

    return a - b;
  } else {
    return "error";
  };
}
const sum = function (array) {

  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum;
};

const multiply = function (array) {

  let mult = 1;

  for (let i = 0; i < array.length; i++) {
    mult *= array[i];
  }

  return mult;
};

const power = function (base, exp) {

  let power = Math.pow(base, exp);

  return power;

};

const factorial = function (num) {

  if (num < 0) {
    return "error"
  } else if (num === 0 || num === 1) {
    return 1;
  } else {

    for (let i = num - 1; i >= 1; i--) {
      num *= i;
    }
  }

  return num;

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
