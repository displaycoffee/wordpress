/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./wp-content/themes/dcbase/assets/src/js/bundle.js":
/*!**********************************************************!*\
  !*** ./wp-content/themes/dcbase/assets/src/js/bundle.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ \"./wp-content/themes/dcbase/assets/src/js/functions.js\");\n\n(0,_functions__WEBPACK_IMPORTED_MODULE_0__.addBrowserClass)(); // Run all jquery functions on document ready\n\njQuery(document).ready(function ($) {\n  (0,_functions__WEBPACK_IMPORTED_MODULE_0__.addWidgetContainer)(); //\n  // // Start navigation dropdown menus\n  // initializeDropdownMenu({\n  // \tmain    : '.menu > .menu-item',\n  // \tlabel   : ' > a',\n  // \tcontent : ' > .sub-menu'\n  // });\n  //\n  // // Start the mobile menu\n  // initializeMobileMenu({\n  // \tmenu          : '.navigation-main .menu-primary-container > .menu',\n  // \tmenuContainer : '.navigation-main .menu-primary-container',\n  // \tmobileToggle  : '[data-toggle-mobile]',\n  // \tmobileMenu    : '.navigation-mobile',\n  // \tmobileContent : '.navigation-mobile-content',\n  // \twidth         : 768\n  // });\n});\n\n//# sourceURL=webpack://wordpress/./wp-content/themes/dcbase/assets/src/js/bundle.js?");

/***/ }),

