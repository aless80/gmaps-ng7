(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar id=\"app-navbar\"></app-navbar>\n<br>\n<router-outlet id=\"router-outlet\"></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Credits
//https://medium.com/@balramchavan/integrating-google-maps-in-angular-5-ca5f68009f29
//https://github.com/ultrasonicsoft/googlemaps-angular6/tree/master/src
//npm install --save-dev @types/googlemap
//api key in index.html

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: tokenGetter, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenGetter", function() { return tokenGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _modules_map_map_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/map/map.component */ "./src/app/modules/map/map.component.ts");
/* harmony import */ var _modules_form_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/form/form.component */ "./src/app/modules/form/form.component.ts");
/* harmony import */ var _shared_services_store_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/services/store.service */ "./src/app/shared/services/store.service.ts");
/* harmony import */ var _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/components/navbar/navbar.component */ "./src/app/shared/components/navbar/navbar.component.ts");
/* harmony import */ var _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/alert/alert.component */ "./src/app/shared/alert/alert.component.ts");
/* harmony import */ var _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/services/alert.service */ "./src/app/shared/services/alert.service.ts");
/* harmony import */ var _shared_components_tabset_tabset_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/components/tabset/tabset.component */ "./src/app/shared/components/tabset/tabset.component.ts");
/* harmony import */ var _modules_map_components_geocoder_geocoder_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/map/components/geocoder/geocoder.component */ "./src/app/modules/map/components/geocoder/geocoder.component.ts");
/* harmony import */ var _modules_form_components_rating_rating_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/form/components/rating/rating.component */ "./src/app/modules/form/components/rating/rating.component.ts");
/* harmony import */ var _modules_map_components_searchtypes_searchtypes_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/map/components/searchtypes/searchtypes.component */ "./src/app/modules/map/components/searchtypes/searchtypes.component.ts");
/* harmony import */ var _modules_login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modules/login/login.component */ "./src/app/modules/login/login.component.ts");
/* harmony import */ var _modules_register_register_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modules/register/register.component */ "./src/app/modules/register/register.component.ts");
/* harmony import */ var _modules_profile_profile_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modules/profile/profile.component */ "./src/app/modules/profile/profile.component.ts");
/* harmony import */ var _shared_auth_auth_guard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/auth/auth.guard */ "./src/app/shared/auth/auth.guard.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _modules_about_pages_about_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./modules/about/pages/about.component */ "./src/app/modules/about/pages/about.component.ts");
/* harmony import */ var _modules_about_components_card_card_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./modules/about/components/card/card.component */ "./src/app/modules/about/components/card/card.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//import { SaveComponent } from './modules/map/components/save/save.component';













 //this is old but whatever..




