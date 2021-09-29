<template>
    <q-card flat bordered class="shadow q-pa-none q-ma-none">
    <q-card-section class="row">
        <div :class="!$q.dark.isActive? 'text-grey-7':'text-white'" class="text-h6 col-12">Encounters per Month
     
        </div>
    </q-card-section>

    <q-separator class="full-width" inset></q-separator>

    <q-card-section>
        <vue-echarts ref="market_share" :option="getBarChartOptions" :resizable="true" style="height:320px"/>
    </q-card-section>
    </q-card>
</template>

<script>
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-plus-operands */

import { defineComponent } from 'vue';
import * as echarts from 'echarts';
import {exportFile} from 'quasar';
import { VueEcharts } from 'vue3-echarts';

export default  defineComponent({
  name: 'barchart',
  components: {
      VueEcharts
  },
  computed:{
      
            getBarChartOptions() {
                let dataAxis = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'];
                let market_share_data = [220, 120, 199, 234, 200, 330];
                let growth_data = [180, 182, 120, 290, 290, 320];
                return {
                    xAxis: {
                        data: dataAxis,
                        axisLabel: {
                            inside: false,
                            color: this.$q.dark.isActive ? 'white' : '#676767'
                        },
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            lineStyle: {
                                color: 'grey'
                            },
                            show: false
                        },
                        z: 10
                    },
                    tooltip: {},
                    legend: {
                        show: true,
                        textStyle: {
                            color: this.$q.dark.isActive ? 'white' : '#676767'
                        }
                    },
                    grid: {
                        bottom: '9%',
                        left: '9%',
                        top: '10%',
                        right: '5%',
                        show: true
                    },
                    yAxis: {
                        axisLine: {
                            lineStyle: {
                                color: 'grey'
                            },
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            color: this.$q.dark.isActive ? 'white' : '#676767'
                        }
                    },
                    series: [
                        {
                            name: 'Market Share',
                            type: 'bar',
                            barGap: '15%',
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(
                                        0, 0, 0, 1,
                                        [
                                            {offset: 0, color: '#f6c7a3'},
                                            {offset: 0.5, color: '#f6ac71'},
                                            {offset: 1, color: '#f6ac71'}
                                        ]
                                    )
                                },
                                emphasis: {
                                    color: new echarts.graphic.LinearGradient(
                                        0, 0, 0, 1,
                                        [
                                            {offset: 0, color: '#f6ac71'},
                                            {offset: 0.7, color: '#f6ac71'},
                                            {offset: 1, color: '#f6c7a3'}
                                        ]
                                    )
                                }
                            },
                            data: market_share_data
                        },
                        {
                            name: 'Growth',
                            type: 'bar',
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(
                                        0, 0, 0, 1,
                                        [
                                            {offset: 0, color: '#b08eb3'},
                                            {offset: 0.5, color: '#a773b3'},
                                            {offset: 1, color: '#ad6bb3'}
                                        ]
                                    )
                                },
                                emphasis: {
                                    color: new echarts.graphic.LinearGradient(
                                        0, 0, 0, 1,
                                        [
                                            {offset: 0, color: '#ad6bb3'},
                                            {offset: 0.7, color: '#a773b3'},
                                            {offset: 1, color: '#b08eb3'}
                                        ]
                                    )
                                }
                            },
                            data: growth_data
                        }
                    ]
                }
            }
  },
  methods: {
      SaveImage(type) {
                const linkSource = this.$refs[type].getDataURL();
                const downloadLink = document.createElement('a');
                document.body.appendChild(downloadLink);
                downloadLink.href = linkSource;
                downloadLink.target = '_self';
                downloadLink.download = type + '.png';
                downloadLink.click();
            }
  }
 
})
</script>

<style>

</style>