/***/ "./wp-content/themes/dcbase/assets/src/js/functions.js":
/*!*************************************************************!*\
  !*** ./wp-content/themes/dcbase/assets/src/js/functions.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addBrowserClass\": () => (/* binding */ addBrowserClass),\n/* harmony export */   \"addWidgetContainer\": () => (/* binding */ addWidgetContainer)\n/* harmony export */ });\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme */ \"./wp-content/themes/dcbase/assets/src/js/theme.js\");\n // Add browser class to html tag\n\nconst addBrowserClass = () => {\n  const deviceAgent = navigator.userAgent.toLowerCase();\n  const htmlSelector = document.querySelector('html');\n\n  if (deviceAgent.match(/(iphone|ipod|ipad)/)) {\n    htmlSelector.classList.add(_theme__WEBPACK_IMPORTED_MODULE_0__.theme.prefix + '-ios mobile');\n  }\n\n  if (deviceAgent.includes('msie')) {\n    htmlSelector.classList.add(_theme__WEBPACK_IMPORTED_MODULE_0__.theme.prefix + '-ie');\n  } else if (deviceAgent.includes('chrome')) {\n    htmlSelector.classList.add(_theme__WEBPACK_IMPORTED_MODULE_0__.theme.prefix + '-chrome');\n  } else if (deviceAgent.includes('firefox')) {\n    htmlSelector.classList.add(_theme__WEBPACK_IMPORTED_MODULE_0__.theme.prefix + '-firefox');\n  } else if (deviceAgent.includes('safari') && deviceAgent.search('chrome') < 0) {\n    htmlSelector.classList.add(_theme__WEBPACK_IMPORTED_MODULE_0__.theme.prefix + '-safari');\n  } else if (deviceAgent.includes('opera')) {\n    htmlSelector.classList.add(_theme__WEBPACK_IMPORTED_MODULE_0__.theme.prefix + '-opera');\n  }\n}; // $(\".menu-icon\").on(\"click\", function () {\n// $(\"#menu\").toggleClass(\"toggled\");\n// });\n// $(\".menu-toggle\").on(\"keypress\", function(e) {\n// if(e.which == 13) {\n// $(\"#menu\").toggleClass(\"toggled\");\n// }\n// });\n// });\n//\n// Add widget-content container\n\nfunction addWidgetContainer() {\n  var widgets = jQuery('.widget');\n\n  if (widgets && widgets.length) {\n    widgets.each(function () {\n      var current = jQuery(this);\n      current.wrapInner('<div class=\"widget-content\"></div>'); // If there is a widget-title, move it above widget-content\n\n      var widgetTitle = current.find('.widget-title');\n\n      if (widgetTitle && widgetTitle.length) {\n        widgetTitle.prependTo(current);\n      }\n    });\n  }\n} // // Create dropdown toggles\n// function initializeDropdownMenu( config ) {\n// \tconfig = {\n// \t\tdropdown  : config,\n// \t\tclasses   : {\n// \t\t\tlabel   : 'dropdown-label',\n// \t\t\tcontent : 'dropdown-content',\n// \t\t\ttrigger : 'dropdown-trigger',\n// \t\t\thidden  : 'dropdown-hidden',\n// \t\t\tvisible : 'dropdown-visible'\n// \t\t},\n// \t\tselectors : {},\n// \t\thtml      : {}\n// \t};\n//\n// \t// Update object properties\n// \tconfig.selectors.main = jQuery( config.dropdown.main );\n// \tconfig.selectors.trigger = jQuery( '.' + config.classes.trigger );\n// \tconfig.html.label = '<div class=\"' + config.classes.label + '  flex-row-nowrap flex-row-center\"></div>';\n// \tconfig.html.trigger = '<button type=\"button\" class=\"button-link ' + config.classes.trigger + '\" role=\"button\"><span class=\"icon icon-angle-down\"></span></button>';\n//\n// \tif ( config.selectors.main && config.selectors.main.length ) {\n// \t\tconfig.selectors.main.each( function() {\n// \t\t\tvar current = jQuery( this );\n// \t\t\tcurrent.addClass( 'dropdown' );\n//\n// \t\t\t// Don't do any of the below if there is no dropdown content\n// \t\t\tvar dropdownContent = current.find( config.dropdown.content );\n//\n// \t\t\tif ( dropdownContent && dropdownContent.length ) {\n// \t\t\t\tdropdownContent.addClass( config.classes.content );\n//\n// \t\t\t\t// Wrap dropdown text and add trigger element\n// \t\t\t\tcurrent.find( config.dropdown.label ).wrap( config.html.label ).after( config.html.trigger );\n//\n// \t\t\t\t// Add dropdown trigger click\n// \t\t\t\tcurrent.find( '.' + config.classes.trigger ).off().on( 'click', function() {\n// \t\t\t\t\t// Toggle casses on dropdown content\n// \t\t\t\t\tif ( current.hasClass( config.classes.visible ) ) {\n// \t\t\t\t\t\tconfig.selectors.main.removeClass( config.classes.visible ).removeClass( config.classes.hidden );\n// \t\t\t\t\t} else {\n// \t\t\t\t\t\tconfig.selectors.main.removeClass( config.classes.visible ).addClass( config.classes.hidden );\n// \t\t\t\t\t\tcurrent.removeClass( config.classes.hidden ).addClass( config.classes.visible );\n// \t\t\t\t\t}\n// \t\t\t\t});\n// \t\t\t} else {\n// \t\t\t\t// Wrap dropdown text\n// \t\t\t\tcurrent.find( config.dropdown.label ).wrap( config.html.label );\n// \t\t\t}\n// \t\t});\n//\n// \t\t// If anything outside the dropdown trigger is clicked on, hide dropdown\n// \t\tjQuery( document ).off().on( 'click', function( event ) {\n// \t\t\tif ( !jQuery( event.target ).closest( config.dropdown.main ).length ) {\n// \t\t\t\tconfig.selectors.main.removeClass( config.classes.visible ).removeClass( config.classes.hidden );\n// \t\t\t}\n// \t\t});\n// \t}\n// }\n//\n// // Initialize Mobile Menu\n// function initializeMobileMenu( config ) {\n// \tconfig = {\n// \t\tmenu      : config,\n// \t\tclasses   : {\n// \t\t\thidden  : 'navigation-hidden',\n// \t\t\tvisible : 'navigation-visible'\n// \t\t},\n// \t\tselectors : {\n// \t\t\tbody : jQuery( 'body' )\n// \t\t}\n// \t};\n//\n// \t// Update object properties\n// \tconfig.selectors.menu = jQuery( config.menu.menu );\n// \tconfig.selectors.menuContainer = jQuery( config.menu.menuContainer );\n// \tconfig.selectors.mobileToggle = jQuery( config.menu.mobileToggle );\n// \tconfig.selectors.mobileMenu = jQuery( config.menu.mobileMenu );\n// \tconfig.selectors.mobileContent = jQuery( config.menu.mobileContent );\n//\n// \t// Set a mobile false state (for window resize mainly)\n// \tconfig.menu.once = false;\n//\n// \t// Create open / close function\n// \tfunction toggleMobileMenu() {\n// \t\tif ( config.selectors.body.hasClass( config.classes.visible ) ) {\n// \t\t\tconfig.selectors.body.removeClass( config.classes.visible );\n// \t\t} else {\n// \t\t\tconfig.selectors.body.addClass( config.classes.visible );\n// \t\t}\n// \t}\n//\n// \t// Add/remove classes when mobile menu button or overlay is clicked on\n// \tconfig.selectors.mobileToggle.off().on( 'click', function() {\n// \t\ttoggleMobileMenu();\n// \t});\n//\n// \t// Resize actions for mobile menu\n// \tfunction mobileResizeAction() {\n// \t\t// Check if we are on mobile\n// \t\tconfig.menu.isMobile = isMobile( config.menu.width / theme.variables.fontSize );\n//\n// \t\t// Check all sorts of window and document widths to make sure resizing is consistent across browsers\n// \t\tif ( config.menu.isMobile ) {\n// \t\t\t// Check if mobile ones is false, meaning we haven't activated the mobile menu yet\n// \t\t\tif ( !config.menu.once ) {\n// \t\t\t\t// Move menu to menu container\n// \t\t\t\tconfig.selectors.menu.detach().appendTo( config.selectors.mobileContent );\n//\n// \t\t\t\t// After everything has been done, set mobile to true so it's not run again on resize\n// \t\t\t\tconfig.menu.once = true;\n// \t\t\t}\n// \t\t} else {\n// \t\t\t// Check if mobile is true, meaning we're resizing and want to clean up on resize\n// \t\t\tif ( config.menu.once ) {\n// \t\t\t\t// Remove close button, replace menu, remove slide menu toggle, and remove any extra classes\n// \t\t\t\tconfig.selectors.menu.detach().appendTo( config.selectors.menuContainer );\n// \t\t\t\tconfig.selectors.body.removeClass( config.classes.visible );\n//\n// \t\t\t\t// Then set mobile to false again so we can start over\n// \t\t\t\tconfig.menu.once = false;\n// \t\t\t}\n// \t\t}\n// \t}\n//\n// \t// Call mobile menu once if browser is brought up or refreshed\n// \tmobileResizeAction();\n//\n// \t// Then run mobile menu on resizing using debounce\n// \tvar resizeMenuForMobile = debounce( function() {\n// \t\tmobileResizeAction();\n// \t}, 100 );\n// \twindow.addEventListener( 'resize', resizeMenuForMobile );\n// }\n\n//# sourceURL=webpack://wordpress/./wp-content/themes/dcbase/assets/src/js/functions.js?");

