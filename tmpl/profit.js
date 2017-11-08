"use strict";

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
    echarts.init(document.getElementById("profit")).setOption(e);
}