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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_guards/auth.guard.ts":
/*!***************************************!*\
  !*** ./src/app/_guards/auth.guard.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
    function AuthGuard(authService, router, alertify) {
        this.authService = authService;
        this.router = router;
        this.alertify = alertify;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        this.alertify.error('You need to be logged in to access this area');
        this.router.navigate(['/home-spa']);
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_0__["AlertifyService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/_services/alertify.service.ts":
/*!***********************************************!*\
  !*** ./src/app/_services/alertify.service.ts ***!
  \***********************************************/
/*! exports provided: AlertifyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertifyService", function() { return AlertifyService; });
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

var AlertifyService = /** @class */ (function () {
    function AlertifyService() {
    }
    AlertifyService.prototype.confirm = function (message, okCallback) {
        alertify.confirm(message, function (e) {
            if (e) {
                okCallback();
            }
            else {
            }
        });
    };
    AlertifyService.prototype.success = function (message) {
        alertify.success(message);
    };
    AlertifyService.prototype.error = function (message) {
        alertify.error(message);
    };
    AlertifyService.prototype.warning = function (message) {
        alertify.warning(message);
    };
    AlertifyService.prototype.message = function (message) {
        alertify.message(message);
    };
    AlertifyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AlertifyService);
    return AlertifyService;
}());



/***/ }),

/***/ "./src/app/_services/auth.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/auth.service.ts ***!
  \*******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs-compat/_esm5/add/observable/throw.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-jwt */ "./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular2_jwt__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services_urls_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_services/urls.service */ "./src/app/_services/urls.service.ts");
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
    function AuthService(http, urlsService) {
        this.http = http;
        this.urlsService = urlsService;
        this.baseUrl = this.urlsService.baseUrlApi + '/api/auth/';
        this.jwtHelper = new angular2_jwt__WEBPACK_IMPORTED_MODULE_6__["JwtHelper"]();
    }
    AuthService.prototype.login = function (model) {
        var _this = this;
        return this.http.post(this.baseUrl + 'login', model, this.requestOptions()).map(function (response) {
            var user = response.json();
            if (user) {
                localStorage.setItem('token', user.tokenString);
                localStorage.setItem('user', JSON.stringify(user.user));
                _this.decodedToken = _this.jwtHelper.decodeToken(user.tokenString);
                _this.currentUser = user.user;
                _this.userToken = user.tokenString;
            }
        }).catch(this.handleError);
    };
    AuthService.prototype.register = function (user) {
        return this.http
            .post(this.baseUrl + 'register', user, this.requestOptions())
            .catch(this.handleError);
    };
    AuthService.prototype.loggedIn = function () {
        return Object(angular2_jwt__WEBPACK_IMPORTED_MODULE_6__["tokenNotExpired"])('token');
    };
    AuthService.prototype.requestOptions = function () {
        var header = new _angular_http__WEBPACK_IMPORTED_MODULE_0__["Headers"]({ 'Content-type': 'application/json' });
        return new _angular_http__WEBPACK_IMPORTED_MODULE_0__["RequestOptions"]({ headers: header });
    };
    AuthService.prototype.handleError = function (error) {
        var applicationError = error.headers.get('Application-Error');
        if (applicationError) {
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_5__["Observable"].throw(applicationError);
        }
        var serverError = error.json();
        var modelStateErrors = '';
        if (serverError) {
            for (var key in serverError) {
                if (serverError[key]) {
                    modelStateErrors += serverError[key] + '\n';
                }
            }
        }
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_5__["Observable"].throw(modelStateErrors || 'Server error');
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_0__["Http"], _services_urls_service__WEBPACK_IMPORTED_MODULE_7__["UrlsService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/_services/category.service.ts":
/*!***********************************************!*\
  !*** ./src/app/_services/category.service.ts ***!
  \***********************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs-compat/_esm5/add/observable/throw.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var _services_urls_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/urls.service */ "./src/app/_services/urls.service.ts");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular2-jwt */ "./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angular2_jwt__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CategoryService = /** @class */ (function () {
    function CategoryService(http, urlsService, authHttp) {
        this.http = http;
        this.urlsService = urlsService;
        this.authHttp = authHttp;
        this.baseUrl = this.urlsService.baseUrlApi + '/api/admin/';
    }
    CategoryService.prototype.getCategories = function () {
        return this.authHttp.get(this.baseUrl + 'categories')
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    CategoryService.prototype.register = function (category) {
        return this.http
            .post(this.baseUrl + 'addcategory', category, this.requestOptions())
            .catch(this.handleError);
    };
    CategoryService.prototype.requestOptions = function () {
        var header = new _angular_http__WEBPACK_IMPORTED_MODULE_0__["Headers"]({ 'Content-type': 'application/json' });
        return new _angular_http__WEBPACK_IMPORTED_MODULE_0__["RequestOptions"]({ headers: header });
    };
    CategoryService.prototype.handleError = function (error) {
        var applicationError = error.headers.get('Application-Error');
        if (applicationError) {
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_5__["Observable"].throw(applicationError);
        }
        var serverError = error.json();
        var modelStateErrors = '';
        if (serverError) {
            for (var key in serverError) {
                if (serverError[key]) {
                    modelStateErrors += serverError[key] + '\n';
                }
            }
        }
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_5__["Observable"].throw(modelStateErrors || 'Server error');
    };
    CategoryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_0__["Http"], _services_urls_service__WEBPACK_IMPORTED_MODULE_6__["UrlsService"], angular2_jwt__WEBPACK_IMPORTED_MODULE_7__["AuthHttp"]])
    ], CategoryService);
    return CategoryService;
}());



/***/ }),

/***/ "./src/app/_services/client.service.ts":
/*!*********************************************!*\
  !*** ./src/app/_services/client.service.ts ***!
  \*********************************************/
