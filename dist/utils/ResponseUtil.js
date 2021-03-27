"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.param2Obj = exports.pagination = exports.resultError = exports.resultSuccess = void 0;
var BaseResponse_1 = __importDefault(require("../models/BaseResponse"));
function resultSuccess(content, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.msg, msg = _c === void 0 ? "success" : _c;
    return new BaseResponse_1.default(200, msg, content);
}
exports.resultSuccess = resultSuccess;
function resultError(code, msg, content) {
    if (code === void 0) { code = 1000; }
    if (msg === void 0) { msg = "error"; }
    return new BaseResponse_1.default(code, msg, content);
}
exports.resultError = resultError;
function pagination(pageNo, pageSize, array) {
    var offset = (pageNo - 1) * Number(pageSize);
    var ret = offset + Number(pageSize) >= array.length
        ? array.slice(offset, array.length)
        : array.slice(offset, offset + Number(pageSize));
    return ret;
}
exports.pagination = pagination;
function param2Obj(url) {
    var search = url.split("?")[1];
    if (!search) {
        return {};
    }
    return JSON.parse('{"' +
        decodeURIComponent(search)
            .replace(/"/g, '\\"')
            .replace(/&/g, '","')
            .replace(/=/g, '":"')
            .replace(/\+/g, " ") +
        '"}');
}
exports.param2Obj = param2Obj;
