// class HtmlJs {
//   constructor() {
//     super();
//     this.elementArr = [];
//   }

//   /**
//    * This method takes in  an array of object/objects  Eg. [{}]
//    * within those objects you can create a table tag by appending a one digit
//    * eg. tr1, td2, th1
//    * this help you walkaround getting the keys of each properties created within an object.
//    * You can also create a parent to children relationship by creating a parent name as a key and
//    * the properties as an array.
//    * Eg. [{
//    *          "tr1": {
//    *                      "th1": "name",
//    *                      "th2": "Contact",
//    *                      "th3": "Address"
//    *                }
//    *     }]
//    */
//   create(tableElement) {

//   }

//   /**
//    * Convert an array of objects or an object into an Html tag or element
//    * @param {[{}] | {}} tags - takes in an array of objects or an object and turn it into
//    * a html table elements
//    */
//   createHtmlTag(tags) {
//     if (this.isArray(tags)) {
//       for (let index = 0; index < tags.length; index++) {
//         const element = tags[index];
//         this.createHtmlTag(element);
//       }
//     }

//     if (this.isObject(tags)) {
//       let keyStr, children;
//       Object.entries(tags).forEach(([key, value]) => {
//         keyStr = key.replace(/\d+/g, "");
//         if (keyStr == "td" || keyStr == "th") {
//           if (this.isArray(value)) {
//             value.forEach(v => {
//               children = document.createElement(keyStr);
//               children.textContent = v;
//               this.elementArr.push(children);
//             });
//           } else if (typeof value == "string") {
//             children = document.createElement(keyStr);
//             children.textContent = value;
//             this.elementArr.push(children);
//           }
//         }

//         if (this.isObject(value)) {
//           for (const key in value) {
//             if (value.hasOwnProperty(key)) {
//               const elem = value[key];
//               keyStr = key.replace(/\d+/g, "");
//               children = document.createElement(keyStr);
//               children.textContent = elem;
//               this.elementArr.push(children);
//             }
//           }
//         }
//       });
//     }
//     return this.elementArr;
//   }

//   display(elem = document.querySelector("body")) {
//     return elem.appendChild(this.table);
//   }
// }

// class MathJs {}

