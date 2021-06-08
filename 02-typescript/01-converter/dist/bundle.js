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

eval("\nconst fahrenheitInput = document.querySelector('#fahrenheitInput');\nconst celsiusInput = document.querySelector('#celsiusInput');\nconst fahrenheitResult = document.querySelector('#fahrenheitResult');\nconst celsiusResult = document.querySelector('#celsiusResult');\nif (!(fahrenheitInput instanceof HTMLInputElement)) {\n    throw new Error(\"No input element with an id 'F' found\");\n}\nif (!(celsiusInput instanceof HTMLInputElement)) {\n    throw new Error(\"No input element with an id 'C' found\");\n}\nif (!(fahrenheitResult instanceof HTMLSpanElement)) {\n    throw new Error(\"No input element with an id 'C' found\");\n}\nif (!(celsiusResult instanceof HTMLSpanElement)) {\n    throw new Error(\"No input element with an id 'C' found\");\n}\nconst NaNHandler = (input) => {\n    const number = parseFloat(input.value);\n    return isNaN(number) ? 0 : number;\n};\nfahrenheitInput.addEventListener('input', () => {\n    // checks if the input is empty then returns other inputs and innerText empty\n    if (fahrenheitInput.value === '') {\n        celsiusInput.value = \"\";\n        celsiusResult.innerText = \"\";\n        fahrenheitResult.innerText = \"\";\n        return true;\n    }\n    celsiusInput.value = ((NaNHandler(fahrenheitInput) - 32) * 5 / 9).toString();\n    fahrenheitResult.innerText = ((NaNHandler(celsiusInput) * 9 / 5) + 32).toString();\n    celsiusResult.innerText = ((NaNHandler(fahrenheitInput) - 32) * 5 / 9).toString();\n});\ncelsiusInput.addEventListener('input', () => {\n    // checks if the input is empty then returns other inputs and innerText empty\n    if (celsiusInput.value === '') {\n        fahrenheitInput.value = \"\";\n        celsiusResult.innerText = \"\";\n        fahrenheitResult.innerText = \"\";\n        return true;\n    }\n    fahrenheitInput.value = ((NaNHandler(celsiusInput) * 9 / 5) + 32).toString();\n    fahrenheitResult.innerText = ((NaNHandler(celsiusInput) * 9 / 5) + 32).toString();\n    celsiusResult.innerText = ((NaNHandler(fahrenheitInput) - 32) * 5 / 9).toString();\n});\n\n\n//# sourceURL=webpack://01-conversion/./src/main.ts?");

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