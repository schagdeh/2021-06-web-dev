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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nconst appDiv = document.getElementById('app');\nif (!(appDiv instanceof HTMLDivElement)) {\n    throw new Error('No element with Id \"app\" found');\n}\n;\nconst toDoes = [\n    { title: 'TypeScript', done: true },\n    { title: 'ReactJS', done: true },\n    { title: 'NodeJS', done: false },\n    { title: 'ExpressJS', done: false },\n];\nconst render = () => {\n    appDiv.innerHTML = \"\";\n    const toDoUl = document.createElement('ul');\n    toDoUl.setAttribute('class', 'ulStyle');\n    for (const toDo of toDoes) {\n        const toDoLi = document.createElement('li');\n        toDoLi.setAttribute('class', 'listStyle');\n        const p = document.createElement('p');\n        p.setAttribute('class', 'pStyle');\n        const span = document.createElement('span');\n        toDoLi.appendChild(p);\n        toDoLi.appendChild(span);\n        p.textContent = toDo.title;\n        span.textContent = toDo.done.toString();\n        toDoUl.appendChild(toDoLi);\n        console.log(toDoLi);\n    }\n    appDiv.appendChild(toDoUl);\n};\nrender();\n\n\n\n//# sourceURL=webpack://to-do-list/./src/main.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/main.ts"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;