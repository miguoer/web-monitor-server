"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var node_fetch_1 = __importDefault(require("node-fetch"));
var n, r;
!function (o) { o[o.URGENT = 1] = "URGENT", o[o.IDLE = 2] = "IDLE"; }(n || (n = {})), function (o) { o.NORMAL = "NORMAL", o.NODE_UNCAUGHT_ERROR = "NODE_UNCAUGHT_ERROR"; }(r || (r = {}));
var t = function () { function r(o) { var n = o.logUrl; if (!n)
    throw new Error("请传递要记录数据的路由~"); this.logUrl = n; } return r.prototype.sendToAnalytics = function (r, t, e, i) { var l = this.logUrl; i && (l = i), console.log("路由", l), console.log("typeof body", typeof t); var c = { type: e, content: t }; try {
    r == n.URGENT && node_fetch_1.default(l, { body: JSON.stringify(c), method: "POST", headers: { "Content-Type": "application/json" } }).catch(function () { console.log("上报异常了"); });
}
catch (o) {
    console.log(o);
} }, r; }(), e = function (o) { console.log(o); }, i = { reportClient: new t({ logUrl: "log" }), isResourceTiming: !1, isElementTiming: !1, maxTime: 15e3 }, l = function () { function o() { } var t = o.prototype; return t.globalUnCaughtError = function () { process.on("uncaughtException", function (o) { console.error("There was an uncaught error", o), i.reportClient.sendToAnalytics(n.URGENT, JSON.stringify(o), r.NODE_UNCAUGHT_ERROR), process.exit(1); }); }, t.run = function () { this.globalUnCaughtError(); }, o; }();
function default_1(o) { void 0 === o && (o = {}); var n = o.logUrl; if (!n)
    throw new Error("Web系统系统监控平台，初始化未传递logUrl"); var r = new t({ logUrl: n }); i.reportClient = r, this.reportClient = r, i.analyticsTracker = o.analyticsTracker || e, (new l).run(); }
exports.default = default_1;
//# sourceMappingURL=web-monitor.module.js.map
