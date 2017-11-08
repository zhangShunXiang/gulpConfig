"use strict";

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
    echarts.init(document.getElementById("page6-5-echarts")).setOption(e);
}