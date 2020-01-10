/**
 * Very simple in-browser unit-test library, with zero deps.
 *
 * Background turns green if all tests pass, otherwise red.
 * View the JavaScript console to see failure reasons.
 *
 * Example:
 *
 *   adder.js (code under test)
 *
 *     function add(a, b) {
 *       return a + b;
 *     }
 *
 *   adder-test.html (tests - just open a browser to see results)
 *
 *     <script src="tinytest.js"></script>
 *     <script src="adder.js"></script>
 *     <script>
 *
 *     tests({
 *
 *       'adds numbers': function() {
 *         eq(6, add(2, 4));
 *         eq(6.6, add(2.6, 4));
 *       },
 *
 *       'subtracts numbers': function() {
 *         eq(-2, add(2, -4));
 *       },
 *
 *     });
 *     </script>
 *
 * That's it. Stop using over complicated frameworks that get in your way.
 *
 * -Joe Walnes
 * MIT License. See https://github.com/joewalnes/jstinytest/
 */

const TinyTest = {
  run: function(tests) {
    let failures = 0;
    let div = document.createElement("div");
    for (let testName in tests) {
      let testAction = tests[testName];
      let h2 = document.createElement("h2");
      let pre = document.createElement("pre")
      let p = document.createElement("p");
      try {
        testAction();
        h2.textContent += `Test: ${testName}`;
        p.textContent += `Test pass: Ok`;
        div.appendChild(h2);
        div.appendChild(p);
        console.log("Test:", testName, "OK");
      } catch (e) {
        failures++;
        h2.textContent += `Test: ${testName}`;
        p.textContent += 'Test failed: ' +failures ;
        pre.innerHTML += `
        <h3> ${e} </h3> <p>Errors: ${e.stack}</p>`;
        div.appendChild(h2);
        div.appendChild(p);
        div.appendChild(pre)
        console.error("Test:", testName, "FAILED", e);
        console.error(e.stack);
      }
    }
    setTimeout(function() {
      // Give document a chance to complete
      if (window.document && document.body) {
        document.body.appendChild(div);
        document.body.style.backgroundColor =
          failures == 0 ? "#99ff99" : "#ff9999";
      }
    }, 0);
  },

  fail: function(msg) {
    throw new Error("fail(): " + msg);
  },

  assert: function(value, msg) {
    if (!value) {
      throw new Error("assert(): " + msg);
    }
  },

  assertEquals: function(expected, actual) {
    if (expected != actual) {
      throw new Error('assertEquals() "' + expected + '" != "' + actual + '"');
    }
  },

  assertStrictEquals: function(expected, actual) {
    if (expected !== actual) {
      throw new Error(
        'assertStrictEquals() "' + expected + '" !== "' + actual + '"'
      );
    }
  }
};

const fail = TinyTest.fail,
  assert = TinyTest.assert,
  assertEquals = TinyTest.assertEquals,
  eq = TinyTest.assertEquals, // alias for assertEquals
  assertStrictEquals = TinyTest.assertStrictEquals,
  tests = TinyTest.run;