/*! exports provided: ClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientService", function() { return ClientService; });
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs-compat/_esm5/add/observable/throw.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var _services_urls_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/urls.service */ "./src/app/_services/urls.service.ts");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular2-jwt */ "./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angular2_jwt__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ClientService = /** @class */ (function () {
    function ClientService(http, urlsService, authHttp) {
        this.http = http;
        this.urlsService = urlsService;
        this.authHttp = authHttp;
        this.baseUrl = this.urlsService.baseUrlApi + '/api/admin/';
    }
    ClientService.prototype.register = function (client) {
        return this.authHttp
            .post(this.baseUrl + 'addclient', client, this.requestOptions())
            .catch(this.handleError);
    };
    ClientService.prototype.UpdateClient = function (client, client_Id) {
        return this.authHttp
            .put(this.baseUrl + 'updateclient/' + client_Id, client, this.requestOptions())
            .catch(this.handleError);
    };
    ClientService.prototype.getClient = function (clientName) {
        return this.authHttp.get(this.baseUrl + 'getclient/' + clientName.substring(clientName.lastIndexOf('*') + 2))
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ClientService.prototype.listClients = function () {
        return this.authHttp.get(this.baseUrl + 'listallclients/')
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ClientService.prototype.deleteClient = function (id) {
        return this.authHttp.delete(this.baseUrl + 'deleteClient/' + id, {}).catch(this.handleError);
    };
    ClientService.prototype.requestOptions = function () {
        var header = new _angular_http__WEBPACK_IMPORTED_MODULE_0__["Headers"]({ 'Content-type': 'application/json' });
        return new _angular_http__WEBPACK_IMPORTED_MODULE_0__["RequestOptions"]({ headers: header });
    };
    ClientService.prototype.handleError = function (error) {
        var applicationError = error.headers.get('Application-Error');
        if (applicationError) {
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_5__["Observable"].throw(applicationError);
        }
        var serverError = error.json();
        var modelStateErrors = '';
        if (serverError) {
            for (var key in serverError) {
                if (serverError[key]) {
                    modelStateErrors += serverError[key] + '\n';
                }
            }
        }
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_5__["Observable"].throw(modelStateErrors || 'Server error');
    };
    ClientService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_0__["Http"], _services_urls_service__WEBPACK_IMPORTED_MODULE_6__["UrlsService"], angular2_jwt__WEBPACK_IMPORTED_MODULE_7__["AuthHttp"]])
    ], ClientService);
    return ClientService;
}());



/***/ }),

/***/ "./src/app/_services/urls.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/urls.service.ts ***!
  \*******************************************/
/*! exports provided: UrlsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlsService", function() { return UrlsService; });
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

var UrlsService = /** @class */ (function () {
    function UrlsService() {
        this.baseUrl = '../../images';
        this.baseUrl = window.location.origin;
        this.baseUrlApi = 'http://localhost:5000';
        if (window.location.origin !== 'http://localhost:5000' && window.location.origin !== 'http://localhost:4200') {
            this.baseUrl = window.location.origin + '/core';
            this.baseUrlApi = window.location.origin + '/core';
        }
    }
    UrlsService.prototype.basePath = function () {
        return this.baseUrl;
    };
    UrlsService.prototype.basePathApi = function () {
        return this.baseUrlApi;
    };
    UrlsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], UrlsService);
    return UrlsService;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-jwt */ "./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_jwt__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(authService) {
        this.authService = authService;
        this.title = 'Showcase Magazine';
        this.jwtHelper = new angular2_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelper"]();
    }
    AppComponent.prototype.ngOnInit = function () {
        var token = localStorage.getItem('token');
        var user = JSON.parse(localStorage.getItem('user'));
        if (token) {
            this.authService.decodedToken = this.jwtHelper.decodeToken(token);
        }
        if (user) {
            this.authService.currentUser = user;
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _register_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./register/routes */ "./src/app/register/routes.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _home_spa_home_spa_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home-spa/home-spa.component */ "./src/app/home-spa/home-spa.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _services_urls_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_services/urls.service */ "./src/app/_services/urls.service.ts");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auth/auth.module */ "./src/app/auth/auth.module.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./_guards/auth.guard */ "./src/app/_guards/auth.guard.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _clients_client_home_client_home_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./clients/client-home/client-home.component */ "./src/app/clients/client-home/client-home.component.ts");
/* harmony import */ var _clients_client_add_client_add_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./clients/client-add/client-add.component */ "./src/app/clients/client-add/client-add.component.ts");
/* harmony import */ var _clients_client_edit_client_edit_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./clients/client-edit/client-edit.component */ "./src/app/clients/client-edit/client-edit.component.ts");
/* harmony import */ var _autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./autocomplete/autocomplete.component */ "./src/app/autocomplete/autocomplete.component.ts");
/* harmony import */ var _categories_category_add_category_add_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./categories/category-add/category-add.component */ "./src/app/categories/category-add/category-add.component.ts");
/* harmony import */ var _passer_passer_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./passer/passer.component */ "./src/app/passer/passer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_8__["NavComponent"],
                _home_spa_home_spa_component__WEBPACK_IMPORTED_MODULE_9__["HomeSpaComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_15__["RegisterComponent"],
                _clients_client_add_client_add_component__WEBPACK_IMPORTED_MODULE_17__["ClientAddComponent"],
                _clients_client_home_client_home_component__WEBPACK_IMPORTED_MODULE_16__["ClientHomeComponent"],
                _clients_client_edit_client_edit_component__WEBPACK_IMPORTED_MODULE_18__["ClientEditComponent"],
                _categories_category_add_category_add_component__WEBPACK_IMPORTED_MODULE_20__["CategoryAddComponent"],
                _autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_19__["AutocompleteComponent"],
                _passer_passer_component__WEBPACK_IMPORTED_MODULE_21__["PasserComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(_register_routes__WEBPACK_IMPORTED_MODULE_7__["appRoutes"], { useHash: true }),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["BsDropdownModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["TabsModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["BsDatepickerModule"].forRoot(),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _auth_auth_module__WEBPACK_IMPORTED_MODULE_13__["AuthModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
            ],
            providers: [
                _services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"],
                _services_alertify_service__WEBPACK_IMPORTED_MODULE_11__["AlertifyService"],
                _services_urls_service__WEBPACK_IMPORTED_MODULE_12__["UrlsService"],
                _guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: authHttpServiceFactory, AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authHttpServiceFactory", function() { return authHttpServiceFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-jwt */ "./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_jwt__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



function authHttpServiceFactory(http, options) {
    return new angular2_jwt__WEBPACK_IMPORTED_MODULE_2__["AuthHttp"](new angular2_jwt__WEBPACK_IMPORTED_MODULE_2__["AuthConfig"]({
        tokenName: 'token',
        tokenGetter: (function () { return localStorage.getItem('token'); }),
        globalHeaders: [{ 'Content-Type': 'application/json' }],
    }), http, options);
}
var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            providers: [
                {
                    provide: angular2_jwt__WEBPACK_IMPORTED_MODULE_2__["AuthHttp"],
                    useFactory: authHttpServiceFactory,
                    deps: [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]]
                }
            ]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/autocomplete/autocomplete.component.css":
/*!*********************************************************!*\
  !*** ./src/app/autocomplete/autocomplete.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a:hover{\r\n    background-color:#b0edff;\r\n    color:black;\r\n    padding:10px;    \r\n}\r\nul.li.a{\r\n    padding:10px;    \r\n}\r\na {\r\n  color:inherit;\r\n  text-decoration: none;\r\n }\r\nul\r\n{\r\n    list-style-type: none;\r\n}"

/***/ }),

