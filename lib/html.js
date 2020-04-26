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