(function(root, undefined) {
  /* --- Setup --- */

  // Create the local library object, to be exported or referenced globally later
  const lib = {};

  // Current version
  lib.version = "0.0.6";

  /* --- Helper Methods --- */

  const toString = Object.prototype.toString;

  // String helper methods
  /**
   * takes in a string and return true if it is a string
   * or false otherwise.
   * @param {string} value - recieves a value as a string
   */
  const isString = (lib.isString = function(value) {
    return typeof value === "string" ? true : false;
  });

  /**
   * Takes in a value and check whether it is a number or not
   * @param {number} value - takes in a number or a value
   */
  const isNumber = (lib.isNumber = function(value) {
    return typeof number === "number" ? true : false;
  });

  const isBoolean = (lib.isBoolean = function(bool) {
    return typeof bool === "boolean" ? true : false;
  });

  /**
   * Tests whether supplied parameter is an array
   * @param {[]} arr - takes in an array or an object
   * from underscore.js, delegates to ECMA5's native Array.isArray
   */
  const isArray = (lib.isArray = function(arr) {
    return Array.isArray
      ? Array.isArray(arr)
      : toString.call(arr) === "[object Array]";
  });

  /**
   * Takes in  an object and return true if it is an object or vice-versa
   * @param {{}} obj - takes in  an object
   */
  const isObject = (lib.isObject = function(obj) {
    return obj && toString.call(obj) === "[object Object]";
  });

  const pluralize = (lib.pluralize = function(counter, word) {
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

  /*--- HTML5 Helper Definition ---*/
  lib.html = {};
  const elementArr = [];

  // create and return an html element
  const elt = (lib.html.elt = function(elem) {
    return document.createElement(elem);
  });

  // return the query selector
  const query = (lib.html.query = (elem, bool) => {
    if (bool !== "undefined" && bool === true) {
      return document.querySelectorAll(elem);
    }
    return document.querySelector(elem);
  });

  
  const extractArray = lib.html.extractArray = function(arr) {
    if(isArray(arr)) {
      console.log()
    
      // for (let index = 0; index < arr.length; index++) {
      //   const element = arr[index];
      //   obj[index] = element
      // }
      console.log("hehhe", arr);
      // let value;
      //  arr.forEach(data => {
      //   value += data;
      // })
      return obj;
    }
  }

  const factoryObject = (lib.html.factoryObject = function(obj)  {
    if(isArray(obj)) {
      lib.html.factoryObject(extractArray(obj))
    } else {
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
     const element = obj[key];
          console.log(element);
        }
      }
    }
    
  });

  /**
   * Convert an array of objects or an object into a Html tag or element
   * @param {[{}] | {}} elem - takes in an array of objects or an object and turn it into
   * a html table elements
   */
  const factory = (lib.html.factory = function(elem) {
    if (isArray(elem)) {
      console.log("I am an array", elem);
      for (let index = 0; index < elem.length; index++) {
        const element = elem[index];
        console.log("I am Me", element);
        lib.html.factory(element);
      }
    } else {
      if (isObject(elem)) {
        console.log("I am an Object", elem);
        let keyStr, parent, children;
        Object.entries(elem).forEach(([key, value]) => {
          //keyStr = key.replace(/\d+/g, "");
          //console.log("key: ", keyStr)
          //if (keyStr == "td" || keyStr == "th") {
          if (isArray(value)) {
            value.forEach(v => {
              console.log("my keys", key, value);
              parent = elt(key);
              if (isString(v)) {
                parent.textContent = v;
                elementArr.push(parent);
              } else if (isObject(v)) {
                for (const key in value) {
                  if (value.hasOwnProperty(key)) {
                    const el = value[key];
                    //keyStr = key.replace(/\d+/g, "");
                    console.log(key);
                    children = elt(key);
                    children.textContent = el;
                    parent.appendChild(children);
                    elementArr.push(parent);
                    console.log("No: ", elementArr);
                  }
                }
              } else if (isArray(v)) {
                console.log("Mii");
                //lib.html.factory(v);
              }

              console.log("Me you: ", elementArr);
            });
          } else if (typeof value == "string") {
            parent = elt(key);
            parent.textContent = value;
            elementArr.push(parent);
            console.log("You: ", elementArr);
          }
          // }

          if (isObject(value)) {
            for (const key in value) {
              if (value.hasOwnProperty(key)) {
                const el = value[key];
                //keyStr = key.replace(/\d+/g, "");
                children = elt(key);
                children.textContent = el;
                elementArr.push(children);
                console.log("No: ", elementArr);
              }
            }
          }
          if (isArray(value)) {
            console.log("True");
            for (const key in value) {
              if (value.hasOwnProperty(key)) {
                const el = value[key];
                //lib.html.factory(el);
                // //keyStr = key.replace(/\d+/g, "");
                children = elt(key);
                children.textContent = el;
                elementArr.push(children);
                console.log("No: ", elementArr);
              }
            }
          }
        });
        console.log("me: ", elementArr);
      }
    }

    return elementArr;
  });

  const display = (lib.html.display = function(elem = query("body")) {
    elementArr.forEach(element => {
      console.log(elem);
      return elem.appendChild(element);
    });
  });

  elementArr.splice(0);

  /*--- Math Helper Definition ---*/

  /* --- Module Definition --- */

  // Export js-helper for CommonJS. If being loaded as an AMD module, define it as such.
  // Otherwise, just add `js-helper` to the global object
  if (typeof exports !== "undefined") {
    if (typeof module !== "undefined" && module.exports) {
      // Node
      exports = module.exports = lib;
    }
    exports.JsHelpers = lib;
  } else if (typeof define === "function" && define.amd) {
    // AMD. Register as an annoymous module
    define([], function() {
      return lib;
    });
  } else {
    // Browser globals (root is window)

    lib.noConflict = (function(oldHelper) {
      return function() {
        // Reset the value of the root's `js-helpers` variable:
        root["JsHelpers"] = oldHelper;
        // Delete the returnExports method:
        lib.noConflict = undefined;
        // Return reference to the library to re-assign it:
        return lib;
      };
    })(root.JsHelpers);

    root["JsHelpers"] = lib;
  }

  // Root will be `window` in browser or `global` on the server:
})(this);
