(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["EventDrivenResizeObserver"] = factory();
	else
		root["Teronis"] = root["Teronis"] || {}, root["Teronis"]["EventDrivenResizeObserver"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/EventDrivenResizeObserver.ts":
/*!******************************************!*\
  !*** ./src/EventDrivenResizeObserver.ts ***!
  \******************************************/
/*! exports provided: EventDrivenResizeObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventDrivenResizeObserver", function() { return EventDrivenResizeObserver; });
/* harmony import */ var _teronis_js_event_dispatcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @teronis-js/event-dispatcher */ "@teronis-js/event-dispatcher");
/* harmony import */ var _teronis_js_event_dispatcher__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_teronis_js_event_dispatcher__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! resize-observer-polyfill */ "resize-observer-polyfill");
/* harmony import */ var resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_1__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var EventDrivenResizeObserver =
/*#__PURE__*/
function () {
  function EventDrivenResizeObserver() {
    _classCallCheck(this, EventDrivenResizeObserver);

    this.handleResize = this.handleResize.bind(this);
    this.resizeObserver = new resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_1___default.a(this.handleResize);
    this.listOfEventWithTarget = [];
  }

  _createClass(EventDrivenResizeObserver, [{
    key: "observe",
    value: function observe(target, callback) {
      var _this = this;

      var eventWithTarget = this.getEventByTarget(target);

      if (!eventWithTarget) {
        eventWithTarget = {
          target: target,
          event: new _teronis_js_event_dispatcher__WEBPACK_IMPORTED_MODULE_0__["ArgtiveEvent"]()
        };
        this.listOfEventWithTarget.push(eventWithTarget);
        this.resizeObserver.observe(target);
      }

      var unobserve = function unobserve() {
        _this.unobserve(target, callback);
      };

      return unobserve;
    }
  }, {
    key: "unobserve",
    value: function unobserve(target, callback) {
      var eventWithTarget = this.getEventByTarget(target);

      if (eventWithTarget) {
        eventWithTarget.event.unsubscribe(callback);

        if (eventWithTarget.event.length() === 0) {
          this.listOfEventWithTarget = this.listOfEventWithTarget.filter(function (eventWithTarget) {
            return !eventWithTarget.target.isSameNode(target);
          });
        }
      }
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      this.resizeObserver.disconnect();
    }
  }, {
    key: "getEventByTarget",
    value: function getEventByTarget(target) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.listOfEventWithTarget[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var eventWithTarget = _step.value;

          if (eventWithTarget.target.isSameNode(target)) {
            return eventWithTarget;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return null;
    }
  }, {
    key: "handleResize",
    value: function handleResize(entries, observer) {
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = entries[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var entry = _step2.value;
          var eventWithTarget = this.getEventByTarget(entry.target);

          if (eventWithTarget) {
            eventWithTarget.event.invoke(entry, this);
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  }]);

  return EventDrivenResizeObserver;
}();

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: EventDrivenResizeObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EventDrivenResizeObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventDrivenResizeObserver */ "./src/EventDrivenResizeObserver.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventDrivenResizeObserver", function() { return _EventDrivenResizeObserver__WEBPACK_IMPORTED_MODULE_0__["EventDrivenResizeObserver"]; });



/***/ }),

/***/ "@teronis-js/event-dispatcher":
/*!***********************************************!*\
  !*** external "@teronis-js/event-dispatcher" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@teronis-js/event-dispatcher");

/***/ }),

/***/ "resize-observer-polyfill":
/*!*******************************************!*\
  !*** external "resize-observer-polyfill" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("resize-observer-polyfill");

/***/ })

/******/ });
});
//# sourceMappingURL=teronis-js-event-driven-resize-observer-polyfill.js.map