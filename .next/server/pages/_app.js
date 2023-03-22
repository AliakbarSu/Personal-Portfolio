/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/hooks/useDarkMode.ts":
/*!**********************************!*\
  !*** ./src/hooks/useDarkMode.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks_useMedia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hooks/useMedia */ \"./src/hooks/useMedia.ts\");\n/* harmony import */ var _providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/providers/ThemeProvider */ \"./src/providers/ThemeProvider.tsx\");\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (()=>{\n    const [theme, setTheme] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__.Themes.light);\n    const toggleTheme = ()=>{\n        if (theme === _providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__.Themes.light) {\n            window.localStorage.setItem(\"theme\", _providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__.Themes.dark);\n            setTheme(_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__.Themes.dark);\n        } else {\n            window.localStorage.setItem(\"theme\", _providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__.Themes.light);\n            setTheme(_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__.Themes.light);\n        }\n    };\n    const prefersDarkMode = (0,_hooks_useMedia__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\n        \"(prefers-color-scheme: dark)\"\n    ], [\n        true\n    ], false);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        const localTheme = window.localStorage.getItem(\"theme\");\n        if (localTheme) {\n            window.localStorage.setItem(\"theme\", localTheme);\n            setTheme(localTheme);\n        } else if (prefersDarkMode) {\n            setTheme(_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__.Themes.dark);\n        } else {\n            setTheme(_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__.Themes.light);\n        }\n    }, [\n        prefersDarkMode\n    ]);\n    return [\n        theme,\n        toggleTheme\n    ];\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlRGFya01vZGUudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBNEM7QUFDTDtBQUNZO0FBRW5ELGlFQUFlLElBQTRCO0lBQ3pDLE1BQU0sQ0FBQ0ksT0FBT0MsU0FBUyxHQUFHTCwrQ0FBUUEsQ0FBQ0csa0VBQVk7SUFFL0MsTUFBTUksY0FBYyxJQUFNO1FBQ3hCLElBQUlILFVBQVVELGtFQUFZLEVBQUU7WUFDMUJLLE9BQU9DLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLFNBQVNQLGlFQUFXO1lBQ2hERSxTQUFTRixpRUFBVztRQUN0QixPQUFPO1lBQ0xLLE9BQU9DLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLFNBQVNQLGtFQUFZO1lBQ2pERSxTQUFTRixrRUFBWTtRQUN2QixDQUFDO0lBQ0g7SUFFQSxNQUFNUyxrQkFBa0JWLDJEQUFRQSxDQUFDO1FBQUM7S0FBK0IsRUFBRTtRQUFDLElBQUk7S0FBQyxFQUFFLEtBQUs7SUFFaEZELGdEQUFTQSxDQUFDLElBQU07UUFDZCxNQUFNWSxhQUFhTCxPQUFPQyxZQUFZLENBQUNLLE9BQU8sQ0FBQztRQUMvQyxJQUFJRCxZQUFZO1lBQ2RMLE9BQU9DLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLFNBQVNHO1lBQ3JDUixTQUFTUTtRQUNYLE9BQU8sSUFBSUQsaUJBQWlCO1lBQzFCUCxTQUFTRixpRUFBVztRQUN0QixPQUFPO1lBQ0xFLFNBQVNGLGtFQUFZO1FBQ3ZCLENBQUM7SUFDSCxHQUFHO1FBQUNTO0tBQWdCO0lBRXBCLE9BQU87UUFBQ1I7UUFBT0c7S0FBWTtBQUM3QixHQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWxpLWJsb2cvLi9zcmMvaG9va3MvdXNlRGFya01vZGUudHM/YWI5NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZU1lZGlhIGZyb20gJ0Bob29rcy91c2VNZWRpYSc7XG5pbXBvcnQgeyBUaGVtZXMgfSBmcm9tICdAL3Byb3ZpZGVycy9UaGVtZVByb3ZpZGVyJztcblxuZXhwb3J0IGRlZmF1bHQgKCk6IFtUaGVtZXMsICgpID0+IHZvaWRdID0+IHtcbiAgY29uc3QgW3RoZW1lLCBzZXRUaGVtZV0gPSB1c2VTdGF0ZShUaGVtZXMubGlnaHQpO1xuXG4gIGNvbnN0IHRvZ2dsZVRoZW1lID0gKCkgPT4ge1xuICAgIGlmICh0aGVtZSA9PT0gVGhlbWVzLmxpZ2h0KSB7XG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RoZW1lJywgVGhlbWVzLmRhcmspO1xuICAgICAgc2V0VGhlbWUoVGhlbWVzLmRhcmspO1xuICAgIH0gZWxzZSB7XG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RoZW1lJywgVGhlbWVzLmxpZ2h0KTtcbiAgICAgIHNldFRoZW1lKFRoZW1lcy5saWdodCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHByZWZlcnNEYXJrTW9kZSA9IHVzZU1lZGlhKFsnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSddLCBbdHJ1ZV0sIGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGxvY2FsVGhlbWUgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lJykgYXMgVGhlbWVzXG4gICAgaWYgKGxvY2FsVGhlbWUpIHtcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGhlbWUnLCBsb2NhbFRoZW1lKTtcbiAgICAgIHNldFRoZW1lKGxvY2FsVGhlbWUpO1xuICAgIH0gZWxzZSBpZiAocHJlZmVyc0RhcmtNb2RlKSB7XG4gICAgICBzZXRUaGVtZShUaGVtZXMuZGFyayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFRoZW1lKFRoZW1lcy5saWdodCk7XG4gICAgfVxuICB9LCBbcHJlZmVyc0RhcmtNb2RlXSk7XG5cbiAgcmV0dXJuIFt0aGVtZSwgdG9nZ2xlVGhlbWVdO1xufTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZU1lZGlhIiwiVGhlbWVzIiwidGhlbWUiLCJzZXRUaGVtZSIsImxpZ2h0IiwidG9nZ2xlVGhlbWUiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiZGFyayIsInByZWZlcnNEYXJrTW9kZSIsImxvY2FsVGhlbWUiLCJnZXRJdGVtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/hooks/useDarkMode.ts\n");