/***/ "./src/app/autocomplete/autocomplete.component.html":
/*!**********************************************************!*\
  !*** ./src/app/autocomplete/autocomplete.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\" >\n  <div class=\"row\">\n    <div class=\"col-sm-6\">\n        <div class=\"form-group\">\n          <label for=\"clients\">Clients:</label><br>\n          <input id=\"clients\" autocomplete=\"off\" type=\"text\" class=\"form-control\" [(ngModel)]=query (keyup)=filter() (keyup.enter)=searchClient()>\n        </div>        \n    </div>    \n  </div>\n\n  <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <div class=\"form-group\">\n                <div class=\"suggestions\" *ngIf=\"filteredList.length > 0\">\n                    <ul *ngFor=\"let item of filteredList\">\n                        <li>                        \n                            <a style=\"padding:10px\" (click)=\"select(item);searchClient()\">{{item}}</a>\n                        </li>\n                    </ul>\n                </div>\n        </div>\n      </div>\n  </div>\n</div>  \t\n"

/***/ }),

/***/ "./src/app/autocomplete/autocomplete.component.ts":
/*!********************************************************!*\
  !*** ./src/app/autocomplete/autocomplete.component.ts ***!
  \********************************************************/
/*! exports provided: AutocompleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutocompleteComponent", function() { return AutocompleteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/client.service */ "./src/app/_services/client.service.ts");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AutocompleteComponent = /** @class */ (function () {
    function AutocompleteComponent(router, route, myElement, clientService) {
        var _this = this;
        this.router = router;
        this.clientService = clientService;
        this.autoClientName = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.clients = [];
        this.query = '';
        this.filteredList = [];
        route.params.subscribe(function (val) {
            _this.listen();
            _this.elementRef = myElement;
        });
    }
    AutocompleteComponent.prototype.ngOnInit = function () {
    };
    AutocompleteComponent.prototype.listen = function () {
        this.query = '';
        this.clients = [];
        this.getClients();
    };
    AutocompleteComponent.prototype.filter = function () {
        if (this.query !== "") {
            this.filteredList = this.clients.filter(function (el) {
                return el.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
            }.bind(this));
        }
        else {
            this.filteredList = [];
        }
    };
    AutocompleteComponent.prototype.select = function (item) {
        this.query = item;
        this.filteredList = [];
    };
    AutocompleteComponent.prototype.getClients = function () {
        var _this = this;
        this.clientService.listClients().subscribe(function (data) {
            for (var j = 0; j <= data.length - 1; j++) {
                _this.clients.push(data[j]['name'] + ' * ' + data[j]['client_Id']);
            }
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    AutocompleteComponent.prototype.searchClient = function () {
        this.autoClientName.emit(this.query);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AutocompleteComponent.prototype, "autoClientName", void 0);
    AutocompleteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-autocomplete',
            template: __webpack_require__(/*! ./autocomplete.component.html */ "./src/app/autocomplete/autocomplete.component.html"),
            styles: [__webpack_require__(/*! ./autocomplete.component.css */ "./src/app/autocomplete/autocomplete.component.css")]
        }),
        __metadata("design:paramtypes", [_node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _services_client_service__WEBPACK_IMPORTED_MODULE_1__["ClientService"]])
    ], AutocompleteComponent);
    return AutocompleteComponent;
}());



/***/ }),

/***/ "./src/app/categories/category-add/category-add.component.css":
/*!********************************************************************!*\
  !*** ./src/app/categories/category-add/category-add.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/categories/category-add/category-add.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/categories/category-add/category-add.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n          <form [formGroup]=\"registerForm\" (ngSubmit)=\"register()\"> \n              <br><br>\n              <div class=\"form-group\" [ngClass]=\"{'has-error': registerForm.get('Description').errors && registerForm.get('Description').touched}\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"Category\" formControlName=\"Description\">\n                <span class=\"help-block\" *ngIf=\"registerForm.get('Description').hasError('required') && registerForm.get('Description').touched\">\n                  Category is required\n                </span>\n              </div>          \n  \n              <div class=\"form-group text-center\">\n                  <button class=\"btn btn-success\" [disabled]=\"!registerForm.valid\" type=\"submit\">Save</button>\n                  <button class=\"btn btn-default\" type=\"button\" (click)=\"cancel()\">Cancel</button>\n              </div>\n            \n            </form>\n      </div>\n    </div>\n  </div>\n  \n  "

/***/ }),

/***/ "./src/app/categories/category-add/category-add.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/categories/category-add/category-add.component.ts ***!
  \*******************************************************************/
