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
var OsbbService = (function () {
    function OsbbService(http) {
        this.http = http;
        this.deleteUrl = 'http://localhost:52430/myosbb/restful/osbb/id/';
        this.postUrl = 'http://localhost:52430/myosbb/restful/osbb';
        this.putUrl = 'http://localhost:52430/myosbb/restful/osbb';
        this.tmpGetUrl = 'app/osbb/data.json'; //   DELETE ME
        this.getUrl = 'http://localhost:52430/myosbb/restful/osbb';
    }
    OsbbService.prototype.getAllOsbb = function () {
        return this.http.get(this.getUrl)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    OsbbService.prototype.addOsbb = function (osbb) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.post(this.postUrl, JSON.stringify(osbb), { headers: headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    OsbbService.prototype.editOsbb = function (osbb) {
        console.log("OsbbService.editOsbb(osbb) ===> [id:" + osbb.osbbId + "  name:" + osbb.name + "          description:" + osbb.description + "]");
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.put(this.putUrl, JSON.stringify(osbb), { headers: headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    OsbbService.prototype.deleteOsbb = function (osbb) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var url = " " + this.deleteUrl + "/" + osbb.osbbId;
        console.log("URL:::::::::::::::::::::" + url);
        return this.http.delete(url, { headers: headers })
            .toPromise()
            .then(function (res) { return osbb; })
            .catch(this.handleError);
    };
    OsbbService.prototype.handleError = function (error) {
        console.log('HandleError', error);
        return Promise.reject(error.message || error);
    };
    OsbbService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], OsbbService);
    return OsbbService;
}());
exports.OsbbService = OsbbService;
//# sourceMappingURL=osbb.service.js.map