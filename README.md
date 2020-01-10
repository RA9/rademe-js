# HumbleJs
A minimalist JavaScript library that make developers work easier  by allowing them to 
use helper methods and functions.

## Why you should use HumbleJs?
It has a lot of cool helpers function that speed up development  and allow you to write clean code and save you the work of doing repetitive tasks. 
It is free and works  well  in the browser and node environment  as well. 

## Helper methods and examples

`helper.isString()` is a method that return true if a data type is a string.

Example 1:
```js
let firstName = "Carlos"; // The variable first name is initialize and assign to a value Carlos with a data type of string 
const isString = helper.isString; // Assign the library isSrting function to a const variable called isString
if(isString(firstName)) { // return a boolean value true if it is true and false if it is false
    console.log("Howdy, ", firstName); // Output: Howdy, Carlos
}
```


Example 2:
```js
let box = {}; // The variable name is initialize and assign to a value Carlos with a data type of string 
const isString = helper.isString; // Assign the library isSrting function to a const variable called isString
if(isString(name)) { // return a boolean value true if it is true and false if it is false
    console.log("Box name, ", name); // Output: Howdy, Carlos
} else {
    console.log("This is not a string"); // box variable value is an object, isString method is now false and will return "This is not a string".
}
```

`helper.isNumber()` takes in a data type as a value and return true if the data type is a Number or vice versa.

Example 1:
```js
 const number = 50; 
 const isNumber = helper.isNumber; // assign helper.isNumber to a constant variable called isNumber
 console.log(isNumber(number)); // outputs true
```

`helper.isBoolean()` takes in a data type to check whether it is a boolean value or not

## How HumbleJs was born?
It is an exciting thing to  work as a developer,  but it is very hard to stop being repetitive while working on  small projects. It gets complicated real quick and you ended up either spending more time fixing bugs or writing more error-prone codes.
I too suffer from this and I spent lots of my time reading through my codes to fix bugs or improve on an existing code.
There was a time during my internship at Kwagei Group where I was assigned a task to create a Kwagei Facebook using the core fundamental languages of the web(HTML, CSS, JavaScript).

It was fun and I learned a lot during the project but what really got to me was how repetitve I was.
This broke me down for some weeks trying to figure out how I can come up with a solution for me and my team.
This was how HumbleJs was born and it is funny now that these little things I used to take for granted have saved me millions of my time to work on more complex tasks without being repetitve but also using those smaller methods to build these complex tasks.