var appRoutes = [
    { path: '', component: _modules_map_map_component__WEBPACK_IMPORTED_MODULE_4__["MapComponent"] },
    { path: 'about', component: _modules_about_pages_about_component__WEBPACK_IMPORTED_MODULE_23__["AboutComponent"] },
    { path: 'register', component: _modules_register_register_component__WEBPACK_IMPORTED_MODULE_15__["RegisterComponent"] },
    { path: 'login', component: _modules_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"] },
    //{path: 'map', component: MapComponent, canActivate:[AuthGuard]},
    { path: 'profile', component: _modules_profile_profile_component__WEBPACK_IMPORTED_MODULE_16__["ProfileComponent"], canActivate: [_shared_auth_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"]] }
];
// id_token is from storeUserData(token, user) in auth.service.ts
function tokenGetter() {
    return localStorage.getItem('id_token');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _modules_map_map_component__WEBPACK_IMPORTED_MODULE_4__["MapComponent"],
                _modules_form_form_component__WEBPACK_IMPORTED_MODULE_5__["FormComponent"],
                //SaveComponent,
                _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
                _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_8__["AlertComponent"],
                _modules_map_components_geocoder_geocoder_component__WEBPACK_IMPORTED_MODULE_11__["GeocoderComponent"],
                _modules_map_components_searchtypes_searchtypes_component__WEBPACK_IMPORTED_MODULE_13__["SearchtypesComponent"],
                _modules_form_components_rating_rating_component__WEBPACK_IMPORTED_MODULE_12__["RatingComponent"],
                _shared_components_tabset_tabset_component__WEBPACK_IMPORTED_MODULE_10__["TabsetComponent"],
                _modules_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
                _modules_register_register_component__WEBPACK_IMPORTED_MODULE_15__["RegisterComponent"],
                _modules_profile_profile_component__WEBPACK_IMPORTED_MODULE_16__["ProfileComponent"],
                _modules_about_pages_about_component__WEBPACK_IMPORTED_MODULE_23__["AboutComponent"],
                _modules_about_components_card_card_component__WEBPACK_IMPORTED_MODULE_24__["CardComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__["NgbModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_21__["RouterModule"].forRoot(appRoutes),
                _angular_http__WEBPACK_IMPORTED_MODULE_20__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"],
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_22__["JwtModule"].forRoot({
                    config: {
                        tokenGetter: tokenGetter
                    }
                })
            ],
            providers: [
                _shared_services_store_service__WEBPACK_IMPORTED_MODULE_6__["StoreService"],
                _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_9__["AlertService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/modules/about/components/card/card.component.css":
/*!******************************************************************!*\
  !*** ./src/app/modules/about/components/card/card.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWJvdXQvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/about/components/card/card.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/modules/about/components/card/card.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card border-0\">  \n  <div class=\"card-header p-3 mb-2 bg-dark\" role=\"tab\" (click)=\"active = !active\" id=\"heading1\">\n    <h5 class=\"text-uppercase mb-0 py-1\">\n      <a class=\"text-white font-weight-bold\" [attr.aria-expanded]=\"active\" aria-controls=\"aim_div\" href=\"#\" onClick=\"return false;\">{{label}} <i class=\"fas fa-angle-down rotate-icon fa-2x\"></i>\n      </a>\n    </h5>\n  </div>\n  <div id=\"aim_div\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"heading1\" data-parent=\"#accordion\"  [ngbCollapse]=\"!active\">\n    <div class=\"card-body\">\n      <div class=\"row my-4\">\n        <div class=\"col-md-8\">\n          <p innerHTML={{text}}></p>\n        </div>\n        <div class=\"col-md-4 mt-3 pt-2\">\n          <div class=\"view z-depth-1\">\n            <img src={{img}} alt=\"\" class=\"img-fluid\">\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/about/components/card/card.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/about/components/card/card.component.ts ***!
  \*****************************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CardComponent = /** @class */ (function () {
    function CardComponent() {
        this.active = false;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CardComponent.prototype, "label", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CardComponent.prototype, "text", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CardComponent.prototype, "img", void 0);
    CardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-card',
            template: __webpack_require__(/*! ./card.component.html */ "./src/app/modules/about/components/card/card.component.html"),
            styles: [__webpack_require__(/*! ./card.component.css */ "./src/app/modules/about/components/card/card.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/modules/about/pages/about.component.css":
/*!*********************************************************!*\
  !*** ./src/app/modules/about/pages/about.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWJvdXQvcGFnZXMvYWJvdXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/about/pages/about.component.html":
/*!**********************************************************!*\
  !*** ./src/app/modules/about/pages/about.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"position-relative overflow-hidden p-3 p-md-5 m-md-3 bg-light\">\n  <div class=\"col-md-5 p-lg-5 mx-auto my-5\">\n    <div class=\"text-center\">\n      <h1 class=\"display-4 font-weight-normal\">Zero Waste Locator</h1>\n    </div>\n    <div class=\"text-left\">\n      <p class=\"lead font-weight-normal\">\n        Welcome to Zero Waste Locator, a site to find shops selling Zero Waste products.\n      </p>\n      <p class=\"lead font-weight-normal\">You can use the filter tab to look up Zero Waste stores present in the database. \n        Because using the Google Maps API costs me some money, I kindly ask to register. \n        If you do, you will be able to use the search functionality on the Google Map displayed on the <a href=\"/map\">Home page</a></p>\n    </div>\n    <div class=\"text-center\">\n      <a class=\"btn btn-dark text-white mr-1\" *ngIf=\"authService.isTokenExp()\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/register']\">Register</a>\n      <a class=\"btn btn-dark text-white mr-1\" *ngIf=\"authService.isTokenExp()\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/login']\">Login</a>\n      <a class=\"btn btn-dark text-white mr-1\" href=\"/\">Home Page</a>\n    </div>\n  </div>\n  <div class=\"product-device box-shadow d-none d-md-block\"></div>\n  <div class=\"product-device product-device-2 box-shadow d-none d-md-block\"></div>\n</div>\n\n\n<div class=\"container\">\n  <!--Accordion wrapper-->\n  \n  <div class=\"accordion md-accordion accordion-1\" id=\"accordion\" role=\"tablist\">\n    <app-card  [label]=\"'Aim of this app'\" img=\"https://img.icons8.com/color/1600/google-maps.png\" [text]=\"'The aim of this app is to let users search and log stores selling <a href=https://www.goingzerowaste.com/ target=_blank>Zero Waste</a>  or Less Waste products. This app uses Google Maps to search for stores, and will allow you to save them together with their products so that you or other users can look them up.'\"></app-card>\n    \n    <app-card  [label]=\"'Technical details'\" img=\"https://upload.wikimedia.org/wikipedia/commons/b/b1/Meanstack-624x250.jpg\" [text]=\"'This is a <a href=mean.io target=_blank>MEAN</a> (\n      <a href=https://www.mongodb.com/ target=_blank>MongoDB</a>, \n      <a href=https://expressjs.com/ target=_blank>Express</a>, \n      <a href=https://angular.io/ target=_blank>Angular CLI 7.0.6</a>, \n      <a href=https://nodejs.org target=_blank>Node.js</a>) app using the \n      <a href=https://cloud.google.com/maps-platform/ target=_blank>Google Maps API</a> to show store locations on a google map. \n    On the back-end a server is based on Node.js/Express server. <a href=https://mongoosejs.com/ target=_blank>Mongoose ODM</a> is used to connect Node.js and the MongoDB database. It provides a schema based solution to organize models and running CRUD operations. <a href=https://jwt.io/ target=_blank>JSON web tokens</a> handle user authentication and identity management. The front-end is built with Angular-CLI 7, <a href=https://getbootstrap.com/ target=_blank>Bootstrap</a>, and <a href=https://ng-bootstrap.github.io target=_blank>Angular Bootstrap</a>. The code is on my <a href=https://github.com/aless80/gmaps-ng7 target=_blank>GitHub page</a>.'\"></app-card>\n    <!--\n      <span><a href=\\\"https://github.com/aless80/gmaps-ng7\\\" target=\\\"_blank\\\">gmaps-ng7</a></span>\n    -->\n    \n    <app-card  [label]=\"'Zero Waste'\" img=\"https://www.lrsrecycles.com/wp-content/uploads/2017/10/Zero-Waste.png\" [text]=\"'<a href=https://www.goingzerowaste.com/ target=_blank> Zero Waste</a> is a lifestyle philosophy that encourages the redesign of resource life cycles so that all products are reused. The goal is for no trash to be sent to landfills, incinerators, or the ocean. Zero Waste is for me about reducing consumption, in particular of plastic products'\"></app-card>\n\n    \n    \n  </div>\n\n<!--\n  <a class=\"nav-link\" href=\"https://github.com/aless80/gmaps-ng7\" target=\"_blank\">GitHub <span class=\"sr-only\">(current)</span></a>\n        <li class=\"nav-item\">\n        <a\n          class=\"nav-link\"\n          href=\"https://angular.io/\"\n          target=\"_blank\"\n          >angular.io</a\n        >\n      \n        <a\n          class=\"nav-link\"\n          href=\"https://developers.google.com/maps/documentation/geocoding/start\"\n          target=\"_blank\"\n          >Google Maps docs</a\n        >\n      \n-->\n\n</div>"

/***/ }),

/***/ "./src/app/modules/about/pages/about.component.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/about/pages/about.component.ts ***!
  \********************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutComponent = /** @class */ (function () {
    function AboutComponent(authService) {
        this.authService = authService;
    }
    AboutComponent.prototype.ngOnInit = function () { };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/modules/about/pages/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/modules/about/pages/about.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/modules/form/components/rating/rating.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/modules/form/components/rating/rating.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".star {\n  position: relative;\n  display: inline-block;\n  font-size: 3rem;\n  color: #d3d3d3;\n}\n.full {\n  color: green;\n}\n.half {\n  position: absolute;\n  display: inline-block;\n  overflow: hidden;\n  color: green;\n}\n.fullrated {\n  color: #ff1e1e;\n}\n.halfrated {\n  position: absolute;\n  display: inline-block;\n  overflow: hidden;\n  color: #ff1e1e;\n}\n.rated {\n  color: #ff1e1e;\n}\n.filled {\n  color: #1e90ff;\n}\n/*.bad {\n  color: #deb0b0;\n}\n.filled.bad {\n  color: #ff1e1e;\n}*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9mb3JtL2NvbXBvbmVudHMvcmF0aW5nL3JhdGluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsYUFBYTtDQUNkO0FBQ0Q7RUFDRSxtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixhQUFhO0NBQ2Q7QUFFRDtFQUNFLGVBQWU7Q0FDaEI7QUFDRDtFQUNFLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGVBQWU7Q0FDaEI7QUFFRDtFQUNFLGVBQWU7Q0FDaEI7QUFDRDtFQUNFLGVBQWU7Q0FDaEI7QUFDRDs7Ozs7R0FLRyIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZm9ybS9jb21wb25lbnRzL3JhdGluZy9yYXRpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdGFyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgY29sb3I6ICNkM2QzZDM7XG59XG4uZnVsbCB7XG4gIGNvbG9yOiBncmVlbjtcbn1cbi5oYWxmIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLmZ1bGxyYXRlZCB7XG4gIGNvbG9yOiAjZmYxZTFlO1xufVxuLmhhbGZyYXRlZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBjb2xvcjogI2ZmMWUxZTtcbn1cblxuLnJhdGVkIHtcbiAgY29sb3I6ICNmZjFlMWU7XG59XG4uZmlsbGVkIHtcbiAgY29sb3I6ICMxZTkwZmY7XG59XG4vKi5iYWQge1xuICBjb2xvcjogI2RlYjBiMDtcbn1cbi5maWxsZWQuYmFkIHtcbiAgY29sb3I6ICNmZjFlMWU7XG59Ki8iXX0= */"

/***/ }),

/***/ "./src/app/modules/form/components/rating/rating.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/modules/form/components/rating/rating.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--fill is if one star is full-->\n<ng-template #t let-fill=\"fill\" let-index=\"index\">\n  \n  <span class=\"star\" [class.full]=\"fill === 100\">\n    <span class=\"half\" [class.fullrated]=\"user_rating\" [style.width.%]=\"fill\" (click)=\"setRating(index+1)\">&#9733;</span>\n    &#9733;\n  </span>\n</ng-template>\n\n<p>\n  <ngb-rating id=\"ngb-rating\" [starTemplate]=\"t\" \n  [rate]=\"rating.total/rating.count\" \n  (hover)=\"hovered=$event\" (leave)=\"hovered=0\" \n  [readonly]=\"false\" max=\"5\"></ngb-rating>\n  \n\n  <b *ngIf=\"rating.count==1; else goTemplate\">(1 rating of {{rating.total}})</b>\n  <ng-template #goTemplate>\n    <b>({{rating.count}} ratings with average {{rating.total/rating.count | number : '1.1-1'}})</b>\n  </ng-template>\n</p>\n\n<!--\n<p>rating: <b>{{rating.total/rating.count | number : '1.1-1'}}</b>&nbsp;\n (rating.total: {{rating.total}} - rating.count: {{rating.count}})</p>\n<p>Hovered: <b>{{hovered}}</b></p>\n<p>User rating: <b>{{user_rating}}</b></p>\n-->\n\n<!--\n<button class=\"btn btn-sm btn-outline-{{readonly ? 'danger' : 'success'}}\" (click)=\"readonly = !readonly\">\n  {{ readonly ? \"readonly\" : \"editable\"}}\n</button>\n-->"

/***/ }),

/***/ "./src/app/modules/form/components/rating/rating.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/form/components/rating/rating.component.ts ***!
  \********************************************************************/
/*! exports provided: RatingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingComponent", function() { return RatingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RatingComponent = /** @class */ (function () {
    function RatingComponent() {
        this.user_ratingChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.hovered = 0;
        this.readonly = false;
    }
    RatingComponent.prototype.setRating = function (value) {
        this.user_rating = value;
        this.user_ratingChange.emit(value);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RatingComponent.prototype, "rating", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], RatingComponent.prototype, "user_rating", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], RatingComponent.prototype, "user_ratingChange", void 0);
    RatingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rating',
            template: __webpack_require__(/*! ./rating.component.html */ "./src/app/modules/form/components/rating/rating.component.html"),
            styles: [__webpack_require__(/*! ./rating.component.css */ "./src/app/modules/form/components/rating/rating.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RatingComponent);
    return RatingComponent;
}());



/***/ }),

/***/ "./src/app/modules/form/form.component.css":
/*!*************************************************!*\
  !*** ./src/app/modules/form/form.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZm9ybS9mb3JtLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/form/form.component.html":
/*!**************************************************!*\
  !*** ./src/app/modules/form/form.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"formResult !== undefined\">\n  <div class=\"row\">\n    <div class=\"col-md-10 order-md-1\">\n      <h4 class=\"mb-3\">Store information</h4>\n      <form class=\"needs-validation\" novalidate=\"\">\n        \n        <div class=\"row\">\n          <div class=\"col-md-9 mb-3\">\n            <label for=\"address\">Address</label>\n            <input class=\"form-control\" [(ngModel)]=\"formResult.address + ', ' + formResult.street_num\" id=\"address\" name='address' placeholder=\"\" required=\"\" type=\"text\">\n            <div class=\"invalid-feedback\">\n              Please enter the address.\n            </div>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-md-2 mb-3\">\n            <label for=\"zip\">Zip</label>\n            <input class=\"form-control\" id=\"zip\" [(ngModel)]=\"formResult.zip\" name=\"zip\" placeholder=\"\" required=\"\" type=\"text\">\n            <div class=\"invalid-feedback\">\n              Zip code required.\n            </div>\n          </div>\n          <div class=\"col-md-3 mb-3\" *ngIf=\"formResult.locality\">\n            <label for=\"locality\">Town</label>\n            <input class=\"form-control\" id=\"locality\" [(ngModel)]=\"formResult.locality\" name=\"locality\" placeholder=\"\" required=\"\" type=\"text\">\n          </div>\n          <div class=\"col-md-4 mb-3\">\n            <label for=\"country\">Country</label>\n            <select class=\"custom-select d-block w-100\" id=\"country\" name=\"country\" [(ngModel)]=\"formResult.country\" required=\"\">\n              <option value=\"\">{{formResult.country}}</option>\n              <option [value]=\"country\" *ngFor=\"let country of countries\">             {{country}}</option>\n            </select>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-md-2 mb-3\">\n            <label for=\"username\">Added by:</label>\n            <div class=\"input-group\">\n              <input class=\"form-control\" [(ngModel)]=\"formResult.username\" name=\"username\" placeholder=\"Username\" required=\"\" type=\"text\">\n            </div>\n          </div>\n          <div class=\"col-md-3 mb-3\">\n            <label for=\"googlemaps\">Link to Google Maps \n              <!--<span class=\"text-muted\">(Optional)</span>-->\n            </label>\n            <div class=\"input-group\">\n              <div class=\"input-group-append\">\n                <button type=\"submit\" class=\"btn btn-dark\" (click)=\"goToGoogleMaps($event)\">Go to Google Maps</button>\n              </div>\n              <!--<input class=\"form-control\" [(ngModel)]=\"formResult.url\" name=\"url\" placeholder=\"Url to Google Maps\" type=\"text\">\n                -->\n            </div>\n          </div>\n          <div class=\"col-md-4 mb-3\">\n            <label for=\"coordinates\">Latitude and logitude</label>\n            <input class=\"form-control\" [(ngModel)]=\"formResult.coords[0] + ', ' + formResult.coords[1]\" id=\"coordinates\" name=\"coordinates\" placeholder=\"Marker's coordinates\" required=\"\" type=\"text\">\n          </div>\n        </div>\n\n        <app-rating id=\"app-rating\" [(user_rating)]=\"user_rating\" [(rating)]=\"formResult.rating\" name=\"rating\"></app-rating>\n\n        <h4 class=\"mb-3\">Store type</h4>\n        <form>\n          <div class=\"checkbox\" *ngFor=\"let type of storetypes\">\n            <label>\n              <input [disabled]=\"authService.isTokenExp()\" type=\"checkbox\" [checked]=\"hasType(type)\" (click)=\"toggleType($event)\" name=\"{{type}}\">&nbsp;{{type}}\n            </label>\n          </div>\n          <div class=\"checkbox\">\n            <label class=\"custom\" (click)=\"clickNewtypeText($event)\">\n              <input [disabled]=\"authService.isTokenExp()\" type=\"checkbox\" [(checked)]=\"checked_newType\" value=\"\" (click)=\"clickNewtypeText($event)\">{{newType}}\n            </label>\n            <span style=\"cursor:pointer;color:blue;\" [hidden]=\"hide_edit\"\n              (click)=\"editNewStoreTypeInput($event)\">&nbsp;Edit\n            </span>\n          </div>\n          <div class=\"input-group\" *ngIf=\"show_newtype_editor\">\n            <div class=\"col-md-6 mb-3\">    \n              <input #box (keyup.enter)=\"confirmNewType(box.value, $event)\" (blur)=\"confirmNewType(box.value, $event); box.value=''\" value=\"{{newType}}\">\n              <button type=\"submit\" class=\"btn btn-secondary\" (click)=\"confirmNewType(box.value, $event)\">Add</button>\n            </div>\n          </div>\n        </form>\n\n        <h4 class=\"mb-3\">Description</h4>\n        <textarea class=\"col-md-9 mb-3\" rows=\"4\" [(ngModel)]=\"formResult.descr\" name=\"description\" placeholder=\"Optional description\" required=\"\"></textarea>\n        <div class=\"row\" *ngIf=\"!authService.isTokenExp()\">\n          <div class=\"col-md-4\">        \n            <div class=\"input-group-append\">\n              <div *ngIf=\"formResult._id; then update else save\"></div>\n              <ng-template #update>\n                <button  id=\"update\" type=\"submit\" class=\"btn btn-dark btn-lg btn-block\" (click)=\"submitForm()\">Update</button>                \n              </ng-template>\n              <ng-template #save>\n                <button  id=\"save\" type=\"submit\" class=\"btn btn-dark btn-lg btn-block\" (click)=\"submitForm()\">Save</button>\n              </ng-template>\n            </div>\n          </div>\n        </div>\n\n      </form>\n    </div>\n\n    <!--\n    <div class=\"col-md-4 order-md-2 mb-4\">\n      <h4 class=\"d-flex justify-content-between align-items-center mb-3\">\n        <span class=\"text-muted\">Zero Waste Products</span>\n        <span class=\"badge badge-secondary badge-pill\">3</span>\n      </h4>\n      <ul class=\"list-group mb-3\">\n        <li class=\"list-group-item d-flex justify-content-between lh-condensed\">\n          <div>\n            <h6 class=\"my-0\">Product name</h6>\n            <small class=\"text-muted\">Brief description</small>\n          </div>\n          <span class=\"text-muted\">$12</span>\n        </li>\n        <li class=\"list-group-item d-flex justify-content-between lh-condensed\">\n          <div>\n            <h6 class=\"my-0\">Second product</h6>\n            <small class=\"text-muted\">Brief description</small>\n          </div>\n          <span class=\"text-muted\">$8</span>\n        </li>\n        <li class=\"list-group-item d-flex justify-content-between lh-condensed\">\n          <div>\n            <h6 class=\"my-0\">Third item</h6>\n            <small class=\"text-muted\">Brief description</small>\n          </div>\n          <span class=\"text-muted\">$5</span>\n        </li>\n        <li class=\"list-group-item d-flex justify-content-between bg-light\">\n          <div class=\"text-success\">\n            <h6 class=\"my-0\">Promo code</h6>\n            <small>EXAMPLECODE</small>\n          </div>\n          <span class=\"text-success\">-$5</span>\n        </li>\n        <li class=\"list-group-item d-flex justify-content-between\">\n          <span>Total (USD)</span>\n          <strong>$20</strong>\n        </li>\n      </ul>\n\n      <form class=\"card p-2\">\n        <div class=\"input-group\">\n          <input class=\"form-control\" placeholder=\"Promo code\" type=\"text\">\n          <div class=\"input-group-append\">\n            <button type=\"submit\" class=\"btn btn-secondary\">Redeem</button>\n          </div>\n        </div>\n      </form>\n    </div>\n  -->\n  </div>\n\n  <!--<footer class=\"my-5 pt-5 text-muted text-center text-small\">\n    <p class=\"mb-1\">© 2017-2018 Company Name</p>\n    <ul class=\"list-inline\">\n      <li class=\"list-inline-item\"><a href=\"#\">Privacy</a></li>\n      <li class=\"list-inline-item\"><a href=\"#\">Terms</a></li>\n      <li class=\"list-inline-item\"><a href=\"#\">Support</a></li>\n    </ul>\n  </footer>-->\n</div>\n"

/***/ }),

/***/ "./src/app/modules/form/form.component.ts":
/*!************************************************!*\
  !*** ./src/app/modules/form/form.component.ts ***!
  \************************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_to_map_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/to-map.service */ "./src/app/shared/services/to-map.service.ts");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FormComponent = /** @class */ (function () {
    function FormComponent(toMapService, authService) {
        this.toMapService = toMapService;
        this.authService = authService;
        this.submit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.newType = FormComponent_1.NEWTYPE_PLACEHOLDER;
        this.checked_newType = false;
        this.show_newtype_editor = false;
        this.hide_edit = true;
        this.countries = [
            "USA",
            "Canada",
            "Afghanistan",
            "Albania",
            "Algeria",
            "Andorra",
            "Angola",
            "Antigua and Barbuda",
            "Argentina",
            "Armenia",
            "Aruba",
            "American Samoa",
            "Australia",
            "Austria",
            "Azerbaijan",
            "Bahamas",
            "Bangladesh",
            "Barbados",
            "Burundi",
            "Belgium",
            "Benin",
            "Bermuda",
            "Bhutan",
            "Bosnia and Herzegovina",
            "Belize",
            "Belarus",
            "Bolivia",
            "Botswana",
            "Brazil",
            "Bahrain",
            "Brunei",
            "Bulgaria",
            "Burkina Faso",
            "Central African Republic",
            "Cambodia",
            "Canada",
            "Cayman Islands",
            "Congo",
            "Chad",
            "Chile",
            "China",
            "Cote d'Ivoire",
            "Cameroon",
            "DR Congo",
            "Cook Islands",
            "Colombia",
            "Comoros",
            "Cape Verde",
            "Costa Rica",
            "Croatia",
            "Cuba",
            "Cyprus",
            "Czech Republic",
            "Denmark",
            "Djibouti",
            "Dominica",
            "Dominican Republic",
            "Ecuador",
            "Egypt",
            "Eritrea",
            "El Salvador",
            "Spain",
            "Estonia",
            "Ethiopia",
            "Fiji",
            "Finland",
            "France",
            "Micronesia",
            "Gabon",
            "Gambia",
            "Great Britain",
            "Guinea-Bissau",
            "Georgia",
            "Equatorial Guinea",
            "Germany",
            "Ghana",
            "Greece",
            "Grenada",
            "Guatemala",
            "Guinea",
            "Guam",
            "Guyana",
            "Haiti",
            "Hong Kong",
            "Honduras",
            "Hungary",
            "Indonesia",
            "India",
            "Iran",
            "Ireland",
            "Iraq",
            "Iceland",
            "Israel",
            "Virgin Islands",
            "Italy",
            "British Virgin Islands",
            "Jamaica",
            "Jordan",
            "Japan",
            "Kazakhstan",
            "Kenya",
            "Kyrgyzstan",
            "Kiribati",
            "South Korea",
            "Saudi Arabia",
            "Kuwait",
            "Laos",
            "Latvia",
            "Libya",
            "Liberia",
            "Saint Lucia",
            "Lesotho",
            "Lebanon",
            "Liechtenstein",
            "Lithuania",
            "Luxembourg",
            "Madagascar",
            "Morocco",
            "Malaysia",
            "Malawi",
            "Moldova",
            "Maldives",
            "Mexico",
            "Mongolia",
            "Marshall Islands",
            "Macedonia",
            "Mali",
            "Malta",
            "Montenegro",
            "Monaco",
            "Mozambique",
            "Mauritius",
            "Mauritania",
            "Myanmar",
            "Namibia",
            "Nicaragua",
            "Netherlands",
            "Nepal",
            "Nigeria",
            "Niger",
            "Norway",
            "Nauru",
            "New Zealand",
            "Oman",
            "Pakistan",
            "Panama",
            "Paraguay",
            "Peru",
            "Philippines",
            "Palestine",
            "Palau",
            "Papua New Guinea",
            "Poland",
            "Portugal",
            "North Korea",
            "Puerto Rico",
            "Qatar",
            "Romania",
            "South Africa",
            "Russia",
            "Rwanda",
            "Samoa",
            "Senegal",
            "Seychelles",
            "Singapore",
            "Saint Kitts and Nevis",
            "Sierra Leone",
            "Slovenia",
            "San Marino",
            "Solomon Islands",
            "Somalia",
            "Serbia",
            "Sri Lanka",
            "Sao Tome and Principe",
            "Sudan",
            "Switzerland",
            "Suriname",
            "Slovakia",
            "Sweden",
            "Swaziland",
            "Syria",
            "Tanzania",
            "Tonga",
            "Thailand",
            "Tajikistan",
            "Turkmenistan",
            "Timor-Leste",
            "Togo",
            "Chinese Taipei",
            "Trinidad and Tobago",
            "Tunisia",
            "Turkey",
            "Tuvalu",
            "United Arab Emirates",
            "Uganda",
            "Uk",
            "Ukraine",
            "Uruguay",
            "United States",
            "Uzbekistan",
            "Vanuatu",
            "Venezuela",
            "Vietnam",
            "Saint Vincent and the Grenadines",
            "Yemen",
            "Zambia",
            "Zimbabwe"
        ];
        this.subscription = toMapService.formSubmit$.subscribe(function (obj) { return console.log(obj); });
    }
    FormComponent_1 = FormComponent;
    FormComponent.prototype.ngOnChanges = function (changes) {
        //console.log("form - ngOnChanges", changes);
        //Uncheck new type cause there is a new form
        this.checked_newType = false;
    };
    ///Handling the store types checkboxes
    //Check if store is of a certain store type
    FormComponent.prototype.hasType = function (type) {
        return this.formResult.types.includes(type);
    };
    //Check/uncheck new type
    FormComponent.prototype.toggleType = function (event) {
        if (event.target.checked)
            this.formResult.types.push(event.target.name);
        else {
            this.removeFromTypesArray(event.target.name);
        }
        //Sort types array alphabetically
        this.formResult.types.sort();
    };
    FormComponent.prototype.removeFromTypesArray = function (type) {
        var ind = this.formResult.types.indexOf(type);
        if (ind >= 0)
            this.formResult.types.splice(ind, 1);
    };
    ///Handling the new store type checkbox
    //User clicks on text of new type
    FormComponent.prototype.clickNewtypeText = function (event) {
        //console.log('clickNewtypeText',event)
        //If the user clicks on the default placeholder for the new type, edit it
        if (this.authService.isTokenExp())
            return;
        if (this.newType == FormComponent_1.NEWTYPE_PLACEHOLDER)
            this.editNewStoreTypeInput(event);
        if (event.target == 'input')
            this.checked_newType = event.target.checked;
    };
    //Edit the new type
    FormComponent.prototype.editNewStoreTypeInput = function (event) {
        //console.log('editNewStoreTypeInput',event)
        //Show the text input with the previous new type or empty if none
        this.show_newtype_editor = !this.show_newtype_editor;
        this.newType = '';
        //Remove previously inserted type
        this.removeFromTypesArray(this.newType);
        //Hide the "Edit" text
        this.hide_edit = true;
    };
    //User clicks on "Add" or press enter to confirm the new type
    FormComponent.prototype.confirmNewType = function (value, event) {
        //console.log("confirmNewType", event.type,  "value=-", value,  event);
        //Behavior depends on whether there is any text in the input box
        if (value) {
            //Hide new type editor
            this.show_newtype_editor = false;
            //Store the new type
            this.newType = value;
            this.formResult.types.push(this.newType);
            //Show the "Edit" text, checkmark is on
            this.hide_edit = false;
            //Checking the checkbox is prob not necessary, maybe needed when checkbox off while editing
            this.checked_newType = true;
            //Good stuff I was playing with:
            //(<HTMLInputElement>event.target)   this is the <input> element
            //event.preventDefault()
            //event.stopPropagation();
        }
        else {
            //Reset to default placeholder
            this.show_newtype_editor = false;
            this.newType = FormComponent_1.NEWTYPE_PLACEHOLDER;
            this.hide_edit = true;
            //Unchecking the checkbox is prob not necessary but does not hurt
            this.checked_newType = false;
        }
    };
    FormComponent.prototype.goToGoogleMaps = function (event) {
        //console.log('goToGoogleMaps', event.type, event);
        if (event.type != "click")
            return;
        var url = "https://www.google.com/maps/search/?api=1&query=" +
            encodeURI(this.formResult.address) +
            encodeURI("," +
                [
                    this.formResult.street_num,
                    this.formResult.zip,
                    this.formResult.locality,
                    this.formResult.country
                ].join(" "));
        var win = window.open(url, "_blank");
        win.focus();
    };
    FormComponent.prototype.submitForm = function () {
        //Uncheck the new type cause it is going to be saved
        this.checked_newType = false;
        //Update formResult.rating with user_rating
        if (this.user_rating !== undefined) {
            this.formResult.rating.total += this.user_rating;
            this.formResult.rating.count += 1;
        }
        //Let Map parent save the form to DB
        this.toMapService.sendFormSubmit(null);
    };
    FormComponent.prototype.ngOnDestroy = function () {
        // prevent memory leak when component destroyed
        this.subscription.unsubscribe();
    };
    var FormComponent_1;
    //Variables to handle the new store type (selecting it, editing it..)
    FormComponent.NEWTYPE_PLACEHOLDER = "New store type";
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormComponent.prototype, "formResult", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], FormComponent.prototype, "storetypes", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FormComponent.prototype, "submit", void 0);
    FormComponent = FormComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-form",
            template: __webpack_require__(/*! ./form.component.html */ "./src/app/modules/form/form.component.html"),
            styles: [__webpack_require__(/*! ./form.component.css */ "./src/app/modules/form/form.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_to_map_service__WEBPACK_IMPORTED_MODULE_1__["ToMapService"],
            _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "./src/app/modules/login/login.component.css":
/*!***************************************************!*\
  !*** ./src/app/modules/login/login.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/login/login.component.html":
/*!****************************************************!*\
  !*** ./src/app/modules/login/login.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">    \n  <div class=\"row\">\n    <div class=\"col-md-10 order-md-1\">\n      <h2 class=\"page-header\">Login</h2>      \n      <form [formGroup]=\"form\" (ngSubmit)=\"onLoginSubmit()\" novalidate>\n\n        <!--<app-singlecontrol (ngModel)=\"'username'\" [label]=\"'Username'\" [type]=\"'text'\" [name]=\"'username'\" [value]=\"'amarinz'\"></app-singlecontrol>\n        -->\n        <div class=\"row\">\n          <div class=\"col-md-7 mb-3\">\n            <div class=\"form-group\">\n              <label>Username</label>\n              <input type=\"text\" name=\"username\" class=\"form-control\" formControlName=\"username\" value=\"amarin\">\n            </div>\n          </div>\n        </div>   \n      \n        <div class=\"row\">\n          <div class=\"col-md-7 mb-3\">\n            <div class=\"form-group\">\n              <label>Password</label>\n              <input type=\"password\" name=\"password\" class=\"form-control\" formControlName=\"password\">\n            </div>\n          </div>\n        </div>\n\n        <div class=\"input-group-append\">\n          <alert></alert>\n        </div>\n        <br>\n        <input type=\"submit\" value=\"Login\" class=\"btn btn-dark\"  [disabled]=\"form.pristine\">\n        <a href={{node_url}} class=\"col-md-3\" >Forgot password</a>\n      </form>\n    </div>\n  </div>\n</div>\n        "

/***/ }),

/***/ "./src/app/modules/login/login.component.ts":
/*!**************************************************!*\
  !*** ./src/app/modules/login/login.component.ts ***!
  \**************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/alert.service */ "./src/app/shared/services/alert.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, authService, router, alertService) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.alertService = alertService;
        this.node_url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].node_protocol + '://' + _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].node_host + ':' + _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].node_port + '/users/forgot_password';
        this.form = formBuilder.group({
            username: '',
            password: '',
        });
    }
    //Unsubscribe
    LoginComponent.prototype.ngOnDestroy = function () {
        if (typeof this.subscription !== 'undefined') {
            this.subscription.unsubscribe();
        }
    };
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = Object.assign({}, this.form.value);
        this.subscription = this.authService.authenticateUser(user)
            .subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.alertService.success('You are now logged in', 2500);
                setTimeout(function () { return _this.router.navigate(['/']); }, 1500);
            }
            else {
                _this.alertService.error(data.msg, 2500);
                _this.router.navigate(['/login']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/modules/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/modules/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/modules/map/components/geocoder/geocoder.component.css":
/*!************************************************************************!*\
  !*** ./src/app/modules/map/components/geocoder/geocoder.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFwL2NvbXBvbmVudHMvZ2VvY29kZXIvZ2VvY29kZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/map/components/geocoder/geocoder.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/modules/map/components/geocoder/geocoder.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-10\">\n    <form class=\"form-horizontal\" novalidate=\"\">\n      <div class=\"col-md-9 mb-3\">\n        <label for=\"address\">Full address</label>\n        <div class=\"input-group\">\n          <input class=\"form-control\" [(ngModel)]=\"search_string\" id=\"address_string\" name=\"address_string\" placeholder=\"Address\" type=\"text\" [disabled]=\"authService.isTokenExp()\">\n          <div class=\"input-group-append\">\n            <button type=\"submit\" class=\"btn btn-dark\" (click)=\"search()\" [disabled]=\"authService.isTokenExp() || search_string === ''\">Search</button>\n            <button type=\"submit\" class=\"btn btn-dark\" (click)=\"node_geocode()\" hidden>Search using node-geocoder</button>\n          </div>\n        </div>\n      </div>\n    </form>\n    <div class=\"row\">\n      <div class=\"col-md-10\">\n        <div class=\"col-md-9 mb-3\">\n          <div class=\"input-group-append alert alert-warning\" *ngIf=\"authService.isTokenExp()\"><br>\n            <h5>Please register and login to search on Google Maps geolocation and more</h5>\n          </div>\n          <div class=\"input-group-append alert alert-warning\" *ngIf=\"searchQuota != ''\"><br>\n            <h5>{{searchQuota}}</h5>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>  \n</div>"

/***/ }),

