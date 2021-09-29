<template>
  <q-card class="my-card">
         <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="mails"   label="Patient Metrics - KPIs" />
          <q-tab name="alarms" label="Patient Network Graph" />
    
        </q-tabs>
         <q-tab-panels @transition="redraw" v-model="tab">
          <q-tab-panel   name="mails">
            
              <div name="mails" class="row justify-between items-center">
                <!-- Activity Map Start -->
                <q-card-section class="map-title">Activities Map</q-card-section>

                <q-card-section>
                  <div class="filter row items-center">
                    <q-text>Filter:</q-text>
                    <div class="filter-options">
                    
                      
                      <q-checkbox v-model="selection" val="Observation" label="Observation" />
                      <q-checkbox v-model="selection" val="Condition" label="Condition" />
                      <q-checkbox v-model="selection" val="Immunization" label="Immunization" />

                    </div>
                  </div>
                </q-card-section>
              </div>
              <div class="row justify-end q-pr-md">
                <q-badge class="total-activities">Activities by Sources: {{addTotal}}</q-badge>
              </div>
              <div v-if="loading" class="column items-center justify-center" style="height:250px">
                <q-spinner
                  color="primary"
                  size="3em"
                />
                <div>Loading</div>
              </div>
              <div>
                <div  class="column" style="height: 250px;">
                  <q-card-section class="col">
                    <div id="container" />
                    <div ref="scatterChart" id="scatterChart" style="height: 400px;"></div>
                  </q-card-section>
                </div>
              </div>
              <!-- Activity Map END -->
              <!-- Slider  Start -->
              <q-card-section>
                <Chart  :data="updates"></Chart>
              </q-card-section>
              <!-- Slider End -->
              <!-- Activity Timeline Start -->
              <q-card-section>
                <ActivitiesTimeline  :data="timelineData"></ActivitiesTimeline>
              </q-card-section>
              <!-- Activity Timeline END -->
           </q-tab-panel>

          <q-tab-panel name="alarms">

              <graph></graph>
           
          </q-tab-panel>
      </q-tab-panels>
  </q-card>
</template>

<script>
import graph from "./graph.vue";
import ActivitiesTimeline from "./ActivitiesTimeline.vue";
import * as echarts from "echarts";
import { ref, computed } from "vue";
import { useQuasar } from "quasar";
import { useStore } from "vuex";
import Chart from "./chart";

