<template>
  
<q-card flat bordered class="shadow q-pa-none q-ma-none">
    <q-card-section class="row">
        <div :class="!$q.dark.isActive? 'text-grey-7':'text-white'" class="text-h6 col-12">Sales vs Goals
        <q-btn flat dense icon="fas fa-download" class="float-right" @click="SaveImage('sales_goals')"
                :color="!$q.dark.isActive? 'grey-8':'white'">
            <q-tooltip>Download</q-tooltip>
        </q-btn>
        </div>
    </q-card-section>

    <q-separator class="full-width" inset></q-separator>

    <q-card-section>
        <vue-echarts :option="areaChartOption" ref="sales_goals" :resizable="true" style="height:320px"/>
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
  name: 'areachart',
  components: {
      VueEcharts
  },
  computed:{
      areaChartOption() {
                return {
                    legend: {
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
                    tooltip: {show: true},
                    xAxis: {
                        type: 'category',
                        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'Jul', 'Aug', 'Sep'],
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
                    yAxis: {
                        type: 'value',
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
                    series: [{
                        name: 'Sales',
                        data: [0, 600, 300, 700, 700, 1330, 600, 500, 0],
                        type: 'line',
                        areaStyle: {},
                        smooth: true,
                        color: '#e4a3e2'
                    },
                        {
                            name: 'Goals',
                            data: [0, 300, 600, 400, 1000, 730, 840, 300, 0],
                            type: 'line',
                            areaStyle: {},
                            smooth: true,
                            color: '#25c0ea'
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