/***/ "./src/app/modules/map/components/geocoder/geocoder.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/map/components/geocoder/geocoder.component.ts ***!
  \***********************************************************************/
/*! exports provided: GeocoderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeocoderComponent", function() { return GeocoderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/services/store.service */ "./src/app/shared/services/store.service.ts");
/* harmony import */ var _map_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../map.component */ "./src/app/modules/map/map.component.ts");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



//Not sure forwaredRef is needed to inject parent (Map) in child (Geocoder) class



/*
Note for myself
Instead of injecting parent Map in child (Geocoder), the other option is to use an emitter in child
import { EventEmitter, Output } from "@angular/core";
..
export class SaveComponent implements OnInit {
  @Output() search = new EventEmitter<boolean>();
  findLocationTest() {
    this.search.emit(null);
  }
}
//parent:
<app-save (search)="run_geocoding($event)"></app-save>
//child
<button type="submit" class="btn btn-dark" (click)="findLocationTest()">Search</button>
*/
var GeocoderComponent = /** @class */ (function () {
    function GeocoderComponent(storeService, authService, _parent) {
        this.storeService = storeService;
        this.authService = authService;
        this._parent = _parent;
        this.searchQuota = '';
    }
    GeocoderComponent_1 = GeocoderComponent;
    GeocoderComponent.prototype.ngOnInit = function () {
        this.search_string = GeocoderComponent_1.DEFAULT_SEARCH;
    };
    //Check if address to be searched is already in DB
    GeocoderComponent.prototype.search = function () {
        var _this = this;
        //Verify whether cleaned searched string is in DB
        this.storeService.address_exists(this.search_string)
            .subscribe(function (store) {
            //No need for geocoding when address to be searched is stored in DB
            if (!store.length) {
                //See if the user did not exceed their geocoding quota and is allowed to search
                _this.allowGeocodingSearch(_this.geocoding.bind(_this)); //need to either bind this
            }
            else {
                console.log(store.length + " match" + (store.length != 1 ? 'es' : '') + ". Loading address from database", store);
                _this._parent.searchResult = store[0];
                _this._parent.process_results(store[0]);
            }
        }, function (err) { return console.error("Search err:", err); });
    };
    GeocoderComponent.prototype.geocoding = function () {
        var _this = this;
        //TODO: consider to use Place API:
        //https://developers.google.com/maps/documentation/geocoding/best-practices
        if (!this.geocoder)
            this.geocoder = new google.maps.Geocoder();
        this.geocoder.geocode({
            address: this.search_string,
            region: this._parent.regionBias,
            componentRestrictions: { country: this._parent.componentRestrictions }
        }, function (results, status) {
            console.log("Geocoding status:", status, " results:", results);
            if (status == google.maps.GeocoderStatus.OK) {
                //Transform google maps result to Store type
                var store = _this.storeService.result2Store(results[0]);
                //Send to parent Map component
                _this._parent.searchResult = store;
                _this._parent.process_results(store);
                //Log that the user carried out a search
                _this.logUserSearch();
            }
        });
    };
    //Return object with how many queries the user run
    GeocoderComponent.prototype.allowGeocodingSearch = function (callback) {
        var _this = this;
        //Get the username from localStorage
        var userJSON = localStorage.getItem('user');
        var username = JSON.parse(userJSON)['username'];
        //Call service to interact with the backend
        this.authService.getSearchFrequency(username).subscribe(function (res) {
            if (res.success) {
                // Check if the user is allowed to run a geolocation search
                //You get eg res.data: { total: 0, lasthour: 0, today: 0 } or { lasthour: 0, today: 7, total: 7}          
                if (_this.allowGeocodingSearchLogic(res.data)) {
                    callback();
                }
                else {
                    console.log(_this.searchQuota);
                }
            }
        }, function (err) {
            //You get: res: Object { success: false, msg: <err> }
            console.error('Error when retrieving number of geolocation searches:', err);
        });
    };
    GeocoderComponent.prototype.allowGeocodingSearchLogic = function (stats) {
        this.searchQuota = '';
        if (stats['total'] > _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].geolocation_quota) {
            this.searchQuota = 'Sorry, you exceeded your search quota (' + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].geolocation_quota + ' geolocation searches).';
            return false;
        }
        if (stats['today'] > _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].geolocation_daily_quota) {
            this.searchQuota = 'Sorry, you exceeded your search quota for today (' + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].geolocation_daily_quota + ' geolocation searches).';
            return false;
        }
        if (stats['lasthour'] > _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].geolocation_hourly_quota) {
            this.searchQuota = 'Sorry, you exceeded your search quota for the last hour (' + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].geolocation_hourly_quota + ' geolocation searches).';
            return false;
        }
        return true;
    };
    //Log in DB that the user carried out a search
    GeocoderComponent.prototype.logUserSearch = function () {
        //Get the username from localStorage
        var userJSON = localStorage.getItem('user');
        var username = JSON.parse(userJSON)['username'];
        //Call service to interact with the backend
        this.authService.logUserSearch(username).subscribe(function (data) {
            if (data.success) {
                console.log('Successfully pushed date of geolocation search');
            }
            else {
                console.log('Error when pushing date of geolocation search: ', data.msg);
            }
        });
    };
    //Not used and obsolete but good stuff
    //Geocoding using in node-geocoder in backend
    GeocoderComponent.prototype.node_geocode = function () {
        var _this = this;
        var out = this.storeService.geocode(this.search_string).subscribe(function (res) {
            console.log("Geocoder geocode.subscribe res:", res);
            //Move map to searched location
            _this._parent.map.panTo(new google.maps.LatLng(res[0].latitude, res[0].longitude));
            //Pass data to form component and set marker
            _this._parent.formResult = _this.storeService.result2Store_backend(res[0]);
            _this._parent.setMarker(_this._parent.formResult, undefined, "Search result");
        }, function (err) { return console.error("Geocoding err:", err); }, function () { return console.log("Completed"); });
    };
    var GeocoderComponent_1;
    GeocoderComponent.DEFAULT_SEARCH = ""; //Bjerregaards gate 60C, 0174 Oslo";
    GeocoderComponent = GeocoderComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-geocoder',
            template: __webpack_require__(/*! ./geocoder.component.html */ "./src/app/modules/map/components/geocoder/geocoder.component.html"),
            styles: [__webpack_require__(/*! ./geocoder.component.css */ "./src/app/modules/map/components/geocoder/geocoder.component.css")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return _map_component__WEBPACK_IMPORTED_MODULE_2__["MapComponent"]; }))),
        __metadata("design:paramtypes", [_shared_services_store_service__WEBPACK_IMPORTED_MODULE_1__["StoreService"],
            _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _map_component__WEBPACK_IMPORTED_MODULE_2__["MapComponent"]])
    ], GeocoderComponent);
    return GeocoderComponent;
}());