/***/ }),

/***/ "./src/hooks/useMedia.ts":
/*!*******************************!*\
  !*** ./src/hooks/useMedia.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst useMedia = (queries, values, defaultValue)=>{\n    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        const mediaQueryLists = queries.map((q)=>window.matchMedia(q));\n        const getValue = ()=>{\n            const index = mediaQueryLists.findIndex((mql)=>mql.matches);\n            return typeof values[index] !== \"undefined\" ? values[index] : defaultValue;\n        };\n        setValue(getValue);\n        const handler = ()=>setValue(getValue);\n        mediaQueryLists.forEach((mql)=>mql.addListener(handler));\n        return ()=>mediaQueryLists.forEach((mql)=>mql.removeListener(handler));\n    }, [\n        defaultValue,\n        queries,\n        values\n    ]);\n    return value;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useMedia);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlTWVkaWEudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTRDO0FBRTVDLE1BQU1FLFdBQVcsQ0FBQ0MsU0FBbUJDLFFBQW1CQyxlQUEwQjtJQUNoRixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1AsK0NBQVFBLENBQWlCLElBQUk7SUFFdkRDLGdEQUFTQSxDQUFDLElBQU07UUFDZCxNQUFNTyxrQkFBa0JMLFFBQVFNLEdBQUcsQ0FBQ0MsQ0FBQUEsSUFBS0MsT0FBT0MsVUFBVSxDQUFDRjtRQUUzRCxNQUFNRyxXQUFXLElBQU07WUFDckIsTUFBTUMsUUFBUU4sZ0JBQWdCTyxTQUFTLENBQUNDLENBQUFBLE1BQU9BLElBQUlDLE9BQU87WUFDMUQsT0FBTyxPQUFPYixNQUFNLENBQUNVLE1BQU0sS0FBSyxjQUFjVixNQUFNLENBQUNVLE1BQU0sR0FBR1QsWUFBWTtRQUM1RTtRQUVBRSxTQUFTTTtRQUNULE1BQU1LLFVBQVUsSUFBTVgsU0FBU007UUFDL0JMLGdCQUFnQlcsT0FBTyxDQUFDSCxDQUFBQSxNQUFPQSxJQUFJSSxXQUFXLENBQUNGO1FBQy9DLE9BQU8sSUFBTVYsZ0JBQWdCVyxPQUFPLENBQUNILENBQUFBLE1BQU9BLElBQUlLLGNBQWMsQ0FBQ0g7SUFDakUsR0FBRztRQUFDYjtRQUFjRjtRQUFTQztLQUFPO0lBRWxDLE9BQU9FO0FBQ1Q7QUFFQSxpRUFBZUosUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FsaS1ibG9nLy4vc3JjL2hvb2tzL3VzZU1lZGlhLnRzPzFiYWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgdXNlTWVkaWEgPSAocXVlcmllczogc3RyaW5nW10sIHZhbHVlczogYm9vbGVhbltdLCBkZWZhdWx0VmFsdWU6IGJvb2xlYW4pID0+IHtcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZTxib29sZWFuIHwgbnVsbD4obnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBtZWRpYVF1ZXJ5TGlzdHMgPSBxdWVyaWVzLm1hcChxID0+IHdpbmRvdy5tYXRjaE1lZGlhKHEpKTtcblxuICAgIGNvbnN0IGdldFZhbHVlID0gKCkgPT4ge1xuICAgICAgY29uc3QgaW5kZXggPSBtZWRpYVF1ZXJ5TGlzdHMuZmluZEluZGV4KG1xbCA9PiBtcWwubWF0Y2hlcyk7XG4gICAgICByZXR1cm4gdHlwZW9mIHZhbHVlc1tpbmRleF0gIT09ICd1bmRlZmluZWQnID8gdmFsdWVzW2luZGV4XSA6IGRlZmF1bHRWYWx1ZTtcbiAgICB9O1xuXG4gICAgc2V0VmFsdWUoZ2V0VmFsdWUpO1xuICAgIGNvbnN0IGhhbmRsZXIgPSAoKSA9PiBzZXRWYWx1ZShnZXRWYWx1ZSk7XG4gICAgbWVkaWFRdWVyeUxpc3RzLmZvckVhY2gobXFsID0+IG1xbC5hZGRMaXN0ZW5lcihoYW5kbGVyKSk7XG4gICAgcmV0dXJuICgpID0+IG1lZGlhUXVlcnlMaXN0cy5mb3JFYWNoKG1xbCA9PiBtcWwucmVtb3ZlTGlzdGVuZXIoaGFuZGxlcikpO1xuICB9LCBbZGVmYXVsdFZhbHVlLCBxdWVyaWVzLCB2YWx1ZXNdKTtcblxuICByZXR1cm4gdmFsdWU7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VNZWRpYTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZU1lZGlhIiwicXVlcmllcyIsInZhbHVlcyIsImRlZmF1bHRWYWx1ZSIsInZhbHVlIiwic2V0VmFsdWUiLCJtZWRpYVF1ZXJ5TGlzdHMiLCJtYXAiLCJxIiwid2luZG93IiwibWF0Y2hNZWRpYSIsImdldFZhbHVlIiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJtcWwiLCJtYXRjaGVzIiwiaGFuZGxlciIsImZvckVhY2giLCJhZGRMaXN0ZW5lciIsInJlbW92ZUxpc3RlbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/hooks/useMedia.ts\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/providers/ThemeProvider */ \"./src/providers/ThemeProvider.tsx\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _fonts_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fonts.css */ \"./src/pages/fonts.css\");\n/* harmony import */ var _fonts_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fonts_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction App({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/aliakbarsultani/repositories/ali-portflio/src/pages/_app.tsx\",\n            lineNumber: 7,\n            columnNumber: 25\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/aliakbarsultani/repositories/ali-portflio/src/pages/_app.tsx\",\n        lineNumber: 7,\n        columnNumber: 10\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXNEO0FBQ3pCO0FBRVI7QUFFTixTQUFTQyxJQUFJLEVBQUVDLFVBQVMsRUFBRUMsVUFBUyxFQUFZLEVBQUU7SUFDOUQscUJBQU8sOERBQUNILGdFQUFhQTtrQkFBQyw0RUFBQ0U7WUFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7OztBQUNoRCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWxpLWJsb2cvLi9zcmMvcGFnZXMvX2FwcC50c3g/ZjlkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGhlbWVQcm92aWRlciBmcm9tICdAL3Byb3ZpZGVycy9UaGVtZVByb3ZpZGVyJztcbmltcG9ydCAnQC9zdHlsZXMvZ2xvYmFscy5jc3MnXG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnXG5pbXBvcnQgJy4vZm9udHMuY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgcmV0dXJuIDxUaGVtZVByb3ZpZGVyPjxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz48L1RoZW1lUHJvdmlkZXI+IFxufVxuIl0sIm5hbWVzIjpbIlRoZW1lUHJvdmlkZXIiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/providers/ThemeProvider.tsx":
