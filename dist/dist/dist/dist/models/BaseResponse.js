"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BaseResponse = /** @class */ (function () {
    function BaseResponse(code, msg, content) {
        this.code = code;
        this.msg = msg;
        this.content = content;
    }
    return BaseResponse;
}());
exports.default = BaseResponse;
