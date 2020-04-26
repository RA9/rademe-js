//const lib = require("./helper");

/*--- Math Helper Definition ---*/
lib.math = {};

// Factorial
const fn = (lib.math.fn = n => {
  if (n == 0) {
    return 1;
  }
  return n * lib.math.fn(n - 1);
});

// Permutation
const pn = (lib.math.pn = (n, k) => {
  return fn(n) / fn(n - k);
});


const add = lib.math.add = (a, b) => {
  if (isNumber(a) && isNumber(b)) {
    return a + b;
  }
}


const sub = lib.math.sub = (a, b) => {
  if (isNumber(a) && isNumber(b)) {
    return a - b;
  }
}

const mult = lib.math.mult = (a, b) => {
  if (isNumber(a) && isNumber(b)) {
    return a * b;
  }
}

const divide = lib.math.divide = (a, b) => {
  if (isNumber(a) && isNumber(b)) {
    return a / b;
  }
}

const mod = lib.math.mod = (a, b) => {
  if (isNumber(a) && isNumber(b)) {
    return a % b;
  }
}

const lcm = lib.math.lcm = (arr) => {
  let sum = 0, result = 0;
  if(isArray(arr)) {
    loop(arr, (num) => {
      if(num % 2 == 0) {
        sum = num / 2;
        if(sum != 1) {
          console.log("Result: ",sum)
        }
        console.log(sum)
      } else if(num % 3 == 0) {
        console.log(num, num/3)
      }
    })
  }
}

/*--- Expression parser ---*/
lib.math.expression  = {};

const parse = lib.math.expression.parse = (str, func) => {
  if(str == "factorial") {

  }
} 
