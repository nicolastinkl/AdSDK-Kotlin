! function (n) {
    n.vungle = n.vungle || {}
}(window);
/*!
 * Version: 5.0.0
 * Hash: 8a4f3ccbe929be92e501c30285899e78cc5c2c3a
 * Created: 16 of August 2023, 10:33:59
 */
! function (e) {
    var t = {};

    function r(n) {
        if (t[n]) return t[n].exports;
        var i = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(i.exports, i, i.exports, r), i.l = !0, i.exports
    }
    r.m = e, r.c = t, r.d = function (e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, r.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, r.t = function (e, t) {
        if (1 & t && (e = r(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var i in e) r.d(n, i, function (t) {
                return e[t]
            }.bind(null, i));
        return n
    }, r.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return r.d(t, "a", t), t
    }, r.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, r.p = "", r(r.s = 0)
}([function (e, t, r) {
    "use strict";
    r.r(t);
    r(1), r(2), r(3), r(4)
}, function (e, t) {
    ! function (e) {
        "use strict";
        var t = e.vungle = e.vungle || {};
        t.error || (t.error = {
            IMAGE_FAILED_TO_LOAD: 1e4,
            VIDEO_FAILED_TO_LOAD: 10001,
            PLAYABLE_JS_SYNTAX_ERROR: 10002,
            PLAYABLE_JS_TYPE_ERROR: 10003,
            PLAYABLE_JS_URI_ERROR: 10004,
            PLAYABLE_JS_REFERENCE_ERROR: 10005,
            PLAYABLE_JS_RANGE_ERROR: 10006,
            PLAYABLE_JS_UNHANDLEDREJECTION_ERROR: 10007,
            PLAYABLE_OTHER_ERROR: 10008,
            APP_ICON_FAILED_TO_LOAD: 10009,
            APP_RATING_FAILED_TO_LOAD: 10010,
            AC_INITIALIZATION_FAILED: 2e4,
            DT_INITIALIZATION_FAILED: 20001,
            JS_SYNTAX_ERROR: 3e4,
            JS_TYPE_ERROR: 30001,
            JS_URI_ERROR: 30002,
            JS_REFERENCE_ERROR: 30003,
            JS_RANGE_ERROR: 30004,
            JS_UNHANDLEDREJECTION_ERROR: 30005,
            JS_OTHER_ERROR: 30006,
            TOKEN_IS_EMPTY: 4e4,
            MISSING_REQUIRED_TOKEN: 40001,
            INVALID_APP_STORE_ID: 40002,
            INVALID_CTA_BUTTON_URL: 40003,
            INVALID_STOREKIT_OVERLAY_POSITION: 5e4,
            INVALID_STOREKIT_ACTION: 50001,
            PRO_JS_SYNTAX_ERROR: 6e4,
            PRO_JS_TYPE_ERROR: 60001,
            PRO_JS_URI_ERROR: 60002,
            PRO_JS_REFERENCE_ERROR: 60003,
            PRO_JS_RANGE_ERROR: 60004,
            PRO_JS_UNHANDLEDREJECTION_ERROR: 60005,
            PRO_DECODE_ERROR: 60006,
            PRO_WRITE_DOC_ERROR: 60007,
            INVALID_TPAT_EVENT: 7e4,
            INVALID_FPAT_EVENT: 70001,
            MRAID_UNKNOWN_EVENT: 8e4,
            MRAID_MISSING_ARGUMENTS: 80001,
            MRAID_UNABLE_FIND_LISTENER: 80002,
            MRAID_MISSING_EVENT: 80003,
            MRAID_MISSING_URL: 80004,
            MRAID_CLOSE: 80005,
            MRAID_NOTIFY_PROPERTIES_CHANGE: 80006,
            MRAID_MISSING_APP_STORE_ID: 80007,
            MRAID_MISSING_MRAID_OBJECT: 80008,
            MRAID_MISSING_COMMAND: 80009,
            MRAID_NOTIFY_TPAT: 80010,
            MRAID_CONSENT_ACTION: 80011,
            MRAID_NOTIFY_USER_INTERACTION: 80012,
            MRAID_OPEN_PRIVACY: 80013,
            MRAID_NOTIFY_SUCCESSFUL_VIEW_AD: 80014,
            MRAID_OPEN_APP_IN_DEVICE: 80015,
            MRAID_CANCEL_DOWNLOAD: 80016,
            MRAID_START_DOWNLOAD_APP_ON_DEVICE: 80017,
            MRAID_SDK_IS_NOT_READY: 80018,
            MRAID_NOTIFY_HEARTBEAT: 80019,
            MRAID_NOTIFY_EVENT_VALUE_PAIR_EVENT: 80020,
            MRAID_UNHANDLED_PROPERTY_RECEIVE: 80021,
            MRAID_CANNOT_RETRIEVE_DYNAMIC_CONTAINER: 80022,
            MRAID_REQUEST_MRAID_CLOSE: 80023,
            MRAID_OPEN_STORE_PAGE: 80024,
            MRAID_MISSING_STORE_KIT_MODE: 80025
        })
    }(window)
}, function (e, t) {
    ! function (e) {
        "use strict";
        var t = e.vungle = e.vungle || {},
            r = t.mraidCore = t.mraidCore || {},
            n = t.debugLog = t.debugLog || [];
        n && n.push("vungle.mraidCore loaded."), r.consts = {
            versions: {
                V1: "1.0",
                V2: "2.0"
            },
            states: {
                LOADING: "loading",
                DEFAULT: "default",
                RESIZED: "resized",
                EXPANDED: "expanded",
                HIDDEN: "hidden"
            },
            events: {
                INFO: "info",
                READY: "ready",
                ERROR: "error",
                STATE_CHANGE: "stateChange",
                ORIENTATION_CHANGE: "orientationChange",
                VIEWABLE_CHANGE: "viewableChange",
                SIZE_CHANGE: "sizeChange"
            },
            placements: {
                UNKNOWN: "unknown",
                INLINE: "inline",
                INTERSTITIAL: "interstitial"
            },
            orientations: {
                PORTRAIT: "portrait",
                LANDSCAPE: "landscape",
                NONE: "none"
            },
            closePositions: {
                CENTER: "center",
                TOP_LEFT: "top-left",
                TOP_CENTER: "top-center",
                TOP_RIGHT: "top-right",
                BOTTOM_LEFT: "bottom-left",
                BOTTOM_CENTER: "bottom-center",
                BOTTOM_RIGHT: "bottom-right"
            }
        }, r.PropertiesValueObject = function (e) {
            var t = function (e) {
                var t;
                if (e && "object" == typeof e) {
                    t = {};
                    for (const r in e) t[r] = e[r]
                } else t = e;
                return t
            };
            this.value = t(e), this.clone = function () {
                return t(this.value)
            }, this.update = function (e) {
                if (e && "object" == typeof e) {
                    for (const t in e) this.value[t] = e[t]
                } else this.value = e
            }
        }, r.EventListeners = function (e) {
            var t = {};
            this.event = e, this.listenerCount = 0, this.add = function (e) {
                var r = String(e);
                return !t[r] && (t[r] = e, this.listenerCount++, !0)
            }, this.remove = function (e) {
                var r = String(e);
                return !(!t.hasOwnProperty(r) || !t[r]) && (t[r] = null, delete t[r], this.listenerCount--, !0)
            }, this.removeAll = function () {
                for (const e in t) this.remove(t[e])
            }, this.broadcast = function (e) {
                for (const r in t) t[r].apply(this.mraid, e)
            }
        };
        var i = new r.PropertiesValueObject(r.consts.versions.V1),
            o = new r.PropertiesValueObject({
                width: 0,
                height: 0
            }),
            a = new r.PropertiesValueObject({
                width: 0,
                height: 0
            }),
            s = new r.PropertiesValueObject({
                x: 0,
                y: 0,
                width: 0,
                height: 0
            }),
            d = new r.PropertiesValueObject({
                x: 0,
                y: 0,
                width: 0,
                height: 0
            }),
            E = new r.PropertiesValueObject({
                width: 0,
                height: 0,
                useCustomClose: !1,
                isModal: !0
            }),
            c = new r.PropertiesValueObject({
                width: 0,
                height: 0,
                offsetX: 0,
                offsetY: 0,
                customClosePosition: r.consts.closePositions.TOP_RIGHT,
                allowOffscreen: !0
            }),
            u = new r.PropertiesValueObject({
                allowOrientationChange: !0,
                forceOrientation: r.consts.orientations.NONE
            }),
            R = new r.PropertiesValueObject({
                sms: !1,
                tel: !1,
                calendar: !1,
                storePicture: !1,
                inlineVideo: !1
            }),
            _ = new r.PropertiesValueObject(r.consts.states.LOADING),
            l = new r.PropertiesValueObject(r.consts.placements.UNKNOWN),
            I = new r.PropertiesValueObject(!1),
            p = new r.PropertiesValueObject(!1),
            f = new r.PropertiesValueObject(!1),
            m = new r.PropertiesValueObject(!1),
            O = new r.PropertiesValueObject(!1),
            A = new r.PropertiesValueObject(!1),
            g = new r.PropertiesValueObject(!1),
            S = new r.PropertiesValueObject(!1),
            D = new r.PropertiesValueObject(!1),
            N = new r.PropertiesValueObject(!1),
            T = {},
            v = new r.PropertiesValueObject(""),
            P = new r.PropertiesValueObject(""),
            C = new r.PropertiesValueObject("");
        r.eventListeners = T, r.propertiesHandlers = {
            os: {
                update: function (e) {
                    v.update(e)
                },
                clone: function () {
                    return v.clone()
                }
            },
            osVersion: {
                update: function (e) {
                    P.update(e)
                },
                clone: function () {
                    return P.clone()
                }
            },
            sdkVersion: {
                update: function (e) {
                    C.update(e)
                },
                clone: function () {
                    return C.clone()
                }
            },
            incentivized: {
                update: function (e) {
                    p.update(e)
                },
                clone: function () {
                    return p.clone()
                }
            },
            consentRequired: {
                update: function (e) {
                    f.update(e)
                },
                clone: function () {
                    return f.clone()
                }
            },
            consentTitleText: {
                update: function (e) {
                    m.update(e)
                },
                clone: function () {
                    return m.clone()
                }
            },
            consentBodyText: {
                update: function (e) {
                    O.update(e)
                },
                clone: function () {
                    return O.clone()
                }
            },
            consentAcceptButtonText: {
                update: function (e) {
                    A.update(e)
                },
                clone: function () {
                    return A.clone()
                }
            },
            consentDenyButtonText: {
                update: function (e) {
                    g.update(e)
                },
                clone: function () {
                    return g.clone()
                }
            },
            version: {
                update: function (e) {
                    i.update(e), r.broadcastEvent(r.consts.events.INFO, "Setting MRAID version to: " + String(e))
                },
                clone: function () {
                    return i.clone()
                }
            },
            maxSize: {
                update: function (e) {
                    o.update(e), E.update(e), r.broadcastEvent(r.consts.events.INFO, "Setting maxSize to: " + String(e))
                },
                clone: function () {
                    return o.clone()
                }
            },
            screenSize: {
                update: function (e) {
                    var t;
                    a.update(e), t = a.clone(), r.broadcastEvent(r.consts.events.INFO, "Setting screenSize to: " + String(e)), r.broadcastEvent(r.consts.events.SIZE_CHANGE, t.width, t.height)
                },
                clone: function () {
                    return a.clone()
                }
            },
            defaultPosition: {
                update: function (e) {
                    s.update(e), r.broadcastEvent(r.consts.events.INFO, "Setting defaultPosition to: " + String(e))
                },
                clone: function () {
                    return s.clone()
                }
            },
            currentPosition: {
                update: function (e) {
                    d.update(e), r.broadcastEvent(r.consts.events.INFO, "Setting currentPosition to: " + String(e))
                },
                clone: function () {
                    return d.clone()
                }
            },
            expandProperties: {
                update: function (e) {
                    E.update(e), r.broadcastEvent(r.consts.events.INFO, "Setting expandProperties to: " + String(e))
                },
                clone: function () {
                    return E.clone()
                }
            },
            resizeProperties: {
                update: function (e) {
                    c.update(e), r.broadcastEvent(r.consts.events.INFO, "Setting resizeProperties to: " + String(e))
                },
                clone: function () {
                    return c.clone()
                }
            },
            orientationProperties: {
                update: function (e) {
                    u.update(e), r.broadcastEvent(r.consts.events.INFO, "Setting orientationProperties to: " + String(e))
                },
                clone: function () {
                    return u.clone()
                }
            },
            supports: {
                update: function (e) {
                    R.update(e), r.broadcastEvent(r.consts.events.INFO, "Setting supports to: " + String(e))
                },
                clone: function () {
                    return R.clone()
                }
            },
            state: {
                update: function (e) {
                    _.update(e), r.broadcastEvent(r.consts.events.INFO, "Setting state to: " + String(e)), r.broadcastEvent(r.consts.events.STATE_CHANGE, _.clone()), _.clone() === r.consts.states.DEFAULT && r.broadcastEvent(r.consts.events.READY)
                },
                clone: function () {
                    return _.clone()
                }
            },
            placementType: {
                update: function (e) {
                    l.update(e), r.broadcastEvent(r.consts.events.INFO, "Setting placementType to: " + String(e))
                },
                clone: function () {
                    return l.clone()
                }
            },
            isViewable: {
                update: function (e) {
                    I.update(e), r.broadcastEvent(r.consts.events.INFO, "Setting isViewable to: " + String(e)), r.broadcastEvent(r.consts.events.VIEWABLE_CHANGE, I.clone())
                },
                clone: function () {
                    return I.clone()
                }
            },
            customClose: {
                update: function (e) {
                    S.update(e), r.broadcastEvent(r.consts.events.INFO, "Setting useCustomClose to: " + String(e))
                },
                clone: function () {
                    return S.clone()
                }
            },
            customPrivacy: {
                update: function (e) {
                    D.update(e), r.broadcastEvent(r.consts.events.INFO, "Setting useCustomPrivacy to: " + String(e))
                },
                clone: function () {
                    return D.clone()
                }
            },
            enableBackImmediately: {
                update: function (e) {
                    N.update(e), r.broadcastEvent(r.consts.events.INFO, "Setting enableBackImmediately to: " + String(e))
                },
                clone: function () {
                    return N.clone()
                }
            }
        }, r.propertiesValidator = function (e, r, n) {
            var i = !0;
            if (typeof e != typeof r && "useCustomClose" !== n) i = !1, t.mraidBridgeExt && t.mraidBridgeExt.notifyError(t.error.MRAID_NOTIFY_PROPERTIES_CHANGE);
            else if ("object" == typeof e)
                for (const n in e) n in r || (i = !1, t.mraidBridgeExt && t.mraidBridgeExt.notifyError(t.error.MRAID_NOTIFY_PROPERTIES_CHANGE));
            return i
        }, r.broadcastEvent = function () {
            var e = Array.prototype.slice.call(arguments),
                t = e.shift(),
                r = T[t];
            r && r.broadcast(e)
        }, r.isValidMARIDEvent = function (e) {
            for (var t in r.consts.events)
                if (r.consts.events[t] === e) return !0;
            return !1
        }
    }(window)
}, function (e, t) {
    ! function (e) {
        "use strict";
        var t, r = e.vungle = e.vungle || {},
            n = r.mraidBridge = r.mraidBridge || {},
            i = r.mraidBridgeExt = r.mraidBridgeExt || {},
            o = r.debugLog = r.debugLog || [],
            a = !1,
            s = !1,
            d = [],
            E = !1,
            c = r.mraidCore.broadcastEvent,
            u = r.mraidCore.consts.states,
            R = r.mraidCore.consts.events;
        o && o.push("vungle.mraidBridge loaded."), n.notifyContainer = function (t) {
            e.location = t
        }, n.notifyPropertiesChange = function (e, t) {
            o && o.push("mraidBridge.notifyPropertiesChange:" + JSON.stringify(e));
            for (const t in e) r.mraidCore.propertiesHandlers[t] ? r.mraidCore.propertiesHandlers[t].update(e[t]) : r.mraidBridgeExt && r.mraidBridgeExt.notifyError(r.error.MRAID_UNHANDLED_PROPERTY_RECEIVE);
            void 0 !== t && !0 === t && n.notifyContainer("mraid://propertiesChangeCompleted")
        }, n.notifyCommandComplete = function () {
            o && o.push("mraidBridge.notifyCommandComplete");
            var e = "";
            d.length ? (e = d.shift(), n.notifyContainer(e)) : s = !1
        }, n.notifyReadyEvent = function (e) {
            o && o.push("mraidBridge.notifyReadyEvent");
            var n = r.mraidCore.propertiesHandlers.state.clone();  
            a = !0, void 0 !== e ? (E = !0, t = e) : r.mraidBridgeExt.notifySuccessfulViewAd(), n !== u.DEFAULT ? r.mraidCore.propertiesHandlers.state.update(u.DEFAULT) : c(R.READY)
        }, n.executeSDKCommand = function () {
            var e, t, i, E = "";
            if (a)
                if (arguments) {
                    for (E += "mraid://" + arguments[0], i = 1; i < arguments.length; i += 2) e = arguments[i], t = arguments[i + 1], E += (1 === i ? "?" : "&") + encodeURIComponent(e), void 0 !== t && (E += "=" + encodeURIComponent(t));
                    s ? d.push(E) : (s = !0, n.notifyContainer(E)), o && o.push("mraidBridge.executeSDKCommand: " + E)
                } else r.mraidBridgeExt && r.mraidBridgeExt.notifyError(r.error.MRAID_MISSING_COMMAND, "", !0);
            else r.mraidBridgeExt && r.mraidBridgeExt.notifyError(r.error.MRAID_SDK_IS_NOT_READY, "", !0)
        }, i.getReplacementTokens = function () {
            return t
        }, i.getIsVungleAd = function () {
            return E
        }, i.getEnableBackButtonImmediately = function () {
            return r.mraidCore.propertiesHandlers.enableBackImmediately.clone()
        }, i.notifyPresentStoreKitViewFinished = function (t) {
            if (o && o.push("mraidBridgeExt.notifyPresentStoreKitViewFinished, mode=" + t), ![0, 1].includes(t)) return c(R.ERROR, "mraidBridgeExt.notifyPresentStoreKitViewFinished", r.error.MRAID_MISSING_STORE_KIT_MODE), void(r.mraidBridgeExt && r.mraidBridgeExt.notifyError(r.error.MRAID_MISSING_STORE_KIT_MODE));
            var n = e.document.querySelector("#dynamic");
            n ? n.dispatchEvent(new CustomEvent("vungle.events.storekit.finished", {
                detail: {
                    mode: t
                }
            })) : r.mraidBridgeExt && r.mraidBridgeExt.notifyError(r.error.MRAID_CANNOT_RETRIEVE_DYNAMIC_CONTAINER)
        }, i.notifyPresentStoreKitViewSuccess = function (t) {
            if (o && o.push("mraidBridgeExt.notifyPresentStoreKitViewSuccess, mode=" + t), ![0, 1].includes(t)) return c(R.ERROR, "mraidBridgeExt.notifyPresentStoreKitViewSuccess", r.error.MRAID_MISSING_STORE_KIT_MODE), void(r.mraidBridgeExt && r.mraidBridgeExt.notifyError(r.error.MRAID_MISSING_STORE_KIT_MODE));
            var n = e.document.querySelector("#dynamic");
            n ? n.dispatchEvent(new CustomEvent("vungle.events.storekit.visible", {
                detail: {
                    mode: t
                }
            })) : r.mraidBridgeExt && r.mraidBridgeExt.notifyError(r.error.MRAID_CANNOT_RETRIEVE_DYNAMIC_CONTAINER)
        }, i.notifyPresentStoreKitViewFailed = function (t) {
            if (o && o.push("mraidBridgeExt.notifyPresentStoreKitViewFailed, mode=" + t), ![0, 1].includes(t)) return c(R.ERROR, "mraidBridgeExt.notifyPresentStoreKitViewFailed", r.error.MRAID_MISSING_STORE_KIT_MODE), void(r.mraidBridgeExt && r.mraidBridgeExt.notifyError(r.error.MRAID_MISSING_STORE_KIT_MODE));
            var n = e.document.querySelector("#dynamic");
            n ? n.dispatchEvent(new CustomEvent("vungle.events.storekit.failed", {
                detail: {
                    mode: t
                }
            })) : r.mraidBridgeExt && r.mraidBridgeExt.notifyError(r.error.MRAID_CANNOT_RETRIEVE_DYNAMIC_CONTAINER)
        }, n.notifyErrorEvent = function (e, t) {
            o && o.push("mraidBridge.notifyErrorEvent:" + e + ":" + t), c(R.ERROR, e, t)
        }, i.notifyError = function (e, t = "", n = !1) {
            o && o.push("mraidBridgeExt.notifyError:" + e);
            try {
                r.mraidBridge.executeSDKCommand("error", "code", e, "errorMessage", t, "fatal", n)
            } catch (e) {
                o && o.push("%cException caught in mraidBridgeExt.notifyError! Message: %s", "color: red; font-size: x-large", e.message)
            }
        }, i.notifyTPAT = function (e) {
            o && o.push("mraidBridgeExt.notifyTPATEvent:" + e);
            try {
                r.mraidBridge.executeSDKCommand("tpat", "event", e)
            } catch (e) {
                r.mraidBridgeExt && r.mraidBridgeExt.notifyError(r.error.MRAID_NOTIFY_TPAT)
            }
        }, i.consentAction = function (e) {
            o && o.push("mraidBridgeExt.consentActionEvent:" + e);
            try {
                r.mraidBridge.executeSDKCommand("consentAction", "event", e)
            } catch (e) {
                r.mraidBridgeExt && r.mraidBridgeExt.notifyError(r.error.MRAID_CONSENT_ACTION)
            }
        }, i.notifyUserInteraction = function (e, t) {
            o && o.push("mraidBridgeExt.notifyUserInteraction");
            try {
                r.mraidBridge.executeSDKCommand("action", e, t)
            } catch (e) {
                r.mraidBridgeExt && r.mraidBridgeExt.notifyError(r.error.MRAID_NOTIFY_USER_INTERACTION)
            }
        }, i.notifyEventValuePairEvent = function (e, t) {
            o && o.push("mraidBridgeExt.notifyEventValuePairEvent");
            var n = e || "null",
                i = t || "null";
            try {
                r.mraidBridge.executeSDKCommand("actionWithValue", "event", n, "value", i)
            } catch (n) {
                r.mraidBridgeExt && r.mraidBridgeExt.notifyError(r.error.MRAID_NOTIFY_EVENT_VALUE_PAIR_EVENT)
            }
        }, i.openPrivacy = function (e) {
            o && o.push("mraidBridgeExt.openPrivacy");
            try {
                r.mraidBridge.executeSDKCommand("openPrivacy", "url", e)
            } catch (e) {
                r.mraidBridgeExt && r.mraidBridgeExt.notifyError(r.error.MRAID_OPEN_PRIVACY)
            }
        }, i.requestMRAIDClose = function () {
            o && o.push("mraidBridgeExt.requestMRAIDClose");
            try {
                var e, t = "windows" === r.mraidExt.getOS() && (0 === r.mraidExt.getOSVersion().indexOf("WinPhone81") || 0 === r.mraidExt.getOSVersion().indexOf("Win81")),
                    n = "android" === r.mraidExt.getOS() && parseInt(r.mraidExt.getOSVersion(), 10) <= 17;
                t || n ? (e = document.createEvent("Event")).initEvent("vungle.events.request.close", !0, !0) : e = new Event("vungle.events.request.close"), E ? document.querySelector("#dynamic").dispatchEvent(e) : r.mraidBridge.executeSDKCommand("close")
            } catch (e) {
                r.mraidBridgeExt && r.mraidBridgeExt.notifyError(r.error.MRAID_REQUEST_MRAID_CLOSE)
            }
        }, i.notifySuccessfulViewAd = function () {
            o && o.push("mraidBridgeExt.notifySuccessfulViewAd");
            try {
                r.mraidBridge.executeSDKCommand("successfulView")
            } catch (e) {
                r.mraidBridgeExt && r.mraidBridgeExt.notifyError(r.error.MRAID_NOTIFY_SUCCESSFUL_VIEW_AD)
            }
        }, i.openAppInDevice = function () {
            o && o.push("mraidBridgeExt.openAppInDevice");
            try {
                r.mraidBridge.executeSDKCommand("openAppInDevice")
            } catch (e) {
                r.mraidBridgeExt && r.mraidBridgeExt.notifyError(r.error.MRAID_OPEN_APP_IN_DEVICE)
            }
        }, i.openStorePage = function () {
            o && o.push("mraidBridgeExt.openStorePage");
            try {
                r.mraidBridge.executeSDKCommand("openStorePage")
            } catch (e) {
                r.mraidBridgeExt && r.mraidBridgeExt.notifyError(r.error.MRAID_OPEN_STORE_PAGE)
            }
        }, i.cancelDownload = function () {
            o && o.push("mraidBridgeExt.cancelDownload");
            try {
                r.mraidBridge.executeSDKCommand("cancelDownload")
            } catch (e) {
                r.mraidBridgeExt && r.mraidBridgeExt.notifyError(r.error.MRAID_CANCEL_DOWNLOAD)
            }
        }, i.startDownloadAppOnDevice = function () {
            o && o.push("mraidBridgeExt.startDownloadAppOnDevice");
            try {
                r.mraidBridge.executeSDKCommand("startDownloadAppOnDevice")
            } catch (e) {
                r.mraidBridgeExt && r.mraidBridgeExt.notifyError(r.error.MRAID_START_DOWNLOAD_APP_ON_DEVICE)
            }
        }, i.creativeHeartbeat = function () {
            o && o.push("mraidBridgeExt.creativeHeartbeat");
            try {
                r.mraidBridge.executeSDKCommand("creativeHeartbeat")
            } catch (e) {
                r.mraidBridgeExt && r.mraidBridgeExt.notifyError(r.error.MRAID_NOTIFY_HEARTBEAT)
            }
        }
    }(window)
}, function (e, t) {
    ! function (e) {
        "use strict";
        var t = e.vungle = e.vungle || {},
            r = e.mraid = t.mraid = t.mraid || {},
            n = t.mraidExt = t.mraidExt || {},
            i = t.debugLog = t.debugLog || [],
            o = t.mraidBridge.executeSDKCommand,
            a = t.mraidCore.broadcastEvent,
            s = t.mraidCore.propertiesHandlers,
            d = t.mraidCore.propertiesValidator,
            E = t.mraidCore.consts.states,
            c = t.mraidCore.consts.events,
            u = t.mraidCore.consts.placements;
        i && i.push("vungle.mraid loaded."), r.addEventListener = function (e, r) {
            e && r ? t.mraidCore.isValidMARIDEvent(e) ? (t.mraidCore.eventListeners[e] || (t.mraidCore.eventListeners[e] = new t.mraidCore.EventListeners(e)), t.mraidCore.eventListeners[e].add(r)) : (a(c.ERROR, "mraid.addEventListener", t.error.MRAID_UNKNOWN_EVENT + ":" + e), t.mraidBridgeExt && t.mraidBridgeExt.notifyError(t.error.MRAID_UNKNOWN_EVENT)) : (a(c.ERROR, "mraid.addEventListener", t.error.MRAID_MISSING_ARGUMENTS), t.mraidBridgeExt && t.mraidBridgeExt.notifyError(t.error.MRAID_MISSING_ARGUMENTS))
        }, r.removeEventListener = function (e, r) {
            var n, i = !1;
            e ? (n = t.mraidCore.eventListeners[e], r ? (n && (i = n.remove(r)), i || (a(c.ERROR, "mraid.removeEventListener", t.error.MRAID_UNABLE_FIND_LISTENER + ":" + e), t.mraidBridgeExt && t.mraidBridgeExt.notifyError(t.error.MRAID_UNABLE_FIND_LISTENER))) : n && t.mraidCore.eventListeners.removeAll(), n && 0 === n.count && (t.mraidCore.eventListeners[e] = null, delete t.mraidCore.eventListeners[e])) : (a(c.ERROR, "mraid.removeEventListener", t.error.MRAID_MISSING_EVENT), t.mraidBridgeExt && t.mraidBridgeExt.notifyError(t.error.MRAID_MISSING_EVENT))
        }, r.getVersion = function () {
            return s.version.clone()
        }, r.getMaxSize = function () {
            return s.maxSize.clone()
        }, r.getScreenSize = function () {
            return s.screenSize.clone()
        }, r.getDefaultPosition = function () {
            return s.defaultPosition.clone()
        }, r.getCurrentPosition = function () {
            return s.currentPosition.clone()
        }, r.getExpandProperties = function () {
            return s.expandProperties.clone()
        }, r.getResizeProperties = function () {
            return s.resizeProperties.clone()
        }, r.getState = function () {
            return s.state.clone()
        }, r.getPlacementType = function () {
            return s.placementType.clone()
        }, r.getOrientationProperties = function () {
            return s.orientationProperties.clone()
        }, r.setOrientationProperties = function (e) {
            var r;
            "object" == typeof e ? (r = ["setOrientationProperties", "allowOrientationChange", e.allowOrientationChange, "forceOrientation", e.forceOrientation], d(e, s.orientationProperties.clone(), "orientationProperties") && (s.orientationProperties.update(e), o.apply(null, r))) : (a(c.ERROR, "mraid.setOrientationProperties", t.error.MRAID_ORIENTATION_OBJECT_REQUIRED), t.mraidBridgeExt && t.mraidBridgeExt.notifyError(t.error.MRAID_ORIENTATION_OBJECT_REQUIRED))
        }, r.setExpandProperties = function (e) {
            var r = {};
            if ("object" == typeof e) {
                for (const t in e) "isModal" !== t && (r[t] = e[t]);
                d(r, s.expandProperties.clone(), "expandProperties") && s.expandProperties.update(r)
            } else a(c.ERROR, "mraid.setExpandProperties", t.error.MRAID_EXPAND_OBJECT_REQUIRED), t.mraidBridgeExt && t.mraidBridgeExt.notifyError(t.error.MRAID_EXPAND_OBJECT_REQUIRED)
        }, r.setResizeProperties = function (e) {
            "object" == typeof e ? d(e, s.resizeProperties.clone(), "resizeProperties") && s.resizeProperties.update(e) : (a(c.ERROR, "mraid.setResizeProperties", t.error.MRAID_RESIZE_OBJECT_REQUIRED), t.mraidBridgeExt && t.mraidBridgeExt.notifyError(t.error.MRAID_RESIZE_OBJECT_REQUIRED))
        }, r.open = function (e) {
            e ? o("open", "url", e) : (a(c.ERROR, "mraid.open", t.error.MRAID_MISSING_URL), t.mraidBridgeExt && t.mraidBridgeExt.notifyError(t.error.MRAID_MISSING_URL))
        }, r.close = function () {
            r.getState() !== E.HIDDEN ? o("close") : (a(c.ERROR, "mraid.close", t.error.MRAID_CLOSE), t.mraidBridgeExt && t.mraidBridgeExt.notifyError(t.error.MRAID_CLOSE))
        }, r.expand = function (e) {
            var r = s.customClose.clone(),
                n = s.placementType.clone(),
                i = s.state.clone(),
                d = ["expand", "useCustomClose", r];
            n !== u.INLINE || i !== E.DEFAULT && i !== E.RESIZED ? (a(c.ERROR, "mraid.expand", t.error.MRAID_EXPAND_FROM_WRONG_STATE), t.mraidBridgeExt && t.mraidBridgeExt.notifyError(t.error.MRAID_EXPAND_FROM_WRONG_STATE)) : (e && (arguments.push("url"), arguments.push(encodeURI(e))), o.apply(null, d))
        }, r.resize = function () {
            var e = s.resize.clone(),
                n = ["resize"],
                i = r.getState();
            i !== E.DEFAULT && i !== E.RESIZED ? (n.push("width"), n.push(e.width), n.push("height"), n.push(e.height), n.push("offsetX"), n.push(e.offsetX), n.push("offsetY"), n.push(e.offsetY), n.push("customClosePosition"), n.push(e.customClosePosition), n.push("allowOffscreen"), n.push(e.allowOffscreen), o.apply(null, n)) : (a(c.ERROR, "mraid.resize", t.error.MRAID_RESIZE_FROM_WRONG_STATE), t.mraidBridgeExt && t.mraidBridgeExt.notifyError(t.error.MRAID_RESIZE_FROM_WRONG_STATE))
        }, r.supports = function (e) {
            return s.supports.clone()[e]
        }, r.isViewable = function () {
            return s.isViewable.clone()
        }, r.playVideo = function () {
            var e = arguments && arguments[0] ? arguments[0] : "",
                n = arguments && arguments[1] ? arguments[1] : "";
            r.isViewable() ? e.length > 0 ? o("playVideo", "uri", e, "captionUrl", n) : (a(c.ERROR, "mraid.playVideo", t.error.MRAID_VIDEO_URL_REQUIRED), t.mraidBridgeExt && t.mraidBridgeExt.notifyError(t.error.MRAID_VIDEO_URL_REQUIRED)) : (a(c.ERROR, "mraid.playVideo", t.error.MRAID_AD_IS_NOT_VIEWABLE), t.mraidBridgeExt && t.mraidBridgeExt.notifyError(t.error.MRAID_AD_IS_NOT_VIEWABLE))
        }, r.createCalendarEvent = function () {}, r.storePicture = function (e) {
            r.isViewable() ? e ? (a(c.ERROR, "mraid.storePicture", t.error.MRAID_MISSING_IMAGE_URL), t.mraidBridgeExt && t.mraidBridgeExt.notifyError(t.error.MRAID_MISSING_IMAGE_URL)) : o("storePicture", "uri", e) : (a(c.ERROR, "mraid.storePicture", t.error.MRAID_AD_IS_NOT_VIEWABLE), t.mraidBridgeExt && t.mraidBridgeExt.notifyError(t.error.MRAID_AD_IS_NOT_VIEWABLE))
        }, r.getViewable = r.isViewable, n.getConsentRequired = function () {
            return s.consentRequired.clone()
        }, n.getConsentTitleText = function () {
            return s.consentTitleText.clone()
        }, n.getConsentBodyText = function () {
            return s.consentBodyText.clone()
        }, n.getConsentAcceptButtonText = function () {
            return s.consentAcceptButtonText.clone()
        }, n.getConsentDenyButtonText = function () {
            return s.consentDenyButtonText.clone()
        }, n.openAppStore = function (e, r) {
            if (i && i.push("mraidExt.openAppStore, mode=" + e + ("object" == typeof r ? JSON.stringify(r) : r)), ![0, 1].includes(e)) return a(c.ERROR, "mraid.openAppStore", t.error.MRAID_MISSING_STORE_KIT_MODE), void(t.mraidBridgeExt && t.mraidBridgeExt.notifyError(t.error.MRAID_MISSING_STORE_KIT_MODE));
            var n = ["openAppStore", "mode", e];
            if (r)
                for (const e in r) r.hasOwnProperty(e) && (n.push(e), n.push(r[e]));
            o.apply(null, n)
        }, n.dismissStoreOverlayView = function () {
            o("dismissStoreOverlayView")
        }, n.getMraidVersion = function () {
            return "v5.0.0"
        }, n.getOS = function () {
            return s.os.clone()
        }, n.getOSVersion = function () {
            return s.osVersion.clone()
        }, n.getSDKVersion = function () {
            return s.sdkVersion.clone()
        }, n.getIncentivized = function () {
            return s.incentivized.clone()
        }, n.useCustomPrivacy = function (e) {
            d(e, s.customPrivacy.clone(), "useCustomPrivacy") && (s.customPrivacy.update(e), o("useCustomPrivacy", "useCustomPrivacy", e))
        }, r.getConsentRequired = n.getConsentRequired, r.getConsentTitleText = n.getConsentTitleText, r.getConsentBodyText = n.getConsentBodyText, r.getConsentAcceptButtonText = n.getConsentAcceptButtonText, r.getConsentDenyButtonText = n.getConsentDenyButtonText
    }(window)
}]);
//# sourceMappingURL=vungle.mraid.min.js.map