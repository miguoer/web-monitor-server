"use strict";
!function (o, n) { "object" == typeof exports && "undefined" != typeof module ? module.exports = n(require("node-fetch")) : "function" == typeof define && define.amd ? define(["node-fetch"], n) : (o || self).webMonitor = n(o.nodeFetch); }(this, function (o) { function n(o) { return o && "object" == typeof o && "default" in o ? o : { default: o }; } var e, t, r = n(o); !function (o) { o[o.URGENT = 1] = "URGENT", o[o.IDLE = 2] = "IDLE"; }(e || (e = {})), function (o) { o.NORMAL = "NORMAL", o.NODE_UNCAUGHT_ERROR = "NODE_UNCAUGHT_ERROR"; }(t || (t = {})); var i = function () { function o(o) { var n = o.logUrl; if (!n)
    throw new Error("请传递要记录数据的路由~"); this.logUrl = n; } return o.prototype.sendToAnalytics = function (o, n, t, i) { var l = this.logUrl; i && (l = i), console.log("路由", l), console.log("typeof body", typeof n); var c = { type: t, content: n }; try {
    o == e.URGENT && r.default(l, { body: JSON.stringify(c), method: "POST", headers: { "Content-Type": "application/json" } }).catch(function () { console.log("上报异常了"); });
}
catch (o) {
    console.log(o);
} }, o; }(), l = function (o) { console.log(o); }, c = { reportClient: new i({ logUrl: "log" }), isResourceTiming: !1, isElementTiming: !1, maxTime: 15e3 }, f = function () { function o() { } var n = o.prototype; return n.globalUnCaughtError = function () { process.on("uncaughtException", function (o) { console.error("There was an uncaught error", o), c.reportClient.sendToAnalytics(e.URGENT, JSON.stringify(o), t.NODE_UNCAUGHT_ERROR), process.exit(1); }); }, n.run = function () { this.globalUnCaughtError(); }, o; }(); return function (o) { void 0 === o && (o = {}); var n = o.logUrl; if (!n)
    throw new Error("Web系统系统监控平台，初始化未传递logUrl"); var e = new i({ logUrl: n }); c.reportClient = e, this.reportClient = e, c.analyticsTracker = o.analyticsTracker || l, (new f).run(); }; });
//# sourceMappingURL=web-monitor.umd.js.map
