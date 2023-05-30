"use strict";
(self["webpackChunkassig_front"] = self["webpackChunkassig_front"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 4793);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4650);



const routes = [
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    { path: '**', pathMatch: 'full', redirectTo: 'login' },
    {
        path: 'login',
        pathMatch: 'full',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_modules_login_login_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/login/login.module */ 9758)).then((m) => m.LoginModule),
    },
    {
        path: 'products',
        pathMatch: 'full',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_modules_products_products_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/products/products.module */ 2252)).then((m) => m.ProductsModule),
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes, { useHash: true }), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 4793);


class AppComponent {
    constructor() {
        this.title = 'hub-central';
        this.height = document.documentElement.clientHeight;
        this.width = document.documentElement.clientWidth;
    }
    ngOnInit() {
        localStorage.removeItem("PageNo");
    }
    ngAfterViewInit() {
        setInterval(() => {
            this.height = document.documentElement.clientHeight;
            this.width = document.documentElement.clientWidth;
        }, 2000);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 4, consts: [[1, "main"], [1, "loader"], ["id", "router-main"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx.height + "px")("width", ctx.width + "px");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: [".main[_ngcontent-%COMP%]{\r\n    position: fixed;\r\n    z-index: 1;\r\n    display: none;\r\n    place-content: center;\r\n}\r\n.loader[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width:  48px;\r\n  height: 48px;\r\n  background: #01fff2;\r\n  transform: rotateX(65deg) rotate(45deg);\r\n  transform: perspective(200px) rotateX(65deg) rotate(45deg); \r\n  color: #fff;\r\n  animation: layers1 1s linear infinite alternate;\r\n}\r\n.loader[_ngcontent-%COMP%]:after {\r\n  content: '';\r\n  position: absolute;\r\n  inset: 0;\r\n  background: rgba(255, 255, 255, 0.7);\r\n  animation: layerTr 1s linear infinite alternate;\r\n}\r\n@keyframes layers1 {\r\n  0% { box-shadow: 0px 0px 0 0px  }\r\n 90% , 100% { box-shadow: 20px 20px 0 -4px  }\r\n}\r\n@keyframes layerTr {\r\n  0% { transform:  translate(0, 0) scale(1) }\r\n  100% {  transform: translate(-25px, -25px) scale(1) }\r\n}"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 1481);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ 4934);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-toastr */ 4383);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 5765);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-pagination */ 8567);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 4006);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 529);
/* harmony import */ var _shared_interceptors_httpInterceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/interceptors/httpInterceptor */ 8370);
/* harmony import */ var src_shared_services_call_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/services/call-api.service */ 1022);
/* harmony import */ var bn_ng_idle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bn-ng-idle */ 674);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4650);







// import { NgSelectModule } from '@ng-select/ng-select';







// import { NgxDocViewerModule } from 'ngx-doc-viewer';
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [
        src_shared_services_call_api_service__WEBPACK_IMPORTED_MODULE_4__.CallApiService,
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HTTP_INTERCEPTORS, useClass: _shared_interceptors_httpInterceptor__WEBPACK_IMPORTED_MODULE_3__.httpInterceptor, multi: true },
        bn_ng_idle__WEBPACK_IMPORTED_MODULE_7__.BnNgIdleService
    ], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule,
        // NgSelectModule,
        ngx_pagination__WEBPACK_IMPORTED_MODULE_2__.NgxPaginationModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
        ngx_toastr__WEBPACK_IMPORTED_MODULE_12__.ToastrModule.forRoot({
            maxOpened: 1,
            autoDismiss: true,
            progressBar: true,
            timeOut: 3000,
            positionClass: 'toast-top-right'
        })] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule,
        // NgSelectModule,
        ngx_pagination__WEBPACK_IMPORTED_MODULE_2__.NgxPaginationModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_12__.ToastrModule] }); })();


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    // nodeApiUrlLatest: 'http://localhost:3000/api/'
    nodeApiUrlLatest: 'https://assig-api-node.azurewebsites.net/api/'
};


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 1481);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 8370:
/*!****************************************************!*\
  !*** ./src/shared/interceptors/httpInterceptor.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "httpInterceptor": () => (/* binding */ httpInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 2843);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 4326);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 5625);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 8746);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 262);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 4793);





class httpInterceptor {
    constructor(router) {
        this.router = router;
    }
    intercept(req, next) {
        var loadingContainer1 = document.getElementsByClassName('main').item(0);
        var loadingContainer = document.getElementsByClassName('loader').item(0);
        var routerMain = document.getElementById('router-main');
        loadingContainer1.style.display = 'inline-grid';
        loadingContainer.style.display = 'block';
        routerMain.classList.add('no-click');
        if (routerMain != null) {
            routerMain.style.filter = 'blur(2px)';
        }
        const token = localStorage.getItem('activeUser');
        // console.log(token);
        if (token) {
            let session_obj = JSON.parse(localStorage.getItem('activeUser'));
            req = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + session_obj.token) });
        }
        if (!req.headers.has('Content-Type')) {
            req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
        }
        req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
        return next.handle(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.delay)(1000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(2), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.finalize)(() => {
            loadingContainer1.style.display = 'none';
            loadingContainer.style.display = 'none';
            routerMain.classList.remove('no-click');
            routerMain.style.filter = null;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((error) => {
            loadingContainer1.style.display = 'none';
            loadingContainer.style.display = 'none';
            if (error.status == 401) {
                // 401 handled in auth.interceptor
                //this.toastr.error(error.message);
                localStorage.removeItem('activetUser');
                this.router.navigate(['/logout']);
            }
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(error);
        }));
    }
}
httpInterceptor.ɵfac = function httpInterceptor_Factory(t) { return new (t || httpInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router)); };
httpInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: httpInterceptor, factory: httpInterceptor.ɵfac });


/***/ }),

/***/ 1022:
/*!*************************************************!*\
  !*** ./src/shared/services/call-api.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CallApiService": () => (/* binding */ CallApiService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2843);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 5625);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 262);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 529);





class CallApiService {
    constructor(http) {
        this.http = http;
    }
    post(userData, postUrl) {
        return this.http.post(postUrl, JSON.stringify(userData))
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.retry)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.errorHandler));
    }
    excractData(res) {
        let body = res.json();
        return body || {};
    }
    errorHandler(error) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(error || 'Server Error');
    }
}
CallApiService.ɵfac = function CallApiService_Factory(t) { return new (t || CallApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient)); };
CallApiService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: CallApiService, factory: CallApiService.ɵfac, providedIn: 'root' });


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);