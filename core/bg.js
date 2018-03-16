var vkccBackground = function() {
    var e = {},
        r = {
            url: /^https?:\/\/(?:[^\.]+\.)?vk\.com/,
            user: /^https?:\/\/(?:[^\.]+\.)?vk\.com\/(.*)/,
            complex: /[A-Za-z]+(-?\d+)(_\d+)?/
        },
        t = function(e, r, t) {
            a(t), o(e, r, t)
        },
        o = function(e, t, o) {
            r.url.test(o.url) && chrome['pageAction'].show(e)
        },
        c = function(e, r, t) {
            a(r.tab)
        },
        n = function(r, t) {
            chrome['storage']['local'].get(t, function(o) {
                var c, n;
                e.values = {}, t in o && (e.values = JSON.parse(o[t])), e.type = "values", c = r, n = e, chrome['tabs'].sendMessage(c, n)
            })
        },
        a = function(t) {
            if (r.url.test(t.url)) {
                var o = r.user.exec(t.url)[1];
                r.complex.test(o) && (o = r.complex.exec(o)[1]), e.userId = o, n(t.id, "vkViewChanger")
            }
        },
        s = function(e) {
            i(e.srcUrl)
        },
        i = function(e) {
            chrome['storage']['local'].get("vkViewChanger", function(r) {
                var t = r.vkViewChanger;
                if (t) {
                    var o = JSON.parse(t);
                    o["background-image"] = e, chrome['storage']['local'].set({
                        vkViewChanger: JSON.stringify(o)
                    }), chrome['tabs'].query({
                        url: "*://vk.com/*"
                    }, function(e) {
                        for (var r = 0; r < e.length; ++r) chrome['tabs'].executeScript(e[r].id, {
                            file: "core/cs.js"
                        }), chrome['tabs'].executeScript(e[r].id, {
                            file: "core/bg-content.js"
                        })
                    })
                }
            })
        };
    return {
        init: function() {
            chrome['tabs'].onUpdated.addListener(t), chrome['runtime']['onMessage'].addListener(c), chrome['contextMenus'].create({
                title: "Сделать фоновым изображением ВКонтакте",
                contexts: ["image"],
                onclick: s
            })
        }
    }
}();
vkccBackground.init();