/***/ }),

/***/ "./wp-content/themes/dcbase/assets/src/js/theme.js":
/*!*********************************************************!*\
  !*** ./wp-content/themes/dcbase/assets/src/js/theme.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"obj\": () => (/* binding */ obj),\n/* harmony export */   \"theme\": () => (/* binding */ theme)\n/* harmony export */ });\nvar prefix = 'dcbase';\nvar obj = {\n  lang: 'dcbase',\n  prefix: prefix,\n  classes: {},\n  variables: {\n    bottom: document.body.scrollHeight + window.innerHeight,\n    fontSize: 16\n  }\n};\nlet theme = {\n  lang: 'dcbase',\n  prefix: prefix,\n  classes: {},\n  variables: {\n    bottom: document.body.scrollHeight + window.innerHeight,\n    fontSize: 16\n  },\n  isMobile: respond => {\n    // Check if on mobile\n    const windowWidth = window.innerWidth / undefined.variables.fontSize;\n    const docWidth = document.documentElement.clientWidth / undefined.variables.fontSize;\n    const bodyWidth = document.body.clientWidth / undefined.variables.fontSize;\n\n    if ((windowWidth || docWidth || bodyWidth) <= respond) {\n      return true;\n    } else {\n      return false;\n    }\n  },\n  debounce: (func, wait, immediate) => {\n    // Debounce function from underscore.js and https://davidwalsh.name/javascript-debounce-function\n    let timeout;\n    return function () {\n      const context = this;\n      const args = arguments;\n\n      let later = function () {\n        timeout = null;\n\n        if (!immediate) {\n          func.apply(context, args);\n        }\n      };\n\n      const callNow = immediate && !timeout;\n      clearTimeout(timeout);\n      timeout = setTimeout(later, wait);\n\n      if (callNow) {\n        func.apply(context, args);\n      }\n    };\n  }\n}; // // Check if substring is in string\n// export function inString( value, search ) {\n// \treturn ( value.indexOf(search) !== -1 ) ? true : false;\n// }\n// // Check for mobile\n// export function isMobile( respond ) {\n// \tvar windowWidth = ( window.innerWidth / obj.variables.fontSize );\n// \tvar docWidth = ( document.documentElement.clientWidth / obj.variables.fontSize );\n// \tvar bodyWidth = ( document.body.clientWidth / obj.variables.fontSize );\n// \tif ( ( windowWidth || docWidth || bodyWidth ) <= respond ) {\n// \t\treturn true;\n// \t} else {\n// \t\treturn false;\n// \t}\n// }\n// Debounce function from underscore.js and https://davidwalsh.name/javascript-debounce-function\n// export function debounce( func, wait, immediate ) {\n// \tvar timeout;\n// \treturn function() {\n// \t\tvar context = this, args = arguments;\n// \t\tvar later = function() {\n// \t\t\ttimeout = null;\n// \t\t\tif ( !immediate ) {\n// \t\t\t\tfunc.apply( context, args );\n// \t\t\t}\n// \t\t};\n// \t\tvar callNow = immediate && !timeout;\n// \t\tclearTimeout( timeout );\n// \t\ttimeout = setTimeout( later, wait );\n// \t\tif ( callNow ) {\n// \t\t\tfunc.apply( context, args );\n// \t\t}\n// \t};\n// };\n\n//# sourceURL=webpack://wordpress/./wp-content/themes/dcbase/assets/src/js/theme.js?");

/***/ }),

/***/ "./wp-content/themes/dcbase/assets/src/scss/styles.scss":
/*!**************************************************************!*\
  !*** ./wp-content/themes/dcbase/assets/src/scss/styles.scss ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://wordpress/./wp-content/themes/dcbase/assets/src/scss/styles.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./wp-content/themes/dcbase/assets/src/js/bundle.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./wp-content/themes/dcbase/assets/src/scss/styles.scss");
/******/ 	
/******/ })()
;