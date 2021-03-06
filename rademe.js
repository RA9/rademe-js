(function (root, undefined) {
  /* --- Setup --- */

  // Create the local library object, to be exported or referenced globally later
  const lib = {};
  // Current version
  lib.version = "0.1.6";

  /* --- Helper Methods --- */

  const toString = Object.prototype.toString;

  // String helper methods
  /**
   * takes in a string and return true if it is a string
   * or false otherwise.
   * @param {string} value - receives a value as a string
   */
  const isString = (lib.isString = function (value) {
    return typeof value === "string" ? true : false;
  });

  /**
   * Takes in a value and check whether it is a number or not
   * @param {number} value - takes in a number or a value
   */
  const isNumber = (lib.isNumber = function (value) {
    return typeof number === "number" ? true : false;
  });

  const isBoolean = (lib.isBoolean = function (bool) {
    return typeof bool === "boolean" ? true : false;
  });

  /**
   * Tests whether supplied parameter is an array
   * @param {[]} arr - takes in an array or an object
   * from underscore.js, delegates to ECMA5's native Array.isArray
   */
  const isArray = (lib.isArray = function (arr) {
    return Array.isArray ?
      Array.isArray(arr) :
      toString.call(arr) === "[object Array]";
  });

  const getObjLength = lib.getObjLength = (obj) => {
    let length = 0;
    if (isObject(obj)) {
      loop(obj, () => {
        length += 1;
      });
    }
    return length;
  }

  const isObjectEqual = lib.isObjectEqual = (obj1, obj2) => {
    let count = 0;
    if (isObject(obj1) && isObject(obj2)) {
      loop(obj1, (el, key) => {
        loop(obj2, (ele, k) => {
          console.log("object arr: ", ele)
          if (k == key && el == ele) {
            count += 1;
          }
        })
      })

      return getObjLength(obj1) == getObjLength(obj2) && getObjLength(obj1) == count ? true : false;
    }
    return false;
  }

  /**
   * @description Takes in an array as both arguments and compare them.
   * @param {Array} arr1  takes in an array and compare it against another array
   * @param {Array} arr2  takes in an array and compare it against the first arguments
   */
  const isArrayEqual = (lib.isArrayEqual = (arr1, arr2) => {
    if (isArray(arr1) && isArray(arr2)) {
      const a1 = JSON.stringify(arr1);
      const a2 = JSON.stringify(arr2);
      return JSON.stringify(arr1) === JSON.stringify(arr2);
    }
    else {
      return new Error("It looks like you enter" + typeof arr1 + " and " + typeof arr2 + " instead of an array")
    }
  })

  /**
   * Takes in  an object and return true if it is an object or vice-versa
   * @param {{}} obj - takes in  an object
   */
  const isObject = (lib.isObject = function (obj) {
    return obj && toString.call(obj) === "[object Object]";
  });

  const pluralize = (lib.pluralize = function (counter, word) {
    if (counter == 1) {
      return word;
    } else if (word.endsWith("y")) {
      if (word.charAt(word.length - 2) !== /([^aeiou])+/g) {
        return word + "s";
      }
      return word.replace(/\y$/gi, "ies");
    } else {
      return word + "s";
    }
  });

  const stringHasSpace = lib.stringHasSpace = (str) => {
    let is_space = /\s/g;
    return is_space.test(str);
  }

  /**
   * @description count words separated by space and return the count
   * @param {string} word a string that is pass to countWord
   */
  const countWord = (lib.countWord = word => {
    let count = 0;
    if (isString(word) && stringHasSpace(word)) {
      loop(word.split(/[ ]/), w => {
        if (w != "") {
          count++;
        }

      });
    } else {
      count += 1;
    }
    return count;
  });


  const countAndLimitCharacters = (lib.countAndLimitCharacters = (
    element,
    limit
  ) => {
    let count = query("#count");
    count = count != null ? count : null;
    if (count == null) return;
    document.body.onload = () => {
      count.textContent = limit;
    };
    count.innerHTML = limit;
    let val = element.value;
    let val_length = element.value.length;
    if (isString(val)) {
      if (val_length >= limit) {
        element.setAttribute("maxlength", limit);
        count.innerHTML = "0";
      } else {
        count.innerHTML = limit - val_length;
      }
    }
  });

  /**
   * take in two arguments and check if it is an array, an object or a string.
   * it then return the various loop methods applicable to it.
   * @param {*} value - takes in a data types value, check whether it is an array, an object or a string
   * an then loop through them.
   * @param {} func - is a callback function that takes in the looped elements and pass it as an argument to this function
   */
  const loop = (lib.loop = function (value, func) {
    if (isArray(value)) {
      if (value.length == 1) {
        return value[0];
      } else {
        for (let index = 0; index < value.length; index++) {
          const element = value[index];
          func(element, index);
        }
      }

    } else if (isObject(value)) {
      for (const key in value) {
        if (value.hasOwnProperty(key)) {
          const element = value[key];
          func(element, key);
        }
      }
    } else if (isString(value)) {
      for (let index = 0; index < value.length; index++) {
        const element = value[index];
        func(element, index);
      }
    }
  });

  const log = lib.log = (...val) => {
    console.log(...val);
  }
/*--- HTML5 Helper Definition ---*/
lib.html = {};
const elementArr = [];

// create and return a html element
const elt = (lib.html.elt = function (elem) {
  return document.createElement(elem);
});

// Get a html element by id
const id = (lib.html.id = name => {
  return document.getElementById(name);
});

/**
 *  return the query selector of a html element
 *  if @param {bool} is set to false it query selects a single element
 *  else if it is set to true it  query selects all of the elements.
 */
const query = (lib.html.query = (elem, bool = false) => {
  if (bool !== "undefined" && bool === true) {
    return document.querySelectorAll(elem);
  }
  return document.querySelector(elem);
});

const checkExt = lib.checkExt = (ext) => {
  switch (ext) {
    case "js":
      return "js"
      break;
    case "html":
      return "html"
      break;
    case "css":
      return "css";
      break;
    case "pdf":
      return "pdf";
      break;
    default:
      break;
  }
}

const loadAssets = lib.html.loadAssets = (path, fileName) => {
  if (isString(fileName)) {
    const values = fileName.split(".");
    loop(values, (value) => {
      if (value == 'js') {
        const scripts = elt("script");
        scripts.src =  path + "/" +fileName;
        const me =  query("body");
        console.log(me)
        display(scripts);
      } else if (value == "css") {
        const links = elt("link");
        links.href =  path + "/" +fileName;
        links.rel = "stylesheet";
        const me =  query("head").appendChild(links);
        console.log(me)
        display(query("head"), links);
      } 
    })
  }
}


/**
 *  display a html element 
 */
const display = (lib.html.display = function (parent, child) {
  if (arguments.length == 1) {
    return query("body").appendChild(arguments[0]);
  }

  return parent.appendChild(child);
});

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

//const lib = require("./helper")

/*--- Database Helper Definition ---*/
lib.database = {};

/**
 * it creates and returns the database pass into it as an argument.
 */
const createDb = (lib.database.createDb = (
  dbName,
  database,
  url,
  config,
  options
) => {
  if (database == undefined) {
    database = localStorage;
    return database;
  } else if ((database = "MongoDB")) {
    if (url != null) {
      const MongoClient = require("mongodb").MongoClient;

      // Connect to the server.
      MongoClient.connect(url, function(err, client) {
        if (err == null) {
          console.error("Error: ", e);
          client.close();
        }
        return client.db(dbName);
      });
    }
  } else if (database == "firebase") {
    if (config !== null && isObject(config)) {
      firebase.initializeApp(config);
      dbName = firebase.database();
      return dbName;
    }
  }
});

/*-- Date Method --*/
lib.date = {};

const clock = (lib.date.clock = elem => {
  const getCurrentDate = new Date();
  let currentHours = getCurrentDate.getHours();
  let currentMinutes = getCurrentDate.getMinutes();
  let currentSeconds = getCurrentDate.getSeconds();
  let ampm = "";
  currentMinutes = currentMinutes < 10 ? "0" + currentMinutes : currentMinutes;

  if (currentHours > 12) {
    currentHours = currentHours - 12;
    ampm = " PM";
  } else if (currentHours == 12) {
    currentHours = 12;
    ampm = " AM";
  } else if (currentHours < 12) {
    ampm = " AM";
  } else {
    ampm = "PM";
  }

  if (currentHours == 0) {
    currentHours = 12;
  }

  elem.textContent = currentHours + " : " + currentMinutes + " : " + currentSeconds + ampm;
  setTimeout(function () {
    clock(elem);
  }, 500);


});


const getFullDate = (lib.date.getFullDate = (element, date) => {
  let currentDate = "";
  if (date != null || date != undefined) {
    currentDate = new Date(date);
  } else {
    currentDate = new Date();
  }
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  const months = "Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sept, Oct, Nov, Dec";
  monthsArr = months.split(",");
  console.log("Month arr: ", monthsArr);
  element.innerHTML =
    days[currentDate.getDay()] +
    "   " +
    monthsArr[currentDate.getMonth()] +
    "  " +
    currentDate.getDate() +
    ", " +
    currentDate.getFullYear();
  console.log("My elements: ", element);
  display(element);
});

const getAge = (lib.date.getAge = year => {
  const currentDate = new Date();
  let newAge = 0;
  if (year != null || year != undefined) {
    newAge = currentDate.getFullYear() - year;
  } else {
    newAge = 1;
  }
  return newAge;
});




/*---- Form DOM Helper ----*/
lib.form = {};

const form = lib.form.element = (count, options) => {
    const form = elt("form");
    if (count > 1) {
        loop(options, function (option) {
            const label = elt("label");
            if (option.label) {
                label.textContent = option.label;
                form.appendChild(label);
            }
            const input = elt("input");
            
            if (option.type) {
                input.type = option.type;
            }

            if (option.placeholder) {
                input.placeholder = option.placeholder;
            }

            if (option.value) {
                input.value = option.value;
            }
            
            form.appendChild(input);
            console.log(form);
        })
        display(form);
    }
}
/*-- Password Manipulation --*/
// Password Creator and Generator

lib.password = {};

const gen_alpha_char = (lib.password.gen_alpha_char = () => {
  const char =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/?@#$%^&*(+-){|,<>";
  const rand_num = Math.floor(Math.random() * char.length);
  return char[rand_num];
});


const gen = (lib.password.gen = len => {
  let result = "";
  for (let index = 0; index < len; index++) {
    result += gen_alpha_char();
  }
  return result;
});

const clean = (lib.password.clean = str => {
  return str.replace(/\s/g, "");
});

const check_pass = (lib.password.check_pass = pass => {
  if (isString(pass)) {
    if (pass.length >= 8) {
      const pattern = /[a-zA-Z0-9@-|]/g;
      return pattern.test(pass);
    }
  }
});

/* --- Module Definition --- */

	// Export rademejs for CommonJS. If being loaded as an AMD module, define it as such.
	// Otherwise, just add `rademejs` to the global object
	if (typeof exports !== 'undefined') {
		if (typeof module !== 'undefined' && module.exports) {
			exports = module.exports = lib;
		}
		exports.rademe = lib;
	} else if (typeof define === 'function' && define.amd) {
		// Return the library as an AMD module:
		define([], function() {
			return lib;
		});
	} else {
		lib.noConflict = (function(rademe) {
			return function() {
				root.rademe = rademe;
				// Delete the noConflict method:
				lib.noConflict = undefined;
				// Return reference to the library to re-assign it:
				return lib;
			};
		})(root.rademe);

		// Declare `fx` on the root (global/window) object:
		root['rademe'] = lib;
	}

	// Root will be `window` in browser or `global` on the server:
}(this));