/***/ }),

/***/ "./src/app/modules/map/components/searchtypes/searchtypes.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/modules/map/components/searchtypes/searchtypes.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grey {\n    color:grey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYXAvY29tcG9uZW50cy9zZWFyY2h0eXBlcy9zZWFyY2h0eXBlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztDQUNkIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYXAvY29tcG9uZW50cy9zZWFyY2h0eXBlcy9zZWFyY2h0eXBlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyZXkge1xuICAgIGNvbG9yOmdyZXk7XG59Il19 */"

/***/ }),

/***/ "./src/app/modules/map/components/searchtypes/searchtypes.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/map/components/searchtypes/searchtypes.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"checkbox\">\n  <label>\n    <a name=\"selectall\" href=\"#\" (click)=\"sendAllToggle(true);\"><b>Select all</b></a>\n  </label>\n  &nbsp;\n  <label>\n      <a name=\"deselectall\" href=\"#\" (click)=\"sendAllToggle(false);\"><b>Deselect all</b></a>\n  </label>\n  \n</div>\n<div class=\"checkbox\" *ngFor=\"let type of storetypes; index as i\">\n  <label>\n    <input type=\"checkbox\" name=\"{{type}}\" (change)=\"sendTypeToggle($event, i)\" name=\"{{type}}\" [checked]=\"type == checked[i]\">&nbsp;{{type}}\n  </label>\n</div>"

