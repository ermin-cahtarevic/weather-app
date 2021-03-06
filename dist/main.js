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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../img/clear.jpg */ \"./src/img/clear.jpg\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\n// Module\nexports.push([module.i, \"body {\\n  background-color: rgb(19, 37, 71);\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background-repeat: no-repeat;\\n  background-size: cover;\\n  background-position: center center;\\n  margin: 0;\\n  padding: 0;\\n  height: 100vh;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  font-family: Arial, Helvetica, sans-serif;\\n}\\n\\n/* error */\\n\\n#error {\\n  position: absolute;\\n  top: -55px;\\n  width: 900px;\\n  height: 50px;\\n  background-color: rgba(158, 17, 17, 0.9);\\n  color: white;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  border-radius: 10px;\\n}\\n\\n.error-show {\\n  transform: translateY(60px);\\n}\\n\\n#main {\\n  border: 4px solid white;\\n  border-radius: 10px;\\n  width: 900px;\\n  max-width: 900px;\\n  height: 700px;\\n  background-color: rgba(19, 37, 71, 0.7);\\n}\\n\\n.search-wrap {\\n  height: 200px;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.search-form {\\n  margin-top: 35px;\\n}\\n\\n.search-form input {\\n  font-size: 16px;\\n  margin: 0;\\n  padding: 7px 15px;\\n  background-color: rgb(19, 37, 71);\\n  color: white;\\n  outline: none;\\n  border: 2px solid white;\\n  border-radius: 20px;\\n}\\n\\n.search-form input:focus {\\n  background-color: white;\\n  color: rgb(10, 18, 34);\\n}\\n\\n.btn {\\n  background-color: rgb(19, 37, 71);\\n  color: white;\\n  outline: none;\\n  border: 2px solid white;\\n  border-radius: 20px;\\n  font-size: 16px;\\n  padding: 7px 15px;\\n  margin: 0;\\n  transition: background-color 0.3s ease-out,\\n              color 0.3s ease-out;\\n}\\n\\n.btn:hover {\\n  background-color: white;\\n  color: rgb(19, 37, 71);\\n  cursor: pointer;\\n}\\n\\n.data-wrap {\\n  color: white;\\n  width: 100%;\\n  height: 500px;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  padding-bottom: 50px;\\n}\\n\\n.location {\\n  font-size: 24px;\\n  margin-bottom: 60px;\\n}\\n\\n.temperature-wrap {\\n  width: 100%;\\n  text-align: center;\\n}\\n\\n.temperature {\\n  font-weight: bold;\\n}\\n\\n.temperature-wrap .temperature,\\n.temperature-wrap .unit-toggle {\\n  font-size: 55px;\\n}\\n\\n.temperature-wrap .unit-toggle {\\n  text-decoration: none;\\n  color: white;\\n}\\n\\n.weather-type {\\n  margin-top: 15px;\\n  font-size: 22px;\\n}\\n\\n.misc-wrap {\\n  display: flex;\\n  justify-content: space-between;\\n  width: 500px;\\n  margin-top: 80px;\\n}\\n\\n.humidity-wrap,\\n.wind-wrap {\\n  text-align: center;\\n}\\n\\n.humidity-wrap i,\\n.wind-wrap i {\\n  margin-right: 5px;\\n}\\n\\n.humidity-wrap i,\\n.wind-wrap i,\\n.humidity-wrap .humidity,\\n.wind-wrap .wind {\\n  font-size: 28px;\\n}\\n\\n.load-wrap {\\n  width: 100%;\\n  height: 300px;\\n  color: white;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.load-wrap p {\\n  font-size: 18px;\\n  margin-bottom: 50px;\\n}\\n\\n.loader {\\n  border: 5px solid #f3f3f3; /* Light grey */\\n  border-top: 5px solid rgb(19, 37, 71); /* Blue */\\n  border-radius: 50%;\\n  width: 40px;\\n  height: 40px;\\n  animation: spin 2s linear infinite;\\n\\n}\\n\\n@keyframes spin {\\n  0% { transform: rotate(0deg); }\\n  100% { transform: rotate(360deg); }\\n}\\n\\n.d-none {\\n  display: none;\\n}\\n\\n@media only screen and (max-width: 900px) {\\n  body {\\n    background-size: cover;\\n  }\\n\\n  #error {\\n    width: 100%;\\n  }\\n\\n  #main {\\n    border: none;\\n    border-radius: 0;\\n    width: 100%;\\n    height: inherit;\\n  }\\n\\n  #get-location {\\n    margin-top: 105px;\\n  }\\n\\n  .search-wrap {\\n    height: auto;\\n    padding-bottom: 40px;\\n  }\\n\\n  .search-form {\\n    display: flex;\\n    flex-direction: column;\\n    margin-top: 40px;\\n  }\\n\\n  #search {\\n    margin-top: 10px;\\n  }\\n\\n  .p-text {\\n    text-align: center;\\n  }\\n\\n  .misc-wrap {\\n    flex-direction: column;\\n    margin-top: 40px;\\n    width: 100%;\\n  }\\n\\n  .wind-wrap {\\n    margin-top: 40px;\\n  }\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/*! exports provided: getSearchData, getLocationData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getSearchData\", function() { return getSearchData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getLocationData\", function() { return getLocationData; });\n/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error */ \"./src/error.js\");\n\n\nconst apiId = 'ef6615ba447292811b06a9a82b11ecd9';\n\nconst getSearchData = async (location, unit) => {\n  let returnValue = {};\n  try {\n    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=${unit}&APPID=${apiId}`,\n      { mode: 'cors' });\n    const weatherData = await response.json();\n    returnValue = {\n      city: `${weatherData.city.name}, ${weatherData.city.country}`,\n      temp: Math.round(weatherData.list[0].main.temp),\n      weather: weatherData.list[0].weather[0].main,\n      humidity: weatherData.list[0].main.humidity,\n      wind: weatherData.list[0].wind.speed,\n      iconId: weatherData.list[0].weather[0].icon,\n    };\n  } catch (err) {\n    Object(_error__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('City not found! Please check your spelling.');\n  }\n  return returnValue;\n};\n\nconst getLocationData = async (lat, lon, unit) => {\n  let returnValue = {};\n  try {\n    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=${unit}&APPID=${apiId}`,\n      { mode: 'cors' });\n    const weatherData = await response.json();\n    returnValue = {\n      city: `${weatherData.city.name}, ${weatherData.city.country}`,\n      temp: Math.round(weatherData.list[0].main.temp),\n      weather: weatherData.list[0].weather[0].main,\n      humidity: weatherData.list[0].main.humidity,\n      wind: weatherData.list[0].wind.speed,\n      iconId: weatherData.list[0].weather[0].icon,\n    };\n  } catch (err) {\n    Object(_error__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Please check your input!');\n  }\n  return returnValue;\n};\n\n\n\n//# sourceURL=webpack:///./src/api.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/css/style.css?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/*! exports provided: render, checkForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkForm\", function() { return checkForm; });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/helpers.js\");\n\n\nconst main = document.querySelector('#main');\nconst cityDisplay = document.querySelector('.location');\nconst weatherDisplay = document.querySelector('.weather-type');\nconst tempDisplay = document.querySelector('.temperature');\nconst humidityDisplay = document.querySelector('.humidity');\nconst windDisplay = document.querySelector('.wind');\nconst unitToggle = document.querySelector('.unit-toggle');\n\nconst loadWrap = document.createElement('div');\nconst loader = document.createElement('div');\nconst p = document.createElement('p');\np.classList.add('p-text');\n\np.innerHTML = \"Please click the 'Get my location' button or search for a location.\";\nloadWrap.classList.add('load-wrap');\nloader.classList.add('loader');\n\nloadWrap.appendChild(p);\nloadWrap.appendChild(loader);\nmain.appendChild(loadWrap);\n\nconst render = (city, temp, weather, humidity, wind, iconId, unit) => {\n  loadWrap.classList.add('d-none');\n  document.querySelector('.data-wrap').classList.remove('d-none');\n  Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"getBackgroundImg\"])(iconId);\n  cityDisplay.innerHTML = city;\n  weatherDisplay.innerHTML = weather;\n  tempDisplay.innerHTML = temp;\n  humidityDisplay.innerHTML = `${humidity}%`;\n  if (unit === 'metric') {\n    unitToggle.innerHTML = '°C';\n    windDisplay.innerHTML = `${(wind * 3.6).toFixed(2)} km/h`;\n  } else if (unit === 'imperial') {\n    unitToggle.innerHTML = '°F';\n    windDisplay.innerHTML = `${wind.toFixed(2)} m/h`;\n  }\n\n  Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"clearForm\"])();\n};\n\nconst checkForm = () => document.querySelector('#search-input').value !== '';\n\n\n\n//# sourceURL=webpack:///./src/dom.js?");

