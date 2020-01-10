/*--- HTML5 Helper Definition ---*/
lib.html = {};
const elementArr = [];

// create and return a html element
const elt = (lib.html.elt = function(elem) {
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

/**
 *  display a html element 
 */
const display = (lib.html.display = function(elem, element) {
  if(arguments.length == 1) {
    return query("body").appendChild(arguments[0]);
  }
  
   return elem.appendChild(element);
  });