/*! exports provided: CategoryAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryAddComponent", function() { return CategoryAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/category.service */ "./src/app/_services/category.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CategoryAddComponent = /** @class */ (function () {
    function CategoryAddComponent(alertify, fb, categoryService) {
        this.alertify = alertify;
        this.fb = fb;
        this.categoryService = categoryService;
    }
    CategoryAddComponent.prototype.ngOnInit = function () {
        this.createRegisterForm();
    };
    CategoryAddComponent.prototype.createRegisterForm = function () {
        this.registerForm = this.fb.group({
            Description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    CategoryAddComponent.prototype.register = function () {
        var _this = this;
        if (this.registerForm.valid) {
            this.category = Object.assign({}, this.registerForm.value);
            this.categoryService.register(this.category).subscribe(function () {
                _this.alertify.success('Category registration successful');
                _this.registerForm.reset();
            }, function (error) {
                _this.alertify.error('There is some error');
            });
        }
    };
    CategoryAddComponent.prototype.cancel = function () {
        this.registerForm.reset();
    };
    CategoryAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-category-add',
            template: __webpack_require__(/*! ./category-add.component.html */ "./src/app/categories/category-add/category-add.component.html"),
            styles: [__webpack_require__(/*! ./category-add.component.css */ "./src/app/categories/category-add/category-add.component.css")]
        }),
        __metadata("design:paramtypes", [_services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"]])
    ], CategoryAddComponent);
    return CategoryAddComponent;
}());



/***/ }),

/***/ "./src/app/clients/client-add/client-add.component.css":
/*!*************************************************************!*\
  !*** ./src/app/clients/client-add/client-add.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/clients/client-add/client-add.component.html":
/*!**************************************************************!*\
  !*** ./src/app/clients/client-add/client-add.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-6\">\n        <form [formGroup]=\"registerForm\" (ngSubmit)=\"register()\"> \n            <!-- <h2 class=\"text-center text-primary\">Add Client</h2>\n            <hr> -->\n            <br><br>\n            <div class=\"form-group\" [ngClass]=\"{'has-error': registerForm.get('Name').errors && registerForm.get('Name').touched}\">\n              <input type=\"text\" class=\"form-control\" autocomplete=\"off\" placeholder=\"Name\" formControlName=\"Name\">\n              <span class=\"help-block\" *ngIf=\"registerForm.get('Name').hasError('required') && registerForm.get('Name').touched\">\n                Client Name is required\n              </span>\n            </div>\n          \n            <div class=\"form-group\" [ngClass]=\"{'has-error': registerForm.get('Addr1').errors && registerForm.get('Addr1').touched}\">\n              <input type=\"text\" class=\"form-control\" placeholder=\"Addr1\" formControlName=\"Addr1\">    \n            </div>                        \n            \n            <div class=\"form-group\" [ngClass]=\"{'has-error': registerForm.get('City').errors && registerForm.get('City').touched}\">\n              <input type=\"text\" class=\"form-control\" placeholder=\"City\" formControlName=\"City\">    \n            </div>\n          \n            <div class=\"form-group\" [ngClass]=\"{'has-error': registerForm.get('State').errors && registerForm.get('State').touched}\">\n              <input type=\"text\" class=\"form-control\" placeholder=\"State\" formControlName=\"State\">    \n            </div>\n          \n            <div class=\"form-group\" [ngClass]=\"{'has-error': registerForm.get('Zip').errors && registerForm.get('Zip').touched}\">\n              <input type=\"text\" class=\"form-control\" placeholder=\"Zip\" formControlName=\"Zip\">    \n              <span class=\"help-block\" *ngIf=\"registerForm.get('Zip').hasError('maxlength') && registerForm.get('Zip').touched\">\n                Zip cannot exceed 5 characters\n              </span>\n            </div>\n          \n            <div class=\"form-group\" [ngClass]=\"{'has-error': registerForm.get('Tel').errors && registerForm.get('Tel').touched}\">\n              <input type=\"text\" class=\"form-control\" placeholder=\"Tel\" formControlName=\"Tel\">    \n            </div>\n          \n            <div class=\"form-group\" [ngClass]=\"{'has-error': registerForm.get('Email').errors && registerForm.get('Email').touched}\">\n              <input type=\"text\" class=\"form-control\" placeholder=\"Email\" formControlName=\"Email\">    \n            </div>\n            \n            <div class=\"form-group\" [ngClass]=\"{'has-error': registerForm.get('Url').errors && registerForm.get('Url').touched}\">\n              <input type=\"text\" class=\"form-control\" placeholder=\"Url\" formControlName=\"Url\">    \n            </div>\n          \n            <div class=\"form-group\">\n                <label for=\"\" class=\"control-label\" style=\"margin-right:10px\">Use Freetxt:</label>\n                <label class=\"radio-inline\">\n                  <input type=\"radio\" value=\"Yes\" formControlName=\"Addr2\">Yes\n                </label>\n                <label class=\"radio-inline\">\n                  <input type=\"radio\" value=\"No\" formControlName=\"Addr2\">No\n                </label>\n            </div>\n              \n            <div class=\"form-group\" [ngClass]=\"{'has-error': registerForm.get('Freetxt').errors && registerForm.get('Freetxt').touched}\">\n              <textarea rows=\"10\" cols=\"60\" class=\"form-control\" placeholder=\"Freetxt\" formControlName=\"Freetxt\"></textarea>\n            </div>\n          \n            <div class=\"form-group\" [ngClass]=\"{'has-error': registerForm.get('Blurb').errors && registerForm.get('Blurb').touched}\">\n                <textarea  rows=\"10\" cols=\"60\" class=\"form-control\" placeholder=\"Blurb\" formControlName=\"Blurb\"></textarea>\n            </div>\n          \n            <div class=\"form-group\" [ngClass]=\"{'has-error': registerForm.get('Category_Id').errors && registerForm.get('Category_Id').touched}\">\n                <label for=\"Category_Id\" class=\"control-label\" style=\"margin-right:10px\">Categories:</label>\n                <select class=\"form-control\" multiple style=\"height:400px\" placeholder=\"Category_Id\" formControlName=\"Category_Id\">\n                    <option *ngFor=\"let category of categories\" [value]='category.category_Id'>{{category.description}}</option>\n                </select>                \n            </div>\n\n            <div class=\"form-group text-center\">\n                <button class=\"btn btn-success\" [disabled]=\"!registerForm.valid\" type=\"submit\">Save</button>\n                <button class=\"btn btn-default\" type=\"button\" (click)=\"cancel()\">Cancel</button>\n            </div>\n          \n          </form>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/clients/client-add/client-add.component.ts":
/*!************************************************************!*\
  !*** ./src/app/clients/client-add/client-add.component.ts ***!
  \************************************************************/
