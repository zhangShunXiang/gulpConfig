"use strict";

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
    echarts.init(document.getElementById("page6-1-echarts")).setOption(e);
}