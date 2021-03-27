"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.provideThrowable = void 0;
var inversify_binding_decorators_1 = require("inversify-binding-decorators");
var provideThrowable = function (identifier, name) {
    return inversify_binding_decorators_1.fluentProvide(identifier).whenTargetNamed(name).done();
};
exports.provideThrowable = provideThrowable;