/***/ }),

/***/ "./src/error.js":
/*!**********************!*\
  !*** ./src/error.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst errorDisplay = document.querySelector('#error');\n\nconst error = (errorText) => {\n  errorDisplay.innerHTML = errorText;\n  errorDisplay.classList.add('error-show');\n  setTimeout(() => errorDisplay.classList.remove('error-show'), 5000);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (error);\n\n//# sourceURL=webpack:///./src/error.js?");

/***/ }),

/***/ "./src/events.js":
/*!***********************!*\
  !*** ./src/events.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ \"./src/api.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error */ \"./src/error.js\");\n\n\n\n\nlet location = '';\nlet unit = 'metric';\nconst searchBtn = document.querySelector('#search');\nconst getLocation = document.querySelector('#get-location');\nconst unitToggle = document.querySelector('.unit-toggle');\n\nsearchBtn.onclick = () => {\n  if (Object(_dom__WEBPACK_IMPORTED_MODULE_1__[\"checkForm\"])()) {\n    location = document.querySelector('#search-input').value;\n    Object(_api__WEBPACK_IMPORTED_MODULE_0__[\"getSearchData\"])(location, unit)\n      .then(response => {\n        if (Object.keys(response).length === 0 && response.constructor === Object) {\n          return false;\n        }\n        Object(_dom__WEBPACK_IMPORTED_MODULE_1__[\"render\"])(\n          response.city,\n          response.temp,\n          response.weather,\n          response.humidity,\n          response.wind,\n          response.iconId,\n          unit,\n        );\n        return false;\n      })\n      .catch(err => {\n        Object(_error__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(err);\n      });\n  } else {\n    Object(_error__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('Please fill out the search field!');\n  }\n};\n\ngetLocation.onclick = () => {\n  if (navigator.geolocation) {\n    navigator.geolocation.getCurrentPosition(position => {\n      const lat = position.coords.latitude.toFixed(3);\n      const lon = position.coords.longitude.toFixed(3);\n      Object(_api__WEBPACK_IMPORTED_MODULE_0__[\"getLocationData\"])(lat, lon, unit)\n        .then(response => {\n          location = response.city;\n          if (Object.keys(response).length === 0 && response.constructor === Object) {\n            return false;\n          }\n          Object(_dom__WEBPACK_IMPORTED_MODULE_1__[\"render\"])(\n            response.city,\n            response.temp,\n            response.weather,\n            response.humidity,\n            response.wind,\n            response.iconId,\n            unit,\n          );\n          return false;\n        })\n        .catch(err => {\n          Object(_error__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(err)\n        });\n    });\n  } else {\n    Object(_error__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('Geolocation is not supported by this browser. Please try searching for your location.');\n  }\n};\n\nunitToggle.onclick = () => {\n  if (unitToggle.innerHTML === '°C') {\n    Object(_api__WEBPACK_IMPORTED_MODULE_0__[\"getSearchData\"])(location, 'imperial')\n      .then(response => {\n        Object(_dom__WEBPACK_IMPORTED_MODULE_1__[\"render\"])(response.city, response.temp, response.weather, response.humidity, response.wind, response.iconId, 'imperial');\n        unit = 'imperial';\n      })\n      .catch(err => {\n        Object(_error__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(err);\n      });\n  } else if (unitToggle.innerHTML === '°F') {\n    Object(_api__WEBPACK_IMPORTED_MODULE_0__[\"getSearchData\"])(location, 'metric')\n      .then(response => {\n        Object(_dom__WEBPACK_IMPORTED_MODULE_1__[\"render\"])(response.city, response.temp, response.weather, response.humidity, response.wind, response.iconId, 'metric');\n        unit = 'metric';\n      })\n      .catch(err => {\n        Object(_error__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(err);\n      });\n  }\n};\n\n//# sourceURL=webpack:///./src/events.js?");

