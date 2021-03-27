"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorType = exports.ReportMsgType = void 0;
// 上报消息类型:
var ReportMsgType;
(function (ReportMsgType) {
    ReportMsgType["NORMAL"] = "NORMAL";
    ReportMsgType["PROMISE_ERROR"] = "PROMISE_ERROR";
    ReportMsgType["WINDOW_RUNTIME_ERROR"] = "WINDOW_RUNTIME_ERROR";
    ReportMsgType["RESOURCE_ERROR"] = "RESOURCE_ERROR";
    ReportMsgType["PERFORMANCE_TIMING"] = "PERFORMANCE_TIMING";
    ReportMsgType["PERFORMANCE_VITALS"] = "PERFORMANCE_VITALS";
    ReportMsgType["NODE_UNCAUGHT_ERROR"] = "NODE_UNCAUGHT_ERROR";
})(ReportMsgType = exports.ReportMsgType || (exports.ReportMsgType = {}));
var ErrorType;
(function (ErrorType) {
    ErrorType["NORMAL"] = "NORMAL";
    ErrorType["PROMISE_ERROR"] = "PROMISE_ERROR";
    ErrorType["WINDOW_RUNTIME_ERROR"] = "WINDOW_RUNTIME_ERROR";
    ErrorType["RESOURCE_ERROR"] = "RESOURCE_ERROR";
})(ErrorType = exports.ErrorType || (exports.ErrorType = {}));