/*! exports provided: ClientAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientAddComponent", function() { return ClientAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_services/client.service */ "./src/app/_services/client.service.ts");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_services/category.service */ "./src/app/_services/category.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ClientAddComponent = /** @class */ (function () {
    // category_Ids:  number[];
    function ClientAddComponent(alertify, fb, router, clientService, categoryService, route) {
        this.alertify = alertify;
        this.fb = fb;
        this.router = router;
        this.clientService = clientService;
        this.categoryService = categoryService;
        this.route = route;
        this.cancelRegister = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ClientAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.categoryService.getCategories().subscribe(function (data) {
            _this.categories = data;
        }, function (error) {
            _this.alertify.error(error);
        });
        this.createRegisterForm();
        // this.category_Ids = [];
    };
    ClientAddComponent.prototype.createRegisterForm = function () {
        this.registerForm = this.fb.group({
            Name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            Addr1: [''],
            Addr2: ['Yes'],
            City: [''],
            State: [''],
            Zip: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(15)],
            Tel: [''],
            Email: [''],
            Url: [''],
            Freetxt: [''],
            Blurb: [''],
            Category_Id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    // addCategory() {
    //   this.category_Ids.push(this.registerForm.controls['Category_IdLookup'].value);
    //   this.registerForm.controls['Category_Id'].setValue(this.category_Ids);
    //   this.categoryDescription.push(this.registerForm.controls['Category_IdLookup'].s);
    // }
    ClientAddComponent.prototype.register = function () {
        var _this = this;
        if (this.registerForm.valid) {
            this.client = Object.assign({}, this.registerForm.value);
            this.clientService.register(this.client).subscribe(function () {
                _this.alertify.success('Client registration successful');
                _this.registerForm.reset();
                _this.router.navigate(['/clients/' + Math.floor(Math.random() * 20)]);
                // console.log(this.registerForm.controls['Category_Id'].value);
            }, function (error) {
                _this.alertify.error(error);
            } // , () => {
            //    this.authService.login(this.user).subscribe(() => {
            //    this.router.navigate(['/clients']);
            //   });
            //  }
            );
        }
    };
    ClientAddComponent.prototype.cancel = function () {
        this.cancelRegister.emit(false);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ClientAddComponent.prototype, "cancelRegister", void 0);
    ClientAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client-add',
            template: __webpack_require__(/*! ./client-add.component.html */ "./src/app/clients/client-add/client-add.component.html"),
            styles: [__webpack_require__(/*! ./client-add.component.css */ "./src/app/clients/client-add/client-add.component.css")]
        }),
        __metadata("design:paramtypes", [_services_alertify_service__WEBPACK_IMPORTED_MODULE_1__["AlertifyService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_client_service__WEBPACK_IMPORTED_MODULE_4__["ClientService"],
            _services_category_service__WEBPACK_IMPORTED_MODULE_5__["CategoryService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ClientAddComponent);
    return ClientAddComponent;
}());



/***/ }),

/***/ "./src/app/clients/client-edit/client-edit.component.css":
/*!***************************************************************!*\
  !*** ./src/app/clients/client-edit/client-edit.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/clients/client-edit/client-edit.component.html":
/*!****************************************************************!*\
  !*** ./src/app/clients/client-edit/client-edit.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form name=\"registerForm\"  #registerForm=\"ngForm\" (ngSubmit)=\"update()\"> \n<app-autocomplete #cancelAuto  (autoClientName)=\"receiveMessage($event)\">Loading...</app-autocomplete>\n<hr>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-6\">\n            <!-- <h2 class=\"text-center text-primary\">Update Client</h2>\n            <hr> -->\n            <div style=\"display: none;\">\n              <input type=\"text\" disabled class=\"form-control\" [(ngModel)]=\"model.client_Id\"  name=\"client_Id\" placeholder=\"Client Id\">              \n            </div>\n            <br><br>\n            <div class=\"form-group\">\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model.name\" required name=\"Name\" placeholder=\"Name\">              \n            </div>\n          \n            <div class=\"form-group\">\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model.addr1\" name=\"Addr1\" placeholder=\"Addr1\">              \n            </div>                        \n            \n            <div class=\"form-group\">\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model.city\" name=\"City\" placeholder=\"City\">              \n            </div>\n          \n            <div class=\"form-group\">              \n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model.state\" name=\"State\" placeholder=\"State\">              \n            </div>\n          \n            <div class=\"form-group\">\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model.zip\" name=\"Zip\" placeholder=\"Zip\">              \n            </div>\n          \n            <div class=\"form-group\">\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model.tel\" name=\"Tel\" placeholder=\"Tel\">              \n            </div>\n          \n            <div class=\"form-group\">\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model.email\" name=\"Email\" placeholder=\"Email\">              \n            </div>\n            \n            <div class=\"form-group\">\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model.url\" name=\"Url\" placeholder=\"Url\">              \n            </div>\n          \n            <div class=\"form-group\">\n                <label for=\"\" class=\"control-label\" style=\"margin-right:10px\">Use Freetxt:</label>\n                <label class=\"radio-inline\">\n                  <input type=\"radio\" value=\"Yes\" [(ngModel)]=\"model.addr2\" name=\"Addr2\">Yes\n                </label>\n                <label class=\"radio-inline\">\n                  <input type=\"radio\" value=\"No\" [(ngModel)]=\"model.addr2\" name=\"Addr2\">No\n                </label>\n            </div>\n              \n            <div class=\"form-group\">\n              <textarea rows=\"10\" cols=\"60\" class=\"form-control\" [(ngModel)]=\"model.freetxt\" placeholder=\"Freetxt\" name=\"Freetxt\"></textarea>\n            </div>\n          \n            <div class=\"form-group\">\n                <textarea  rows=\"10\" cols=\"60\" class=\"form-control\" [(ngModel)]=\"model.blurb\" placeholder=\"Blurb\" name=\"Blurb\"></textarea>\n            </div>\n\n            <div class=\"form-group\">                 \n                <b>Saved categories:</b><div style=\"color:red\" *ngFor=\"let selected of ClientCategories\">{{selected}}</div>\n                <label for=\"Category_Id\" class=\"control-label\"  style=\"margin-right:10px; display: none\">Categories: {{ model.clientCategories | json }}  </label>\n                <select class=\"form-control\" multiple name=\"clientCategories\" style=\"height:400px\" placeholder=\"ClientCategories\" name=\"ClientCategories\" [(ngModel)]=\"model.clientCategories\">\n                    <option *ngFor=\"let category of categoriesTrim\" [ngValue]=\"category.category_Id\">{{category.description}} - ({{category.category_Id}})</option>\n                </select>                \n            </div>\n\n            <div class=\"form-group text-center\">\n                <button class=\"btn btn-success\" [disabled]=\"!registerForm.valid\" type=\"submit\">Save</button>\n                <button class=\"btn btn-success\" [disabled]=\"!registerForm.valid\" type=\"button\" (click)=\"delete()\">Delete</button>\n                <button class=\"btn btn-default\" type=\"button\"  (click)=\"cancel()\">Cancel</button>\n            </div>\n    </div>\n  </div>\n </div>\n</form>\n"

/***/ }),