/*!*****************************************!*\
  !*** ./src/providers/ThemeProvider.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ThemeContext\": () => (/* binding */ ThemeContext),\n/* harmony export */   \"Themes\": () => (/* binding */ Themes),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useDarkMode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hooks/useDarkMode */ \"./src/hooks/useDarkMode.ts\");\n\n\n\nvar Themes;\n(function(Themes) {\n    Themes[\"light\"] = \"light\";\n    Themes[\"dark\"] = \"dark\";\n})(Themes || (Themes = {}));\nconst ThemeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    theme: Themes.light,\n    toggleTheme: ()=>null\n});\nconst ThemeProvider = ({ children  })=>{\n    const [theme, toggleTheme] = (0,_hooks_useDarkMode__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ThemeContext.Provider, {\n        value: {\n            theme,\n            toggleTheme\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/aliakbarsultani/repositories/ali-portflio/src/providers/ThemeProvider.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThemeProvider);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcHJvdmlkZXJzL1RoZW1lUHJvdmlkZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEyRDtBQUNkO0lBRXRDO1VBQUtHLE1BQU07SUFBTkEsT0FDVkMsV0FBQUE7SUFEVUQsT0FFVkUsVUFBQUE7R0FGVUYsV0FBQUE7QUFJTCxNQUFNRyw2QkFBZUwsb0RBQWFBLENBQTJDO0lBQUNNLE9BQU9KLE9BQU9DLEtBQUs7SUFBRUksYUFBYSxJQUFNLElBQUk7QUFBQSxHQUFHO0FBRXBJLE1BQU1DLGdCQUFnQixDQUFDLEVBQUVDLFNBQVEsRUFBNEIsR0FBSztJQUNoRSxNQUFNLENBQUNILE9BQU9DLFlBQVksR0FBR04sOERBQVdBO0lBRXhDLHFCQUNFLDhEQUFDSSxhQUFhSyxRQUFRO1FBQ3BCQyxPQUFPO1lBQ0xMO1lBQ0FDO1FBQ0Y7a0JBRUNFOzs7Ozs7QUFHUDtBQUNBLGlFQUFlRCxhQUFhQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWxpLWJsb2cvLi9zcmMvcHJvdmlkZXJzL1RoZW1lUHJvdmlkZXIudHN4Pzk0MDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIFJlYWN0RWxlbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VEYXJrTW9kZSBmcm9tICdAaG9va3MvdXNlRGFya01vZGUnO1xuXG5leHBvcnQgZW51bSBUaGVtZXMge1xuICBsaWdodCA9ICdsaWdodCcsXG4gIGRhcmsgPSAnZGFyaydcbn1cbmV4cG9ydCBjb25zdCBUaGVtZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0PHt0aGVtZTogVGhlbWVzLCB0b2dnbGVUaGVtZTogKCkgPT4gdm9pZH0+KHt0aGVtZTogVGhlbWVzLmxpZ2h0LCB0b2dnbGVUaGVtZTogKCkgPT4gbnVsbH0pO1xuXG5jb25zdCBUaGVtZVByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfToge2NoaWxkcmVuOiBSZWFjdEVsZW1lbnR9KSA9PiB7XG4gIGNvbnN0IFt0aGVtZSwgdG9nZ2xlVGhlbWVdID0gdXNlRGFya01vZGUoKTtcblxuICByZXR1cm4gKFxuICAgIDxUaGVtZUNvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7XG4gICAgICAgIHRoZW1lLFxuICAgICAgICB0b2dnbGVUaGVtZSxcbiAgICAgIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvVGhlbWVDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IFRoZW1lUHJvdmlkZXJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VEYXJrTW9kZSIsIlRoZW1lcyIsImxpZ2h0IiwiZGFyayIsIlRoZW1lQ29udGV4dCIsInRoZW1lIiwidG9nZ2xlVGhlbWUiLCJUaGVtZVByb3ZpZGVyIiwiY2hpbGRyZW4iLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/providers/ThemeProvider.tsx\n");

/***/ }),

/***/ "./src/pages/fonts.css":
/*!*****************************!*\
  !*** ./src/pages/fonts.css ***!
  \*****************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();