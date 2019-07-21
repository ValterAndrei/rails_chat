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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/hello_react.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/hello_react.jsx":
/*!**********************************************!*\
  !*** ./app/javascript/packs/hello_react.jsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /usr/src/app/app/javascript/packs/hello_react.jsx: Unterminated string constant (21:26)\n\n  19 | }\n  20 | \n> 21 | document.addEventListener('DOMContent\n     |                           ^\n  22 | Loaded', () => {\n  23 |   ReactDOM.render(\n  24 |     <Hello name=\"Valter\" />,\n    at Object.raise (/usr/src/app/node_modules/@babel/parser/lib/index.js:6325:17)\n    at Object.readString (/usr/src/app/node_modules/@babel/parser/lib/index.js:7275:14)\n    at Object.getTokenFromCode (/usr/src/app/node_modules/@babel/parser/lib/index.js:6954:14)\n    at Object.getTokenFromCode (/usr/src/app/node_modules/@babel/parser/lib/index.js:3633:18)\n    at Object.nextToken (/usr/src/app/node_modules/@babel/parser/lib/index.js:6525:12)\n    at Object.next (/usr/src/app/node_modules/@babel/parser/lib/index.js:6465:10)\n    at Object.parseSubscript (/usr/src/app/node_modules/@babel/parser/lib/index.js:8509:12)\n    at Object.parseSubscripts (/usr/src/app/node_modules/@babel/parser/lib/index.js:8433:19)\n    at Object.parseExprSubscripts (/usr/src/app/node_modules/@babel/parser/lib/index.js:8422:17)\n    at Object.parseMaybeUnary (/usr/src/app/node_modules/@babel/parser/lib/index.js:8392:21)\n    at Object.parseExprOps (/usr/src/app/node_modules/@babel/parser/lib/index.js:8267:23)\n    at Object.parseMaybeConditional (/usr/src/app/node_modules/@babel/parser/lib/index.js:8240:23)\n    at Object.parseMaybeAssign (/usr/src/app/node_modules/@babel/parser/lib/index.js:8187:21)\n    at Object.parseExpression (/usr/src/app/node_modules/@babel/parser/lib/index.js:8135:23)\n    at Object.parseStatementContent (/usr/src/app/node_modules/@babel/parser/lib/index.js:9958:23)\n    at Object.parseStatement (/usr/src/app/node_modules/@babel/parser/lib/index.js:9829:17)\n    at Object.parseBlockOrModuleBlockBody (/usr/src/app/node_modules/@babel/parser/lib/index.js:10405:25)\n    at Object.parseBlockBody (/usr/src/app/node_modules/@babel/parser/lib/index.js:10392:10)\n    at Object.parseTopLevel (/usr/src/app/node_modules/@babel/parser/lib/index.js:9758:10)\n    at Object.parse (/usr/src/app/node_modules/@babel/parser/lib/index.js:11270:17)\n    at parse (/usr/src/app/node_modules/@babel/parser/lib/index.js:11306:38)\n    at parser (/usr/src/app/node_modules/@babel/core/lib/transformation/normalize-file.js:170:34)\n    at normalizeFile (/usr/src/app/node_modules/@babel/core/lib/transformation/normalize-file.js:138:11)\n    at runSync (/usr/src/app/node_modules/@babel/core/lib/transformation/index.js:44:43)\n    at runAsync (/usr/src/app/node_modules/@babel/core/lib/transformation/index.js:35:14)\n    at process.nextTick (/usr/src/app/node_modules/@babel/core/lib/transform.js:34:34)\n    at processTicksAndRejections (internal/process/task_queues.js:79:9)");

/***/ })

/******/ });
//# sourceMappingURL=hello_react-2ba0c71f7bea69cb531d.js.map