/***/ "./src/app/clients/client-edit/client-edit.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/clients/client-edit/client-edit.component.ts ***!
  \**************************************************************/
/*! exports provided: ClientEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientEditComponent", function() { return ClientEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_services/category.service */ "./src/app/_services/category.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/client.service */ "./src/app/_services/client.service.ts");
/* harmony import */ var _autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../autocomplete/autocomplete.component */ "./src/app/autocomplete/autocomplete.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ClientEditComponent = /** @class */ (function () {
    function ClientEditComponent(categoryService, alertify, clientService) {
        this.categoryService = categoryService;
        this.alertify = alertify;
        this.clientService = clientService;
        this.cancelRegister = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.categoriesTrim = [];
        this.model = {};
        this.ClientCategories = [];
        this.CategoriesSelected = [];
    }
    ClientEditComponent.prototype.ngOnInit = function () {
    };
    ClientEditComponent.prototype.receiveMessage = function ($event) {
        var _this = this;
        this.editClientName = $event;
        this.ClientCategories = [];
        this.CategoriesSelected = [];
        this.categoriesTrim = [];
        this.model = {};
        this.categoryService.getCategories().subscribe(function (data) {
            _this.categories = data;
            _this.clientService.getClient(_this.editClientName).subscribe(function (data) {
                _this.model = data;
                for (var j = 0; j <= _this.categories.length - 1; j++) {
                    _this.categoriesTrim.push({ "category_Id": _this.categories[j]['category_Id'], "description": _this.categories[j]['description'] });
                    for (var i = 0; i <= _this.model.clientCategories.length - 1; i++) {
                        if (_this.model.clientCategories[i]['category_Id'] === _this.categories[j]['category_Id']) {
                            _this.ClientCategories.push(_this.categories[j]['description']); // display categories in plain text
                            _this.CategoriesSelected.push(_this.categories[j]['category_Id']);
                        }
                    }
                }
                _this.model.clientCategories = _this.CategoriesSelected;
            }, function (error) {
                _this.alertify.error(error);
            });
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    ClientEditComponent.prototype.update = function () {
        var _this = this;
        this.CategoriesSelected = [];
        this.CategoriesSelected = this.model.clientCategories; // contains the updated selected categories
        this.model.clientCategories = [];
        for (var i = 0; i <= this.CategoriesSelected.length - 1; i++) {
            this.model.clientCategories.push({ 'category_Id': this.CategoriesSelected[i] });
        }
        this.clientService.UpdateClient(this.model, this.model.client_Id).subscribe(function () {
            _this.alertify.success('Client registration successful');
            _this.cancel();
            // console.log(this.registerForm.controls['Category_Id'].value);
        }, function (error) {
            console.log(_this.model);
            _this.alertify.error(error);
        });
    };
    ClientEditComponent.prototype.cancel = function () {
        this.cancelAuto.listen();
        this.form.reset();
        this.ClientCategories = [];
    };
    ClientEditComponent.prototype.delete = function () {
        var _this = this;
        this.alertify.confirm('Are you sure you want to delete this Client?', function () {
            _this.clientService.deleteClient(_this.model.client_Id).subscribe(function () {
                _this.alertify.success('Client has been deleted');
                _this.cancel();
            }, function (error) {
                _this.alertify.error('Failed to delete Client');
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ClientEditComponent.prototype, "cancelRegister", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('registerForm'),
        __metadata("design:type", Object)
    ], ClientEditComponent.prototype, "form", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('cancelAuto'),
        __metadata("design:type", _autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_4__["AutocompleteComponent"])
    ], ClientEditComponent.prototype, "cancelAuto", void 0);
    ClientEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client-edit',
            template: __webpack_require__(/*! ./client-edit.component.html */ "./src/app/clients/client-edit/client-edit.component.html"),
            styles: [__webpack_require__(/*! ./client-edit.component.css */ "./src/app/clients/client-edit/client-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_services_category_service__WEBPACK_IMPORTED_MODULE_1__["CategoryService"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"], _services_client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"]])
    ], ClientEditComponent);
    return ClientEditComponent;
}());



/***/ }),

/***/ "./src/app/clients/client-home/client-home.component.css":
/*!***************************************************************!*\
  !*** ./src/app/clients/client-home/client-home.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/clients/client-home/client-home.component.html":
/*!****************************************************************!*\
  !*** ./src/app/clients/client-home/client-home.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf=\"loggedIn()\" class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <div class=\"tab-panel\">\n                <tabset class=\"member-tabset\">                    \n                    <tab heading=\"Update Client\">\n                        <app-client-edit>Loading...</app-client-edit>                \n                    </tab>\n                    <tab heading=\"Add Client \">                \n                         <app-client-add>Loading...</app-client-add>\n                    </tab>\n                    <tab heading=\"Add Categories\">\n                         <app-category-add>Loading...</app-category-add>\n                    </tab>                \n                </tabset>\n            </div>      \n        </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/clients/client-home/client-home.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/clients/client-home/client-home.component.ts ***!
  \**************************************************************/
