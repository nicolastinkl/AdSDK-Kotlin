! function () {
    "use strict";
    var e, t = function (e) {
            window.parent.postMessage(e, "*")
        },
        n = function (e) {
            window.parent.postMessage(e, "*")
        };
    ! function (e) {
        e.SK_PRESENTATION_SETTINGS = "sk-presentation-settings", e.SK_SKO_DISMISS = "sk-sko-dismiss", e.ASOI_SETTINGS = "asoi-settings", e.AD_EVENT_LOADED = "ad-event-loaded", e.DOWNLOAD = "download", e.COMPLETE = "complete", e.INTERACTED = "interacted"
    }(e || (e = {}));
    var o, i, d = e,
        a = function () {
            var e;
            null === (e = document.getElementById("tap-to-play-tip")) || void 0 === e || e.remove()
        },
        s = function () {
            window.sendMessage(d.INTERACTED)
        },
        r = function () {
            ! function (e) {
                if (/Android/i.test(e.navigator.userAgent)) {
                    var t, n = e.addEventListener;
                    e.addEventListener = function (t, o, i) {
                        n.call(e, "load" === t ? "DOMContentLoaded" : t, o, i)
                    }, Object.defineProperty(e, "onload", {
                        set: function (n) {
                            t = n, e.addEventListener("DOMContentLoaded", t)
                        },
                        get: function () {
                            return t
                        }
                    })
                }
            }(window), window.addEventListener("ontouchstart" in document.documentElement == 1 ? "touchstart" : "click", s), window.addEventListener("error", (function (e) {
                var t = e.error ? e.error.name : "";
                window.parent.postMessage({
                    title: "playable-error",
                    content: t
                }, "*")
            })), window.addEventListener("unhandledrejection", (function (e) {
                var t, n;
                "notallowederror" !== (null === (n = null === (t = e.reason) || void 0 === t ? void 0 : t.name) || void 0 === n ? void 0 : n.toLowerCase()) ? window.parent.postMessage({
                    title: "playable-unhandledrejection",
                    content: e.reason
                }, "*"): function () {
                    a();
                    var e = document.createElement("div"),
                        t = document.createElement("div"),
                        n = document.createElement("div");
                    e.setAttribute("id", "tap-to-play-tip"), n.textContent = "Tap to Play", e.appendChild(t), e.appendChild(n), document.body.appendChild(e), e.style.position = "fixed", e.style.top = "50%", e.style.left = "50%", e.style.color = "white", e.style.pointerEvents = "none", e.style.fontSize = "15px", e.style.fontWeight = "400", e.style.textAlign = "center", e.style.zIndex = "999999", e.style.transform = "translate(-50%, -50%)", t.style.filter = "invert()", t.style.backgroundImage = "url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiPjxwYXRoIGQ9Ik05IDExLjI0VjcuNUM5IDYuMTIgMTAuMTIgNSAxMS41IDVTMTQgNi4xMiAxNCA3LjV2My43NGMxLjIxLS44MSAyLTIuMTggMi0zLjc0QzE2IDUuMDEgMTMuOTkgMyAxMS41IDNTNyA1LjAxIDcgNy41YzAgMS41Ni43OSAyLjkzIDIgMy43NHptOS44NCA0LjYzbC00LjU0LTIuMjZjLS4xNy0uMDctLjM1LS4xMS0uNTQtLjExSDEzdi02YzAtLjgzLS42Ny0xLjUtMS41LTEuNVMxMCA2LjY3IDEwIDcuNXYxMC43NGwtMy40My0uNzJjLS4wOC0uMDEtLjE1LS4wMy0uMjQtLjAzLS4zMSAwLS41OS4xMy0uNzkuMzNsLS43OS44IDQuOTQgNC45NGMuMjcuMjcuNjUuNDQgMS4wNi40NGg2Ljc5Yy43NSAwIDEuMzMtLjU1IDEuNDQtMS4yOGwuNzUtNS4yN2MuMDEtLjA3LjAyLS4xNC4wMi0uMiAwLS42Mi0uMzgtMS4xNi0uOTEtMS4zOHoiPjwvcGF0aD48L3N2Zz4K)", t.style.backgroundPosition = "center", t.style.backgroundRepeat = "no-repeat", t.style.backgroundSize = "100%", t.style.width = "50px", t.style.height = "50px", t.style.maxWidth = "120px", t.style.maxHeight = "120px", t.style.margin = "0 auto", window.addEventListener("click", (function () {
                        a()
                    }), {
                        once: !0
                    }), window.addEventListener("touchstart", (function () {
                        a()
                    }), {
                        once: !0
                    })
                }()
            })), document.addEventListener("DOMContentLoaded", (function () {
                window.sendMessage(d.AD_EVENT_LOADED)
            })), document.addEventListener("keydown", (function (e) {
                "Escape" === e.key && e.preventDefault()
            })), Event.prototype.stopPropagation = function () {}, window.addEventListener("message", window.receiveMessage)
        };
    ! function (e) {
        e.SK_PRESENTATION_SETTINGS = "sk-presentation-settings", e.SK_SKO_DISMISS = "sk-sko-dismiss", e.ASOI_SETTINGS = "asoi-settings", e.AD_EVENT_LOADED = "ad-event-loaded", e.DOWNLOAD = "download", e.INTERACTED = "interacted", e.COMPLETE = "complete", e.CLOSE_BUTTON_REVEAL = "close-button-reveal"
    }(o || (o = {})),
    function (e) {
        e.AD_EVENT_INIT = "ad-event-init", e.AD_EVENT_OVERLAY_VIEW_VISIBLE = "ad-event-overlay-view-visible", e.AD_EVENT_OVERLAY_VIEW_FINISHED = "ad-event-overlay-view-finished", e.AD_EVENT_OVERLAY_VIEW_FAILED = "ad-event-overlay-view-failed", e.AD_EVENT_RESUME = "ad-event-resume", e.AD_EVENT_PAUSE = "ad-event-pause"
    }(i || (i = {}));
    var u, c = function (e, t) {
            window.VungleHelper && e === i.AD_EVENT_INIT && (window.VungleHelper.tokens = t.tokens, window.VungleHelper.closeDelay = t.closeDelay, window.VungleHelper.rewardedAd = t.rewardedAd)
        },
        l = function (e) {
            var t;
            if (0 !== e.data.length && e.data.title) {
                var n = e.data.title,
                    o = null !== (t = e.data.content) && void 0 !== t ? t : {};
                window.processMessage(n, o), window.dispatchEvent(new CustomEvent(n, {
                    detail: o
                }))
            }
        },
        w = function () {
            window.sendMessage(d.ASOI_SETTINGS, window.vungleSettings)
        },
        E = function (e, t) {
            window.parent.postMessage({
                title: e,
                content: t
            }, "*")
        };
    ! function (e) {
        e.ASOI_INTERACTION = "asoi-interaction", e.ASOI_COMPLETE = "asoi-complete", e.CTA_CLICK = "cta-click"
    }(u || (u = {}));
    var v = u,
        S = function (e, t, n) {
            if (Object.values(v).includes(e)) {
                var o = {
                    eventType: e,
                    presentationType: t,
                    presentationOptions: n
                };
                window.sendMessage(d.SK_PRESENTATION_SETTINGS, o)
            }
        },
        M = function () {
            window.sendMessage(d.SK_SKO_DISMISS)
        },
        p = function () {
            return window.sendMessage(d.DOWNLOAD), null
        };
    var g = function () {
        var e = "WEB_AUDIO",
            t = "AUDIO",
            n = "VIDEO",
            o = ["audio", "video"],
            i = document.createElement,
            d = function (o, i) {
                var d = function (e) {
                        var t = e.target;
                        t && "running" === t.state && o.suspend()
                    },
                    a = function () {
                        switch (i) {
                            case e:
                                Object.defineProperty(o, "resume", {
                                    value: function () {
                                        return Promise.resolve()
                                    },
                                    configurable: !0
                                }), o.suspend();
                                break;
                            case t:
                            case n:
                                o.muted = !0, Object.defineProperty(o, "muted", {
                                    set: function () {},
                                    get: function () {
                                        return !0
                                    },
                                    configurable: !0
                                })
                        }
                    };
                i === e && (o.onstatechange = d), a()
            },
            a = function () {
                ! function () {
                    var t = window.AudioContext || window.webkitAudioContext;
                    if (t) {
                        var n = function () {
                            for (var n = [], o = 0; o < arguments.length; o++) n[o] = arguments[o];
                            var i = new(t.bind.apply(t,
                                /*! *****************************************************************************
                                    Copyright (c) Microsoft Corporation.

                                    Permission to use, copy, modify, and/or distribute this software for any
                                    purpose with or without fee is hereby granted.

                                    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
                                    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
                                    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
                                    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
                                    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
                                    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
                                    PERFORMANCE OF THIS SOFTWARE.
                                    ***************************************************************************** */
                                function (e, t, n) {
                                    if (n || 2 === arguments.length)
                                        for (var o, i = 0, d = t.length; i < d; i++) !o && i in t || (o || (o = Array.prototype.slice.call(t, 0, i)), o[i] = t[i]);
                                    return e.concat(o || Array.prototype.slice.call(t))
                                }([void 0], n, !1)));
                            return d(i, e), i
                        };
                        n.prototype = t.prototype, Object.defineProperty(window, "AudioContext", {
                            value: n,
                            configurable: !0
                        }), Object.defineProperty(window, "webkitAudioContext", {
                            value: n,
                            configurable: !0
                        })
                    }
                }(), Object.defineProperty(document, "createElement", {
                    value: function (e) {
                        var a = i.call(document, e),
                            s = e.toLowerCase();
                        return o.includes(s) && d(a, "audio" === s ? t : n), a
                    },
                    configurable: !0
                })
            },
            s = function () {
                for (var e = document.querySelectorAll("audio"), o = document.querySelectorAll("video"), i = 0; i < e.length; i += 1) d(e[i], t);
                for (i = 0; i < o.length; i += 1) d(o[i], n)
            };
        a(), window.addEventListener("DOMContentLoaded", s)
    };
    window.sendMessage = E, window.callSDK = n, window.actionClicked = t, window.open = p, window.VungleHelper = {
        setSKPresentation: S,
        dismissSKOverlay: M,
        tokens: {},
        closeDelay: 0,
        rewardedAd: !1
    }, window.processMessage = c, window.receiveMessage = l, window.sendInstructions = w, r(), window.vungleSettings && window.sendInstructions(), (window.shouldMuteAllMedia || window.location.search.includes("is_muted=true")) && g()
}();