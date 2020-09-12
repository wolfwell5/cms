<template>
  <div ref="chart" style="width:100%;height:100%">

  </div>
</template>

<script>
    export default {
        name: "CostSummary",
        mounted() {
            this.drawPicture();
        },
        methods: {
            async drawPicture() {
                var data = await this.genData();
                const chart = this.$refs.chart;
                const myChart = this.$echarts.init(chart)
                const option = {
                    title: {
                        text: '总盈利统计',
                        subtext: '此数值根据 收付款 动态变化',
                        left: 'left'
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b} : {c} ({d}%)'
                    },
                    legend: {
                        type: 'scroll',
                        orient: 'vertical',
                        right: 10,
                        top: 20,
                        bottom: 20,
                        data: data.legendData,

                        selected: data.selected
                    },
                    series: [
                        {
                            name: '姓名',
                            type: 'pie',
                            radius: '55%',
                            center: ['40%', '50%'],
                            data: data.seriesData,
                            emphasis: {
                                itemStyle: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]
                };
                myChart.setOption(option)
            },
            async genData(count) {
                let chartData;
                await this.$store.dispatch("GetCostSummary", '').then(response => {
                    chartData = response.data;
                });
                // debugger
                console.log('GetCostSummary res', chartData);

                var nameList = [];
                var legendData = [];
                var seriesData = [];
                var selected = {};

                chartData.map(item => {
                    nameList.push(item.customer);
                    legendData.push(item.customer);
                    seriesData.push({
                        name: item.customer,
                        value: item.contractMoney,
                    });
                });


                // var name = '';
                // for (var i = 0; i < count; i++) {
                //     name = Math.random() > 0.65
                //         ? makeWord(10, 1) + '·' + makeWord(3, 0)
                //         : makeWord(2, 1);
                //     legendData.push(name);
                //     seriesData.push({
                //         name: name,
                //         value: Math.round(Math.random() * 100000)
                //     });
                //     selected[name] = i < 6;
                // }

                return {
                    legendData: legendData,
                    seriesData: seriesData,
                    selected: selected
                };
            },

        },
    }
</script>

<style scoped>

</style>
