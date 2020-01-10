/* --- Module Definition --- */

	// Export js-helpers for CommonJS. If being loaded as an AMD module, define it as such.
	// Otherwise, just add `helperjs` to the global object
	if (typeof exports !== 'undefined') {
		if (typeof module !== 'undefined' && module.exports) {
			exports = module.exports = lib;
		}
		exports.accounting = lib;
	} else if (typeof define === 'function' && define.amd) {
		// Return the library as an AMD module:
		define([], function() {
			return lib;
		});
	} else {
		lib.noConflict = (function(helper) {
			return function() {
				root.helper = helper;
				// Delete the noConflict method:
				lib.noConflict = undefined;
				// Return reference to the library to re-assign it:
				return lib;
			};
		})(root.accounting);

		// Declare `fx` on the root (global/window) object:
		root['helper'] = lib;
	}

	// Root will be `window` in browser or `global` on the server:
}(this));