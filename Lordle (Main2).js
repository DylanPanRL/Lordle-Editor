// Copyright 2012 Google Inc. All rights reserved.
(function() {

    var data = {
        "resource": {
            "version": "1",

            "macros": [{
                "function": "__e"
            }, {
                "function": "__aev",
                "vtp_varType": "URL",
                "vtp_component": "IS_OUTBOUND",
                "vtp_affiliatedDomains": ["list"]
            }, {
                "function": "__v",
                "vtp_name": "gtm.triggers",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ""
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementId",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementClasses",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__aev",
                "vtp_varType": "URL",
                "vtp_component": "URL_NO_FRAGMENT"
            }, {
                "function": "__aev",
                "vtp_varType": "URL",
                "vtp_component": "HOST",
                "vtp_stripWww": true
            }, {
                "function": "__u",
                "vtp_component": "QUERY",
                "vtp_queryKey": "q,s,search,query,keyword",
                "vtp_multiQueryKeys": true,
                "vtp_ignoreEmptyQueryParam": true,
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__v",
                "vtp_name": "gtm.historyChangeSource",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.oldUrl",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.newUrl",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__c",
                "vtp_value": ""
            }, {
                "function": "__c",
                "vtp_value": 0
            }, {
                "vtp_signal": 0,
                "function": "__c",
                "vtp_value": 0
            }],
            "tags": [{
                "function": "__gct",
                "vtp_trackingId": "G-2SSGMHY3NP",
                "vtp_sessionDuration": 0,
                "tag_id": 1
            }, {
                "function": "__get",
                "vtp_eventName": "click",
                "vtp_settings": ["map", "streamId", "G-2SSGMHY3NP", "eventParameters", ["map", "link_id", ["macro", 3], "link_classes", ["macro", 4], "link_url", ["macro", 5], "link_domain", ["macro", 6], "outbound", true]],
                "vtp_deferrable": false,
                "tag_id": 11
            }, {
                "function": "__get",
                "vtp_eventName": "view_search_results",
                "vtp_settings": ["map", "streamId", "G-2SSGMHY3NP", "eventParameters", ["map", "search_term", ["macro", 7]]],
                "vtp_deferrable": true,
                "tag_id": 16
            }, {
                "function": "__get",
                "vtp_eventName": "page_view",
                "vtp_settings": ["map", "streamId", "G-2SSGMHY3NP", "eventParameters", ["map", "page_referrer", ["macro", 9]]],
                "vtp_deferrable": false,
                "tag_id": 19
            }, {
                "function": "__dlm",
                "vtp_userInput": ["list", ["map", "key", "gtm.gtagReferrer.G-2SSGMHY3NP", "value", ["macro", 9]]],
                "tag_id": 20
            }, {
                "function": "__set_product_settings",
                "original_activity_id": 3001,
                "vtp_foreignTldMacroResult": ["macro", 11],
                "vtp_isChinaVipRegionMacroResult": ["macro", 12],
                "tag_id": 23
            }, {
                "function": "__ogt_event_settings",
                "original_activity_id": 3002,
                "vtp_eventSettings": ["list", ["map", "name", "purchase", "conversion", true]],
                "tag_id": 24
            }, {
                "function": "__ogt_google_signals",
                "original_activity_id": 3003,
                "vtp_googleSignals": "DISABLED",
                "vtp_serverMacroResult": ["macro", 13],
                "tag_id": 25
            }, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": true,
                "vtp_uniqueTriggerId": "1_9",
                "tag_id": 26
            }, {
                "function": "__ehl",
                "vtp_groupEvents": true,
                "vtp_groupEventsInterval": 1000,
                "vtp_uniqueTriggerId": "1_17",
                "tag_id": 27
            }],
            "predicates": [{
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.js"
            }, {
                "function": "_eq",
                "arg0": ["macro", 1],
                "arg1": true
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.linkClick"
            }, {
                "function": "_re",
                "arg0": ["macro", 2],
                "arg1": "(^$|((^|,)1_9($|,)))"
            }, {
                "function": "_eq",
                "arg0": ["macro", 7],
                "arg1": "undefined"
            }, {
                "function": "_eq",
                "arg0": ["macro", 8],
                "arg1": ["list", "pushState", "popstate", "replaceState"],
                "any_of": true
            }, {
                "function": "_eq",
                "arg0": ["macro", 9],
                "arg1": ["macro", 10]
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.historyChange-v2"
            }, {
                "function": "_re",
                "arg0": ["macro", 2],
                "arg1": "(^$|((^|,)1_17($|,)))"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.init"
            }],
            "rules": [[["if", 0], ["add", 0, 8, 9]], [["if", 1, 2, 3], ["add", 1]], [["if", 0], ["unless", 4], ["add", 2]], [["if", 5, 7, 8], ["unless", 6], ["add", 3, 4]], [["if", 9], ["add", 5, 6, 7]]]
        },
        "runtime": [[50, "__ogt_event_settings", [46, "a"], [52, "b", ["require", "internal.setProductSettingsParameter"]], [52, "c", ["require", "getContainerVersion"]], [52, "d", [8]], [53, [41, "f"], [3, "f", 0], [63, [7, "f"], [23, [15, "f"], [17, [17, [15, "a"], "eventSettings"], "length"]], [33, [15, "f"], [3, "f", [0, [15, "f"], 1]]], [46, [53, [52, "g", [16, [16, [17, [15, "a"], "eventSettings"], [15, "f"]], "name"]], [43, [15, "d"], [15, "g"], [8, "blacklisted", [16, [16, [17, [15, "a"], "eventSettings"], [15, "f"]], "blacklisted"], "conversion", [16, [16, [17, [15, "a"], "eventSettings"], [15, "f"]], "conversion"]]]]]]], [52, "e", [17, ["c"], "containerId"]], ["b", [15, "e"], "event_settings", [15, "d"]], [2, [15, "a"], "gtmOnSuccess", [7]]], [50, "__ogt_google_signals", [46, "a"], [52, "b", ["require", "internal.setProductSettingsParameter"]], [52, "c", ["require", "getContainerVersion"]], [52, "d", [13, [41, "$0"], [3, "$0", ["require", "internal.getFlags"]], ["$0"]]], [52, "e", [17, ["c"], "containerId"]], ["b", [15, "e"], "google_signals", [20, [17, [15, "a"], "serverMacroResult"], 1]], [22, [17, [15, "d"], "enableGa4OnoRemarketing"], [46, ["b", [15, "e"], "google_ono", [20, [17, [15, "a"], "serverMacroResult"], 2]]]], [2, [15, "a"], "gtmOnSuccess", [7]]], [50, "__set_product_settings", [46, "a"], [52, "b", ["require", "internal.setProductSettingsParameter"]], [52, "c", ["require", "getContainerVersion"]], [52, "d", [17, ["c"], "containerId"]], ["b", [15, "d"], "google_tld", [17, [15, "a"], "foreignTldMacroResult"]], ["b", [15, "d"], "ga_restrict_domain", [20, [17, [15, "a"], "isChinaVipRegionMacroResult"], 1]], [2, [15, "a"], "gtmOnSuccess", [7]]]],
        "permissions": {
            "__ogt_event_settings": {
                "read_container_data": {}
            },
            "__ogt_google_signals": {
                "read_container_data": {}
            },
            "__set_product_settings": {
                "read_container_data": {}
            }
        }
        ,
        "security_groups": {
            "google": ["__ogt_event_settings", "__ogt_google_signals", "__set_product_settings"]
        }

    };

    /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
    var l, ba = function(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    }, da = function(a) {
        return a.raw = a
    }, fa = function(a) {
        var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
        return b ? b.call(a) : {
            next: ba(a)
        }
    }, ha = "function" == typeof Object.create ? Object.create : function(a) {
        var b = function() {};
        b.prototype = a;
        return new b
    }
    , ia;
    if ("function" == typeof Object.setPrototypeOf)
        ia = Object.setPrototypeOf;
    else {
        var ja;
        a: {
            var la = {
                a: !0
            }
              , ma = {};
            try {
                ma.__proto__ = la;
                ja = ma.a;
                break a
            } catch (a) {}
            ja = !1
        }
        ia = ja ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b)
                throw new TypeError(a + " is not extensible");
            return a
        }
        : null
    }
    var na = ia
      , oa = function(a, b) {
        a.prototype = ha(b.prototype);
        a.prototype.constructor = a;
        if (na)
            na(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else
                        a[c] = b[c];
        a.Nk = b.prototype
    }
      , qa = this || self
      , ra = function(a) {
        return a
    };
    var ta = function(a, b) {
        this.g = a;
        this.o = b
    };
    var ua = function(a) {
        return "number" === typeof a && 0 <= a && isFinite(a) && 0 === a % 1 || "string" === typeof a && "-" !== a[0] && a === "" + parseInt(a, 10)
    }
      , va = function() {
        this.C = {};
        this.s = !1;
        this.F = {}
    }
      , wa = function(a, b) {
        var c = [], d;
        for (d in a.C)
            if (a.C.hasOwnProperty(d))
                switch (d = d.substr(5),
                b) {
                case 1:
                    c.push(d);
                    break;
                case 2:
                    c.push(a.get(d));
                    break;
                case 3:
                    c.push([d, a.get(d)])
                }
        return c
    };
    va.prototype.get = function(a) {
        return this.C["dust." + a]
    }
    ;
    va.prototype.set = function(a, b) {
        this.s || (a = "dust." + a,
        this.F.hasOwnProperty(a) || (this.C[a] = b))
    }
    ;
    va.prototype.has = function(a) {
        return this.C.hasOwnProperty("dust." + a)
    }
    ;
    var xa = function(a, b) {
        b = "dust." + b;
        a.s || a.F.hasOwnProperty(b) || delete a.C[b]
    };
    va.prototype.Hb = function() {
        this.s = !0
    }
    ;
    var ya = function(a) {
        this.o = new va;
        this.g = [];
        this.s = !1;
        a = a || [];
        for (var b in a)
            a.hasOwnProperty(b) && (ua(b) ? this.g[Number(b)] = a[Number(b)] : this.o.set(b, a[b]))
    };
    l = ya.prototype;
    l.toString = function(a) {
        if (a && 0 <= a.indexOf(this))
            return "";
        for (var b = [], c = 0; c < this.g.length; c++) {
            var d = this.g[c];
            null === d || void 0 === d ? b.push("") : d instanceof ya ? (a = a || [],
            a.push(this),
            b.push(d.toString(a)),
            a.pop()) : b.push(d.toString())
        }
        return b.join(",")
    }
    ;
    l.set = function(a, b) {
        if (!this.s)
            if ("length" === a) {
                if (!ua(b))
                    throw Error("RangeError: Length property must be a valid integer.");
                this.g.length = Number(b)
            } else
                ua(a) ? this.g[Number(a)] = b : this.o.set(a, b)
    }
    ;
    l.get = function(a) {
        return "length" === a ? this.length() : ua(a) ? this.g[Number(a)] : this.o.get(a)
    }
    ;
    l.length = function() {
        return this.g.length
    }
    ;
    l.Gb = function() {
        for (var a = wa(this.o, 1), b = 0; b < this.g.length; b++)
            a.push(b + "");
        return new ya(a)
    }
    ;
    var za = function(a, b) {
        ua(b) ? delete a.g[Number(b)] : xa(a.o, b)
    };
    l = ya.prototype;
    l.pop = function() {
        return this.g.pop()
    }
    ;
    l.push = function(a) {
        return this.g.push.apply(this.g, Array.prototype.slice.call(arguments))
    }
    ;
    l.shift = function() {
        return this.g.shift()
    }
    ;
    l.splice = function(a, b, c) {
        return new ya(this.g.splice.apply(this.g, arguments))
    }
    ;
    l.unshift = function(a) {
        return this.g.unshift.apply(this.g, Array.prototype.slice.call(arguments))
    }
    ;
    l.has = function(a) {
        return ua(a) && this.g.hasOwnProperty(a) || this.o.has(a)
    }
    ;
    l.Hb = function() {
        this.s = !0;
        Object.freeze(this.g);
        this.o.Hb()
    }
    ;
    var Ba = function() {
        function a(f, g) {
            if (b[f]) {
                if (b[f].Sd + g > b[f].max)
                    throw Error("Quota exceeded");
                b[f].Sd += g
            }
        }
        var b = {}
          , c = void 0
          , d = void 0
          , e = {
            Tj: function(f) {
                c = f
            },
            Zg: function() {
                c && a(c, 1)
            },
            Vj: function(f) {
                d = f
            },
            Jb: function(f) {
                d && a(d, f)
            },
            tk: function(f, g) {
                b[f] = b[f] || {
                    Sd: 0
                };
                b[f].max = g
            },
            tj: function(f) {
                return b[f] && b[f].Sd || 0
            },
            reset: function() {
                b = {}
            },
            ej: a
        };
        e.onFnConsume = e.Tj;
        e.consumeFn = e.Zg;
        e.onStorageConsume = e.Vj;
        e.consumeStorage = e.Jb;
        e.setMax = e.tk;
        e.getConsumed = e.tj;
        e.reset = e.reset;
        e.consume = e.ej;
        return e
    };
    var Ca = function(a, b) {
        this.s = a;
        this.O = function(c, d, e) {
            return c.apply(d, e)
        }
        ;
        this.C = b;
        this.o = new va;
        this.g = this.F = void 0
    };
    Ca.prototype.add = function(a, b) {
        Da(this, a, b, !1)
    }
    ;
    var Da = function(a, b, c, d) {
        if (!a.o.s)
            if (a.s.Jb(("string" === typeof b ? b.length : 1) + ("string" === typeof c ? c.length : 1)),
            d) {
                var e = a.o;
                e.set(b, c);
                e.F["dust." + b] = !0
            } else
                a.o.set(b, c)
    };
    Ca.prototype.set = function(a, b) {
        this.o.s || (!this.o.has(a) && this.C && this.C.has(a) ? this.C.set(a, b) : (this.s.Jb(("string" === typeof a ? a.length : 1) + ("string" === typeof b ? b.length : 1)),
        this.o.set(a, b)))
    }
    ;
    Ca.prototype.get = function(a) {
        return this.o.has(a) ? this.o.get(a) : this.C ? this.C.get(a) : void 0
    }
    ;
    Ca.prototype.has = function(a) {
        return !!this.o.has(a) || !(!this.C || !this.C.has(a))
    }
    ;
    var Ea = function(a) {
        var b = new Ca(a.s,a);
        a.F && (b.F = a.F);
        b.O = a.O;
        b.g = a.g;
        return b
    };
    var Fa = function() {}
      , Ha = function(a) {
        return "function" == typeof a
    }
      , m = function(a) {
        return "string" == typeof a
    }
      , Ja = function(a) {
        return "number" == typeof a && !isNaN(a)
    }
      , Ka = Array.isArray
      , Na = function(a, b) {
        if (a && Ka(a))
            for (var c = 0; c < a.length; c++)
                if (a[c] && b(a[c]))
                    return a[c]
    }
      , Oa = function(a, b) {
        if (!Ja(a) || !Ja(b) || a > b)
            a = 0,
            b = 2147483647;
        return Math.floor(Math.random() * (b - a + 1) + a)
    }
      , Qa = function(a, b) {
        for (var c = new Pa, d = 0; d < a.length; d++)
            c.set(a[d], !0);
        for (var e = 0; e < b.length; e++)
            if (c.get(b[e]))
                return !0;
        return !1
    }
      , Ra = function(a, b) {
        for (var c in a)
            Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
    }
      , Sa = function(a) {
        return !!a && ("[object Arguments]" == Object.prototype.toString.call(a) || Object.prototype.hasOwnProperty.call(a, "callee"))
    }
      , Ta = function(a) {
        return Math.round(Number(a)) || 0
    }
      , Ua = function(a) {
        return "false" == String(a).toLowerCase() ? !1 : !!a
    }
      , Va = function(a) {
        var b = [];
        if (Ka(a))
            for (var c = 0; c < a.length; c++)
                b.push(String(a[c]));
        return b
    }
      , Wa = function(a) {
        return a ? a.replace(/^\s+|\s+$/g, "") : ""
    }
      , Xa = function() {
        return new Date(Date.now())
    }
      , Ya = function() {
        return Xa().getTime()
    }
      , Pa = function() {
        this.prefix = "gtm.";
        this.values = {}
    };
    Pa.prototype.set = function(a, b) {
        this.values[this.prefix + a] = b
    }
    ;
    Pa.prototype.get = function(a) {
        return this.values[this.prefix + a]
    }
    ;
    var Za = function(a, b, c) {
        return a && a.hasOwnProperty(b) ? a[b] : c
    }
      , $a = function(a) {
        var b = a;
        return function() {
            if (b) {
                var c = b;
                b = void 0;
                try {
                    c()
                } catch (d) {}
            }
        }
    }
      , ab = function(a, b) {
        for (var c in b)
            b.hasOwnProperty(c) && (a[c] = b[c])
    }
      , bb = function(a) {
        for (var b in a)
            if (a.hasOwnProperty(b))
                return !0;
        return !1
    }
      , cb = function(a, b) {
        for (var c = [], d = 0; d < a.length; d++)
            c.push(a[d]),
            c.push.apply(c, b[a[d]] || []);
        return c
    }
      , db = function(a, b) {
        var c = A;
        b = b || [];
        for (var d = c, e = 0; e < a.length - 1; e++) {
            if (!d.hasOwnProperty(a[e]))
                return;
            d = d[a[e]];
            if (0 <= b.indexOf(d))
                return
        }
        return d
    }
      , eb = function(a, b) {
        for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++)
            d = d[e[f]] = {};
        d[e[e.length - 1]] = b;
        return c
    }
      , fb = /^\w{1,9}$/
      , gb = function(a, b) {
        a = a || {};
        b = b || ",";
        var c = [];
        Ra(a, function(d, e) {
            fb.test(d) && e && c.push(d)
        });
        return c.join(b)
    }
      , hb = function(a, b) {
        function c() {
            ++d === b && (e(),
            e = null,
            c.done = !0)
        }
        var d = 0
          , e = a;
        c.done = !1;
        return c
    };
    var ib = function(a, b) {
        va.call(this);
        this.O = a;
        this.Va = b
    };
    oa(ib, va);
    ib.prototype.toString = function() {
        return this.O
    }
    ;
    ib.prototype.Gb = function() {
        return new ya(wa(this, 1))
    }
    ;
    ib.prototype.g = function(a, b) {
        a.s.Zg();
        return this.Va.apply(new jb(this,a), Array.prototype.slice.call(arguments, 1))
    }
    ;
    ib.prototype.o = function(a, b) {
        try {
            return this.g.apply(this, Array.prototype.slice.call(arguments, 0))
        } catch (c) {}
    }
    ;
    var lb = function(a, b) {
        for (var c, d = 0; d < b.length && !(c = kb(a, b[d]),
        c instanceof ta); d++)
            ;
        return c
    }
      , kb = function(a, b) {
        try {
            var c = a.get(String(b[0]));
            if (!(c && c instanceof ib))
                throw Error("Attempting to execute non-function " + b[0] + ".");
            return c.g.apply(c, [a].concat(b.slice(1)))
        } catch (e) {
            var d = a.F;
            d && d(e, b.context ? {
                id: b[0],
                line: b.context.line
            } : null);
            throw e;
        }
    }
      , jb = function(a, b) {
        this.o = a;
        this.g = b
    }
      , F = function(a, b) {
        return Ka(b) ? kb(a.g, b) : b
    }
      , H = function(a) {
        return a.o.O
    };
    var mb = function() {
        va.call(this)
    };
    oa(mb, va);
    mb.prototype.Gb = function() {
        return new ya(wa(this, 1))
    }
    ;
    var nb = {
        control: function(a, b) {
            return new ta(a,F(this, b))
        },
        fn: function(a, b, c) {
            var d = this.g
              , e = F(this, b);
            if (!(e instanceof ya))
                throw Error("Error: non-List value given for Fn argument names.");
            var f = Array.prototype.slice.call(arguments, 2);
            this.g.s.Jb(a.length + f.length);
            return new ib(a,function() {
                return function(g) {
                    var h = Ea(d);
                    void 0 === h.g && (h.g = this.g.g);
                    for (var k = Array.prototype.slice.call(arguments, 0), n = 0; n < k.length; n++)
                        if (k[n] = F(this, k[n]),
                        k[n]instanceof ta)
                            return k[n];
                    for (var p = e.get("length"), q = 0; q < p; q++)
                        q < k.length ? h.add(e.get(q), k[q]) : h.add(e.get(q), void 0);
                    h.add("arguments", new ya(k));
                    var t = lb(h, f);
                    if (t instanceof ta)
                        return "return" === t.g ? t.o : t
                }
            }())
        },
        list: function(a) {
            var b = this.g.s;
            b.Jb(arguments.length);
            for (var c = new ya, d = 0; d < arguments.length; d++) {
                var e = F(this, arguments[d]);
                "string" === typeof e && b.Jb(e.length ? e.length - 1 : 0);
                c.push(e)
            }
            return c
        },
        map: function(a) {
            for (var b = this.g.s, c = new mb, d = 0; d < arguments.length - 1; d += 2) {
                var e = F(this, arguments[d]) + ""
                  , f = F(this, arguments[d + 1])
                  , g = e.length;
                g += "string" === typeof f ? f.length : 1;
                b.Jb(g);
                c.set(e, f)
            }
            return c
        },
        undefined: function() {}
    };
    var ob = function() {
        this.s = Ba();
        this.g = new Ca(this.s)
    }
      , pb = function(a, b, c) {
        var d = new ib(b,c);
        d.Hb();
        a.g.set(b, d)
    }
      , qb = function(a, b, c) {
        nb.hasOwnProperty(b) && pb(a, c || b, nb[b])
    };
    ob.prototype.execute = function(a, b) {
        var c = Array.prototype.slice.call(arguments, 0);
        return this.o(c)
    }
    ;
    ob.prototype.o = function(a) {
        for (var b, c = 0; c < arguments.length; c++)
            b = kb(this.g, arguments[c]);
        return b
    }
    ;
    ob.prototype.C = function(a, b) {
        var c = Ea(this.g);
        c.g = a;
        for (var d, e = 1; e < arguments.length; e++)
            d = d = kb(c, arguments[e]);
        return d
    }
    ;
    var rb, sb = function() {
        if (void 0 === rb) {
            var a = null
              , b = qa.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: ra,
                        createScript: ra,
                        createScriptURL: ra
                    })
                } catch (c) {
                    qa.console && qa.console.error(c.message)
                }
                rb = a
            } else
                rb = a
        }
        return rb
    };
    var ub = function(a, b) {
        this.s = b === tb ? a : ""
    };
    ub.prototype.o = !0;
    ub.prototype.g = function() {
        return this.s.toString()
    }
    ;
    ub.prototype.toString = function() {
        return this.s + ""
    }
    ;
    var vb = function(a) {
        return a instanceof ub && a.constructor === ub ? a.s : "type_error:TrustedResourceUrl"
    }
      , tb = {}
      , wb = function(a) {
        var b = sb()
          , c = b ? b.createScriptURL(a) : a;
        return new ub(c,tb)
    };
    var yb = function(a, b) {
        this.s = b === xb ? a : ""
    };
    yb.prototype.o = !0;
    yb.prototype.g = function() {
        return this.s.toString()
    }
    ;
    yb.prototype.toString = function() {
        return this.s.toString()
    }
    ;
    var zb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i
      , xb = {};
    function Ab() {
        var a = qa.navigator;
        if (a) {
            var b = a.userAgent;
            if (b)
                return b
        }
        return ""
    }
    function Bb(a) {
        return -1 != Ab().indexOf(a)
    }
    ;var Cb = {}
      , Db = function(a, b, c) {
        this.s = c === Cb ? a : "";
        this.o = !0
    };
    Db.prototype.g = function() {
        return this.s.toString()
    }
    ;
    Db.prototype.toString = function() {
        return this.s.toString()
    }
    ;
    var Eb = function(a) {
        return a instanceof Db && a.constructor === Db ? a.s : "type_error:SafeHtml"
    }
      , Fb = function(a) {
        var b = sb()
          , c = b ? b.createHTML(a) : a;
        return new Db(c,null,Cb)
    };
    /*

 SPDX-License-Identifier: Apache-2.0
*/
    var Ib = {};
    var Jb = function() {}
      , Kb = function(a) {
        this.g = a
    };
    oa(Kb, Jb);
    Kb.prototype.toString = function() {
        return this.g
    }
    ;
    function Mb(a, b) {
        var c = [new Kb(Nb[0].toLowerCase(),Ib)];
        if (0 === c.length)
            throw Error("No prefixes are provided");
        var d = c.map(function(f) {
            var g;
            if (f instanceof Kb)
                g = f.g;
            else
                throw Error("");
            return g
        })
          , e = b.toLowerCase();
        if (d.every(function(f) {
            return 0 !== e.indexOf(f)
        }))
            throw Error('Attribute "' + b + '" does not match any of the allowed prefixes.');
        a.setAttribute(b, "true")
    }
    function Ob(a) {
        if (null !== a && void 0 !== a.tagName) {
            if ("script" === a.tagName.toLowerCase())
                throw Error("Use setTextContent with a SafeScript.");
            if ("style" === a.tagName.toLowerCase())
                throw Error("Use setTextContent with a SafeStyleSheet.");
        }
    }
    ;var A = window
      , I = document
      , Pb = navigator
      , Qb = I.currentScript && I.currentScript.src
      , Rb = function(a, b) {
        var c = A[a];
        A[a] = void 0 === c ? b : c;
        return A[a]
    }
      , Sb = function(a, b) {
        b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function() {
            a.readyState in {
                loaded: 1,
                complete: 1
            } && (a.onreadystatechange = null,
            b())
        }
        )
    }
      , Tb = {
        async: 1,
        nonce: 1,
        onerror: 1,
        onload: 1,
        src: 1,
        type: 1
    }
      , Ub = {
        onload: 1,
        src: 1,
        width: 1,
        height: 1,
        style: 1
    };
    function Vb(a, b, c) {
        b && Ra(b, function(d, e) {
            d = d.toLowerCase();
            c.hasOwnProperty(d) || a.setAttribute(d, e)
        })
    }
    var Wb = function(a, b, c, d) {
        var e = I.createElement("script");
        Vb(e, d, Tb);
        e.type = "text/javascript";
        e.async = !0;
        var f = wb(a);
        e.src = vb(f);
        var g, h, k = (e.ownerDocument && e.ownerDocument.defaultView || window).document, n = null === (h = k.querySelector) || void 0 === h ? void 0 : h.call(k, "script[nonce]");
        (g = n ? n.nonce || n.getAttribute("nonce") || "" : "") && e.setAttribute("nonce", g);
        Sb(e, b);
        c && (e.onerror = c);
        var p = I.getElementsByTagName("script")[0] || I.body || I.head;
        p.parentNode.insertBefore(e, p);
        return e
    }
      , Xb = function() {
        if (Qb) {
            var a = Qb.toLowerCase();
            if (0 === a.indexOf("https://"))
                return 2;
            if (0 === a.indexOf("http://"))
                return 3
        }
        return 1
    }
      , Yb = function(a, b, c, d, e) {
        var f = e
          , g = !1;
        f || (f = I.createElement("iframe"),
        g = !0);
        Vb(f, c, Ub);
        d && Ra(d, function(k, n) {
            f.dataset[k] = n
        });
        f.height = "0";
        f.width = "0";
        f.style.display = "none";
        f.style.visibility = "hidden";
        if (g) {
            var h = I.body && I.body.lastChild || I.body || I.head;
            h.parentNode.insertBefore(f, h)
        }
        Sb(f, b);
        void 0 !== a && (f.src = a);
        return f
    }
      , Zb = function(a, b, c) {
        var d = new Image(1,1);
        d.onload = function() {
            d.onload = null;
            b && b()
        }
        ;
        d.onerror = function() {
            d.onerror = null;
            c && c()
        }
        ;
        d.src = a;
        return d
    }
      , $b = function(a, b, c, d) {
        a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
    }
      , bc = function(a, b, c) {
        a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
    }
      , J = function(a) {
        A.setTimeout(a, 0)
    }
      , cc = function(a, b) {
        return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null
    }
      , dc = function(a) {
        var b = a.innerText || a.textContent || "";
        b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
        b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
        return b
    }
      , ec = function(a) {
        var b = I.createElement("div")
          , c = b
          , d = Fb("A<div>" + a + "</div>");
        Ob(c);
        c.innerHTML = Eb(d);
        b = b.lastChild;
        for (var e = []; b.firstChild; )
            e.push(b.removeChild(b.firstChild));
        return e
    }
      , fc = function(a, b, c) {
        c = c || 100;
        for (var d = {}, e = 0; e < b.length; e++)
            d[b[e]] = !0;
        for (var f = a, g = 0; f && g <= c; g++) {
            if (d[String(f.tagName).toLowerCase()])
                return f;
            f = f.parentElement
        }
        return null
    }
      , gc = function(a) {
        var b;
        try {
            b = Pb.sendBeacon && Pb.sendBeacon(a)
        } catch (c) {}
        b || Zb(a)
    }
      , hc = function(a, b) {
        var c = a[b];
        c && "string" === typeof c.animVal && (c = c.animVal);
        return c
    }
      , ic = function(a) {
        var b = I.featurePolicy;
        return b && Ha(b.allowsFeature) ? b.allowsFeature(a) : !1
    };
    var jc = function(a, b) {
        return F(this, a) && F(this, b)
    }
      , kc = function(a, b) {
        return F(this, a) === F(this, b)
    }
      , lc = function(a, b) {
        return F(this, a) || F(this, b)
    }
      , mc = function(a, b) {
        a = F(this, a);
        b = F(this, b);
        return -1 < String(a).indexOf(String(b))
    }
      , nc = function(a, b) {
        a = String(F(this, a));
        b = String(F(this, b));
        return a.substring(0, b.length) === b
    }
      , oc = function(a, b) {
        a = F(this, a);
        b = F(this, b);
        switch (a) {
        case "pageLocation":
            var c = A.location.href;
            b instanceof mb && b.get("stripProtocol") && (c = c.replace(/^https?:\/\//, ""));
            return c
        }
    };
    var qc = function() {
        this.g = new ob;
        pc(this)
    };
    qc.prototype.execute = function(a) {
        return this.g.o(a)
    }
    ;
    var pc = function(a) {
        qb(a.g, "map");
        var b = function(c, d) {
            pb(a.g, c, d)
        };
        b("and", jc);
        b("contains", mc);
        b("equals", kc);
        b("or", lc);
        b("startsWith", nc);
        b("variable", oc)
    };
    var rc = function(a) {
        if (a instanceof rc)
            return a;
        this.$a = a
    };
    rc.prototype.toString = function() {
        return String(this.$a)
    }
    ;
    var tc = function(a) {
        va.call(this);
        this.g = a;
        this.set("then", sc(this));
        this.set("catch", sc(this, !0));
        this.set("finally", sc(this, !1, !0))
    };
    oa(tc, mb);
    var sc = function(a, b, c) {
        b = void 0 === b ? !1 : b;
        c = void 0 === c ? !1 : c;
        return new ib("",function(d, e) {
            b && (e = d,
            d = void 0);
            c && (e = d);
            d instanceof ib || (d = void 0);
            e instanceof ib || (e = void 0);
            var f = Ea(this.g)
              , g = function(k) {
                return function(n) {
                    return c ? (k.g(f),
                    a.g) : k.g(f, n)
                }
            }
              , h = a.g.then(d && g(d), e && g(e));
            return new tc(h)
        }
        )
    };
    /*
 jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var uc = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/
      , vc = function(a) {
        if (null == a)
            return String(a);
        var b = uc.exec(Object.prototype.toString.call(Object(a)));
        return b ? b[1].toLowerCase() : "object"
    }
      , wc = function(a, b) {
        return Object.prototype.hasOwnProperty.call(Object(a), b)
    }
      , xc = function(a) {
        if (!a || "object" != vc(a) || a.nodeType || a == a.window)
            return !1;
        try {
            if (a.constructor && !wc(a, "constructor") && !wc(a.constructor.prototype, "isPrototypeOf"))
                return !1
        } catch (c) {
            return !1
        }
        for (var b in a)
            ;
        return void 0 === b || wc(a, b)
    }
      , yc = function(a, b) {
        var c = b || ("array" == vc(a) ? [] : {}), d;
        for (d in a)
            if (wc(a, d)) {
                var e = a[d];
                "array" == vc(e) ? ("array" != vc(c[d]) && (c[d] = []),
                c[d] = yc(e, c[d])) : xc(e) ? (xc(c[d]) || (c[d] = {}),
                c[d] = yc(e, c[d])) : c[d] = e
            }
        return c
    };
    var Ac = function(a, b, c) {
        var d = []
          , e = []
          , f = function(h, k) {
            for (var n = wa(h, 1), p = 0; p < n.length; p++)
                k[n[p]] = g(h.get(n[p]))
        }
          , g = function(h) {
            var k = d.indexOf(h);
            if (-1 < k)
                return e[k];
            if (h instanceof ya) {
                var n = [];
                d.push(h);
                e.push(n);
                for (var p = h.Gb(), q = 0; q < p.length(); q++)
                    n[p.get(q)] = g(h.get(p.get(q)));
                return n
            }
            if (h instanceof tc)
                return h.g;
            if (h instanceof mb) {
                var t = {};
                d.push(h);
                e.push(t);
                f(h, t);
                return t
            }
            if (h instanceof ib) {
                var u = function() {
                    for (var r = Array.prototype.slice.call(arguments, 0), v = 0; v < r.length; v++)
                        r[v] = zc(r[v], b, !!c);
                    var w = b ? b.s : Ba()
                      , y = new Ca(w);
                    b && (y.g = b.g);
                    return g(h.g.apply(h, [y].concat(r)))
                };
                d.push(h);
                e.push(u);
                f(h, u);
                return u
            }
            switch (typeof h) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
                return h;
            case "object":
                if (null === h)
                    return null
            }
        };
        return g(a)
    }
      , zc = function(a, b, c) {
        var d = []
          , e = []
          , f = function(h, k) {
            for (var n in h)
                h.hasOwnProperty(n) && k.set(n, g(h[n]))
        }
          , g = function(h) {
            var k = d.indexOf(h);
            if (-1 < k)
                return e[k];
            if (Ka(h) || Sa(h)) {
                var n = new ya([]);
                d.push(h);
                e.push(n);
                for (var p in h)
                    h.hasOwnProperty(p) && n.set(p, g(h[p]));
                return n
            }
            if (xc(h)) {
                var q = new mb;
                d.push(h);
                e.push(q);
                f(h, q);
                return q
            }
            if ("function" === typeof h) {
                var t = new ib("",function(y) {
                    for (var x = Array.prototype.slice.call(arguments, 0), z = 0; z < x.length; z++)
                        x[z] = Ac(F(this, x[z]), b, !!c);
                    return g((0,
                    this.g.O)(h, h, x))
                }
                );
                d.push(h);
                e.push(t);
                f(h, t);
                return t
            }
            var w = typeof h;
            if (null === h || "string" === w || "number" === w || "boolean" === w)
                return h;
        };
        return g(a)
    };
    var Bc = function(a) {
        for (var b = [], c = 0; c < a.length(); c++)
            a.has(c) && (b[c] = a.get(c));
        return b
    }
      , Cc = function(a) {
        if (void 0 === a || Ka(a) || xc(a))
            return !0;
        switch (typeof a) {
        case "boolean":
        case "number":
        case "string":
        case "function":
            return !0
        }
        return !1
    };
    var Dc = {
        supportedMethods: "concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),
        concat: function(a, b) {
            for (var c = [], d = 0; d < this.length(); d++)
                c.push(this.get(d));
            for (var e = 1; e < arguments.length; e++)
                if (arguments[e]instanceof ya)
                    for (var f = arguments[e], g = 0; g < f.length(); g++)
                        c.push(f.get(g));
                else
                    c.push(arguments[e]);
            return new ya(c)
        },
        every: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
                if (this.has(d) && !b.g(a, this.get(d), d, this))
                    return !1;
            return !0
        },
        filter: function(a, b) {
            for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++)
                this.has(e) && b.g(a, this.get(e), e, this) && d.push(this.get(e));
            return new ya(d)
        },
        forEach: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
                this.has(d) && b.g(a, this.get(d), d, this)
        },
        hasOwnProperty: function(a, b) {
            return this.has(b)
        },
        indexOf: function(a, b, c) {
            var d = this.length()
              , e = void 0 === c ? 0 : Number(c);
            0 > e && (e = Math.max(d + e, 0));
            for (var f = e; f < d; f++)
                if (this.has(f) && this.get(f) === b)
                    return f;
            return -1
        },
        join: function(a, b) {
            for (var c = [], d = 0; d < this.length(); d++)
                c.push(this.get(d));
            return c.join(b)
        },
        lastIndexOf: function(a, b, c) {
            var d = this.length()
              , e = d - 1;
            void 0 !== c && (e = 0 > c ? d + c : Math.min(c, e));
            for (var f = e; 0 <= f; f--)
                if (this.has(f) && this.get(f) === b)
                    return f;
            return -1
        },
        map: function(a, b) {
            for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++)
                this.has(e) && (d[e] = b.g(a, this.get(e), e, this));
            return new ya(d)
        },
        pop: function() {
            return this.pop()
        },
        push: function(a, b) {
            return this.push.apply(this, Array.prototype.slice.call(arguments, 1))
        },
        reduce: function(a, b, c) {
            var d = this.length(), e, f = 0;
            if (void 0 !== c)
                e = c;
            else {
                if (0 === d)
                    throw Error("TypeError: Reduce on List with no elements.");
                for (var g = 0; g < d; g++)
                    if (this.has(g)) {
                        e = this.get(g);
                        f = g + 1;
                        break
                    }
                if (g === d)
                    throw Error("TypeError: Reduce on List with no elements.");
            }
            for (var h = f; h < d; h++)
                this.has(h) && (e = b.g(a, e, this.get(h), h, this));
            return e
        },
        reduceRight: function(a, b, c) {
            var d = this.length(), e, f = d - 1;
            if (void 0 !== c)
                e = c;
            else {
                if (0 === d)
                    throw Error("TypeError: ReduceRight on List with no elements.");
                for (var g = 1; g <= d; g++)
                    if (this.has(d - g)) {
                        e = this.get(d - g);
                        f = d - (g + 1);
                        break
                    }
                if (g > d)
                    throw Error("TypeError: ReduceRight on List with no elements.");
            }
            for (var h = f; 0 <= h; h--)
                this.has(h) && (e = b.g(a, e, this.get(h), h, this));
            return e
        },
        reverse: function() {
            for (var a = Bc(this), b = a.length - 1, c = 0; 0 <= b; b--,
            c++)
                a.hasOwnProperty(b) ? this.set(c, a[b]) : za(this, c);
            return this
        },
        shift: function() {
            return this.shift()
        },
        slice: function(a, b, c) {
            var d = this.length();
            void 0 === b && (b = 0);
            b = 0 > b ? Math.max(d + b, 0) : Math.min(b, d);
            c = void 0 === c ? d : 0 > c ? Math.max(d + c, 0) : Math.min(c, d);
            c = Math.max(b, c);
            for (var e = [], f = b; f < c; f++)
                e.push(this.get(f));
            return new ya(e)
        },
        some: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
                if (this.has(d) && b.g(a, this.get(d), d, this))
                    return !0;
            return !1
        },
        sort: function(a, b) {
            var c = Bc(this);
            void 0 === b ? c.sort() : c.sort(function(e, f) {
                return Number(b.g(a, e, f))
            });
            for (var d = 0; d < c.length; d++)
                c.hasOwnProperty(d) ? this.set(d, c[d]) : za(this, d);
            return this
        },
        splice: function(a, b, c, d) {
            return this.splice.apply(this, Array.prototype.splice.call(arguments, 1, arguments.length - 1))
        },
        toString: function() {
            return this.toString()
        },
        unshift: function(a, b) {
            return this.unshift.apply(this, Array.prototype.slice.call(arguments, 1))
        }
    };
    var Ec = "charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" ")
      , Fc = new ta("break")
      , Gc = new ta("continue")
      , Hc = function(a, b) {
        return F(this, a) + F(this, b)
    }
      , Ic = function(a, b) {
        return F(this, a) && F(this, b)
    }
      , Kc = function(a, b, c) {
        a = F(this, a);
        b = F(this, b);
        c = F(this, c);
        if (!(c instanceof ya))
            throw Error("Error: Non-List argument given to Apply instruction.");
        if (null === a || void 0 === a)
            throw Error("TypeError: Can't read property " + b + " of " + a + ".");
        var d = "number" === typeof a;
        if ("boolean" === typeof a || d) {
            if ("toString" === b) {
                if (d && c.length()) {
                    var e = Ac(c.get(0));
                    try {
                        return a.toString(e)
                    } catch (q) {}
                }
                return a.toString()
            }
            throw Error("TypeError: " + a + "." + b + " is not a function.");
        }
        if ("string" === typeof a) {
            if (0 <= Ec.indexOf(b)) {
                var f = Ac(c);
                return zc(a[b].apply(a, f), this.g)
            }
            throw Error("TypeError: " + b + " is not a function");
        }
        if (a instanceof ya) {
            if (a.has(b)) {
                var g = a.get(b);
                if (g instanceof ib) {
                    var h = Bc(c);
                    h.unshift(this.g);
                    return g.g.apply(g, h)
                }
                throw Error("TypeError: " + b + " is not a function");
            }
            if (0 <= Dc.supportedMethods.indexOf(b)) {
                var k = Bc(c);
                k.unshift(this.g);
                return Dc[b].apply(a, k)
            }
        }
        if (a instanceof ib || a instanceof mb) {
            if (a.has(b)) {
                var n = a.get(b);
                if (n instanceof ib) {
                    var p = Bc(c);
                    p.unshift(this.g);
                    return n.g.apply(n, p)
                }
                throw Error("TypeError: " + b + " is not a function");
            }
            if ("toString" === b)
                return a instanceof ib ? a.O : a.toString();
            if ("hasOwnProperty" === b)
                return a.has.apply(a, Bc(c))
        }
        if (a instanceof rc && "toString" === b)
            return a.toString();
        throw Error("TypeError: Object has no '" + b + "' property.");
    }
      , Lc = function(a, b) {
        a = F(this, a);
        if ("string" !== typeof a)
            throw Error("Invalid key name given for assignment.");
        var c = this.g;
        if (!c.has(a))
            throw Error("Attempting to assign to undefined value " + b);
        var d = F(this, b);
        c.set(a, d);
        return d
    }
      , Mc = function(a) {
        var b = Ea(this.g)
          , c = lb(b, Array.prototype.slice.apply(arguments));
        if (c instanceof ta)
            return c
    }
      , Nc = function() {
        return Fc
    }
      , Oc = function(a) {
        for (var b = F(this, a), c = 0; c < b.length; c++) {
            var d = F(this, b[c]);
            if (d instanceof ta)
                return d
        }
    }
      , Pc = function(a) {
        for (var b = this.g, c = 0; c < arguments.length - 1; c += 2) {
            var d = arguments[c];
            if ("string" === typeof d) {
                var e = F(this, arguments[c + 1]);
                Da(b, d, e, !0)
            }
        }
    }
      , Qc = function() {
        return Gc
    }
      , Rc = function(a, b, c) {
        var d = new ya;
        b = F(this, b);
        for (var e = 0; e < b.length; e++)
            d.push(b[e]);
        var f = [51, a, d].concat(Array.prototype.splice.call(arguments, 2, arguments.length - 2));
        this.g.add(a, F(this, f))
    }
      , Sc = function(a, b) {
        return F(this, a) / F(this, b)
    }
      , Tc = function(a, b) {
        a = F(this, a);
        b = F(this, b);
        var c = a instanceof rc
          , d = b instanceof rc;
        return c || d ? c && d ? a.$a == b.$a : !1 : a == b
    }
      , Uc = function(a) {
        for (var b, c = 0; c < arguments.length; c++)
            b = F(this, arguments[c]);
        return b
    };
    function Vc(a, b, c, d) {
        for (var e = 0; e < b(); e++) {
            var f = a(c(e))
              , g = lb(f, d);
            if (g instanceof ta) {
                if ("break" === g.g)
                    break;
                if ("return" === g.g)
                    return g
            }
        }
    }
    function Wc(a, b, c) {
        if ("string" === typeof b)
            return Vc(a, function() {
                return b.length
            }, function(f) {
                return f
            }, c);
        if (b instanceof mb || b instanceof ya || b instanceof ib) {
            var d = b.Gb()
              , e = d.length();
            return Vc(a, function() {
                return e
            }, function(f) {
                return d.get(f)
            }, c)
        }
    }
    var Xc = function(a, b, c) {
        a = F(this, a);
        b = F(this, b);
        c = F(this, c);
        var d = this.g;
        return Wc(function(e) {
            d.set(a, e);
            return d
        }, b, c)
    }
      , Yc = function(a, b, c) {
        a = F(this, a);
        b = F(this, b);
        c = F(this, c);
        var d = this.g;
        return Wc(function(e) {
            var f = Ea(d);
            Da(f, a, e, !0);
            return f
        }, b, c)
    }
      , Zc = function(a, b, c) {
        a = F(this, a);
        b = F(this, b);
        c = F(this, c);
        var d = this.g;
        return Wc(function(e) {
            var f = Ea(d);
            f.add(a, e);
            return f
        }, b, c)
    }
      , ad = function(a, b, c) {
        a = F(this, a);
        b = F(this, b);
        c = F(this, c);
        var d = this.g;
        return $c(function(e) {
            d.set(a, e);
            return d
        }, b, c)
    }
      , bd = function(a, b, c) {
        a = F(this, a);
        b = F(this, b);
        c = F(this, c);
        var d = this.g;
        return $c(function(e) {
            var f = Ea(d);
            Da(f, a, e, !0);
            return f
        }, b, c)
    }
      , ed = function(a, b, c) {
        a = F(this, a);
        b = F(this, b);
        c = F(this, c);
        var d = this.g;
        return $c(function(e) {
            var f = Ea(d);
            f.add(a, e);
            return f
        }, b, c)
    };
    function $c(a, b, c) {
        if ("string" === typeof b)
            return Vc(a, function() {
                return b.length
            }, function(d) {
                return b[d]
            }, c);
        if (b instanceof ya)
            return Vc(a, function() {
                return b.length()
            }, function(d) {
                return b.get(d)
            }, c);
        throw new TypeError("The value is not iterable.");
    }
    var fd = function(a, b, c, d) {
        function e(p, q) {
            for (var t = 0; t < f.length(); t++) {
                var u = f.get(t);
                q.add(u, p.get(u))
            }
        }
        var f = F(this, a);
        if (!(f instanceof ya))
            throw Error("TypeError: Non-List argument given to ForLet instruction.");
        var g = this.g;
        d = F(this, d);
        var h = Ea(g);
        for (e(g, h); kb(h, b); ) {
            var k = lb(h, d);
            if (k instanceof ta) {
                if ("break" === k.g)
                    break;
                if ("return" === k.g)
                    return k
            }
            var n = Ea(g);
            e(h, n);
            kb(n, c);
            h = n
        }
    }
      , gd = function(a) {
        a = F(this, a);
        var b = this.g
          , c = !1;
        if (c && !b.has(a))
            throw new ReferenceError(a + " is not defined.");
        return b.get(a)
    }
      , hd = function(a, b) {
        var c;
        a = F(this, a);
        b = F(this, b);
        if (void 0 === a || null === a)
            throw Error("TypeError: cannot access property of " + a + ".");
        if (a instanceof mb || a instanceof ya || a instanceof ib)
            c = a.get(b);
        else if ("string" === typeof a)
            "length" === b ? c = a.length : ua(b) && (c = a[b]);
        else if (a instanceof rc)
            return;
        return c
    }
      , id = function(a, b) {
        return F(this, a) > F(this, b)
    }
      , jd = function(a, b) {
        return F(this, a) >= F(this, b)
    }
      , kd = function(a, b) {
        a = F(this, a);
        b = F(this, b);
        a instanceof rc && (a = a.$a);
        b instanceof rc && (b = b.$a);
        return a === b
    }
      , ld = function(a, b) {
        return !kd.call(this, a, b)
    }
      , md = function(a, b, c) {
        var d = [];
        F(this, a) ? d = F(this, b) : c && (d = F(this, c));
        var e = lb(this.g, d);
        if (e instanceof ta)
            return e
    }
      , nd = function(a, b) {
        return F(this, a) < F(this, b)
    }
      , od = function(a, b) {
        return F(this, a) <= F(this, b)
    }
      , pd = function(a, b) {
        return F(this, a) % F(this, b)
    }
      , qd = function(a, b) {
        return F(this, a) * F(this, b)
    }
      , rd = function(a) {
        return -F(this, a)
    }
      , sd = function(a) {
        return !F(this, a)
    }
      , td = function(a, b) {
        return !Tc.call(this, a, b)
    }
      , ud = function() {
        return null
    }
      , vd = function(a, b) {
        return F(this, a) || F(this, b)
    }
      , wd = function(a, b) {
        var c = F(this, a);
        F(this, b);
        return c
    }
      , xd = function(a) {
        return F(this, a)
    }
      , yd = function(a) {
        return Array.prototype.slice.apply(arguments)
    }
      , zd = function(a) {
        return new ta("return",F(this, a))
    }
      , Dd = function(a, b, c) {
        a = F(this, a);
        b = F(this, b);
        c = F(this, c);
        if (null === a || void 0 === a)
            throw Error("TypeError: Can't set property " + b + " of " + a + ".");
        (a instanceof ib || a instanceof ya || a instanceof mb) && a.set(b, c);
        return c
    }
      , Ed = function(a, b) {
        return F(this, a) - F(this, b)
    }
      , Fd = function(a, b, c) {
        a = F(this, a);
        var d = F(this, b)
          , e = F(this, c);
        if (!Ka(d) || !Ka(e))
            throw Error("Error: Malformed switch instruction.");
        for (var f, g = !1, h = 0; h < d.length; h++)
            if (g || a === F(this, d[h]))
                if (f = F(this, e[h]),
                f instanceof ta) {
                    var k = f.g;
                    if ("break" === k)
                        return;
                    if ("return" === k || "continue" === k)
                        return f
                } else
                    g = !0;
        if (e.length === d.length + 1 && (f = F(this, e[e.length - 1]),
        f instanceof ta && ("return" === f.g || "continue" === f.g)))
            return f
    }
      , Gd = function(a, b, c) {
        return F(this, a) ? F(this, b) : F(this, c)
    }
      , Hd = function(a) {
        a = F(this, a);
        return a instanceof ib ? "function" : typeof a
    }
      , Id = function(a) {
        for (var b = this.g, c = 0; c < arguments.length; c++) {
            var d = arguments[c];
            "string" !== typeof d || b.add(d, void 0)
        }
    }
      , Jd = function(a, b, c, d) {
        var e = F(this, d);
        if (F(this, c)) {
            var f = lb(this.g, e);
            if (f instanceof ta) {
                if ("break" === f.g)
                    return;
                if ("return" === f.g)
                    return f
            }
        }
        for (; F(this, a); ) {
            var g = lb(this.g, e);
            if (g instanceof ta) {
                if ("break" === g.g)
                    break;
                if ("return" === g.g)
                    return g
            }
            F(this, b)
        }
    }
      , Kd = function(a) {
        return ~Number(F(this, a))
    }
      , Ld = function(a, b) {
        return Number(F(this, a)) << Number(F(this, b))
    }
      , Md = function(a, b) {
        return Number(F(this, a)) >> Number(F(this, b))
    }
      , Nd = function(a, b) {
        return Number(F(this, a)) >>> Number(F(this, b))
    }
      , Od = function(a, b) {
        return Number(F(this, a)) & Number(F(this, b))
    }
      , Pd = function(a, b) {
        return Number(F(this, a)) ^ Number(F(this, b))
    }
      , Qd = function(a, b) {
        return Number(F(this, a)) | Number(F(this, b))
    };
    var Sd = function() {
        this.g = new ob;
        Rd(this)
    };
    Sd.prototype.execute = function(a) {
        return Td(this.g.o(a))
    }
    ;
    var Ud = function(a, b, c) {
        return Td(a.g.C(b, c))
    }
      , Rd = function(a) {
        var b = function(d, e) {
            qb(a.g, d, String(e))
        };
        b("control", 49);
        b("fn", 51);
        b("list", 7);
        b("map", 8);
        b("undefined", 44);
        var c = function(d, e) {
            pb(a.g, String(d), e)
        };
        c(0, Hc);
        c(1, Ic);
        c(2, Kc);
        c(3, Lc);
        c(53, Mc);
        c(4, Nc);
        c(5, Oc);
        c(52, Pc);
        c(6, Qc);
        c(9, Oc);
        c(50, Rc);
        c(10, Sc);
        c(12, Tc);
        c(13, Uc);
        c(47, Xc);
        c(54, Yc);
        c(55, Zc);
        c(63, fd);
        c(64, ad);
        c(65, bd);
        c(66, ed);
        c(15, gd);
        c(16, hd);
        c(17, hd);
        c(18, id);
        c(19, jd);
        c(20, kd);
        c(21, ld);
        c(22, md);
        c(23, nd);
        c(24, od);
        c(25, pd);
        c(26, qd);
        c(27, rd);
        c(28, sd);
        c(29, td);
        c(45, ud);
        c(30, vd);
        c(32, wd);
        c(33, wd);
        c(34, xd);
        c(35, xd);
        c(46, yd);
        c(36, zd);
        c(43, Dd);
        c(37, Ed);
        c(38, Fd);
        c(39, Gd);
        c(40, Hd);
        c(41, Id);
        c(42, Jd);
        c(58, Kd);
        c(57, Ld);
        c(60, Md);
        c(61, Nd);
        c(56, Od);
        c(62, Pd);
        c(59, Qd)
    };
    function Td(a) {
        if (a instanceof ta || a instanceof ib || a instanceof ya || a instanceof mb || a instanceof rc || null === a || void 0 === a || "string" === typeof a || "number" === typeof a || "boolean" === typeof a)
            return a
    }
    ;var Vd = function() {
        var a = function(b) {
            return {
                toString: function() {
                    return b
                }
            }
        };
        return {
            Uh: a("consent"),
            oe: a("consent_always_fire"),
            Tf: a("convert_case_to"),
            Uf: a("convert_false_to"),
            Vf: a("convert_null_to"),
            Wf: a("convert_true_to"),
            Xf: a("convert_undefined_to"),
            Dk: a("debug_mode_metadata"),
            Fb: a("function"),
            Gi: a("instance_name"),
            Ki: a("live_only"),
            Li: a("malware_disabled"),
            Mi: a("metadata"),
            Ri: a("original_activity_id"),
            Fk: a("original_vendor_template_id"),
            Qi: a("once_per_event"),
            Dg: a("once_per_load"),
            Hk: a("priority_override"),
            Ik: a("respected_consent_types"),
            Ig: a("setup_tags"),
            Kg: a("tag_id"),
            Lg: a("teardown_tags")
        }
    }();
    var ve;
    var we = [], xe = [], ye = [], ze = [], Ae = [], Be = {}, Ce, De, Ee, Fe = function(a, b) {
        var c = {};
        c["function"] = "__" + a;
        for (var d in b)
            b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
        return c
    }, Ge = function(a, b) {
        var c = a["function"]
          , d = b && b.event;
        if (!c)
            throw Error("Error: No function name given for function call.");
        var e = Be[c], f = {}, g;
        for (g in a)
            if (a.hasOwnProperty(g))
                if (0 === g.indexOf("vtp_"))
                    e && d && d.Yg && d.Yg(a[g]),
                    f[void 0 !== e ? g : g.substr(4)] = a[g];
                else if (g === Vd.oe.toString() && a[g]) {}
        e && d && d.Xg && (f.vtp_gtmCachedValues = d.Xg);
        return void 0 !== e ? e(f) : ve(c, f, b)
    }, Ie = function(a, b, c) {
        c = c || [];
        var d = {}, e;
        for (e in a)
            a.hasOwnProperty(e) && (d[e] = He(a[e], b, c));
        return d
    }, He = function(a, b, c) {
        if (Ka(a)) {
            var d;
            switch (a[0]) {
            case "function_id":
                return a[1];
            case "list":
                d = [];
                for (var e = 1; e < a.length; e++)
                    d.push(He(a[e], b, c));
                return d;
            case "macro":
                var f = a[1];
                if (c[f])
                    return;
                var g = we[f];
                if (!g || b.xf(g))
                    return;
                c[f] = !0;
                try {
                    var h = Ie(g, b, c);
                    h.vtp_gtmEventId = b.id;
                    d = Ge(h, {
                        event: b,
                        index: f,
                        type: 2
                    });
                    Ee && (d = Ee.fj(d, h))
                } catch (y) {
                    b.sh && b.sh(y, Number(f)),
                    d = !1
                }
                c[f] = !1;
                return d;
            case "map":
                d = {};
                for (var k = 1; k < a.length; k += 2)
                    d[He(a[k], b, c)] = He(a[k + 1], b, c);
                return d;
            case "template":
                d = [];
                for (var n = !1, p = 1; p < a.length; p++) {
                    var q = He(a[p], b, c);
                    De && (n = n || q === De.Hd);
                    d.push(q)
                }
                return De && n ? De.kj(d) : d.join("");
            case "escape":
                d = He(a[1], b, c);
                if (De && Ka(a[1]) && "macro" === a[1][0] && De.Gj(a))
                    return De.$j(d);
                d = String(d);
                for (var t = 2; t < a.length; t++)
                    Wd[a[t]] && (d = Wd[a[t]](d));
                return d;
            case "tag":
                var u = a[1];
                if (!ze[u])
                    throw Error("Unable to resolve tag reference " + u + ".");
                return d = {
                    fh: a[2],
                    index: u
                };
            case "zb":
                var r = {
                    arg0: a[2],
                    arg1: a[3],
                    ignore_case: a[5]
                };
                r["function"] = a[1];
                var v = Je(r, b, c)
                  , w = !!a[4];
                return w || 2 !== v ? w !== (1 === v) : null;
            default:
                throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
            }
        }
        return a
    }, Je = function(a, b, c) {
        try {
            return Ce(Ie(a, b, c))
        } catch (d) {
            JSON.stringify(a)
        }
        return 2
    };
    var Ke = function(a, b, c) {
        var d;
        d = Error.call(this);
        this.message = d.message;
        "stack"in d && (this.stack = d.stack);
        this.o = a;
        this.g = c
    };
    oa(Ke, Error);
    function Le(a, b) {
        if (Ka(a)) {
            Object.defineProperty(a, "context", {
                value: {
                    line: b[0]
                }
            });
            for (var c = 1; c < a.length; c++)
                Le(a[c], b[c])
        }
    }
    ;var Me = function(a, b) {
        var c;
        c = Error.call(this);
        this.message = c.message;
        "stack"in c && (this.stack = c.stack);
        this.Wj = a;
        this.o = b;
        this.g = []
    };
    oa(Me, Error);
    var Oe = function() {
        return function(a, b) {
            a instanceof Me || (a = new Me(a,Ne));
            b && a.g.push(b);
            throw a;
        }
    };
    function Ne(a) {
        if (!a.length)
            return a;
        a.push({
            id: "main",
            line: 0
        });
        for (var b = a.length - 1; 0 < b; b--)
            Ja(a[b].id) && a.splice(b++, 1);
        for (var c = a.length - 1; 0 < c; c--)
            a[c].line = a[c - 1].line;
        a.splice(0, 1);
        return a
    }
    ;var Re = function(a) {
        function b(t) {
            for (var u = 0; u < t.length; u++)
                d[t[u]] = !0
        }
        for (var c = [], d = [], e = Pe(a), f = 0; f < xe.length; f++) {
            var g = xe[f]
              , h = Qe(g, e);
            if (h) {
                for (var k = g.add || [], n = 0; n < k.length; n++)
                    c[k[n]] = !0;
                b(g.block || [])
            } else
                null === h && b(g.block || []);
        }
        for (var p = [], q = 0; q < ze.length; q++)
            c[q] && !d[q] && (p[q] = !0);
        return p
    }
      , Qe = function(a, b) {
        for (var c = a["if"] || [], d = 0; d < c.length; d++) {
            var e = b(c[d]);
            if (0 === e)
                return !1;
            if (2 === e)
                return null
        }
        for (var f = a.unless || [], g = 0; g < f.length; g++) {
            var h = b(f[g]);
            if (2 === h)
                return null;
            if (1 === h)
                return !1
        }
        return !0
    }
      , Pe = function(a) {
        var b = [];
        return function(c) {
            void 0 === b[c] && (b[c] = Je(ye[c], a));
            return b[c]
        }
    };
    var Se = {
        fj: function(a, b) {
            b[Vd.Tf] && "string" === typeof a && (a = 1 == b[Vd.Tf] ? a.toLowerCase() : a.toUpperCase());
            b.hasOwnProperty(Vd.Vf) && null === a && (a = b[Vd.Vf]);
            b.hasOwnProperty(Vd.Xf) && void 0 === a && (a = b[Vd.Xf]);
            b.hasOwnProperty(Vd.Wf) && !0 === a && (a = b[Vd.Wf]);
            b.hasOwnProperty(Vd.Uf) && !1 === a && (a = b[Vd.Uf]);
            return a
        }
    };
    var Te = function() {
        this.g = {}
    };
    function Ue(a, b, c, d) {
        if (a)
            for (var e = 0; e < a.length; e++) {
                var f = void 0
                  , g = "A policy function denied the permission request";
                try {
                    f = a[e].call(void 0, b, c, d),
                    g += "."
                } catch (h) {
                    g = "string" === typeof h ? g + (": " + h) : h instanceof Error ? g + (": " + h.message) : g + "."
                }
                if (!f)
                    throw new Ke(c,d,g);
            }
    }
    function Ve(a, b, c) {
        return function() {
            var d = arguments[0];
            if (d) {
                var e = a.g[d]
                  , f = a.g.all;
                if (e || f) {
                    var g = c.apply(void 0, Array.prototype.slice.call(arguments, 0));
                    Ue(e, b, d, g);
                    Ue(f, b, d, g)
                }
            }
        }
    }
    ;var Ye = function() {
        var a = data.permissions || {}
          , b = L.J
          , c = this;
        this.o = new Te;
        this.g = {};
        var d = {}
          , e = Ve(this.o, b, function() {
            var f = arguments[0];
            return f && d[f] ? d[f].apply(void 0, Array.prototype.slice.call(arguments, 0)) : {}
        });
        Ra(a, function(f, g) {
            var h = {};
            Ra(g, function(k, n) {
                var p = We(k, n);
                h[k] = p.assert;
                d[k] || (d[k] = p.R)
            });
            c.g[f] = function(k, n) {
                var p = h[k];
                if (!p)
                    throw Xe(k, {}, "The requested permission " + k + " is not configured.");
                var q = Array.prototype.slice.call(arguments, 0);
                p.apply(void 0, q);
                e.apply(void 0, q)
            }
        })
    }
      , $e = function(a) {
        return Ze.g[a] || function() {}
    };
    function We(a, b) {
        var c = Fe(a, b);
        c.vtp_permissionName = a;
        c.vtp_createPermissionError = Xe;
        try {
            return Ge(c)
        } catch (d) {
            return {
                assert: function(e) {
                    throw new Ke(e,{},"Permission " + e + " is unknown.");
                },
                R: function() {
                    for (var e = {}, f = 0; f < arguments.length; ++f)
                        e["arg" + (f + 1)] = arguments[f];
                    return e
                }
            }
        }
    }
    function Xe(a, b, c) {
        return new Ke(a,b,c)
    }
    ;var af = !1;
    var bf = {};
    bf.Ck = Ua('');
    bf.nj = Ua('');
    var cf = af
      , df = bf.nj
      , ef = bf.Ck;
    var ff = function(a, b) {
        var c = String(a);
        return c
    };
    var lf = function(a) {
        var b = {}
          , c = 0;
        Ra(a, function(e, f) {
            if (void 0 !== f)
                if (f = ff(f, 100),
                gf.hasOwnProperty(e))
                    b[gf[e]] = hf(f);
                else if (jf.hasOwnProperty(e)) {
                    var g = jf[e]
                      , h = hf(f);
                    b.hasOwnProperty(g) || (b[g] = h)
                } else if ("category" === e)
                    for (var k = hf(f).split("/", 5), n = 0; n < k.length; n++) {
                        var p = kf[n]
                          , q = k[n];
                        b.hasOwnProperty(p) || (b[p] = q)
                    }
                else
                    10 > c && (b["k" + c] = hf(ff(e, 40)),
                    b["v" + c] = hf(f),
                    c++)
        });
        var d = [];
        Ra(b, function(e, f) {
            d.push("" + e + f)
        });
        return d.join("~")
    }
      , hf = function(a) {
        return ("" + a).replace(/~/g, function() {
            return "~~"
        })
    }
      , gf = {
        item_id: "id",
        item_name: "nm",
        item_brand: "br",
        item_category: "ca",
        item_category2: "c2",
        item_category3: "c3",
        item_category4: "c4",
        item_category5: "c5",
        item_variant: "va",
        price: "pr",
        quantity: "qt",
        coupon: "cp",
        item_list_name: "ln",
        index: "lp",
        item_list_id: "li",
        discount: "ds",
        affiliation: "af",
        promotion_id: "pi",
        promotion_name: "pn",
        creative_name: "cn",
        creative_slot: "cs",
        location_id: "lo"
    }
      , jf = {
        id: "id",
        name: "nm",
        brand: "br",
        variant: "va",
        list_name: "ln",
        list_position: "lp",
        list: "ln",
        position: "lp",
        creative: "cn"
    }
      , kf = ["ca", "c2", "c3", "c4", "c5"];
    var mf = function(a) {
        var b = [];
        Ra(a, function(c, d) {
            null != d && b.push(encodeURIComponent(c) + "=" + encodeURIComponent(String(d)))
        });
        return b.join("&")
    }
      , nf = function(a, b, c, d) {
        this.Aa = a.Aa;
        this.Qb = a.Qb;
        this.I = a.I;
        this.o = b;
        this.C = c;
        this.s = mf(a.Aa);
        this.g = mf(a.I);
        this.F = this.g.length;
        if (d && 16384 < this.F)
            throw Error("EVENT_TOO_LARGE");
    };
    var of = function() {
        this.events = [];
        this.g = this.Aa = "";
        this.s = 0;
        this.o = !1
    };
    of.prototype.add = function(a) {
        return this.C(a) ? (this.events.push(a),
        this.Aa = a.s,
        this.g = a.o,
        this.s += a.F,
        this.o = a.C,
        !0) : !1
    }
    ;
    of.prototype.C = function(a) {
        var b = 20 > this.events.length && 16384 > a.F + this.s
          , c = this.Aa === a.s && this.g === a.o && this.o === a.C;
        return 0 == this.events.length || b && c
    }
    ;
    var pf = function(a, b) {
        Ra(a, function(c, d) {
            null != d && b.push(encodeURIComponent(c) + "=" + encodeURIComponent(d))
        })
    }
      , qf = function(a, b) {
        var c = [];
        a.s && c.push(a.s);
        b && c.push("_s=" + b);
        pf(a.Qb, c);
        var d = !1;
        a.g && (c.push(a.g),
        d = !0);
        var e = c.join("&")
          , f = ""
          , g = e.length + a.o.length + 1;
        d && 2048 < g && (f = c.pop(),
        e = c.join("&"));
        return {
            Gf: e,
            body: f
        }
    }
      , rf = function(a, b) {
        var c = a.events;
        if (1 == c.length)
            return qf(c[0], b);
        var d = [];
        a.Aa && d.push(a.Aa);
        for (var e = {}, f = 0; f < c.length; f++)
            Ra(c[f].Qb, function(u, r) {
                null != r && (e[u] = e[u] || {},
                e[u][String(r)] = e[u][String(r)] + 1 || 1)
            });
        var g = {};
        Ra(e, function(u, r) {
            var v, w = -1, y = 0;
            Ra(r, function(x, z) {
                y += z;
                var B = (x.length + u.length + 2) * (z - 1);
                B > w && (v = x,
                w = B)
            });
            y == c.length && (g[u] = v)
        });
        pf(g, d);
        b && d.push("_s=" + b);
        for (var h = d.join("&"), k = [], n = {}, p = 0; p < c.length; n = {
            sd: n.sd
        },
        p++) {
            var q = [];
            n.sd = {};
            Ra(c[p].Qb, function(u) {
                return function(r, v) {
                    g[r] != "" + v && (u.sd[r] = v)
                }
            }(n));
            c[p].g && q.push(c[p].g);
            pf(n.sd, q);
            k.push(q.join("&"))
        }
        var t = k.join("\r\n");
        return {
            Gf: h,
            body: t
        }
    };
    var Df = /^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|DustMap|List|OpaqueValue)$/i
      , Ef = {
        Fn: "function",
        DustMap: "Object",
        List: "Array"
    }
      , N = function(a, b, c) {
        for (var d = 0; d < b.length; d++) {
            var e = Df.exec(b[d]);
            if (!e)
                throw Error("Internal Error in " + a);
            var f = e[1]
              , g = "!" === e[2]
              , h = e[3]
              , k = c[d];
            if (null == k) {
                if (g)
                    throw Error("Error in " + a + ". Required argument " + f + " not supplied.");
            } else if ("*" !== h) {
                var n = typeof k;
                k instanceof ib ? n = "Fn" : k instanceof ya ? n = "List" : k instanceof mb ? n = "DustMap" : k instanceof rc && (n = "OpaqueValue");
                if (n != h)
                    throw Error("Error in " + a + ". Argument " + f + " has type " + (Ef[n] || n) + ", which does not match required type " + (Ef[h] || h) + ".");
            }
        }
    };
    function Ff(a) {
        return "" + a
    }
    function Gf(a, b) {
        var c = [];
        return c
    }
    ;var Hf = function(a, b) {
        var c = new ib(a,function() {
            for (var d = Array.prototype.slice.call(arguments, 0), e = 0; e < d.length; e++)
                d[e] = F(this, d[e]);
            return b.apply(this, d)
        }
        );
        c.Hb();
        return c
    }
      , If = function(a, b) {
        var c = new mb, d;
        for (d in b)
            if (b.hasOwnProperty(d)) {
                var e = b[d];
                Ha(e) ? c.set(d, Hf(a + "_" + d, e)) : (Ja(e) || m(e) || "boolean" == typeof e) && c.set(d, e)
            }
        c.Hb();
        return c
    };
    var Jf = function(a, b) {
        N(H(this), ["apiName:!string", "message:?string"], arguments);
        var c = {}
          , d = new mb;
        return d = If("AssertApiSubject", c)
    };
    var Kf = function(a, b) {
        N(H(this), ["actual:?*", "message:?string"], arguments);
        var c = {}
          , d = new mb;
        return d = If("AssertThatSubject", c)
    };
    function Lf(a) {
        return function() {
            for (var b = [], c = this.g, d = 0; d < arguments.length; ++d)
                b.push(Ac(arguments[d], c));
            return zc(a.apply(null, b))
        }
    }
    var Nf = function() {
        for (var a = Math, b = Mf, c = {}, d = 0; d < b.length; d++) {
            var e = b[d];
            a.hasOwnProperty(e) && (c[e] = Lf(a[e].bind(a)))
        }
        return c
    };
    var Of = function(a) {
        var b;
        return b
    };
    var Pf = function(a) {
        var b;
        return b
    };
    var Qf = function(a) {
        return encodeURI(a)
    };
    var Rf = function(a) {
        return encodeURIComponent(a)
    };
    var Sf = function(a) {
        N(H(this), ["message:?string"], arguments);
    };
    var Tf = function(a, b) {
        N(H(this), ["min:!number", "max:!number"], arguments);
        return Oa(a, b)
    };
    var Q = function(a, b, c) {
        var d = a.g.g;
        if (!d)
            throw Error("Missing program state.");
        d.$i.apply(null, Array.prototype.slice.call(arguments, 1))
    };
    var Uf = function() {
        Q(this, "read_container_data");
        var a = new mb;
        a.set("containerId", 'G-2SSGMHY3NP');
        a.set("version", '1');
        a.set("environmentName", '');
        a.set("debugMode", cf);
        a.set("previewMode", ef);
        a.set("environmentMode", df);
        a.Hb();
        return a
    };
    var Vf = {};
    Vf.sstECEnableData = !0;
    Vf.enableAdsEc = !0;
    Vf.sstFFConversionEnabled = !0;
    Vf.sstEnableAuid = !0;
    Vf.enableGbraidUpdate = !0;
    Vf.enable1pScripts = !0;
    Vf.enableGlobalEventDeveloperIds = !1;
    Vf.enableGa4OnoRemarketing = !1;
    Vf.omitAuidIfWbraidPresent = !1;
    Vf.sstEnableDclid = !0;
    Vf.reconcileCampaignFields = !1;
    Vf.enableEmFormCcd = !1;
    Vf.enableEmFormCcdPart2 = !1;
    Vf.requireGtagUserDataTos = !0;
    function Wf() {
        return zc(Vf)
    }
    ;var Xf = function() {
        return (new Date).getTime()
    };
    var Yf = function(a) {
        if (null === a)
            return "null";
        if (a instanceof ya)
            return "array";
        if (a instanceof ib)
            return "function";
        if (a instanceof rc) {
            a = a.$a;
            if (void 0 === a.constructor || void 0 === a.constructor.name) {
                var b = String(a);
                return b.substring(8, b.length - 1)
            }
            return String(a.constructor.name)
        }
        return typeof a
    };
    var Zf = function(a) {
        function b(c) {
            return function(d) {
                try {
                    return c(d)
                } catch (e) {
                    (cf || ef) && a.call(this, e.message)
                }
            }
        }
        return {
            parse: b(function(c) {
                return zc(JSON.parse(c))
            }),
            stringify: b(function(c) {
                return JSON.stringify(Ac(c))
            })
        }
    };
    var $f = function(a) {
        return Ta(Ac(a, this.g))
    };
    var ag = function(a) {
        return Number(Ac(a, this.g))
    };
    var bg = function(a) {
        return null === a ? "null" : void 0 === a ? "undefined" : a.toString()
    };
    var cg = function(a, b, c) {
        var d = null
          , e = !1;
        return e ? d : null
    };
    var Mf = "floor ceil round max min abs pow sqrt".split(" ");
    var dg = function() {
        var a = {};
        return {
            vj: function(b) {
                return a.hasOwnProperty(b) ? a[b] : void 0
            },
            uk: function(b, c) {
                a[b] = c
            },
            reset: function() {
                a = {}
            }
        }
    }
      , eg = function(a, b) {
        return function() {
            var c = Array.prototype.slice.call(arguments, 0);
            c.unshift(b);
            return ib.prototype.g.apply(a, c)
        }
    }
      , fg = function(a, b) {
        N(H(this), ["apiName:!string", "mock:?*"], arguments);
    };
    var gg = {};
    gg.keys = function(a) {
        return new ya
    }
    ;
    gg.values = function(a) {
        return new ya
    }
    ;
    gg.entries = function(a) {
        return new ya
    }
    ;
    gg.freeze = function(a) {
        return a
    }
    ;
    gg.delete = function(a, b) {
        return !1
    }
    ;
    var ig = function() {
        this.g = {};
        this.o = {};
    };
    ig.prototype.get = function(a, b) {
        var c = this.g.hasOwnProperty(a) ? this.g[a] : void 0;
        return c
    }
    ;
    ig.prototype.add = function(a, b, c) {
        if (this.g.hasOwnProperty(a))
            throw "Attempting to add a function which already exists: " + a + ".";
        if (this.o.hasOwnProperty(a))
            throw "Attempting to add an API with an existing private API name: " + a + ".";
        this.g[a] = c ? void 0 : Ha(b) ? Hf(a, b) : If(a, b)
    }
    ;
    var kg = function(a, b, c) {
        if (a.o.hasOwnProperty(b))
            throw "Attempting to add a private function which already exists: " + b + ".";
        if (a.g.hasOwnProperty(b))
            throw "Attempting to add a private function with an existing API name: " + b + ".";
        a.o[b] = Ha(c) ? Hf(b, c) : If(b, c)
    };
    function jg(a, b) {
        var c = void 0;
        return c
    }
    ;function lg() {
        var a = {};
        return a
    }
    ;var U = {
        cc: "_ee",
        Kc: "_syn_or_mod",
        Jk: "_uei",
        Ic: "_eu",
        Gk: "_pci",
        $b: "event_callback",
        zd: "event_timeout",
        Ea: "gtag.config",
        Wa: "gtag.get",
        Ca: "purchase",
        Xb: "refund",
        Ab: "begin_checkout",
        Ub: "add_to_cart",
        Vb: "remove_from_cart",
        ci: "view_cart",
        Zf: "add_to_wishlist",
        Da: "view_item",
        Wb: "view_promotion",
        ve: "select_promotion",
        ue: "select_item",
        Bb: "view_item_list",
        Yf: "add_payment_info",
        bi: "add_shipping_info",
        Ya: "value_key",
        lb: "value_callback",
        X: "allow_ad_personalization_signals",
        Ec: "restricted_data_processing",
        yc: "allow_google_signals",
        va: "cookie_expires",
        Zb: "cookie_update",
        Fc: "session_duration",
        Dd: "session_engaged_time",
        xd: "engagement_time_msec",
        Ha: "user_properties",
        wa: "transport_url",
        W: "ads_data_redaction",
        xa: "user_data",
        Bc: "first_party_collection",
        D: "ad_storage",
        N: "analytics_storage",
        pe: "region",
        Sf: "wait_for_update",
        sa: "conversion_linker",
        La: "conversion_cookie_prefix",
        ka: "value",
        ja: "currency",
        zg: "trip_type",
        da: "items",
        ng: "passengers",
        ye: "allow_custom_scripts",
        Gc: "session_id",
        sg: "quantity",
        pb: "transaction_id",
        ob: "language",
        wd: "country",
        vd: "allow_enhanced_conversions",
        De: "aw_merchant_id",
        Be: "aw_feed_country",
        Ce: "aw_feed_language",
        Ae: "discount",
        aa: "developer_id",
        Ed: "delivery_postal_code",
        Je: "estimated_delivery_date",
        He: "shipping",
        Qe: "new_customer",
        Ee: "customer_lifetime_value",
        Ie: "enhanced_conversions",
        xc: "page_view",
        na: "linker",
        P: "domains",
        bc: "decorate_forms",
        jg: "enhanced_conversions_automatic_settings",
        ji: "auto_detection_enabled",
        kg: "ga_temp_client_id",
        we: "user_engagement",
        Xh: "app_remove",
        Yh: "app_store_refund",
        Zh: "app_store_subscription_cancel",
        $h: "app_store_subscription_convert",
        ai: "app_store_subscription_renew",
        di: "first_open",
        ei: "first_visit",
        fi: "in_app_purchase",
        gi: "session_start",
        hi: "allow_display_features",
        zc: "campaign",
        $f: "campaign_content",
        ag: "campaign_id",
        bg: "campaign_medium",
        cg: "campaign_name",
        dg: "campaign_source",
        eg: "campaign_term",
        jb: "client_id",
        ma: "cookie_domain",
        Yb: "cookie_name",
        kb: "cookie_path",
        Ma: "cookie_flags",
        Ac: "custom_map",
        Me: "groups",
        mg: "non_interaction",
        Za: "page_location",
        Re: "page_path",
        Na: "page_referrer",
        Dc: "page_title",
        oa: "send_page_view",
        Eb: "send_to",
        Se: "session_engaged",
        Pe: "_logged_in_state",
        Te: "session_number",
        Ci: "tracking_id",
        qb: "url_passthrough",
        ac: "accept_incoming",
        Cc: "url_position",
        qg: "phone_conversion_number",
        og: "phone_conversion_callback",
        pg: "phone_conversion_css_class",
        rg: "phone_conversion_options",
        xi: "phone_conversion_ids",
        wi: "phone_conversion_country_code",
        Xa: "aw_remarketing",
        ze: "aw_remarketing_only",
        xe: "gclid",
        ii: "auid",
        oi: "affiliation",
        ig: "tax",
        Ge: "list_name",
        hg: "checkout_step",
        gg: "checkout_option",
        ri: "coupon",
        si: "promotions",
        Ga: "user_id",
        Ai: "retoken",
        Fa: "cookie_prefix",
        fg: "disable_merchant_reported_purchases",
        ni: "dc_natural_search",
        mi: "dc_custom_params",
        lg: "method",
        Bi: "search_term",
        li: "content_type",
        vi: "optimize_id",
        ui: "experiments",
        nb: "google_signals"
    };
    U.Bd = "google_tld";
    U.Fd = "update";
    U.Ke = "firebase_id";
    U.Le = "ga_restrict_domain";
    U.yd = "event_settings";
    U.Fe = "dynamic_event_settings";
    U.Hc = "user_data_settings";
    U.vg = "screen_name";
    U.wg = "screen_resolution";
    U.Db = "_x_19";
    U.Cb = "_ecid";
    U.Ad = "_x_20";
    U.Oe = "internal_traffic_results";
    U.yg = "traffic_type";
    U.Cd = "referral_exclusion_definition";
    U.Ne = "ignore_referrer";
    U.ki = "content_group";
    U.ia = "allow_interest_groups";
    var mg = {};
    U.Di = Object.freeze((mg[U.X] = 1,
    mg[U.vd] = 1,
    mg[U.yc] = 1,
    mg[U.da] = 1,
    mg[U.ma] = 1,
    mg[U.va] = 1,
    mg[U.Ma] = 1,
    mg[U.Yb] = 1,
    mg[U.kb] = 1,
    mg[U.Fa] = 1,
    mg[U.Zb] = 1,
    mg[U.Ac] = 1,
    mg[U.aa] = 1,
    mg[U.Fe] = 1,
    mg[U.$b] = 1,
    mg[U.yd] = 1,
    mg[U.zd] = 1,
    mg[U.Bc] = 1,
    mg[U.Le] = 1,
    mg[U.nb] = 1,
    mg[U.Bd] = 1,
    mg[U.Me] = 1,
    mg[U.Oe] = 1,
    mg[U.na] = 1,
    mg[U.Cd] = 1,
    mg[U.Ec] = 1,
    mg[U.oa] = 1,
    mg[U.Eb] = 1,
    mg[U.Fc] = 1,
    mg[U.Dd] = 1,
    mg[U.Ed] = 1,
    mg[U.wa] = 1,
    mg[U.Fd] = 1,
    mg[U.Hc] = 1,
    mg[U.Ha] = 1,
    mg[U.Ic] = 1,
    mg));
    U.Ag = Object.freeze([U.Za, U.Na, U.Dc, U.ob, U.vg, U.Ga, U.Ke, U.ki]);
    var ng = {};
    U.Fi = Object.freeze((ng[U.Xh] = 1,
    ng[U.Yh] = 1,
    ng[U.Zh] = 1,
    ng[U.$h] = 1,
    ng[U.ai] = 1,
    ng[U.di] = 1,
    ng[U.ei] = 1,
    ng[U.fi] = 1,
    ng[U.gi] = 1,
    ng[U.we] = 1,
    ng));
    var og = {};
    U.Bg = Object.freeze((og[U.Yf] = 1,
    og[U.bi] = 1,
    og[U.Ub] = 1,
    og[U.Vb] = 1,
    og[U.ci] = 1,
    og[U.Ab] = 1,
    og[U.ue] = 1,
    og[U.Bb] = 1,
    og[U.ve] = 1,
    og[U.Wb] = 1,
    og[U.Ca] = 1,
    og[U.Xb] = 1,
    og[U.Da] = 1,
    og[U.Zf] = 1,
    og));
    U.Ve = Object.freeze([U.X, U.yc, U.Zb]);
    U.Oi = Object.freeze([].concat(U.Ve));
    U.We = Object.freeze([U.va, U.zd, U.Fc, U.Dd, U.xd]);
    U.Pi = Object.freeze([].concat(U.We));
    var pg = {};
    U.qe = (pg[U.D] = "1",
    pg[U.N] = "2",
    pg);
    var rg = {
        ah: "US",
        Bh: "US-MA"
    };
    var sg = {}
      , tg = function(a, b) {
        sg[a] = sg[a] || [];
        sg[a][b] = !0
    }
      , ug = function(a) {
        for (var b = [], c = sg[a] || [], d = 0; d < c.length; d++)
            c[d] && (b[Math.floor(d / 6)] ^= 1 << d % 6);
        for (var e = 0; e < b.length; e++)
            b[e] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e] || 0);
        return b.join("")
    }
      , vg = function() {
        for (var a = [], b = sg.GA4_EVENT || [], c = 0; c < b.length; c++)
            b[c] && a.push(c);
        return 0 < a.length ? a : void 0
    };
    var wg = function(a) {
        tg("GTM", a)
    };
    var xg = new function(a, b) {
        this.g = a;
        this.defaultValue = void 0 === b ? !1 : b
    }
    (1933);
    var zg = function() {
        var a = yg
          , b = "vf";
        if (a.vf && a.hasOwnProperty(b))
            return a.vf;
        var c = new a;
        a.vf = c;
        a.hasOwnProperty(b);
        return c
    };
    var yg = function() {
        var a = {};
        this.g = function() {
            var b = xg.g
              , c = xg.defaultValue;
            return null != a[b] ? a[b] : c
        }
        ;
        this.o = function() {
            a[xg.g] = !0
        }
    };
    var Ag = [];
    function Bg() {
        var a = Rb("google_tag_data", {});
        a.ics || (a.ics = {
            entries: {},
            set: Cg,
            update: Dg,
            addListener: Eg,
            notifyListeners: Fg,
            active: !1,
            usedDefault: !1,
            usedUpdate: !1,
            accessedDefault: !1,
            accessedAny: !1,
            wasSetLate: !1
        });
        return a.ics
    }
    function Cg(a, b, c, d, e, f) {
        var g = Bg();
        !g.usedDefault && g.usedUpdate && (g.wasSetLate = !0);
        g.usedDefault || !g.accessedDefault && !g.accessedAny || (g.wasSetLate = !0);
        g.active = !0;
        g.usedDefault = !0;
        if (void 0 != b) {
            var h = g.entries
              , k = h[a] || {}
              , n = k.region
              , p = c && m(c) ? c.toUpperCase() : void 0;
            d = d.toUpperCase();
            e = e.toUpperCase();
            if ("" === d || p === e || (p === d ? n !== e : !p && !n)) {
                var q = !!(f && 0 < f && void 0 === k.update)
                  , t = {
                    region: p,
                    initial: "granted" === b,
                    update: k.update,
                    quiet: q
                };
                if ("" !== d || !1 !== k.initial)
                    h[a] = t;
                q && A.setTimeout(function() {
                    h[a] === t && t.quiet && (t.quiet = !1,
                    Gg(a),
                    Fg(),
                    tg("TAGGING", 2))
                }, f)
            }
        }
    }
    function Dg(a, b) {
        var c = Bg();
        c.usedDefault || c.usedUpdate || !c.accessedAny || (c.wasSetLate = !0);
        c.active = !0;
        c.usedUpdate = !0;
        if (void 0 != b) {
            var d = Hg(a)
              , e = c.entries
              , f = e[a] = e[a] || {};
            f.update = "granted" === b;
            var g = Hg(a);
            f.quiet ? (f.quiet = !1,
            Gg(a)) : g !== d && Gg(a)
        }
    }
    function Eg(a, b) {
        Ag.push({
            lf: a,
            qj: b
        })
    }
    function Gg(a) {
        for (var b = 0; b < Ag.length; ++b) {
            var c = Ag[b];
            Ka(c.lf) && -1 !== c.lf.indexOf(a) && (c.xh = !0)
        }
    }
    function Fg(a) {
        for (var b = 0; b < Ag.length; ++b) {
            var c = Ag[b];
            if (c.xh) {
                c.xh = !1;
                try {
                    c.qj({
                        consentEventId: a
                    })
                } catch (d) {}
            }
        }
    }
    var Hg = function(a) {
        var b = Bg();
        b.accessedAny = !0;
        var c = b.entries[a] || {};
        return void 0 !== c.update ? c.update : c.initial
    }
      , Ig = function(a) {
        var b = Bg();
        b.accessedDefault = !0;
        return (b.entries[a] || {}).initial
    }
      , Jg = function(a) {
        var b = Bg();
        b.accessedAny = !0;
        return !(b.entries[a] || {}).quiet
    }
      , Kg = function() {
        if (!zg().g())
            return !1;
        var a = Bg();
        a.accessedAny = !0;
        return a.active
    }
      , Lg = function() {
        var a = Bg();
        a.accessedDefault = !0;
        return a.usedDefault
    }
      , Mg = function(a, b) {
        Bg().addListener(a, b)
    }
      , Ng = function(a) {
        Bg().notifyListeners(a)
    }
      , Og = function(a, b) {
        function c() {
            for (var e = 0; e < b.length; e++)
                if (!Jg(b[e]))
                    return !0;
            return !1
        }
        if (c()) {
            var d = !1;
            Mg(b, function(e) {
                d || c() || (d = !0,
                a(e))
            })
        } else
            a({})
    }
      , Pg = function(a, b) {
        function c() {
            for (var f = [], g = 0; g < d.length; g++) {
                var h = d[g];
                !1 === Hg(h) || e[h] || (f.push(h),
                e[h] = !0)
            }
            return f
        }
        var d = m(b) ? [b] : b
          , e = {};
        c().length !== d.length && Mg(d, function(f) {
            var g = c();
            0 < g.length && (f.lf = g,
            a(f))
        })
    };
    function Qg() {}
    function Rg() {}
    ;function Sg(a) {
        for (var b = [], c = 0; c < Tg.length; c++) {
            var d = a(Tg[c]);
            b[c] = !0 === d ? "1" : !1 === d ? "0" : "-"
        }
        return b.join("")
    }
    var Tg = [U.D, U.N]
      , Ug = function(a) {
        var b = a[U.pe];
        b && wg(40);
        var c = a[U.Sf];
        c && wg(41);
        for (var d = Ka(b) ? b : [b], e = {
            sc: 0
        }; e.sc < d.length; e = {
            sc: e.sc
        },
        ++e.sc)
            Ra(a, function(f) {
                return function(g, h) {
                    if (g !== U.pe && g !== U.Sf) {
                        var k = d[f.sc]
                          , n = rg.ah
                          , p = rg.Bh;
                        Bg().set(g, h, k, n, p, c)
                    }
                }
            }(e))
    }
      , Vg = 0
      , Wg = function(a, b) {
        Ra(a, function(e, f) {
            Bg().update(e, f)
        });
        Ng(b);
        var c = Ya()
          , d = c - Vg;
        Vg && 0 <= d && 1E3 > d && wg(66);
        Vg = c
    }
      , Xg = function(a) {
        var b = Hg(a);
        return void 0 != b ? b : !0
    }
      , Yg = function() {
        return "G1" + Sg(Hg)
    }
      , Zg = function() {
        return "G1" + Sg(Ig)
    }
      , $g = function(a, b) {
        Mg(a, b)
    }
      , ah = function(a, b) {
        Pg(a, b)
    }
      , bh = function(a, b) {
        Og(a, b)
    };
    var dh = function(a) {
        return ch ? I.querySelectorAll(a) : null
    }
      , eh = function(a, b) {
        if (!ch)
            return null;
        if (Element.prototype.closest)
            try {
                return a.closest(b)
            } catch (e) {
                return null
            }
        var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector
          , d = a;
        if (!I.documentElement.contains(d))
            return null;
        do {
            try {
                if (c.call(d, b))
                    return d
            } catch (e) {
                break
            }
            d = d.parentElement || d.parentNode
        } while (null !== d && 1 === d.nodeType);
        return null
    }
      , fh = !1;
    if (I.querySelectorAll)
        try {
            var gh = I.querySelectorAll(":root");
            gh && 1 == gh.length && gh[0] == I.documentElement && (fh = !0)
        } catch (a) {}
    var ch = fh;
    var hh = function(a) {
        return null == a ? "" : m(a) ? Wa(String(a)) : "e0"
    }
      , jh = function(a) {
        return a.replace(ih, "")
    }
      , lh = function(a) {
        return kh(a.replace(/\s/g, ""))
    }
      , kh = function(a) {
        return Wa(a.replace(mh, "").toLowerCase())
    }
      , oh = function(a) {
        a = a.replace(/[\s-()/.]/g, "");
        "+" !== a.charAt(0) && (a = "+" + a);
        return nh.test(a) ? a : "e0"
    }
      , qh = function(a) {
        var b = a.toLowerCase().split("@");
        if (2 == b.length) {
            var c = b[0];
            /^(gmail|googlemail)\./.test(b[1]) && (c = c.replace(/\./g, ""));
            c = c + "@" + b[1];
            if (ph.test(c))
                return c
        }
        return "e0"
    }
      , wh = function(a, b) {
        window.Promise || b([]);
        Promise.all(a.map(function(c) {
            return c.value && -1 !== rh.indexOf(c.name) ? sh(c.value).then(function(d) {
                c.value = d
            }) : Promise.resolve()
        })).then(function() {
            b(a)
        }).catch(function() {
            b([])
        })
    }
      , sh = function(a) {
        if ("" === a || "e0" === a)
            return Promise.resolve(a);
        if (A.crypto && A.crypto.subtle)
            try {
                var b = xh(a);
                return A.crypto.subtle.digest("SHA-256", b).then(function(c) {
                    var d = Array.from(new Uint8Array(c)).map(function(e) {
                        return String.fromCharCode(e)
                    }).join("");
                    return A.btoa(d).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
                }).catch(function() {
                    return "e2"
                })
            } catch (c) {
                return Promise.resolve("e2")
            }
        else
            return Promise.resolve("e1")
    }
      , xh = function(a) {
        var b;
        if (A.TextEncoder)
            b = (new A.TextEncoder("utf-8")).encode(a);
        else {
            for (var c = [], d = 0; d < a.length; d++) {
                var e = a.charCodeAt(d);
                128 > e ? c.push(e) : 2048 > e ? c.push(192 | e >> 6, 128 | e & 63) : 55296 > e || 57344 <= e ? c.push(224 | e >> 12, 128 | e >> 6 & 63, 128 | e & 63) : (e = 65536 + ((e & 1023) << 10 | a.charCodeAt(++d) & 1023),
                c.push(240 | e >> 18, 128 | e >> 12 & 63, 128 | e >> 6 & 63, 128 | e & 63))
            }
            b = new Uint8Array(c)
        }
        return b
    }
      , mh = /[0-9`~!@#$%^&*()_\-+=:;<>,.?|/\\[\]]/g
      , ph = /^\S+@\S+\.\S+$/
      , nh = /^\+\d{11,15}$/
      , ih = /[.~]/g
      , yh = {}
      , zh = (yh.email = "em",
    yh.phone_number = "pn",
    yh.first_name = "fn",
    yh.last_name = "ln",
    yh.street = "sa",
    yh.city = "ct",
    yh.region = "rg",
    yh.country = "co",
    yh.postal_code = "pc",
    yh.error_code = "ec",
    yh)
      , Ah = function(a, b) {
        function c(n, p, q) {
            var t = n[p];
            Ka(t) || (t = [t]);
            for (var u = 0; u < t.length; ++u) {
                var r = hh(t[u]);
                "" !== r && f.push({
                    name: p,
                    value: q(r),
                    index: void 0
                })
            }
        }
        function d(n, p, q, t) {
            var u = hh(n[p]);
            "" !== u && f.push({
                name: p,
                value: q(u),
                index: t
            })
        }
        function e(n) {
            return function(p) {
                wg(64);
                return n(p)
            }
        }
        var f = [];
        if ("https:" === A.location.protocol) {
            c(a, "email", qh);
            c(a, "phone_number", oh);
            c(a, "first_name", e(lh));
            c(a, "last_name", e(lh));
            var g = a.home_address || {};
            c(g, "street", e(kh));
            c(g, "city", e(kh));
            c(g, "postal_code", e(jh));
            c(g, "region", e(kh));
            c(g, "country", e(jh));
            var h = a.address || {};
            Ka(h) || (h = [h]);
            for (var k = 0; k < h.length; k++)
                d(h[k], "first_name", lh, k),
                d(h[k], "last_name", lh, k),
                d(h[k], "street", kh, k),
                d(h[k], "city", kh, k),
                d(h[k], "postal_code", jh, k),
                d(h[k], "region", kh, k),
                d(h[k], "country", jh, k);
            wh(f, b)
        } else
            f.push({
                name: "error_code",
                value: "e3",
                index: void 0
            }),
            b(f)
    }
      , Bh = function(a, b) {
        Ah(a, function(c) {
            for (var d = ["tv.1"], e = 0, f = 0; f < c.length; ++f) {
                var g = c[f].name
                  , h = c[f].value
                  , k = c[f].index
                  , n = zh[g];
                n && h && (-1 === rh.indexOf(g) || /^e\d+$/.test(h) || /^[0-9A-Za-z_-]{43}$/.test(h)) && (void 0 !== k && (n += k),
                d.push(n + "." + h),
                e++)
            }
            1 === c.length && "error_code" === c[0].name && (e = 0);
            b(encodeURIComponent(d.join("~")), e)
        })
    }
      , Ch = function(a) {
        if (A.Promise)
            try {
                return new Promise(function(b) {
                    Bh(a, function(c, d) {
                        b({
                            fd: c,
                            Mk: d
                        })
                    })
                }
                )
            } catch (b) {}
    }
      , rh = Object.freeze(["email", "phone_number", "first_name", "last_name", "street"]);
    var Dh = function() {
        this.eventModel = {};
        this.targetConfig = {};
        this.containerConfig = {};
        this.globalConfig = {};
        this.remoteConfig = {};
        this.onSuccess = function() {}
        ;
        this.onFailure = function() {}
        ;
        this.setContainerTypeLoaded = function() {}
        ;
        this.getContainerTypeLoaded = function() {}
        ;
        this.eventId = void 0;
        this.isGtmEvent = !1
    }
      , Eh = function(a) {
        var b = new Dh;
        b.eventModel = a;
        return b
    }
      , Fh = function(a, b) {
        a.targetConfig = b;
        return a
    }
      , Gh = function(a, b) {
        a.containerConfig = b;
        return a
    }
      , Hh = function(a, b) {
        a.globalConfig = b;
        return a
    }
      , Ih = function(a, b) {
        a.remoteConfig = b;
        return a
    }
      , Jh = function(a, b) {
        a.onSuccess = b;
        return a
    }
      , Kh = function(a, b) {
        a.setContainerTypeLoaded = b;
        return a
    }
      , Lh = function(a, b) {
        a.getContainerTypeLoaded = b;
        return a
    }
      , Mh = function(a, b) {
        a.onFailure = b;
        return a
    };
    Dh.prototype.getWithConfig = function(a) {
        if (void 0 !== this.eventModel[a])
            return this.eventModel[a];
        if (void 0 !== this.targetConfig[a])
            return this.targetConfig[a];
        if (void 0 !== this.containerConfig[a])
            return this.containerConfig[a];
        if (void 0 !== this.globalConfig[a])
            return this.globalConfig[a];
        if (void 0 !== this.remoteConfig[a])
            return this.remoteConfig[a]
    }
    ;
    var Nh = function(a) {
        function b(d) {
            for (var e = Object.keys(d), f = 0; f < e.length; ++f)
                c[e[f]] = 1
        }
        var c = {};
        b(a.eventModel);
        b(a.targetConfig);
        b(a.containerConfig);
        b(a.globalConfig);
        return Object.keys(c)
    }
      , Oh = function(a, b, c) {
        function d(g) {
            xc(g) && Ra(g, function(h, k) {
                f = !0;
                e[h] = k
            })
        }
        var e = {}
          , f = !1;
        c && 1 !== c || (d(a.remoteConfig[b]),
        d(a.globalConfig[b]),
        d(a.containerConfig[b]),
        d(a.targetConfig[b]));
        c && 2 !== c || d(a.eventModel[b]);
        return f ? e : void 0
    }
      , Ph = function(a) {
        var b = [U.zc, U.$f, U.ag, U.bg, U.cg, U.dg, U.eg]
          , c = {}
          , d = !1
          , e = function(f) {
            for (var g = 0; g < b.length; g++)
                void 0 !== f[b[g]] && (c[b[g]] = f[b[g]],
                d = !0);
            return d
        };
        if (e(a.eventModel) || e(a.targetConfig) || e(a.containerConfig) || e(a.globalConfig))
            return c;
        e(a.remoteConfig);
        return c
    }
      , Qh = function(a) {
        var b = [], c;
        for (c in a.eventModel)
            c !== U.cc && a.eventModel.hasOwnProperty(c) && void 0 !== a.eventModel[c] && b.push(c);
        return b
    };
    var L = {}
      , Rh = A.google_tag_manager = A.google_tag_manager || {}
      , Sh = Math.random();
    L.J = "G-2SSGMHY3NP";
    L.Ld = "270";
    L.Z = "dataLayer";
    L.Wh = "ChEIgOmNkAYQ/tnR6ozo4ZWPARIlAL2CDezPZslna5kOCyX5IRiazZRgnlE64iDg8CuDiQRpt6pTZRoCGMA\x3d";
    var Th = {
        __cl: !0,
        __ecl: !0,
        __ehl: !0,
        __evl: !0,
        __fal: !0,
        __fil: !0,
        __fsl: !0,
        __hl: !0,
        __jel: !0,
        __lcl: !0,
        __sdl: !0,
        __tl: !0,
        __ytl: !0
    }, Uh = {
        __paused: !0,
        __tg: !0
    }, Vh;
    for (Vh in Th)
        Th.hasOwnProperty(Vh) && (Uh[Vh] = !0);
    L.se = "www.googletagmanager.com";
    var Wh, Xh = L.se + "/gtm.js";
    Xh = L.se + "/gtag/js";
    Wh = Xh;
    var Yh = Ua("")
      , Zh = null
      , $h = null
      , ai = "https://www.googletagmanager.com/a?id=" + L.J + "&cv=1"
      , bi = {}
      , ci = {}
      , di = function() {
        var a = Rh.sequence || 1;
        Rh.sequence = a + 1;
        return a
    };
    L.Vh = "";
    var ei = "";
    L.Md = ei;
    var fi = new Pa
      , gi = {}
      , hi = {}
      , ki = {
        name: L.Z,
        set: function(a, b) {
            yc(eb(a, b), gi);
            ii()
        },
        get: function(a) {
            return ji(a, 2)
        },
        reset: function() {
            fi = new Pa;
            gi = {};
            ii()
        }
    }
      , ji = function(a, b) {
        return 2 != b ? fi.get(a) : li(a)
    }
      , li = function(a, b) {
        var c = a.split(".");
        b = b || [];
        for (var d = gi, e = 0; e < c.length; e++) {
            if (null === d)
                return !1;
            if (void 0 === d)
                break;
            d = d[c[e]];
            if (-1 !== b.indexOf(d))
                return
        }
        return d
    }
      , mi = function(a, b) {
        hi.hasOwnProperty(a) || (fi.set(a, b),
        yc(eb(a, b), gi),
        ii())
    }
      , ni = function() {
        for (var a = ["gtm.allowlist", "gtm.blocklist", "gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"], b = 0; b < a.length; b++) {
            var c = a[b]
              , d = ji(c, 1);
            if (Ka(d) || xc(d))
                d = yc(d);
            hi[c] = d
        }
    }
      , ii = function(a) {
        Ra(hi, function(b, c) {
            fi.set(b, c);
            yc(eb(b, void 0), gi);
            yc(eb(b, c), gi);
            a && delete hi[b]
        })
    }
      , oi = function(a, b) {
        var c, d = 1 !== (void 0 === b ? 2 : b) ? li(a) : fi.get(a);
        "array" === vc(d) || "object" === vc(d) ? c = yc(d) : c = d;
        return c
    };
    var pi, qi = !1;
    function ri() {
        qi = !0;
        pi = pi || {}
    }
    var si = function(a) {
        qi || ri();
        return pi[a]
    };
    var ti = function(a) {
        if (I.hidden)
            return !0;
        var b = a.getBoundingClientRect();
        if (b.top == b.bottom || b.left == b.right || !A.getComputedStyle)
            return !0;
        var c = A.getComputedStyle(a, null);
        if ("hidden" === c.visibility)
            return !0;
        for (var d = a, e = c; d; ) {
            if ("none" === e.display)
                return !0;
            var f = e.opacity
              , g = e.filter;
            if (g) {
                var h = g.indexOf("opacity(");
                0 <= h && (g = g.substring(h + 8, g.indexOf(")", h)),
                "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)),
                f = Math.min(g, f))
            }
            if (void 0 !== f && 0 >= f)
                return !0;
            (d = d.parentElement) && (e = A.getComputedStyle(d, null))
        }
        return !1
    };
    var Ci = /:[0-9]+$/
      , Di = function(a, b, c, d) {
        for (var e = [], f = a.split("&"), g = 0; g < f.length; g++) {
            var h = f[g].split("=");
            if (decodeURIComponent(h[0]).replace(/\+/g, " ") === b) {
                var k = h.slice(1).join("=");
                if (!c)
                    return d ? k : decodeURIComponent(k).replace(/\+/g, " ");
                e.push(d ? k : decodeURIComponent(k).replace(/\+/g, " "))
            }
        }
        return c ? e : void 0
    }
      , Gi = function(a, b, c, d, e) {
        b && (b = String(b).toLowerCase());
        if ("protocol" === b || "port" === b)
            a.protocol = Ei(a.protocol) || Ei(A.location.protocol);
        "port" === b ? a.port = String(Number(a.hostname ? a.port : A.location.port) || ("http" == a.protocol ? 80 : "https" == a.protocol ? 443 : "")) : "host" === b && (a.hostname = (a.hostname || A.location.hostname).replace(Ci, "").toLowerCase());
        return Fi(a, b, c, d, e)
    }
      , Fi = function(a, b, c, d, e) {
        var f, g = Ei(a.protocol);
        b && (b = String(b).toLowerCase());
        switch (b) {
        case "url_no_fragment":
            f = Hi(a);
            break;
        case "protocol":
            f = g;
            break;
        case "host":
            f = a.hostname.replace(Ci, "").toLowerCase();
            if (c) {
                var h = /^www\d*\./.exec(f);
                h && h[0] && (f = f.substr(h[0].length))
            }
            break;
        case "port":
            f = String(Number(a.port) || ("http" == g ? 80 : "https" == g ? 443 : ""));
            break;
        case "path":
            a.pathname || a.hostname || tg("TAGGING", 1);
            f = "/" == a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
            var k = f.split("/");
            0 <= (d || []).indexOf(k[k.length - 1]) && (k[k.length - 1] = "");
            f = k.join("/");
            break;
        case "query":
            f = a.search.replace("?", "");
            e && (f = Di(f, e, !1, void 0));
            break;
        case "extension":
            var n = a.pathname.split(".");
            f = 1 < n.length ? n[n.length - 1] : "";
            f = f.split("/")[0];
            break;
        case "fragment":
            f = a.hash.replace("#", "");
            break;
        default:
            f = a && a.href
        }
        return f
    }
      , Ei = function(a) {
        return a ? a.replace(":", "").toLowerCase() : ""
    }
      , Hi = function(a) {
        var b = "";
        if (a && a.href) {
            var c = a.href.indexOf("#");
            b = 0 > c ? a.href : a.href.substr(0, c)
        }
        return b
    }
      , Ii = function(a) {
        var b = I.createElement("a");
        a && (b.href = a);
        var c = b.pathname;
        "/" !== c[0] && (a || tg("TAGGING", 1),
        c = "/" + c);
        var d = b.hostname.replace(Ci, "");
        return {
            href: b.href,
            protocol: b.protocol,
            host: b.host,
            hostname: d,
            pathname: c,
            search: b.search,
            hash: b.hash,
            port: b.port
        }
    }
      , Ji = function(a) {
        function b(n) {
            var p = n.split("=")[0];
            return 0 > d.indexOf(p) ? n : p + "=0"
        }
        function c(n) {
            return n.split("&").map(b).filter(function(p) {
                return void 0 != p
            }).join("&")
        }
        var d = "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" ")
          , e = Ii(a)
          , f = a.split(/[?#]/)[0]
          , g = e.search
          , h = e.hash;
        "?" === g[0] && (g = g.substring(1));
        "#" === h[0] && (h = h.substring(1));
        g = c(g);
        h = c(h);
        "" !== g && (g = "?" + g);
        "" !== h && (h = "#" + h);
        var k = "" + f + g + h;
        "/" === k[k.length - 1] && (k = k.substring(0, k.length - 1));
        return k
    };
    var Ki = {};
    var Ni = function(a) {
        if (0 == a.length)
            return null;
        var b;
        b = Li(a, function(c) {
            return !Mi.test(c.Ta)
        });
        b = Li(b, function(c) {
            return "INPUT" === c.element.tagName.toUpperCase()
        });
        b = Li(b, function(c) {
            return !ti(c.element)
        });
        return b[0]
    }
      , Li = function(a, b) {
        if (1 >= a.length)
            return a;
        var c = a.filter(b);
        return 0 == c.length ? a : c
    }
      , Oi = function(a) {
        var b;
        if (a === I.body)
            b = "body";
        else {
            var c;
            if (a.id)
                c = "#" + a.id;
            else {
                var d;
                if (a.parentElement) {
                    var e;
                    a: {
                        var f = a.parentElement;
                        if (f) {
                            for (var g = 0; g < f.childElementCount; g++)
                                if (f.children[g] === a) {
                                    e = g + 1;
                                    break a
                                }
                            e = -1
                        } else
                            e = 1
                    }
                    d = Oi(a.parentElement) + ">:nth-child(" + e + ")"
                } else
                    d = "";
                c = d
            }
            b = c
        }
        return b
    }
      , Pi = !0
      , Qi = !1;
    Ki.Sh = "true";
    var Ri = function(a) {
        if ("false" === Ki.Sh || !Pi)
            return !1;
        if (Qi)
            return !0;
        var b = si("AW-" + a);
        return !!b && !!b.preAutoPii
    }
      , Si = new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i)
      , Ti = new RegExp(/@(gmail|googlemail)\./i)
      , Mi = new RegExp(/support|noreply/i)
      , Ui = "SCRIPT STYLE IMG SVG PATH BR".split(" ")
      , Vi = ["BR"]
      , Wi = {}
      , Xi = function(a) {
        a = a || {
            ee: !0,
            fe: !0
        };
        a.sb = a.sb || {
            email: !0,
            phone: !0,
            Tg: !0
        };
        var b, c = a, d = !!c.ee + "." + !!c.fe;
        c && c.Vc && c.Vc.length && (d += "." + c.Vc.join("."));
        c && c.sb && (d += "." + c.sb.email + "." + c.sb.phone + "." + c.sb.Tg);
        b = d;
        var e = Wi[b];
        if (e && 200 > Ya() - e.timestamp)
            return e.result;
        var f;
        var g = []
          , h = I.body;
        if (h) {
            for (var k = h.querySelectorAll("*"), n = 0; n < k.length && 1E4 > n; n++) {
                var p = k[n];
                if (!(0 <= Ui.indexOf(p.tagName.toUpperCase())) && p.children instanceof HTMLCollection) {
                    for (var q = !1, t = 0; t < p.childElementCount && 1E4 > t; t++)
                        if (!(0 <= Vi.indexOf(p.children[t].tagName.toUpperCase()))) {
                            q = !0;
                            break
                        }
                    q || g.push(p)
                }
            }
            f = {
                elements: g,
                status: 1E4 < k.length ? "2" : "1"
            }
        } else
            f = {
                elements: g,
                status: "4"
            };
        var u = f, r = u.status, v;
        if (a.sb && a.sb.email) {
            for (var w = u.elements, y = [], x = 0; x < w.length; x++) {
                var z = w[x]
                  , B = z.textContent;
                "INPUT" === z.tagName.toUpperCase() && z.value && (B = z.value);
                if (B) {
                    var C = B.match(Si);
                    if (C) {
                        var D = C[0], E;
                        if (A.location) {
                            var G = Fi(A.location, "host", !0);
                            E = 0 <= D.toLowerCase().indexOf(G)
                        } else
                            E = !1;
                        E || y.push({
                            element: z,
                            Ta: D
                        })
                    }
                }
            }
            var S;
            var O = a && a.Vc;
            if (O && 0 !== O.length) {
                for (var K = [], R = 0; R < y.length; R++) {
                    for (var P = !0, M = 0; M < O.length; M++) {
                        var T = O[M];
                        if (T && eh(y[R].element, T)) {
                            P = !1;
                            break
                        }
                    }
                    P && K.push(y[R])
                }
                S = K
            } else
                S = y;
            v = Ni(S);
            10 < y.length && (r = "3")
        }
        var ka = [];
        if (v) {
            var V = v.element
              , Ga = {
                Ta: v.Ta,
                tagName: V.tagName,
                type: 1
            };
            a.ee && (Ga.querySelector = Oi(V));
            a.fe && (Ga.isVisible = !ti(V));
            ka.push(Ga)
        }
        var La = {
            elements: ka,
            status: r
        };
        Wi[b] = {
            timestamp: Ya(),
            result: La
        };
        return La
    }
      , Yi = function(a) {
        return a.tagName + ":" + a.isVisible + ":" + a.Ta.length + ":" + Ti.test(a.Ta)
    };
    var Zi = function(a, b, c) {
        if (c) {
            var d = c.selector_type, e = String(c.value), f;
            if ("js_variable" === d) {
                e = e.replace(/\["?'?/g, ".").replace(/"?'?\]/g, "");
                for (var g = e.split(","), h = 0; h < g.length; h++) {
                    var k = g[h].trim();
                    if (k) {
                        if (0 === k.indexOf("dataLayer."))
                            f = ji(k.substring(10));
                        else {
                            var n = k.split(".");
                            f = A[n.shift()];
                            for (var p = 0; p < n.length; p++)
                                f = f && f[n[p]]
                        }
                        if (void 0 !== f)
                            break
                    }
                }
            } else if ("css_selector" === d && ch) {
                var q = dh(e);
                q && 0 < q.length && (f = dc(q[0]) || Wa(q[0].value))
            }
            f && (a[b] = f)
        }
    }
      , $i = function(a) {
        if (a) {
            var b = {};
            Zi(b, "email", a.email);
            Zi(b, "phone_number", a.phone);
            b.address = [];
            for (var c = a.name_and_address || [], d = 0; d < c.length; d++) {
                var e = {};
                Zi(e, "first_name", c[d].first_name);
                Zi(e, "last_name", c[d].last_name);
                Zi(e, "street", c[d].street);
                Zi(e, "city", c[d].city);
                Zi(e, "region", c[d].region);
                Zi(e, "country", c[d].country);
                Zi(e, "postal_code", c[d].postal_code);
                b.address.push(e)
            }
            return b
        }
    }
      , aj = function(a) {
        if (a)
            switch (a.mode) {
            case "selectors":
                return $i(a.selectors);
            case "auto_detect":
                var b;
                var c = a.auto_detect;
                if (c) {
                    var d = Xi({
                        ee: !1,
                        fe: !1,
                        Vc: c.exclude_element_selectors,
                        sb: {
                            email: !!c.email,
                            phone: !!c.phone,
                            Tg: !!c.address
                        }
                    }).elements
                      , e = {};
                    if (0 < d.length)
                        for (var f = 0; f < d.length; f++) {
                            var g = d[f];
                            if (1 === g.type) {
                                e.email = g.Ta;
                                break
                            }
                        }
                    b = e
                } else
                    b = void 0;
                return b
            }
    }
      , bj = function(a) {
        switch (a.enhanced_conversions_mode) {
        case "manual":
            var b = a.enhanced_conversions_manual_var;
            return void 0 !== b ? b : A.enhanced_conversion_data;
        case "automatic":
            return $i(a[U.jg])
        }
    };
    var cj = {}
      , dj = function(a, b) {
        if (A._gtmexpgrp && A._gtmexpgrp.hasOwnProperty(a))
            return A._gtmexpgrp[a];
        void 0 === cj[a] && (cj[a] = Math.floor(Math.random() * b));
        return cj[a]
    };
    var ej = function(a) {
        var b = 1, c, d, e;
        if (a)
            for (b = 0,
            d = a.length - 1; 0 <= d; d--)
                e = a.charCodeAt(d),
                b = (b << 6 & 268435455) + e + (e << 14),
                c = b & 266338304,
                b = 0 != c ? b ^ c >> 21 : b;
        return b
    };
    var fj = function(a, b, c) {
        for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
            var g = e[f].split("=")
              , h = g[0].replace(/^\s*|\s*$/g, "");
            if (h && h == a) {
                var k = g.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                k && c && (k = decodeURIComponent(k));
                d.push(k)
            }
        }
        return d
    };
    var gj = function(a, b) {
        var c = function() {};
        c.prototype = a.prototype;
        var d = new c;
        a.apply(d, Array.prototype.slice.call(arguments, 1));
        return d
    }
      , hj = function(a) {
        var b = a;
        return function() {
            if (b) {
                var c = b;
                b = null;
                c()
            }
        }
    };
    function ij(a) {
        return "null" !== a.origin
    }
    ;var lj = function(a, b, c, d) {
        return jj(d) ? fj(a, String(b || kj()), c) : []
    }
      , oj = function(a, b, c, d, e) {
        if (jj(e)) {
            var f = mj(a, d, e);
            if (1 === f.length)
                return f[0].id;
            if (0 !== f.length) {
                f = nj(f, function(g) {
                    return g.Vd
                }, b);
                if (1 === f.length)
                    return f[0].id;
                f = nj(f, function(g) {
                    return g.gd
                }, c);
                return f[0] ? f[0].id : void 0
            }
        }
    };
    function pj(a, b, c, d) {
        var e = kj()
          , f = window;
        ij(f) && (f.document.cookie = a);
        var g = kj();
        return e != g || void 0 != c && 0 <= lj(b, g, !1, d).indexOf(c)
    }
    var tj = function(a, b, c, d) {
        function e(w, y, x) {
            if (null == x)
                return delete h[y],
                w;
            h[y] = x;
            return w + "; " + y + "=" + x
        }
        function f(w, y) {
            if (null == y)
                return delete h[y],
                w;
            h[y] = !0;
            return w + "; " + y
        }
        if (!jj(c.fb))
            return 2;
        var g;
        void 0 == b ? g = a + "=deleted; expires=" + (new Date(0)).toUTCString() : (c.encode && (b = encodeURIComponent(b)),
        b = qj(b),
        g = a + "=" + b);
        var h = {};
        g = e(g, "path", c.path);
        var k;
        c.expires instanceof Date ? k = c.expires.toUTCString() : null != c.expires && (k = "" + c.expires);
        g = e(g, "expires", k);
        g = e(g, "max-age", c.Qj);
        g = e(g, "samesite", c.kk);
        c.mk && (g = f(g, "secure"));
        var n = c.domain;
        if (n && "auto" === n.toLowerCase()) {
            for (var p = rj(), q = void 0, t = !1, u = 0; u < p.length; ++u) {
                var r = "none" !== p[u] ? p[u] : void 0
                  , v = e(g, "domain", r);
                v = f(v, c.flags);
                try {
                    d && d(a, h)
                } catch (w) {
                    q = w;
                    continue
                }
                t = !0;
                if (!sj(r, c.path) && pj(v, a, b, c.fb))
                    return 0
            }
            if (q && !t)
                throw q;
            return 1
        }
        n && "none" !== n.toLowerCase() && (g = e(g, "domain", n));
        g = f(g, c.flags);
        d && d(a, h);
        return sj(n, c.path) ? 1 : pj(g, a, b, c.fb) ? 0 : 1
    }
      , uj = function(a, b, c) {
        null == c.path && (c.path = "/");
        c.domain || (c.domain = "auto");
        return tj(a, b, c)
    };
    function nj(a, b, c) {
        for (var d = [], e = [], f, g = 0; g < a.length; g++) {
            var h = a[g]
              , k = b(h);
            k === c ? d.push(h) : void 0 === f || k < f ? (e = [h],
            f = k) : k === f && e.push(h)
        }
        return 0 < d.length ? d : e
    }
    function mj(a, b, c) {
        for (var d = [], e = lj(a, void 0, void 0, c), f = 0; f < e.length; f++) {
            var g = e[f].split(".")
              , h = g.shift();
            if (!b || -1 !== b.indexOf(h)) {
                var k = g.shift();
                k && (k = k.split("-"),
                d.push({
                    id: g.join("."),
                    Vd: 1 * k[0] || 1,
                    gd: 1 * k[1] || 1
                }))
            }
        }
        return d
    }
    var qj = function(a) {
        a && 1200 < a.length && (a = a.substring(0, 1200));
        return a
    }
      , vj = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/
      , wj = /(^|\.)doubleclick\.net$/i
      , sj = function(a, b) {
        return wj.test(window.document.location.hostname) || "/" === b && vj.test(a)
    }
      , kj = function() {
        return ij(window) ? window.document.cookie : ""
    }
      , rj = function() {
        var a = []
          , b = window.document.location.hostname.split(".");
        if (4 === b.length) {
            var c = b[b.length - 1];
            if (parseInt(c, 10).toString() === c)
                return ["none"]
        }
        for (var d = b.length - 2; 0 <= d; d--)
            a.push(b.slice(d).join("."));
        var e = window.document.location.hostname;
        wj.test(e) || vj.test(e) || a.push("none");
        return a
    }
      , jj = function(a) {
        if (!zg().g() || !a || !Kg())
            return !0;
        if (!Jg(a))
            return !1;
        var b = Hg(a);
        return null == b ? !0 : !!b
    };
    var xj = function(a) {
        var b = Math.round(2147483647 * Math.random());
        return a ? String(b ^ ej(a) & 2147483647) : String(b)
    }
      , yj = function(a) {
        return [xj(a), Math.round(Ya() / 1E3)].join(".")
    }
      , Bj = function(a, b, c, d, e) {
        var f = zj(b);
        return oj(a, f, Aj(c), d, e)
    }
      , Cj = function(a, b, c, d) {
        var e = "" + zj(c)
          , f = Aj(d);
        1 < f && (e += "-" + f);
        return [b, e, a].join(".")
    }
      , zj = function(a) {
        if (!a)
            return 1;
        a = 0 === a.indexOf(".") ? a.substr(1) : a;
        return a.split(".").length
    }
      , Aj = function(a) {
        if (!a || "/" === a)
            return 1;
        "/" !== a[0] && (a = "/" + a);
        "/" !== a[a.length - 1] && (a += "/");
        return a.split("/").length - 1
    };
    function Dj(a, b, c) {
        var d, e = Number(null != a.Ob ? a.Ob : void 0);
        0 !== e && (d = new Date((b || Ya()) + 1E3 * (e || 7776E3)));
        return {
            path: a.path,
            domain: a.domain,
            flags: a.flags,
            encode: !!c,
            expires: d
        }
    }
    ;var Ej = ["1"]
      , Fj = {}
      , Gj = {}
      , Kj = function(a, b) {
        b = void 0 === b ? !0 : b;
        var c = Hj(a.prefix);
        if (!Fj[c] && !Ij(c, a.path, a.domain) && b) {
            var d = Hj(a.prefix)
              , e = yj();
            if (0 === Jj(d, e, a)) {
                var f = Rb("google_tag_data", {});
                f._gcl_au ? tg("GTM", 57) : f._gcl_au = e
            }
            Ij(c, a.path, a.domain)
        }
    };
    function Jj(a, b, c, d) {
        var e = Cj(b, "1", c.domain, c.path)
          , f = Dj(c, d);
        f.fb = "ad_storage";
        return uj(a, e, f)
    }
    function Ij(a, b, c) {
        var d = Bj(a, b, c, Ej, "ad_storage");
        if (!d)
            return !1;
        var e = d.split(".");
        5 === e.length ? (Fj[a] = e.slice(0, 2).join("."),
        Gj[a] = {
            id: e.slice(2, 4).join("."),
            ph: Number(e[4]) || 0
        }) : 3 === e.length ? Gj[a] = {
            id: e.slice(0, 2).join("."),
            ph: Number(e[2]) || 0
        } : Fj[a] = d;
        return !0
    }
    function Hj(a) {
        return (a || "_gcl") + "_au"
    }
    ;var Lj = function(a) {
        for (var b = [], c = I.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) {
            var f = c[e].match(d);
            f && b.push({
                Of: f[1],
                value: f[2],
                timestamp: Number(f[2].split(".")[1]) || 0
            })
        }
        b.sort(function(g, h) {
            return h.timestamp - g.timestamp
        });
        return b
    };
    function Mj(a, b) {
        var c = Lj(a)
          , d = {};
        if (!c || !c.length)
            return d;
        for (var e = 0; e < c.length; e++) {
            var f = c[e].value.split(".");
            if (!("1" !== f[0] || b && 3 > f.length || !b && 3 !== f.length) && Number(f[1])) {
                d[c[e].Of] || (d[c[e].Of] = []);
                var g = {
                    version: f[0],
                    timestamp: 1E3 * Number(f[1]),
                    ya: f[2]
                };
                b && 3 < f.length && (g.labels = f.slice(3));
                d[c[e].Of].push(g)
            }
        }
        return d
    }
    ;function Nj() {
        for (var a = Oj, b = {}, c = 0; c < a.length; ++c)
            b[a[c]] = c;
        return b
    }
    function Pj() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + "."
    }
    var Oj, Qj;
    function Rj(a) {
        function b(k) {
            for (; d < a.length; ) {
                var n = a.charAt(d++)
                  , p = Qj[n];
                if (null != p)
                    return p;
                if (!/^[\s\xa0]*$/.test(n))
                    throw Error("Unknown base64 encoding at char: " + n);
            }
            return k
        }
        Oj = Oj || Pj();
        Qj = Qj || Nj();
        for (var c = "", d = 0; ; ) {
            var e = b(-1)
              , f = b(0)
              , g = b(64)
              , h = b(64);
            if (64 === h && -1 === e)
                return c;
            c += String.fromCharCode(e << 2 | f >> 4);
            64 != g && (c += String.fromCharCode(f << 4 & 240 | g >> 2),
            64 != h && (c += String.fromCharCode(g << 6 & 192 | h)))
        }
    }
    ;var Sj;
    var Wj = function() {
        var a = Tj
          , b = Uj
          , c = Vj()
          , d = function(g) {
            a(g.target || g.srcElement || {})
        }
          , e = function(g) {
            b(g.target || g.srcElement || {})
        };
        if (!c.init) {
            $b(I, "mousedown", d);
            $b(I, "keyup", d);
            $b(I, "submit", e);
            var f = HTMLFormElement.prototype.submit;
            HTMLFormElement.prototype.submit = function() {
                b(this);
                f.call(this)
            }
            ;
            c.init = !0
        }
    }
      , Xj = function(a, b, c, d, e) {
        var f = {
            callback: a,
            domains: b,
            fragment: 2 === c,
            placement: c,
            forms: d,
            sameHost: e
        };
        Vj().decorators.push(f)
    }
      , Yj = function(a, b, c) {
        for (var d = Vj().decorators, e = {}, f = 0; f < d.length; ++f) {
            var g = d[f], h;
            if (h = !c || g.forms)
                a: {
                    var k = g.domains
                      , n = a
                      , p = !!g.sameHost;
                    if (k && (p || n !== I.location.hostname))
                        for (var q = 0; q < k.length; q++)
                            if (k[q]instanceof RegExp) {
                                if (k[q].test(n)) {
                                    h = !0;
                                    break a
                                }
                            } else if (0 <= n.indexOf(k[q]) || p && 0 <= k[q].indexOf(n)) {
                                h = !0;
                                break a
                            }
                    h = !1
                }
            if (h) {
                var t = g.placement;
                void 0 == t && (t = g.fragment ? 2 : 1);
                t === b && ab(e, g.callback())
            }
        }
        return e
    };
    function Vj() {
        var a = Rb("google_tag_data", {})
          , b = a.gl;
        b && b.decorators || (b = {
            decorators: []
        },
        a.gl = b);
        return b
    }
    ;var Zj = /(.*?)\*(.*?)\*(.*)/
      , ak = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/
      , bk = /^(?:www\.|m\.|amp\.)+/
      , ck = /([^?#]+)(\?[^#]*)?(#.*)?/;
    function dk(a) {
        return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)")
    }
    var fk = function(a) {
        var b = [], c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                if (void 0 !== d && d === d && null !== d && "[object Object]" !== d.toString()) {
                    b.push(c);
                    var e = b, f = e.push, g, h = String(d);
                    Oj = Oj || Pj();
                    Qj = Qj || Nj();
                    for (var k = [], n = 0; n < h.length; n += 3) {
                        var p = n + 1 < h.length
                          , q = n + 2 < h.length
                          , t = h.charCodeAt(n)
                          , u = p ? h.charCodeAt(n + 1) : 0
                          , r = q ? h.charCodeAt(n + 2) : 0
                          , v = t >> 2
                          , w = (t & 3) << 4 | u >> 4
                          , y = (u & 15) << 2 | r >> 6
                          , x = r & 63;
                        q || (x = 64,
                        p || (y = 64));
                        k.push(Oj[v], Oj[w], Oj[y], Oj[x])
                    }
                    g = k.join("");
                    f.call(e, g)
                }
            }
        var z = b.join("*");
        return ["1", ek(z), z].join("*")
    };
    function ek(a, b) {
        var c = [A.navigator.userAgent, (new Date).getTimezoneOffset(), Pb.userLanguage || Pb.language, Math.floor(Ya() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*"), d;
        if (!(d = Sj)) {
            for (var e = Array(256), f = 0; 256 > f; f++) {
                for (var g = f, h = 0; 8 > h; h++)
                    g = g & 1 ? g >>> 1 ^ 3988292384 : g >>> 1;
                e[f] = g
            }
            d = e
        }
        Sj = d;
        for (var k = 4294967295, n = 0; n < c.length; n++)
            k = k >>> 8 ^ Sj[(k ^ c.charCodeAt(n)) & 255];
        return ((k ^ -1) >>> 0).toString(36)
    }
    function gk() {
        return function(a) {
            var b = Ii(A.location.href)
              , c = b.search.replace("?", "")
              , d = Di(c, "_gl", !1, !0) || "";
            a.query = hk(d) || {};
            var e = Gi(b, "fragment").match(dk("_gl"));
            a.fragment = hk(e && e[3] || "") || {}
        }
    }
    function ik(a, b) {
        var c = dk(a).exec(b)
          , d = b;
        if (c) {
            var e = c[2]
              , f = c[4];
            d = c[1];
            f && (d = d + e + f)
        }
        return d
    }
    var jk = function(a, b) {
        b || (b = "_gl");
        var c = ck.exec(a);
        if (!c)
            return "";
        var d = c[1]
          , e = ik(b, (c[2] || "").slice(1))
          , f = ik(b, (c[3] || "").slice(1));
        e.length && (e = "?" + e);
        f.length && (f = "#" + f);
        return "" + d + e + f
    }
      , kk = function(a) {
        var b = gk()
          , c = Vj();
        c.data || (c.data = {
            query: {},
            fragment: {}
        },
        b(c.data));
        var d = {}
          , e = c.data;
        e && (ab(d, e.query),
        a && ab(d, e.fragment));
        return d
    }
      , hk = function(a) {
        try {
            var b = lk(a, 3);
            if (void 0 !== b) {
                for (var c = {}, d = b ? b.split("*") : [], e = 0; e + 1 < d.length; e += 2) {
                    var f = d[e]
                      , g = Rj(d[e + 1]);
                    c[f] = g
                }
                tg("TAGGING", 6);
                return c
            }
        } catch (h) {
            tg("TAGGING", 8)
        }
    };
    function lk(a, b) {
        if (a) {
            var c;
            a: {
                for (var d = a, e = 0; 3 > e; ++e) {
                    var f = Zj.exec(d);
                    if (f) {
                        c = f;
                        break a
                    }
                    d = decodeURIComponent(d)
                }
                c = void 0
            }
            var g = c;
            if (g && "1" === g[1]) {
                var h = g[3], k;
                a: {
                    for (var n = g[2], p = 0; p < b; ++p)
                        if (n === ek(h, p)) {
                            k = !0;
                            break a
                        }
                    k = !1
                }
                if (k)
                    return h;
                tg("TAGGING", 7)
            }
        }
    }
    function mk(a, b, c, d) {
        function e(p) {
            p = ik(a, p);
            var q = p.charAt(p.length - 1);
            p && "&" !== q && (p += "&");
            return p + n
        }
        d = void 0 === d ? !1 : d;
        var f = ck.exec(c);
        if (!f)
            return "";
        var g = f[1]
          , h = f[2] || ""
          , k = f[3] || ""
          , n = a + "=" + b;
        d ? k = "#" + e(k.substring(1)) : h = "?" + e(h.substring(1));
        return "" + g + h + k
    }
    function nk(a, b) {
        var c = "FORM" === (a.tagName || "").toUpperCase()
          , d = Yj(b, 1, c)
          , e = Yj(b, 2, c)
          , f = Yj(b, 3, c);
        if (bb(d)) {
            var g = fk(d);
            c ? ok("_gl", g, a) : pk("_gl", g, a, !1)
        }
        if (!c && bb(e)) {
            var h = fk(e);
            pk("_gl", h, a, !0)
        }
        for (var k in f)
            if (f.hasOwnProperty(k))
                a: {
                    var n = k
                      , p = f[k]
                      , q = a;
                    if (q.tagName) {
                        if ("a" === q.tagName.toLowerCase()) {
                            pk(n, p, q, void 0);
                            break a
                        }
                        if ("form" === q.tagName.toLowerCase()) {
                            ok(n, p, q);
                            break a
                        }
                    }
                    "string" == typeof q && mk(n, p, q, void 0)
                }
    }
    function pk(a, b, c, d) {
        if (c.href) {
            var e = mk(a, b, c.href, void 0 === d ? !1 : d);
            zb.test(e) && (c.href = e)
        }
    }
    function ok(a, b, c) {
        if (c && c.action) {
            var d = (c.method || "").toLowerCase();
            if ("get" === d) {
                for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) {
                    var h = e[g];
                    if (h.name === a) {
                        h.setAttribute("value", b);
                        f = !0;
                        break
                    }
                }
                if (!f) {
                    var k = I.createElement("input");
                    k.setAttribute("type", "hidden");
                    k.setAttribute("name", a);
                    k.setAttribute("value", b);
                    c.appendChild(k)
                }
            } else if ("post" === d) {
                var n = mk(a, b, c.action);
                zb.test(n) && (c.action = n)
            }
        }
    }
    function Tj(a) {
        try {
            var b;
            a: {
                for (var c = a, d = 100; c && 0 < d; ) {
                    if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                        b = c;
                        break a
                    }
                    c = c.parentNode;
                    d--
                }
                b = null
            }
            var e = b;
            if (e) {
                var f = e.protocol;
                "http:" !== f && "https:" !== f || nk(e, e.hostname)
            }
        } catch (g) {}
    }
    function Uj(a) {
        try {
            if (a.action) {
                var b = Gi(Ii(a.action), "host");
                nk(a, b)
            }
        } catch (c) {}
    }
    var qk = function(a, b, c, d) {
        Wj();
        Xj(a, b, "fragment" === c ? 2 : 1, !!d, !1)
    }
      , rk = function(a, b) {
        Wj();
        Xj(a, [Fi(A.location, "host", !0)], b, !0, !0)
    }
      , sk = function() {
        var a = I.location.hostname
          , b = ak.exec(I.referrer);
        if (!b)
            return !1;
        var c = b[2]
          , d = b[1]
          , e = "";
        if (c) {
            var f = c.split("/")
              , g = f[1];
            e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g)
        } else if (d) {
            if (0 === d.indexOf("xn--"))
                return !1;
            e = d.replace(/-/g, ".").replace(/\.\./g, "-")
        }
        var h = a.replace(bk, ""), k = e.replace(bk, ""), n;
        if (!(n = h === k)) {
            var p = "." + k;
            n = h.substring(h.length - p.length, h.length) === p
        }
        return n
    }
      , tk = function(a, b) {
        return !1 === a ? !1 : a || b || sk()
    };
    var uk = {};
    var vk = /^\w+$/
      , wk = /^[\w-]+$/
      , xk = {
        aw: "_aw",
        dc: "_dc",
        gf: "_gf",
        ha: "_ha",
        gp: "_gp",
        gb: "_gb"
    }
      , yk = function() {
        if (!zg().g() || !Kg())
            return !0;
        var a = Hg("ad_storage");
        return null == a ? !0 : !!a
    }
      , zk = function(a, b) {
        Jg("ad_storage") ? yk() ? a() : Pg(a, "ad_storage") : b ? tg("TAGGING", 3) : Og(function() {
            zk(a, !0)
        }, ["ad_storage"])
    }
      , Bk = function(a) {
        return Ak(a).map(function(b) {
            return b.ya
        })
    }
      , Ak = function(a) {
        var b = [];
        if (!ij(A) || !I.cookie)
            return b;
        var c = lj(a, I.cookie, void 0, "ad_storage");
        if (!c || 0 == c.length)
            return b;
        for (var d = {}, e = 0; e < c.length; d = {
            rd: d.rd
        },
        e++) {
            var f = Ck(c[e]);
            if (null != f) {
                var g = f
                  , h = g.version;
                d.rd = g.ya;
                var k = g.timestamp
                  , n = g.labels
                  , p = Na(b, function(q) {
                    return function(t) {
                        return t.ya === q.rd
                    }
                }(d));
                p ? (p.timestamp = Math.max(p.timestamp, k),
                p.labels = Dk(p.labels, n || [])) : b.push({
                    version: h,
                    ya: d.rd,
                    timestamp: k,
                    labels: n
                })
            }
        }
        b.sort(function(q, t) {
            return t.timestamp - q.timestamp
        });
        return Ek(b)
    };
    function Dk(a, b) {
        for (var c = {}, d = [], e = 0; e < a.length; e++)
            c[a[e]] = !0,
            d.push(a[e]);
        for (var f = 0; f < b.length; f++)
            c[b[f]] || d.push(b[f]);
        return d
    }
    function Fk(a) {
        return a && "string" == typeof a && a.match(vk) ? a : "_gcl"
    }
    var Hk = function() {
        var a = Ii(A.location.href)
          , b = Gi(a, "query", !1, void 0, "gclid")
          , c = Gi(a, "query", !1, void 0, "gclsrc")
          , d = Gi(a, "query", !1, void 0, "wbraid")
          , e = Gi(a, "query", !1, void 0, "dclid");
        if (!b || !c || !d) {
            var f = a.hash.replace("#", "");
            b = b || Di(f, "gclid", !1, void 0);
            c = c || Di(f, "gclsrc", !1, void 0);
            d = d || Di(f, "wbraid", !1, void 0)
        }
        return Gk(b, c, e, d)
    }
      , Gk = function(a, b, c, d) {
        var e = {}
          , f = function(g, h) {
            e[h] || (e[h] = []);
            e[h].push(g)
        };
        e.gclid = a;
        e.gclsrc = b;
        e.dclid = c;
        void 0 !== d && wk.test(d) && (e.gbraid = d,
        f(d, "gb"));
        if (void 0 !== a && a.match(wk))
            switch (b) {
            case void 0:
                f(a, "aw");
                break;
            case "aw.ds":
                f(a, "aw");
                f(a, "dc");
                break;
            case "ds":
                f(a, "dc");
                break;
            case "3p.ds":
                f(a, "dc");
                break;
            case "gf":
                f(a, "gf");
                break;
            case "ha":
                f(a, "ha")
            }
        c && f(c, "dc");
        return e
    }
      , Jk = function(a) {
        var b = Hk();
        zk(function() {
            Ik(b, !1, a)
        })
    };
    function Ik(a, b, c, d, e) {
        function f(w, y) {
            var x = Kk(w, g);
            x && (uj(x, y, h),
            k = !0)
        }
        c = c || {};
        e = e || [];
        var g = Fk(c.prefix);
        d = d || Ya();
        var h = Dj(c, d, !0);
        h.fb = "ad_storage";
        var k = !1
          , n = Math.round(d / 1E3)
          , p = function(w) {
            var y = ["GCL", n, w];
            0 < e.length && y.push(e.join("."));
            return y.join(".")
        };
        a.aw && f("aw", p(a.aw[0]));
        a.dc && f("dc", p(a.dc[0]));
        a.gf && f("gf", p(a.gf[0]));
        a.ha && f("ha", p(a.ha[0]));
        a.gp && f("gp", p(a.gp[0]));
        if ((void 0 == uk.enable_gbraid_cookie_write ? 0 : uk.enable_gbraid_cookie_write) && !k && a.gb) {
            var q = a.gb[0]
              , t = Kk("gb", g)
              , u = !1;
            if (!b)
                for (var r = Ak(t), v = 0; v < r.length; v++)
                    r[v].ya === q && r[v].labels && 0 < r[v].labels.length && (u = !0);
            u || f("gb", p(q))
        }
    }
    var Mk = function(a, b) {
        var c = kk(!0);
        zk(function() {
            for (var d = Fk(b.prefix), e = 0; e < a.length; ++e) {
                var f = a[e];
                if (void 0 !== xk[f]) {
                    var g = Kk(f, d)
                      , h = c[g];
                    if (h) {
                        var k = Math.min(Lk(h), Ya()), n;
                        b: {
                            var p = k;
                            if (ij(A))
                                for (var q = lj(g, I.cookie, void 0, "ad_storage"), t = 0; t < q.length; ++t)
                                    if (Lk(q[t]) > p) {
                                        n = !0;
                                        break b
                                    }
                            n = !1
                        }
                        if (!n) {
                            var u = Dj(b, k, !0);
                            u.fb = "ad_storage";
                            uj(g, h, u)
                        }
                    }
                }
            }
            Ik(Gk(c.gclid, c.gclsrc), !1, b)
        })
    }
      , Kk = function(a, b) {
        var c = xk[a];
        if (void 0 !== c)
            return b + c
    }
      , Lk = function(a) {
        return 0 !== Nk(a.split(".")).length ? 1E3 * (Number(a.split(".")[1]) || 0) : 0
    };
    function Ck(a) {
        var b = Nk(a.split("."));
        return 0 === b.length ? null : {
            version: b[0],
            ya: b[2],
            timestamp: 1E3 * (Number(b[1]) || 0),
            labels: b.slice(3)
        }
    }
    function Nk(a) {
        return 3 > a.length || "GCL" !== a[0] && "1" !== a[0] || !/^\d+$/.test(a[1]) || !wk.test(a[2]) ? [] : a
    }
    var Ok = function(a, b, c, d, e) {
        if (Ka(b) && ij(A)) {
            var f = Fk(e)
              , g = function() {
                for (var h = {}, k = 0; k < a.length; ++k) {
                    var n = Kk(a[k], f);
                    if (n) {
                        var p = lj(n, I.cookie, void 0, "ad_storage");
                        p.length && (h[n] = p.sort()[p.length - 1])
                    }
                }
                return h
            };
            zk(function() {
                qk(g, b, c, d)
            })
        }
    }
      , Ek = function(a) {
        return a.filter(function(b) {
            return wk.test(b.ya)
        })
    }
      , Yk = function(a, b) {
        if (ij(A)) {
            for (var c = Fk(b.prefix), d = {}, e = 0; e < a.length; e++)
                xk[a[e]] && (d[a[e]] = xk[a[e]]);
            zk(function() {
                Ra(d, function(f, g) {
                    var h = lj(c + g, I.cookie, void 0, "ad_storage");
                    h.sort(function(u, r) {
                        return Lk(r) - Lk(u)
                    });
                    if (h.length) {
                        var k = h[0], n = Lk(k), p = 0 !== Nk(k.split(".")).length ? k.split(".").slice(3) : [], q = {}, t;
                        t = 0 !== Nk(k.split(".")).length ? k.split(".")[2] : void 0;
                        q[f] = [t];
                        Ik(q, !0, b, n, p)
                    }
                })
            })
        }
    };
    function Zk(a, b) {
        for (var c = 0; c < b.length; ++c)
            if (a[b[c]])
                return !0;
        return !1
    }
    var $k = function(a) {
        function b(e, f, g) {
            g && (e[f] = g)
        }
        if (Kg()) {
            var c = Hk();
            if (Zk(c, a)) {
                var d = {};
                b(d, "gclid", c.gclid);
                b(d, "dclid", c.dclid);
                b(d, "gclsrc", c.gclsrc);
                b(d, "wbraid", c.gbraid);
                rk(function() {
                    return d
                }, 3);
                rk(function() {
                    var e = {};
                    return e._up = "1",
                    e
                }, 1)
            }
        }
    };
    function al(a, b) {
        var c = Fk(b)
          , d = Kk(a, c);
        if (!d)
            return 0;
        for (var e = Ak(d), f = 0, g = 0; g < e.length; g++)
            f = Math.max(f, e[g].timestamp);
        return f
    }
    function bl(a) {
        var b = 0, c;
        for (c in a)
            for (var d = a[c], e = 0; e < d.length; e++)
                b = Math.max(b, Number(d[e].timestamp));
        return b
    }
    ;var xl = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/)
      , yl = {
        cl: ["ecl"],
        customPixels: ["nonGooglePixels"],
        ecl: ["cl"],
        ehl: ["hl"],
        hl: ["ehl"],
        html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
        customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
        nonGooglePixels: [],
        nonGoogleScripts: ["nonGooglePixels"],
        nonGoogleIframes: ["nonGooglePixels"]
    }
      , zl = {
        cl: ["ecl"],
        customPixels: ["customScripts", "html"],
        ecl: ["cl"],
        ehl: ["hl"],
        hl: ["ehl"],
        html: ["customScripts"],
        customScripts: ["html"],
        nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
        nonGoogleScripts: ["customScripts", "html"],
        nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
    }
      , Al = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
    var Bl = function() {
        var a = !1;
        a = !0;
        return a
    }
      , Dl = function(a) {
        var b = ji("gtm.allowlist") || ji("gtm.whitelist");
        b && wg(9);
        Bl() && (b = "google gtagfl lcl zone oid op".split(" "));
        var c = b && cb(Va(b), yl)
          , d = ji("gtm.blocklist") || ji("gtm.blacklist");
        d || (d = ji("tagTypeBlacklist")) && wg(3);
        d ? wg(8) : d = [];
        Cl() && (d = Va(d),
        d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
        0 <= Va(d).indexOf("google") && wg(2);
        var e = d && cb(Va(d), zl)
          , f = {};
        return function(g) {
            var h = g && g[Vd.Fb];
            if (!h || "string" != typeof h)
                return !0;
            h = h.replace(/^_*/, "");
            if (void 0 !== f[h])
                return f[h];
            var k = ci[h] || []
              , n = a(h, k);
            if (b) {
                var p;
                if (p = n)
                    a: {
                        if (0 > c.indexOf(h))
                            if (k && 0 < k.length)
                                for (var q = 0; q < k.length; q++) {
                                    if (0 > c.indexOf(k[q])) {
                                        wg(11);
                                        p = !1;
                                        break a
                                    }
                                }
                            else {
                                p = !1;
                                break a
                            }
                        p = !0
                    }
                n = p
            }
            var t = !1;
            if (d) {
                var u = 0 <= e.indexOf(h);
                if (u)
                    t = u;
                else {
                    var r = Qa(e, k || []);
                    r && wg(10);
                    t = r
                }
            }
            var v = !n || t;
            v || !(0 <= k.indexOf("sandboxedScripts")) || c && -1 !== c.indexOf("sandboxedScripts") || (v = Qa(e, Al));
            return f[h] = v
        }
    }
      , Cl = function() {
        return xl.test(A.location && A.location.hostname)
    };
    var El = !1
      , Fl = 0
      , Gl = [];
    function Hl(a) {
        if (!El) {
            var b = I.createEventObject
              , c = "complete" == I.readyState
              , d = "interactive" == I.readyState;
            if (!a || "readystatechange" != a.type || c || !b && d) {
                El = !0;
                for (var e = 0; e < Gl.length; e++)
                    J(Gl[e])
            }
            Gl.push = function() {
                for (var f = 0; f < arguments.length; f++)
                    J(arguments[f]);
                return 0
            }
        }
    }
    function Il() {
        if (!El && 140 > Fl) {
            Fl++;
            try {
                I.documentElement.doScroll("left"),
                Hl()
            } catch (a) {
                A.setTimeout(Il, 50)
            }
        }
    }
    var Jl = function(a) {
        El ? a() : Gl.push(a)
    };
    var Ml = function(a, b) {
        this.g = !1;
        this.C = [];
        this.F = {
            tags: []
        };
        this.O = !1;
        this.o = this.s = 0;
        Ll(this, a, b)
    }
      , Nl = function(a, b, c, d) {
        if (Uh.hasOwnProperty(b) || "__zone" === b)
            return -1;
        var e = {};
        xc(d) && (e = yc(d, e));
        e.id = c;
        e.status = "timeout";
        return a.F.tags.push(e) - 1
    }
      , Ol = function(a, b, c, d) {
        var e = a.F.tags[b];
        e && (e.status = c,
        e.executionTime = d)
    }
      , Pl = function(a) {
        if (!a.g) {
            for (var b = a.C, c = 0; c < b.length; c++)
                b[c]();
            a.g = !0;
            a.C.length = 0
        }
    }
      , Ll = function(a, b, c) {
        Ha(b) && a.Pd(b);
        c && A.setTimeout(function() {
            return Pl(a)
        }, Number(c))
    };
    Ml.prototype.Pd = function(a) {
        var b = this
          , c = $a(function() {
            return J(function() {
                a(L.J, b.F)
            })
        });
        this.g ? c() : this.C.push(c)
    }
    ;
    var Ql = function(a) {
        a.s++;
        return $a(function() {
            a.o++;
            a.O && a.o >= a.s && Pl(a)
        })
    };
    var Rl = function() {
        function a(d) {
            return !Ja(d) || 0 > d ? 0 : d
        }
        if (!Rh._li && A.performance && A.performance.timing) {
            var b = A.performance.timing.navigationStart
              , c = Ja(ki.get("gtm.start")) ? ki.get("gtm.start") : 0;
            Rh._li = {
                cst: a(c - b),
                cbt: a($h - b)
            }
        }
    }
      , Sl = function(a) {
        A.performance && A.performance.mark(L.J + "_" + a + "_start")
    }
      , Tl = function(a) {
        if (A.performance) {
            var b = L.J + "_" + a + "_start"
              , c = L.J + "_" + a + "_duration";
            A.performance.measure(c, b);
            var d = A.performance.getEntriesByName(c)[0];
            A.performance.clearMarks(b);
            A.performance.clearMeasures(c);
            var e = Rh._p || {};
            void 0 === e[a] && (e[a] = d.duration,
            Rh._p = e);
            return d.duration
        }
    }
      , Ul = function() {
        if (A.performance && A.performance.now) {
            var a = Rh._p || {};
            a.PAGEVIEW = A.performance.now();
            Rh._p = a
        }
    };
    var Vl = {}
      , Wl = function() {
        return A.GoogleAnalyticsObject && A[A.GoogleAnalyticsObject]
    }
      , Xl = !1;
    function $l() {
        return A.GoogleAnalyticsObject || "ga"
    }
    var am = function(a) {}
      , bm = function(a, b) {
        return function() {
            var c = Wl()
              , d = c && c.getByName && c.getByName(a);
            if (d) {
                var e = d.get("sendHitTask");
                d.set("sendHitTask", function(f) {
                    var g = f.get("hitPayload")
                      , h = f.get("hitCallback")
                      , k = 0 > g.indexOf("&tid=" + b);
                    k && (f.set("hitPayload", g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0),
                    f.set("hitCallback", void 0, !0));
                    e(f);
                    k && (f.set("hitPayload", g, !0),
                    f.set("hitCallback", h, !0),
                    f.set("_x_19", void 0, !0),
                    e(f))
                })
            }
        }
    };
    var im = function(a) {}, mm = function(a) {}, nm = function() {
        return "&tc=" + ze.filter(function(a) {
            return a
        }).length
    }, qm = function() {
        2022 <= om().length && pm()
    }, rm = function(a) {
        return 0 === a.indexOf("gtm.") ? encodeURIComponent(a) : "*"
    }, tm = function() {
        sm || (sm = A.setTimeout(pm, 500))
    }, pm = function() {
        sm && (A.clearTimeout(sm),
        sm = void 0);
        void 0 === um || vm[um] && !wm && !xm || (ym[um] || zm.Hj() || 0 >= Am-- ? (wg(1),
        ym[um] = !0) : (zm.fk(),
        Zb(om(!0)),
        vm[um] = !0,
        Bm = Cm = Dm = xm = wm = ""))
    }, om = function(a) {
        var b = um;
        if (void 0 === b)
            return "";
        var c = ug("GTM")
          , d = ug("TAGGING");
        return [Em, vm[b] ? "" : "&es=1", Fm[b], im(b), c ? "&u=" + c : "", d ? "&ut=" + d : "", nm(), wm, xm, Dm, Cm, mm(a), Bm, "&z=0"].join("")
    }, Hm = function() {
        Em = Gm()
    }, Gm = function() {
        return [ai, "&v=3&t=t", "&pid=" + Oa(), "&rv=" + L.Ld].join("")
    }, lm = ["L", "S", "Y"], hm = ["S", "E"], Im = {
        sampleRate: "0.005000",
        Ph: "",
        Oh: Number("5")
    }, Jm = 0 <= I.location.search.indexOf("?gtm_latency=") || 0 <= I.location.search.indexOf("&gtm_latency="), Km;
    if (!(Km = Jm)) {
        var Lm = Math.random()
          , Mm = Im.sampleRate;
        Km = Lm < Mm
    }
    var Nm = Km
      , Om = {
        label: L.J + " Container",
        children: [{
            label: "Initialization",
            children: []
        }]
    }
      , Em = Gm()
      , vm = {}
      , wm = ""
      , xm = ""
      , Bm = ""
      , Cm = ""
      , km = {}
      , jm = !1
      , gm = {}
      , Pm = {}
      , Dm = ""
      , um = void 0
      , Fm = {}
      , ym = {}
      , sm = void 0
      , Qm = 5;
    0 < Im.Oh && (Qm = Im.Oh);
    var zm = function(a, b) {
        for (var c = 0, d = [], e = 0; e < a; ++e)
            d.push(0);
        return {
            Hj: function() {
                return c < a ? !1 : Ya() - d[c % a] < b
            },
            fk: function() {
                var f = c++ % a;
                d[f] = Ya()
            }
        }
    }(Qm, 1E3)
      , Am = 1E3
      , Sm = function(a, b) {
        if (Nm && !ym[a] && um !== a) {
            pm();
            um = a;
            Bm = wm = "";
            Fm[a] = "&e=" + rm(b) + "&eid=" + a;
            tm();
        }
    }
      , Tm = function(a, b, c, d) {
        if (Nm && b) {
            var e, f = String(b[Vd.Fb] || "").replace(/_/g, "");
            0 === f.indexOf("cvt") && (f = "cvt");
            e = f;
            var g = c + e;
            if (!ym[a]) {
                a !== um && (pm(),
                um = a);
                wm = wm ? wm + "." + g : "&tr=" + g;
                var h = b["function"];
                if (!h)
                    throw Error("Error: No function name given for function call.");
                var k = (Be[h] ? "1" : "2") + e;
                Bm = Bm ? Bm + "." + k : "&ti=" + k;
                tm();
                qm()
            }
        }
    };
    var $m = function(a, b, c) {
        if (Nm && !ym[a]) {
            a !== um && (pm(),
            um = a);
            var d = c + b;
            xm = xm ? xm + "." + d : "&epr=" + d;
            tm();
            qm()
        }
    }
      , an = function(a, b, c) {};
    function bn(a, b, c, d) {
        var e = ze[a]
          , f = cn(a, b, c, d);
        if (!f)
            return null;
        var g = He(e[Vd.Ig], c, []);
        if (g && g.length) {
            var h = g[0];
            f = bn(h.index, {
                onSuccess: f,
                onFailure: 1 === h.fh ? b.terminate : f,
                terminate: b.terminate
            }, c, d)
        }
        return f
    }
    function cn(a, b, c, d) {
        function e() {
            if (f[Vd.Li])
                h();
            else {
                var w = Ie(f, c, []);
                var y = w[Vd.Uh];
                if (null != y)
                    for (var x = 0; x < y.length; x++)
                        if (!Xg(y[x])) {
                            h();
                            return
                        }
                var z = Nl(c.Ib, String(f[Vd.Fb]), Number(f[Vd.Kg]), w[Vd.Mi])
                  , B = !1;
                w.vtp_gtmOnSuccess = function() {
                    if (!B) {
                        B = !0;
                        var E = Ya() - D;
                        Tm(c.id, ze[a], "5", E);
                        Ol(c.Ib, z, "success", E);
                        g()
                    }
                }
                ;
                w.vtp_gtmOnFailure = function() {
                    if (!B) {
                        B = !0;
                        var E = Ya() - D;
                        Tm(c.id, ze[a], "6", E);
                        Ol(c.Ib, z, "failure", E);
                        h()
                    }
                }
                ;
                w.vtp_gtmTagId = f.tag_id;
                w.vtp_gtmEventId = c.id;
                Tm(c.id, f, "1");
                var C = function() {
                    var E = Ya() - D;
                    Tm(c.id, f, "7", E);
                    Ol(c.Ib, z, "exception", E);
                    B || (B = !0,
                    h())
                };
                var D = Ya();
                try {
                    Ge(w, {
                        event: c,
                        index: a,
                        type: 1
                    })
                } catch (E) {
                    C(E)
                }
            }
        }
        var f = ze[a]
          , g = b.onSuccess
          , h = b.onFailure
          , k = b.terminate;
        if (c.xf(f))
            return null;
        var n = He(f[Vd.Lg], c, []);
        if (n && n.length) {
            var p = n[0]
              , q = bn(p.index, {
                onSuccess: g,
                onFailure: h,
                terminate: k
            }, c, d);
            if (!q)
                return null;
            g = q;
            h = 2 === p.fh ? k : q
        }
        if (f[Vd.Dg] || f[Vd.Qi]) {
            var t = f[Vd.Dg] ? Ae : c.vk
              , u = g
              , r = h;
            if (!t[a]) {
                e = $a(e);
                var v = dn(a, t, e);
                g = v.onSuccess;
                h = v.onFailure
            }
            return function() {
                t[a](u, r)
            }
        }
        return e
    }
    function dn(a, b, c) {
        var d = []
          , e = [];
        b[a] = en(d, e, c);
        return {
            onSuccess: function() {
                b[a] = fn;
                for (var f = 0; f < d.length; f++)
                    d[f]()
            },
            onFailure: function() {
                b[a] = gn;
                for (var f = 0; f < e.length; f++)
                    e[f]()
            }
        }
    }
    function en(a, b, c) {
        return function(d, e) {
            a.push(d);
            b.push(e);
            c()
        }
    }
    function fn(a) {
        a()
    }
    function gn(a, b) {
        b()
    }
    ;var hn = {
        active: !0,
        isAllowed: function() {
            return !0
        }
    }
      , jn = function(a) {
        var b = Rh.zones;
        return b ? b.checkState(L.J, a) : hn
    }
      , kn = function(a) {
        var b = Rh.zones;
        !b && a && (b = Rh.zones = a());
        return b
    };
    var ln = function(a) {
        return arguments
    }
      , on = function(a, b) {
        for (var c = [], d = 0; d < ze.length; d++)
            if (a[d]) {
                var e = ze[d];
                var f = Ql(b.Ib);
                try {
                    var g = bn(d, {
                        onSuccess: f,
                        onFailure: f,
                        terminate: f
                    }, b, d);
                    if (g) {
                        var h = c
                          , k = h.push
                          , n = d
                          , p = e["function"];
                        if (!p)
                            throw "Error: No function name given for function call.";
                        var q = Be[p];
                        k.call(h, {
                            Hh: n,
                            yh: q ? q.priorityOverride || 0 : 0,
                            execute: g
                        })
                    } else
                        mn(d, b),
                        f()
                } catch (r) {
                    f()
                }
            }
        var t = b.Ib;
        t.O = !0;
        t.o >= t.s && Pl(t);
        c.sort(nn);
        for (var u = 0; u < c.length; u++)
            c[u].execute();
        return 0 < c.length
    };
    function nn(a, b) {
        var c, d = b.yh, e = a.yh;
        c = d > e ? 1 : d < e ? -1 : 0;
        var f;
        if (0 !== c)
            f = c;
        else {
            var g = a.Hh
              , h = b.Hh;
            f = g > h ? 1 : g < h ? -1 : 0
        }
        return f
    }
    function mn(a, b) {
        if (!Nm)
            return;
        var c = function(d) {
            var e = b.xf(ze[d]) ? "3" : "4"
              , f = He(ze[d][Vd.Ig], b, []);
            f && f.length && c(f[0].index);
            Tm(b.id, ze[d], e);
            var g = He(ze[d][Vd.Lg], b, []);
            g && g.length && c(g[0].index)
        };
        c(a);
    }
    var pn = !1, qn;
    var wn = function(a) {
        var b = Ya()
          , c = a["gtm.uniqueEventId"]
          , d = a.event;
        if ("gtm.js" === d) {
            if (pn)
                return !1;
            pn = !0;
        }
        var g = jn(c)
          , h = !1;
        if (!g.active) {
            if ("gtm.js" !== d && "gtm.init" !== d && "gtm.init_consent" !== d)
                return !1;
            h = !0;
            g = jn(Number.MAX_SAFE_INTEGER)
        }
        Sm(c, d);
        var k = a.eventCallback
          , n = a.eventTimeout
          , p = k;
        var q = {
            id: c,
            name: d,
            xf: Dl(g.isAllowed),
            vk: [],
            sh: function() {
                wg(6)
            },
            Xg: sn(),
            Yg: tn(c),
            Ib: new Ml(p,n)
        }
          , t = Re(q);
        h && (t = un(t));
        var u = on(t, q);
        "gtm.js" !== d && "gtm.sync" !== d || am(L.J);
        return vn(t, u)
    };
    function tn(a) {
        return function(b) {
            Nm && (Cc(b) || an(a, "input", b))
        }
    }
    function sn() {
        var a = {};
        a.event = oi("event", 1);
        a.ecommerce = oi("ecommerce", 1);
        a.gtm = oi("gtm");
        a.eventModel = oi("eventModel");
        return a
    }
    function un(a) {
        for (var b = [], c = 0; c < a.length; c++)
            if (a[c]) {
                Th[String(ze[c][Vd.Fb])] && (b[c] = !0);
                void 0 !== ze[c][Vd.Ri] && (b[c] = !0);
            }
        return b
    }
    function vn(a, b) {
        if (!b)
            return b;
        for (var c = 0; c < a.length; c++)
            if (a[c] && ze[c] && !Uh[String(ze[c][Vd.Fb])])
                return !0;
        return !1
    }
    function xn(a, b) {
        if (a) {
            var c = "" + a;
            0 !== c.indexOf("http://") && 0 !== c.indexOf("https://") && (c = "https://" + c);
            "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
            return Ii("" + c + b).href
        }
    }
    function yn(a, b) {
        return zn() ? xn(a, b) : void 0
    }
    function zn() {
        var a = !1;
        return a
    }
    function An() {
        return !!L.Md && "SGTM_TOKEN" !== L.Md.replaceAll("@@", "")
    }
    ;var Bn = function() {
        var a = !1;
        return a
    };
    var Cn;
    if (3 === L.Ld.length)
        Cn = "g";
    else {
        var Dn = "G";
        Dn = "g";
        Cn = Dn
    }
    var En = {
        "": "n",
        UA: "u",
        AW: "a",
        DC: "d",
        G: "e",
        GF: "f",
        HA: "h",
        GTM: Cn,
        OPT: "o"
    }
      , Fn = function(a) {
        var b = L.J.split("-"), c = b[0].toUpperCase(), d = En[c] || "i", e = a && "GTM" === c ? b[1] : "OPT" === c ? b[1] : "", f;
        if (3 === L.Ld.length) {
            var g = "w";
            g = Bn() ? "s" : "o";
            f = "2" + g
        } else
            f = "";
        return f + d + L.Ld + e
    };
    function Gn(a, b) {
        if ("" === a)
            return b;
        var c = Number(a);
        return isNaN(c) ? b : c
    }
    ;var Hn = function(a, b) {
        a.addEventListener && a.addEventListener.call(a, "message", b, !1)
    };
    function In() {
        return Bb("iPhone") && !Bb("iPod") && !Bb("iPad")
    }
    ;Bb("Opera");
    Bb("Trident") || Bb("MSIE");
    Bb("Edge");
    !Bb("Gecko") || -1 != Ab().toLowerCase().indexOf("webkit") && !Bb("Edge") || Bb("Trident") || Bb("MSIE") || Bb("Edge");
    -1 != Ab().toLowerCase().indexOf("webkit") && !Bb("Edge") && Bb("Mobile");
    Bb("Macintosh");
    Bb("Windows");
    Bb("Linux") || Bb("CrOS");
    var Jn = qa.navigator || null;
    Jn && (Jn.appVersion || "").indexOf("X11");
    Bb("Android");
    In();
    Bb("iPad");
    Bb("iPod");
    In() || Bb("iPad") || Bb("iPod");
    Ab().toLowerCase().indexOf("kaios");
    var Kn = function(a) {
        if (!a || !I.head)
            return null;
        var b, c;
        c = void 0 === c ? document : c;
        b = c.createElement("meta");
        I.head.appendChild(b);
        b.httpEquiv = "origin-trial";
        b.content = a;
        return b
    };
    var Ln = function() {};
    var Mn = function(a) {
        void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
        void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
        return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
    }
      , Nn = function(a, b) {
        this.o = a;
        this.g = null;
        this.C = {};
        this.O = 0;
        this.F = void 0 === b ? 500 : b;
        this.s = null
    };
    oa(Nn, Ln);
    Nn.prototype.addEventListener = function(a) {
        var b = {}
          , c = hj(function() {
            return a(b)
        })
          , d = 0;
        -1 !== this.F && (d = setTimeout(function() {
            b.tcString = "tcunavailable";
            b.internalErrorState = 1;
            c()
        }, this.F));
        var e = function(f, g) {
            clearTimeout(d);
            f ? (b = f,
            b.internalErrorState = Mn(b),
            g && 0 === b.internalErrorState || (b.tcString = "tcunavailable",
            g || (b.internalErrorState = 3))) : (b.tcString = "tcunavailable",
            b.internalErrorState = 3);
            a(b)
        };
        try {
            On(this, "addEventListener", e)
        } catch (f) {
            b.tcString = "tcunavailable",
            b.internalErrorState = 3,
            d && (clearTimeout(d),
            d = 0),
            c()
        }
    }
    ;
    Nn.prototype.removeEventListener = function(a) {
        a && a.listenerId && On(this, "removeEventListener", null, a.listenerId)
    }
    ;
    var Qn = function(a, b, c) {
        var d;
        d = void 0 === d ? "755" : d;
        var e;
        a: {
            if (a.publisher && a.publisher.restrictions) {
                var f = a.publisher.restrictions[b];
                if (void 0 !== f) {
                    e = f[void 0 === d ? "755" : d];
                    break a
                }
            }
            e = void 0
        }
        var g = e;
        if (0 === g)
            return !1;
        var h = c;
        2 === c ? (h = 0,
        2 === g && (h = 1)) : 3 === c && (h = 1,
        1 === g && (h = 0));
        var k;
        if (0 === h)
            if (a.purpose && a.vendor) {
                var n = Pn(a.vendor.consents, void 0 === d ? "755" : d);
                k = n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? !0 : n && Pn(a.purpose.consents, b)
            } else
                k = !0;
        else
            k = 1 === h ? a.purpose && a.vendor ? Pn(a.purpose.legitimateInterests, b) && Pn(a.vendor.legitimateInterests, void 0 === d ? "755" : d) : !0 : !0;
        return k
    }
      , Pn = function(a, b) {
        return !(!a || !a[b])
    }
      , On = function(a, b, c, d) {
        c || (c = function() {}
        );
        if ("function" === typeof a.o.__tcfapi) {
            var e = a.o.__tcfapi;
            e(b, 2, c, d)
        } else if (Rn(a)) {
            Sn(a);
            var f = ++a.O;
            a.C[f] = c;
            if (a.g) {
                var g = {};
                a.g.postMessage((g.__tcfapiCall = {
                    command: b,
                    version: 2,
                    callId: f,
                    parameter: d
                },
                g), "*")
            }
        } else
            c({}, !1)
    }
      , Rn = function(a) {
        if (a.g)
            return a.g;
        var b;
        a: {
            for (var c = a.o, d = 0; 50 > d; ++d) {
                var e;
                try {
                    e = !(!c.frames || !c.frames.__tcfapiLocator)
                } catch (h) {
                    e = !1
                }
                if (e) {
                    b = c;
                    break a
                }
                var f;
                b: {
                    try {
                        var g = c.parent;
                        if (g && g != c) {
                            f = g;
                            break b
                        }
                    } catch (h) {}
                    f = null
                }
                if (!(c = f))
                    break
            }
            b = null
        }
        a.g = b;
        return a.g
    }
      , Sn = function(a) {
        a.s || (a.s = function(b) {
            try {
                var c;
                c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                a.C[c.callId](c.returnValue, c.success)
            } catch (d) {}
        }
        ,
        Hn(a.o, a.s))
    };
    var Tn = !0;
    Tn = !1;
    var Un = {
        1: 0,
        3: 0,
        4: 0,
        7: 3,
        9: 3,
        10: 3
    }
      , Vn = Gn("", 550)
      , Wn = Gn("", 500);
    function Xn() {
        var a = Rh.tcf || {};
        return Rh.tcf = a
    }
    var bo = function() {
        var a = Xn()
          , b = new Nn(A,Tn ? 3E3 : -1);
        if (!0 === A.gtag_enable_tcf_support && !a.active && ("function" === typeof A.__tcfapi || "function" === typeof b.o.__tcfapi || null != Rn(b))) {
            a.active = !0;
            a.ld = {};
            Yn();
            var c = null;
            Tn ? c = A.setTimeout(function() {
                Zn(a);
                $n(a);
                c = null
            }, Wn) : a.tcString = "tcunavailable";
            try {
                b.addEventListener(function(d) {
                    c && (clearTimeout(c),
                    c = null);
                    if (0 !== d.internalErrorState)
                        Zn(a),
                        $n(a);
                    else {
                        var e;
                        a.gdprApplies = d.gdprApplies;
                        if (!1 === d.gdprApplies)
                            e = ao(),
                            b.removeEventListener(d);
                        else if ("tcloaded" === d.eventStatus || "useractioncomplete" === d.eventStatus || "cmpuishown" === d.eventStatus) {
                            var f = {}, g;
                            for (g in Un)
                                if (Un.hasOwnProperty(g))
                                    if ("1" === g) {
                                        var h = d
                                          , k = !0;
                                        k = void 0 === k ? !1 : k;
                                        var n;
                                        var p = h;
                                        !1 === p.gdprApplies ? n = !0 : (void 0 === p.internalErrorState && (p.internalErrorState = Mn(p)),
                                        n = "error" === p.cmpStatus || 0 !== p.internalErrorState || "loaded" === p.cmpStatus && ("tcloaded" === p.eventStatus || "useractioncomplete" === p.eventStatus) ? !0 : !1);
                                        f["1"] = n ? !1 === h.gdprApplies || "tcunavailable" === h.tcString || void 0 === h.gdprApplies && !k || "string" !== typeof h.tcString || !h.tcString.length ? !0 : Qn(h, "1", 0) : !1
                                    } else
                                        f[g] = Qn(d, g, Un[g]);
                            e = f
                        }
                        e && (a.tcString = d.tcString || "tcempty",
                        a.ld = e,
                        $n(a))
                    }
                })
            } catch (d) {
                c && (clearTimeout(c),
                c = null),
                Zn(a),
                $n(a)
            }
        }
    };
    function Zn(a) {
        a.type = "e";
        a.tcString = "tcunavailable";
        Tn && (a.ld = ao())
    }
    function Yn() {
        var a = {}
          , b = (a.ad_storage = "denied",
        a.wait_for_update = Vn,
        a);
        Ug(b)
    }
    function ao() {
        var a = {}, b;
        for (b in Un)
            Un.hasOwnProperty(b) && (a[b] = !0);
        return a
    }
    function $n(a) {
        var b = {}
          , c = (b.ad_storage = a.ld["1"] ? "granted" : "denied",
        b);
        Wg(c, 0, {
            gdprApplies: a ? a.gdprApplies : void 0,
            tcString: co()
        })
    }
    var co = function() {
        var a = Xn();
        return a.active ? a.tcString || "" : ""
    }
      , eo = function() {
        var a = Xn();
        return a.active && void 0 !== a.gdprApplies ? a.gdprApplies ? "1" : "0" : ""
    }
      , fo = function(a) {
        if (!Un.hasOwnProperty(String(a)))
            return !0;
        var b = Xn();
        return b.active && b.ld ? !!b.ld[String(a)] : !0
    };
    var mo = !1;
    var no = function() {
        this.g = {}
    }
      , oo = function(a, b, c) {
        null != c && (a.g[b] = c)
    }
      , po = function(a) {
        return Object.keys(a.g).map(function(b) {
            return encodeURIComponent(b) + "=" + encodeURIComponent(a.g[b])
        }).join("&")
    }
      , ro = function(a, b, c, d, e) {};
    var to = /[A-Z]+/
      , uo = /\s/
      , vo = function(a) {
        if (m(a)) {
            a = Wa(a);
            var b = a.indexOf("-");
            if (!(0 > b)) {
                var c = a.substring(0, b);
                if (to.test(c)) {
                    for (var d = a.substring(b + 1).split("/"), e = 0; e < d.length; e++)
                        if (!d[e] || uo.test(d[e]) && ("AW" !== c || 1 !== e))
                            return;
                    return {
                        id: a,
                        prefix: c,
                        containerId: c + "-" + d[0],
                        M: d
                    }
                }
            }
        }
    }
      , xo = function(a) {
        for (var b = {}, c = 0; c < a.length; ++c) {
            var d = vo(a[c]);
            d && (b[d.id] = d)
        }
        wo(b);
        var e = [];
        Ra(b, function(f, g) {
            e.push(g)
        });
        return e
    };
    function wo(a) {
        var b = [], c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                "AW" === d.prefix && d.M[1] && b.push(d.containerId)
            }
        for (var e = 0; e < b.length; ++e)
            delete a[b[e]]
    }
    ;var zo = function(a, b, c, d) {
        return (2 === yo() || d || "http:" != A.location.protocol ? a : b) + c
    }
      , yo = function() {
        var a = Xb(), b;
        if (1 === a)
            a: {
                var c = Wh;
                c = c.toLowerCase();
                for (var d = "https://" + c, e = "http://" + c, f = 1, g = I.getElementsByTagName("script"), h = 0; h < g.length && 100 > h; h++) {
                    var k = g[h].src;
                    if (k) {
                        k = k.toLowerCase();
                        if (0 === k.indexOf(e)) {
                            b = 3;
                            break a
                        }
                        1 === f && 0 === k.indexOf(d) && (f = 2)
                    }
                }
                b = f
            }
        else
            b = a;
        return b
    };
    var So = !1;
    function To() {
        if (Ha(Pb.joinAdInterestGroup))
            return !0;
        So || (Kn(''),
        So = !0);
        return Ha(Pb.joinAdInterestGroup)
    }
    function Uo(a, b) {
        var c = void 0;
        try {
            c = I.querySelector('iframe[data-tagging-id="' + b + '"]')
        } catch (e) {}
        if (c) {
            var d = Number(c.dataset.loadTime);
            if (d && 6E4 > Ya() - d) {
                tg("TAGGING", 9);
                return
            }
        } else
            try {
                if (50 <= I.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]').length) {
                    tg("TAGGING", 10);
                    return
                }
            } catch (e) {}
        Yb(a, void 0, {
            allow: "join-ad-interest-group"
        }, {
            taggingId: b,
            loadTime: Ya()
        }, c)
    }
    ;var Qp = function() {
        var a = !0;
        fo(7) && fo(9) && fo(10) || (a = !1);
        return a
    }
      , Rp = function() {
        var a = !0;
        fo(3) && fo(4) || (a = !1);
        return a
    };
    function Kq() {
        return Rh.gcq = Rh.gcq || new Lq
    }
    var Mq = function(a, b, c) {
        Kq().register(a, b, c)
    }
      , Nq = function(a, b, c, d) {
        Kq().push("event", [b, a], c, d)
    }
      , Oq = function(a, b, c) {
        Kq().insert("event", [b, a], c)
    }
      , Pq = function(a, b) {
        Kq().push("config", [a], b)
    }
      , Qq = function(a, b, c, d) {
        Kq().push("get", [a, b], c, d)
    }
      , Rq = function(a) {
        return Kq().getRemoteConfig(a)
    }
      , Sq = {}
      , Tq = function() {
        this.status = 1;
        this.containerConfig = {};
        this.targetConfig = {};
        this.remoteConfig = {};
        this.o = {};
        this.s = null;
        this.g = !1
    }
      , Uq = function(a, b, c, d, e) {
        this.type = a;
        this.s = b;
        this.V = c || "";
        this.g = d;
        this.o = e
    }
      , Lq = function() {
        this.o = {};
        this.s = {};
        this.g = [];
        this.C = {
            AW: !1,
            UA: !1
        }
    }
      , Vq = function(a, b) {
        var c = vo(b);
        return a.o[c.containerId] = a.o[c.containerId] || new Tq
    }
      , Wq = function(a, b, c) {
        if (b) {
            var d = vo(b);
            if (d && 1 === Vq(a, b).status) {
                Vq(a, b).status = 2;
                var e = {};
                Nm && (e.timeoutId = A.setTimeout(function() {
                    wg(38);
                    tm()
                }, 3E3));
                a.push("require", [e], d.containerId);
                Sq[d.containerId] = Ya();
                if (Bn()) {} else {
                    var g = "/gtag/js?id=" + encodeURIComponent(d.containerId) + "&l=" + L.Z + "&cx=c";
                    An() && (g += "&sign=" + L.Md);
                    var h = ("http:" != A.location.protocol ? "https:" : "http:") + ("//www.googletagmanager.com" + g)
                      , k = yn(c, g) || h;
                    Wb(k)
                }
            }
        }
    }
      , Xq = function(a, b, c, d) {
        if (d.V) {
            var e = Vq(a, d.V)
              , f = e.s;
            if (f) {
                var g = yc(c)
                  , h = yc(e.targetConfig[d.V])
                  , k = yc(e.containerConfig)
                  , n = yc(e.remoteConfig)
                  , p = yc(a.s)
                  , q = ji("gtm.uniqueEventId")
                  , t = vo(d.V).prefix
                  , u = $a(function() {
                    var v = g[U.$b];
                    v && J(v)
                })
                  , r = Lh(Kh(Mh(Jh(Hh(Ih(Gh(Fh(Eh(g), h), k), n), p), function() {
                    $m(q, t, "2");
                    u()
                }), function() {
                    $m(q, t, "3");
                    u()
                }), function(v, w) {
                    a.C[v] = w
                }), function(v) {
                    return a.C[v]
                });
                try {
                    $m(q, t, "1");
                    f(d.V, b, d.s, r)
                } catch (v) {
                    $m(q, t, "4");
                }
            }
        }
    };
    Lq.prototype.register = function(a, b, c) {
        var d = Vq(this, a);
        if (3 !== d.status) {
            d.s = b;
            d.status = 3;
            c && (yc(d.remoteConfig, c),
            d.remoteConfig = c);
            var e = vo(a)
              , f = Sq[e.containerId];
            if (void 0 !== f) {
                var g = Rh[e.containerId].bootstrap
                  , h = e.prefix.toUpperCase();
                Rh[e.containerId]._spx && (h = h.toLowerCase());
                var k = ji("gtm.uniqueEventId")
                  , n = h
                  , p = Ya() - g;
                if (Nm && !ym[k]) {
                    k !== um && (pm(),
                    um = k);
                    var q = n + "." + Math.floor(g - f) + "." + Math.floor(p);
                    Cm = Cm ? Cm + "," + q : "&cl=" + q
                }
                delete Sq[e.containerId]
            }
            this.flush()
        }
    }
    ;
    Lq.prototype.push = function(a, b, c, d) {
        var e = Math.floor(Ya() / 1E3);
        Wq(this, c, b[0][U.wa] || this.s[U.wa]);
        c && Vq(this, c).g && (d = !1);
        this.g.push(new Uq(a,e,c,b,d));
        d || this.flush()
    }
    ;
    Lq.prototype.insert = function(a, b, c) {
        var d = Math.floor(Ya() / 1E3);
        0 < this.g.length ? this.g.splice(1, 0, new Uq(a,d,c,b,!1)) : this.g.push(new Uq(a,d,c,b,!1))
    }
    ;
    Lq.prototype.flush = function(a) {
        for (var b = this, c = [], d = !1, e = {}; this.g.length; ) {
            var f = this.g[0];
            if (f.o)
                !f.V || Vq(this, f.V).g ? (f.o = !1,
                this.g.push(f)) : c.push(f),
                this.g.shift();
            else {
                switch (f.type) {
                case "require":
                    if (3 !== Vq(this, f.V).status && !a) {
                        this.g.push.apply(this.g, c);
                        return
                    }
                    Nm && A.clearTimeout(f.g[0].timeoutId);
                    break;
                case "set":
                    Ra(f.g[0], function(t, u) {
                        yc(eb(t, u), b.s)
                    });
                    break;
                case "config":
                    e.Ua = {};
                    Ra(f.g[0], function(t) {
                        return function(u, r) {
                            yc(eb(u, r), t.Ua)
                        }
                    }(e));
                    var g = !!e.Ua[U.Fd];
                    delete e.Ua[U.Fd];
                    var h = Vq(this, f.V)
                      , k = vo(f.V)
                      , n = k.containerId === k.id;
                    g || (n ? h.containerConfig = {} : h.targetConfig[f.V] = {});
                    h.g && g || Xq(this, U.Ea, e.Ua, f);
                    h.g = !0;
                    delete e.Ua[U.cc];
                    n ? yc(e.Ua, h.containerConfig) : yc(e.Ua, h.targetConfig[f.V]);
                    d = !0;
                    break;
                case "event":
                    e.pd = {};
                    Ra(f.g[0], function(t) {
                        return function(u, r) {
                            yc(eb(u, r), t.pd)
                        }
                    }(e));
                    Xq(this, f.g[1], e.pd, f);
                    break;
                case "get":
                    var p = {}
                      , q = (p[U.Ya] = f.g[0],
                    p[U.lb] = f.g[1],
                    p);
                    Xq(this, U.Wa, q, f)
                }
                this.g.shift();
                Yq(this, f)
            }
            e = {
                Ua: e.Ua,
                pd: e.pd
            }
        }
        this.g.push.apply(this.g, c);
        d && this.flush()
    }
    ;
    var Yq = function(a, b) {
        if ("require" !== b.type)
            if (b.V)
                for (var c = a.getCommandListeners(b.V)[b.type] || [], d = 0; d < c.length; d++)
                    c[d]();
            else
                for (var e in a.o)
                    if (a.o.hasOwnProperty(e)) {
                        var f = a.o[e];
                        if (f && f.o)
                            for (var g = f.o[b.type] || [], h = 0; h < g.length; h++)
                                g[h]()
                    }
    };
    Lq.prototype.getRemoteConfig = function(a) {
        return Vq(this, a).remoteConfig
    }
    ;
    Lq.prototype.getCommandListeners = function(a) {
        return Vq(this, a).o
    }
    ;
    var Ze;
    var Zq = {}
      , $q = function(a, b) {
        b = b.toString().split(",");
        for (var c = 0; c < b.length; c++) {
            var d = Zq[b[c]] || [];
            Zq[b[c]] = d;
            0 > d.indexOf(a) && d.push(a)
        }
    }
      , ar = function(a) {
        Ra(Zq, function(b, c) {
            var d = c.indexOf(a);
            0 <= d && c.splice(d, 1)
        })
    };
    var br = "HA GF G UA AW DC".split(" ")
      , cr = !1
      , dr = !1
      , er = 0;
    function fr(a, b) {
        var c = {
            event: a
        };
        b && (c.eventModel = yc(b),
        b[U.$b] && (c.eventCallback = b[U.$b]),
        b[U.zd] && (c.eventTimeout = b[U.zd]));
        return c
    }
    function gr(a) {
        a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", {
            value: di()
        });
        return a["gtm.uniqueEventId"]
    }
    function hr() {
        if (!cr && !Rh.gtagRegistered) {
            cr = Rh.gtagRegistered = !0;
            Rh.addTargetToGroup = function(c) {
                $q(c, "default")
            }
            ;
            var a = Rh.pendingDefaultTargets;
            delete Rh.pendingDefaultTargets;
            if (Ka(a))
                for (var b = 0; b < a.length; ++b)
                    $q(a[b], "default")
        }
        return cr
    }
    var ir = {
        config: function(a) {
            var b, c = gr(a);
            if (2 > a.length || !m(a[1]))
                return;
            var d = {};
            if (2 < a.length) {
                if (void 0 != a[2] && !xc(a[2]) || 3 < a.length)
                    return;
                d = a[2]
            }
            var e = vo(a[1]);
            if (!e)
                return;
            ar(e.id);
            $q(e.id, d[U.Me] || "default");
            delete d[U.Me];
            dr || wg(43);
            if (hr() && -1 !== br.indexOf(e.prefix)) {
                "G" === e.prefix && (d[U.cc] = !0);
                delete d[U.$b];
                e.id === e.containerId && (Rh.configCount = ++er);
                Pq(d, e.id);
                return
            }
            mi("gtag.targets." + e.id, void 0);
            mi("gtag.targets." + e.id, yc(d));
            var f = {};
            f[U.Eb] = e.id;
            b = fr(U.Ea, f);
            b["gtm.uniqueEventId"] = c;
            return b
        },
        consent: function(a) {
            if (3 === a.length) {
                wg(39);
                var b = di()
                  , c = a[1];
                "default" === c ? Ug(a[2]) : "update" === c && Wg(a[2], b)
            }
        },
        event: function(a) {
            var b = a[1];
            if (!(2 > a.length) && m(b)) {
                var c;
                if (2 < a.length) {
                    if (!xc(a[2]) && void 0 != a[2] || 3 < a.length)
                        return;
                    c = a[2]
                }
                var d = fr(b, c)
                  , e = gr(a);
                d["gtm.uniqueEventId"] = e;
                if ("optimize.callback" === b)
                    return d.eventModel = d.eventModel || {},
                    d;
                var f;
                var g = c && c[U.Eb];
                void 0 === g && (g = ji(U.Eb, 2),
                void 0 === g && (g = "default"));
                if (m(g) || Ka(g)) {
                    for (var h = g.toString().replace(/\s+/g, "").split(","), k = [], n = 0; n < h.length; n++)
                        if (0 <= h[n].indexOf("-"))
                            k.push(h[n]);
                        else {
                            var p = Zq[h[n]];
                            p && p.length && (k = k.concat(p))
                        }
                    f = xo(k)
                } else
                    f = void 0;
                var q = f;
                if (!q)
                    return;
                for (var t = hr(), u = [], r = 0; t && r < q.length; r++) {
                    var v = q[r];
                    if (-1 !== br.indexOf(v.prefix)) {
                        var w = yc(c);
                        "G" === v.prefix && (w[U.cc] = !0);
                        delete w[U.$b];
                        Nq(b, w, v.id)
                    }
                    u.push(v.id)
                }
                d.eventModel = d.eventModel || {};
                0 < q.length ? d.eventModel[U.Eb] = u.join() : delete d.eventModel[U.Eb];
                dr || wg(43);
                return d
            }
        },
        get: function(a) {
            wg(53);
            if (4 !== a.length || !m(a[1]) || !m(a[2]) || !Ha(a[3]))
                return;
            var b = vo(a[1])
              , c = String(a[2])
              , d = a[3];
            if (!b)
                return;
            dr || wg(43);
            if (!hr() || -1 === br.indexOf(b.prefix))
                return;
            di();
            var e = {};
            Qg(yc((e[U.Ya] = c,
            e[U.lb] = d,
            e)));
            Qq(c, function(f) {
                J(function() {
                    return d(f)
                })
            }, b.id);
        },
        js: function(a) {
            if (2 == a.length && a[1].getTime) {
                dr = !0;
                hr();
                var b = {};
                return b.event = "gtm.js",
                b["gtm.start"] = a[1].getTime(),
                b["gtm.uniqueEventId"] = gr(a),
                b
            }
        },
        policy: function(a) {
            if (3 === a.length) {
                var b = a[1]
                  , c = a[2]
                  , d = Ze.o;
                d.g[b] ? d.g[b].push(c) : d.g[b] = [c]
            }
        },
        set: function(a) {
            var b;
            2 == a.length && xc(a[1]) ? b = yc(a[1]) : 3 == a.length && m(a[1]) && (b = {},
            xc(a[2]) || Ka(a[2]) ? b[a[1]] = yc(a[2]) : b[a[1]] = a[2]);
            if (b) {
                if (di(),
                yc(b),
                hr()) {
                    var c = yc(b);
                    Kq().push("set", [c])
                }
                b._clear = !0;
                return b
            }
        }
    }
      , jr = {
        policy: !0
    };
    var kr = function() {
        this.g = [];
        this.o = []
    };
    kr.prototype.push = function(a, b, c) {
        var d = {
            debugContext: c,
            message: a,
            notBeforeEventId: b,
            priorityId: this.g.length + 1
        };
        this.g.push(d);
        for (var e = 0; e < this.o.length; e++)
            try {
                this.o[e](d)
            } catch (f) {}
    }
    ;
    kr.prototype.rh = function(a) {
        this.o.push(a)
    }
    ;
    kr.prototype.get = function() {
        for (var a = {}, b = 0; b < this.g.length; b++) {
            var c = this.g[b]
              , d = a[c.notBeforeEventId];
            d || (d = [],
            a[c.notBeforeEventId] = d);
            d.push(c)
        }
        return a
    }
    ;
    kr.prototype.get = kr.prototype.get;
    kr.prototype.listen = kr.prototype.rh;
    kr.prototype.push = kr.prototype.push;
    function lr(a, b) {
        return a.notBeforeEventId - b.notBeforeEventId || a.priorityId - b.priorityId
    }
    ;var mr = function(a) {
        var b = A[L.Z].hide;
        if (b && void 0 !== b[a] && b.end) {
            b[a] = !1;
            var c = !0, d;
            for (d in b)
                if (b.hasOwnProperty(d) && !0 === b[d]) {
                    c = !1;
                    break
                }
            c && (b.end(),
            b.end = null)
        }
    }
      , nr = function(a) {
        var b = A[L.Z]
          , c = b && b.hide;
        c && c.end && (c[a] = !0)
    };
    var yr = !1
      , zr = [];
    function Ar() {
        if (!yr) {
            yr = !0;
            for (var a = 0; a < zr.length; a++)
                J(zr[a])
        }
    }
    var Br = function(a) {
        yr ? J(a) : zr.push(a)
    };
    var Sr = function(a) {
        if (Rr(a))
            return a;
        this.g = a
    };
    Sr.prototype.Aj = function() {
        return this.g
    }
    ;
    var Rr = function(a) {
        return !a || "object" !== vc(a) || xc(a) ? !1 : "getUntrustedMessageValue"in a
    };
    Sr.prototype.getUntrustedMessageValue = Sr.prototype.Aj;
    var Tr = 0, Ur, Vr = {}, Wr = [], Xr = [], Yr = !1, Zr = !1, $r = function(a) {
        return A[L.Z].push(a)
    }, as = function(a, b, c) {
        a.eventCallback = b;
        c && (a.eventTimeout = c);
        return $r(a)
    }, bs = function(a, b) {
        var c = Rh[L.Z]
          , d = c ? c.subscribers : 1
          , e = 0
          , f = !1
          , g = void 0;
        b && (g = A.setTimeout(function() {
            f || (f = !0,
            a());
            g = void 0
        }, b));
        return function() {
            ++e === d && (g && (A.clearTimeout(g),
            g = void 0),
            f || (a(),
            f = !0))
        }
    };
    function cs(a) {
        var b = a._clear;
        Ra(a, function(d, e) {
            "_clear" !== d && (b && mi(d, void 0),
            mi(d, e))
        });
        Zh || (Zh = a["gtm.start"]);
        var c = a["gtm.uniqueEventId"];
        if (!a.event)
            return !1;
        c || (c = di(),
        a["gtm.uniqueEventId"] = c,
        mi("gtm.uniqueEventId", c));
        return wn(a)
    }
    function ds(a) {
        if (null == a || "object" !== typeof a)
            return !1;
        if (a.event)
            return !0;
        if (Sa(a)) {
            var b = a[0];
            if ("config" === b || "event" === b || "js" === b)
                return !0
        }
        return !1
    }
    function es() {
        for (var a = !1; !Zr && (0 < Wr.length || 0 < Xr.length); ) {
            if (!Yr && ds(Wr[0])) {
                var b = {}
                  , c = (b.event = "gtm.init_consent",
                b)
                  , d = {}
                  , e = (d.event = "gtm.init",
                d)
                  , f = Wr[0]["gtm.uniqueEventId"];
                f && (c["gtm.uniqueEventId"] = f - 2,
                e["gtm.uniqueEventId"] = f - 1);
                Wr.unshift(c, e);
                Yr = !0
            }
            Zr = !0;
            delete gi.eventModel;
            ii();
            var g = null
              , h = void 0;
            null == g && (g = Wr.shift());
            if (null != g) {
                var n = Rr(g);
                if (n) {
                    var p = g;
                    g = Rr(p) ? p.getUntrustedMessageValue() : void 0;
                    ni()
                }
                try {
                    if (Ha(g))
                        try {
                            g.call(ki)
                        } catch (B) {}
                    else if (Ka(g)) {
                        var q = g;
                        if (m(q[0])) {
                            var t = q[0].split(".")
                              , u = t.pop()
                              , r = q.slice(1)
                              , v = ji(t.join("."), 2);
                            if (null != v)
                                try {
                                    v[u].apply(v, r)
                                } catch (B) {}
                        }
                    } else {
                        if (Sa(g)) {
                            a: {
                                var w = g
                                  , y = h;
                                if (w.length && m(w[0])) {
                                    var x = ir[w[0]];
                                    if (x && (!n || !jr[w[0]])) {
                                        g = x(w, y);
                                        break a
                                    }
                                }
                                g = void 0
                            }
                            if (!g) {
                                Zr = !1;
                                continue
                            }
                        }
                        a = cs(g) || a;
                    }
                } finally {
                    n && ii(!0)
                }
            }
            Zr = !1
        }
        return !a
    }
    function gs() {
        var b = es();
        try {
            mr(L.J)
        } catch (c) {}
        return b
    }
    var js = function() {
        var a = Rb(L.Z, [])
          , b = Rb("google_tag_manager", {});
        b = b[L.Z] = b[L.Z] || {};
        Jl(function() {
            b.gtmDom || (b.gtmDom = !0,
            a.push({
                event: "gtm.dom"
            }))
        });
        Br(function() {
            b.gtmLoad || (b.gtmLoad = !0,
            a.push({
                event: "gtm.load"
            }))
        });
        b.subscribers = (b.subscribers || 0) + 1;
        var c = a.push;
        a.push = function() {
            var e;
            if (0 < Rh.SANDBOXED_JS_SEMAPHORE) {
                e = [];
                for (var f = 0; f < arguments.length; f++)
                    e[f] = new Sr(arguments[f])
            } else
                e = [].slice.call(arguments, 0);
            Wr.push.apply(Wr, e);
            var g = c.apply(a, e);
            if (300 < this.length)
                for (wg(4); 300 < this.length; )
                    this.shift();
            var h = "boolean" !== typeof g || g;
            return es() && h
        }
        ;
        var d = a.slice(0);
        Wr.push.apply(Wr, d);
        if (hs()) {
            J(gs)
        }
    };
    var hs = function() {
        var a = !0;
        return a
    };
    function ls(a) {
        if (null == a || 0 === a.length)
            return !1;
        var b = Number(a)
          , c = Ya();
        return b < c + 3E5 && b > c - 9E5
    }
    ;var ms = function(a) {
        Rh.addTargetToGroup ? Rh.addTargetToGroup(a) : (Rh.pendingDefaultTargets = Rh.pendingDefaultTargets || [],
        Rh.pendingDefaultTargets.push(a))
    };
    var ns = {
        wh: "G-2SSGMHY3NP"
    }
      , os = function() {
        var a = [];
        return a
    };
    var ps = {};
    ps.Hd = new String("undefined");
    var ss = function(a, b, c) {
        var d = {
            event: b,
            "gtm.element": a,
            "gtm.elementClasses": hc(a, "className"),
            "gtm.elementId": a["for"] || cc(a, "id") || "",
            "gtm.elementTarget": a.formTarget || hc(a, "target") || ""
        };
        c && (d["gtm.triggers"] = c.join(","));
        d["gtm.elementUrl"] = (a.attributes && a.attributes.formaction ? a.formAction : "") || a.action || hc(a, "href") || a.src || a.code || a.codebase || "";
        return d
    }
      , ts = function(a) {
        Rh.hasOwnProperty("autoEventsSettings") || (Rh.autoEventsSettings = {});
        var b = Rh.autoEventsSettings;
        b.hasOwnProperty(a) || (b[a] = {});
        return b[a]
    }
      , us = function(a, b, c) {
        ts(a)[b] = c
    }
      , vs = function(a, b, c, d) {
        var e = ts(a)
          , f = Za(e, b, d);
        e[b] = c(f)
    }
      , ws = function(a, b, c) {
        var d = ts(a);
        return Za(d, b, c)
    }
      , xs = function(a) {
        return "string" === typeof a ? a : String(di())
    };
    var Rs = A.clearTimeout
      , Ss = A.setTimeout
      , W = function(a, b, c, d) {
        if (Bn()) {
            b && J(b)
        } else
            return Wb(a, b, c, d)
    }
      , Ts = function() {
        return new Date
    }
      , Us = function() {
        return A.location.href
    }
      , Vs = function(a) {
        return Gi(Ii(a), "fragment")
    }
      , Ws = function(a) {
        return Hi(Ii(a))
    }
      , Xs = function(a, b) {
        return ji(a, b || 2)
    }
      , Ys = function(a, b, c) {
        return b ? as(a, b, c) : $r(a)
    }
      , Zs = function(a, b) {
        A[a] = b
    }
      , X = function(a, b, c) {
        b && (void 0 === A[a] || c && !A[a]) && (A[a] = b);
        return A[a]
    }
      , $s = function(a, b, c) {
        return lj(a, b, void 0 === c ? !0 : !!c)
    }
      , at = function(a, b, c) {
        return 0 === uj(a, b, c)
    }
      , bt = function(a, b) {
        if (Bn()) {
            b && J(b)
        } else
            Yb(a, b)
    }
      , ct = function(a) {
        return !!ws(a, "init", !1)
    }
      , dt = function(a) {
        us(a, "init", !0)
    }
      , et = function(a) {
        var b = Wh
          , c = "?id=" + encodeURIComponent(a) + "&l=" + L.Z;
        An() && (c += "&sign=" + L.Md,
        Qb && (b = Qb.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]));
        var d = zo("https://", "http://", b + c);
        W(d)
    }
      , ft = function(a, b, c) {
        Nm && (Cc(a) || an(c, b, a))
    };
    var Dt = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];
    function Et(a, b) {
        a = String(a);
        b = String(b);
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) === c
    }
    var Ft = new Pa;
    function Gt(a, b, c) {
        var d = c ? "i" : void 0;
        try {
            var e = String(b) + d
              , f = Ft.get(e);
            f || (f = new RegExp(b,d),
            Ft.set(e, f));
            return f.test(a)
        } catch (g) {
            return !1
        }
    }
    function Ht(a, b) {
        function c(g) {
            var h = Ii(g)
              , k = Gi(h, "protocol")
              , n = Gi(h, "host", !0)
              , p = Gi(h, "port")
              , q = Gi(h, "path").toLowerCase().replace(/\/$/, "");
            if (void 0 === k || "http" === k && "80" === p || "https" === k && "443" === p)
                k = "web",
                p = "default";
            return [k, n, p, q]
        }
        for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
            if (d[f] !== e[f])
                return !1;
        return !0
    }
    function It(a) {
        return Jt(a) ? 1 : 0
    }
    function Jt(a) {
        var b = a.arg0
          , c = a.arg1;
        if (a.any_of && Array.isArray(c)) {
            for (var d = 0; d < c.length; d++) {
                var e = yc(a, {});
                yc({
                    arg1: c[d],
                    any_of: void 0
                }, e);
                if (It(e))
                    return !0
            }
            return !1
        }
        switch (a["function"]) {
        case "_cn":
            return 0 <= String(b).indexOf(String(c));
        case "_css":
            var f;
            a: {
                if (b)
                    try {
                        for (var g = 0; g < Dt.length; g++) {
                            var h = Dt[g];
                            if (b[h]) {
                                f = b[h](c);
                                break a
                            }
                        }
                    } catch (k) {}
                f = !1
            }
            return f;
        case "_ew":
            return Et(b, c);
        case "_eq":
            return String(b) === String(c);
        case "_ge":
            return Number(b) >= Number(c);
        case "_gt":
            return Number(b) > Number(c);
        case "_lc":
            return 0 <= String(b).split(",").indexOf(String(c));
        case "_le":
            return Number(b) <= Number(c);
        case "_lt":
            return Number(b) < Number(c);
        case "_re":
            return Gt(b, c, a.ignore_case);
        case "_sw":
            return 0 === String(b).indexOf(String(c));
        case "_um":
            return Ht(b, c)
        }
        return !1
    }
    ;function Kt(a, b) {
        var c = this;
    }
    ;var Lt = !0;
    function Mt(a, b, c) {
        var d;
        return d
    }
    function Nt(a, b, c) {}
    ;function Ot(a, b, c, d) {}
    ;function Pt(a) {}
    ;function Tt(a) {}
    ;var Ut = {}
      , Vt = []
      , Wt = {}
      , Xt = 0
      , Yt = 0;
    function eu(a, b) {}
    function lu(a, b) {}
    ;function qu(a) {}
    ;var ru = {}
      , su = [];
    var zu = function(a, b) {};

    function Gu(a, b) {}
    ;var Hu = /^\s*$/, Iu, Ju = !1;
    function Uu(a, b) {}
    function Vu(a, b, c) {}
    ;var Wu = ["www.youtube.com", "www.youtube-nocookie.com"], Xu, Yu = !1, Zu = 0;
    function iv(a, b) {}
    function jv(a, b) {
        return !0
    }
    ;function kv(a, b, c) {}
    ;function lv(a, b) {
        var c;
        return c
    }
    ;function mv(a) {}
    ;function nv(a) {}
    ;function ov(a) {
        N(H(this), ["listener:!Fn"], arguments);
        Q(this, "process_dom_events", "window", "load");
        Br(Ac(a))
    }
    ;function pv(a) {
        var b;
        return b
    }
    ;function qv(a, b) {
        var c;
        var d = !1;
        var e = zc(c, this.g, d);
        void 0 === e && void 0 !== c && wg(45);
        return e
    }
    ;function rv(a) {
        var b;
        return b
    }
    ;function sv(a, b) {
        var c = null
          , d = !1;
        return zc(c, this.g, d)
    }
    ;function tv(a) {
        var b;
        var g = !1;
        return zc(b, this.g, g)
    }
    ;var uv = {}
      , vv = []
      , wv = {}
      , xv = 0
      , yv = 0;
    var Ev = !0;
    var Fv = function(a, b) {
        return b
    };
    var Kv = !0;
    function Lv(a, b) {
        return b
    }
    var Qv = !0;
    function Rv() {}
    var Sv = {}
      , Tv = [];
    var $v = !0;
    function aw(a, b) {
        return b
    }
    var ew = !0;
    function fw(a, b) {
        return b
    }
    var gw, hw;
    var qw = !0;
    var rw = function(a, b) {
        return b
    };
    var Nb = da(["data-gtm-yt-inspected-"]), sw = ["www.youtube.com", "www.youtube-nocookie.com"], tw, uw = !1;
    var Ew = !0;
    function Fw(a, b) {
        return b
    }
    function Gw(a) {
        return !1
    }
    var Hw;
    function Iw(a) {
        var b = !1;
        return b
    }
    ;var Kw = function(a, b, c) {
        if (c)
            switch (c.type) {
            case "event_name":
                return a;
            case "const":
                return c.const_value;
            case "event_param":
                var d = c.event_param.param_name;
                return b[d]
            }
    }
      , Nw = function(a, b, c, d) {
        if (c && !Lw(a, b, c))
            return !1;
        if (!d || 0 === d.length)
            return !0;
        for (var e = 0; e < d.length; e++)
            if (Mw(a, b, d[e].predicates || []))
                return !0;
        return !1
    }
      , Mw = function(a, b, c) {
        for (var d = 0; d < c.length; d++)
            if (!Lw(a, b, c[d]))
                return !1;
        return !0
    }
      , Lw = function(a, b, c) {
        var d = c.values || []
          , e = Kw(a, b, d[0])
          , f = Kw(a, b, d[1])
          , g = c.type;
        if ("eqi" === g || "swi" === g || "ewi" === g || "cni" === g)
            m(e) && (e = e.toLowerCase()),
            m(f) && (f = f.toLowerCase());
        var h = !1;
        switch (g) {
        case "eq":
        case "eqi":
            h = String(e) === String(f);
            break;
        case "sw":
        case "swi":
            h = 0 === String(e).indexOf(String(f));
            break;
        case "ew":
        case "ewi":
            h = Et(e, f);
            break;
        case "cn":
        case "cni":
            h = 0 <= String(e).indexOf(String(f));
            break;
        case "lt":
            h = Number(e) < Number(f);
            break;
        case "le":
            h = Number(e) <= Number(f);
            break;
        case "gt":
            h = Number(e) > Number(f);
            break;
        case "ge":
            h = Number(e) >= Number(f);
            break;
        case "re":
        case "rei":
            h = Gt(e, f, "rei" === g)
        }
        return !!c.negate !== h
    };
    function Ow(a, b) {
        var c = !1;
        return c
    }
    ;var Pw = function(a) {
        var b;
        return b
    };
    function Qw(a, b) {
        b = void 0 === b ? !0 : b;
        var c;
        return c
    }
    ;function Rw() {
        return rg.ah
    }
    ;function Sw() {
        var a = [];
        return zc(a)
    }
    ;function Tw(a) {
        var b = null;
        return b
    }
    ;function Uw(a, b) {
        var c;
        return c
    }
    ;function Vw(a, b) {
        var c;
        return c
    }
    ;function Ww(a, b) {
        var c;
        return c
    }
    ;function Xw(a) {
        var b = "";
        return b
    }
    ;function Yw() {
        return rg.Bh
    }
    ;function Zw(a, b) {
        var c;
        return c
    }
    ;function $w(a) {
        var b = "";
        return b
    }
    ;function ax() {
        Q(this, "get_user_agent");
        return A.navigator.userAgent
    }
    ;function bx(a) {
        return a ? {
            entityType: a.eh.type,
            indexInOriginContainer: a.eh.index,
            nameInOriginContainer: void 0,
            originContainerId: L.J
        } : {}
    }
    ;function dx(a, b) {}
    ;function ex(a, b) {}
    ;var fx = {};
    function gx(a, b, c, d, e, f) {
        f ? e[f] ? (e[f][0].push(c),
        e[f][1].push(d)) : (e[f] = [[c], [d]],
        Wb(a, function() {
            for (var g = e[f][0], h = 0; h < g.length; h++)
                J(g[h]);
            g.push = function(k) {
                J(k);
                return 0
            }
        }, function() {
            for (var g = e[f][1], h = 0; h < g.length; h++)
                J(g[h]);
            e[f] = null
        }, b)) : Wb(a, c, d, b)
    }
    function hx(a, b, c, d) {}
    var ix = Object.freeze({
        dl: 1,
        id: 1
    })
      , jx = {};
    function kx(a, b, c, d) {}
    ;function lx(a) {
        var b = !0;
        return b
    }
    ;var mx = function() {
        return !1
    }
      , nx = {
        getItem: function(a) {
            var b = null;
            return b
        },
        setItem: function(a, b) {
            return !1
        },
        removeItem: function(a) {}
    };
    var ox = ["textContent", "value", "tagName", "children", "childElementCount"];
    function px(a) {
        var b;
        return b
    }
    ;function qx() {}
    ;function rx(a, b) {
        var c;
        return c
    }
    ;function sx(a) {
        var b = void 0;
        return b
    }
    ;function tx(a) {}
    ;function ux(a, b) {
        var c = !1;
        return c
    }
    ;function vx() {
        var a = "";
        return a
    }
    ;function wx() {
        var a = "";
        return a
    }
    ;var xx = function(a, b, c) {
        this.cb = a;
        this.eventName = b;
        this.g = c;
        this.za = {};
        this.metadata = {}
    }
      , yx = function(a, b, c) {
        var d = a.g.getWithConfig(b);
        void 0 !== d ? a.za[b] = d : void 0 !== c && (a.za[b] = c)
    };
    function Bx(a, b) {
        var c = this;
    }
    ;var Cx = Object.freeze(["config", "event", "get", "set"]);
    function Dx(a, b, c) {}
    ;var Ex = !0;
    function Fx(a, b) {
        var c = !1;
        return c
    }
    function Gx() {}
    ;function Hx(a, b, c, d) {
        d = void 0 === d ? !1 : d;
    }
    ;function Ix(a, b, c) {}
    ;function Jx(a, b, c, d) {
        var e = this;
        d = void 0 === d ? !0 : d;
        var f = !1;
        return f
    }
    ;var Kx = !1;
    function Lx(a) {
        N(H(this), ["consentSettings:!DustMap"], arguments);
        for (var b = a.Gb(), c = b.length(), d = 0; d < c; d++) {
            var e = b.get(d);
            e !== U.pe && Q(this, "access_consent", e, "write")
        }
        var f = this.g.g
          , g = bx(f);
        if (Kx) {
            var h = ln("consent", "default", Ac(a));
            ks(h, f.eventId, g)
        } else
            Ug(Ac(a))
    }
    function Mx(a, b, c) {
        return !1
    }
    ;function Nx(a, b, c) {
        N(H(this), ["targetId:!string", "name:!string", "value:!*"], arguments);
        var d = si(a) || {};
        d[b] = Ac(c, this.g);
        var e = a;
        qi || ri();
        pi[e] = d;
    }
    ;function Ox(a, b, c) {}
    ;var Px = function(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            128 > e ? b[c++] = e : (2048 > e ? b[c++] = e >> 6 | 192 : (55296 == (e & 64512) && d + 1 < a.length && 56320 == (a.charCodeAt(d + 1) & 64512) ? (e = 65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023),
            b[c++] = e >> 18 | 240,
            b[c++] = e >> 12 & 63 | 128) : b[c++] = e >> 12 | 224,
            b[c++] = e >> 6 & 63 | 128),
            b[c++] = e & 63 | 128)
        }
        return b
    };
    function Qx(a, b, c, d) {
        var e = this;
    }
    ;function Rx(a, b, c) {}
    ;var Sx = {}
      , Tx = {};
    Sx.getItem = function(a) {
        var b = null;
        return b
    }
    ;
    Sx.setItem = function(a, b) {}
    ;
    Sx.removeItem = function(a) {}
    ;
    Sx.clear = function() {}
    ;
    var Ux = function(a) {
        var b;
        return b
    };
    var Vx = !1;
    function Wx(a) {
        N(H(this), ["consentSettings:!DustMap"], arguments);
        var b = Ac(a), c;
        for (c in b)
            b.hasOwnProperty(c) && Q(this, "access_consent", c, "write");
        var d = this.g.g
          , e = bx(d);
        Vx ? ks(ln("consent", "update", b), d.eventId, e) : Wg(b, d.eventId)
    }
    var Xx = function() {
        var a = new ig;
        Bn() ? (a.add("injectHiddenIframe", Fa),
        a.add("injectScript", Fa)) : (a.add("injectHiddenIframe", ex),
        a.add("injectScript", hx));
        var b = Ix;
        a.add("Math", Nf());
        a.add("Object", gg);
        a.add("TestHelper", lg());
        a.add("addConsentListener", Kt);
        a.add("addEventCallback", Pt);
        a.add("aliasInWindow", jv);
        a.add("assertApi", Jf);
        a.add("assertThat", Kf);
        a.add("callInWindow", lv);
        a.add("callLater", mv);
        a.add("copyFromDataLayer", qv);
        a.add("copyFromWindow", rv);
        a.add("createArgumentsQueue", sv);
        a.add("createQueue", tv);
        a.add("decodeUri", Of);
        a.add("decodeUriComponent", Pf);
        a.add("encodeUri", Qf);
        a.add("encodeUriComponent", Rf);
        a.add("fail", Sf);
        a.add("fromBase64", Pw, !("atob"in A));
        a.add("generateRandom", Tf);
        a.add("getContainerVersion", Uf);
        a.add("getCookieValues", Qw);
        a.add("getQueryParameters", Vw);
        a.add("getReferrerQueryParameters", Ww);
        a.add("getReferrerUrl", Xw);
        a.add("getTimestamp", Xf);
        a.add("getTimestampMillis", Xf);
        a.add("getType", Yf);
        a.add("getUrl", $w);
        a.add("isConsentGranted", lx);
        a.add("localStorage", nx, !mx());
        a.add("logToConsole", qx);
        a.add("makeInteger", $f);
        a.add("makeNumber", ag);
        a.add("makeString", bg);
        a.add("makeTableMap", cg);
        a.add("mock", fg);
        a.add("parseUrl", sx);
        a.add("queryPermission", ux);
        a.add("readCharacterSet", vx);
        a.add("readTitle", wx);
        a.add("sendPixel", b);
        a.add("setCookie", Jx);
        a.add("setDefaultConsentState", Lx);
        a.add("setInWindow", Mx);
        a.add("sha256", Qx);
        a.add("templateStorage", Sx);
        a.add("toBase64", Ux, !("btoa"in A));
        a.add("updateConsentState", Wx);
        kg(a, "callOnWindowLoad", ov);
        kg(a, "internal.addFormInteractionListener", eu);
        kg(a, "internal.addFormSubmitListener", lu);
        kg(a, "internal.addGaSendListener", qu);
        kg(a, "internal.addHistoryChangeListener", zu);
        kg(a, "internal.evaluateFilteringRules", Gw);
        kg(a, "internal.evaluateMatchingRules", Iw);
        kg(a, "internal.getFlags", Wf);
        kg(a, "internal.locateUserData", px);
        kg(a, "internal.registerGtagCommandListener", Dx);
        kg(a, "internal.sendGtagEvent", Hx);
        a.add("JSON", Zf(function(c) {
            var d = this.g.g;
            d && d.log.call(this, "error", c)
        }));
        kg(a, "internal.appendRemoteConfigParameter", kv),
        kg(a, "internal.getRemoteConfigParameter", Zw),
        kg(a, "internal.setRemoteConfigParameter", Ox),
        kg(a, "internal.sortRemoteConfigParameters", Rx),
        kg(a, "internal.getProductSettingsParameter", Uw),
        kg(a, "internal.setProductSettingsParameter", Nx);
        Bn() ? kg(a, "internal.injectScript", Fa) : kg(a, "internal.injectScript", kx);
        return function(c) {
            var d;
            if (a.g.hasOwnProperty(c))
                d = a.get(c, this);
            else {
                var e;
                if (e = a.o.hasOwnProperty(c)) {
                    var f = !1
                      , g = this.g.g;
                    if (g) {
                        var h = g.Yc();
                        if (h) {
                            0 !== h.indexOf("__cvt_") && (f = !0);
                        }
                    }
                    e = f
                }
                if (e) {
                    var k = a.o.hasOwnProperty(c) ? a.o[c] : void 0;
                    d = k
                } else
                    throw Error(c + " is not a valid API name.");
            }
            return d
        }
    };
    var Yx = function() {
        return !1
    }
      , Zx = function() {
        var a = {};
        return function(b, c, d) {}
    };
    var $x;
    function ay() {
        var a = $x;
        return function(b, c, d) {
            var e = d && d.event;
            by(c);
            var f = new mb;
            Ra(c, function(q, t) {
                var u = zc(t);
                void 0 === u && void 0 !== t && wg(44);
                f.set(q, u)
            });
            a.g.g.F = Oe();
            var g = {
                $i: $e(b),
                eventId: void 0 !== e ? e.id : void 0,
                Pd: void 0 !== e ? function(q) {
                    return e.Ib.Pd(q)
                }
                : void 0,
                Yc: function() {
                    return b
                },
                log: function() {},
                eh: {
                    index: d && d.index,
                    type: d && d.type
                }
            };
            if (Yx()) {
                var h = Zx()
                  , k = void 0
                  , n = void 0;
                g.Ka = {
                    Nf: [],
                    Nc: {},
                    ub: function(q, t, u) {
                        1 === t && (k = q);
                        7 === t && (n = u);
                        h(q, t, u)
                    },
                    Cf: dg()
                };
                g.log = function(q, t) {
                    if (k) {
                        var u = Array.prototype.slice.call(arguments, 1);
                        h(k, 4, {
                            level: q,
                            source: n,
                            message: u
                        })
                    }
                }
            }
            var p = Ud(a, g, [b, f]);
            a.g.g.F = void 0;
            p instanceof ta && "return" === p.g && (p = p.o);
            return Ac(p)
        }
    }
    function by(a) {
        var b = a.gtmOnSuccess
          , c = a.gtmOnFailure;
        Ha(b) && (a.gtmOnSuccess = function() {
            J(b)
        }
        );
        Ha(c) && (a.gtmOnFailure = function() {
            J(c)
        }
        )
    }
    function cy() {
        $x.g.g.O = function(a, b, c) {
            Rh.SANDBOXED_JS_SEMAPHORE = Rh.SANDBOXED_JS_SEMAPHORE || 0;
            Rh.SANDBOXED_JS_SEMAPHORE++;
            try {
                return a.apply(b, c)
            } finally {
                Rh.SANDBOXED_JS_SEMAPHORE--
            }
        }
    }
    function dy(a) {
        void 0 !== a && Ra(a, function(b, c) {
            for (var d = 0; d < c.length; d++) {
                var e = c[d].replace(/^_*/, "");
                ci[e] = ci[e] || [];
                ci[e].push(b)
            }
        })
    }
    ;var ey = encodeURI
      , Y = encodeURIComponent
      , fy = Zb;
    var gy = function(a, b) {
        if (!a)
            return !1;
        var c = Gi(Ii(a), "host");
        if (!c)
            return !1;
        for (var d = 0; b && d < b.length; d++) {
            var e = b[d] && b[d].toLowerCase();
            if (e) {
                var f = c.length - e.length;
                0 < f && "." != e.charAt(0) && (f--,
                e = "." + e);
                if (0 <= f && c.indexOf(e, f) == f)
                    return !0
            }
        }
        return !1
    };
    var hy = function(a, b, c) {
        for (var d = {}, e = !1, f = 0; a && f < a.length; f++)
            a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c],
            e = !0);
        return e ? d : null
    };
    var rz = {};
    rz[U.Yb] = "";
    rz[U.Fa] = "";
    rz[U.Ma] = "";
    rz[U.ma] = "auto";
    rz[U.kb] = "/";
    rz[U.va] = 63072E3;
    rz[U.Fc] = 30;
    rz[U.Dd] = 1E4;
    rz[U.oa] = !0;
    var sz = function(a, b, c, d, e, f) {
        f = void 0 === f ? !1 : f;
        xx.call(this, a, b, d);
        this.s = c;
        this.I = d.eventModel;
        this.Fg = d.containerConfig;
        this.O = d.getWithConfig(U.jb) ? 1 : 8;
        this.Ze = d.getWithConfig(U.Cb) ? 1 : 8;
        this.F = e;
        this.Va = this.Xe = this.Rg = this.C = this.Mg = this.Ng = this.Gd = !1;
        this.Nb = 0;
        this.cf = this.fc = !1;
        this.df = void 0;
        this.zb = 0;
        this.Qg = this.o = this.af = this.$e = void 0;
        this.Pg = !1;
        this.Jg = this.bf = void 0;
        this.Ui = f
    };
    oa(sz, xx);
    l = sz.prototype;
    l.Oa = function(a, b) {
        void 0 === this.B(a) && (this.I[a] = b)
    }
    ;
    l.Fh = function(a, b) {
        b <= this.O && (this.I[U.jb] = a,
        this.O = b)
    }
    ;
    l.sk = function(a, b) {
        b <= this.Ze && (this.I[U.Cb] = a,
        this.Ze = b)
    }
    ;
    l.B = function(a) {
        return void 0 !== this.I[a] ? this.I[a] : void 0 !== this.g.getWithConfig(a) ? this.g.getWithConfig(a) : void 0 !== this.F[a] ? this.F[a] : rz[a]
    }
    ;
    l.getRemoteConfig = function(a) {
        return void 0 !== this.g.remoteConfig[a] ? this.g.remoteConfig[a] : this.F[a]
    }
    ;
    l.be = function(a) {
        var b = this.Mb(U.yd, this.F[U.yd]);
        if (b && void 0 !== b[a || this.eventName])
            return b[a || this.eventName]
    }
    ;
    l.Mb = function(a, b) {
        var c = si(this.cb);
        return c && c.hasOwnProperty(a) ? c[a] : b
    }
    ;
    l.jh = function() {
        var a = this.B(U.xa);
        if ("object" === typeof a)
            return a
    }
    ;
    l.lh = function() {
        return !!this.jh()
    }
    ;
    l.abort = function() {
        throw "ABORT";
    }
    ;
    l.Qa = function() {
        return !(!0 !== this.B(U.Bc) && "true" !== this.B(U.Bc) || !this.B(U.wa))
    }
    ;
    l.Sj = function() {
        return this.C || !!this.B(U.kg)
    }
    ;
    l.yf = function() {
        var a = !1;
        return a
    }
    ;
    l.cd = function() {
        return this.Mb(U.Le, !1)
    }
    ;
    l.Mc = function() {
        return !1 !== this.B(U.ia)
    }
    ;
    l.hf = function() {
        return !1 !== this.B(U.X)
    }
    ;
    var tz = !1
      , uz = function(a) {
        var b = !1;
        b = a.eventName === U.xc && Kg() && a.Qa();
        return !(!Pb.sendBeacon || a.fc || a.o && a.lh() || a.C || a.Xe || a.Va || b || tz)
    };
    var vz = function(a) {
        tg("GA4_EVENT", a)
    };
    var xz = function(a) {
        return !a || wz.test(a) || U.Fi.hasOwnProperty(a)
    }
      , yz = function(a, b, c) {
        for (var d = c.event_param_ops || [], e = 0; e < d.length; e++) {
            var f = d[e];
            if (f.edit_param) {
                var g = f.edit_param.param_name, h = Kw(a, b, f.edit_param.param_value), k;
                if (h) {
                    var n = Number(h);
                    k = isNaN(n) ? h : n
                } else
                    k = h;
                b[g] = k
            } else
                f.delete_param && delete b[f.delete_param.param_name]
        }
    }
      , wz = /^(_|ga_|google_|gtag\.|firebase_).*$/;
    var zz = function(a) {
        var b = 0
          , c = 0;
        return {
            start: function() {
                b = Ya()
            },
            stop: function() {
                c = this.get()
            },
            get: function() {
                var d = 0;
                a.zf() && (d = Ya() - b);
                return d + c
            }
        }
    }
      , Az = !1;
    var Bz = function() {
        this.g = void 0;
        this.o = 0;
        this.isActive = this.isVisible = this.s = !1;
        this.F = this.C = void 0
    };
    l = Bz.prototype;
    l.Ii = function(a) {
        var b = this;
        if (!this.g) {
            this.s = I.hasFocus();
            this.isVisible = !I.hidden;
            this.isActive = !0;
            var c = function(d, e, f) {
                $b(d, e, function(g) {
                    b.g.stop();
                    f(g);
                    b.zf() && b.g.start()
                })
            };
            c(A, "focus", function() {
                b.s = !0
            });
            c(A, "blur", function() {
                b.s = !1
            });
            c(A, "pageshow", function(d) {
                b.isActive = !0;
                d.persisted && wg(56);
                b.F && b.F()
            });
            c(A, "pagehide", function() {
                b.isActive = !1;
                b.C && b.C()
            });
            c(I, "visibilitychange", function() {
                b.isVisible = !I.hidden
            });
            a.Qa() && -1 === (Pb.userAgent || "").indexOf("Firefox") && -1 === (Pb.userAgent || "").indexOf("FxiOS") && c(A, "beforeunload", function() {
                tz = !0
            });
            this.If();
            this.o = 0
        }
    }
    ;
    l.If = function() {
        this.o += this.ae();
        this.g = zz(this);
        this.zf() && this.g.start()
    }
    ;
    l.yk = function(a) {
        var b = this.ae();
        a.zb = b
    }
    ;
    l.Dj = function(a) {
        Az ? a.za[U.xd] = void 0 : a.zb = 0;
        this.If();
        this.o = 0
    }
    ;
    l.zf = function() {
        return this.s && this.isVisible && this.isActive
    }
    ;
    l.yj = function() {
        return this.o + this.ae()
    }
    ;
    l.ae = function() {
        return this.g && this.g.get() || 0
    }
    ;
    l.hk = function(a) {
        this.C = a
    }
    ;
    l.Ch = function(a) {
        this.F = a
    }
    ;
    function Cz() {
        return A.gaGlobal = A.gaGlobal || {}
    }
    var Dz = function() {
        var a = Cz();
        a.hid = a.hid || Oa();
        return a.hid
    }
      , Ez = function(a, b) {
        var c = Cz();
        if (void 0 == c.vid || b && !c.from_cookie)
            c.vid = a,
            c.from_cookie = b
    };
    var Iz = function(a, b) {
        var c;
        var d = Fz(b)
          , e = String(b.B(U.ma))
          , f = String(b.B(U.kb))
          , g = Number(b.B(U.va))
          , h = b.B(U.Zb)
          , k = {
            fb: U.N,
            domain: e,
            path: f,
            expires: g ? new Date(Ya() + 1E3 * g) : void 0,
            flags: "" + b.B(U.Ma)
        };
        if (!1 === h && Gz(b) === a)
            c = !0;
        else {
            var n = Cj(a, Hz[0], e, f);
            c = 1 !== uj(d, n, k)
        }
        return c
    }
      , Gz = function(a) {
        var b = Fz(a)
          , c = "" + a.B(U.ma)
          , d = "" + a.B(U.kb)
          , e = Bj(b, c, d, Hz, U.N);
        if (!e) {
            var f = String(a.B(U.Yb));
            f && f != b && (e = Bj(f, c, d, Hz, U.N))
        }
        return e
    }
      , Fz = function(a) {
        return String(a.B(U.Fa)) + "_ga"
    }
      , Hz = ["GA1"];
    var Lz = function(a, b) {
        var c = Jz(b)
          , d = String(b.B(U.ma))
          , e = String(b.B(U.kb))
          , f = Number(b.B(U.va))
          , g = Cj(a, Kz[0], d, e)
          , h = {
            fb: U.N,
            domain: d,
            path: e,
            expires: f ? new Date(Ya() + 1E3 * f) : void 0,
            flags: String(b.B(U.Ma))
        };
        return 1 !== uj(c, g, h)
    }
      , Mz = function(a) {
        var b = Jz(a)
          , c = String(a.B(U.ma))
          , d = String(a.B(U.kb));
        return Bj(b, c, d, Kz, U.N)
    }
      , Kz = ["GS1"]
      , Jz = function(a) {
        return String(a.B(U.Fa)) + "_ga_" + a.cb.substr(2)
    }
      , Nz = function(a) {
        var b;
        var c = a.I[U.Gc]
          , d = a.I[U.Te]
          , e = !!a.I[U.Pe]
          , f = a.I[U.Cb];
        if (c && d) {
            var g = [c, d, Ta(a.I[U.Se]), a.s, a.Nb];
            b = g.join(".")
        } else
            b = void 0;
        return b
    };
    var Oz = function(a) {
        var b = a.B(U.na)
          , c = a.getRemoteConfig(U.na);
        if (c === b)
            return c;
        var d = yc(b);
        c && c[U.P] && (d[U.P] = (d[U.P] || []).concat(c[U.P]));
        return d
    }
      , Pz = function(a, b) {
        var c = kk(!0);
        return "1" !== c._up ? {} : {
            clientId: c[a],
            Eh: c[b]
        }
    }
      , Qz = function(a, b, c) {
        var d = kk(!0)
          , e = d[b];
        e && (a.Fh(e, 2),
        Iz(e, a));
        var f = d[c];
        f && Lz(f, a);
        return !(!e || !f)
    }
      , Rz = !1
      , Sz = function(a) {
        var b = Oz(a) || {}
          , c = Fz(a)
          , d = Jz(a);
        tk(b[U.ac], !!b[U.P]) && Qz(a, c, d) && (Rz = !0);
        b[U.P] && qk(function() {
            var e = {}
              , f = Gz(a);
            f && (e[c] = f);
            var g = Mz(a);
            g && (e[d] = g);
            var h = lj("FPLC", void 0, void 0, U.N);
            h.length && (e._fplc = h[0]);
            return e
        }, b[U.P], b[U.Cc], !!b[U.bc])
    }
      , Uz = function(a) {
        if (!a.B(U.qb))
            return {};
        var b = Fz(a)
          , c = Jz(a);
        rk(function() {
            var d;
            if (Xg("analytics_storage"))
                d = {};
            else {
                var e = {};
                d = (e._up = "1",
                e[b] = a.I[U.jb],
                e[c] = Nz(a),
                e)
            }
            return d
        }, 1);
        return !Xg("analytics_storage") && Tz() ? Pz(b, c) : {}
    }
      , Tz = function() {
        var a = Fi(A.location, "host")
          , b = Fi(Ii(I.referrer), "host");
        return a && b ? a === b || 0 <= a.indexOf("." + b) || 0 <= b.indexOf("." + a) ? !0 : !1 : !1
    }
      , Vz = function(a) {
        if (!a)
            return a;
        var b = String(a);
        b = jk(b);
        return b = jk(b, "_ga")
    };
    var Wz = function() {
        var a = Ya()
          , b = a + 864E5
          , c = 20
          , d = 5E3;
        return function() {
            var e = Ya();
            e >= b && (b = e + 864E5,
            d = 5E3);
            if (1 > d)
                return !1;
            c = Math.min(c + (e - a) / 1E3 * 5, 20);
            a = e;
            if (1 > c)
                return !1;
            d--;
            c--;
            return !0
        }
    };
    var Yz = function(a) {
        var b;
        b = Xz ? a.za[U.Na] : a.B(U.Na);
        return Gi(Ii(b), "host", !0)
    }
      , Xz = !1;
    var Zz = !1;
    Zz = !0;
    var $z = "" + Oa()
      , aA = !1
      , bA = void 0;
    var cA = function() {
        if (Ha(A.__uspapi)) {
            var a = "";
            try {
                A.__uspapi("getUSPData", 1, function(b, c) {
                    if (c && b) {
                        var d = b.uspString;
                        d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d)
                    }
                })
            } catch (b) {}
            return a
        }
    };
    var dA = function(a, b) {
        if (b.Qa()) {
            var c = cA();
            c && (a.us_privacy = c);
            var d = eo();
            d && (a.gdpr = d);
            var e = co();
            e && (a.gdpr_consent = e)
        }
    }
      , eA = function(a, b) {
        if (Kg() && (a.gcs = Yg(),
        b.bf && (a.gcu = "1"),
        b.Qa())) {
            Lg() && (a.gcd = Zg());
            var c = b.B(U.W);
            a.adr = void 0 !== c && !1 !== c ? "1" : "0";
            b.bf && (a.gcut = U.qe[b.Jg || ""]);
        }
    }
      , fA = function(a, b, c) {
        void 0 === c && (c = {});
        if ("object" === typeof b)
            for (var d in b)
                fA(a + "." + d, b[d], c);
        else
            c[a] = b;
        return c
    }
      , gA = function(a) {
        var b = "https://www.google-analytics.com/g/collect"
          , c = xn(a.B(U.wa), "/g/collect");
        if (c)
            return c;
        var d = !0;
        Xg(U.D) && Xg(U.N) || (d = !1);
        var e = a.Mb(U.nb, a.B(U.nb));
        e && !a.cd() && !1 !== a.B(U.yc) && Qp() && d && (b = "https://analytics.google.com/g/collect");
        return b
    }
      , hA = !1;
    var iA = {};
    iA[U.Ci] = "tid";
    iA[U.jb] = "cid";
    iA[U.ob] = "ul";
    iA[U.Ke] = "_fid";
    iA[U.yg] = "tt";
    iA[U.Ne] = "ir";
    iA[U.wg] = "sr";
    var jA = {};
    jA[U.Gc] = "sid";
    jA[U.Te] = "sct";
    jA[U.Se] = "seg";
    jA[U.Za] = "dl";
    jA[U.Na] = "dr";
    jA[U.Dc] = "dt";
    jA[U.ja] = "cu";
    jA[U.Ga] = "uid";
    var kA = {};
    var lA = {};
    lA[U.$f] = "cc";
    lA[U.ag] = "ci";
    lA[U.bg] = "cm";
    lA[U.cg] = "cn";
    lA[U.dg] = "cs";
    lA[U.eg] = "ck";
    var mA = function(a, b, c) {
        function d(z, B) {
            if (void 0 !== B && !U.Di.hasOwnProperty(z)) {
                null === B && (B = "");
                var C = B;
                !0 === B && (C = "1");
                !1 === B && (C = "0");
                var D;
                if ("_" === z.charAt(0)) {
                    e[z] = ff(C, 300)
                } else if (iA[z])
                    D = iA[z],
                    e[D] = ff(C, 300);
                else if (jA[z])
                    D = jA[z],
                    g[D] = ff(C, 300);
                else if (kA[z])
                    D = kA[z],
                    f[D] = ff(C, 300);
                else if (!t(z, B)) {
                    var G;
                    lA[z] ? G = !0 : z !== U.zc ? G = !1 : ("object" !== typeof B && q(z, B),
                    G = !0);
                    if (G)
                        return;
                    q(z, B)
                }
            }
        }
        var e = {}
          , f = {}
          , g = {};
        e.v = "2";
        e.tid = a.cb;
        e.gtm = Fn();
        e._p = Dz();
        a.df && (e.sr = a.df);
        a.af && (e._z = a.af);
        c && (e.em = c);
        a.Va && (e._gaz = 1);
        eA(e, a);
        dA(e, a);
        a.Qg && (e.gtm_up = "1");
        var h = gb(Oh(a.g, U.aa, 1), ".");
        h && (e.gdid = h);
        f.en = ff(a.eventName, 40);
        a.Gd && (f._fv = a.Ng ? 2 : 1);
        a.Mg && (f._nsi = 1);
        a.C && (f._ss = a.Rg ? 2 : 1);
        a.fc && (f._c = 1);
        0 < a.zb && !hA && (f._et = a.zb);
        if (a.cf) {
            var k = a.B(U.da);
            if (Ka(k))
                for (var n = 0; n < k.length && 200 > n; n++)
                    f["pr" + (n + 1)] = lf(k[n])
        }
        a.$e && (f._eu = a.$e);
        var p = gb(Oh(a.g, U.aa, 2), ".");
        p && (f.edid = p);
        for (var q = function(z, B) {
            z = ff(z, 40);
            var C = "ep." + z
              , D = "epn." + z;
            z = Ja(B) ? D : C;
            var E = Ja(B) ? C : D;
            f.hasOwnProperty(E) && delete f[E];
            f[z] = ff(B, 100)
        }, t = function(z, B) {
            var C = z.split(".");
            if (z === U.xa && "object" !== typeof B)
                return q(z, B),
                !0;
            if (C[0] === U.xa) {
                if ((1 < C.length || "object" === typeof B) && a.Qa()) {
                    var D = fA(z, B);
                    Ra(D, function(E, G) {
                        return void q(E, G)
                    })
                }
                return !0
            }
            return !1
        }, u = 0; u < U.Ag.length; ++u) {
            var r = U.Ag[u];
            d(r, a.B(r))
        }
        a.cf && d(U.ja, a.B(U.ja));
        Ra(a.Fg, d);
        Ra(a.I, d);
        var v = Ph(a.g)
          , w = function(z, B) {
            if (void 0 !== B) {
                null === B && (B = "");
                var C = lA[z];
                C && (g[C] = ff(B, 300))
            }
        };
        "object" === typeof v[U.zc] ? Ra(v[U.zc], function(z, B) {
            w((U.zc + "_" + z).toLowerCase(), B)
        }) : Ra(v, w);
        var y;
        y = y || a.B(U.Ha) || {};
        !1 !== a.B(U.X) && Rp() || (y._npa = "1");
        Ra(y, function(z, B) {
            if (void 0 !== B && (null === B && (B = ""),
            b[z] !== B)) {
                if (z !== U.Ga || g.uid) {
                    var C = (Ja(B) ? "upn." : "up.") + ff(z, 24);
                    f[C] = ff(B, 36)
                } else
                    g.uid = ff(B, 36);
                b[z] = B
            }
        });
        var x = !1;
        return nf.call(this, {
            Aa: e,
            Qb: g,
            I: f
        }, gA(a), a.Qa(), x) || this
    };
    oa(mA, nf);
    var nA = function(a, b) {
        return a.replace(/\$\{([^\}]+)\}/g, function(c, d) {
            return b[d] || c
        })
    }
      , oA = function(a) {
        var b = a.search;
        return a.protocol + "//" + a.hostname + a.pathname + (b ? b + "&richsstsse" : "?richsstsse")
    }
      , pA = function(a) {
        var b = {}
          , c = ""
          , d = a.pathname.indexOf("/g/collect");
        0 <= d && (c = a.pathname.substring(0, d));
        b.transport_url = a.protocol + "//" + a.hostname + c;
        return b
    }
      , qA = function(a, b) {
        var c = new A.XMLHttpRequest;
        c.withCredentials = !0;
        var d = b ? "POST" : "GET"
          , e = ""
          , f = 0
          , g = Ii(a)
          , h = pA(g)
          , k = oA(g);
        c.onprogress = function(n) {
            if (200 === c.status) {
                e += c.responseText.substring(f);
                f = n.loaded;
                for (var p = nA(e, h), q = p.indexOf("\n\n"); -1 !== q; ) {
                    var t;
                    a: {
                        var u = fa(p.substring(0, q).split("\n"))
                          , r = u.next().value
                          , v = u.next().value;
                        if (r.startsWith("event: message") && v.startsWith("data: "))
                            try {
                                t = JSON.parse(v.substring(v.indexOf(":") + 1));
                                break a
                            } catch (S) {}
                        t = void 0
                    }
                    if (t) {
                        var w = t.send_pixel || [];
                        if (Array.isArray(w))
                            for (var y = 0; y < w.length; y++) {
                                var x = w[y]
                                  , z = Gn('', 0);
                                if (1 === z) {
                                    var B = Math.floor(2 * Math.random()) + 1, C, D = x, E = B, G = 0 < D.indexOf("?") ? "&" : "?";
                                    C = "" + D + G + "gtmexpsb=" + E;
                                    2 === B ? gc(C) : Zb(C)
                                } else
                                    2 === z ? gc(x) : Zb(x)
                            }
                    }
                    p = p.substring(q + 2);
                    q = p.indexOf("\n\n")
                }
                e = p
            }
        }
        ;
        c.open(d, k);
        c.send(b);
    };
    var uA = function(a, b, c, d) {
        var e = a + "?" + b;
        rA && (d = !(0 === e.indexOf("https://www.google-analytics.com/g/collect") || 0 === e.indexOf("https://analytics.google.com/g/collect")));
        sA && d && !tz ? qA(e, c) : tA(a, b, c)
    }
      , sA = !1;
    sA = !0;
    var rA = !1;
    var vA = function() {
        this.C = 1;
        this.F = {};
        this.g = new of;
        this.o = -1
    };
    vA.prototype.s = function(a, b) {
        var c = this, d;
        try {
            d = new mA(a,this.F,b)
        } catch (n) {
            a.abort()
        }
        var e = uz(a);
        e && this.g.C(d) || this.flush();
        if (e && this.g.add(d)) {
            if (0 > this.o) {
                var f = A, g = f.setTimeout, h;
                a.Qa() ? wA ? (wA = !1,
                h = xA) : h = yA : h = 5E3;
                this.o = g.call(f, function() {
                    return c.flush()
                }, h)
            }
        } else {
            var k = qf(d, this.C++);
            uA(d.o, k.Gf, k.body, d.C);
            zA(d, {
                pk: a.Xe,
                qk: a.Va,
                Bj: String(a.Mb(U.Bd, a.B(U.Bd))),
                Mc: a.Mc(),
                hf: a.hf(),
                cd: a.cd()
            })
        }
    }
    ;
    vA.prototype.add = function(a) {
        a.o && !tz ? this.O(a) : this.s(a)
    }
    ;
    vA.prototype.flush = function() {
        if (this.g.events.length) {
            var a = rf(this.g, this.C++);
            uA(this.g.g, a.Gf, a.body, this.g.o);
            this.g = new of;
            0 <= this.o && (A.clearTimeout(this.o),
            this.o = -1)
        }
    }
    ;
    vA.prototype.O = function(a) {
        var b = this
          , c = a.jh();
        c ? Bh(c, function(d) {
            b.s(a, 1 === d.split("~").length ? void 0 : d)
        }) : this.s(a)
    }
    ;
    var zA = function(a, b) {
        function c(q) {
            n.push(q + "=" + encodeURIComponent("" + a.Aa[q]))
        }
        var d = b.pk
          , e = b.qk
          , f = b.Bj
          , g = b.Mc
          , h = b.hf
          , k = b.cd;
        if (d || e) {
            var n = [];
            c("tid");
            c("cid");
            c("gtm");
            n.push("aip=1");
            a.Qb.uid && n.push("uid=" + encodeURIComponent("" + a.Qb.uid));
            d && (tA("https://stats.g.doubleclick.net/g/collect", "v=2&" + n.join("&")),
            Rg("https://stats.g.doubleclick.net/g/collect?v=2&" + n.join("&")));
            if (e) {
                n.push("z=" + Oa());
                if (!k) {
                    var p = f && 0 === f.indexOf("google.") && "google.com" != f ? "https://www.%/ads/ga-audiences?v=1&t=sr&slf_rd=1&_r=4&".replace("%", f) : void 0;
                    p && Zb(p + n.join("&"))
                }
            }
        }
    }
      , tA = function(a, b, c) {
        var d = a + "?" + b;
        c ? Pb.sendBeacon && Pb.sendBeacon(d, c) : gc(d)
    }
      , xA = Gn('', 500)
      , yA = Gn('', 5E3)
      , wA = !0;
    var AA = window
      , BA = document
      , CA = function(a) {
        var b = AA._gaUserPrefs;
        if (b && b.ioo && b.ioo() || a && !0 === AA["ga-disable-" + a])
            return !0;
        try {
            var c = AA.external;
            if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs)
                return !0
        } catch (f) {}
        for (var d = fj("AMP_TOKEN", String(BA.cookie), !0), e = 0; e < d.length; e++)
            if ("$OPT_OUT" == d[e])
                return !0;
        return BA.getElementById("__gaOptOutExtension") ? !0 : !1
    };
    var DA = {};
    var EA = function() {
        var a = A.screen;
        return (a ? a.width : 0) + "x" + (a ? a.height : 0)
    }
      , FA = function(a) {
        var b = lj("_opt_expid", void 0, void 0, U.N)[0];
        if (b) {
            var c = decodeURIComponent(b).split("$");
            if (3 === c.length)
                return c[2]
        }
        if (void 0 !== Rh.ga4_referrer_override)
            return Rh.ga4_referrer_override;
        var d = ji("gtm.gtagReferrer." + a.cb);
        return d ? "" + d : I.referrer
    }
      , GA = function() {
        var a = ""
          , b = I.location;
        if (b) {
            var c = b.pathname || "";
            "/" != c.charAt(0) && (c = "/" + c);
            a = b.protocol + "//" + b.hostname + c + b.search
        }
        return a
    }
      , HA = function(a, b) {
        var c = U.D;
        Xg(c) || ah(function() {
            b.bf = !0;
            b.Jg = c;
            a.Sg(b)
        }, c)
    }
      , IA = {};
    DA.Ei = "";
    var JA = function(a, b) {
        this.Va = a;
        this.fc = b;
        this.O = new vA;
        this.g = void 0;
        this.C = new Bz;
        this.o = this.s = void 0;
        this.F = !1;
        this.zb = void 0
    };
    l = JA.prototype;
    l.bk = function(a, b, c) {
        var d = this
          , e = !1;
        if (c.eventModel[U.cc]) {
            e = !0;
            if ("_" === a.charAt(0))
                return;
            a !== U.Ea && a !== U.Wa && xz(a) && wg(58);
            KA(c)
        }
        var f = new sz(this.Va,a,b,c,this.fc,e)
          , g = [U.N]
          , h = !1;
        h = f.Qa();
        (f.Mb(U.nb, f.B(U.nb)) || h) && g.push(U.D);
        bh(function() {
            d.ck(f)
        }, g)
    }
    ;
    l.ck = function(a) {
        this.o = a;
        try {
            CA(a.cb) && (wg(28),
            a.abort());
            0 <= DA.Ei.replace(/\s+/g, "").split(",").indexOf(a.eventName) && (wg(33),
            a.abort());
            var b = a.be();
            b && b.blacklisted && (wg(34),
            a.abort());
            var c = I.location.protocol;
            "http:" != c && "https:" != c && (wg(29),
            a.abort());
            Pb && "preview" == Pb.loadPurpose && (wg(30),
            a.abort());
            var d = Rh.grl;
            d || (d = Wz(),
            Rh.grl = d);
            d() || (wg(35),
            a.abort());
            this.Ji(a);
            this.C.yk(a);
            var g = this.Ah, h;
            a.B(U.qb) && !Xg(U.N) && 1 !== a.O && (a.Qg = !0);
            a.eventName === U.Ea ? (a.B(U.qb) && $k(["aw", "dc"]),
            Sz(a),
            h = Uz(a)) : h = {};
            g.call(this, h);
            a.eventName == U.Ea && (a.Ui && 0 < Qh(a.g).length && (wg(68),
            1 < Rh.configCount && wg(69)),
            a.B(U.oa) || a.abort(),
            a.g.eventModel[U.aa] && (a.g.containerConfig[U.aa] = a.g.eventModel[U.aa],
            a.g.eventModel[U.aa] = void 0),
            a.eventName = U.xc);
            var u = this.g
              , r = this.s
              , v = this.C
              , w = Mz(a);
            w || (w = r);
            var y = Ta(a.B(U.Fc)), x;
            x = Ta(a.B(U.Dd));
            var z;
            a: {
                if (w) {
                    var B = w.split(".");
                    if (!(5 > B.length || 7 < B.length)) {
                        z = {
                            sessionId: B[0],
                            Mf: Number(B[1]),
                            je: !!Number(B[2]),
                            Af: Number(B[3]),
                            Nb: Number(B[4] || 0),
                            nc: "1" === B[5],
                            Yd: "0" !== B[6] ? B[6] : void 0
                        };
                        break a
                    }
                }
                z = void 0
            }
            z && z.Nb && (a.Nb = Math.max(0, z.Nb - Math.max(0, a.s - z.Af)));
            var C = !1;
            z || (C = a.Gd = !0,
            z = {
                sessionId: String(a.s),
                Mf: 1,
                je: !1,
                Af: a.s,
                nc: !1,
                Yd: void 0
            });
            a.s > z.Af + 60 * y && (C = !0,
            z.sessionId = String(a.s),
            z.Mf++,
            z.je = !1,
            z.Yd = void 0);
            if (C)
                a.C = !0,
                v.Dj(a);
            else if (v.yj() > x || a.eventName == U.xc)
                z.je = !0;
            a.Oa(U.Gc, z.sessionId);
            a.Oa(U.Te, z.Mf);
            a.Oa(U.Se, z.je ? 1 : 0);
            var S = a.B(U.jb)
              , O = a.O;
            S || (S = Gz(a),
            O = 3);
            S || (S = u,
            O = 5);
            if (!S) {
                var K = Xg(U.N)
                  , R = Cz();
                S = !R.from_cookie || K ? R.vid : void 0;
                O = 6
            }
            S ? S = "" + S : (a.Gd = a.Mg = !0,
            S = yj(),
            O = 7);
            a.Fh(S, O);
            a: {
                a.Oa(U.Za, GA());
                var P = FA(a);
                P && a.Oa(U.Na, P);
                a.Oa(U.Dc, I.title);
                a.Oa(U.ob, (Pb.language || "").toLowerCase());
                a.df = EA()
            }
            if (!1 !== a.B(U.yc) && Qp() && Xg(U.D)) {
                var M = a.Mb(U.nb, a.B(U.nb));
                a.Sj() && (a.Xe = !!M);
                M && 0 === a.Nb && (a.Nb = 60,
                a.Va = !0)
            }
            LA(a);
            a.cf = U.Bg.hasOwnProperty(a.eventName);
            for (var T = a.B(U.Oe) || [], ka = 0; ka < T.length; ka++) {
                var V = T[ka];
                if (V.rule_result) {
                    a.Oa(U.yg, V.traffic_type);
                    vz(3);
                    break
                }
            }
            if (a.B(U.wa)) {
                var Ga = Oz(a) || {}
                  , La = tk(Ga[U.ac], !!Ga[U.P]) ? kk(!0)._fplc : void 0;
                a.I._fplc = La || (0 < lj("FPLC", void 0, void 0, U.N).length ? void 0 : "0")
            }
            if (void 0 === a.B(U.Ne)) {
                var pa = a.B(U.Cd), ca, aa;
                a: {
                    if (Rz) {
                        var Aa = Oz(a) || {};
                        if (Aa && Aa[U.P])
                            for (var ea = Yz(a), Ia = Aa[U.P], sa = 0; sa < Ia.length; sa++)
                                if (Ia[sa]instanceof RegExp) {
                                    if (Ia[sa].test(ea)) {
                                        aa = !0;
                                        break a
                                    }
                                } else if (0 <= ea.indexOf(Ia[sa])) {
                                    aa = !0;
                                    break a
                                }
                    }
                    aa = !1
                }
                var Ma;
                if (!(Ma = aa))
                    if (Zz)
                        Ma = !1;
                    else {
                        var Lb = Yz(a), Gb;
                        var he = String(a.B(U.ma));
                        if ("none" !== he)
                            if ("auto" !== he)
                                Gb = he;
                            else {
                                if (!aA) {
                                    for (var ie = String(a.B(U.kb)), cd = rj(), ac = 0; ac < cd.length; ac++)
                                        if ("none" !== cd[ac]) {
                                            var je = String(a.B(U.Fa)) + "_ga_autodomain";
                                            if (0 === uj(je, $z, {
                                                fb: U.N,
                                                domain: cd[ac],
                                                path: ie
                                            })) {
                                                uj(je, void 0, {
                                                    fb: U.N,
                                                    domain: cd[ac],
                                                    path: ie
                                                });
                                                bA = cd[ac];
                                                break
                                            }
                                        }
                                    aA = !0
                                }
                                Gb = bA
                            }
                        else
                            Gb = void 0;
                        var ke = Gb;
                        Ma = ke ? 0 <= Lb.indexOf(ke) : !1
                    }
                if (!(ca = Ma)) {
                    var Ad;
                    if (Ad = pa)
                        a: {
                            for (var sf = pa.include_conditions || [], Bd = Yz(a), Jc = 0; Jc < sf.length; Jc++)
                                if (sf[Jc].test(Bd)) {
                                    Ad = !0;
                                    break a
                                }
                            Ad = !1
                        }
                    ca = Ad
                }
                ca && (a.Oa(U.Ne, 1),
                vz(4))
            }
            if (a.eventName == U.Wa) {
                var le = a.B(U.Ya)
                  , QA = a.B(U.lb)
                  , or = void 0;
                QA(or || a.B(le));
                a.abort()
            }
            if (a.I[U.Kc])
                delete a.I[U.Kc];
            else {
                var Pk = a.B(U.Fe);
                if (Pk) {
                    for (var pr = Pk.edit_rules || [], qr = !1, Qk = 0; Qk < pr.length; Qk++) {
                        var th;
                        a: {
                            var Hb = a
                              , Cd = pr[Qk];
                            if (Nw(Hb.eventName, Hb.I, Cd.event_name_predicate, Cd.conditions || [])) {
                                if (Cd.new_event_name) {
                                    var rr = m(Cd.new_event_name) ? String(Cd.new_event_name) : Kw(Hb.eventName, Hb.I, Cd.new_event_name);
                                    if (xz(rr)) {
                                        th = !1;
                                        break a
                                    }
                                    Hb.eventName = String(rr)
                                }
                                yz(Hb.eventName, Hb.I, Cd);
                                var sr = Hb.I[U.Kc] = !0;
                                vz(2);
                                if (sr) {
                                    var tr = vg();
                                    tr && (Hb.I[U.Ic] = tr);
                                    Oq(Hb.eventName, Hb.I, Hb.cb);
                                    Hb.abort()
                                }
                                th = !0
                            } else
                                th = !1
                        }
                        th && (qr = !0)
                    }
                    for (var ur = Pk.synthesis_rules || [], Rk = 0; Rk < ur.length; Rk++) {
                        var uh = a
                          , tf = ur[Rk];
                        if (Nw(uh.eventName, uh.I, tf.event_name_predicate, tf.conditions || [])) {
                            var Sk = tf.new_event_name;
                            if (!xz(Sk)) {
                                var Tk = tf.merge_source_event_params ? yc(uh.I) : {};
                                Tk[U.Kc] = !0;
                                yz(Sk, Tk, tf);
                                Oq(Sk, Tk, uh.cb);
                                vz(1)
                            }
                        }
                    }
                }
            }
            var Uk = a.I[U.Ic];
            if (Ka(Uk))
                for (var Vk = 0; Vk < Uk.length; Vk++)
                    vz(Uk[Vk]);
            var wr = ug("GA4_EVENT");
            wr && (a.$e = wr);
            MA(a);
            var SA = this.Ah, xr = this.g, Wk;
            var Xk = Nz(a);
            Xk ? (Lz(Xk, a) || (wg(25),
            a.abort()),
            Wk = Xk) : Wk = void 0;
            var TA = Wk, vh;
            var dd = a.I[U.jb];
            xr && dd === xr ? vh = dd : dd ? (dd = "" + dd,
            Iz(dd, a) || (wg(31),
            a.abort()),
            Ez(dd, Xg(U.N)),
            vh = dd) : (wg(32),
            a.abort(),
            vh = "");
            SA.call(this, {
                clientId: vh,
                Eh: TA
            });
            this.wk();
            a.Qa() && ("page_view" === a.eventName || a.fc) && HA(this, a);
            this.C.If();
            this.zb = NA(a, this.zb);
            this.Sg(a);
            a.g.onSuccess()
        } catch (ZA) {
            a.g.onFailure()
        }
        delete sg.GA4_EVENT
    }
    ;
    l.Sg = function(a) {
        this.O.add(a)
    }
    ;
    l.Ah = function(a) {
        var b = a.clientId
          , c = a.Eh;
        b && c && (this.g = b,
        this.s = c)
    }
    ;
    l.flush = function() {
        this.O.flush()
    }
    ;
    l.wk = function() {
        var a = this;
        if (!this.F) {
            var b = Xg(U.N);
            $g([U.N], function() {
                var c = Xg(U.N);
                if (b ^ c && a.o && a.s && a.g) {
                    var d = a.g;
                    if (c) {
                        var e = !0;
                        var f = Gz(a.o);
                        if (f) {
                            a.g = f;
                            var g = Mz(a.o);
                            e || g ? a.s = g : Lz(a.s, a.o)
                        } else
                            Iz(a.g, a.o),
                            Ez(a.g, !0),
                            Lz(a.s, a.o);
                    } else {
                        a.s = void 0;
                        a.g = void 0;
                    }
                    b = c
                }
            });
            this.F = !0
        }
    }
    ;
    l.Ji = function(a) {
        a.eventName !== U.Wa && this.C.Ii(a)
    }
    ;
    var LA = function(a) {
        var b = function(c) {
            return !!c && c.conversion
        };
        a.fc = b(a.be());
        a.Gd && (a.Ng = b(a.be("first_visit")));
        a.C && (a.Rg = b(a.be("session_start")))
    }
      , MA = function(a) {
        var b = Object.keys(IA);
        if (b.length) {
            b.forEach(function(d) {
                IA[d] && tg("CCD", Number(d))
            });
            var c = ug("CCD");
            c && (a.af = "ccd." + c)
        }
    }
      , NA = function(a, b) {
        var c = void 0;
        return c
    };
    function KA(a) {
        delete a.eventModel[U.cc];
        OA(a.eventModel)
    }
    var OA = function(a) {
        Ra(a, function(c) {
            "_" === c.charAt(0) && delete a[c]
        });
        var b = a[U.Ha] || {};
        Ra(b, function(c) {
            "_" === c.charAt(0) && delete b[c]
        })
    };
    var PA = function(a) {
        if ("prerender" == I.visibilityState)
            return !1;
        a();
        return !0
    }
      , RA = function(a) {
        if (!PA(a)) {
            var b = !1
              , c = function() {
                !b && PA(a) && (b = !0,
                bc(I, "visibilitychange", c),
                wg(55))
            };
            $b(I, "visibilitychange", c);
            wg(54)
        }
    };
    var UA = function(a, b, c) {
        Nq(b, c, a)
    }
      , VA = function(a, b, c) {
        Nq(b, c, a, !0)
    }
      , XA = function(a, b) {
        var c = new JA(a,b);
        RA(function() {
            WA(a, c)
        });
    };
    function WA(a, b) {
        var c = b.C;
        Mq(a, function(d, e, f, g) {
            b.bk(e, f, g)
        });
        c.hk(function() {
            Kq().flush();
            1E3 <= c.ae() && Pb.sendBeacon && UA(a, U.we, {});
            tz = !0;
            b.flush();
            c.Ch(function() {
                tz = !1;
                c.Ch(void 0)
            })
        });
    }
    var Z = {
        h: {}
    };

    Z.h.ehl = ["google"],
    function() {
        function a(k) {
            return k.target && k.target.location && k.target.location.href ? k.target.location.href : Us()
        }
        function b(k, n) {
            $b(k, "hashchange", function(p) {
                var q = a(p);
                n({
                    source: "hashchange",
                    state: null,
                    url: Ws(q),
                    K: Vs(q)
                })
            })
        }
        function c(k, n) {
            $b(k, "popstate", function(p) {
                var q = a(p);
                n({
                    source: "popstate",
                    state: p.state,
                    url: Ws(q),
                    K: Vs(q)
                })
            })
        }
        function d(k, n, p) {
            var q = n.history
              , t = q[k];
            if (Ha(t))
                try {
                    q[k] = function(u, r, v) {
                        t.apply(q, [].slice.call(arguments, 0));
                        p({
                            source: k,
                            state: u,
                            url: Ws(Us()),
                            K: Vs(Us())
                        })
                    }
                } catch (u) {}
        }
        function e() {
            var k = {
                source: null,
                state: X("history").state || null,
                url: Ws(Us()),
                K: Vs(Us())
            };
            return function(n, p) {
                var q = k
                  , t = {};
                t[q.source] = !0;
                t[n.source] = !0;
                if (!t.popstate || !t.hashchange || q.K != n.K) {
                    var u = {
                        event: "gtm.historyChange-v2",
                        "gtm.historyChangeSource": n.source,
                        "gtm.oldUrlFragment": k.K,
                        "gtm.newUrlFragment": n.K,
                        "gtm.oldHistoryState": k.state,
                        "gtm.newHistoryState": n.state,
                        "gtm.oldUrl": k.url,
                        "gtm.newUrl": n.url,
                        "gtm.triggers": p.join(",")
                    };
                    k = n;
                    Ys(u)
                }
            }
        }
        function f(k, n) {
            var p = "" + n;
            if (g[p])
                g[p].push(k);
            else {
                var q = [k];
                g[p] = q;
                var t = e()
                  , u = -1;
                h.push(function(r) {
                    0 <= u && Rs(u);
                    n ? u = Ss(function() {
                        t(r, q);
                        u = -1
                    }, n) : t(r, q)
                })
            }
        }
        var g = {}
          , h = [];
        (function(k) {
            Z.__ehl = k;
            Z.__ehl.m = "ehl";
            Z.__ehl.isVendorTemplate = !0;
            Z.__ehl.priorityOverride = 0
        }
        )(function(k) {
            var n = X("self")
              , p = k.vtp_uniqueTriggerId || "0"
              , q = k.vtp_groupEvents ? Number(k.vtp_groupEventsInterval) : 0;
            0 > q ? q = 0 : isNaN(q) && (q = 1E3);
            if (ct("ehl")) {
                var t = ws("ehl", "reg");
                t ? (t(p, q),
                J(k.vtp_gtmOnSuccess)) : J(k.vtp_gtmOnFailure)
            } else {
                var u = function(r) {
                    for (var v = 0; v < h.length; v++)
                        h[v](r)
                };
                b(n, u);
                c(n, u);
                d("pushState", n, u);
                d("replaceState", n, u);
                f(p, q);
                us("ehl", "reg", f);
                dt("ehl");
                J(k.vtp_gtmOnSuccess)
            }
        })
    }();

    Z.h.read_container_data = ["google"],
    function() {
        (function(a) {
            Z.__read_container_data = a;
            Z.__read_container_data.m = "read_container_data";
            Z.__read_container_data.isVendorTemplate = !0;
            Z.__read_container_data.priorityOverride = 0
        }
        )(function() {
            return {
                assert: function() {},
                R: function() {
                    return {}
                }
            }
        })
    }();
    Z.h.c = ["google"],
    function() {
        (function(a) {
            Z.__c = a;
            Z.__c.m = "c";
            Z.__c.isVendorTemplate = !0;
            Z.__c.priorityOverride = 0
        }
        )(function(a) {
            ft(a.vtp_value, "c", a.vtp_gtmEventId);
            return a.vtp_value
        })
    }();
    Z.h.e = ["google"],
    function() {
        (function(a) {
            Z.__e = a;
            Z.__e.m = "e";
            Z.__e.isVendorTemplate = !0;
            Z.__e.priorityOverride = 0
        }
        )(function(a) {
            return String(a.vtp_gtmCachedValues.event)
        })
    }();

    Z.h.u = ["google"],
    function() {
        var a = function(b) {
            return {
                toString: function() {
                    return b
                }
            }
        };
        (function(b) {
            Z.__u = b;
            Z.__u.m = "u";
            Z.__u.isVendorTemplate = !0;
            Z.__u.priorityOverride = 0
        }
        )(function(b) {
            var c;
            c = (c = b.vtp_customUrlSource ? b.vtp_customUrlSource : Xs("gtm.url", 1)) || Us();
            var d = b[a("vtp_component")];
            if (!d || "URL" == d)
                return Ws(String(c));
            var e = Ii(String(c)), f;
            if ("QUERY" === d)
                a: {
                    var g = b[a("vtp_multiQueryKeys").toString()], h = b[a("vtp_queryKey").toString()] || "", k = b[a("vtp_ignoreEmptyQueryParam").toString()], n;
                    g ? Ka(h) ? n = h : n = String(h).replace(/\s+/g, "").split(",") : n = [String(h)];
                    for (var p = 0; p < n.length; p++) {
                        var q = Gi(e, "QUERY", void 0, void 0, n[p]);
                        if (void 0 != q && (!k || "" !== q)) {
                            f = q;
                            break a
                        }
                    }
                    f = void 0
                }
            else
                f = Gi(e, d, "HOST" == d ? b[a("vtp_stripWww")] : void 0, "PATH" == d ? b[a("vtp_defaultPages")] : void 0, void 0);
            return f
        })
    }();
    Z.h.v = ["google"],
    function() {
        (function(a) {
            Z.__v = a;
            Z.__v.m = "v";
            Z.__v.isVendorTemplate = !0;
            Z.__v.priorityOverride = 0
        }
        )(function(a) {
            var b = a.vtp_name;
            if (!b || !b.replace)
                return !1;
            var c = Xs(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1)
              , d = void 0 !== c ? c : a.vtp_defaultValue;
            ft(d, "v", a.vtp_gtmEventId);
            return d
        })
    }();

    Z.h.aev = ["google"],
    function() {
        function a(t, u, r, v, w) {
            w || (w = "element");
            var y = u + "." + r, x;
            if (n.hasOwnProperty(y))
                x = n[y];
            else {
                var z = t[w];
                if (z && (x = v(z),
                n[y] = x,
                p.push(y),
                35 < p.length)) {
                    var B = p.shift();
                    delete n[B]
                }
            }
            return x
        }
        function b(t, u, r) {
            var v = t[q[u]];
            return void 0 !== v ? v : r
        }
        function c(t, u) {
            if (!t)
                return !1;
            var r = d(Us());
            Ka(u) || (u = String(u || "").replace(/\s+/g, "").split(","));
            for (var v = [r], w = 0; w < u.length; w++) {
                var y = u[w];
                if (y.hasOwnProperty("is_regex"))
                    if (y.is_regex)
                        try {
                            y = new RegExp(y.domain)
                        } catch (B) {
                            continue
                        }
                    else
                        y = y.domain;
                var x = d(t);
                if (y instanceof RegExp) {
                    if (y.test(x))
                        return !1
                } else {
                    var z = y;
                    if (0 != z.length) {
                        if (0 <= x.indexOf(z))
                            return !1;
                        v.push(d(z))
                    }
                }
            }
            return !gy(t, v)
        }
        function d(t) {
            k.test(t) || (t = "http://" + t);
            return Gi(Ii(t), "HOST", !0)
        }
        function e(t, u, r, v) {
            switch (t) {
            case "SUBMIT_TEXT":
                return a(u, r, "FORM." + t, f, "formSubmitElement") || v;
            case "LENGTH":
                var w = a(u, r, "FORM." + t, g);
                return void 0 === w ? v : w;
            case "INTERACTED_FIELD_ID":
                return h(u, "id", v);
            case "INTERACTED_FIELD_NAME":
                return h(u, "name", v);
            case "INTERACTED_FIELD_TYPE":
                return h(u, "type", v);
            case "INTERACTED_FIELD_POSITION":
                var y = u.interactedFormFieldPosition;
                return void 0 === y ? v : y;
            case "INTERACT_SEQUENCE_NUMBER":
                var x = u.interactSequenceNumber;
                return void 0 === x ? v : x;
            default:
                return v
            }
        }
        function f(t) {
            switch (t.tagName.toLowerCase()) {
            case "input":
                return cc(t, "value");
            case "button":
                return dc(t);
            default:
                return null
            }
        }
        function g(t) {
            if ("form" === t.tagName.toLowerCase() && t.elements) {
                for (var u = 0, r = 0; r < t.elements.length; r++)
                    As(t.elements[r]) && u++;
                return u
            }
        }
        function h(t, u, r) {
            var v = t.interactedFormField;
            return v && cc(v, u) || r
        }
        var k = /^https?:\/\//i
          , n = {}
          , p = []
          , q = {
            ATTRIBUTE: "elementAttribute",
            CLASSES: "elementClasses",
            ELEMENT: "element",
            ID: "elementId",
            HISTORY_CHANGE_SOURCE: "historyChangeSource",
            HISTORY_NEW_STATE: "newHistoryState",
            HISTORY_NEW_URL_FRAGMENT: "newUrlFragment",
            HISTORY_OLD_STATE: "oldHistoryState",
            HISTORY_OLD_URL_FRAGMENT: "oldUrlFragment",
            TARGET: "elementTarget"
        };
        (function(t) {
            Z.__aev = t;
            Z.__aev.m = "aev";
            Z.__aev.isVendorTemplate = !0;
            Z.__aev.priorityOverride = 0
        }
        )(function(t) {
            var u = t.vtp_gtmEventId
              , r = t.vtp_defaultValue
              , v = t.vtp_varType
              , w = t.vtp_gtmCachedValues.gtm;
            switch (v) {
            case "TAG_NAME":
                var y = w.element;
                return y && y.tagName || r;
            case "TEXT":
                return a(w, u, v, dc) || r;
            case "URL":
                var x;
                a: {
                    var z = String(w.elementUrl || r || "")
                      , B = Ii(z)
                      , C = String(t.vtp_component || "URL");
                    switch (C) {
                    case "URL":
                        x = z;
                        break a;
                    case "IS_OUTBOUND":
                        x = c(z, t.vtp_affiliatedDomains);
                        break a;
                    default:
                        x = Gi(B, C, t.vtp_stripWww, t.vtp_defaultPages, t.vtp_queryKey)
                    }
                }
                return x;
            case "ATTRIBUTE":
                var D;
                if (void 0 === t.vtp_attribute)
                    D = b(w, v, r);
                else {
                    var E = w.element;
                    D = E && cc(E, t.vtp_attribute) || r || ""
                }
                return D;
            case "MD":
                var G = t.vtp_mdValue
                  , S = a(w, u, "MD", Ms);
                return G && S ? Ps(S, G) || r : S || r;
            case "FORM":
                return e(String(t.vtp_component || "SUBMIT_TEXT"), w, u, r);
            default:
                var O = b(w, v, r);
                ft(O, "aev", t.vtp_gtmEventId);
                return O
            }
        })
    }();
    Z.h.dlm = ["google"],
    function() {
        (function(a) {
            Z.__dlm = a;
            Z.__dlm.m = "dlm";
            Z.__dlm.isVendorTemplate = !0;
            Z.__dlm.priorityOverride = 0
        }
        )(function(a) {
            var b = hy(a.vtp_userInput || [], "key", "value") || {};
            a.vtp_synchronousWrite ? Ra(b, function(c, d) {
                mi(c, d)
            }) : Ys(b);
            J(a.vtp_gtmOnSuccess)
        })
    }();

    Z.h.gct = ["google"],
    function() {
        function a(d) {
            for (var e = [], f = 0; f < d.length; f++)
                try {
                    e.push(new RegExp(d[f]))
                } catch (g) {}
            return e
        }
        function b(d) {
            return d.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&")
        }
        function c(d) {
            for (var e = [], f = 0; f < d.length; f++) {
                var g = d[f].matchValue, h;
                switch (d[f].matchType) {
                case "BEGINS_WITH":
                    h = "^" + b(g);
                    break;
                case "ENDS_WITH":
                    h = b(g) + "$";
                    break;
                case "EQUALS":
                    h = "^" + b(g) + "$";
                    break;
                case "REGEX":
                    h = g;
                    break;
                default:
                    h = b(g)
                }
                e.push(h)
            }
            return e
        }
        (function(d) {
            Z.__gct = d;
            Z.__gct.m = "gct";
            Z.__gct.isVendorTemplate = !0;
            Z.__gct.priorityOverride = 0
        }
        )(function(d) {
            var e = {};
            0 < d.vtp_sessionDuration && (e[U.Fc] = d.vtp_sessionDuration);
            e[U.yd] = d.vtp_eventSettings;
            e[U.Fe] = d.vtp_dynamicEventSettings;
            e[U.nb] = 1 === d.vtp_googleSignals;
            e[U.Bd] = d.vtp_foreignTld;
            e[U.Le] = 1 === d.vtp_restrictDomain;
            e[U.Oe] = d.vtp_internalTrafficResults;
            var f = U.na
              , g = d.vtp_linker;
            g && g[U.P] && (g[U.P] = a(g[U.P]));
            e[f] = g;
            var h = U.Cd
              , k = d.vtp_referralExclusionDefinition;
            k && k.include_conditions && (k.include_conditions = a(k.include_conditions));
            e[h] = k;
            var n = Rq(d.vtp_trackingId)
              , p = n.referral_exclusion_conditions;
            p && (p.length && "object" === typeof p[0] && (p = c(p)),
            e[U.Cd] = {
                include_conditions: a(p)
            });
            var q = n.cross_domain_conditions;
            if (q) {
                q.length && "object" === typeof q[0] && (q = c(q));
                var t = {};
                e[U.na] = (t[U.P] = a(q),
                t[U.bc] = !0,
                t[U.ac] = !0,
                t[U.Cc] = "query",
                t)
            }
            XA(d.vtp_trackingId, e);
            J(d.vtp_gtmOnSuccess)
        })
    }();

    Z.h.get = ["google"],
    function() {
        (function(a) {
            Z.__get = a;
            Z.__get.m = "get";
            Z.__get.isVendorTemplate = !0;
            Z.__get.priorityOverride = 0
        }
        )(function(a) {
            var b = a.vtp_settings;
            (a.vtp_deferrable ? VA : UA)(String(b.streamId), String(a.vtp_eventName), b.eventParameters || {});
            a.vtp_gtmOnSuccess()
        })
    }();

    Z.h.lcl = [],
    function() {
        function a() {
            var c = X("document")
              , d = 0
              , e = function(f) {
                var g = f.target;
                if (g && 3 !== f.which && !(f.dd || f.timeStamp && f.timeStamp === d)) {
                    d = f.timeStamp;
                    g = fc(g, ["a", "area"], 100);
                    if (!g)
                        return f.returnValue;
                    var h = f.defaultPrevented || !1 === f.returnValue, k = ws("lcl", h ? "nv.mwt" : "mwt", 0), n;
                    n = h ? ws("lcl", "nv.ids", []) : ws("lcl", "ids", []);
                    if (n.length) {
                        var p = ss(g, "gtm.linkClick", n);
                        if (b(f, g, c) && !h && k && g.href) {
                            var q = !!Na(String(hc(g, "rel") || "").split(" "), function(v) {
                                return "noreferrer" === v.toLowerCase()
                            });
                            q && wg(36);
                            var t = X((hc(g, "target") || "_self").substring(1))
                              , u = !0
                              , r = bs(function() {
                                var v;
                                if (v = u && t) {
                                    var w;
                                    a: if (q) {
                                        var y;
                                        try {
                                            y = new MouseEvent(f.type,{
                                                bubbles: !0
                                            })
                                        } catch (x) {
                                            if (!c.createEvent) {
                                                w = !1;
                                                break a
                                            }
                                            y = c.createEvent("MouseEvents");
                                            y.initEvent(f.type, !0, !0)
                                        }
                                        y.dd = !0;
                                        f.target.dispatchEvent(y);
                                        w = !0
                                    } else
                                        w = !1;
                                    v = !w
                                }
                                v && (t.location.href = hc(g, "href"))
                            }, k);
                            if (Ys(p, r, k))
                                u = !1;
                            else
                                return f.preventDefault && f.preventDefault(),
                                f.returnValue = !1
                        } else
                            Ys(p, function() {}, k || 2E3);
                        return !0
                    }
                }
            };
            $b(c, "click", e, !1);
            $b(c, "auxclick", e, !1)
        }
        function b(c, d, e) {
            if (2 === c.which || c.ctrlKey || c.shiftKey || c.altKey || c.metaKey)
                return !1;
            var f = hc(d, "href")
              , g = f.indexOf("#")
              , h = hc(d, "target");
            if (h && "_self" !== h && "_parent" !== h && "_top" !== h || 0 === g)
                return !1;
            if (0 < g) {
                var k = Ws(f)
                  , n = Ws(e.location);
                return k !== n
            }
            return !0
        }
        (function(c) {
            Z.__lcl = c;
            Z.__lcl.m = "lcl";
            Z.__lcl.isVendorTemplate = !0;
            Z.__lcl.priorityOverride = 0
        }
        )(function(c) {
            var d = void 0 === c.vtp_waitForTags ? !0 : c.vtp_waitForTags
              , e = void 0 === c.vtp_checkValidation ? !0 : c.vtp_checkValidation
              , f = Number(c.vtp_waitForTagsTimeout);
            if (!f || 0 >= f)
                f = 2E3;
            var g = c.vtp_uniqueTriggerId || "0";
            if (d) {
                var h = function(n) {
                    return Math.max(f, n)
                };
                vs("lcl", "mwt", h, 0);
                e || vs("lcl", "nv.mwt", h, 0)
            }
            var k = function(n) {
                n.push(g);
                return n
            };
            vs("lcl", "ids", k, []);
            e || vs("lcl", "nv.ids", k, []);
            ct("lcl") || (a(),
            dt("lcl"));
            J(c.vtp_gtmOnSuccess)
        })
    }();
    var YA = {};
    YA.dataLayer = ki;
    YA.callback = function(a) {
        bi.hasOwnProperty(a) && Ha(bi[a]) && bi[a]();
        delete bi[a]
    }
    ;
    YA.bootstrap = 0;
    YA._spx = !1;
    (function(a) {
        if (!A["__TAGGY_INSTALLED"]) {
            var b = !1;
            if (I.referrer) {
                var c = Ii(I.referrer);
                b = "cct.google" === Fi(c, "host")
            }
            if (!b) {
                var d = lj("googTaggyReferrer");
                b = d.length && d[0].length
            }
            b && (A["__TAGGY_INSTALLED"] = !0,
            Wb("https://cct.google/taggy/agent.js"))
        }
        var f = function(q) {
            var t = "GTM"
              , u = "GTM";
            t = "OGT",
            u = "GTAG";
            var r = A["google.tagmanager.debugui2.queue"];
            r || (r = [],
            A["google.tagmanager.debugui2.queue"] = r,
            Wb("https://" + L.se + "/debug/bootstrap?id=" + L.J + "&src=" + u + "&cond=" + q + "&gtm=" + Fn()));
            var v = {
                messageType: "CONTAINER_STARTING",
                data: {
                    scriptSource: Qb,
                    containerProduct: t,
                    debug: !1,
                    id: L.J
                }
            };
            v.data.resume = function() {
                a()
            }
            ;
            L.Vh && (v.data.initialPublish = !0);
            r.push(v)
        }
          , g = void 0
          , h = Gi(A.location, "query", !1, void 0, "gtm_debug");
        ls(h) && (g = 2);
        if (!g && I.referrer) {
            var k = Ii(I.referrer);
            "tagassistant.google.com" === Fi(k, "host") && (g = 3)
        }
        if (!g) {
            var n = lj("__TAG_ASSISTANT");
            n.length && n[0].length && (g = 4)
        }
        if (!g) {
            var p = I.documentElement.getAttribute("data-tag-assistant-present");
            ls(p) && (g = 5)
        }
        g && Qb ? f(g) : a()
    }
    )(function() {
        var a = !1;
        a && Sl("INIT");
        zg().o();
        bo();
        uk.enable_gbraid_cookie_write = !0;
        var b = !!Rh[L.J];
        if (b) {
            var c = Rh.zones;
            c && c.unregisterChild(L.J);
        } else {
            for (var f = data.resource || {}, g = f.macros || [], h = 0; h < g.length; h++)
                we.push(g[h]);
            for (var k = f.tags || [], n = 0; n < k.length; n++)
                ze.push(k[n]);
            for (var p = f.predicates || [], q = 0; q < p.length; q++)
                ye.push(p[q]);
            for (var t = f.rules || [], u = 0; u < t.length; u++) {
                for (var r = t[u], v = {}, w = 0; w < r.length; w++)
                    v[r[w][0]] = Array.prototype.slice.call(r[w], 1);
                xe.push(v)
            }
            Be = Z;
            Ce = It;
            Ze = new Ye;
            var y = data.sandboxed_scripts
              , x = data.security_groups
              , z = data.runtime || []
              , B = data.runtime_lines;
            $x = new Sd;
            cy();
            ve = ay();
            var C = $x
              , D = Xx();
            pb(C.g, "require", D);
            for (var E = 0; E < z.length; E++) {
                var G = z[E];
                if (!Ka(G) || 3 > G.length) {
                    if (0 === G.length)
                        continue;
                    break
                }
                B && B[E] && B[E].length && Le(G, B[E]);
                $x.execute(G)
            }
            if (void 0 !== y)
                for (var S = ["sandboxedScripts"], O = 0; O < y.length; O++) {
                    var K = y[O].replace(/^_*/, "");
                    ci[K] = S
                }
            dy(x);
            Rh[L.J] = YA;
            ab(ci, Z.h);
            Ee = Se;
            js();
            El = !1;
            Fl = 0;
            if ("interactive" == I.readyState && !I.createEventObject || "complete" == I.readyState)
                Hl();
            else {
                $b(I, "DOMContentLoaded", Hl);
                $b(I, "readystatechange", Hl);
                if (I.createEventObject && I.documentElement.doScroll) {
                    var R = !0;
                    try {
                        R = !A.frameElement
                    } catch (V) {}
                    R && Il()
                }
                $b(A, "load", Hl)
            }
            yr = !1;
            "complete" === I.readyState ? Ar() : $b(A, "load", Ar);
            Nm && A.setInterval(Hm, 864E5);
            $h = Ya();
            YA.bootstrap = $h;
            if (a) {
                var ka = Tl("INIT");
            }
        }
    });

}
)()
