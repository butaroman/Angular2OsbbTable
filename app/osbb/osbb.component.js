"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require("@angular/http");
require('rxjs/add/operator/map');
require('rxjs/add/operator/toPromise');
var OsbbComponent = (function () {
    function OsbbComponent(http) {
        var _this = this;
        this.http = http;
        this.http.get('./app/osbb/data.json')
            .map(function (response) { return response.json(); })
            .subscribe(function (data) { _this.osbb = data; });
    }
    OsbbComponent = __decorate([
        core_1.Component({
            selector: 'osbb',
            templateUrl: './app/osbb/osbb.component.html',
            providers: [http_1.HTTP_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], OsbbComponent);
    return OsbbComponent;
}());
exports.OsbbComponent = OsbbComponent;
//# sourceMappingURL=osbb.component.js.map