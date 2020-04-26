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