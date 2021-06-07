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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (() => {

eval("\nconst fInput = document.querySelector('#F');\nconst cInput = document.querySelector('#C');\nconst fN = document.querySelector('#fN');\nconst cN = document.querySelector('#cN');\nif (!(fInput instanceof HTMLInputElement)) {\n    throw new Error(\"No input element with an id 'F' found\");\n}\nif (!(cInput instanceof HTMLInputElement)) {\n    throw new Error(\"No input element with an id 'C' found\");\n}\nif (!(fN instanceof HTMLSpanElement)) {\n    throw new Error(\"No input element with an id 'C' found\");\n}\nif (!(cN instanceof HTMLSpanElement)) {\n    throw new Error(\"No input element with an id 'C' found\");\n}\nfInput.addEventListener('input', () => {\n    cInput.value = ((parseFloat(fInput.value) - 32) * 5 / 9).toString();\n    fN.innerText = ((parseFloat(cInput.value) * 9 / 5) + 32).toString();\n    cN.innerText = ((parseFloat(fInput.value) - 32) * 5 / 9).toString();\n});\ncInput.addEventListener('input', () => {\n    fInput.value = ((parseFloat(cInput.value) * 9 / 5) + 32).toString();\n    fN.innerText = ((parseFloat(cInput.value) * 9 / 5) + 32).toString();\n    cN.innerText = ((parseFloat(fInput.value) - 32) * 5 / 9).toString();\n});\n\n\n//# sourceURL=webpack://01-conversion/./src/main.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/main.ts"]();
/******/ 	
/******/ })()
;