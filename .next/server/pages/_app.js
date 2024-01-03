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

/***/ "./firebase/FavoritesContext.js":
/*!**************************************!*\
  !*** ./firebase/FavoritesContext.js ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FavoritesProvider\": () => (/* binding */ FavoritesProvider),\n/* harmony export */   \"useFavorites\": () => (/* binding */ useFavorites)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ \"uuid\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_2__]);\nuuid__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n // Import the uuid library\nconst FavoritesContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst FavoritesProvider = ({ children  })=>{\n    const [favorites, setFavorites] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>{\n        if (typeof localStorage !== \"undefined\") {\n            const storedFavorites = localStorage.getItem(\"favorites\");\n            return storedFavorites ? JSON.parse(storedFavorites) : [];\n        }\n        return [];\n    });\n    // Update localStorage whenever favorites change\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        localStorage.setItem(\"favorites\", JSON.stringify(favorites));\n    }, [\n        favorites\n    ]);\n    const toggleFavorite = (article)=>{\n        const isFavorite = favorites.some((fav)=>fav.title === article.title);\n        if (isFavorite) {\n            // Remove from favorites\n            const updatedFavorites = favorites.filter((fav)=>fav.title !== article.title);\n            setFavorites(updatedFavorites);\n        } else {\n            // Add to favorites with a unique ID\n            const updatedFavorites = [\n                ...favorites,\n                {\n                    ...article,\n                    uid: (0,uuid__WEBPACK_IMPORTED_MODULE_2__.v4)()\n                }\n            ];\n            setFavorites(updatedFavorites);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FavoritesContext.Provider, {\n        value: {\n            favorites,\n            toggleFavorite\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\Company Assigment\\\\NewsApp\\\\firebase\\\\FavoritesContext.js\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, undefined);\n};\nconst useFavorites = ()=>{\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(FavoritesContext);\n    if (!context) {\n        throw new Error(\"useFavorites must be used within a FavoritesContextProvider\");\n    }\n    return context;\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9maXJlYmFzZS9GYXZvcml0ZXNDb250ZXh0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQThFO0FBQzFDLENBQUMsMEJBQTBCO0FBRS9ELE1BQU1PLGlDQUFtQk4sb0RBQWFBO0FBRS9CLE1BQU1PLG9CQUFvQixDQUFDLEVBQUVDLFNBQVEsRUFBRSxHQUFLO0lBQ2pELE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHUiwrQ0FBUUEsQ0FBQyxJQUFNO1FBQy9DLElBQUksT0FBT1MsaUJBQWlCLGFBQWE7WUFDdkMsTUFBTUMsa0JBQWtCRCxhQUFhRSxPQUFPLENBQUM7WUFDN0MsT0FBT0Qsa0JBQWtCRSxLQUFLQyxLQUFLLENBQUNILG1CQUFtQixFQUFFO1FBQzNELENBQUM7UUFDRCxPQUFPLEVBQUU7SUFDWDtJQUVBLGdEQUFnRDtJQUNoRFQsZ0RBQVNBLENBQUMsSUFBTTtRQUNkUSxhQUFhSyxPQUFPLENBQUMsYUFBYUYsS0FBS0csU0FBUyxDQUFDUjtJQUNuRCxHQUFHO1FBQUNBO0tBQVU7SUFFZCxNQUFNUyxpQkFBaUIsQ0FBQ0MsVUFBWTtRQUNsQyxNQUFNQyxhQUFhWCxVQUFVWSxJQUFJLENBQUMsQ0FBQ0MsTUFBUUEsSUFBSUMsS0FBSyxLQUFLSixRQUFRSSxLQUFLO1FBRXRFLElBQUlILFlBQVk7WUFDZCx3QkFBd0I7WUFDeEIsTUFBTUksbUJBQW1CZixVQUFVZ0IsTUFBTSxDQUN2QyxDQUFDSCxNQUFRQSxJQUFJQyxLQUFLLEtBQUtKLFFBQVFJLEtBQUs7WUFFdENiLGFBQWFjO1FBQ2YsT0FBTztZQUNMLG9DQUFvQztZQUNwQyxNQUFNQSxtQkFBbUI7bUJBQ3BCZjtnQkFDSDtvQkFDRSxHQUFHVSxPQUFPO29CQUNWTyxLQUFLckIsd0NBQU1BO2dCQUNiO2FBQ0Q7WUFDREssYUFBYWM7UUFDZixDQUFDO0lBQ0g7SUFFQSxxQkFDRSw4REFBQ2xCLGlCQUFpQnFCLFFBQVE7UUFBQ0MsT0FBTztZQUFFbkI7WUFBV1M7UUFBZTtrQkFDM0RWOzs7Ozs7QUFHUCxFQUFFO0FBRUssTUFBTXFCLGVBQWUsSUFBTTtJQUNoQyxNQUFNQyxVQUFVN0IsaURBQVVBLENBQUNLO0lBQzNCLElBQUksQ0FBQ3dCLFNBQVM7UUFDWixNQUFNLElBQUlDLE1BQ1IsK0RBQ0E7SUFDSixDQUFDO0lBQ0QsT0FBT0Q7QUFDVCxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2FwcC8uL2ZpcmViYXNlL0Zhdm9yaXRlc0NvbnRleHQuanM/ZTNlNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiOyAvLyBJbXBvcnQgdGhlIHV1aWQgbGlicmFyeVxyXG5cclxuY29uc3QgRmF2b3JpdGVzQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmV4cG9ydCBjb25zdCBGYXZvcml0ZXNQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBbZmF2b3JpdGVzLCBzZXRGYXZvcml0ZXNdID0gdXNlU3RhdGUoKCkgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiBsb2NhbFN0b3JhZ2UgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgY29uc3Qgc3RvcmVkRmF2b3JpdGVzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJmYXZvcml0ZXNcIik7XHJcbiAgICAgIHJldHVybiBzdG9yZWRGYXZvcml0ZXMgPyBKU09OLnBhcnNlKHN0b3JlZEZhdm9yaXRlcykgOiBbXTtcclxuICAgIH1cclxuICAgIHJldHVybiBbXTtcclxuICB9KTtcclxuXHJcbiAgLy8gVXBkYXRlIGxvY2FsU3RvcmFnZSB3aGVuZXZlciBmYXZvcml0ZXMgY2hhbmdlXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZmF2b3JpdGVzXCIsIEpTT04uc3RyaW5naWZ5KGZhdm9yaXRlcykpO1xyXG4gIH0sIFtmYXZvcml0ZXNdKTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlRmF2b3JpdGUgPSAoYXJ0aWNsZSkgPT4ge1xyXG4gICAgY29uc3QgaXNGYXZvcml0ZSA9IGZhdm9yaXRlcy5zb21lKChmYXYpID0+IGZhdi50aXRsZSA9PT0gYXJ0aWNsZS50aXRsZSk7XHJcblxyXG4gICAgaWYgKGlzRmF2b3JpdGUpIHtcclxuICAgICAgLy8gUmVtb3ZlIGZyb20gZmF2b3JpdGVzXHJcbiAgICAgIGNvbnN0IHVwZGF0ZWRGYXZvcml0ZXMgPSBmYXZvcml0ZXMuZmlsdGVyKFxyXG4gICAgICAgIChmYXYpID0+IGZhdi50aXRsZSAhPT0gYXJ0aWNsZS50aXRsZVxyXG4gICAgICApO1xyXG4gICAgICBzZXRGYXZvcml0ZXModXBkYXRlZEZhdm9yaXRlcyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBBZGQgdG8gZmF2b3JpdGVzIHdpdGggYSB1bmlxdWUgSURcclxuICAgICAgY29uc3QgdXBkYXRlZEZhdm9yaXRlcyA9IFtcclxuICAgICAgICAuLi5mYXZvcml0ZXMsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgLi4uYXJ0aWNsZSxcclxuICAgICAgICAgIHVpZDogdXVpZHY0KCksIC8vIEdlbmVyYXRlIGEgdW5pcXVlIElEXHJcbiAgICAgICAgfSxcclxuICAgICAgXTtcclxuICAgICAgc2V0RmF2b3JpdGVzKHVwZGF0ZWRGYXZvcml0ZXMpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RmF2b3JpdGVzQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBmYXZvcml0ZXMsIHRvZ2dsZUZhdm9yaXRlIH19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0Zhdm9yaXRlc0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VGYXZvcml0ZXMgPSAoKSA9PiB7XHJcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoRmF2b3JpdGVzQ29udGV4dCk7XHJcbiAgaWYgKCFjb250ZXh0KSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgIFwidXNlRmF2b3JpdGVzIG11c3QgYmUgdXNlZCB3aXRoaW4gYSBGYXZvcml0ZXNDb250ZXh0UHJvdmlkZXJcIlxyXG4gICAgKTtcclxuICB9XHJcbiAgcmV0dXJuIGNvbnRleHQ7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ2NCIsInV1aWR2NCIsIkZhdm9yaXRlc0NvbnRleHQiLCJGYXZvcml0ZXNQcm92aWRlciIsImNoaWxkcmVuIiwiZmF2b3JpdGVzIiwic2V0RmF2b3JpdGVzIiwibG9jYWxTdG9yYWdlIiwic3RvcmVkRmF2b3JpdGVzIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJ0b2dnbGVGYXZvcml0ZSIsImFydGljbGUiLCJpc0Zhdm9yaXRlIiwic29tZSIsImZhdiIsInRpdGxlIiwidXBkYXRlZEZhdm9yaXRlcyIsImZpbHRlciIsInVpZCIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VGYXZvcml0ZXMiLCJjb250ZXh0IiwiRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./firebase/FavoritesContext.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _firebase_FavoritesContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/firebase/FavoritesContext */ \"./firebase/FavoritesContext.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase_FavoritesContext__WEBPACK_IMPORTED_MODULE_1__]);\n_firebase_FavoritesContext__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n// import { AuthUserProvider } from \"@/firebase/auth\";\n\n\nfunction App({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \" News App\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Company Assigment\\\\NewsApp\\\\pages\\\\_app.js\",\n                    lineNumber: 10,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Company Assigment\\\\NewsApp\\\\pages\\\\_app.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_firebase_FavoritesContext__WEBPACK_IMPORTED_MODULE_1__.FavoritesProvider, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"D:\\\\Company Assigment\\\\NewsApp\\\\pages\\\\_app.js\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Company Assigment\\\\NewsApp\\\\pages\\\\_app.js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFnRTtBQUNoRSxzREFBc0Q7QUFDeEI7QUFDRDtBQUVkLFNBQVNFLElBQUksRUFBRUMsVUFBUyxFQUFFQyxVQUFTLEVBQUUsRUFBRTtJQUNwRCxxQkFDRTs7MEJBQ0UsOERBQUNILGtEQUFJQTswQkFDSCw0RUFBQ0k7OEJBQU07Ozs7Ozs7Ozs7OzBCQUVULDhEQUFDTCx5RUFBaUJBOzBCQUNoQiw0RUFBQ0c7b0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7OztBQUloQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2FwcC8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGYXZvcml0ZXNQcm92aWRlciB9IGZyb20gXCJAL2ZpcmViYXNlL0Zhdm9yaXRlc0NvbnRleHRcIjtcclxuLy8gaW1wb3J0IHsgQXV0aFVzZXJQcm92aWRlciB9IGZyb20gXCJAL2ZpcmViYXNlL2F1dGhcIjtcclxuaW1wb3J0IFwiQC9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+IE5ld3MgQXBwPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8RmF2b3JpdGVzUHJvdmlkZXI+XHJcbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICA8L0Zhdm9yaXRlc1Byb3ZpZGVyPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiRmF2b3JpdGVzUHJvdmlkZXIiLCJIZWFkIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

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

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = import("uuid");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();