"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonitorService = void 0;
var inversify_binding_decorators_1 = require("inversify-binding-decorators");
var tags_1 = __importDefault(require("../constants/tags"));
var MailSender_1 = __importDefault(require("../utils/MailSender"));
var types_1 = require("../models/types");
var SourceMap_1 = require("../utils/SourceMap");
var path_1 = __importDefault(require("path"));
var mailSender = new MailSender_1.default();
console.log("新建mailSender");
var MonitorService = /** @class */ (function () {
    function MonitorService() {
    }
    MonitorService.prototype.handleDataUpload = function (data) {
        switch (data.type) {
            case types_1.ReportMsgType.WINDOW_RUNTIME_ERROR:
                //需要做错误回溯
                var error = JSON.parse(data.content);
                var url = error.source;
                if (url) {
                    // 获取到对应的map文件路径
                    var fileUrl = url.substring(url.lastIndexOf("/") + 1).trim() + ".map";
                    SourceMap_1.restore(error, path_1.default.resolve("./sourcemaps/" + fileUrl)).then(function (result) {
                        var content = {
                            type: data.type,
                            content: JSON.stringify(result),
                            message: error.message,
                        };
                        mailSender.sendMail(JSON.stringify(content));
                    });
                }
                break;
            case types_1.ReportMsgType.PROMISE_ERROR:
                // 前端有未捕获的promise错误
                mailSender.sendMail(JSON.stringify(data));
                break;
            case types_1.ReportMsgType.RESOURCE_ERROR:
                mailSender.sendMail(JSON.stringify(data));
                // 前端有资源加载失败
                break;
            case types_1.ReportMsgType.PERFORMANCE_TIMING:
                // 接收到performance timing数据
                break;
            case types_1.ReportMsgType.PERFORMANCE_VITALS:
                // 接收到web-vitals数据，LCP FIB等
                break;
            case types_1.ReportMsgType.NODE_UNCAUGHT_ERROR:
                // 接收到node报错
                mailSender.sendMail(JSON.stringify(data));
                break;
            default:
                break;
        }
        return "处理完成";
    };
    MonitorService.prototype.sendMail = function (content) {
        mailSender.sendMail(content);
        return "发送完成";
    };
    MonitorService = __decorate([
        inversify_binding_decorators_1.provide(tags_1.default.MonitorService)
    ], MonitorService);
    return MonitorService;
}());
exports.MonitorService = MonitorService;