/*! exports provided: ClientHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientHomeComponent", function() { return ClientHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClientHomeComponent = /** @class */ (function () {
    function ClientHomeComponent(authService, route) {
        this.authService = authService;
        this.route = route;
        // this.route.params.subscribe( params => console.log(params) );
    }
    ClientHomeComponent.prototype.ngOnInit = function () {
    };
    ClientHomeComponent.prototype.loggedIn = function () {
        return this.authService.loggedIn();
    };
    ClientHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client-home',
            template: __webpack_require__(/*! ./client-home.component.html */ "./src/app/clients/client-home/client-home.component.html"),
            styles: [__webpack_require__(/*! ./client-home.component.css */ "./src/app/clients/client-home/client-home.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ClientHomeComponent);
    return ClientHomeComponent;
}());



/***/ }),

/***/ "./src/app/home-spa/home-spa.component.css":
/*!*************************************************!*\
  !*** ./src/app/home-spa/home-spa.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home-spa/home-spa.component.html":
/*!**************************************************!*\
  !*** ./src/app/home-spa/home-spa.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf=\"registerMode\" style=\"text-align: center\">\n    <h1>\n      Register Users\n    </h1>\n    <p class=\"lead\">Sign up new users!</p>\n    <div class=\"text-align:center\">\n        <button class=\"btn btn-primary btn-lg\" (click)=\"registerToggle()\">Register</button>\n        <button class=\"btn btn-info btn-lg\">Learn more</button>\n    </div>\n</div>\n\n<div *ngIf=\"registerMode\" class=\"container\">\n  <div class=\"col-md-4 col-md-offset-4\">\n      <app-register  (cancelRegister)=\"cancelRegisterMode($event)\"></app-register>\n  </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/home-spa/home-spa.component.ts":
/*!************************************************!*\
  !*** ./src/app/home-spa/home-spa.component.ts ***!
  \************************************************/
