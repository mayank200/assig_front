"use strict";
(self["webpackChunkassig_front"] = self["webpackChunkassig_front"] || []).push([["src_app_modules_products_products_module_ts"],{

/***/ 2727:
/*!*************************************************************!*\
  !*** ./src/app/modules/products/products-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsRoutingModule": () => (/* binding */ ProductsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 4793);
/* harmony import */ var _products_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products.component */ 1089);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4650);




const routes = [
    {
        path: '',
        pathMatch: 'full',
        component: _products_component__WEBPACK_IMPORTED_MODULE_0__.ProductsComponent,
    }
];
class ProductsRoutingModule {
}
ProductsRoutingModule.ɵfac = function ProductsRoutingModule_Factory(t) { return new (t || ProductsRoutingModule)(); };
ProductsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ProductsRoutingModule });
ProductsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ProductsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 1089:
/*!********************************************************!*\
  !*** ./src/app/modules/products/products.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsComponent": () => (/* binding */ ProductsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4006);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ 4383);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 4793);
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products.service */ 1325);
/* harmony import */ var src_shared_services_session_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/shared/services/session.service */ 5478);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6895);









function ProductsComponent_ng_container_40_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 22)(2, "div", 23)(3, "a")(4, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductsComponent_ng_container_40_Template_div_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const cd_r1 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.closecard(cd_r1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductsComponent_ng_container_40_Template_div_click_6_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const cd_r1 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.editCard(cd_r1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductsComponent_ng_container_40_Template_div_click_11_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const cd_r1 = restoredCtx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r6.editCard(cd_r1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "h3", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](18, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "*Click on text to edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const cd_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](cd_r1.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](cd_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](cd_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](cd_r1.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](18, 5, cd_r1.cost));
} }
const _c0 = function (a0) { return { "height": a0 }; };
class ProductsComponent {
    constructor(toastr, el, formbuilder, router, _ProductsService, _SessionService) {
        this.toastr = toastr;
        this.el = el;
        this.formbuilder = formbuilder;
        this.router = router;
        this._ProductsService = _ProductsService;
        this._SessionService = _SessionService;
        this.classlist = '';
        this.nav_text = 'CREATE';
        this.Height = 0;
        this.dataarray = [];
        this.user = '';
    }
    ngOnInit() {
        let data = this._SessionService.get_user_token();
        this.user = data.name;
        this.ProductForm = this.formbuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            category: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            cost: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            id: ['']
        });
        this.getProducts();
    }
    get f() {
        return this.ProductForm.controls;
    }
    addproducts() {
        console.log('asd');
        //  document.getElementById('action').click();
    }
    getProducts() {
        this._ProductsService.crud_operation({ 'action': 'getall' }).subscribe((resData) => {
            if (resData.status) {
                this.dataarray = resData.data;
            }
            else {
                this.dataarray = [];
                this.toastr.error('No Products Are Available.Please Add Product and try again', 'Oops!');
            }
        });
    }
    onSubmit() {
        if (this.ProductForm.valid) {
            if (this.f.id.value != '') {
                let list = {
                    'action': 'update',
                    'id': this.f.id.value.toString(),
                    'name': this.f.name.value.toString(),
                    'category': this.f.category.value.toString(),
                    'cost': this.f.cost.value.toString(),
                    'description': this.f.description.value.toString()
                };
                this._ProductsService.crud_operation(list).subscribe((resData) => {
                    if (resData.status) {
                        this.toastr.success('Product Successfully updated.', 'Oops!');
                        this.getProducts();
                        this.ProductForm.reset();
                        document.getElementById('openedit').click();
                    }
                    else {
                        this.toastr.error('Something Went Wrong.Please Try again.', 'Oops!');
                    }
                });
            }
            else {
                let list = {
                    'action': 'create',
                    'name': this.f.name.value.toString(),
                    'category': this.f.category.value.toString(),
                    'cost': this.f.cost.value.toString(),
                    'description': this.f.description.value.toString()
                };
                this._ProductsService.crud_operation(list).subscribe((resData) => {
                    if (resData.status) {
                        this.toastr.success('Product Successfully Created.', 'Oops!');
                        this.getProducts();
                        this.ProductForm.reset();
                    }
                    else {
                        this.toastr.error('Something Went Wrong.Please Try again.', 'Oops!');
                    }
                });
            }
        }
        console.log(this.ProductForm.valid, this.dataarray);
    }
    closecard(data) {
        this._ProductsService.crud_operation({ 'action': 'delete', 'id': data.id.toString() }).subscribe((resData) => {
            if (resData.status) {
                this.toastr.success('Product Successfully Removed.', 'Oops!');
                this.getProducts();
                this.ProductForm.reset();
            }
            else {
                this.toastr.error('Something Went Wrong.Please Try again.', 'Oops!');
            }
        });
    }
    editCard(data) {
        this.ProductForm.patchValue({
            id: data.id,
            name: data.name,
            category: data.category,
            cost: data.cost,
            description: data.description,
        });
        document.getElementById('openedit').click();
    }
    ngAfterViewInit() {
        setInterval(() => {
            const classCheck = document.getElementById('collapseWidthExample');
            this.Height = window.innerHeight;
            if (classCheck.classList.contains('show') && this.nav_text != 'CLOSE') {
                this.nav_text = 'CLOSE';
            }
            else if (!classCheck.classList.contains('show') && this.nav_text != 'CREATE') {
                this.nav_text = 'CREATE';
                this.ProductForm.patchValue({
                    id: '',
                    name: '',
                    category: '',
                    cost: '',
                    description: '',
                });
            }
        }, 1000);
    }
    logout() {
        if (confirm('Do you want to log out?')) {
            localStorage.clear();
            this.router.navigate(['/login']);
        }
    }
}
ProductsComponent.ɵfac = function ProductsComponent_Factory(t) { return new (t || ProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_products_service__WEBPACK_IMPORTED_MODULE_0__.ProductsService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_shared_services_session_service__WEBPACK_IMPORTED_MODULE_1__.SessionService)); };
ProductsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ProductsComponent, selectors: [["app-products"]], decls: 41, vars: 7, consts: [["id", "openedit", "data-bs-toggle", "collapse", "data-bs-target", "#collapseWidthExample", "aria-expanded", "false", "aria-controls", "collapseWidthExample", 1, "blob-effect-1", 3, "click"], [1, "user"], [1, "blob-effect-2", 3, "click"], [1, "addprod", 3, "ngStyle"], ["id", "collapseWidthExample", 1, "collapse", "collapse-horizontal", "need"], [1, "card", "card-body", "need", 2, "width", "25rem", "overflow-x", "hidden"], [1, "header", 2, "height", "5rem", "width", "100%"], [1, "background"], [1, "shape"], [1, "log-form", 3, "formGroup"], ["for", "username"], ["type", "hidden", "id", "id", "formControlName", "id"], ["type", "text", "placeholder", "Product Name", "id", "username", "formControlName", "name"], ["for", "category"], ["type", "text", "placeholder", "Category", "id", "category", "formControlName", "category"], ["for", "cost"], ["type", "text", "placeholder", "cost", "id", "cost", "formControlName", "cost"], ["for", "description"], ["type", "text", "placeholder", "description", "id", "description", "formControlName", "description"], [1, "social", 3, "click"], [1, "row"], [4, "ngFor", "ngForOf"], [1, "card-container", "col-3"], [1, "card"], [1, "close", 3, "click"], [1, "fa", "fa-times", "close-icon"], [1, "card--display", 2, "cursor", "pointer", 3, "click"], [1, "material-icons"], [1, "card--hover", 2, "cursor", "pointer", 3, "click"], [2, "color", "#1cffd9", "margin-bottom", "1rem", "text-decoration", "underline"], [1, "link"], [1, "text"], [1, "card--border"]], template: function ProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductsComponent_Template_div_click_1_listener() { return ctx.addproducts(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "span")(3, "span")(4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductsComponent_Template_div_click_8_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "span")(10, "span")(11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " Logout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 3)(14, "div", 4)(15, "div", 5)(16, "div", 6)(17, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Create Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "div", 8)(21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "form", 9)(23, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Product Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "input", 11)(26, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "textarea", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductsComponent_Template_div_click_36_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, " Create ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](40, ProductsComponent_ng_container_40_Template, 22, 7, "ng-container", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.nav_text, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Welcome, ", ctx.user, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](5, _c0, ctx.Height != 0 ? ctx.Height + "px" : "40rem"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.ProductForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.dataarray);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CurrencyPipe], styles: [".addprod[_ngcontent-%COMP%]{\r\nheight: 100rem;\r\nwidth: 100%;\r\nposition: absolute;\r\ntop: 0;\r\n}\r\n\r\n.user[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  right: 10rem;\r\n  top: 1.8rem;\r\n  background: none;\r\n  font-size: 1.1rem;\r\n  font-weight: 700;\r\n  color: #ffffff85;\r\n  font-family: cursive;\r\n  width: 30%;\r\n}\r\n\r\n.addprod[_ngcontent-%COMP%]   .need[_ngcontent-%COMP%]{\r\nheight: 100%;\r\nposition: relative;\r\nz-index: 1;\r\n-webkit-backdrop-filter: blur(2rem);\r\n        backdrop-filter: blur(2rem);\r\n}\r\n\r\n.card-body[_ngcontent-%COMP%]{\r\n  background-color: rgba(255, 255, 255, 0.11);\r\n  -webkit-backdrop-filter: blur(4rem);\r\n          backdrop-filter: blur(4rem);\r\n  border: 2px solid #ffffff47;\r\n}\r\n\r\n.text[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    bottom: 0;\r\n    right: 1rem;\r\n    color: yellow;\r\n    font-weight: 500;\r\n    letter-spacing: 0.15rem;\r\n    font-size: 0.6rem;\r\n}\r\n\r\n.close[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  top: 0rem;\r\n  right: 0rem;\r\n  width: 3rem;\r\n  height: 3rem;\r\n  background: #ffffff54;\r\n  margin: 0.2rem;\r\n  border-radius: 15% 10% 15% 118%;\r\n  cursor: pointer;\r\n}\r\n\r\n.close-icon[_ngcontent-%COMP%]{\r\n  font-size: 1.2rem;\r\n  position: absolute;\r\n  top: 0.6rem;\r\n  right: 0.8rem;\r\n  color: #ffffff;\r\n}\r\n\r\n@keyframes rotate-blob {\r\n  0%\r\n  {\r\n  transform: rotate(0deg);\r\n  }\r\n  100% {\r\n  transform: rotate(360deg)\r\n  }\r\n  }\r\n\r\n@keyframes rotate-blob2 {\r\n  0% {\r\n  transform: rotate(360deg)\r\n  }\r\n  100% {\r\n  transform: rotate(0deg);\r\n  }\r\n  }\r\n\r\n.blob-effect-1[_ngcontent-%COMP%] {\r\n  margin-bottom: 5rem;\r\n  z-index: 2;\r\n  position: relative;\r\n  top:1rem;\r\n  left:2%;\r\n  width: 4rem;\r\n  height: 4rem;\r\n  display: grid;\r\n  place-items: center;\r\n  font-size: 0.7rem;\r\n  font-weight: 900;\r\n  color: #e6ff6f;\r\n  }\r\n\r\n.blob-effect-1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1) { position: absolute;\r\n  top: 0px;\r\n  left: 0px;\r\n  width: 100%;\r\n  height: 100%;\r\n  border: 2px solid #4efbeba8;\r\n  border-radius: 38% 62% 63% 37% / 41% 44% 56% 59%;\r\n  transition: 0.5s;\r\n  animation: rotate-blob 5s linear infinite;\r\n  }\r\n\r\n.blob-effect-1[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:nth-child(1) {\r\n  background: rgb(168 243 233 / 28%);\r\n  border: none;\r\n  }\r\n\r\n.blob-effect-1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\r\n    position: absolute;\r\n    top: 0px;\r\n    left: 0px;\r\n    width: 100%;\r\n    height: 100%;\r\n    border: 2px solid #4efbeba8; border-radius: 38% 62% 63% 37% / 41% 44% 56% 59%;\r\n    transition: 0.5s; animation: rotate-blob 4s linear infinite;\r\n    }\r\n\r\n.blob-effect-1[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:nth-child(2) {\r\n    background: rgba(127, 241, 226, 0.28);\r\n    border: none;\r\n    }\r\n\r\n.blob-effect-1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\r\n    position: absolute;\r\n    top: 0px;\r\n    left: 0px;\r\n    width: 100%;\r\n    height: 100%;\r\n    border: 2px solid #4efbeba8;\r\n    border-radius: 38% 62% 63% 37% / 41% 44% 56% 59%;\r\n    transition: 0.5s;\r\n    animation: rotate-blob2 10s linear infinite;\r\n    }\r\n\r\n.blob-effect-1[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:nth-child(3) {\r\n    background: rgba(79, 242, 220, 0.28);\r\n    border: none;\r\n    }\r\n\r\n.blob-effect-2[_ngcontent-%COMP%]{\r\n      margin-bottom: 5rem;\r\n      z-index: 2;\r\n      position: absolute;\r\n      top:0.8rem;\r\n      right:2%;\r\n      width: 4rem;\r\n      height: 4rem;\r\n      display: grid;\r\n      place-items: center;\r\n      font-size: 0.7rem;\r\n      font-weight: 900;\r\n      color: #00ffc2;\r\n    }\r\n\r\n.blob-effect-2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1) { position: absolute;\r\n  top: 0px;\r\n  left: 0px;\r\n  width: 100%;\r\n  height: 100%;\r\n  border: 2px solid #fb544ea8;\r\n  border-radius: 38% 62% 63% 37% / 41% 44% 56% 59%;\r\n  transition: 0.5s;\r\n  animation: rotate-blob 5s linear infinite;\r\n  }\r\n\r\n.blob-effect-2[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:nth-child(1) {\r\n  background: rgb(255 4 4 / 28%);\r\n  border: none;\r\n  }\r\n\r\n.blob-effect-2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\r\n    position: absolute;\r\n    top: 0px;\r\n    left: 0px;\r\n    width: 100%;\r\n    height: 100%;\r\n    border: 2px solid #fb544ea8; border-radius: 38% 62% 63% 37% / 41% 44% 56% 59%;\r\n    transition: 0.5s; animation: rotate-blob 4s linear infinite;\r\n    }\r\n\r\n.blob-effect-2[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:nth-child(2) {\r\n    background: rgba(240, 122, 96, 0.28);\r\n    border: none;\r\n    }\r\n\r\n.blob-effect-2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\r\n    position: absolute;\r\n    top: 0px;\r\n    left: 0px;\r\n    width: 100%;\r\n    height: 100%;\r\n    border: 2px solid #fb544ea8;\r\n    border-radius: 38% 62% 63% 37% / 41% 44% 56% 59%;\r\n    transition: 0.5s;\r\n    animation: rotate-blob2 10s linear infinite;\r\n    }\r\n\r\n.blob-effect-2[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:nth-child(3) {\r\n    background: rgba(255, 38, 0, 0.17);\r\n    border: none;\r\n    }\r\n\r\n.background[_ngcontent-%COMP%]{\r\n  width: 20rem;\r\n  height: 20rem;\r\n  position: absolute;\r\n  transform: translate(-45%,-50%);\r\n  left: 50%;\r\n  top: 50%;\r\n  }\r\n\r\n.background[_ngcontent-%COMP%]   .shape[_ngcontent-%COMP%]{\r\n  height: 200px;\r\n  width: 200px;\r\n  position: absolute;\r\n  border-radius: 50%;\r\n  -webkit-backdrop-filter: blur(2rem);\r\n          backdrop-filter: blur(2rem);\r\n  }\r\n\r\n.shape[_ngcontent-%COMP%]:first-child{\r\n  background: linear-gradient(\r\n    #1845ad9b,\r\n    #23a2f63e\r\n  );\r\n  left: -80px;\r\n  top: -80px;\r\n  }\r\n\r\n.shape[_ngcontent-%COMP%]:last-child{\r\n  background: linear-gradient(\r\n    to right,\r\n    #ff522fa7,\r\n    #f096195e\r\n  );\r\n  right: -30px;\r\n  bottom: -80px;\r\n  }\r\n\r\nform[_ngcontent-%COMP%]{\r\n    height: 520px;\r\n    width: 400px;\r\n    position: absolute;\r\n    transform: translate(-50%,17%);\r\n    left: 50%;\r\n    -webkit-backdrop-filter: blur(5rem);\r\n    padding: 5px 35px;\r\n  }\r\n\r\nform[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{\r\n  font-family: 'Poppins',sans-serif;\r\n  color: #ffffff;\r\n  letter-spacing: 0.5px;\r\n  outline: none;\r\n  border: none;\r\n  }\r\n\r\n.header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n    font-family: 'Poppins',sans-serif;\r\n    color: #ffffff;\r\n    letter-spacing: 0.25rem;\r\n    outline: none;\r\n    border: none;\r\n\r\n    font-size: 1.5rem;\r\n    font-weight: 500;\r\n    line-height: 3rem;\r\n    text-align: right;\r\n  }\r\n\r\nlabel[_ngcontent-%COMP%]{\r\n  display: block;\r\n  margin-top: 1.5rem;\r\n  font-size: 0.8rem;\r\n  font-weight: 500;\r\n  }\r\n\r\ninput[_ngcontent-%COMP%]{\r\n  display: block;\r\n  height: 2.5rem;\r\n  width: 100%;\r\n  background-color: rgba(255,255,255,0.07);\r\n  border-radius: 3px;\r\n  padding: 0 10px;\r\n  margin-top: 8px;\r\n  font-size: 14px;\r\n  font-weight: 300;\r\n  }\r\n\r\ntextarea[_ngcontent-%COMP%]{\r\n  display: block;\r\n  height: 5rem;\r\n  max-height: 8rem;\r\n  width: 100%;\r\n  background-color: rgba(255,255,255,0.07);\r\n  border-radius: 3px;\r\n  padding: 0 10px;\r\n  margin-top: 8px;\r\n  font-size: 14px;\r\n  font-weight: 300;\r\n  }\r\n\r\n[_ngcontent-%COMP%]::placeholder{\r\n  color: #e5e5e5;\r\n  }\r\n\r\nbutton[_ngcontent-%COMP%]{\r\n  margin-top: 50px;\r\n  width: 100%;\r\n  background-color: #ffffff;\r\n  color: #080710;\r\n  padding: 15px 0;\r\n  font-size: 18px;\r\n  font-weight: 600;\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n  }\r\n\r\n.social[_ngcontent-%COMP%]{\r\n  margin-top: 30px;\r\n  display: flex;\r\n  cursor: pointer;\r\n  }\r\n\r\n.social[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n  background: red;\r\n  width: 100%;\r\n  border-radius: 3px;\r\n  padding: 5px 10px 10px 5px;\r\n  background-color: rgba(42, 82, 195, 0.4);\r\n  color: #eaf0fb;\r\n  text-align: center;\r\n  }\r\n\r\n.social[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:hover{\r\n  background-color: rgba(17, 68, 179, 0.5);\r\n  }\r\n\r\n.social[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n  margin-right: 4px;\r\n  }\r\n\r\nbody[_ngcontent-%COMP%]{\r\n  background: linear-gradient(to right, #25c481, #25b7c4);\r\n  font-family: 'Roboto', sans-serif;\r\n}\r\n\r\nsection[_ngcontent-%COMP%]{\r\n  margin: auto 50px;\r\n  background: #080710;\r\n}\r\n\r\n\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n    width: 6px;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n    -webkit-box-shadow: inset 0 0 6px rgba(255, 255, 255, 0.3);\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n    -webkit-box-shadow: inset 0 0 6px rgba(204, 204, 204, 0.3);\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n  padding: 50px;\r\n  display: flex;\r\n  flex-flow: wrap;\r\n  font-family: \"Ubuntu\", sans-serif;\r\n}\r\n\r\nbody[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\r\n  box-sizing: border-box;\r\n}\r\n\r\n\r\n\r\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n  position: relative;\r\n  width: 70%;\r\n  float: right;\r\n  background: #c1c1c11c;\r\n  margin: 10% 15%;\r\n  border: 0.2rem solid #85a8c6bd;\r\n}\r\n\r\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  padding: 30px;\r\n  width: 100%;\r\n  height: 20rem;\r\n  border: 0.2rem solid black;\r\n  border-radius: 0.5rem;\r\n  background: rgba(255, 255, 255, 0.24);\r\n  text-decoration: none;\r\n  color: rgba(209, 209, 209, 0.452);\r\n  display: block;\r\n  transition: 0.25s ease;\r\n  -webkit-backdrop-filter: blur(5rem);\r\n}\r\n\r\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  transform: translate(-30px, -30px);\r\n  border-color: #c5c5c57c;\r\n}\r\n\r\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   .card--display[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   .card--hover[_ngcontent-%COMP%] {\r\n  display: block;\r\n}\r\n\r\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .card--display[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  font-size: 1rem;\r\n  margin-top: 200px;\r\n  color: white;\r\n}\r\n\r\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .card--display[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  margin: 20px 0 0;\r\n  color: #83f1c3;\r\n  font-size: 1.3rem\r\n}\r\n\r\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .card--hover[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .card--hover[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  margin: 20px 0;\r\n  font-size: 1.3rem;\r\n}\r\n\r\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .card--hover[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-weight: normal;\r\n  line-height: 1.5;\r\n  color: white;\r\n  font-weight: 600;\r\n}\r\n\r\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card--border[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  left: 0;\r\n  top: 0;\r\n  border: 2px dashed black;\r\n  z-index: -1;\r\n}"] });


/***/ }),

/***/ 2252:
/*!*****************************************************!*\
  !*** ./src/app/modules/products/products.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsModule": () => (/* binding */ ProductsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6895);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4006);
