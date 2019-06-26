(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pokemon-detail-pokemon-detail-module"],{

/***/ "./src/app/pages/pokemon-detail/pokemon-detail-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/pokemon-detail/pokemon-detail-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: PokemonDetailRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonDetailRoutingModule", function() { return PokemonDetailRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pokemon_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pokemon-detail.component */ "./src/app/pages/pokemon-detail/pokemon-detail.component.ts");




var routes = [{
        path: '',
        component: _pokemon_detail_component__WEBPACK_IMPORTED_MODULE_3__["PokemonDetailComponent"],
    }];
var PokemonDetailRoutingModule = /** @class */ (function () {
    function PokemonDetailRoutingModule() {
    }
    PokemonDetailRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], PokemonDetailRoutingModule);
    return PokemonDetailRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/pokemon-detail/pokemon-detail.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/pokemon-detail/pokemon-detail.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  pokemon-item works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/pokemon-detail/pokemon-detail.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/pokemon-detail/pokemon-detail.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Bva2Vtb24tZGV0YWlsL3Bva2Vtb24tZGV0YWlsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/pokemon-detail/pokemon-detail.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/pokemon-detail/pokemon-detail.component.ts ***!
  \******************************************************************/
/*! exports provided: PokemonDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonDetailComponent", function() { return PokemonDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PokemonDetailComponent = /** @class */ (function () {
    function PokemonDetailComponent() {
    }
    PokemonDetailComponent.prototype.ngOnInit = function () {
    };
    PokemonDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pokemon-detail',
            template: __webpack_require__(/*! ./pokemon-detail.component.html */ "./src/app/pages/pokemon-detail/pokemon-detail.component.html"),
            styles: [__webpack_require__(/*! ./pokemon-detail.component.scss */ "./src/app/pages/pokemon-detail/pokemon-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PokemonDetailComponent);
    return PokemonDetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/pokemon-detail/pokemon-detail.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/pokemon-detail/pokemon-detail.module.ts ***!
  \***************************************************************/
/*! exports provided: PokemonDetailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonDetailModule", function() { return PokemonDetailModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _pokemon_detail_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pokemon-detail-routing.module */ "./src/app/pages/pokemon-detail/pokemon-detail-routing.module.ts");
/* harmony import */ var src_app_pages_pokemon_detail_pokemon_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/pages/pokemon-detail/pokemon-detail.component */ "./src/app/pages/pokemon-detail/pokemon-detail.component.ts");





var PokemonDetailModule = /** @class */ (function () {
    function PokemonDetailModule() {
    }
    PokemonDetailModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [src_app_pages_pokemon_detail_pokemon_detail_component__WEBPACK_IMPORTED_MODULE_4__["PokemonDetailComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _pokemon_detail_routing_module__WEBPACK_IMPORTED_MODULE_3__["PokemonDetailRoutingModule"]
            ]
        })
    ], PokemonDetailModule);
    return PokemonDetailModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-pokemon-detail-pokemon-detail-module.js.map