/***/ }),

/***/ "./src/app/modules/map/components/searchtypes/searchtypes.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/map/components/searchtypes/searchtypes.component.ts ***!
  \*****************************************************************************/
/*! exports provided: SearchtypesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchtypesComponent", function() { return SearchtypesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_to_map_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/services/to-map.service */ "./src/app/shared/services/to-map.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchtypesComponent = /** @class */ (function () {
    function SearchtypesComponent(toMapService) {
        this.toMapService = toMapService;
        this.typesEmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.subscription = toMapService.typeToggle$.subscribe();
    }
    SearchtypesComponent.prototype.ngOnInit = function () {
        this.checked = this.storetypes.slice(0); //shallow copy
    };
    SearchtypesComponent.prototype.sendAllToggle = function (selection) {
        //console.log('sendAllToggle this.checked=',this.checked, ' storetypes=',this.storetypes)
        if (selection)
            this.checked = this.storetypes.slice(0); //shallow copy
        else
            this.checked = new Array(this.storetypes.length).fill(undefined);
        this.toMapService.sendTypeToggle(this.checked);
    };
    SearchtypesComponent.prototype.sendTypeToggle = function (event, ind) {
        //Tell Map parent to search on types
        if (event.target.checked) {
            this.checked[ind] = event.target.name;
        }
        else if (!event.target.checked) {
            this.checked[ind] = undefined;
        }
        this.toMapService.sendTypeToggle(this.checked.filter(function (x) { return x != undefined; }));
    };
    SearchtypesComponent.prototype.ngOnDestroy = function () {
        // Prevent memory leak when component destroyed
        this.subscription.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SearchtypesComponent.prototype, "storetypes", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SearchtypesComponent.prototype, "typesEmit", void 0);
    SearchtypesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-searchtypes',
            template: __webpack_require__(/*! ./searchtypes.component.html */ "./src/app/modules/map/components/searchtypes/searchtypes.component.html"),
            styles: [__webpack_require__(/*! ./searchtypes.component.css */ "./src/app/modules/map/components/searchtypes/searchtypes.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_to_map_service__WEBPACK_IMPORTED_MODULE_1__["ToMapService"]])
    ], SearchtypesComponent);
    return SearchtypesComponent;
}());



/***/ }),

/***/ "./src/app/modules/map/map.component.css":
/*!***********************************************!*\
  !*** ./src/app/modules/map/map.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body, html {\n    height: 100%;\n    width: 100%;\n}\n\n/*#gmapdiv {\n    width: 100%; height: 100%;\n    position: relative;    \n}*/\n\n.map-container {\n    height: 400px; width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYXAvbWFwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtDQUNmOztBQUVEOzs7R0FHRzs7QUFDSDtJQUNJLGNBQWMsQ0FBQyxZQUFZO0NBQzlCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYXAvbWFwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5LCBodG1sIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi8qI2dtYXBkaXYge1xuICAgIHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyAgICBcbn0qL1xuLm1hcC1jb250YWluZXIge1xuICAgIGhlaWdodDogNDAwcHg7IHdpZHRoOiAxMDAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/map/map.component.html":
/*!************************************************!*\
  !*** ./src/app/modules/map/map.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div #gmap class=\"map-container\" style=\"width:1000px;height:500px\"></div>\n  <br>\n  \n  <!--<app-geocoder id=\"app-geocoder\"></app-geocoder>\n   I am considering to move the search to a sibling component of the Map component. Now the search is in Geocoder component, which is child of Maps. The following uses an emitter and works when you restore the callbacks in Maps\n  <app-save (search)=\"run_geocoding($event)\"></app-save>\n  -->\n  \n  <!--\n    <button type=\"submit\" (click)=\"test()\">test</button>\n  -->\n  <!--\n  <p *ngIf=\"searchResult !== undefined\">searchResult {{searchResult.address}}</p>\n  <p *ngIf=\"formResult !== undefined\">formResult {{formResult.address}}</p>\n  -->\n  <div class=\"input-group-append\">\n    <alert></alert>\n  </div>\n  \n  <app-tabset id=\"app-tabset\" [storetypes]=\"storetypes\" [formResult]=\"formResult\" ></app-tabset>\n  \n</div>\n"

/***/ }),

/***/ "./src/app/modules/map/map.component.ts":
/*!**********************************************!*\
  !*** ./src/app/modules/map/map.component.ts ***!
  \**********************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/store.service */ "./src/app/shared/services/store.service.ts");
