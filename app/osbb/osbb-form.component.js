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
var osbb_1 = require('./osbb');
var OsbbFormComponent = (function () {
    function OsbbFormComponent() {
        this.created = new core_1.EventEmitter();
        this.updated = new core_1.EventEmitter();
    }
    OsbbFormComponent.prototype.ngOnInit = function () {
        if (this.osbb === undefined) {
            this.osbb = new osbb_1.Osbb("", "");
        }
    };
    OsbbFormComponent.prototype.createOsbb = function (name, description) {
        if (name) {
            var osbb = new osbb_1.Osbb(name, description);
            this.created.emit(osbb);
        }
    };
    OsbbFormComponent.prototype.editOsbb = function (name, description) {
        console.log("osbbFromComponent.editOsbb");
        if (name) {
            this.osbb.name = name;
            this.osbb.description = description;
            this.updated.emit(this.osbb);
        }
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], OsbbFormComponent.prototype, "created", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], OsbbFormComponent.prototype, "updated", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], OsbbFormComponent.prototype, "osbb", void 0);
    OsbbFormComponent = __decorate([
        core_1.Component({
            selector: 'osbb-form',
            templateUrl: './app/osbb/osbb-form.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], OsbbFormComponent);
    return OsbbFormComponent;
}());
exports.OsbbFormComponent = OsbbFormComponent;
//# sourceMappingURL=osbb-form.component.js.map