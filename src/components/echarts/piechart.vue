<template>
  
<q-card flat bordered class="shadow q-pa-none q-ma-none">
        <q-card-section>
            <div :class="!$q.dark.isActive? 'text-grey-7':'text-white'" class="text-h6">Patient's Race 
            
            </div>
        </q-card-section>

        <q-separator class="full-width" inset></q-separator>

        <q-card-section>
            <vue-echarts ref="key_competitors" :option="pieOptions" :resizable="true" style="height:320px"/>
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
  name: 'piechart',
  components: {
      VueEcharts
  },
  computed:{
     pieOptions() {
                return {
                    tooltip: {
                        show: true
                    },
                    legend: {
                        orient: 'horizontal',
                        bottom: 0,
                        width: 300,
                        textStyle: {
                            color: this.$q.dark.isActive ? 'white' : '#676767'
                        }
                    },
                    color: ['#66e398', '#cc9dd1', '#f0d377'],
                    series: [
                        {
                            name: 'Race',
                            type: 'pie',
                            radius: ['40%', '70%'],
                            avoidLabelOverlap: false,
                            label: {
                                normal: {
                                    show: true,
                                    position: 'inner',
                                    formatter: function (param, index) {
                                        return param.value 
                                    }
                                },
                                emphasis: {
                                    show: true,
                                    textStyle: {
                                        fontSize: '20',
                                        fontWeight: 'bold'
                                    }
                                }
                            },
                            labelLine: {
                                normal: {
                                    show: false
                                }
                            },
                            selectedMode: 'single',
                            data: this.$store.state.dashboard.race
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
