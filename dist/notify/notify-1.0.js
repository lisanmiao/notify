/**
 * @description notify plugin designed for show different kinds of tips
 *              designed at 2012/12/8
 * @author ：李三淼 lisanmiaoanda@126.com QQ：752950250
 * @version 1.0
 * @requires jquery1.0+
 */
(function ($) {
    var loading = false;
    var globalTimeIdOfInterval = null;//循环定时器ID
    var globalTimeIdOfTimeout = null;//闹钟定时器ID
    var speed = 400;//每400ms一个进度
    /**
     * 
     * @param {string} notification: 提示内容，""=> 立即消失; "不为空"=>正常显示
     * @param {int} timeout 消失时间(ms) timeout==-1:永久显示；timeout==0:立即消失；timeout>0: timeout ms后消失
     * @param {string} theme 显示样式 ["", "success", "information", "error", "attention"]
     * @param {bool} hasMaskLayer 是否有遮罩层 true(default) , false
     * @param {bool} isLoading 是否显示正在加载 true, false(default)
     * @returns void
     */
    $.notify = function (notification, timeout, theme, hasMaskLayer, isLoading) {
        if (typeof (notification) !== "string") {
            notification = "";
        }
        if (!$.notify.isInteger(timeout)) {
            timeout = 3000;
        }
        if (notification === "" || timeout === 0) {
            $.notify.hide();
            return;
        }
        if ((theme !== "success") && (theme !== "information") && (theme !== "error") && (theme !== "attention")) {
            theme = "";
        } else {
            theme = "notify-" + theme;
        }
        if ((hasMaskLayer !== true) && hasMaskLayer !== false) {
            hasMaskLayer = true;
        }
        if ((isLoading !== true) && isLoading !== false) {
            isLoading = false;
        }
        loading = isLoading;
        if ($("#notify").length === 0) {
            var positionStyle = "fixed";
            //if ie6
            if ($.notify.isIE6()) {
                positionStyle = "absolute";
            }
            var notificationDiv = '<div id="notify-wrap" style="width: 100%;height: 100%;position: absolute;left: 0;right: 0;top: 0;bottom: 0;z-index: 99998;display:none;background-color:#000"></div><div id="notify" style="background:none repeat scroll 0 0 #000;color: #EFEFEF;font:12px/34px \'microsoft yahei\',Arial,Helvetica,sans-serif;height:32px;padding: 0 1em;position: ' + positionStyle + ';left: 50%;top: 50%;z-index: 99999;display:none;float:left;border:1px solid rgb(0, 0, 0);border-color:rgba(0, 0, 0, 0.8);-webkit-box-shadow:0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(0, 0, 0, 0.6);-moz-box-shadow:0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(0, 0, 0, 0.6);box-shadow:0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(0, 0, 0, 0.6);-moz-outline-radius: 8px;"></div>';
            $(document).find("body").append(notificationDiv);
        }
        $("#notify").html(notification).removeClass().addClass(theme);
        $.notify.resize();
        //if ie6
        if ($.notify.isIE6()) {
            $.notify.ie6FixBug();
        }
        $.notify.show(hasMaskLayer);
        //loading
        clearInterval(globalTimeIdOfInterval);
        if (loading) {
            var dotNum = 0;
            globalTimeIdOfInterval = window.setInterval(function () {
                dotNum = ++dotNum % 6;
                var dotString = "";
                for (var i = 0; i < dotNum; i++) {
                    dotString += ".";
                }
                $("#notify").html(notification + dotString);
            }, speed);
        } else {
            $("#notify").html(notification);
        }
        //timeout to hide
        if (timeout !== -1 && timeout != null) {
            clearTimeout(globalTimeIdOfTimeout);
            globalTimeIdOfTimeout = setTimeout(function () {
                $.notify.hide();
            }, (timeout));
        }
        //resize notify
        $(window).resize(function () {
            $.notify.resize();
        });
    }
    /*
     * Public, $.notify methods
     */
    ;
    $.extend($.notify, {
        hide: function () {
            $("#notify, #notify-wrap").fadeOut(400, function () {
                $(this).remove();
            });
            clearTimeout(globalTimeIdOfTimeout);
            if (loading) {
                clearInterval(globalTimeIdOfInterval);
            }
        },
        show: function (hasMaskLayer) {
            clearTimeout(globalTimeIdOfTimeout);
            if (!loading) {
                clearInterval(globalTimeIdOfInterval);
            }
            var notifySelector = "#notify";
            if (hasMaskLayer) {
                notifySelector += ", #notify-wrap";
            } else {
                $("#notify-wrap").fadeOut();
            }
            $(notifySelector).fadeIn();
        },
        resize: function () {
            $("#notify-wrap").css({
                "height": $(document).height(),
                "width": $(document).width(),
                "opacity": 0.5
            });
            $("#notify").css({
                "margin-left": -($("#notify").width() / 2 + 16) + "px",
                "margin-top": -$("#notify").height() / 2 + "px"
            });
        },
        ie6FixBug: function () {
            var marginTop = -0.5 * $("#notify").height();
            $(window).scroll(function () {
                var scrollsD = $(document).scrollTop();
                var newMarginTop = marginTop + scrollsD;
                $("#notify").css({
                    "margin-top": newMarginTop + "px"
                });
            });
        },
        isIE6: function () {
            jQuery.browser = {};
            jQuery.browser.msie = false;
            jQuery.browser.version = 0;
            if (navigator.userAgent.match(/MSIE ([0-9]+)\./)) {
                jQuery.browser.msie = true;
                jQuery.browser.version = RegExp.$1;
            }
            if ($.browser.msie && ($.browser.version == 6.0) && !$.support.style) {
                return true;
            } else {
                return false;
            }
        },
        isInteger: function (obj) {
            //return (obj | 0) === obj;
            return Math.floor(obj) === obj;
        }
    });
})(jQuery);