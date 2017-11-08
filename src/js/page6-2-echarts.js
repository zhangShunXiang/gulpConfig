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

