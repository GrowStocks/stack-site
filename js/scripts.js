(() => {
    "use strict";
    var e = {
        585: (e, r) => {
            Object.defineProperty(r, "__esModule", {value: !0});
            var o = function () {
                function e() {
                }

                return e.prototype.renderScrollable = function (e) {
                    var r = e || {}, o = r.headerClass, t = void 0 === o ? ".sc-header--scrollable" : o,
                        n = r.breakpointElement, l = void 0 === n ? "" : n, a = document.querySelector(t),
                        s = document.querySelector(l);
                    if (!a) throw new Error("Please provide a header selector.");
                    if (!s) throw new Error("Please provide a breaking point element selector.");
                    new IntersectionObserver((function (e, r) {
                        e.forEach((function (e) {
                            e.isIntersecting ? a.classList.remove("scrolled") : a.classList.add("scrolled")
                        }))
                    }), {rootMargin: "-100px 0px 0px 0px"}).observe(s)
                }, e
            }();
            r.default = o
        }
    }, r = {};
    (new (function o(t) {
        var n = r[t];
        if (void 0 !== n) return n.exports;
        var l = r[t] = {exports: {}};
        return e[t](l, l.exports, o), l.exports
    }(585).default)).renderScrollable({breakpointElement: ".banner"})
})();