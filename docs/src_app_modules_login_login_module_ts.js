"use strict";
(self["webpackChunkassig_front"] = self["webpackChunkassig_front"] || []).push([["src_app_modules_login_login_module_ts"],{

/***/ 556:
/*!*******************************************************!*\
  !*** ./src/app/modules/login/login-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginRoutingModule": () => (/* binding */ LoginRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 4793);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component */ 744);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4650);




const routes = [
    {
        path: '',
        pathMatch: 'full',
        component: _login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent,
    }
];
class LoginRoutingModule {
}
LoginRoutingModule.ɵfac = function LoginRoutingModule_Factory(t) { return new (t || LoginRoutingModule)(); };
LoginRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: LoginRoutingModule });
LoginRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LoginRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 744:
/*!**************************************************!*\
  !*** ./src/app/modules/login/login.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4006);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jwt-decode */ 1816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ 4383);
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.service */ 6519);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 4793);


// import { ToastrService } from 'ngx-toastr';
// import { Md5 } from 'ts-md5/dist/md5';






class LoginComponent {
    constructor(toastr, el, formbuilder, loginService, router) {
        this.toastr = toastr;
        this.el = el;
        this.formbuilder = formbuilder;
        this.loginService = loginService;
        this.router = router;
        this.forgetPasswordModalOpen = false;
        this.pass = 'password';
        this.pass_title = 'Show';
        this.loginFormSubmitted = false;
        this.timeleft = 15;
        this.baseurl = '';
    }
    ngOnInit() {
        this.baseurl = document.location.protocol + '//' + document.location.hostname + ':4200';
        localStorage.clear();
        this.LoginForm = this.formbuilder.group({
            email: ['assignment@test.com', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            password: ['123456', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
        });
    }
    get f() {
        return this.LoginForm.controls;
    }
    viewpass() {
        if (this.pass != 'password') {
            this.pass = 'password';
            this.pass_title = 'Show';
        }
        else {
            this.pass = 'text';
            this.pass_title = 'Hide';
        }
    }
    onSubmit() {
        this.loginFormSubmitted = true;
        let data = {
            id: this.f.email.value,
            pass: this.f.password.value,
            name: this.f.name.value,
        };
        // return;
        this.timeleft = 15;
        if (this.LoginForm.valid) {
            this.loginService.login(data).subscribe((resData) => {
                if (resData.status) {
                    localStorage.setItem('login', '1');
                    localStorage.setItem('activeUser', JSON.stringify(resData));
                    let localStorageData = localStorage.getItem('activeUser');
                    if (localStorageData != null) {
                        let localStorageObject = JSON.parse(localStorageData);
                        let token = localStorageObject.token;
                        let decodedTokenData = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_0__["default"])(token);
                        let decodedTokenDataString = JSON.stringify(decodedTokenData);
                    }
                    this.router.navigate(['/products']);
                }
                else {
                    this.toastr.error('User Id Or Password Does not Match. Please refer to readme on git for details.', 'Oops!');
                }
            });
        }
        else {
            this.toastr.error('All Fields are Mandatory.', 'Oops!');
        }
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_login_service__WEBPACK_IMPORTED_MODULE_1__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 18, vars: 1, consts: [[1, "background"], [1, "shape"], [1, "log-form", 3, "formGroup"], ["for", "username"], ["type", "text", "placeholder", "Your Name", "id", "username", "formControlName", "name"], ["type", "text", "placeholder", "Registered Email", "id", "username", "formControlName", "email"], ["for", "password"], ["type", "password", "placeholder", "Password", "id", "password", "formControlName", "password"], [1, "social", 3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 1)(2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "form", 2)(4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Login Here");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Your Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "User ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoginComponent_Template_div_click_15_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, " LOG IN ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.LoginForm);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName], styles: [".background[_ngcontent-%COMP%]{\r\nwidth: 430px;\r\nheight: 430px;\r\nposition: absolute;\r\ntransform: translate(-45%,30%);\r\nleft: 50%;\r\ntop: 50%;\r\n}\r\n.background[_ngcontent-%COMP%]   .shape[_ngcontent-%COMP%]{\r\nheight: 200px;\r\nwidth: 200px;\r\nposition: absolute;\r\nborder-radius: 50%;\r\n}\r\n.shape[_ngcontent-%COMP%]:first-child{\r\nbackground: linear-gradient(\r\n  #1845ad,\r\n  #23a2f6\r\n);\r\nleft: -80px;\r\ntop: -80px;\r\n}\r\n.shape[_ngcontent-%COMP%]:last-child{\r\nbackground: linear-gradient(\r\n  to right,\r\n  #ff512f,\r\n  #f09819\r\n);\r\nright: -30px;\r\nbottom: -80px;\r\n}\r\nform[_ngcontent-%COMP%]{\r\nheight: 520px;\r\nwidth: 400px;\r\nbackground-color: rgba(255,255,255,0.13);\r\nposition: absolute;\r\ntransform: translate(-50%,17%);\r\ntop: 50%;\r\nleft: 50%;\r\nborder-radius: 10px;\r\n-webkit-backdrop-filter: blur(5rem);\r\n        backdrop-filter: blur(5rem);\r\nborder: 2px solid rgba(255,255,255,0.1);\r\nbox-shadow: 0 0 40px rgba(8,7,16,0.6);\r\npadding: 5px 35px;\r\n}\r\nform[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{\r\nfont-family: 'Poppins',sans-serif;\r\ncolor: #ffffff;\r\nletter-spacing: 0.5px;\r\noutline: none;\r\nborder: none;\r\n}\r\nform[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\nfont-size: 32px;\r\nfont-weight: 500;\r\nline-height: 42px;\r\ntext-align: center;\r\n}\r\nlabel[_ngcontent-%COMP%]{\r\ndisplay: block;\r\nmargin-top: 30px;\r\nfont-size: 16px;\r\nfont-weight: 500;\r\n}\r\ninput[_ngcontent-%COMP%]{\r\ndisplay: block;\r\nheight: 50px;\r\nwidth: 100%;\r\nbackground-color: rgba(255,255,255,0.07);\r\nborder-radius: 3px;\r\npadding: 0 10px;\r\nmargin-top: 8px;\r\nfont-size: 14px;\r\nfont-weight: 300;\r\n}\r\n[_ngcontent-%COMP%]::placeholder{\r\ncolor: #e5e5e5;\r\n}\r\nbutton[_ngcontent-%COMP%]{\r\nmargin-top: 50px;\r\nwidth: 100%;\r\nbackground-color: #ffffff;\r\ncolor: #080710;\r\npadding: 15px 0;\r\nfont-size: 18px;\r\nfont-weight: 600;\r\nborder-radius: 5px;\r\ncursor: pointer;\r\n}\r\n.social[_ngcontent-%COMP%]{\r\nmargin-top: 30px;\r\ndisplay: flex;\r\ncursor: pointer;\r\n}\r\n.social[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\nbackground: red;\r\nwidth: 100%;\r\nborder-radius: 3px;\r\npadding: 5px 10px 10px 5px;\r\nbackground-color: rgba(42, 82, 195, 0.4);\r\ncolor: #eaf0fb;\r\ntext-align: center;\r\n}\r\n.social[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:hover{\r\nbackground-color: rgba(17, 68, 179, 0.5);\r\n}\r\n.social[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\nmargin-right: 4px;\r\n}"] });


/***/ }),

/***/ 9758:
/*!***********************************************!*\
  !*** ./src/app/modules/login/login.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginModule": () => (/* binding */ LoginModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6895);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 556);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component */ 744);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4006);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4650);





class LoginModule {
}
LoginModule.ɵfac = function LoginModule_Factory(t) { return new (t || LoginModule)(); };
LoginModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: LoginModule });
LoginModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](LoginModule, { declarations: [_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule] }); })();


/***/ }),

/***/ 6519:
/*!************************************************!*\
  !*** ./src/app/modules/login/login.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginService": () => (/* binding */ LoginService)
/* harmony export */ });
/* harmony import */ var _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/helpers/constants */ 2545);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var _shared_services_call_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/call-api.service */ 1022);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 529);




class LoginService {
    constructor(_CallApiService, http) {
        this._CallApiService = _CallApiService;
        this.http = http;
        this.login_url = _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_0__.login_url;
    }
    login(userData) {
        return this._CallApiService.post(userData, this.login_url);
    }
}
LoginService.ɵfac = function LoginService_Factory(t) { return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_shared_services_call_api_service__WEBPACK_IMPORTED_MODULE_1__.CallApiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
LoginService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: LoginService, factory: LoginService.ɵfac, providedIn: 'root' });


/***/ })

}]);