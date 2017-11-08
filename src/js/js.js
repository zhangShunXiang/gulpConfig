!function ($) {
    function adjustScale() {
        var e = ($(window).height() - 150) / 730;
        e <= 1 && $(".waper").css({
            transform: "scale(" + e + ")"
        })
    }
    with ($(".q-th-nav li").click(function () {
        var e = $(this).index() + 1;
        $(".s").fadeOut(0),
            $(".q-th-nav li").find("a").removeClass("nav-on"),
            $(this).find("a").addClass("nav-on"),
            $(".s" + e).fadeIn(0)

    }),

    $(".hd li, .next, .prev, .back, .first ").click(function () {
        var n = $.browser.version;
        if (n != '7.0' && n != '8.0') {
            $(".light").removeClass("line-a")
            $(".light").is(":animated") || $(".light").fadeOut(100).fadeIn(200)
        }
    }),
    adjustScale(),
    $(window).resize(function () {
        adjustScale()
    }),
    $(".invent-tag a").click(function () {
        var e = $(this).index() + 1;
        $(".invent-tag a").removeClass("on"),
            $(this).addClass("on"),
            $(".s2 .map1, .s2 .map2").hide(),
            $(".s2 .map" + e).show()
    }),
    $(".map .point").mousemove(function () {
        $(".map .point").css({
            "z-index": 10
        }),
            $(this).find(".tips").fadeIn(0),
            $(this).css({
                "z-index": 11
            })
    }),
    $(".map .point").mouseout(function () {
        $(this).find(".tips").fadeOut(0)
    }),
    $(".n,  .next,  .prev, .hd li, .first").click(function () {
        $(".counter") && $(".counter").countUp({
            delay: 50,
            time: 1e3
        })
    }),
    $(".s1 .next").click(function () {
        $(".s").fadeOut(0),
            $(".s2").fadeIn(0),
            $(".n a").removeClass("nav-on"),
            $(".n2 a").addClass("nav-on")
    }),
    $(".s1 .prev").click(function () {
        $(".s1").fadeOut(0),
            $(".first").fadeIn(0),
            $(".n a").removeClass("nav-on")
    }),
    $(".s2 .next").click(function () {
        6 == $(".s2 .hd li.on").index(".s2 .hd li") && ($(".s").fadeOut(0),
            $(".s3").fadeIn(0),
            $(".n a").removeClass("nav-on"),
            $(".n3 a").addClass("nav-on"))
    }),
    $(".s2 .prev").click(function () {
        0 == $(".s2 .hd li.on").index(".s2 .hd li") && ($(".s").fadeOut(0),
            $(".s1").fadeIn(0),
            $(".n a").removeClass("nav-on"),
            $(".n1 a").addClass("nav-on"))
    }),
    $(".s3 .next").click(function () {
        $(".s").fadeOut(0),
            $(".s4").fadeIn(0),
            $(".n a").removeClass("nav-on"),
            $(".n4 a").addClass("nav-on")
    }),
    $(".s3 .prev").click(function () {
        $(".s").fadeOut(0),
            $(".s2").fadeIn(0),
            $(".n a").removeClass("nav-on"),
            $(".n2 a").addClass("nav-on")
    }),
    $(".s4 .next").click(function () {
        1 == $(".s4 .hd li.on").index(".s4 .hd li") && ($(".s").fadeOut(0),
            $(".s5").fadeIn(0),
            $(".n a").removeClass("nav-on"),
            $(".n5 a").addClass("nav-on"))
    }),
    $(".s4 .prev").click(function () {
        0 == $(".s4 .hd li.on").index(".s4 .hd li") && ($(".s").fadeOut(0),
            $(".s3").fadeIn(0),
            $(".n a").removeClass("nav-on"),
            $(".n3 a").addClass("nav-on"))
    }),
    $(".s5 .next").click(function () {
        2 == $(".s5 .hd li.on").index(".s5 .hd li") && ($(".s").fadeOut(0),
            $(".s6").fadeIn(0),
            $(".n a").removeClass("nav-on"),
            $(".n6 a").addClass("nav-on"))
    }),
    $(".s5 .prev").click(function () {
        0 == $(".s5 .hd li.on").index(".s5 .hd li") && ($(".s").fadeOut(0),
            $(".s4").fadeIn(0),
            $(".n a").removeClass("nav-on"),
            $(".n4 a").addClass("nav-on"))
    }),
    $(".s6 .next").click(function () {
        $(".s").fadeOut(0),
            $(".s7").fadeIn(0),
            $(".n a").removeClass("nav-on"),
            $(".n7 a").addClass("nav-on")
    }),
    $(".s6 .prev").click(function () {
        $(".s").fadeOut(0),
            $(".s5").fadeIn(0),
            $(".n a").removeClass("nav-on"),
            $(".n5 a").addClass("nav-on")
    }),
    $(".s7 .next").click(function () {
        $(".s").fadeOut(0),
            $(".s8").fadeIn(0),
            $(".n a").removeClass("nav-on"),
            $(".n8 a").addClass("nav-on")
    }),
    $(".s7 .prev").click(function () {
        $(".s").fadeOut(0),
            $(".s6").fadeIn(0),
            $(".n a").removeClass("nav-on"),
            $(".n6 a").addClass("nav-on")
    }),
    $(".s8 .next").click(function () {
        1 == $(".s8 .hd li.on").index(".s8 .hd li") && ($(".s").fadeOut(0),
            $(".end").fadeIn(0),
            $(".n a").removeClass("nav-on"))
    }),
    $(".s8 .prev").click(function () {
        0 == $(".s8 .hd li.on").index(".s8 .hd li") && ($(".s").fadeOut(0),
            $(".s7").fadeIn(0),
            $(".n a").removeClass("nav-on"),
            $(".n7 a").addClass("nav-on"))
    }),
    $(".back").click(function () {
        $(".end").fadeOut(0);
        $(".first").fadeIn(0);
    }),
    $(".first").click(function () {
        $(this).fadeOut(0),
            $(".s1").show(),
            $(".n a").removeClass("nav-on"),
            $(".n1 a").addClass("nav-on")

    }),
    setTimeout(function () {
        $('.first').fadeOut(0),
            $(".s1").fadeIn(0),
            $(".n a").removeClass("nav-on"),
            $(".n1 a").addClass("nav-on"),
            $('.q-layer-box').hide(0),
            $(".counter") && $(".counter").countUp({
                delay: 50,
                time: 1e3
            })

    }, 3000),

    jQuery(".s1").slide({
        mainCell: ".bd ul",
        trigger: "click",
        autoPlay: !1,
        pnLoop: !1,
        delayTime:0
        
    }),
    jQuery(".s2").slide({
        mainCell: ".bd ul",
        trigger: "click",
        autoPlay: !1,
        pnLoop: !1,
        delayTime:0,
        startFun: function (e, a) {
            var n = $.browser.version;
            "7.0" != n && "8.0" != n && (2 == e ? profit() : 3 == e ? (ech1(),
                ech2()) : 5 == e ? ech3() : 6 == e && (ech4(),
                    ech5()))
        }
    }),
    jQuery(".s3").slide({
        mainCell: ".bd ul",
        trigger: "click",
        autoPlay: !1,
        delayTime:0
    }),
    jQuery(".s4").slide({
        mainCell: ".bd ul",
        trigger: "click",
        autoPlay: !1,
        delayTime:0
        
    }),
    jQuery(".s5").slide({
        mainCell: ".bd ul",
        trigger: "click",
        autoPlay: !1,
        delayTime:0
        
    }),
    jQuery(".s6").slide({
        mainCell: ".bd ul",
        trigger: "click",
        autoPlay: !1,
        delayTime:0
        
    }),
    jQuery(".s7").slide({
        mainCell: ".bd ul",
        trigger: "click",
        autoPlay: !1,
        delayTime:0
        
    }),
    jQuery(".s8").slide({
        mainCell: ".bd ul",
        trigger: "click",
        autoPlay: !1,
        delayTime:0
        
    }),
    window._bd_share_config = {
        share: {},
        slide: {
            bdText: "团贷网双节福利，最高加息2%，千万别错过！",
            type: "slide",
            bdImg: "0",
            bdPos: "right",
            bdStyle: "0",
            bdTop: "0"
        }
    },
    document)
    (getElementsByTagName("head")[0] || body).appendChild(createElement("script")).src = "//js.tuandai.com/scripts/static/api/js/share.js?v=89860593.js?cdnversion=" + ~(-new Date / 36e5)
}(jQuery);