const $q = useQuasar();
const store = useStore();
export default {
  name: "ScatterChart",
  components: {
    Chart,
    ActivitiesTimeline,
    graph,
  },
  setup() {
    
    // const $q = useQuasar();
    // const store = useStore();
    
    return {
      tab : ref('mails'),
      all: ref(true),
      selection: ref(["Observation", "Encounter", "Condition","Immunization"]),
      store,
      personId:"",
    };
  },
  // props: ["updates"],
  data() {
    return {
      options: {},
      loading: false,
      model: false,
      scatter_chart: null,
      store,
      updates: null,
      chartReference: null,
      selectedRange: [],
      selectedData: [],
      timelineData: [],
      totalActivities: 0,
    };
  },
  computed: {
    combined() {
      return (
        this.$store.state.members.selectedMaxDate +
        this.$store.state.members.selectedMinDate +
        this.selection
      );
    },
    addTotal() {
      return this.timelineData.length;
    },
  },
  watch: {
    "$store.state.members.activitiesTimeline": function () {
      this.timelineData =this.$store.state.members.activitiesTimeline;
    },
    "$store.state.members.activitiesMap": { handler: function(val, oldVal) {
            console.log(this.$store.state.members.selectedMaxDate );
            if (this.$store.state.members.selectedMaxDate != "" && this.$store.state.members.selectedMinDate != ""){
           this.scatter_refresh_filter();
        }else{ 
           this.scatter_refresh_filter();
        }},
        deep: true
    },
    
    
    combined: { handler: function(val, oldVal) {
            this.scatter_refresh_filter();
        },
        deep: true
    },
    
    

    
  },
  methods: {
    redraw(n,o){
      if (n=="mails"){
        this.scatter_refresh_filter();
      }

    },
    scatter_refresh_filter() {
      console.log("Here ...........");
      var data = [];
      var indiceStart = 0;
      var indiceEnd = this.$store.state.members.activitiesMap.dates.length;
      if (
        this.$store.state.members.selectedMaxDate == "last" &&
        this.$store.state.members.selectedMinDate == "first"
      ) {
        indiceEnd = this.$store.state.members.activitiesMap.dates.length;
        indiceStart = indiceEnd - 10;
        
        
      
        var dates = this.$store.state.members.activitiesMap.dates.slice(
          indiceStart,
          indiceEnd
        );
        var sources = this.$store.state.members.activitiesMap.sources; // another filter

        // slicing the timeline
        const dstart = this.$store.state.members.selectedMinDate;
        const dend = this.$store.state.members.selectedMaxDate;
        this.timelineData = this.$store.state.members.activitiesTimeline.filter(
          //this.timelineData = this.$store.getters.allTimeline.filter(
          function (el) {
            return el.filter <= dend && el.filter >= dstart;
          }
        );
      }
      else if (
        this.$store.state.members.selectedMaxDate != "" &&
        this.$store.state.members.selectedMinDate != ""
      ) {
        indiceStart = this.$store.state.members.activitiesMap.dates.indexOf(
          this.$store.state.members.selectedMinDate
        );
        if (indiceStart < 0) {
          indiceStart = 0;
        }
        var indiceEnd = this.$store.state.members.activitiesMap.dates.indexOf(
          this.$store.state.members.selectedMaxDate
        );
        if (indiceEnd > this.$store.state.members.activitiesMap.dates.length) {
          indiceEnd = this.$store.state.members.activitiesMap.dates.length;
        }
        var dates = this.$store.state.members.activitiesMap.dates.slice(
          indiceStart,
          indiceEnd
        );
        var sources = this.$store.state.members.activitiesMap.sources; // another filter

        // slicing the timeline
        const dstart = this.$store.state.members.selectedMinDate;
        const dend = this.$store.state.members.selectedMaxDate;
        this.timelineData = this.$store.state.members.activitiesTimeline.filter(
          //this.timelineData = this.$store.getters.allTimeline.filter(
          function (el) {
            return el.filter <= dend && el.filter >= dstart;
          }
        );
      } else {
        var dates = this.$store.state.members.activitiesMap.dates;
        var sources = this.$store.state.members.activitiesMap.sources;

        var titleData = [];
        var singleAxisData = [];
        var seriesData = [];
        this.timelineData = this.$store.state.members.activitiesTimeline;
        //this.timelineData = this.$store.getters.allTimeline
      }

      var selection = Object.values(this.selection);
      var tempData = JSON.parse(JSON.stringify(this.timelineData));
      this.timelineData = tempData.filter(function (el) {
        return selection.includes(el.activity_source);
      });
      // console.log(this.$store.state.members.activitiesMap.data)
     
      for (var i = 0; i < sources.length; i++) {

        const total =
          this.$store.state.members.activitiesMap.data.length / sources.length;
        if (selection.includes(sources[i])) {
          data.push(
            this.$store.state.members.activitiesMap.data[i].slice(
              indiceStart ,
              indiceEnd 
            )
          );
        }
      }
      console.log(this.selection);
      console.log(data);
      // this.$store.state.members.activitiesMap.data.slice(indiceStart,indiceEnd)
      var titleData = [];
      var singleAxisData = [];
      var seriesData = [];

      this.updates = this.$store.state.members.activitiesMap.AllDates;

      sources.forEach(function (source, idx) {
        titleData.push({
          textBaseline: "middle",
          top: ((idx + 0.5) * 100) / 8 + "%", // 7
          text: source,
        });
        singleAxisData.push({
          left: 130,
          type: "category",
          boundaryGap: false,
          data: dates,
          top: (idx * 100) / 8 + 5 + "%",
          height: 100 / 10 - 10 + "%",
          // axisLabel: {
          //     interval: dates.length / 30
          // }
        });
        seriesData.push({
          singleAxisIndex: idx,
          coordinateSystem: "singleAxis",
          type: "scatter",
          data: [],
          symbolSize: function (dataItem) {
            if (dataItem > 1000) {
              return dataItem * 0.01;
            } else if (dataItem > 100) {
              return dataItem * 0.08;
            } else if (dataItem >= 10) {
              return dataItem * 0.5;
            } else if (dataItem >= 3) {
              return dataItem * 3;
            } else {
              return dataItem * 7;
            }
          },
        });
      });

      data.forEach(function (dataItem,index) {
        seriesData[index].data = dataItem; // [], dataItem[2]
      });

      let options = {
        tooltip: {
          position: "top",
        },
        title: titleData,
        singleAxis: singleAxisData,
        animation: false,
        series: seriesData,
        textStyle: {
          fontFamily: "Roboto",
          fontSize: 6,
          fontStyle: "normal",
          fontWeight: "normal",
        },
      };
      try {
        let scatterChart = document.getElementById("scatterChart");
        echarts.dispose(scatterChart);
        this.scatter_chart = echarts.init(scatterChart);
        this.options && this.scatter_chart.setOption(options);  
      } catch (error) {
        
      }
      
    },
    scatter_refresh(){
      console.log("there ...........");
      var dates = this.$store.state.members.activitiesMap.dates;
      var sources = this.$store.state.members.activitiesMap.sources;
      var data = this.$store.state.members.activitiesMap.data;
      var titleData = [];
      var singleAxisData = [];
      var seriesData = [];
      this.updates = this.$store.state.members.activitiesMap.AllDates;
      this.timelineData = this.$store.state.members.activitiesTimeline;

      //source
      sources.forEach(function (source, idx) {
        titleData.push({
          textBaseline: "middle",
          top: ((idx + 0.5) * 100) / 8 + "%", // 7
          text: source,
        });
      //dates
        singleAxisData.push({
          left: 130,
          type: "category",
          boundaryGap: false,
          data: dates,
          top: (idx * 100) / 8 + 5 + "%",
          height: 100 / 10 - 10 + "%",
          // axisLabel: {
          //     interval: 0 /dates.length / 30
          // }
        });

        //data
        seriesData.push({
          singleAxisIndex: idx,
          coordinateSystem: "singleAxis",
          type: "scatter",
          data: [],
          symbolSize: function (dataItem) {
            if (dataItem > 1000) {
              return dataItem * 0.01;
            } else if (dataItem > 100) {
              return dataItem * 0.08;
            } else if (dataItem >= 10) {
              return dataItem * 0.5;
            } else if (dataItem >= 3) {
              return dataItem * 3;
            } else {
              return dataItem * 7;
            }
          },
        });
      });

      //Process the data to correct format
      // console.log(data);
      data.forEach(function (dataItem,index) {
        // console.log(index);
        seriesData[index].data = dataItem; // [], dataItem[2]
      });

      let options = {
        legend: {
          orient: "vertical",
          left: "left",
        },
        tooltip: {
          position: "top",
        },
        title: titleData,
        singleAxis: singleAxisData,
        series: seriesData,

        animation: false,
        textStyle: {
          fontFamily: "Roboto",
          fontSize: 6,
          fontStyle: "normal",
          fontWeight: "normal",
        },
      };
      try {
        let scatterChart = document.getElementById("scatterChart");
      echarts.dispose(scatterChart);
      this.scatter_chart = echarts.init(scatterChart);
      this.options && this.scatter_chart.setOption(options);  
      } catch (error) {
        
      }
      
    }
  },
  mounted() {

  },

};
</script>

<style lang="sass" scoped>
.my-card
  box-shadow: 0px 2px 10px rgba(69, 100, 209, 0.05)
  border-radius: 10px
.channel-title
  font-family: Roboto
  font-style: normal
  font-weight: bold
  color: #4A4A4A
.filter
  font-family: Roboto
  font-style: normal
  font-weight: normal
  font-size: 14px
  line-height: 22px
  color: #656262
.filter-options
  color: #4A4A4A
.map-title
  font-family: Roboto
  font-style: normal
  font-weight: normal
  font-size: 18px
  line-height: 28px
  color: #4A4A4A
.custom-colored-range
  .q-slider__track-container--h
    background-image: var(--track-bg)
    margin-top: -3px
    height: 6px
.custom-colored-range--inside
  .q-slider__track--h
    top: 2px
    bottom: 2px
.custom-colored-range--outside
  .q-slider__track--h
    border: 2px solid currentColor
    background: transparent
.total-activities
  height: 32px
  background: #F5F7FD
  color: #4A4A4A
  font-family: Roboto
  font-style: normal
  font-weight: normal
  font-size: 14px
  line-height: 22px
</style>
