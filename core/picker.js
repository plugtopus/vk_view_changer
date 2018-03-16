var Line = {
        Hue: 0,
        init: function(e) {
            var o, n, t, c, r = 0;
            o = Line.create(e.h, e.w, e.line, "cLine"), n = document.getElementById(e.th), c = document.getElementById(e.bk), chrome['storage']['local'].get("vkViewChanger", function(o) {
                var t = o.vkViewChanger;
                t = t ? JSON.parse(t, function(e, o) {
                    return o
                }) : {
                    "hue-deg": 200
                }, n.style.top = (360 - t["hue-deg"]) * (e.h / 360) - 2 + "px", c.style.backgroundColor = "rgb(" + convert.hsv_rgb(t["hue-deg"], 55, 65) + ")"
            }), Line.posit = function(o) {
                var u;
                (u = mouse.pageY(o) - t) > e.h || u < 0 || (n.style.top = u - 2 + "px", r = 360 === (r = 360 - (r = Math.round(u / (e.h / 360)))) ? 0 : r, Line.Hue = r, document.getElementById("hue-deg").value = r, c.style.backgroundColor = "rgb(" + convert.hsv_rgb(r, 55, 65) + ")")
            }, n.onmousedown = function() {
                t = Obj.positY(o), document.onmousemove = function(e) {
                    Line.posit(e)
                }
            }, n.onclick = Line.posit, o.onclick = function(e) {
                Line.posit(e)
            }, o.onmousedown = function() {
                t = Obj.positY(o), document.onmousemove = function(e) {
                    Line.posit(e)
                }
            }, document.onmouseup = function() {
                document.onmousemove = null, n.onmousemove = null
            }
        },
        create: function(e, o, n, t) {
            var c = document.createElement("canvas");
            return c.width = o, c.height = e, c.className = t, document.getElementById(n).appendChild(c), Line.grd(c, e, o), c
        },
        grd: function(e, o, n) {
            var t, c, r, u, i, a = 255;
            for (t = (u = e.getContext("2d")).createLinearGradient(n / 2, o, n / 2, 0), c = [
                [a, 0, 0],
                [a, a, 0],
                [0, a, 0],
                [0, a, a],
                [0, 0, a],
                [a, 0, a],
                [a, 0, 0]
            ], i = 0; i <= 6; ++i) r = "rgb(" + c[i][0] + "," + c[i][1] + "," + c[i][2] + ")", t.addColorStop(i / 6, r);
            u.fillStyle = t, u.fillRect(0, 0, n, o)
        }
    },
    Block = {
        init: function(e) {
            var o, n, t, c = 0;
            o = document.getElementById(e.block), n = o.offsetHeight, t = n / 100, Block.cPos = function(e) {
                var o, r;
                document.ondragstart = function() {
                    return !1
                }, document.body.onselectstart = function() {
                    return !1
                }, o = (o = (o = mouse.pageY(e) - c) > n ? n : o) < 0 ? 0 : o, r = Math.ceil(100 - o / t), picker.V = r, picker.out_color.style.backgroundColor = "rgb(" + convert.hsv_rgb(Line.Hue, r) + ")"
            }, o.onclick = function(e) {
                Block.cPos(e)
            }, o.onmousedown = function() {
                document.onmousemove = function(e) {
                    c = Obj.positY(o), Block.cPos(e)
                }
            }, document.onmouseup = function() {
                document.onmousemove = null
            }
        }
    },
    convert = {
        hsv_rgb: function(e, o) {
            var n, t, c, r, u, i, a;
            switch (t = (1 - (n = e / 60 - (r = Math.floor(e / 60)))) * (o /= 100), c = n * o, r) {
                case 0:
                    u = o, i = c, a = 0;
                    break;
                case 1:
                    u = t, i = o, a = 0;
                    break;
                case 2:
                    u = 0, i = o, a = c;
                    break;
                case 3:
                    u = 0, i = t, a = o;
                    break;
                case 4:
                    u = c, i = 0, a = o;
                    break;
                case 5:
                    u = o, i = 0, a = t
            }
            return [parseInt(255 * u), parseInt(255 * i), parseInt(255 * a)]
        }
    },
    picker = {
        V: 100,
        S: 100,
        status: !1,
        init: function() {
            var e = "block_picker",
                o = {
                    h: 180,
                    w: 20,
                    th: "arrows",
                    bk: e,
                    line: "line"
                },
                n = {
                    block: e
                };
            Line.init(o), Block.init(n), picker.out_color = document.getElementById("out_color")
        }
    };
picker.init();