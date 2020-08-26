require('./../../runtime.js');
require('./../../remax-vendors.js');
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/page1/index"],{

/***/ "./src/pages/page1/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/page1/index.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var remax_wechat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! remax/wechat */ "./node_modules/remax/wechat.js");


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var _page = function _page() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: function onClick() {
      return Object(remax_wechat__WEBPACK_IMPORTED_MODULE_2__["navigateTo"])({
        url: '/pages/page2/index'
      });
    }
  }, "\u70B9\u6211\u53BBpage2"), new Array(100).fill(0).map(function (_, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Test, {
      key: i
    });
  }));
};

_page.displayName = "Page[pages/page1/index]";
/* harmony default export */ __webpack_exports__["default"] = (Page(Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_page, "pages/page1/index")));

var Test = function Test() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1),
      _useState2 = _slicedToArray(_useState, 2),
      a = _useState2[0],
      setA = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (a < 90) {
      setA(a + 1);
    }
  }, [a]);
  var b = a % 3;
  return b === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], null, "233") : b === 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["Image"], null) : b === 2 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["Text"], null, "233") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["Button"], null, "233");
};

/***/ })

},[["./src/pages/page1/index.tsx","runtime","remax-vendors"]]]);