/* harmony import */ var _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/alert.service */ "./src/app/shared/services/alert.service.ts");
/* harmony import */ var _shared_services_to_map_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/to-map.service */ "./src/app/shared/services/to-map.service.ts");
/* harmony import */ var _shared_services_validate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/validate.service */ "./src/app/shared/services/validate.service.ts");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MapComponent = /** @class */ (function () {
    //Message component
    //msgText: string = "";
    function MapComponent(storeService, alertService, toMapService, validateService, authService) {
        var _this = this;
        this.storeService = storeService;
        this.alertService = alertService;
        this.toMapService = toMapService;
        this.validateService = validateService;
        this.authService = authService;
        this.infowindow = new google.maps.InfoWindow();
        this.markers = [];
        this.componentRestrictions = "NO"; //Restrict search to Norway. Used in Geocoder
        this.regionBias = "no"; //region bias to Norway
        toMapService.typeToggle$.subscribe(function (obj) { return _this.searchType(obj); });
        toMapService.formSubmit$.subscribe(function (obj) { return _this.save(); });
        toMapService.searchTab$.subscribe(function (tab) {
            //User changed tabs
            if (tab == 'search') {
                //If search was used, show it
                var callback;
                if (_this.searchResult) {
                    callback = function () {
                        _this.process_results(_this.searchResult);
                        //Open marker's InfoWindow not working
                        _this.openInfoWindow(_this.markers.length - 1);
                    };
                }
                _this.showAllStores(callback);
            }
            else if (tab == 'filter') {
                _this.removeSearchMarkers();
            }
        });
    }
    MapComponent_1 = MapComponent;
    MapComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Some addresses that work
        //Sylvia Mølleren: Hegdehaugsveien 12, 0167 Oslo
        //Fretex: Ullevålsveien 12, 0171 Oslo
        //Default location for search string: see geolocation.component.ts
        //Uncomment to populate form at startup
        /*this.formResult = {
          coords: [Number(59.9267819), Number(10.748087599999963)],
          address: "Slottsplassen",
          street_num: "1",
          locality: "Oslo",
          zip: "0010",
          country: "Norway",
          descr: "This is just an example to populate the form component",
          types: ["Charity shop"],
          username: "aless80",
          rating: {total: 10, count: 3}
        };*/
        //Load stores
        this.showAllStores();
        //Get all the distinct store types present in DB. Pass to Form component
        this.loadDistinctTypes();
        //Create the map
        var mapProp = {
            center: new google.maps.LatLng(MapComponent_1.DEFAULT_LAT, MapComponent_1.DEFAULT_LNG),
            zoom: 10,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
        //Listener to InfoWindow
        google.maps.event.addListener(this.infowindow, "closeclick", function () {
            _this.formResult = undefined;
            _this.searchResult = undefined;
        });
        //Find current location
        this.findMe();
    };
    MapComponent.prototype.ngOnDestroy = function () {
        //Unsubscribe from service
        if (typeof this.storeListSub !== 'undefined') {
            this.storeListSub.unsubscribe();
        }
    };
    ///Get position of client
    //https://medium.com/@balramchavan/display-and-track-users-current-location-using-google-map-geolocation-in-angular-5-c259ec801d58
    MapComponent.prototype.findMe = function () {
        var _this = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.showCurrentPosition(position, "http://maps.google.com/mapfiles/kml/pal3/icon28.png");
                _this.map.setZoom(12);
            });
        }
        else {
            alert("Geolocation is not supported by this browser.");
        }
    };
    MapComponent.prototype.showCurrentPosition = function (position, icon, title) {
        if (icon == undefined)
            icon = "https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi2.png";
        if (title == undefined)
            title = "No title";
        var location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        this.map.panTo(location);
        //this.map.setZoom(zoom)
        this.setCurrentMarker(location, icon, "Current location");
    };
    MapComponent.prototype.setCurrentMarker = function (location, icon, title) {
        if (!this.curr_marker) {
            this.curr_marker = new google.maps.Marker({
                position: location,
                map: this.map,
                title: title,
                icon: icon
            });
        }
        else {
            this.curr_marker.setPosition(location);
            this.curr_marker.setTitle(title);
            this.curr_marker.setIcon(icon);
        }
    };
    ///Handle markers of stores from geocoding search or from DB
    MapComponent.prototype.process_results = function (store) {
        //Pass data to form component and set marker
        store.username = JSON.parse(localStorage.getItem('user')).username;
        this.formResult = store;
        //Handle search marker
        this.removeSearchMarkers();
        this.setMarker(store, undefined, "Search result");
        this.map.panTo(new google.maps.LatLng(store.coords[0], store.coords[1]));
    };
    //Create marker with InfoWindow. Push marker to this.markers
    MapComponent.prototype.setMarker = function (store, icon, title) {
        var _this = this;
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(store.coords[0], store.coords[1]),
            map: this.map,
            title: title,
            icon: icon
        });
        //Create markerinfo object
        /*var markerinfo = {
          'markertype': 'some type',
          'formatted_address': result.formatted_address
        }*/
        //Add InfoWindow with listeners to marker
        //https://stackoverflow.com/questions/31494380/google-maps-change-content-of-infowindow
        //Create the node shown in marker's InfoWindow
        var iwdiv = document.createElement("div");
        iwdiv.id = "node";
        var h2 = document.createElement("h2");
        h2.textContent = marker.getTitle();
        var anchor = document.createElement("a");
        anchor.href = "#"; //this.removeMarker(store._id)
        anchor.text = "Remove";
        //Click listener in "Remove" link of marker's InfoWindow
        anchor.addEventListener("click", function () {
            _this.removeMarker(store._id);
        });
        //Build everything together in iwdiv element. Add text
        var div = document.createElement("div");
        div.appendChild(document.createElement("br"));
        div.appendChild(anchor);
        iwdiv.appendChild(h2);
        iwdiv.appendChild(document.createTextNode('Address: ' + store.address + ' ' + store.street_num + ', ' + store.zip + ', ' + store.locality));
        iwdiv.appendChild(document.createElement("br"));
        iwdiv.appendChild(document.createTextNode('Store type: ' + store.types.join(', ')));
        iwdiv.appendChild(document.createElement("br"));
        iwdiv.appendChild(document.createTextNode('Description: ' + store.descr));
        iwdiv.appendChild(document.createElement("br"));
        iwdiv.appendChild(div);
        //Click listener to marker to set and open InfoWindow
        //marker.content = iwdiv; //pass whole node to marker
        marker.addListener("click", function () {
            _this.infowindow.setContent(iwdiv);
            _this.infowindow.open(_this.map, marker);
            _this.selectedMarkerIndex = _this.markers.indexOf(marker);
            _this.formResult = store;
        });
        //Push marker to markers
        this.markers.push(marker);
        this.selectedMarkerIndex = this.markers.length;
        //Close InfoWindow
        this.hideInfoWindow();
    };
    //User closes a marker's InfoWindow
    MapComponent.prototype.hideInfoWindow = function () {
        this.infowindow.close();
    };
    //Opens a marker's InfoWindow
    MapComponent.prototype.openInfoWindow = function (marker_ind) {
        google.maps.event.trigger(this.markers[marker_ind], 'click');
    };
    //User clicked on "Remove" in marker's InfoWindow. 
    //Delete from map and from storage, if applicable
    MapComponent.prototype.removeMarker = function (_id) {
        var _this = this;
        //Close the form
        this.formResult = undefined;
        //If search marker, remove it and return
        if (this.markers[this.selectedMarkerIndex].title == 'Search result') {
            this.removeSearchMarkers();
            //Remove the searched location searchResult
            this.searchResult = undefined;
            return;
        }
        //Delete a store from DB
        this.markers[this.selectedMarkerIndex].setMap(null);
        this.markers.splice(this.selectedMarkerIndex, 1);
        this.deleteStore(_id, function () { return _this.showAllStores(); }); //TODO: review
    };
    MapComponent.prototype.removeSearchMarkers = function () {
        if (this.markers.length) {
            for (var i = 0; i < this.markers.length; i++) {
                if (this.markers[i].title == 'Search result') {
                    this.markers[i].setMap(null);
                    this.markers.splice(i, 1);
                }
            }
        }
        else
            console.log('No markers to remove');
    };
    ///Process emitters: OBSOLETE
    /*//Get emitter to save form
    getSaveEmitter(event:KeyboardEvent){
      if (event == undefined) return
      console.log('getSaveEmitter:',event.type)
      //Handle Update and Save
      if (this.formResult._id != undefined) {
        this.storeService.updateStore(this.formResult)
          .subscribe(
              res => {
                //Close search marker
                this.removeSearchMarkers(); //not sure it is needed
                this.alertService.success("Store updated in database",2500)
              },
              err => this.error(err, 2500)
          );
      } else {
        this.storeService.addStore(this.formResult)
          .subscribe(
              res => this.afterSaving(),
              err => this.error(err, 2500)
          );
      }
    }
    //OBSOLETE Get emitter to search on types
    getEventToggleEmitter(event:any){
      if (event == undefined) return
      //console.log('getEventToggleEmitter:',event)
      if (event.checked) {
        this.searchtypes.push(event.name);
      } else if (!event.checked) {
        this.searchtypes.splice(this.searchtypes.indexOf(event.name), 1);
      }
      //Query DB, plot all stores
      this.fetchField((data: Store[]) => {
        //Delete all markers
        this.deleteAllMarkers()
        console.log(data)
        this.updateMap(data);
      })
    }*/
    ///Communication from family components via service
    //User clicked on save or update button in the form
    MapComponent.prototype.save = function () {
        var _this = this;
        //Handle Update and Save
        if (this.formResult._id != undefined) {
            this.storeService.updateStore(this.formResult)
                .subscribe(function (res) {
                //Close search marker
                _this.removeSearchMarkers(); //not sure it is needed 
                //Remove the searched location searchResult
                _this.searchResult = undefined;
                //Refresh distinct types
                _this.loadDistinctTypes();
                //Refresh Filter tab: refresh stores and current types
                _this.searchType(_this.storetypes);
                _this.alertService.success("Store updated in database", 2500);
            }, function (err) { return _this.alertService.error(err, 2500); });
        }
        else {
            //Handle adding a new searched store
            this.storeService.addStore(this.formResult)
                .subscribe(function (res) { return _this.afterSavingNewStore(); }, function (err) { return _this.alertService.error(err, 2500); });
        }
    };
    MapComponent.prototype.afterSavingNewStore = function () {
        var _this = this;
        //Close search marker
        this.removeSearchMarkers();
        //Remove the searched location searchResult
        this.searchResult = undefined;
        //Pass to showAllStores callback 
        var callback = function () {
            //After stores have been loaded, open the store saved last
            _this.openInfoWindow(_this.markers.length - 1);
            //Show message
            _this.alertService.success("Store saved in database", 2500);
            //Refresh Filter tab: refresh stores and current types
            _this.searchType(_this.storetypes);
        };
        //Reload stores from DB
        this.showAllStores(callback);
    };
    //Get emitter to search on types
    MapComponent.prototype.searchType = function (array) {
        var _this = this;
        //console.log('map searchType:',array)
        //Query DB, plot all stores
        this.fetchField('types', array, function (data) {
            //Delete all markers
            _this.deleteAllMarkers();
            //console.log('map searchType data:',data)
            _this.updateMap(data);
        });
    };
    /*Other implementation of tabs
    searchType(obj: any){
      if (obj == undefined) return
      console.log('map searchType obj:',obj)
      if (obj.name == "*") {
        if (obj.checked) {
          this.searchtypes = ["*"];
        } else {
          this.searchtypes = obj.name;
        }
      } else {
        if (obj.checked) {
          this.searchtypes.push(obj.name);
        } else if (!obj.checked) {
          this.searchtypes.splice(this.searchtypes.indexOf(obj.name), 1);
        }
      }
      //Query DB, plot all stores
      this.fetchField('types', this.searchtypes, (data: Store[]) => {
        //Delete all markers
        this.deleteAllMarkers()
        console.log('map searchType data:',data)
        this.updateMap(data);
      })
    }
    */
    ///Methods using API calls through service
    // Fetch all documents.
    MapComponent.prototype.showAllStores = function (callback) {
        var _this = this;
        //Delete all markers
        //Query DB, plot all stores
        this.storeListSub = this.storeService.getAllStores()
            .subscribe(function (data) {
            _this.deleteAllMarkers();
            _this.updateMap(data);
            if (callback != undefined)
                callback();
        }, function (err) { return console.error(err); });
    };
    // Get all store types present in all documents in DB
    MapComponent.prototype.loadDistinctTypes = function () {
        var _this = this;
        this.storeService.getDistinctValues('types')
            .subscribe(function (data) { return _this.storetypes = data; }, function (err) { return console.error(err); });
    };
    // Fetch documents of certain types
    MapComponent.prototype.fetchField = function (field, array, callback) {
        this.storeListSub = this.storeService.fetchField(field, array)
            .subscribe(function (data) {
            if (callback != undefined)
                callback(data);
        }, function (err) { return console.error(err); });
    };
    // Delete the selected document from storage
    MapComponent.prototype.deleteStore = function (id, callback) {
        var _this = this;
        this.storeService.deleteStore(id)
            .subscribe(function () {
            if (callback != undefined)
                callback();
            _this.alertService.success("Store deleted", 2500);
        });
    };
    //Plot the given Store data
    MapComponent.prototype.updateMap = function (data) {
        var _this = this;
        data.forEach(function (element) {
            _this.setMarker(element, "http://maps.gstatic.com/mapfiles/markers2/icon_green.png", element.address + ' ' + element.street_num + ', ' + element.locality);
        });
    };
    ///Messages
    MapComponent.prototype.showAlert = function (text) {
        /*if (this.msgText != "") return;
        this.msgText = text;
        setTimeout(() => {
          this.msgText = "";
        }, 2000);*/
        this.alertService.warn(text);
    };
    //
    MapComponent.prototype.deleteAllMarkers = function () {
        // Sets the map on all markers in the array
        for (var i = 0; i < this.markers.length; i++) {
            this.markers[i].setMap(null);
        }
        this.markers = [];
    };
    var MapComponent_1;
    //Default settings for map and search. They can be removed
    MapComponent.DEFAULT_LAT = 49.935;
    MapComponent.DEFAULT_LNG = 10.79;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("gmap"),
        __metadata("design:type", Object)
    ], MapComponent.prototype, "gmapElement", void 0);
    MapComponent = MapComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-map",
            template: __webpack_require__(/*! ./map.component.html */ "./src/app/modules/map/map.component.html"),
            styles: [__webpack_require__(/*! ./map.component.css */ "./src/app/modules/map/map.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_store_service__WEBPACK_IMPORTED_MODULE_1__["StoreService"],
            _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"],
            _shared_services_to_map_service__WEBPACK_IMPORTED_MODULE_3__["ToMapService"],
            _shared_services_validate_service__WEBPACK_IMPORTED_MODULE_4__["ValidateService"],
            _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/app/modules/profile/profile.component.css":
/*!*******************************************************!*\
  !*** ./src/app/modules/profile/profile.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/profile/profile.component.html":
/*!********************************************************!*\
  !*** ./src/app/modules/profile/profile.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">    \n  <div class=\"row\">\n    <div class=\"col-md-10 order-md-1\">\n      <h2 class=\"page-header\">Profile</h2>\n        <form (ngSubmit)=\"onUpdateSubmit()\">\n          <div class=\"row\">\n            <div class=\"col-md-7 mb-3\">\n              <div class=\"form-group\">\n                <label>Username</label>\n                <input type=\"text\" [(ngModel)]=\"user.username\" name=\"username\" class=\"form-control\" readonly>\n              </div>\n            </div>\n          </div>\n          <div *ngIf=\"!showChangePwd\">\n            <div class=\"row\">\n              <div class=\"col-md-7 mb-3\">\n                <div class=\"form-group\">\n                  <label>Name</label>\n                  <input type=\"text\" [(ngModel)]=\"user.name\" name=\"name\" class=\"form-control\">\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-7 mb-3\">\n                <div class=\"form-group\">\n                  <label>Email</label>\n                  <input type=\"text\" [(ngModel)]=\"user.email\" name=\"email\" class=\"form-control\">\n                </div>\n              </div>\n            </div>\n          </div>\n          <div *ngIf=\"showChangePwd\">\n            <div *ngIf=\"!showNewPwds\">\n              <div class=\"row\">\n                <div class=\"col-md-7 mb-3\">\n                  <div class=\"form-group\">\n                    <label>Old Password</label>\n                    <input type=\"password\" [(ngModel)]=\"oldpassword\" name=\"oldpassword\" class=\"form-control\">\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div *ngIf=\"showNewPwds\">\n              <div class=\"row\">\n                <div class=\"col-md-7 mb-3\">\n                  <div class=\"form-group\">\n                    <label>New Password</label>\n                    <input type=\"password\" [(ngModel)]=\"newpassword\" name=\"newpassword\" class=\"form-control\">\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-7 mb-3\">\n                  <div class=\"form-group\">\n                    <label>Confirm New Password</label>\n                    <input type=\"password\" [(ngModel)]=\"newpassword2\" name=\"newpassword2\" class=\"form-control\">\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-md-7 mb-3\">\n              <a *ngIf=\"!showChangePwd\" href=\"#\" onClick=\"return false;\" (click)=\"showChangePwd=!showChangePwd\">Change password</a>\n            </div>\n          </div>\n\n          <input *ngIf=\"!showChangePwd\" type=\"submit\" class=\"btn btn-dark text-white mr-1\" value=\"Submit\">\n          <button *ngIf=\"showChangePwd && !showNewPwds\" type=\"button\" class=\"btn btn-dark text-white mr-1\" (click)=\"authenticate($event)\">Authenticate</button>\n          <button *ngIf=\"showChangePwd && showNewPwds\" type=\"button\" class=\"btn btn-dark text-white mr-1\" (click)=\"onChangePassword($event)\">Change Password</button>\n        </form>\n        <br>\n\n        <div class=\"input-group-append\">\n          <alert></alert>\n        </div>\n      </div>\n    </div>\n  </div>\n  \n        "

/***/ }),

/***/ "./src/app/modules/profile/profile.component.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/profile/profile.component.ts ***!
  \******************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/alert.service */ "./src/app/shared/services/alert.service.ts");
