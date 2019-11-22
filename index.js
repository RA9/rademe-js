class HelperJs {
    constructor() {
      this.toString = Object.prototype.toString;
      this.isArray = Array.isArray;
    }
  
    // String helper methods
    /**
     * @method isString() - takes in a value and return true if it is a string
     * or false otherwise.
     * @param {*} value - recieves any value
     */
    isString(value) {
      return typeof value === "string" ? true : false;
    }
  
    pluralize(counter, word) {}
  
    isNumber(number) {
      return typeof number === "number" ? true : false;
    }
  
    isBoolean(bool) {
      return typeof bool === "boolean" ? true : false;
    }
  
    /**
     * Takes in an array or an object and return true if it is an array or vice-versa
     * @param {[]} arr - takes in an array or an object
     */
    isArray(arr) {
      return this.isArray ? this.isArray(arr) : this.toString.call(arr) === "[object Array]";
    }
  
    /**
     * Takes in  an object and return true if it is an object or vice-versa
     * @param {{}} obj - takes in  an object
     */
    isObject(obj) {
      return obj && this.toString.call(obj) === "[object Object]";
    }
  }
  
  
  /*
   * ==========================================================================================
   *         =======     ==       ======    =        ========     =======    =====            *
   *            =      =    =     =      =  =        =               =     =                  *
   *            =      =  = =     =  =  =   =        ========        =       =====            *
   *            =      =    =     =      =  =        =          =    =             =          *
   *            =      =    =     ======    =======  ========    === =       =====            *
   * ==========================================================================================
   */
  class HtmlJs extends HelperJs {
    constructor() {
      super()
      this.tableArr = [];
      this.table = document.createElement("table");
    }
  
    /**
     * This method takes in  an array of object/objects  Eg. [{}]
     * within those objects you can create a table tag by appending a one digit
     * eg. tr1, td2, th1
     * this help you walkaround getting the keys of each properties created within an object.
     * You can also create a parent to children relationship by creating a parent name as a key and
     * the properties as an array.
     * Eg. [{
     *          "tr1": {
     *                      "th1": "name",
     *                      "th2": "Contact",
     *                      "th3": "Address"
     *                }
     *     }]
     */
    create(tableElement) {
      const thead = this.table.createTHead();
      const tbody = this.table.createTBody();
      const tbrow = tbody.insertRow();
      const datas = this.createHtmlTag(tableElement);
      //console.log("Carlos: ", datas);
      datas.forEach(data => {
        const elName = data.nodeName.toLowerCase();
        if (elName == "th") {
          //console.log("Carlos2: ", data);
          thead.appendChild(data);
        } else if (elName == "td") {
          tbrow.appendChild(data);
          //console.log("Carlos1: ", data);
        }
      });
      return this.table;
    }
  
  
    /**
     * Convert an array of objects or an object into an Html tag or element
     * @param {[{}] | {}} tags - takes in an array of objects or an object and turn it into 
     * a html table elements
     */
    createHtmlTag(tags) {
      if (this.isArray(tags)) {
        for (let index = 0; index < tags.length; index++) {
          const element = tags[index];
          this.createHtmlTag(element);
        }
      }
  
      if (this.isObject(tags)) {
        let keyStr, children;
        Object.entries(tags).forEach(([key, value]) => {
          keyStr = key.replace(/\d+/g, "");
          if (keyStr == "td" || keyStr == "th") {
            if (this.isArray(value)) {
              value.forEach(v => {
                children = document.createElement(keyStr);
                children.textContent = v;
                this.tableArr.push(children);
              });
            } else if (typeof value == "string") {
              children = document.createElement(keyStr);
              children.textContent = value;
              this.tableArr.push(children);
            }
          }
  
          if (this.isObject(value)) {
            for (const key in value) {
              if (value.hasOwnProperty(key)) {
                const elem = value[key];
                keyStr = key.replace(/\d+/g, "");
                children = document.createElement(keyStr);
                children.textContent = elem;
                this.tableArr.push(children);
              }
            }
          }
        });
      }
      return this.tableArr;
    }
  
    display(elem = document.querySelector("body")) {
      return elem.appendChild(this.table);
    }
  }
  
  
  class MathJs extends HelperJs {
  
  }
  
  
  
  
  {
    // const helpers = [];
    // helpers['html'] = new HtmlJs();
    // helpers['helpers'] = new HelperJs();
    // helpers['math'] = new MathJs();
  
  let me = Object.prototype.toString;
  
  if (me.call(this) === '[object Window]') {
    console.log(me.call(this));
  } else if (me.call(this) === '[object gobal]') {
    console.log(me.call(this));
  }
  
  
  }
  
  