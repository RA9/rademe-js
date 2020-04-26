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