/* harmony import */ var _shared_services_validate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/validate.service */ "./src/app/shared/services/validate.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService, router, alertService, validateService) {
        this.authService = authService;
        this.router = router;
        this.alertService = alertService;
        this.validateService = validateService;
        this.user = {
            "name": "",
            "email": "",
            "username": "",
            "password": ""
        };
        this.showChangePwd = false;
        this.showNewPwds = false;
    }
    // Need to load the user when initilize
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
            //Remove the password cause I do not need it (and otherwise trouble in server when update profile)
            _this.user.password = '';
        }, function (err) {
            console.error('Error in retrieving the profile: ', err);
            return false;
        });
    };
    //Unsubscribe
    ProfileComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    ProfileComponent.prototype.onUpdateSubmit = function (onSuccessfulPwdChange) {
        var _this = this;
        // Required Fields
        if (!this.validateService.validateRegister(this.user)) {
            this.alertService.warn('Please fill in all fields', 2500);
            return false;
        }
        // Validate Email
        if (!this.validateService.validateEmail(this.user.email)) {
            this.alertService.warn('Please use a valid email', 2500);
            return false;
        }
        // Update User
        this.subscription = this.authService.editUser(this.user)
            .subscribe(function (data) {
            if (data.success) {
                if (onSuccessfulPwdChange != undefined) {
                    onSuccessfulPwdChange();
                }
                else {
                    _this.alertService.success('You have successfully updated your profile', 2500);
                }
            }
            else {
                _this.alertService.error('Something went wrong', 2500);
            }
        });
    };
    //This is similar to onUpdateSubmit in register component
    ProfileComponent.prototype.authenticate = function () {
        var _this = this;
        var user = {
            username: this.user.username,
            password: this.oldpassword
        };
        //Test authentication
        this.subscription = this.authService.authenticateUser(user)
            .subscribe(function (data) {
            if (data.success) {
                _this.showNewPwds = true;
            }
            else {
                _this.alertService.error(data.msg, 2500);
            }
        });
    };
    //Check if new passwords match
    ProfileComponent.prototype.onChangePassword = function () {
        var _this = this;
        if (this.newpassword !== this.newpassword2) {
            this.alertService.error('Passwords do not match', 2500);
        }
        else {
            //Pass the password 
            this.user.password = this.newpassword;
            var callback = function () {
                _this.alertService.success('You have successfully changed your password', 2500);
                _this.authService.logout();
                setTimeout(function () { return _this.router.navigate(['/login']); }, 1500);
            };
            var success = this.onUpdateSubmit(callback);
        }
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/modules/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/modules/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"],
            _shared_services_validate_service__WEBPACK_IMPORTED_MODULE_4__["ValidateService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/modules/register/register.component.css":
/*!*********************************************************!*\
  !*** ./src/app/modules/register/register.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/register/register.component.html":
/*!**********************************************************!*\
  !*** ./src/app/modules/register/register.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">    \n  <div class=\"row\">\n    <div class=\"col-md-10 order-md-1\">\n      <h2 class=\"page-header\">Register</h2>\n        \n      <form [formGroup]=\"form\" (ngSubmit)=\"onRegisterSubmit()\" novalidate>\n        \n        <!--<app-singlecontrol (ngModel)=\"'username'\" [label]=\"'Username'\" [type]=\"'text'\" [name]=\"'username'\" [value]=\"'amarinz'\"></app-singlecontrol>\n        <app-singlecontrol (ngModel)=\"'name'\" [label]=\"'Name'\" [type]=\"'text'\" [name]=\"'name'\" [value]=\"'ale'\"></app-singlecontrol>\n        <app-singlecontrol (ngModel)=\"'email'\" [label]=\"'Email'\" [type]=\"'text'\" [name]=\"'email'\" [value]=\"'aaa@gmail.com'\"></app-singlecontrol>\n        <app-singlecontrol (ngModel)=\"'password'\" [label]=\"'Password'\" [type]=\"'text'\" [name]=\"'password'\" [value]=\"'123'\"></app-singlecontrol>\n        -->\n        <div class=\"row\">\n          <div class=\"col-md-7 mb-3\">\n            <div class=\"form-group\">\n              <label>Username</label>\n              <input type=\"text\" name=\"username\" class=\"form-control\" formControlName=\"username\">\n            </div>\n          </div>\n        </div>          \n        <div class=\"row\">\n          <div class=\"col-md-7 mb-3\">\n            <div class=\"form-group\">\n              <label>Name</label>\n              <input type=\"text\" name=\"name\" class=\"form-control\" formControlName=\"name\">\n            </div>\n          </div>\n        </div>\n        \n        <div class=\"row\">\n          <div class=\"col-md-7 mb-3\">\n            <div class=\"form-group\">\n              <label>Email</label>\n              <input type=\"text\" name=\"email\" class=\"form-control\" formControlName=\"email\">\n            </div>\n          </div>\n        </div>\n        \n        <div class=\"row\">\n          <div class=\"col-md-7 mb-3\">\n            <div class=\"form-group\">\n              <label>Password</label>\n              <input type=\"password\" name=\"password\" class=\"form-control\" formControlName=\"password\">\n            </div>\n          </div>\n        </div>\n\n        <div class=\"input-group-append\">\n          <alert></alert>\n        </div>\n        \n        <br>  \n        <input type=\"submit\" class=\"btn btn-dark\" value=\"Submit\" [disabled]=\"form.pristine\">\n      </form>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/register/register.component.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/register/register.component.ts ***!
  \********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_validate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/validate.service */ "./src/app/shared/services/validate.service.ts");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/alert.service */ "./src/app/shared/services/alert.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(formBuilder, validateService, authService, router, alertService) {
        this.formBuilder = formBuilder;
        this.validateService = validateService;
        this.authService = authService;
        this.router = router;
        this.alertService = alertService;
        this.form = formBuilder.group({
            username: 'amarin',
            name: 'amarin',
            email: 'defaul@email.co',
            password: '',
        });
    }
    //Unsubscribe
    RegisterComponent.prototype.ngOnDestroy = function () {
        if (typeof this.subscription !== 'undefined') {
            this.subscription.unsubscribe();
        }
    };
    RegisterComponent.prototype.ngOnInit = function () { };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = Object.assign({}, this.form.value);
        // Required Fields (password checked later)
        if (!this.validateService.validateRegister(user)) {
            this.alertService.warn('Please fill in all fields', 2500);
            return false;
        }
        // Required Password
        if (!this.validateService.validatePassword(user.password)) {
            this.alertService.warn('Please fill in all fields', 2500);
            return false;
        }
        // Validate Email
        if (!this.validateService.validateEmail(user.email)) {
            this.alertService.warn('Please use a valid email', 2500);
            return false;
        }
        // Register User
        this.subscription = this.authService.registerUser(user)
            .subscribe(function (data) {
            if (data.success) {
                _this.alertService.success('You are now registered and can log in', 2500);
                setTimeout(function () { return _this.router.navigate(['/login']); }, 1500);
            }
            else {
                _this.alertService.error(data.msg, 2500);
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/modules/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/modules/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _shared_services_validate_service__WEBPACK_IMPORTED_MODULE_1__["ValidateService"],
            _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/shared/alert/alert.component.html":
/*!***************************************************!*\
  !*** ./src/app/shared/alert/alert.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let alert of alerts\" class=\"{{ cssClass(alert) }} alert-dismissable\">\n  {{ alert.message }} &nbsp;<a class=\"close\" (click)=\"removeAlert(alert)\">&times;</a>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/alert/alert.component.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/alert/alert.component.ts ***!
  \*************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/alert */ "./src/app/shared/models/alert.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/alert.service */ "./src/app/shared/services/alert.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertComponent = /** @class */ (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
        this.alerts = [];
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.alertService.getAlert(this.id).subscribe(function (alert) {
            if (!alert.message) {
                // clear alerts when an empty alert is received
                _this.alerts = [];
                return;
            }
            // add alert to array
            _this.alerts.push(alert);
        });
    };
    AlertComponent.prototype.removeAlert = function (alert) {
        this.alerts = this.alerts.filter(function (x) { return x !== alert; });
    };
    AlertComponent.prototype.cssClass = function (alert) {
        if (!alert) {
            return;
        }
        // return css class based on alert type
        switch (alert.type) {
            case _models_alert__WEBPACK_IMPORTED_MODULE_1__["AlertType"].Success:
                return 'alert alert-success';
            case _models_alert__WEBPACK_IMPORTED_MODULE_1__["AlertType"].Error:
                return 'alert alert-danger';
            case _models_alert__WEBPACK_IMPORTED_MODULE_1__["AlertType"].Info:
                return 'alert alert-info';
            case _models_alert__WEBPACK_IMPORTED_MODULE_1__["AlertType"].Warning:
                return 'alert alert-warning';
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AlertComponent.prototype, "id", void 0);
    AlertComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            //moduleId: module.id,
            selector: 'alert',
            template: __webpack_require__(/*! ./alert.component.html */ "./src/app/shared/alert/alert.component.html")
        }),
        __metadata("design:paramtypes", [_services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/shared/auth/auth.guard.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/auth/auth.guard.ts ***!
  \*******************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/shared/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (this.authService.isTokenExp()) {
            this.router.navigate(['/login']);
            return false;
        }
        else {
            return true;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/shared/components/navbar/navbar.component.css":
/*!***************************************************************!*\
  !*** ./src/app/shared/components/navbar/navbar.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/shared/components/navbar/navbar.component.html":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/navbar/navbar.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" href=\"#\" target=\"_blank\">{{username}}</a>\n  <button\n    class=\"navbar-toggler\"\n    type=\"button\"\n    data-toggle=\"collapse\"\n    data-target=\"#navbarsExample02\"\n    aria-controls=\"navbarsExample02\"\n    aria-expanded=\"false\"\n    aria-label=\"Toggle navigation\"\n  >\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarsExample02\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"/\">\n          Home\n        </a>\n      </li>\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"/about\">\n          About\n        </a>\n      </li>\n    </ul>\n    <ul class=\"navbar-nav ml-auto\">\n      <li class=\"nav-item\" *ngIf=\"authService.isTokenExp()\" \n        routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">\n        <a class=\"nav-link\" routerLink=\"/login\">Login</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"authService.isTokenExp()\" \n        [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n        <a class=\"nav-link\" [routerLink]=\"['/register']\">Register</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" *ngIf=\"!authService.isTokenExp()\" (click)=\"onLogoutClick()\" href=\"/\">Logout</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"!authService.isTokenExp()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n        <a class=\"nav-link\" [routerLink]=\"['/profile']\">Profile</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/shared/components/navbar/navbar.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/navbar/navbar.component.ts ***!
  \**************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/alert.service */ "./src/app/shared/services/alert.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, router, alertService) {
        this.authService = authService;
        this.router = router;
        this.alertService = alertService;
        this.username = this.authService.getLoggedUsername();
    }
    NavbarComponent.prototype.ngOnInit = function () { };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.alertService.info("You are now logged out", 2500);
        this.router.navigate(['/']);
        return false;
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-navbar",
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/shared/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/shared/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/tabset/tabset.component.css":
/*!***************************************************************!*\
  !*** ./src/app/shared/components/tabset/tabset.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3RhYnNldC90YWJzZXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/shared/components/tabset/tabset.component.html":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/tabset/tabset.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngb-tabset #t=\"ngbTabset\" (tabChange)=\"onTabChange($event)\">\n  <ngb-tab id=\"search\" >\n      <ng-template ngbTabTitle><b>Search</b></ng-template>\n      <ng-template ngbTabContent>\n        <br>\n        <app-geocoder id=\"app-geocoder\"></app-geocoder>\n        <app-form id=\"app-form\" [formResult]=\"formResult\" [storetypes]=\"storetypes\"></app-form>\n      </ng-template>\n  </ngb-tab>\n  <ngb-tab id=\"filter\">\n    <ng-template ngbTabTitle><b>Filter</b></ng-template>\n    <ng-template ngbTabContent>\n      <br>\n      <app-searchtypes id=\"app-searchtypes\" [storetypes]=\"storetypes\" ></app-searchtypes>\n    </ng-template>\n  </ngb-tab>\n</ngb-tabset>\n<!--\n  <button class=\"btn btn-outline-primary\" (click)=\"t.select('tabset2')\">Selected tab with \"tabset2\" id</button>\n-->\n"

/***/ }),

/***/ "./src/app/shared/components/tabset/tabset.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/tabset/tabset.component.ts ***!
  \**************************************************************/
/*! exports provided: TabsetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsetComponent", function() { return TabsetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_to_map_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/to-map.service */ "./src/app/shared/services/to-map.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TabsetComponent = /** @class */ (function () {
    function TabsetComponent(toMapService) {
        this.toMapService = toMapService;
    }
    TabsetComponent.prototype.onTabChange = function ($event) {
        //Send notification of tab change to map component
        this.toMapService.sendSearchTab($event.nextId);
    };
    TabsetComponent.prototype.ngOnDestroy = function () {
        // Prevent memory leak when component destroyed
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], TabsetComponent.prototype, "storetypes", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TabsetComponent.prototype, "formResult", void 0);
    TabsetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tabset',
            template: __webpack_require__(/*! ./tabset.component.html */ "./src/app/shared/components/tabset/tabset.component.html"),
            styles: [__webpack_require__(/*! ./tabset.component.css */ "./src/app/shared/components/tabset/tabset.component.css")]
        }),
        __metadata("design:paramtypes", [_services_to_map_service__WEBPACK_IMPORTED_MODULE_1__["ToMapService"]])
    ], TabsetComponent);
    return TabsetComponent;
}());



