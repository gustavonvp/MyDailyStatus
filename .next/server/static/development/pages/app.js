module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./firebase-secret.json":
/*!******************************!*\
  !*** ./firebase-secret.json ***!
  \******************************/
/*! exports provided: type, project_id, private_key_id, private_key, client_email, client_id, auth_uri, token_uri, auth_provider_x509_cert_url, client_x509_cert_url, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"type\":\"service_account\",\"project_id\":\"my-dailystatus\",\"private_key_id\":\"1d80b9a457a21d6757138747a8881c0148c7e6d7\",\"private_key\":\"-----BEGIN PRIVATE KEY-----\\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCQXI93/+Vbz218\\nprKdZ9um9vz+h6UcscwduPYSNffLd9MAExP3ULHv3CklnwrABbPpthOSqrL2hZb8\\ng4rdhAUgQE8OhmnGMn0bx7lcqi1lDrDCZWMUrZTCvZfs7C+doFS5byAXaKL8PTX4\\nAaz0+HwQA2sP9vBpwgYCuNpkqgXom+ZOdBF18dG1lnq+FFKfn5XdPhAmnhTeYKQa\\nuQQyuGjzftjn+4xfaHhJrLmVnnnjOOI1dZv1vEaXMF4FdMzNZsWKPHIyxzxTcKKx\\n8kVgPJy2YeOWGvh9HSBj+sGwnPoY01NFh0pxjwE0xLacVrLiNZiIgdyFJ0Qfebnp\\nMvrJbZQ1AgMBAAECggEAAvHTmCY6gdqDtTZnqX/kCLSiot58puhjIK56w0Xuimvx\\nr3kajMGzBd1+/JF3h3f8teVM4oHKdlTYDsm86P/RMVmedmfJFVqtfdLF6Sn5FKw6\\ncGMSpLbvTeABwiEFmtJMzoUbXN7f7dBunvxwKevXomWV2kfpmrHZq+++JK3pj1d2\\n5BpgkCdwuSrGT87WJ3Q3MLeG0sjLfCS/SdEsrwa42Md7W2fekj6Tf8H+DnFTDHki\\nvCud4657xU7RP15eaL4oEs0tWz7ufGrs1Zt4Z67uVgHEDYiylctsH+3nc5hc5WGq\\nyR2hVOTLbjuJyNkINrD/ZvxlBpAHzMn5ZUSY7AsAAQKBgQDLqylphRWK/FEdBx+Z\\nDXygNuAeA1Cz1Vlo6cPUZCQkzAVHciV0vy4/uOCx50P1LaDBEQsVHGgVALQIfza6\\n76Y0MmAv5ooc7QbUM+8yMpOiNvU5K9V3HjvffZbp6RQM/9dGmYP/LZas5hA7H1hd\\nFZqh9ah4zvTvdgeqVT8ny3dAAQKBgQC1dFJ+tFha1HvaO4/ZTfe1vUlaBpLN72Yr\\n/ijL4YlpyLu5qLG2F1oPNrw1jumhKsIa6tJPN8hs6rXofFuaif7q75jR64Nqvyc7\\nAqBVhggJVPfWhKG1v3jcrVEeHkhVjbFohQUflEzVpIrO6MSHLuHNDyJ26I0IhFZf\\nY0/wSL1UNQKBgQCwVVe8cSnutHfx3un/lEqzV++AbLRhjrUjfUk8SRt19GIZsn01\\ncBS1vPZlcOpIiyGkJoJm27pNfNdih+m1vakzhe37aulnE9yWuwQ8fMePaW+0+PuP\\nb1C9NboEePUQMC2NhXpf43OR7HpfBct2hC7mTI95UQ2FibYnRjkw1htAAQKBgANq\\np0r/dlJvgc2AJZs/3pQrdkAds5HxGglmBbqhCodVYkOCq6X0FpwGudCAWmHQfksn\\ndMJNGJcEbFxuSwND6erejBAX0SenZcO0rvQtS+VxFiGR6cGUU2BEWyyoAVCrFFYV\\nex03G6NCL+LpexnYhiPoTwvSISWx6DZvlke99uKpAoGAdrKuzXNNILRoUMNkdGRe\\nmW7adCVr0pJMwA64qt7D6LuMpndLUNTLhpbQkgYc9qjUhxhLYo00i8EfJb/eo9un\\nXb5X4nG4vSx11bi+QF9oED3mhQ+G7/CemrK5QIotBd2SRwOwiztJ2U8qAJqjqh/R\\nkga4SGSPcw/cr81/pDPId0s=\\n-----END PRIVATE KEY-----\\n\",\"client_email\":\"firebase-adminsdk-tas2e@my-dailystatus.iam.gserviceaccount.com\",\"client_id\":\"118293257014579812613\",\"auth_uri\":\"https://accounts.google.com/o/oauth2/auth\",\"token_uri\":\"https://oauth2.googleapis.com/token\",\"auth_provider_x509_cert_url\":\"https://www.googleapis.com/oauth2/v1/certs\",\"client_x509_cert_url\":\"https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-tas2e%40my-dailystatus.iam.gserviceaccount.com\"}");

/***/ }),

/***/ "./lib/auth0.js":
/*!**********************!*\
  !*** ./lib/auth0.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth0/nextjs-auth0 */ "@auth0/nextjs-auth0");