/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/*! exports provided: clearForm, getBackgroundImg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearForm\", function() { return clearForm; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getBackgroundImg\", function() { return getBackgroundImg; });\n/* harmony import */ var _img_clear_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/clear.jpg */ \"./src/img/clear.jpg\");\n/* harmony import */ var _img_clear_night_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/clear-night.jpg */ \"./src/img/clear-night.jpg\");\n/* harmony import */ var _img_cloudy_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/cloudy.jpg */ \"./src/img/cloudy.jpg\");\n/* harmony import */ var _img_broken_clouds_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/broken-clouds.jpg */ \"./src/img/broken-clouds.jpg\");\n/* harmony import */ var _img_few_clouds_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/few-clouds.jpg */ \"./src/img/few-clouds.jpg\");\n/* harmony import */ var _img_mist_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/mist.jpg */ \"./src/img/mist.jpg\");\n/* harmony import */ var _img_rain_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/rain.jpg */ \"./src/img/rain.jpg\");\n/* harmony import */ var _img_snow_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/snow.jpg */ \"./src/img/snow.jpg\");\n/* harmony import */ var _img_thunderstorm_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./img/thunderstorm.jpg */ \"./src/img/thunderstorm.jpg\");\n\n\n\n\n\n\n\n\n\n\nconst clearForm = () => {\n  document.querySelector('#search-input').value = '';\n};\n\nconst getBackgroundImg = (id) => {\n  const body = document.querySelector('body');\n  switch (id) {\n    case '01d':\n      body.style.backgroundImage = `url('${_img_clear_jpg__WEBPACK_IMPORTED_MODULE_0__[\"default\"]}')`;\n      break;\n    case '01n':\n      body.style.backgroundImage = `url('${_img_clear_night_jpg__WEBPACK_IMPORTED_MODULE_1__[\"default\"]}')`;\n      break;\n    case '02d':\n      body.style.backgroundImage = `url('${_img_few_clouds_jpg__WEBPACK_IMPORTED_MODULE_4__[\"default\"]}')`;\n      break;\n    case '02n':\n    case '03n':\n    case '04n':\n    case '04d':\n      body.style.backgroundImage = `url('${_img_broken_clouds_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"]}')`;\n      break;\n    case '03d':\n      body.style.backgroundImage = `url('${_img_cloudy_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"]}')`;\n      break;\n    case '09d':\n    case '09n':\n    case '10d':\n    case '10n':\n      body.style.backgroundImage = `url('${_img_rain_jpg__WEBPACK_IMPORTED_MODULE_6__[\"default\"]}')`;\n      break;\n    case '11d':\n    case '11n':\n      body.style.backgroundImage = `url('${_img_thunderstorm_jpg__WEBPACK_IMPORTED_MODULE_8__[\"default\"]}')`;\n      break;\n    case '13d':\n    case '13n':\n      body.style.backgroundImage = `url('${_img_snow_jpg__WEBPACK_IMPORTED_MODULE_7__[\"default\"]}')`;\n      break;\n    case '50d':\n    case '50n':\n      body.style.backgroundImage = `url('${_img_mist_jpg__WEBPACK_IMPORTED_MODULE_5__[\"default\"]}')`;\n      break;\n\n    default:\n      body.style.backgroundImage = `url('${_img_clear_jpg__WEBPACK_IMPORTED_MODULE_0__[\"default\"]}')`;\n      break;\n  }\n};\n\n\n\n//# sourceURL=webpack:///./src/helpers.js?");

