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