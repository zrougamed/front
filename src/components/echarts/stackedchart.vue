
<template>
 <q-card flat bordered class="shadow q-pa-none q-ma-none">
    <q-card-section>
        <div :class="!$q.dark.isActive? 'text-grey-7':'text-white'" class="text-h6">Sales Pipeline by Sales Rep
        <q-btn flat dense icon="fas fa-download" class="float-right" @click="SaveImage('sales_pipeline')"
                :color="!$q.dark.isActive? 'grey-8':'white'">
            <q-tooltip>Download</q-tooltip>
        </q-btn>
        </div>
    </q-card-section>

    <q-separator class="full-width" inset></q-separator>

    <q-card-section>
        <vue-echarts ref="sales_pipeline" :option="stackedBarOptions" :resizable="true" style="height:270px"/>
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
  name: 'stackedchart',
  components: {
      VueEcharts
  },
  computed:{
      stackedBarOptions() {
                return {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer:
                            {
                                type: 'shadow'
                            },
                        backgroundColor: 'rgba(50,50,50,0.9)',

                    },
                    legend: {
                        textStyle: {
                            color: this.$q.dark.isActive ? 'white' : '#676767'
                        }
                    },
                    color: ['#cc9dd1', '#9cebaf', '#41eff7'],
                    grid:
                        {
                            bottom: '3%',
                            left: '15%',
                            top: '18%',
                            right: '5%',
                            show: true
                        },
                    calculable: true,
                    xAxis:
                        {
                            type: 'value',
                            position: 'top',
                            axisLine: {
                                show: false
                            },
                            axisTick: {
                                show: false
                            },
                            axisLabel: {
                                formatter: function (value, index) {
                                    return '$' + value;
                                },
                                color: this.$q.dark.isActive ? 'white' : '#676767'
                            }
                        },
                    yAxis: [
                        {
                            type: 'category',
                            data: ['Alex Morrow', 'Joanna Carter', 'Jimmy Joanna', 'Mack Hales'],
                            axisLine: {
                                show: false
                            },
                            axisTick: {
                                show: false
                            },
                            axisLabel: {
                                fontSize: 12,
                                color: this.$q.dark.isActive ? 'white' : '#676767'
                            }
                        }
                    ],
                    series:
                        [{
                            name: 'Qualification',
                            type: 'bar',
                            stack: 'A',
                            data: [300, 350, 400, 500]

                        }, {
                            name: 'Discovery',
                            type: 'bar',
                            stack: 'A',
                            data: [100, 180, 250, 300]

                        }, {
                            name: 'Quote',
                            type: 'bar',
                            stack: 'A',
                            data: [100, 120, 200, 220]

                        }]
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
