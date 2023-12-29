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
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FavoritesProvider\": () => (/* binding */ FavoritesProvider),\n/* harmony export */   \"useFavorites\": () => (/* binding */ useFavorites)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ \"uuid\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_2__]);\nuuid__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n // Import the uuid library\nconst FavoritesContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst FavoritesProvider = ({ children  })=>{\n    const [favorites, setFavorites] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>{\n        if (typeof localStorage !== \"undefined\") {\n            const storedFavorites = localStorage.getItem(\"favorites\");\n            return storedFavorites ? JSON.parse(storedFavorites) : [];\n        }\n        return [];\n    });\n    // Update localStorage whenever favorites change\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (typeof localStorage !== \"undefined\") {\n            localStorage.setItem(\"favorites\", JSON.stringify(favorites));\n        }\n    }, [\n        favorites\n    ]);\n    const toggleFavorite = (article)=>{\n        const isFavorite = favorites.some((fav)=>fav.title === article.title);\n        if (isFavorite) {\n            // Remove from favorites\n            const updatedFavorites = favorites.filter((fav)=>fav.title !== article.title);\n            setFavorites(updatedFavorites);\n        } else {\n            // Add to favorites with a unique ID\n            const updatedFavorites = [\n                ...favorites,\n                {\n                    ...article,\n                    uid: (0,uuid__WEBPACK_IMPORTED_MODULE_2__.v4)()\n                }\n            ];\n            setFavorites(updatedFavorites);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FavoritesContext.Provider, {\n        value: {\n            favorites,\n            toggleFavorite\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\rajpu\\\\Downloads\\\\New folder (9)\\\\Newsapp\\\\firebase\\\\FavoritesContext.js\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, undefined);\n};\nconst useFavorites = ()=>{\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(FavoritesContext);\n    if (!context) {\n        throw new Error(\"useFavorites must be used within a FavoritesContextProvider\");\n    }\n    return context;\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9maXJlYmFzZS9GYXZvcml0ZXNDb250ZXh0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQThFO0FBQzFDLENBQUMsMEJBQTBCO0FBRS9ELE1BQU1PLGlDQUFtQk4sb0RBQWFBO0FBRS9CLE1BQU1PLG9CQUFvQixDQUFDLEVBQUVDLFNBQVEsRUFBRSxHQUFLO0lBQ2pELE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHUiwrQ0FBUUEsQ0FBQyxJQUFNO1FBQy9DLElBQUksT0FBT1MsaUJBQWlCLGFBQWE7WUFDdkMsTUFBTUMsa0JBQWtCRCxhQUFhRSxPQUFPLENBQUM7WUFDN0MsT0FBT0Qsa0JBQWtCRSxLQUFLQyxLQUFLLENBQUNILG1CQUFtQixFQUFFO1FBQzNELENBQUM7UUFDRCxPQUFPLEVBQUU7SUFDWDtJQUVBLGdEQUFnRDtJQUNoRFQsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLElBQUksT0FBT1EsaUJBQWlCLGFBQWE7WUFDdkNBLGFBQWFLLE9BQU8sQ0FBQyxhQUFhRixLQUFLRyxTQUFTLENBQUNSO1FBQ25ELENBQUM7SUFDSCxHQUFHO1FBQUNBO0tBQVU7SUFFZCxNQUFNUyxpQkFBaUIsQ0FBQ0MsVUFBWTtRQUNsQyxNQUFNQyxhQUFhWCxVQUFVWSxJQUFJLENBQUMsQ0FBQ0MsTUFBUUEsSUFBSUMsS0FBSyxLQUFLSixRQUFRSSxLQUFLO1FBRXRFLElBQUlILFlBQVk7WUFDZCx3QkFBd0I7WUFDeEIsTUFBTUksbUJBQW1CZixVQUFVZ0IsTUFBTSxDQUN2QyxDQUFDSCxNQUFRQSxJQUFJQyxLQUFLLEtBQUtKLFFBQVFJLEtBQUs7WUFFdENiLGFBQWFjO1FBQ2YsT0FBTztZQUNMLG9DQUFvQztZQUNwQyxNQUFNQSxtQkFBbUI7bUJBQ3BCZjtnQkFDSDtvQkFDRSxHQUFHVSxPQUFPO29CQUNWTyxLQUFLckIsd0NBQU1BO2dCQUNiO2FBQ0Q7WUFDREssYUFBYWM7UUFDZixDQUFDO0lBQ0g7SUFFQSxxQkFDRSw4REFBQ2xCLGlCQUFpQnFCLFFBQVE7UUFBQ0MsT0FBTztZQUFFbkI7WUFBV1M7UUFBZTtrQkFDM0RWOzs7Ozs7QUFHUCxFQUFFO0FBRUssTUFBTXFCLGVBQWUsSUFBTTtJQUNoQyxNQUFNQyxVQUFVN0IsaURBQVVBLENBQUNLO0lBQzNCLElBQUksQ0FBQ3dCLFNBQVM7UUFDWixNQUFNLElBQUlDLE1BQ1IsK0RBQ0E7SUFDSixDQUFDO0lBQ0QsT0FBT0Q7QUFDVCxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2FwcC8uL2ZpcmViYXNlL0Zhdm9yaXRlc0NvbnRleHQuanM/ZTNlNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiOyAvLyBJbXBvcnQgdGhlIHV1aWQgbGlicmFyeVxyXG5cclxuY29uc3QgRmF2b3JpdGVzQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmV4cG9ydCBjb25zdCBGYXZvcml0ZXNQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBbZmF2b3JpdGVzLCBzZXRGYXZvcml0ZXNdID0gdXNlU3RhdGUoKCkgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiBsb2NhbFN0b3JhZ2UgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgY29uc3Qgc3RvcmVkRmF2b3JpdGVzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJmYXZvcml0ZXNcIik7XHJcbiAgICAgIHJldHVybiBzdG9yZWRGYXZvcml0ZXMgPyBKU09OLnBhcnNlKHN0b3JlZEZhdm9yaXRlcykgOiBbXTtcclxuICAgIH1cclxuICAgIHJldHVybiBbXTtcclxuICB9KTtcclxuXHJcbiAgLy8gVXBkYXRlIGxvY2FsU3RvcmFnZSB3aGVuZXZlciBmYXZvcml0ZXMgY2hhbmdlXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh0eXBlb2YgbG9jYWxTdG9yYWdlICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZmF2b3JpdGVzXCIsIEpTT04uc3RyaW5naWZ5KGZhdm9yaXRlcykpO1xyXG4gICAgfVxyXG4gIH0sIFtmYXZvcml0ZXNdKTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlRmF2b3JpdGUgPSAoYXJ0aWNsZSkgPT4ge1xyXG4gICAgY29uc3QgaXNGYXZvcml0ZSA9IGZhdm9yaXRlcy5zb21lKChmYXYpID0+IGZhdi50aXRsZSA9PT0gYXJ0aWNsZS50aXRsZSk7XHJcblxyXG4gICAgaWYgKGlzRmF2b3JpdGUpIHtcclxuICAgICAgLy8gUmVtb3ZlIGZyb20gZmF2b3JpdGVzXHJcbiAgICAgIGNvbnN0IHVwZGF0ZWRGYXZvcml0ZXMgPSBmYXZvcml0ZXMuZmlsdGVyKFxyXG4gICAgICAgIChmYXYpID0+IGZhdi50aXRsZSAhPT0gYXJ0aWNsZS50aXRsZVxyXG4gICAgICApO1xyXG4gICAgICBzZXRGYXZvcml0ZXModXBkYXRlZEZhdm9yaXRlcyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBBZGQgdG8gZmF2b3JpdGVzIHdpdGggYSB1bmlxdWUgSURcclxuICAgICAgY29uc3QgdXBkYXRlZEZhdm9yaXRlcyA9IFtcclxuICAgICAgICAuLi5mYXZvcml0ZXMsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgLi4uYXJ0aWNsZSxcclxuICAgICAgICAgIHVpZDogdXVpZHY0KCksIC8vIEdlbmVyYXRlIGEgdW5pcXVlIElEXHJcbiAgICAgICAgfSxcclxuICAgICAgXTtcclxuICAgICAgc2V0RmF2b3JpdGVzKHVwZGF0ZWRGYXZvcml0ZXMpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RmF2b3JpdGVzQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBmYXZvcml0ZXMsIHRvZ2dsZUZhdm9yaXRlIH19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0Zhdm9yaXRlc0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VGYXZvcml0ZXMgPSAoKSA9PiB7XHJcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoRmF2b3JpdGVzQ29udGV4dCk7XHJcbiAgaWYgKCFjb250ZXh0KSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgIFwidXNlRmF2b3JpdGVzIG11c3QgYmUgdXNlZCB3aXRoaW4gYSBGYXZvcml0ZXNDb250ZXh0UHJvdmlkZXJcIlxyXG4gICAgKTtcclxuICB9XHJcbiAgcmV0dXJuIGNvbnRleHQ7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ2NCIsInV1aWR2NCIsIkZhdm9yaXRlc0NvbnRleHQiLCJGYXZvcml0ZXNQcm92aWRlciIsImNoaWxkcmVuIiwiZmF2b3JpdGVzIiwic2V0RmF2b3JpdGVzIiwibG9jYWxTdG9yYWdlIiwic3RvcmVkRmF2b3JpdGVzIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJ0b2dnbGVGYXZvcml0ZSIsImFydGljbGUiLCJpc0Zhdm9yaXRlIiwic29tZSIsImZhdiIsInRpdGxlIiwidXBkYXRlZEZhdm9yaXRlcyIsImZpbHRlciIsInVpZCIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VGYXZvcml0ZXMiLCJjb250ZXh0IiwiRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./firebase/FavoritesContext.js\n");

