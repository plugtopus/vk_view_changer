var vkvcCssRules = function() {
    var e = {
            opacity: [{
                color: "#FFFFFF",
                rules: {
                    wall: ["div#wpost_head_wrap, #wrap3", "#side_bar"],
                    sidebar: ["#side_bar", "#side_bar ol li .left_row:hover"],
                    common: ["ul.t0 a", ".tl1, .tl2"]
                }
            }, {
                color: "#E9EDF1",
                rules: {
                    wall: [".wr_header"]
                }
            }, {
                color: "#F7F7F7",
                rules: {
                    wall: ["#feed_bar"]
                }
            }, {
                color: "#F1F1F1",
                rules: {
                    wall: [".wall_module .reply_fakebox_wrap", ".wall_module .reply_box"]
                }
            }, {
                color: "#597DA3",
                rules: {
                    common: ["ul.t0 li.active_link a, ul.t0 li.active_link a:hover", "ul.t0 li.active_link a b.tl1, ul.t0 li.active_link a:hover b.tl1", "ul.t0 li.active_link a b.tl2, ul.t0 li.active_link a:hover b.tl2"]
                }
            }, {
                color: "#E1E7ED",
                rules: {
                    common: ["ul.t0 li a:hover", "ul.t0 li a:hover b.tl1, ul.t0 li a:hover b.tl2"]
                }
            }],
            opacityNull: {
                sidebar: ["#side_bar ol li .left_row", ".tabs.t_bar"],
                wall: [".wide_wall_module", ".summary_wrap"]
            },
            filterNew: {
                main: [".page_block", "#side_bar", "#page_header_cont", "#stl_bg"],
                audio_player: [".top_audio_layer .audio_page_player", ".audio_layer_rows_cont"],
                chat: [".rb_box_wrap", ".chat_onl_wrap"],
                photo_popup: [".pv_photo_wrap"],
                wall_popup: ["#wk_content"],
                video_popup: [".mv_controls"],
                popup: [".box_layout"],
                tooltip: [".mention_tt"]
            },
            filterNewReverse: {
                main: ["img", ".page_square_photo", ".page_post_thumb_wrap", ".photos_row", ".ow_ava", ".page_video_thumb", ".page_doc_photo", "video", ".crisp_image"],
                chat: [".fc_msgs_img", ".chat_tab_img", ".fc_photo_thumb", ".page_media_link_thumb"],
                video_popup: [".mv_recom_item_thumb"],
                popup: [".photo_row_img"]
            },
            filter: {
                all: ["#page_layout", "#wk_box", "#fmenu", "#stl_bg", ".popup_box_container", "div.fw_reply_tt", "div.own_reply_tt", "div.docs_panel_wrap", "div.cont_login_app_sms_tt", "div.jpv_cont", "#pageHeader", "#sideBar", "#pageBody", ".notifier_baloon_wrap", "#privacy_dropdown", "#mv_box .mv_controls", "#layer > div.pv_cont > table", ".widget_body", "#bad_browser", "div.docs_tt_preview", "div.like_tt", "div.wall_tt.rich", "div.mention_tt", "div.profile_map_first", "div.community_square_pic", "#box_loader", "div.tt", "#tt", "div.dd_menu", "#pupMenu"],
                player: ["#pad_wrap", ".audio_status_tt", "#gp"],
                chat: ["#chat_onl_wrap", ".rb_box_wrap", "#box_layer_wrap box_body", "#custom_menu_wrap"]
            },
            filterReverse: {
                all: ["video", "img:not(.can_zoom):not([src='/img/widget_logo.gif'])", "embed#flash_camera", ".mv_recom_screen", ".fave_video_thumb", "div.fave_photo_inner", "div.page_doc_photo", "div.im_doc_photo", ".video_image_div", "div.video_info_tutorial_screen", "div.page_video_inline_wrap", "span.page_video_thumb", "a.poll_tt_usr", "td.page_media_link_thumb", "a.page_post_thumb_unsized", "a.video_row_img", "div.login_app_device_screen", "div.login_mobile_cover", "#browsers > a", "div.app_container", ".pe_canvas_wrap", "a:not(.add_media_item)[style*='background-image'],div[style*='background-image'],div[style*='url(']:not(.profile_map_first),span[style*='background-image']", "#playerWrap"],
                graffitiBox: ["canvas#graffiti_cpicker", "canvas#graffiti_controls", "div#graffiti_aligner"],
                maps: ["#profile_map_cont", "#place_map_cont", ".ymaps-2-1-17-svg-icon-content"],
                shareDialog: ["div.like_share_widget_preview_wrap", "a.like_share_widget_icon"],
                video: [".videocat_thumb", ".videocat_row_video_thumb"]
            }
        },
        o = function(o) {
            return e[o]
        },
        a = function(e) {
            var a, t = "";
            a = "object" == typeof e ? e : o(e);
            for (var _ in a) a.hasOwnProperty(_) && (t && (t += ", "), t += a[_].join());
            return t
        };

    function t(e) {
        return "#" == e.charAt(0) ? e.substring(1, 7) : e
    }
    return {
        get: a,
        getOpacityCss: function(e) {
            var _, i, r, l, p = o("opacity"),
                n = "",
                d = "";
            e /= 100;
            for (var s = 0; s < p.length; s++) d = p[s].color, n += a(p[s].rules) + "{background-color: rgba(" + [(r = l = d, parseInt(t(r).substring(0, 2), 16)), (i = l, parseInt(t(i).substring(2, 4), 16)), (_ = l, parseInt(t(_).substring(4, 6), 16))].join(",") + ", " + e + ")!important}";
            return n
        },
        getFilterCss: function(e, o) {
            return a("filter") + "{" + e + " hue-rotate(" + o + "deg);}" + a("filterReverse") + "{" + e + " hue-rotate(" + -o + "deg);}"
        },
        getFilterNewCss: function(e, o) {
            return a("filterNew") + "{" + e + " hue-rotate(" + o + "deg);}" + a("filterNewReverse") + "{" + e + " hue-rotate(" + -o + "deg);}"
        }
    }
}();