/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (Object(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__["initAuth0"])({
  clientId: process.env.AUTH0_CLIENT_ID,
  clientSecret: process.env.AUTH0_CLIENT_SECRET,
  scope: process.env.AUTH0_SCOPE,
  domain: process.env.AUTH0_DOMAIN,
  redirectUri: process.env.AUTH0_REDIRECT_URI,
  postLogoutRedirectUri: process.env.AUTH0_LOGOUT_REDIRECT_URI,
  session: {
    cookieSecret: process.env.AUTH0_SESSION_SECRET,
    cookieLifetime: process.env.AUTH0_SESSION_COOKIE_TIME
  }
}));

/***/ }),

/***/ "./lib/db.js":
/*!*******************!*\
  !*** ./lib/db.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const admin = __webpack_require__(/*! firebase-admin */ "firebase-admin");

const secret = __webpack_require__(/*! ../firebase-secret.json */ "./firebase-secret.json");

const {
  GeoFirestore
} = __webpack_require__(/*! geofirestore */ "geofirestore");

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(secret)
  });
}

const firestore = admin.firestore();
const db = new GeoFirestore(firestore);
module.exports = {
  db
};

/***/ }),

/***/ "./lib/geo.js":
/*!********************!*\
  !*** ./lib/geo.js ***!
  \********************/
/*! exports provided: distance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distance", function() { return distance; });
function deg2rad(deg) {
  return deg * (Math.PI / 180);
}

function distance(lat1, lon1, lat2, lon2) {
  var R = 6371; // Radius of the earth in km

  var dLat = deg2rad(lat2 - lat1); // deg2rad below

  var dLon = deg2rad(lon2 - lon1);
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c; // Distance in km

  return d;
}

/***/ }),

/***/ "./pages/app.js":
/*!**********************!*\
  !*** ./pages/app.js ***!
  \**********************/
/*! exports provided: default, getServerSideProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_auth0__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/auth0 */ "./lib/auth0.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/db */ "./lib/db.js");
/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_lib_db__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_geo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/geo */ "./lib/geo.js");
var _jsxFileName = "C:\\MyDailyStatus\\pages\\app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const App = props => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!props.isAuth) {
      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/');
    } else if (props.forceCreate) {
      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/create-status');
    }
  });

  if (!props.isAuth || props.forceCreate) {
    return null;
  }

  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, "Status pr\xF3ximos a voc\xEA: "), __jsx("table", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, props.checkins.map(checkin => {
    return __jsx("tr", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 21
      }
    }, __jsx("td", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 24
      }
    }, checkin.id === props.user.sub && 'Seu status:'), __jsx("td", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 24
      }
    }, checkin.status), __jsx("td", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 24
      }
    }, JSON.stringify(checkin.coords)), __jsx("td", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 25
      }
    }, checkin.distance));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (App);
async function getServerSideProps({
  req,
  res
}) {
  const session = await _lib_auth0__WEBPACK_IMPORTED_MODULE_1__["default"].getSession(req);

  if (session) {
    const today = new Date();
    const currentDate = today.getFullYear() + '-' + today.getMonth() + '-' + today.getDate();
    const todaysCheckin = await _lib_db__WEBPACK_IMPORTED_MODULE_3__["db"].collection('markers').doc(currentDate).collection('checks').doc(session.user.sub).get();
    const todaysData = todaysCheckin.data();
    let forceCreate = true;

    if (todaysData) {
      //pode ver os outros checkins
      forceCreate = false;
      const checkins = await _lib_db__WEBPACK_IMPORTED_MODULE_3__["db"].collection('markers').doc(currentDate).collection('checks').near({
        center: todaysData.coordinates,
        radius: 1000
      }).get();
      const checkinsList = [];
      checkins.docs.forEach(doc => {
        checkinsList.push({
          id: doc.id,
          status: doc.data().status,
          coords: {
            lat: doc.data().coordinates.latitude,
            long: doc.data().coordinates.longitude
          },
          distance: Object(_lib_geo__WEBPACK_IMPORTED_MODULE_4__["distance"])(todaysData.coordinates.latitude, //38.892060,
          todaysData.coordinates.longitude, //-77.019910,
          doc.data().coordinates.latitude, doc.data().coordinates.longitude).toFixed(2)
        });
      });
      return {
        props: {
          isAuth: true,
          user: session.user,
          forceCreate: false,
          checkins: checkinsList
        }
      };
    }

    return {
      props: {
        isAuth: true,
        user: session.user,
        forceCreate
      }
    };
  }

  ;
  return {
    props: {
      isAuth: false,
      user: {}
    }
  };
}
;

/***/ }),

/***/ 6:
/*!****************************!*\
  !*** multi ./pages/app.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\MyDailyStatus\pages\app.js */"./pages/app.js");


/***/ }),

/***/ "@auth0/nextjs-auth0":
/*!**************************************!*\
  !*** external "@auth0/nextjs-auth0" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@auth0/nextjs-auth0");

/***/ }),

/***/ "firebase-admin":
/*!*********************************!*\
  !*** external "firebase-admin" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase-admin");

/***/ }),

/***/ "geofirestore":
/*!*******************************!*\
  !*** external "geofirestore" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("geofirestore");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=app.js.map