/*! exports provided: HomeSpaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeSpaComponent", function() { return HomeSpaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeSpaComponent = /** @class */ (function () {
    function HomeSpaComponent(http) {
        this.http = http;
        this.registerMode = false;
    }
    HomeSpaComponent.prototype.ngOnInit = function () {
    };
    HomeSpaComponent.prototype.registerToggle = function () {
        this.registerMode = true;
    };
    HomeSpaComponent.prototype.cancelRegisterMode = function (registerMode) {
        this.registerMode = registerMode;
    };
    HomeSpaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home-spa.component.html */ "./src/app/home-spa/home-spa.component.html"),
            styles: [__webpack_require__(/*! ./home-spa.component.css */ "./src/app/home-spa/home-spa.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], HomeSpaComponent);
    return HomeSpaComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropdown-menu li, .dropdown-toggle {\r\n    cursor: pointer;\r\n}"

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" [routerLink]=\"['/home']\">Showcase Magazine</a>\n    </div>\n    <div id=\"navbar\" class=\"navbar-collapse collapse\">\n      <ul class=\"nav navbar-nav\" *ngIf=\"loggedIn()\">\n        <li routerLinkActive=\"active\"><a [routerLink] = \"['/clients']\">Clients</a></li>\n        <li><a [routerLink] = \"['/clients/2']\">Reload</a></li>\n        <!-- <li routerLinkActive=\"active\"><a [routerLink] = \"['/categories']\">Categories</a></li>\n        <li routerLinkActive=\"active\"><a [routerLink] = \"['/client-categories']\">Client Categories</a></li> -->\n      </ul>\n\n      <form *ngIf=\"!loggedIn()\" #loginForm=\"ngForm\" class=\"navbar-form navbar-right\" (ngSubmit)=login()>\n        <div class=\"form-group\">\n          <input type=\"text\" #username=\"ngModel\" placeholder=\"Username\" class=\"form-control\" required name=\"username\" [(ngModel)]=\"model.username\">\n        </div>\n        <div class=\"form-group\">\n          <input type=\"password\" #password=\"ngModel\" placeholder=\"Password\" class=\"form-control\" required name=\"password\" [(ngModel)]=\"model.password\">\n        </div>\n        <button type=\"submit\" [disabled]=\"!loginForm.valid\" class=\"btn btn-success\">Sign in</button>\n      </form>\n\n      <ul *ngIf=\"loggedIn()\" class=\"nav navbar-nav navbar-right\">              \n        <li class=\"dropdown\" dropdown>\n          <a (click)=\"false\" class=\"dropdown-toggle\" dropdownToggle>\n            Welcome {{ authService.decodedToken?.unique_name | titlecase}} <span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\" *dropdownMenu>\n            <li><a [routerLink]=\"['/member/edit']\" routerLinkActive=\"router-link-active\"  class=\"fa fa-user\">Edit Profile</a></li>\n            <li role=\"separator\" class=\"divider\"></li>\n            <li><a (click)=\"logout()\" class=\"fa fa-sign-out\">Logout</a></li>            \n          </ul>\n        </li>\n      </ul>\n\n    </div>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavComponent = /** @class */ (function () {
    function NavComponent(authService, alertify, router) {
        this.authService = authService;
        this.alertify = alertify;
        this.router = router;
        this.model = {};
    }
    NavComponent.prototype.ngOnInit = function () { };
    NavComponent.prototype.login = function () {
        var _this = this;
        this.authService.login(this.model).subscribe(function (data) {
            _this.alertify.success('logged in successfully');
        }, function (error) {
            _this.alertify.error('Failed to login');
        }, function () {
            _this.router.navigate(['/members']);
        });
    };
    NavComponent.prototype.logout = function () {
        this.authService.userToken = null;
        this.authService.currentUser = null;
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        this.alertify.message('logged out');
        this.router.navigate(['/home']);
    };
    NavComponent.prototype.loggedIn = function () {
        return this.authService.loggedIn();
    };
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/passer/passer.component.css":
/*!*********************************************!*\
  !*** ./src/app/passer/passer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/passer/passer.component.html":
/*!**********************************************!*\
  !*** ./src/app/passer/passer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  passer works!\n</p>\n"

/***/ }),

/***/ "./src/app/passer/passer.component.ts":
/*!********************************************!*\
  !*** ./src/app/passer/passer.component.ts ***!
  \********************************************/
/*! exports provided: PasserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasserComponent", function() { return PasserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PasserComponent = /** @class */ (function () {
    function PasserComponent(router) {
        this.router = router;
        this.router.navigate(['/clients']);
    }
    PasserComponent.prototype.ngOnInit = function () {
    };
    PasserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-passer',
            template: __webpack_require__(/*! ./passer.component.html */ "./src/app/passer/passer.component.html"),
            styles: [__webpack_require__(/*! ./passer.component.css */ "./src/app/passer/passer.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], PasserComponent);
    return PasserComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"registerForm\" (ngSubmit)=\"register()\">\n  <h2 class=\"text-center text-primary\">Sign Up</h2>\n  <hr>\n\n  <div class=\"form-group\" [ngClass]=\"{'has-error': registerForm.get('username').errors && registerForm.get('username').touched}\">\n    <input type=\"text\" class=\"form-control\" placeholder=\"Username\" formControlName=\"username\">\n    <span class=\"help-block\" *ngIf=\"registerForm.get('username').hasError('required') && registerForm.get('username').touched\">\n      Username is required\n    </span>\n  </div>\n\n  <div class=\"form-group\" [ngClass]=\"{'has-error': registerForm.get('password').errors && registerForm.get('password').touched}\">\n    <input type=\"password\" class=\"form-control\" placeholder=\"Password\" formControlName=\"password\">\n    <span class=\"help-block\" *ngIf=\"registerForm.get('password').hasError('required') && registerForm.get('password').touched\">\n      Password is required\n    </span>\n    <span class=\"help-block\" *ngIf=\"registerForm.get('password').hasError('minlength') && registerForm.get('password').touched\">\n      Password must be at least 4 characters\n    </span>\n    <span class=\"help-block\" *ngIf=\"registerForm.get('password').hasError('maxlength') && registerForm.get('password').touched\">\n      Password cannot exceed 8 characters\n    </span>\n  </div>\n  <div class=\"form-group\" [ngClass]=\"{'has-error': registerForm.get('confirmPassword').errors \n    && registerForm.get('confirmPassword').touched || registerForm.get('confirmPassword').touched\n    && registerForm.hasError('mismatch')}\">\n    <input type=\"password\" class=\"form-control\" placeholder=\"Confirm Password\" formControlName=\"confirmPassword\">\n    <span class=\"help-block\" *ngIf=\"registerForm.get('confirmPassword').hasError('required') && registerForm.get('confirmPassword').touched\">\n      Confirm Password is required\n    </span>\n    <span class=\"help-block\" *ngIf=\"registerForm.get('confirmPassword').touched && registerForm.hasError('mismatch')\">\n      Confirm Password must match Password\n    </span>\n  </div>\n\n  <div class=\"form-group text-center\">\n      <button class=\"btn btn-success\" [disabled]=\"!registerForm.valid\" type=\"submit\">Register</button>\n      <button class=\"btn btn-default\" type=\"button\" (click)=\"cancel()\">Cancel</button>\n  </div>\n</form>\n\n<p>Form value: {{ registerForm.value | json }}</p>\n<p>Form status: {{ registerForm.status | json }}</p>\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
    function RegisterComponent(authService, alertify, fb, router) {
        this.authService = authService;
        this.alertify = alertify;
        this.fb = fb;
        this.router = router;
        this.cancelRegister = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.createRegisterForm();
    };
    RegisterComponent.prototype.createRegisterForm = function () {
        this.registerForm = this.fb.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: [
                '',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(8)]
            ],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        }, { validator: this.passwordMatchValidator });
    };
    RegisterComponent.prototype.passwordMatchValidator = function (g) {
        return g.get('password').value === g.get('confirmPassword').value ? null : { 'mismatch': true };
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        if (this.registerForm.valid) {
            this.user = Object.assign({}, this.registerForm.value);
            this.authService.register(this.user).subscribe(function () {
                _this.alertify.success('Registration successful');
                _this.cancel();
            }, function (error) {
                _this.alertify.error(error);
            }, function () {
                _this.authService.login(_this.user).subscribe(function () {
                    _this.router.navigate(['/home-spa']);
                });
            });
        }
    };
    RegisterComponent.prototype.cancel = function () {
        this.cancelRegister.emit(false);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], RegisterComponent.prototype, "cancelRegister", void 0);
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/register/routes.ts":
/*!************************************!*\
  !*** ./src/app/register/routes.ts ***!
  \************************************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _home_spa_home_spa_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../home-spa/home-spa.component */ "./src/app/home-spa/home-spa.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _clients_client_home_client_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../clients/client-home/client-home.component */ "./src/app/clients/client-home/client-home.component.ts");
/* harmony import */ var _passer_passer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../passer/passer.component */ "./src/app/passer/passer.component.ts");




var appRoutes = [
    { path: 'home-spa', component: _home_spa_home_spa_component__WEBPACK_IMPORTED_MODULE_0__["HomeSpaComponent"] },
    { path: 'clients', component: _clients_client_home_client_home_component__WEBPACK_IMPORTED_MODULE_2__["ClientHomeComponent"] },
    { path: 'clients/:id', component: _clients_client_home_client_home_component__WEBPACK_IMPORTED_MODULE_2__["ClientHomeComponent"] },
    { path: 'passer', component: _passer_passer_component__WEBPACK_IMPORTED_MODULE_3__["PasserComponent"] },
    // {
    //    path: '',
    //    runGuardsAndResolvers: 'always',
    //    canActivate: [AuthGuard],
    //    children: [
    //       //  { path: 'members/:id', component: MemberDetailComponent, resolve: {user: MemberDetailResolver}},
    //       //  { path: 'member/edit', component: MemberEditComponent,
    //       //    resolve: {user: MemberEditResolver}, canDeactivate: [PreventUnsavedChanges]},
    //       //  { path: 'messages', component: MessagesComponent},
    //       //  { path: 'lists', component: ListsComponent},        
    //    ]
    // },
    { path: 'nav', component: _nav_nav_component__WEBPACK_IMPORTED_MODULE_1__["NavComponent"] },
    { path: '**', redirectTo: 'home-spa', pathMatch: 'full' }
];


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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Jess\Documents\ShowcaseCore\showcase.spa\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map