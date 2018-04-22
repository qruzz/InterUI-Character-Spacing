var that = this;
function __skpm_run (key, context) {
  that.context = context;

var exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/my-command.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/my-command.js":
/*!***************************!*\
  !*** ./src/my-command.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function adjustFontForLayer(layer) {
  var fontSize = layer.fontSize();
  var characterSpacings = {
    6: 0.33,
    7: 0.264,
    8: 0.204,
    9: 0.144,
    10: 0.108,
    11: 0.072,
    12: 0.042,
    13: 0.018,
    14: 0.006,
    15: -0.012,
    16: -0.024,
    17: -0.036,
    18: -0.048,
    20: -0.05,
    24: -0.078,
    30: -0.09,
    40: -0.096
  };

  if (characterSpacings[fontSize] != nil) {
    return layer.setCharacterSpacing(characterSpacings[fontSize]);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (function (context) {
  var selectedLayers = context.selection;
  var selectedCount = selectedLayers.length;
  selectedLayers.forEach(function (layer) {
    if (layer.isKindOfClass(MSTextLayer)) {
      var fontName = layer.fontPostscriptName();

      if (fontName.hasPrefix("InterUI") || fontName.hasPrefix("Inter UI")) {
        adjustFontForLayer(layer);

        if (selectedCount === 1) {
          context.document.showMessage("\uD83D\uDE4C ".concat(selectedCount, " layer was corrected"));
        } else {
          context.document.showMessage("\uD83D\uDE4C ".concat(selectedCount, " layers were corrected"));
        }
      }
    } else {
      context.document.showMessage("Plugin only works on text layers \uD83D\uDE01");
    }
  });
});

/***/ })

/******/ });
  if (key === 'default' && typeof exports === 'function') {
    exports(context);
  } else {
    exports[key](context);
  }
}
that['onRun'] = __skpm_run.bind(this, 'default')

//# sourceMappingURL=my-command.js.map