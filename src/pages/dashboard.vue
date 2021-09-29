
<template>
  <q-page class="q-pt-xs">
    <div class="q-ma-md">
      <!-- Status Component -->
      <statsLine/>

      <div class="row q-col-gutter-md">
        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
          <!-- Area Component -->
          
          <mapchart id="sales_goals"  :options="options"></mapchart>
          
          
        </div>
        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
          <!-- bar Component -->
          <barchart/>
        </div>

        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
          <!-- bar Component -->
          <piechart/>
        </div>

      </div>




  
      <div class="row q-col-gutter-md q-pt-md">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <q-card flat bordered class="shadow">
            <q-table
              title="All Payment transactions "
              :rows="statisticTableData"
          

              :columns="columns"
              

              v-model="pagination"
            >
              
            </q-table>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
 /* eslint-disable @typescript-eslint/no-unsafe-member-access */
    // import * as echarts from 'echarts';
    import {exportFile} from 'quasar';
    // import { VueEcharts } from 'vue3-echarts';
    import mapchart from '../components/echarts/MapComponent.vue'
    import areachart from '../components/echarts/areachart.vue'
    import barchart from '../components/echarts/barchart.vue'
    import statsLine from '../components/echarts/stats.vue'
    import Stackedchart from 'src/components/echarts/stackedchart.vue';
    import piechart from 'src/components/echarts/piechart.vue';
    import { useStore } from 'vuex';


    function wrapCsvValue(val, formatFn) {
        let formatted = formatFn !== void 0
            // eslint-disable-next-line @typescript-eslint/no-unsafe-call
            ? formatFn(val)
            : val

        formatted = formatted === void 0 || formatted === null
            ? ''
            : String(formatted)

        formatted = formatted.split('"').join('""')

        return `"${formatted}"`
    }
    const  columns = [
                    {name: 'Patient', align: 'left', label: 'Patient', field: 'Patient', sortable: true},
                    {
                        name: 'Medication_code',
                        required: true,
                        label: 'Medication code',
                        align: 'left',
                        field: 'Medication_code',
                        sortable: true
                    },
                    {name: 'baseCost', align: 'left', label: 'Base Cost', field: 'baseCost', sortable: true},
                    {name: 'payerCoverage', align: 'left', label: 'Payer Coverage', field: 'payerCoverage', sortable: true},
                    {name: 'totalCosts', align: 'center', label: 'Total Costs', field: 'totalCosts', sortable: true},
                    {
                        name: 'paymentDate',
                        align: 'left',
                        label: 'Payment Date',
                        field: 'paymentDate',
                        sortable: true
                    }
                ];
    export default {
      components: {
          mapchart,
          barchart,
          areachart,
          statsLine,
          Stackedchart,
          piechart
        },
        setup(){
          const store = useStore();
          return{
            store,
          }
        },
        
        data() {
            return {
                options:null,
                datas:null,
                filter: '',
                mode: 'list',
                statisticTableData:[],
                columns,
               
                pagination: {
                    rowsPerPage: 10
                }
            }
        },
        computed: {
              statisticTableData () {
                console.log("Data");
                  return this.$store.state.dashboard.statisticTable;
            },
            
        },
        mounted() {
             
       
        const datas = this.$store.state.dashboard.geoMap;
        this.options = {
          textStyle: {
            fontFamily: 'Inter, "Helvetica Neue", Arial, sans-serif'
          },
          backgroundColor:"#fff", //"#404a59",         
          geo: {
            map: "world",
            emphasis: {
              label: {
                show: false
              },
              itemStyle: {
                areaColor: '#f3f3f3'
              }
            },
            itemStyle: {
              areaColor: '#f3f3f3',//"#323c48",
              borderColor: "#111"
            }
          },
          series: [
          
            {
              name: "Top 5",
              type: "effectScatter",
              coordinateSystem: "geo",
              data: datas,
              symbolSize: val => val[2]  ,
              showEffectOn: "render",
              rippleEffect: {
                brushType: "stroke"
              },
              emphasis: {scale: true},
              itemStyle: {shadowBlur: 1,shadowColor: "#333"},zlevel: 1}]};
              
           
            
            
            
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
            },
            exportTable() {
                // naive encoding to csv format
                const content = [this.columns.map(col => wrapCsvValue(col.label))].concat(
                    this.data.map(row => this.columns.map(col => wrapCsvValue(
                        typeof col.field === 'function'
                            ? col.field(row)
                            : row[col.field === void 0 ? col.name : col.field],
                        col.format
                    )).join(','))
                ).join('\r\n')

                const status = exportFile(
                    'activity.csv',
                    content,
                    'text/csv'
                )

                if (status !== true) {
                    this.$q.notify({
                        message: 'Browser denied file download...',
                        color: 'negative',
                        icon: 'warning'
                    })
                }
            }
        },
        watch:{
          "this.$store.state.dashboard":{
        handler(val){
            statisticTableData = this.$store.state.dashboard.statisticTable;
            return statisticTableData;
          },
          deep:true
          }
        }
    }
</script>

<style>
</style>
