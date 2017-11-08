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