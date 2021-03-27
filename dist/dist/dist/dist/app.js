"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("./ioc/loader");
var inversify_koa_utils_1 = require("inversify-koa-utils");
var inversify_1 = require("inversify");
var inversify_binding_decorators_1 = require("inversify-binding-decorators");
var log4js_1 = require("log4js");
var index_1 = __importDefault(require("./config/index"));
var koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
var cors_1 = __importDefault(require("@koa/cors"));
var web_monitor_1 = __importDefault(require("./monitor/web-monitor"));
log4js_1.configure({
    appenders: {
        cheese: { type: "file", filename: __dirname + "/logs/web-monitor.log" },
    },
    categories: { default: { appenders: ["cheese"], level: "error" } },
});
var logger = log4js_1.getLogger("cheese");
var port = index_1.default.port;
var container = new inversify_1.Container();
container.load(inversify_binding_decorators_1.buildProviderModule());
var server = new inversify_koa_utils_1.InversifyKoaServer(container);
var appInstances = server
    .setConfig(function (app) {
    // 设置text，用来支持sendBeacon请求
    app.use(koa_bodyparser_1.default({ enableTypes: ["json", "text"] }));
    // 处理跨域
    app.use(cors_1.default());
})
    .build()
    .listen(port, function () {
    console.log("🍺服务启动成功----> port:", port);
});
new web_monitor_1.default({
    logUrl: "http://localhost:8000/monitor/data-upload",
});
