(this.webpackJsonpriggedwheel = this.webpackJsonpriggedwheel || []).push([
    [0], { 130: function(e, t, n) {}, 134: function(e, t, n) { "use strict";
            n.r(t); var c = n(5),
                a = n(0),
                r = n.n(a),
                i = n(15),
                s = n.n(i),
                l = n(24),
                o = n(71),
                d = n(86),
                j = n(140);

            function b(e) { return e.y && e.y > 0 && e.y < 100 ? Object(c.jsx)("div", { className: e.className, style: { width: "100%", height: 20 * e.y } }) : e.x && e.x > 0 && e.x < 100 ? Object(c.jsx)("div", { className: e.className, style: { height: "100%", width: 20 * e.x } }) : Object(c.jsx)("div", { className: e.className, style: { width: "100%", height: 20 } }) } var h = n(137),
                u = n(136),
                g = n(138);

            function p(e) { var t = e.noCenter ? "" : "justify-content-center",
                    n = e.noCenterText ? "" : " text-center"; return Object(c.jsxs)(c.Fragment, { children: [e.top ? Object(c.jsx)(b, { y: e.top }) : Object(c.jsx)(b, { y: 1 }), Object(c.jsx)(u.a, { className: t + n, children: Object(c.jsxs)(g.a, { title: e.title, className: e.className ? e.className : null, style: e.style ? e.style : null, children: [Object(c.jsx)(b, { y: .5 }), e.children] }) }), e.bottom ? Object(c.jsx)(b, { y: e.bottom }) : Object(c.jsx)(b, { y: 1 })] }) } var O = function() { var e = Object(a.useState)(f),
                        t = Object(l.a)(e, 2),
                        n = t[0],
                        r = t[1],
                        i = Object(a.useState)(0),
                        s = Object(l.a)(i, 2),
                        g = s[0],
                        O = s[1],
                        y = Object(a.useState)(0),
                        k = Object(l.a)(y, 2),
                        v = k[0],
                        C = k[1],
                        S = Object(a.useState)(0),
                        N = Object(l.a)(S, 2),
                        F = N[0],
                        w = N[1],
                        M = Object(a.useState)(!1),
                        A = Object(l.a)(M, 2),
                        B = A[0],
                        E = A[1],
                        I = Object(a.useState)(x),
                        T = Object(l.a)(I, 2),
                        D = T[0],
                        W = T[1],
                        z = Object(a.useState)(!1),
                        J = Object(l.a)(z, 2),
                        L = J[0],
                        R = J[1],
                        H = Object(a.useState)(0),
                        X = Object(l.a)(H, 2),
                        q = X[0],
                        G = X[1],
                        K = Object(a.useState)([]),
                        P = Object(l.a)(K, 2),
                        Q = P[0],
                        U = P[1],
                        V = Object(a.useState)(!1),
                        Y = Object(l.a)(V, 2),
                        Z = Y[0],
                        $ = Y[1],
                        _ = Object(a.useState)(!1),
                        ee = Object(l.a)(_, 2),
                        te = ee[0],
                        ne = ee[1],
                        ce = function(e) { var t = n,
                                c = D,
                                a = e - n.length; if (a > 0)
                                for (var i = 0; i < a; i++) t.push({ name: "", tagged: !1, picked: !1, isFirst: !1 }), c.push({ option: "", style: { backgroundColor: m(), textColor: "black" } });
                            else
                                for (var s = 0; s < -1 * a; s++) t[t.length - 1].tagged && C(v - 1), t[t.length - 1].isFirst && w(F - 1), t[t.length - 1].picked && O(g - 1), t.pop(), c.pop(); for (var l = 0; l < t.length; l++) c[l].style.backgroundColor = m(), t[l].picked = !1;
                            O(0), W(c), r(t), R(!L) },
                        ae = function() { if (function() { for (var e = 0; e < n.length; e++)
                                        if (D[e].option.length < 1) return alert("not all inputs are filled in correctly"), !1; return !0 }() && !Z) { re(); var e = [],
                                    t = n; if (g >= t.length) return alert("maximum has been reached"); for (var c = !1, a = 0; a < t.length; a++) { if (!t[a].picked)
                                        if (t[a].isFirst) { c = !0; break } } for (var i = 0; i < t.length; i++)
                                    if (!t[i].picked) { var s = !t[i].tagged,
                                            l = t[i].isFirst,
                                            o = g + v >= t.length;
                                        l ? e.push(i) : !s && !o || c || e.push(i) } var d = e[Math.floor(Math.random() * e.length)];
                                t[d].picked = !0, O(g + 1), r(t), G(d), E(!0), R(!L), $(!0) } },
                        re = function() { ne(!0) }; return Object(c.jsx)(c.Fragment, { children: Object(c.jsx)(h.a, { fluid: !0, style: { paddingLeft: 50, paddingRight: 50, paddingTop: 20, paddingBottom: 20, backgroundColor: "#0d5174", justifyContent: "center", display: "flex" }, children: Object(c.jsxs)(h.a, { children: [Object(c.jsx)(p, { children: te ? Object(c.jsxs)(c.Fragment, { children: [Object(c.jsx)("h1", { children: "Online Paluwagan November Batch" }), Object(c.jsx)("h2", { children: "First Receiver" })] }) : Object(c.jsxs)(c.Fragment, { children: [Object(c.jsx)("h1", { children: "Online Paluwagan November Batch" }), Object(c.jsx)("h2", { children: "First Receiver" }), Object(c.jsx)("h3", { style: { color: "red" }, children: "" }), Object(c.jsx)("h6", { style: { color: "red" }, children: "" }), Object(c.jsx)("h6", { style: { color: "red" }, children: "" }), Object(c.jsx)(d.a, { onClick: re, children: "" })] }) }), Object(c.jsxs)(u.a, { className: "justify-content-center", children: [Object(c.jsx)("a", { onClick: ae, children: Object(c.jsx)(o.Wheel, { mustStartSpinning: B, prizeNumber: q, data: D, onStopSpinning: function() { var e = D,
                                                    t = Q;
                                                t.push(n[q].name), e[q].style.backgroundColor = "white", $(!1), E(!1), W(e), U(t) }, backgroundColors: ["#3e3e3e", "#df3428"], textColors: ["#ffffff"] }) }), Object(c.jsx)(b, { y: 1 }), Object(c.jsx)(d.a, { onClick: ae, disabled: Z, type: "primary", size: "large", children: "Spin" }), Object(c.jsx)(b, { y: 1 })] }), Q.length > 0 && Object(c.jsx)(p, { title: "List of people picked", style: { margin: 5 }, children: Q.map((function(e, t) { return Object(c.jsx)(c.Fragment, { children: Object(c.jsxs)("h3", { children: [Number(t + 1), ". ", e] }) }) })) }), Object(c.jsx)(p, { title: "Amount of people", style: { margin: 5 }, children: Object(c.jsx)(j.a, { placeholder: "Amount of people", onChange: function(e) { return isNaN(e.target.value) ? alert("Not a valid number") : e.target.value > 50 ? alert("Too many people!") : void ce(e.target.value) } }) }), Object(c.jsx)(p, { title: "Options", style: { width: 300, margin: 5 }, children: n.map((function(e, t) { return Object(c.jsxs)("div", { style: { display: "inline-flex" }, children: [Object(c.jsx)(j.a, { placeholder: "Enter name", value: n[t].name, onChange: function(e) { return function(e, t) { var c = n,
                                                            a = D,
                                                            i = e.replace(".", "").replace(",", "");
                                                        c[t].name = i, !c[t].tagged && e.includes(".") && (c[t].tagged = !0, C(v + 1)), !c[t].isFirst && e.includes(",") && (c[t].isFirst = !0, w(F + 1)), a[t].option = i, W(a), r(c), R(!L) }(e.target.value, t) }, style: { marginBottom: 5 } }, t), Object(c.jsx)(b, { x: 1 }), Object(c.jsx)(d.a, { type: "danger", onClick: function() { return function(e) { var t = n,
                                                            c = D;
                                                        c.splice(e, 1), t.splice(e, 1), W(c), r(t), R(!L), ce(t.length) }(t) }, children: "X" })] }, t) })) }), Object(c.jsx)(b, { y: 5 }), Object(c.jsx)(p, { title: "About", noCenterText: !0, style: { width: 500 }, children: Object(c.jsx)("p", { children: "Made by StudioCreations" }) })] }) }) }) },
                x = [{ option: "", style: { backgroundColor: "#2bff2a", textColor: "black" } }, { option: "", style: { backgroundColor: "#fb87e1", textColor: "black" } }, { option: "", style: { backgroundColor: "#28d6fd", textColor: "black" } }],
                f = [{ name: x[0].option, tagged: !1, picked: !1, isFirst: !1 }, { name: x[1].option, tagged: !1, picked: !1, isFirst: !1 }, { name: x[2].option, tagged: !1, picked: !1, isFirst: !1 }];

            function m() { for (var e = "#", t = 0; t < 6; t++) e += "0123456789ABCDEF" [Math.floor(16 * Math.random())]; return e } n(130), n(131), n(132);
            s.a.render(Object(c.jsx)(r.a.StrictMode, { children: Object(c.jsx)(O, {}) }), document.getElementById("root")) } },
    [
        [134, 1, 2]
    ]
]);
//# sourceMappingURL=main.c3d32a81.chunk.js.map