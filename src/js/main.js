function profit() {
    var e = {
        tooltip: {
            trigger: "axis"
        },
        grid: {
            show: !0,
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: !0,
            borderColor: "#f8ebd9"
        },
        xAxis: [{
            axisTick: {
                show: !1
            },
            axisLabel: {
                color: "#c4a67c",
                fontSize: 14
            },
            axisLine: {
                lineStyle: {
                    color: "#ebe6e1"
                }
            },
            splitLine: {
                show: !0,
                lineStyle: {
                    color: "#f8ebd9"
                }
            },
            type: "category",
            boundaryGap: !1,
            data: ["7月", "8月", "9月"]
        }],
        yAxis: [{
            name: "单位：%",
            nameTextStyle: {
                color: "#c4a67c",
                fontSize: 14,
                padding: [0, 0, 10, 55]
            },
            max: 3,
            type: "value",
            axisTick: {
                show: !1
            },
            axisLine: {
                lineStyle: {
                    color: "#ebe6e1"
                }
            },
            axisLabel: {
                color: "#c4a67c"
            },
            splitLine: {
                lineStyle: {
                    color: "#f8ebd9"
                }
            }
        }],
        series: [{
            itemStyle: {
                normal: {
                    color: '#ff7728'
                }
            },
            name: "逾期率",
            type: "line",
            areaStyle: {
                normal: {
                    color: "#ffe9d3"
                }
            },
            lineStyle: {
                normal: {
                    color: "#ff7b2f"
                }
            },
            symbolSize: 8,
            data: [1.82, 2.02, 1.63]
        }]
    };
    echarts.init(document.getElementById("profit")).setOption(e)
}
function ech1() {
    var e = {
        tooltip: {
            trigger: "item",
            formatter: "{b}"
        },
        legend: {
            orient: "vertical",
            right: "0px",
            top: "80px",
            itemWidth: 14,
            itemHeight: 15,
            itemGap: 15,
            textStyle: {
                color: "#886738",
                fontSize: 14
            },
            data: ["资产标　　68.19%", "分期宝　　16.03%", "供应链　　2.53%", "微团贷　　13.11%", "债券转让　0.14%"]
        },
        series: [{
            center: [200, 150],
            name: "交易额分布",
            type: "pie",
            radius: ["50%", "80%"],
            avoidLabelOverlap: !1,
            label: {
                normal: {
                    show: !1,
                    position: "center"
                },
                emphasis: {
                    show: !1,
                    textStyle: {
                        fontSize: "30",
                        fontWeight: "bold"
                    }
                }
            },
            labelLine: {
                normal: {
                    show: !1
                }
            },
            data: [{
                value: 68.19,
                name: "资产标　　68.19%",
                itemStyle: {
                    normal: {
                        color: "#ff6005"
                    }
                }
            }, {
                value: 16.03,
                name: "分期宝　　16.03%",
                itemStyle: {
                    normal: {
                        color: "#ff9605"
                    }
                }
            }, {
                value: 2.53,
                name: "供应链　　2.53%",
                itemStyle: {
                    normal: {
                        color: "#93979a"
                    }
                }
            }, {
                value: 13.11,
                name: "微团贷　　13.11%",
                itemStyle: {
                    normal: {
                        color: "#695a45"
                    }
                }
            }, {
                value: 0.8,
                name: "债券转让　0.14%",
                itemStyle: {
                    normal: {
                        color: "#ffd821"
                    }
                }
            }]
        }]
    };
    echarts.init(document.getElementById("page6-1-echarts")).setOption(e)
}
function ech2() {
    var e = {
        tooltip: {
            trigger: "item",
            formatter: "{b} : {d}%"
        },
        series: [{
            name: "",
            type: "pie",
            radius: "70%",
            center: ["55%", "50%"],
            labelLine: {
                normal: {
                    lineStyle: {
                        color: "#7e5e31"
                    }
                }
            },
            label: {
                normal: {
                    textStyle: {
                        fontSize: 14,
                        color: "#7e5e31"
                    }
                }
            },
            data: [{
                value: 69.03,
                name: "1个月及以下",
                itemStyle: {
                    normal: {
                        color: "#ff6005"
                    }
                }
            }, {
                value: 4.86,
                name: "1-3个月",
                itemStyle: {
                    normal: {
                        color: "#6b5c4c"
                    }
                }
            }, {
                value: 4.98,
                name: "3-6个月",
                itemStyle: {
                    normal: {
                        color: "#929699"
                    }
                }
            }, {
                value: 3.84,
                name: "6-12个月",
                itemStyle: {
                    normal: {
                        color: "#ffd825"
                    }
                }
            }, {
                value: 17.29,
                name: "12个月以上",
                itemStyle: {
                    normal: {
                        color: "#ff9502"
                    }
                }
            }]
        }]
    };
    echarts.init(document.getElementById("page6-2-echarts")).setOption(e)
}
function ech3() {
    var e = {
        tooltip: {
            trigger: "item",
            formatter: "{b}: {d}%"
        },
        series: [{
            name: "",
            type: "pie",
            radius: ["40%", "68%"],
            center: ["55%", "50%"],
            labelLine: {
                normal: {
                    lineStyle: {
                        color: "#7e5e31"
                    }
                }
            },
            label: {
                normal: {
                    textStyle: {
                        fontSize: 14,
                        color: "#7e5e31"
                    }
                }
            },
            data: [{
                value: 4.41,
                name: "25岁及以下",
                itemStyle: {
                    normal: {
                        color: "#ff9605"
                    }
                }
            }, {
                value: 28.33,
                name: "36-45岁",
                itemStyle: {
                    normal: {
                        color: "#695a48"
                    }
                }
            }, {
                value: 38.23,
                name: "26-35岁",
                itemStyle: {
                    normal: {
                        color: "#ff6005"
                    }
                }
            }, {
                value: 29.03,
                name: "45岁以上",
                itemStyle: {
                    normal: {
                        color: "#ffd928"
                    }
                }
            }]
        }]
    };
    echarts.init(document.getElementById("page6-3-echarts")).setOption(e)
}
function ech4() {
    var e = {
        tooltip: {
            trigger: "item",
            formatter: "{b} : {c}次"
        },
        legend: {
            show: !1,
            x: "left",
            data: ["咨询数量"]
        },
        grid: {
            show: !1,
            left: "3%",
            bottom: 20,
            containLabel: !0,
            borderColor: "#f8ebd9"
        },
        xAxis: [{
            axisTick: {
                show: !1
            },
            axisLabel: {
                color: "#c4a67c",
                fontSize: 14
            },
            axisLine: {
                lineStyle: {
                    color: "#ebe6e1"
                }
            },
            splitLine: {
                show: !0,
                lineStyle: {
                    color: "#f8ebd9"
                }
            },
            type: "category",
            data: ["第一季度", "第二季度", "第三季度"]
        }],
        yAxis: [{
            max: 5e5,
            type: "value",
            axisTick: {
                show: !1
            },
            axisLine: {
                lineStyle: {
                    color: "#ebe6e1"
                }
            },
            axisLabel: {
                color: "#c4a67c"
            },
            splitLine: {
                lineStyle: {
                    color: "#f8ebd9"
                }
            }
        }],
        calculable: !0,
        series: [{
            itemStyle: {
                normal: {
                    color: '#ff7728',
                    label: {
                        show: !0,
                        formatter: "{c}次",
                        textStyle: {
                            fontSize: 15,
                            color: "#ff6005"
                        }
                    }
                }
            },
            smooth: !0,
            name: "咨询数量",
            type: "line",
            lineStyle: {
                normal: {
                    color: "#ff7b2f"
                }
            },
            symbolSize: 8,
            data: [220800, 274692, 264397]
        }]
    };
    echarts.init(document.getElementById("page6-4-echarts")).setOption(e)
}
function ech5() {
    var e = {
        tooltip: {
            trigger: "item",
            formatter: "{b}: {c} %"
        },
        legend: {
            show: !1,
            orient: "vertical",
            right: "40px",
            top: "40px",
            itemWidth: 14,
            itemHeight: 15,
            itemGap: 15,
            textStyle: {
                color: "#886738",
                fontSize: 14
            },
            data: ["平台细则", "支付咨询", "资产标区", "会员体系", "We计划", "App问题", "App问题", "活动咨询", "转介绍方案", "其它"]
        },
        series: [{
            center: ["50%", "50%"],
            name: "问题类型",
            type: "pie",
            avoidLabelOverlap: !1,
            label: {
                normal: {
                    show: !1,
                    position: "center"
                },
                emphasis: {
                    show: !1,
                    textStyle: {
                        fontSize: "30",
                        fontWeight: "bold"
                    }
                }
            },
            labelLine: {
                normal: {
                    show: !1
                }
            },
            data: [{
                value: 15.85,
                name: "平台细则",
                itemStyle: {
                    normal: {
                        color: "#ff6005"
                    }
                }
            }, {
                value: 10.28,
                name: "支付咨询",
                itemStyle: {
                    normal: {
                        color: "#685947"
                    }
                }
            }, {
                value: 10.36,
                name: "资产标区",
                itemStyle: {
                    normal: {
                        color: "#ff9502"
                    }
                }
            }, {
                value: 9.03,
                name: "会员体系",
                itemStyle: {
                    normal: {
                        color: "#ffd820"
                    }
                }
            }, {
                value: 5.36,
                name: "We计划",
                itemStyle: {
                    normal: {
                        color: "#ff904b"
                    }
                }
            }, {
                value: 2.39,
                name: "App问题",
                itemStyle: {
                    normal: {
                        color: "#93979a"
                    }
                }
            }, {
                value: 4.28,
                name: "活动咨询",
                itemStyle: {
                    normal: {
                        color: "#806f5c"
                    }
                }
            }, {
                value: 3.29,
                name: "转介绍方案",
                itemStyle: {
                    normal: {
                        color: "#ff8d5d"
                    }
                }
            }, {
                value: 39.16,
                name: "其它",
                itemStyle: {
                    normal: {
                        color: "#ff8042"
                    }
                }
            }]
        }]
    };
    echarts.init(document.getElementById("page6-5-echarts")).setOption(e)
}

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