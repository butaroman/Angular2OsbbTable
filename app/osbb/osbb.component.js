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
var ng2_bs3_modal_1 = require('ng2-bs3-modal/ng2-bs3-modal');
require('rxjs/add/operator/map');
require('rxjs/add/operator/toPromise');
var osbb_service_1 = require('./osbb.service');
var osbb_form_component_1 = require('./osbb-form.component');
var OsbbComponent = (function () {
    function OsbbComponent(osbbService) {
        this.osbbService = osbbService;
        this.osbbArr = [];
    }
    OsbbComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.osbbService.getAllOsbb().then(function (osbbArr) { return _this.osbbArr = osbbArr; });
    };
    OsbbComponent.prototype.initUpdatedOsbb = function (osbb) {
        this.updatedOsbb = osbb;
    };
    OsbbComponent.prototype.onOsbbCreated = function (osbb) {
        var _this = this;
        this.osbbService.addOsbb(osbb).then(function (osbb) { return _this.addOsbb(osbb); });
    };
    OsbbComponent.prototype.onOsbbEdited = function (osbb) {
        this.osbbService.editOsbb(osbb);
    };
    OsbbComponent.prototype.onOsbbDeleted = function (osbb) {
        var _this = this;
        if (confirm("Are you sure?")) {
            this.osbbService.deleteOsbb(osbb).then(function (osbb) { return _this.deleteOsbb(osbb); });
        }
    };
    OsbbComponent.prototype.addOsbb = function (osbb) {
        console.log("new OSBB [id:" + osbb.osbbId + "  name:" + osbb.name + " description:" + osbb.description + "]");
        this.osbbArr.push(osbb);
    };
    OsbbComponent.prototype.deleteOsbb = function (osbb) {
        var index = this.osbbArr.indexOf(osbb);
        if (index > -1) {
            this.osbbArr.splice(index, 1);
        }
    };
    OsbbComponent = __decorate([
        core_1.Component({
            selector: 'osbb',
            templateUrl: './app/osbb/osbb.component.html',
            directives: [osbb_form_component_1.OsbbFormComponent, ng2_bs3_modal_1.MODAL_DIRECTIVES],
            providers: [http_1.HTTP_PROVIDERS, osbb_service_1.OsbbService]
        }), 
        __metadata('design:paramtypes', [osbb_service_1.OsbbService])
    ], OsbbComponent);
    return OsbbComponent;
}());
exports.OsbbComponent = OsbbComponent;
//# sourceMappingURL=osbb.component.js.map