/***/ }),

/***/ "./firebase/auth.js":
/*!**************************!*\
  !*** ./firebase/auth.js ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthUserProvider\": () => (/* binding */ AuthUserProvider),\n/* harmony export */   \"default\": () => (/* binding */ useFirebaseAuth),\n/* harmony export */   \"useAuth\": () => (/* binding */ useAuth)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./firebase */ \"./firebase/firebase.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_auth__WEBPACK_IMPORTED_MODULE_2__, _firebase__WEBPACK_IMPORTED_MODULE_3__]);\n([firebase_auth__WEBPACK_IMPORTED_MODULE_2__, _firebase__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nconst AuthUserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    authUser: null,\n    isLoading: true\n});\nfunction useFirebaseAuth() {\n    const [authUser, setAuthUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const authStateChaged = async (user)=>{\n        setIsLoading(true);\n        if (!user) {\n            setAuthUser(null);\n            setIsLoading(false);\n            return;\n        }\n        setAuthUser({\n            uid: user.uid,\n            username: user.displayName,\n            email: user.email\n        });\n        setIsLoading(false);\n    };\n    const SignOut = ()=>{\n        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signOut)(_firebase__WEBPACK_IMPORTED_MODULE_3__.auth).then(()=>{\n            setAuthUser(null);\n            setIsLoading(false);\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const unsubscribe = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.onAuthStateChanged)(_firebase__WEBPACK_IMPORTED_MODULE_3__.auth, authStateChaged);\n        return ()=>unsubscribe();\n    }, []);\n    return {\n        authUser,\n        isLoading,\n        setAuthUser,\n        SignOut\n    };\n}\nconst AuthUserProvider = ({ children  })=>{\n    const auth = useFirebaseAuth();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthUserContext.Provider, {\n        value: auth,\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\rajpu\\\\Downloads\\\\New folder (9)\\\\Newsapp\\\\firebase\\\\auth.js\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, undefined);\n};\nconst useAuth = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthUserContext);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9maXJlYmFzZS9hdXRoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUU7QUFDSTtBQUN6QztBQUNsQyxNQUFNUSxnQ0FBa0JSLG9EQUFhQSxDQUFDO0lBQ3BDUyxVQUFVLElBQUk7SUFDZEMsV0FBVyxJQUFJO0FBQ2pCO0FBRWUsU0FBU0Msa0JBQWtCO0lBQ3hDLE1BQU0sQ0FBQ0YsVUFBVUcsWUFBWSxHQUFHVCwrQ0FBUUEsQ0FBQyxJQUFJO0lBQzdDLE1BQU0sQ0FBQ08sV0FBV0csYUFBYSxHQUFHViwrQ0FBUUEsQ0FBQyxJQUFJO0lBRS9DLE1BQU1XLGtCQUFrQixPQUFPQyxPQUFTO1FBQ3RDRixhQUFhLElBQUk7UUFDakIsSUFBSSxDQUFDRSxNQUFNO1lBQ1RILFlBQVksSUFBSTtZQUNoQkMsYUFBYSxLQUFLO1lBQ2xCO1FBQ0YsQ0FBQztRQUNERCxZQUFZO1lBQ1ZJLEtBQUtELEtBQUtDLEdBQUc7WUFDYkMsVUFBVUYsS0FBS0csV0FBVztZQUMxQkMsT0FBT0osS0FBS0ksS0FBSztRQUNuQjtRQUNBTixhQUFhLEtBQUs7SUFDcEI7SUFDQSxNQUFNTyxVQUFVLElBQU07UUFDcEJkLHNEQUFXQSxDQUFDQywyQ0FBSUEsRUFBRWMsSUFBSSxDQUFDLElBQU07WUFDM0JULFlBQVksSUFBSTtZQUNoQkMsYUFBYSxLQUFLO1FBQ3BCO0lBQ0Y7SUFFQVgsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLE1BQU1vQixjQUFjbEIsaUVBQWtCQSxDQUFDRywyQ0FBSUEsRUFBRU87UUFDN0MsT0FBTyxJQUFNUTtJQUNmLEdBQUcsRUFBRTtJQUVMLE9BQU87UUFDTGI7UUFDQUM7UUFDQUU7UUFDQVE7SUFDRjtBQUNGLENBQUM7QUFFTSxNQUFNRyxtQkFBbUIsQ0FBQyxFQUFFQyxTQUFRLEVBQUUsR0FBSztJQUNoRCxNQUFNakIsT0FBT0k7SUFDYixxQkFDRSw4REFBQ0gsZ0JBQWdCaUIsUUFBUTtRQUFDQyxPQUFPbkI7a0JBQU9pQjs7Ozs7O0FBRTVDLEVBQUU7QUFFSyxNQUFNRyxVQUFVLElBQU0xQixpREFBVUEsQ0FBQ08saUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2FwcC8uL2ZpcmViYXNlL2F1dGguanM/NjFjYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IG9uQXV0aFN0YXRlQ2hhbmdlZCwgc2lnbk91dCBhcyBhdXRoU2lnbk91dCB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XHJcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiLi9maXJlYmFzZVwiO1xyXG5jb25zdCBBdXRoVXNlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHtcclxuICBhdXRoVXNlcjogbnVsbCxcclxuICBpc0xvYWRpbmc6IHRydWUsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlRmlyZWJhc2VBdXRoKCkge1xyXG4gIGNvbnN0IFthdXRoVXNlciwgc2V0QXV0aFVzZXJdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICBjb25zdCBhdXRoU3RhdGVDaGFnZWQgPSBhc3luYyAodXNlcikgPT4ge1xyXG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xyXG4gICAgaWYgKCF1c2VyKSB7XHJcbiAgICAgIHNldEF1dGhVc2VyKG51bGwpO1xyXG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBzZXRBdXRoVXNlcih7XHJcbiAgICAgIHVpZDogdXNlci51aWQsXHJcbiAgICAgIHVzZXJuYW1lOiB1c2VyLmRpc3BsYXlOYW1lLFxyXG4gICAgICBlbWFpbDogdXNlci5lbWFpbCxcclxuICAgIH0pO1xyXG4gICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICB9O1xyXG4gIGNvbnN0IFNpZ25PdXQgPSAoKSA9PiB7XHJcbiAgICBhdXRoU2lnbk91dChhdXRoKS50aGVuKCgpID0+IHtcclxuICAgICAgc2V0QXV0aFVzZXIobnVsbCk7XHJcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdW5zdWJzY3JpYmUgPSBvbkF1dGhTdGF0ZUNoYW5nZWQoYXV0aCwgYXV0aFN0YXRlQ2hhZ2VkKTtcclxuICAgIHJldHVybiAoKSA9PiB1bnN1YnNjcmliZSgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGF1dGhVc2VyLFxyXG4gICAgaXNMb2FkaW5nLFxyXG4gICAgc2V0QXV0aFVzZXIsXHJcbiAgICBTaWduT3V0LFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBBdXRoVXNlclByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IGF1dGggPSB1c2VGaXJlYmFzZUF1dGgoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPEF1dGhVc2VyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17YXV0aH0+e2NoaWxkcmVufTwvQXV0aFVzZXJDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXNlQXV0aCA9ICgpID0+IHVzZUNvbnRleHQoQXV0aFVzZXJDb250ZXh0KTtcclxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJzaWduT3V0IiwiYXV0aFNpZ25PdXQiLCJhdXRoIiwiQXV0aFVzZXJDb250ZXh0IiwiYXV0aFVzZXIiLCJpc0xvYWRpbmciLCJ1c2VGaXJlYmFzZUF1dGgiLCJzZXRBdXRoVXNlciIsInNldElzTG9hZGluZyIsImF1dGhTdGF0ZUNoYWdlZCIsInVzZXIiLCJ1aWQiLCJ1c2VybmFtZSIsImRpc3BsYXlOYW1lIiwiZW1haWwiLCJTaWduT3V0IiwidGhlbiIsInVuc3Vic2NyaWJlIiwiQXV0aFVzZXJQcm92aWRlciIsImNoaWxkcmVuIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZUF1dGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./firebase/auth.js\n");