/***/ }),

/***/ "./src/img/broken-clouds.jpg":
/*!***********************************!*\
  !*** ./src/img/broken-clouds.jpg ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"3ee2f6140e33b4559cb756416938ccc5.jpg\");\n\n//# sourceURL=webpack:///./src/img/broken-clouds.jpg?");

/***/ }),

/***/ "./src/img/clear-night.jpg":
/*!*********************************!*\
  !*** ./src/img/clear-night.jpg ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"d3d5cfbe857b95647fd2ae4ac07eea96.jpg\");\n\n//# sourceURL=webpack:///./src/img/clear-night.jpg?");

/***/ }),

/***/ "./src/img/clear.jpg":
/*!***************************!*\
  !*** ./src/img/clear.jpg ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"873ebd360d855351f918f78228751f88.jpg\");\n\n//# sourceURL=webpack:///./src/img/clear.jpg?");

/***/ }),

/***/ "./src/img/cloudy.jpg":
/*!****************************!*\
  !*** ./src/img/cloudy.jpg ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"5305583984277d013635f3d29248acb7.jpg\");\n\n//# sourceURL=webpack:///./src/img/cloudy.jpg?");

/***/ }),

/***/ "./src/img/few-clouds.jpg":
/*!********************************!*\
  !*** ./src/img/few-clouds.jpg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"b9b896600539557f561a0df2453121ef.jpg\");\n\n//# sourceURL=webpack:///./src/img/few-clouds.jpg?");

/***/ }),

/***/ "./src/img/mist.jpg":
/*!**************************!*\
  !*** ./src/img/mist.jpg ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"5789344ff355fdfe31c4d4363aa2badf.jpg\");\n\n//# sourceURL=webpack:///./src/img/mist.jpg?");

/***/ }),

/***/ "./src/img/rain.jpg":
/*!**************************!*\
  !*** ./src/img/rain.jpg ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"911c96a599e1bc365272cb990f019165.jpg\");\n\n//# sourceURL=webpack:///./src/img/rain.jpg?");

/***/ }),

/***/ "./src/img/snow.jpg":
/*!**************************!*\
  !*** ./src/img/snow.jpg ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"256cc4a703d75f562b90b776b1625c96.jpg\");\n\n//# sourceURL=webpack:///./src/img/snow.jpg?");

/***/ }),

/***/ "./src/img/thunderstorm.jpg":
/*!**********************************!*\
  !*** ./src/img/thunderstorm.jpg ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"edcb48720245f9515320eccb29be9721.jpg\");\n\n//# sourceURL=webpack:///./src/img/thunderstorm.jpg?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events */ \"./src/events.js\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });