"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); };
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_koa_utils_1 = require("inversify-koa-utils");
var tags_1 = __importDefault(require("../constants/tags"));
var index_1 = require("../ioc/index");
var inversify_1 = require("inversify");
var ResponseUtil_1 = require("../utils/ResponseUtil");
// setTimeout(() => {
//   Promise.reject("我是promise错误");
//   // throw new Error("就看得见");
// }, 2000);
var MonitorController = /** @class */ (function () {
    function MonitorController(monitorService) {
        this.monitorService = monitorService;
    }
    MonitorController.prototype.monitorDataUploaded = function (ctx, next) {
        console.log("收到data-upload");
        console.log(ctx.request.body);
        var result = "";
        var requestBody = JSON.stringify(ctx.request.body);
        if (requestBody !== "{}") {
            result = this.monitorService.handleDataUpload(ctx.request.body);
        }
        else {
            var queryBody = JSON.parse(ctx.query.body);
            result = this.monitorService.handleDataUpload(queryBody);
        }
        ctx.body = ResponseUtil_1.resultSuccess(result);
    };
    MonitorController.prototype.testError = function (ctx, next) {
        ctx.body = "dfdf";
    };
    __decorate([
        inversify_koa_utils_1.httpPost("/data-upload"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Function]),
        __metadata("design:returntype", void 0)
    ], MonitorController.prototype, "monitorDataUploaded", null);
    __decorate([
        inversify_koa_utils_1.httpGet("/test"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Function]),
        __metadata("design:returntype", void 0)
    ], MonitorController.prototype, "testError", null);
    MonitorController = __decorate([
        index_1.provideThrowable(inversify_koa_utils_1.TYPE.Controller, "MonitorController"),
        inversify_koa_utils_1.controller("/monitor"),
        __param(0, inversify_1.inject(tags_1.default.MonitorService)),
        __metadata("design:paramtypes", [Object])
    ], MonitorController);
    return MonitorController;
}());
exports.default = MonitorController;