/***/ }),

/***/ "./src/app/shared/models/alert.ts":
/*!****************************************!*\
  !*** ./src/app/shared/models/alert.ts ***!
  \****************************************/
/*! exports provided: Alert, AlertType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return Alert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertType", function() { return AlertType; });
var Alert = /** @class */ (function () {
    function Alert(init) {
        Object.assign(this, init);
    }
    return Alert;
}());

var AlertType;
(function (AlertType) {
    AlertType[AlertType["Success"] = 0] = "Success";
    AlertType[AlertType["Error"] = 1] = "Error";
    AlertType[AlertType["Info"] = 2] = "Info";
    AlertType[AlertType["Warning"] = 3] = "Warning";
})(AlertType || (AlertType = {}));


/***/ }),

/***/ "./src/app/shared/services/alert.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/alert.service.ts ***!
  \**************************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_models_alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/models/alert */ "./src/app/shared/models/alert.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { Router, NavigationStart } from '@angular/router';
var AlertService = /** @class */ (function () {
    //private keepAfterRouteChange = false;
    function AlertService() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
        /*router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                if (this.keepAfterRouteChange) {
                    // only keep for a single route change
                    this.keepAfterRouteChange = false;
                } else {
                    // clear alert messages
                    this.clear();
                }
            }
        });*/
    }
    // subscribe to alerts
    AlertService.prototype.getAlert = function (alertId) {
        return this.subject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (x) { return x && x.alertId === alertId; }));
    };
    // convenience methods
    AlertService.prototype.success = function (message, timeout) {
        var _this = this;
        if (timeout === void 0) { timeout = 1000; }
        this.alert(new _shared_models_alert__WEBPACK_IMPORTED_MODULE_3__["Alert"]({ message: message, type: _shared_models_alert__WEBPACK_IMPORTED_MODULE_3__["AlertType"].Success }));
        setTimeout(function () { return _this.clear(); }, timeout);
    };
    AlertService.prototype.error = function (message, timeout) {
        var _this = this;
        if (timeout === void 0) { timeout = 1000; }
        this.alert(new _shared_models_alert__WEBPACK_IMPORTED_MODULE_3__["Alert"]({ message: message, type: _shared_models_alert__WEBPACK_IMPORTED_MODULE_3__["AlertType"].Error }));
        setTimeout(function () { return _this.clear(); }, timeout);
    };
    AlertService.prototype.info = function (message, timeout) {
        var _this = this;
        if (timeout === void 0) { timeout = 1000; }
        this.alert(new _shared_models_alert__WEBPACK_IMPORTED_MODULE_3__["Alert"]({ message: message, type: _shared_models_alert__WEBPACK_IMPORTED_MODULE_3__["AlertType"].Info }));
        setTimeout(function () { return _this.clear(); }, timeout);
    };
    AlertService.prototype.warn = function (message, timeout) {
        var _this = this;
        if (timeout === void 0) { timeout = 1000; }
        this.alert(new _shared_models_alert__WEBPACK_IMPORTED_MODULE_3__["Alert"]({ message: message, type: _shared_models_alert__WEBPACK_IMPORTED_MODULE_3__["AlertType"].Warning }));
        setTimeout(function () { return _this.clear(); }, timeout);
    };
    // main alert method    
    AlertService.prototype.alert = function (alert) {
        //this.keepAfterRouteChange = alert.keepAfterRouteChange;
        this.subject.next(alert);
    };
    // clear alerts
    AlertService.prototype.clear = function (alertId) {
        this.subject.next(new _shared_models_alert__WEBPACK_IMPORTED_MODULE_3__["Alert"]({ alertId: alertId }));
    };
    AlertService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/shared/services/auth.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = /** @class */ (function () {
    function AuthService(http, jwtHelper) {
        this.http = http;
        this.jwtHelper = jwtHelper;
        // Backend Server URI
        // Set in /backend/server.js
        this.uri = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].node_protocol + '://' + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].node_host + ':' + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].node_port;
        // The name of your MongoDB database collection.
        this.collection = "users";
    }
    // Reach out to backend API
    AuthService.prototype.registerUser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.uri + "/" + this.collection + "/register", user, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.editUser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.uri + "/" + this.collection + "/update", user, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.uri + "/" + this.collection + "/authenticate", user, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    // Log that the logged-in user did a geolocation search
    AuthService.prototype.logUserSearch = function (username) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.uri + "/" + this.collection + "/logsearch", { username: username }, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.getSearchFrequency = function (username) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.uri + "/" + this.collection + "/searchstats", { username: username }, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.getProfile = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        // Use the token here
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.uri + "/" + this.collection + "/profile", { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    // Save in LocalStorage
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    //Get username from LocalStorage
    AuthService.prototype.getLoggedUsername = function () {
        var userjson = JSON.parse(localStorage.getItem('user'));
        if (userjson == null)
            return '';
        return userjson['username'];
    };
    // Fetch from LocalStorage
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.isTokenExp = function () {
        return this.jwtHelper.isTokenExpired();
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/shared/services/store.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/store.service.ts ***!
  \**************************************************/
/*! exports provided: StoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreService", function() { return StoreService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StoreService = /** @class */ (function () {
    function StoreService(http) {
        this.http = http;
        // Backend Server URI
        // Set in /backend/server.js
        this.uri = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].node_protocol + '://' + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].node_host + ':' + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].node_port;
        // The name of your MongoDB database collection.
        this.collection = "stores";
    }
    // Call node-geocoder
    StoreService.prototype.geocode = function (address) {
        var url = this.uri + "/" + this.collection + "/geopromise/" + encodeURI(address);
        return this.http.get(url);
    };
    // Fetches all documents.
    StoreService.prototype.getAllStores = function () {
        return this.http.get(this.uri + "/" + this.collection);
    };
    // Fetches a single document by _id.
    StoreService.prototype.getStoreById = function (id) {
        return this.http.get(this.uri + "/" + this.collection + "/get/" + id);
    };
    // Creates a new document.
    StoreService.prototype.addStore = function (store) {
        return this.http.post(this.uri + "/" + this.collection + "/add", store);
    };
    // Updates an existing document.
    StoreService.prototype.updateStore = function (store) {
        var newstore = {
            coords: store.coords,
            address: store.address,
            street_num: store.street_num,
            locality: store.locality,
            zip: store.zip,
            country: store.country,
            descr: store.descr,
            types: store.types,
            username: store.username,
            rating: {
                total: store.rating.total,
                count: store.rating.count
            }
        };
        return this.http.post(this.uri + "/" + this.collection + "/update/" + store._id, newstore);
    };
    // Deletes an existing document.
    StoreService.prototype.deleteStore = function (id) {
        return this.http.get(this.uri + "/" + this.collection + "/delete/" + id);
    };
    // Query documents on a field
    StoreService.prototype.fetchField = function (field, array) {
        return this.http.post(this.uri + "/" + this.collection + "/fetch/" + field, array);
    };
    // Get the distinct values of a field (Not yet used)
    StoreService.prototype.getDistinctValues = function (field) {
        return this.http.get(this.uri + "/" + this.collection + "/distinct/" + field);
    };
    // Check if address exists in DB
    StoreService.prototype.address_exists = function (search_string) {
        //Clean the address to be searched (remove punctuation and junk characters)
        var address = search_string.match(/\d\w*|\w+( +[a-z]\w*)*/gi).join(' ');
        //Send to REST API
        var url = this.uri + "/" + this.collection + "/exists/" + encodeURI(address);
        return this.http.get(url);
    };
    //Utility method to convert result to store types
    StoreService.prototype.result2Store = function (result) {
        var store = {
            coords: [
                Number(result.geometry.location.lat()),
                Number(result.geometry.location.lng())
            ],
            address: "",
            street_num: "",
            locality: "",
            zip: "",
            country: "",
            descr: "",
            types: [],
            username: "",
            rating: {
                total: undefined,
                count: undefined
            }
        };
        for (var i = 0; i < result.address_components.length; i++) {
            if (result.address_components[i].types.includes("route")) {
                store.address = result.address_components[i].long_name;
            }
            if (result.address_components[i].types.includes("street_number")) {
                store.street_num = result.address_components[i].short_name;
                store.address += ", " + store.street_num;
            }
            if (result.address_components[i].types.includes("locality"))
                store.locality = result.address_components[i].long_name;
            if (result.address_components[i].types.includes("administrative_area_level_1"))
                store.locality = result.address_components[i].long_name;
            if (result.address_components[i].types.includes("postal_code"))
                store.zip = result.address_components[i].short_name;
            if (result.address_components[i].types.includes("country"))
                store.country = result.address_components[i].long_name;
        }
        return store;
    };
    //Utility method to convert result to store types
    StoreService.prototype.result2Store_backend = function (result) {
        var store = {
            coords: [Number(result.latitude), Number(result.longitude)],
            address: result.streetname,
            street_num: result.streetNumber,
            locality: result.city,
            zip: result.zipcode,
            country: result.country,
            descr: "",
            types: [],
            username: "aless80",
            rating: {
                total: undefined,
                count: undefined
            }
        };
        return store;
    };
    StoreService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], StoreService);
    return StoreService;
}());



/***/ }),

/***/ "./src/app/shared/services/to-map.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/to-map.service.ts ***!
  \***************************************************/
/*! exports provided: ToMapService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToMapService", function() { return ToMapService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToMapService = /** @class */ (function () {
    function ToMapService() {
        // Observable string sources
        this.typeToggleSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.formSubmitSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.searchTabSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        // Observable string streams
        this.typeToggle$ = this.typeToggleSource.asObservable();
        this.formSubmit$ = this.formSubmitSource.asObservable();
        this.searchTab$ = this.searchTabSource.asObservable();
    }
    // Service message commands
    ToMapService.prototype.sendTypeToggle = function (checked) {
        this.typeToggleSource.next(checked);
    };
    ToMapService.prototype.sendFormSubmit = function (input) {
        this.formSubmitSource.next(input);
    };
    ToMapService.prototype.sendSearchTab = function (input) {
        this.searchTabSource.next(input);
    };
    ToMapService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ToMapService);
    return ToMapService;
}());



/***/ }),

/***/ "./src/app/shared/services/validate.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/validate.service.ts ***!
  \*****************************************************/
/*! exports provided: ValidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateService", function() { return ValidateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.username == undefined)
            return false;
        else
            return true;
    };
    ValidateService.prototype.validatePassword = function (password) {
        if (password == undefined || password == '')
            return false;
        else
            return true;
    };
    ValidateService.prototype.validateEmail = function (email) {
        // From https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        // Return true if email, or false if not email
        return re.test(String(email).toLowerCase());
    };
    ValidateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    protocol: 'http',
    host: 'localhost',
    port: 4200,
    node_protocol: 'http',
    node_host: 'localhost',
    node_port: 4000,
    geolocation_hourly_quota: 6,
    geolocation_daily_quota: 40,
    geolocation_quota: 150,
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/kinkyboy/Dropbox/ng/gmaps-ng7/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map