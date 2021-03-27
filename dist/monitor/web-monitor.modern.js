"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var node_fetch_1 = __importDefault(require("node-fetch"));
var r, t;
!function (o) { o[o.URGENT = 1] = "URGENT", o[o.IDLE = 2] = "IDLE"; }(r || (r = {})), function (o) { o.NORMAL = "NORMAL", o.NODE_UNCAUGHT_ERROR = "NODE_UNCAUGHT_ERROR"; }(t || (t = {}));
var n = /** @class */ (function () {
    function n(o) {
        var r = o.logUrl;
        if (!r)
            throw new Error("请传递要记录数据的路由~");
        this.logUrl = r;
    }
    n.prototype.sendToAnalytics = function (t, n, e, l) { var s = this.logUrl; l && (s = l), console.log("路由", s), console.log("typeof body", typeof n); var c = { type: e, content: n }; try {
        t == r.URGENT && node_fetch_1.default(s, { body: JSON.stringify(c), method: "POST", headers: { "Content-Type": "application/json" } }).catch(function () { console.log("上报异常了"); });
    }
    catch (o) {
        console.log(o);
    } };
    return n;
}());
var e = function (o) { console.log(o); }, l = { reportClient: new n({ logUrl: "log" }), isResourceTiming: !1, isElementTiming: !1, maxTime: 15e3 };
var s = /** @class */ (function () {
    function s() {
    }
    s.prototype.globalUnCaughtError = function () { process.on("uncaughtException", function (o) { console.error("There was an uncaught error", o), l.reportClient.sendToAnalytics(r.URGENT, JSON.stringify(o), t.NODE_UNCAUGHT_ERROR), process.exit(1); }); };
    s.prototype.run = function () { this.globalUnCaughtError(); };
    return s;
}());
var default_1 = /** @class */ (function () {
    function default_1(o) {
        if (o === void 0) { o = {}; }
        var r = o.logUrl;
        if (!r)
            throw new Error("Web系统系统监控平台，初始化未传递logUrl");
        var t = new n({ logUrl: r });
        l.reportClient = t, this.reportClient = t, l.analyticsTracker = o.analyticsTracker || e, (new s).run();
    }
    return default_1;
}());
exports.default = default_1;
//# sourceMappingURL=web-monitor.modern.js.map