/* harmony import */ var _products_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products-routing.module */ 2727);
/* harmony import */ var _products_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products.component */ 1089);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4650);





class ProductsModule {
}
ProductsModule.ɵfac = function ProductsModule_Factory(t) { return new (t || ProductsModule)(); };
ProductsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ProductsModule });
ProductsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _products_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProductsRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ProductsModule, { declarations: [_products_component__WEBPACK_IMPORTED_MODULE_1__.ProductsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _products_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProductsRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule] }); })();


/***/ }),

/***/ 1325:
/*!******************************************************!*\
  !*** ./src/app/modules/products/products.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsService": () => (/* binding */ ProductsService)
/* harmony export */ });
/* harmony import */ var _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/helpers/constants */ 2545);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var src_shared_services_call_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/shared/services/call-api.service */ 1022);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 529);




class ProductsService {
    constructor(_CallApiService, http) {
        this._CallApiService = _CallApiService;
        this.http = http;
        this.crud_operation_url = _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_0__.crud_operation_url;
    }
    // private resetPassword_url: string =constants.resetPassword_url;
    crud_operation(userData) {
        return this._CallApiService.post(userData, this.crud_operation_url);
    }
}
ProductsService.ɵfac = function ProductsService_Factory(t) { return new (t || ProductsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_shared_services_call_api_service__WEBPACK_IMPORTED_MODULE_1__.CallApiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
ProductsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ProductsService, factory: ProductsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5478:
/*!************************************************!*\
  !*** ./src/shared/services/session.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SessionService": () => (/* binding */ SessionService)
/* harmony export */ });
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jwt-decode */ 1816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4650);


class SessionService {
    constructor() { }
    check_user_session() {
        let session_obj = JSON.parse(localStorage.getItem('activetUser'));
        if (session_obj && (typeof session_obj == 'object')) {
            return true;
        }
        else {
            return false;
        }
    }
    set_user_session(data) {
        localStorage.setItem('activetUser', JSON.stringify(data));
    }
    get_user_session(required_item = '') {
        const session_obj = JSON.parse(localStorage.getItem('activeUser'));
        if (required_item == '') {
            return session_obj;
        }
        else {
            if (required_item in session_obj) {
                return session_obj.required_item;
            }
            else {
                return '';
            }
        }
    }
    get_user_token(required_item = '') {
        const session_obj = JSON.parse(localStorage.getItem('activeUser'));
        if (required_item == '') {
            const tokenPayload_d = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_0__["default"])(session_obj.token);
            return tokenPayload_d;
        }
    }
    destroy_user_session() {
        localStorage.removeItem('activetUser');
        localStorage.removeItem('ticket');
    }
}
SessionService.ɵfac = function SessionService_Factory(t) { return new (t || SessionService)(); };
SessionService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SessionService, factory: SessionService.ɵfac, providedIn: 'root' });


/***/ })

}]);