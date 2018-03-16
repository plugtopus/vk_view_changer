var vkccContent = function () {
    var e = function (e) {
        },
        t = function (e) {
            e.type && "values" == e.type && n(e.values)
        },
        n = function (e) {
            var t = "";
            "on" !== e.disable && (t = a(e));
            var n = document.getElementById("VKViewChanger");
            n ? n.innerHTML = t : ((n = document.createElement("style")).setAttribute("type", "text/css"), n.setAttribute("rel", "stylesheet"), n.setAttribute("id", "VKViewChanger"), n.innerHTML = t, document.getElementsByTagName("head")[0].appendChild(n))
        },
        a = function (e) {
            var t, n = parseInt(e["hue-deg"]) + 145,
                a = "";
            return e["background-image"] && (a = "body{background-image: url('" + e["background-image"] + "')!important;  background-attachment: fixed!important; background-position-x: 50%!important;}", a += "#side_bar .side_bar_inner ol{background:#fff; border-radius: 2px; box-shadow: 0 1px 0 0 #e1e2e6, 0 0 0 1px #e6e7eb;padding-left: 8px;}"), t = a + vkvcCssRules.getFilterNewCss("-webkit-filter:", n), t += ".chat_tab_close{z-index:1}"
        };
    return {
        init: function () {
            chrome['runtime'].sendMessage({
                action: "get_values"
            }, e), chrome['runtime'].onMessage.addListener(t)
        }
    }
}();
vkccContent.init();