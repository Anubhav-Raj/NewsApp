"use strict";
exports.id = 788;
exports.ids = [788];
exports.modules = {

/***/ 788:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ FavoritesProvider),
/* harmony export */   "r": () => (/* binding */ useFavorites)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6555);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_2__]);
uuid__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


 // Import the uuid library
const FavoritesContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const FavoritesProvider = ({ children  })=>{
    const [favorites, setFavorites] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>{
        if (typeof localStorage !== "undefined") {
            const storedFavorites = localStorage.getItem("favorites");
            return storedFavorites ? JSON.parse(storedFavorites) : [];
        }
        return [];
    });
    // Update localStorage whenever favorites change
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (typeof localStorage !== "undefined") {
            localStorage.setItem("favorites", JSON.stringify(favorites));
        }
    }, [
        favorites
    ]);
    const toggleFavorite = (article)=>{
        const isFavorite = favorites.some((fav)=>fav.title === article.title);
        if (isFavorite) {
            // Remove from favorites
            const updatedFavorites = favorites.filter((fav)=>fav.title !== article.title);
            setFavorites(updatedFavorites);
        } else {
            // Add to favorites with a unique ID
            const updatedFavorites = [
                ...favorites,
                {
                    ...article,
                    uid: (0,uuid__WEBPACK_IMPORTED_MODULE_2__.v4)()
                }
            ];
            setFavorites(updatedFavorites);
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FavoritesContext.Provider, {
        value: {
            favorites,
            toggleFavorite
        },
        children: children
    });
};
const useFavorites = ()=>{
    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(FavoritesContext);
    if (!context) {
        throw new Error("useFavorites must be used within a FavoritesContextProvider");
    }
    return context;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;