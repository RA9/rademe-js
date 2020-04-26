# RademeJs
A minimalist JavaScript library that make developers work easier  by allowing them to 
use helper methods and functions.

## Why you should use RademeJs?
It has a lot of cool helpers function that speed up development  and allow you to write clean code and save you the work of doing repetitive tasks. 
It is free and works  well  in the browser and node environment  as well. 

## Installing rademe-js as a node package
```js
npm i rademe-js
```

## Import rademe-js from the node_modules
```js
let rademe = require("rademe-js");
```

## Helper methods and examples

`rademe.isString(str)` is a method that return true if a data type is a string.

Example:
```js
// Import rademe-js
let rademe = require("rademe-js");

// Initialize and assign  Carlos  to firstName
let firstName = "Carlos"; 
const isString = rademe.isString; // Assign rademe.isString method to a variable called isString
if(isString(firstName)) { // return a boolean value true if it is true and false if it is false
    console.log("Howdy, ", firstName); // Output: Howdy, Carlos
}
```

`rademe.isNumber(num)` takes in a value and return true if the data type is a Number or vice versa.

Example:
```js
// Import rademe-js
let rademe = require("rademe-js");

 // Initialize and assign number to 50
 const number = 50; 
 const isNumber = rademe.isNumber; // assign rademe.isNumber to a constant variable called isNumber
 console.log(isNumber(number)); // outputs true
```

`rademe.isBoolean(bool)` takes in a data type to check whether it is a boolean value or not

Example:
```js
// Import rademe-js
let rademe = require("rademe-js");

const bool = false;
if(rademe.isBoolean(bool))
{
    console.log("This is a boolean value");
} else {
    console.log("This is not a boolean vlaue");
}
```

`rademe.isArray(arr)` is a native es5 method that check if a value is an array or not.
The implementation of `rademe.isArray` method  is base on the one provided by `underscore.js`.

Example:
```js
// Import rademe-js
let rademe = require("rademe-js");

console.log(rademe.isArray([1, 2, 3, 4])); // output true
```

`rademe.isObject(obj)` Tests whether a supplied parameter is an object.

Example: 
```js
// Import rademe-js
let rademe = require("rademe-js");

console.log(rademe.isObject({
    name: "John",
    age: 23
})); // output true to the console
```

`rademe.pluralize(counter, word)` Tests whether a supplied word should be pluralize by checking the counter parameter.
It also applied some grammar rules to pluralize a word

Example:
```js
// Import rademe-js
let rademe = require("rademe-js");

console.log(rademe.pluralize(2, "Boys")); // output Boys
```





## How RademeJs was born?
It is an exciting thing to  work as a developer,  but it is very hard to stop being repetitive while working on  small projects. It gets complicated real quick and you ended up either spending more time fixing bugs or writing more error-prone codes.
I too suffer from this and I spent lots of my time reading through my codes to fix bugs or improve on an existing code.
There was a time during my internship at Kwagei Group where I was assigned a task to create a Kwagei Facebook using the core fundamental languages of the web(HTML, CSS, JavaScript).

It was fun and I learned a lot during the project, but what really got to me was how repetitve I was.
This broke me down for some weeks trying to figure out how I can figure out a solution for me and my team.
This was how `rademe-js` was born and it is funny now that these little things I used to take for granted have saved me millions of my time to work on more complex tasks without being repetitve, but also using those smaller methods to build these complex tasks.