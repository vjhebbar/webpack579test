/*! For license information please see bundle.js.LICENSE.txt */
(()=>{"use strict";var __webpack_modules__={"./src/colors.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "w": () => (/* binding */ Colors)\n/* harmony export */ });\nvar Colors;\n(function (Colors) {\n    Colors["Red"] = "Red";\n    Colors["Green"] = "Green";\n})(Colors || (Colors = {}));\n\n\n//# sourceURL=webpack://webpack_579_test/./src/colors.ts?')},"./src/index.ts":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{eval('/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colors */ "./src/colors.ts");\n\nfunction printComponents() {\n    console.log(_colors__WEBPACK_IMPORTED_MODULE_0__/* .Colors.Red */ .w.Red);\n    console.log(_colors__WEBPACK_IMPORTED_MODULE_0__/* .Colors.Green */ .w.Green);\n    // const { Red, Green } = Colors;\n    console.log(_colors__WEBPACK_IMPORTED_MODULE_0__/* .Colors.Red */ .w.Red);\n    console.log(_colors__WEBPACK_IMPORTED_MODULE_0__/* .Colors.Green */ .w.Green);\n}\nprintComponents();\n\n\n//# sourceURL=webpack://webpack_579_test/./src/index.ts?')}},__webpack_module_cache__={};function __webpack_require__(_){var e=__webpack_module_cache__[_];if(void 0!==e)return e.exports;var o=__webpack_module_cache__[_]={exports:{}};return __webpack_modules__[_](o,o.exports,__webpack_require__),o.exports}__webpack_require__.d=(_,e)=>{for(var o in e)__webpack_require__.o(e,o)&&!__webpack_require__.o(_,o)&&Object.defineProperty(_,o,{enumerable:!0,get:e[o]})},__webpack_require__.o=(_,e)=>Object.prototype.hasOwnProperty.call(_,e);var __webpack_exports__=__webpack_require__("./src/index.ts")})();