var vkvcPopup = function() {
    var e = {},
        t = document.getElementsByClassName("options__checkbox"),
        n = document.getElementsByClassName("options__input"),
        r = function(e, t, n) {
            var r = "body{-webkit-filter:";
            "on" == e && (r += " grayscale(100%) contrast(120%)"), "on" == t && (r += " sepia(100%) contrast(120%)"), "on" == n && (r += " invert(1); background-color: black"), r += ";}";
            var o = document.getElementById("VKViewChanger");
            o ? o.innerHTML = r : ((o = document.createElement("style")).setAttribute("type", "text/css"), o.setAttribute("rel", "stylesheet"), o.setAttribute("id", "VKViewChanger"), o.innerHTML = r, document.getElementsByTagName("head")[0].appendChild(o))
        },
        o = function(e, t) {
            var n = document.querySelector("#" + e),
                r = "";
            if (null !== n && (r = n.getAttribute("type")), "checkbox" == r) "on" == t && (n.checked = !0);
            else if ("range" == r) {
                document.querySelector("#" + e + "-output").textContent = t, n.value = t
            } else n.value = t
        },
        c = function(t) {
            var n = document.querySelector("#" + t).getAttribute("type"),
                r = document.querySelector("#" + t);
            "checkbox" != n || "checkbox" == n && r.checked ? e[t] = r.value : e[t] = "off"
        },
        i = function() {
            for (var o = 0; o < t.length; o++) c(t[o].getAttribute("id"));
            for (o = 0; o < n.length; o++) c(n[o].getAttribute("id"));
            r(e.gray, e.sepia, e.invert), chrome['storage']['local'].set({
                vkViewChanger: JSON.stringify(e)
            }), chrome['tabs'].query({
                url: "<all_urls>"
            }, function(e) {
                for (var t = 0; t < e.length; ++t) chrome['tabs'].executeScript(e[t].id, {
                    file: "core/cs.js"
                }), chrome.tabs.executeScript(e[t].id, {
                    file: "core/bg-content.js"
                })
            })
        };
    return {
        init: function() {
            chrome['storage']['local'].get("vkViewChanger", function(t) {
                var n = t.vkViewChanger;
                if (n && (e = JSON.parse(n), console.log(typeof e), "object" == typeof e)) {
                    for (var c in e) e.hasOwnProperty(c) && o(c, e[c]);
                    r(e.gray, e.sepia, e.invert)
                }
            }), document.addEventListener("DOMContentLoaded", function() {
                for (var e = 0; e < t.length; e++) t[e].addEventListener("click", i);
                for (e = 0; e < n.length; e++) n[e].addEventListener("change", i);
                document.querySelector("#line").addEventListener("click", i)
            })
        }
    }
}();
vkvcPopup.init();