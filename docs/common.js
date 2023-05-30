"use strict";
(self["webpackChunkassig_front"] = self["webpackChunkassig_front"] || []).push([["common"],{

/***/ 2545:
/*!*****************************************!*\
  !*** ./src/shared/helpers/constants.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "crud_operation_url": () => (/* binding */ crud_operation_url),
/* harmony export */   "login_url": () => (/* binding */ login_url),
/* harmony export */   "service_baseurl": () => (/* binding */ service_baseurl)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);

/************************Api base URL******************************/
const service_baseurl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.nodeApiUrlLatest;
//  ng build --base-href=assig_front
const login_url = service_baseurl + "login";
const crud_operation_url = service_baseurl + "crud_operation";


/***/ }),

/***/ 1816:
/*!*********************************************************!*\
  !*** ./node_modules/jwt-decode/build/jwt-decode.esm.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvalidTokenError": () => (/* binding */ n),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function e(e) {
  this.message = e;
}

e.prototype = new Error(), e.prototype.name = "InvalidCharacterError";

var r = "undefined" != typeof window && window.atob && window.atob.bind(window) || function (r) {
  var t = String(r).replace(/=+$/, "");
  if (t.length % 4 == 1) throw new e("'atob' failed: The string to be decoded is not correctly encoded.");

  for (var n, o, a = 0, i = 0, c = ""; o = t.charAt(i++); ~o && (n = a % 4 ? 64 * n + o : o, a++ % 4) ? c += String.fromCharCode(255 & n >> (-2 * a & 6)) : 0) o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(o);

  return c;
};

function t(e) {
  var t = e.replace(/-/g, "+").replace(/_/g, "/");

  switch (t.length % 4) {
    case 0:
      break;

    case 2:
      t += "==";
      break;

    case 3:
      t += "=";
      break;

    default:
      throw "Illegal base64url string!";
  }

  try {
    return function (e) {
      return decodeURIComponent(r(e).replace(/(.)/g, function (e, r) {
        var t = r.charCodeAt(0).toString(16).toUpperCase();
        return t.length < 2 && (t = "0" + t), "%" + t;
      }));
    }(t);
  } catch (e) {
    return r(t);
  }
}

function n(e) {
  this.message = e;
}

function o(e, r) {
  if ("string" != typeof e) throw new n("Invalid token specified");
  var o = !0 === (r = r || {}).header ? 0 : 1;

  try {
    return JSON.parse(t(e.split(".")[o]));
  } catch (e) {
    throw new n("Invalid token specified: " + e.message);
  }
}

n.prototype = new Error(), n.prototype.name = "InvalidTokenError";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (o);
 //# sourceMappingURL=jwt-decode.esm.js.map

/***/ })

}]);