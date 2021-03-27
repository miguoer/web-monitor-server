"use strict";
var n, o;
!(function (n) {
    (n[(n.URGENT = 1)] = "URGENT"), (n[(n.IDLE = 2)] = "IDLE");
})(n || (n = {})),
    (function (n) {
        (n.NORMAL = "NORMAL"), (n.NODE_UNCAUGHT_ERROR = "NODE_UNCAUGHT_ERROR");
    })(o || (o = {}));
var r = require("node-fetch"), t = (function () {
    function o(n) {
        var o = n.logUrl;
        if (!o)
            throw new Error("请传递要记录数据的路由~");
        this.logUrl = o;
    }
    return ((o.prototype.sendToAnalytics = function (o, t, e, i) {
        var l = this.logUrl;
        i && (l = i), console.log("上报body", t);
        var c = { type: e, content: t };
        try {
            o == n.URGENT &&
                r(l, {
                    body: JSON.stringify(c),
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                }).catch(function () {
                    console.log("上报接口发生异常了");
                });
        }
        catch (n) {
            console.log(n);
        }
    }),
        o);
})(), e = function (n) {
    console.log(n);
}, i = {
    reportClient: new t({ logUrl: "log" }),
    isResourceTiming: !1,
    isElementTiming: !1,
    maxTime: 15e3,
}, l = (function () {
    function r() { }
    var t = r.prototype;
    return ((t.globalUnCaughtError = function () {
        process.on("uncaughtException", function (r, t) {
            console.error("There was an uncaught error", r),
                i.reportClient.sendToAnalytics(n.URGENT, JSON.stringify({
                    message: null == r ? void 0 : r.message,
                    name: null == r ? void 0 : r.name,
                    stack: null == r ? void 0 : r.stack,
                }), o.NODE_UNCAUGHT_ERROR);
        });
    }),
        (t.run = function () {
            this.globalUnCaughtError();
        }),
        r);
})();
module.exports = function (n) {
    void 0 === n && (n = {});
    var o = n.logUrl;
    if (!o)
        throw new Error("Web系统系统监控平台，初始化未传递logUrl");
    var r = new t({ logUrl: o });
    (i.reportClient = r),
        (this.reportClient = r),
        (i.analyticsTracker = n.analyticsTracker || e),
        new l().run();
};
