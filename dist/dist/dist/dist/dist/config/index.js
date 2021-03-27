"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
var path_1 = require("path");
var config = {
    viewDir: path_1.join(__dirname, "..", "views"),
    staticDir: path_1.join(__dirname, "..", "assets"),
    port: 3000,
};
if (process.env.BUILD_ENV === "development") {
    var localConfig = {
        port: process.env.PORT,
    };
    config = lodash_1.extend(config, localConfig);
}
if (process.env.BUILD_ENV === "production") {
    var prodConfig = {
        port: process.env.PORT,
        memoryFlag: "memory",
    };
    config = lodash_1.extend(config, prodConfig);
}
exports.default = config;