/***/ }),

/***/ "./firebase/firebase.js":
/*!******************************!*\
  !*** ./firebase/firebase.js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"auth\": () => (/* binding */ auth),\n/* harmony export */   \"db\": () => (/* binding */ db)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\nconst firebaseConfig = {\n    apiKey: \"AIzaSyCXJDg1dFBWVjyzjQ_0im9MjxfcZU4YjqY\",\n    authDomain: \"news-app-d24a3.firebaseapp.com\",\n    projectId: \"news-app-d24a3\",\n    storageBucket: \"news-app-d24a3.appspot.com\",\n    messagingSenderId: \"611028498369\",\n    appId: \"1:611028498369:web:a6702d9fc57eb6024e6140\",\n    measurementId: \"G-RB4XMMP3WT\"\n};\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(app);\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(app);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9maXJlYmFzZS9maXJlYmFzZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUE2QztBQUNMO0FBQ1U7QUFFbEQsTUFBTUcsaUJBQWlCO0lBQ3JCQyxRQUFRO0lBQ1JDLFlBQVk7SUFDWkMsV0FBVztJQUNYQyxlQUFlO0lBQ2ZDLG1CQUFtQjtJQUNuQkMsT0FBTztJQUNQQyxlQUFlO0FBR2pCO0FBRUEsTUFBTUMsTUFBTVgsMkRBQWFBLENBQUNHO0FBQ25CLE1BQU1TLE9BQU9YLHNEQUFPQSxDQUFDVSxLQUFLO0FBQzFCLE1BQU1FLEtBQUtYLGdFQUFZQSxDQUFDUyxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2FwcC8uL2ZpcmViYXNlL2ZpcmViYXNlLmpzP2U3NjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5pdGlhbGl6ZUFwcCB9IGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcclxuaW1wb3J0IHsgZ2V0QXV0aCB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XHJcbmltcG9ydCB7IGdldEZpcmVzdG9yZSB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcclxuXHJcbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xyXG4gIGFwaUtleTogXCJBSXphU3lDWEpEZzFkRkJXVmp5empRXzBpbTlNanhmY1pVNFlqcVlcIixcclxuICBhdXRoRG9tYWluOiBcIm5ld3MtYXBwLWQyNGEzLmZpcmViYXNlYXBwLmNvbVwiLFxyXG4gIHByb2plY3RJZDogXCJuZXdzLWFwcC1kMjRhM1wiLFxyXG4gIHN0b3JhZ2VCdWNrZXQ6IFwibmV3cy1hcHAtZDI0YTMuYXBwc3BvdC5jb21cIixcclxuICBtZXNzYWdpbmdTZW5kZXJJZDogXCI2MTEwMjg0OTgzNjlcIixcclxuICBhcHBJZDogXCIxOjYxMTAyODQ5ODM2OTp3ZWI6YTY3MDJkOWZjNTdlYjYwMjRlNjE0MFwiLFxyXG4gIG1lYXN1cmVtZW50SWQ6IFwiRy1SQjRYTU1QM1dUXCIsXHJcbiBcclxuXHJcbn07XHJcblxyXG5jb25zdCBhcHAgPSBpbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcclxuZXhwb3J0IGNvbnN0IGF1dGggPSBnZXRBdXRoKGFwcCk7XHJcbmV4cG9ydCBjb25zdCBkYiA9IGdldEZpcmVzdG9yZShhcHApO1xyXG4iXSwibmFtZXMiOlsiaW5pdGlhbGl6ZUFwcCIsImdldEF1dGgiLCJnZXRGaXJlc3RvcmUiLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIm1lYXN1cmVtZW50SWQiLCJhcHAiLCJhdXRoIiwiZGIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./firebase/firebase.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _firebase_FavoritesContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/firebase/FavoritesContext */ \"./firebase/FavoritesContext.js\");\n/* harmony import */ var _firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/firebase/auth */ \"./firebase/auth.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase_FavoritesContext__WEBPACK_IMPORTED_MODULE_1__, _firebase_auth__WEBPACK_IMPORTED_MODULE_2__]);\n([_firebase_FavoritesContext__WEBPACK_IMPORTED_MODULE_1__, _firebase_auth__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nfunction App({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \" News App\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\rajpu\\\\Downloads\\\\New folder (9)\\\\Newsapp\\\\pages\\\\_app.js\",\n                    lineNumber: 10,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\rajpu\\\\Downloads\\\\New folder (9)\\\\Newsapp\\\\pages\\\\_app.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_firebase_auth__WEBPACK_IMPORTED_MODULE_2__.AuthUserProvider, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_firebase_FavoritesContext__WEBPACK_IMPORTED_MODULE_1__.FavoritesProvider, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\rajpu\\\\Downloads\\\\New folder (9)\\\\Newsapp\\\\pages\\\\_app.js\",\n                        lineNumber: 14,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\rajpu\\\\Downloads\\\\New folder (9)\\\\Newsapp\\\\pages\\\\_app.js\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\rajpu\\\\Downloads\\\\New folder (9)\\\\Newsapp\\\\pages\\\\_app.js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0U7QUFDYjtBQUNyQjtBQUNEO0FBRWQsU0FBU0csSUFBSSxFQUFFQyxVQUFTLEVBQUVDLFVBQVMsRUFBRSxFQUFFO0lBQ3BELHFCQUNFOzswQkFDRSw4REFBQ0gsa0RBQUlBOzBCQUNILDRFQUFDSTs4QkFBTTs7Ozs7Ozs7Ozs7MEJBRVQsOERBQUNMLDREQUFnQkE7MEJBQ2YsNEVBQUNELHlFQUFpQkE7OEJBQ2hCLDRFQUFDSTt3QkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLbEMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9hcHAvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmF2b3JpdGVzUHJvdmlkZXIgfSBmcm9tIFwiQC9maXJlYmFzZS9GYXZvcml0ZXNDb250ZXh0XCI7XG5pbXBvcnQgeyBBdXRoVXNlclByb3ZpZGVyIH0gZnJvbSBcIkAvZmlyZWJhc2UvYXV0aFwiO1xuaW1wb3J0IFwiQC9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPiBOZXdzIEFwcDwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8QXV0aFVzZXJQcm92aWRlcj5cbiAgICAgICAgPEZhdm9yaXRlc1Byb3ZpZGVyPlxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgPC9GYXZvcml0ZXNQcm92aWRlcj5cbiAgICAgIDwvQXV0aFVzZXJQcm92aWRlcj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJGYXZvcml0ZXNQcm92aWRlciIsIkF1dGhVc2VyUHJvdmlkZXIiLCJIZWFkIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

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

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/auth");;

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/firestore");;

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