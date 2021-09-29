
<template>
  <!-- Status Component -->
  <div class="row q-my-md shadow" style="border-radius: 4px;border: 1px solid rgba(0, 0, 0, 0.12);">
    <div class="col-md-3 col-lg-3 col-sm-12 col-xs-12 box_1">
      <q-card class="no-shadow q-pa-sm">
        <q-item class="q-pb-none q-pt-xs">
          <q-item-section>
            <q-item-label class="text-h4" style="font-weight: 500;letter-spacing: 3px;">9766</q-item-label>
            <q-item-label
              :class="!$q.dark.isActive? 'text-grey-7':'text-white'"
              style="letter-spacing: 1px;"
            >Total contacts</q-item-label>
          </q-item-section>

          <q-item-section side>
            <q-icon name="person" class="box_1" size="60px"></q-icon>
          </q-item-section>
        </q-item>
      </q-card>
    </div>
    <div
      class="col-md-3 col-lg-3 col-sm-12 col-xs-12 box_2"
      style="border-left: 1px solid #efefef;"
      v-bind:class="{'border-top': $q.platform.is.mobile}"
    >
      <q-card class="no-shadow q-pa-sm">
        <q-item class="q-pb-none q-pt-xs">
          <q-item-section>
            <q-item-label class="text-h4" style="font-weight: 500;letter-spacing: 3px;">1050</q-item-label>
            <q-item-label
              :class="!$q.dark.isActive? 'text-grey-7':'text-white'"
              style="letter-spacing: 1px;"
            >Total Expenses</q-item-label>
          </q-item-section>

          <q-item-section side>
            <q-icon name="company" class="box_2" size="60px"></q-icon>
          </q-item-section>
        </q-item>
      </q-card>
    </div>
    <div
      class="col-md-3 col-lg-3 col-sm-12 col-xs-12 box_3"
      style="border-left: 1px solid #efefef;"
      v-bind:class="{'border-top': $q.platform.is.mobile}"
    >
      <q-card class="no-shadow q-pa-sm">
        <q-item class="q-pb-none q-pt-xs">
          <q-item-section>
            <q-item-label class="text-h4" style="font-weight: 500;letter-spacing: 3px;">80 %</q-item-label>
            <q-item-label
              :class="!$q.dark.isActive? 'text-grey-7':'text-white'"
              style="letter-spacing: 1px;"
            >Total Profit</q-item-label>
          </q-item-section>

          <q-item-section side>
            <q-icon name="o_account_balance" class="box_3" size="60px"></q-icon>
          </q-item-section>
        </q-item>
      </q-card>
    </div>
    <div
      class="col-md-3 col-lg-3 col-sm-12 col-xs-12 box_4"
      style="border-left: 1px solid #efefef;"
      v-bind:class="{'border-top': $q.platform.is.mobile}"
    >
      <q-card class="no-shadow q-pa-sm">
        <q-item class="q-pb-none q-pt-xs">
          <q-item-section>
            <q-item-label class="text-h4" style="font-weight: 500;letter-spacing: 3px;">720</q-item-label>
            <q-item-label
              :class="!$q.dark.isActive? 'text-grey-7':'text-white'"
              style="letter-spacing: 1px;"
            >New Customers</q-item-label>
          </q-item-section>

          <q-item-section side>
            <q-icon name="o_people" class="box_4" size="60px"></q-icon>
          </q-item-section>
        </q-item>
      </q-card>
    </div>
  </div>
  <!-- End of Status Component -->
  <div class="row q-col-gutter-md">
    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
      <q-card flat bordered class="shadow q-pa-none q-ma-none">
        <q-card-section>
          <div
            :class="!$q.dark.isActive? 'text-grey-7':'text-white'"
            class="text-h6"
          >Contacts By Country</div>
        </q-card-section>

        <q-separator class="full-width" inset></q-separator>

        <q-card-section>
          <vue-echarts
            ref="key_countries"
            :option="pieOptions"
            :resizable="true"
            style="height:364px"
          />
        </q-card-section>
      </q-card>
    </div>
    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
      <!-- bar Component -->
      <q-card flat bordered class="shadow q-pa-none q-ma-none">
        <q-card-section class="row">
          <div
            :class="!$q.dark.isActive? 'text-grey-7':'text-white'"
            class="text-h6 col-12"
          >Contacts by Job title</div>
        </q-card-section>

        <q-separator class="full-width" inset></q-separator>

        <q-card-section>
          <vue-echarts
            ref="market_share"
            :option="getBarChartOptions"
            :resizable="true"
            style="height:364px"
          />
        </q-card-section>
      </q-card>
    </div>
  </div>

  <div class="row q-col-gutter-md q-pt-md">
    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
      <!-- pie Component -->
      <piechart />
    </div>
    <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
      <!-- stacked Component -->
      <stackedchart />
    </div>
  </div>

  <div class="row q-col-gutter-md q-pt-md">
    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <q-card flat bordered class="shadow">
        <q-table
          title="All Activities"
          :data="data"
          :hide-header="mode === 'grid'"
          :table-class="$q.dark.isActive?'text-white':'text-grey-8'"
          :table-header-class="$q.dark.isActive?'text-white':'text-grey-9'"
          :columns="columns"
          row-key="name"
          :grid="mode=='grid'"
          :filter="filter"
          v-model="pagination"
        >
          <template v-slot:top-left="props">
            <div :class="$q.dark.isActive?'text-white':'text-grey-7'" class="text-h6">All Activities</div>
          </template>
          <template v-slot:body-cell-status="props">
            <q-td :props="props" class="text-center">
              <q-chip
                v-bind:class="{'chip_completed': props.row.status == 'Completed', 'chip_pending': props.row.status == 'Pending'}"
                text-color="white"
                dense
                class="text-weight-bolder text-center"
                square
                style="width: 85px"
              >
                <span
                  class="full-width inline-block flex flex-center text-center"
                >{{props.row.status}}</span>
              </q-chip>
            </q-td>
          </template>
          <template v-slot:top-right="props">
            <q-input outlined dense debounce="300" v-model="filter" placeholder="Search">
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>

            <q-btn
              flat
              round
              dense
              :icon="props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'"
              @click="props.toggleFullscreen"
              v-if="mode === 'list'"
              class="text-grey-7"
            >
              <q-tooltip
                :disable="$q.platform.is.mobile"
                v-close-popup
              >{{props.inFullscreen ? 'Exit Fullscreen' : 'Toggle Fullscreen'}}</q-tooltip>
            </q-btn>

            <q-btn
              flat
              round
              dense
              :icon="mode === 'grid' ? 'list' : 'grid_on'"
              @click="mode = mode === 'grid' ? 'list' : 'grid'; separator = mode === 'grid' ? 'none' : 'horizontal'"
              v-if="!props.inFullscreen"
              class="text-grey-7"
            >
              <q-tooltip
                :disable="$q.platform.is.mobile"
                v-close-popup
              >{{mode==='grid' ? 'List' : 'Grid'}}</q-tooltip>
            </q-btn>

            <q-btn
              style="background-color:#37CDE3;color:white"
              icon-right="archive"
              label="Export to csv"
              no-caps
              @click="exportTable"
            />
          </template>
        </q-table>
      </q-card>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import * as echarts from "echarts";
import { exportFile } from "quasar";
import { VueEcharts } from "vue3-echarts";
import { useQuasar } from "quasar";
import { useStore } from "vuex";

export default {
  name: "hubspot",
  setup() {
    const $q = useQuasar();
    const store = useStore();
    // store.dispatch("contacts/getContactByCountry");
    // store.dispatch("contacts/getContactByIndustry");
    return {
      store,
    };
  },
  mounted() {},
  components: {
    VueEcharts,
  },
  computed: {
    getBarChartOptions() {
      let dataAxis = this.$store.state.market.titleData;
      //let dataAxis = this.$store.state.contacts.titleData;
      let market_share_data = this.$store.state.market.titleCount;
      return {
        xAxis: {
          data: dataAxis,
          axisLabel: {
            interval: 0,
            rotate: 30,
            inside: false,
          },
          axisTick: {
            alignWithLabel: true,
          },
          axisLine: {
            lineStyle: {
              color: "grey",
            },
            show: false,
          },
          z: 10,
        },
        tooltip: {},
        legend: {
          show: true,
          textStyle: {
            color: this.$q.dark.isActive ? "white" : "#676767",
          },
        },
        yAxis: {
          axisLine: {
            lineStyle: {
              color: "grey",
            },
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            color: this.$q.dark.isActive ? "white" : "#676767",
          },
        },
        series: [
          {
            data: market_share_data,
            type: "bar",
          },
        ],
      };
    },
    pieOptions() {
      return {
        tooltip: {
          show: true,
        },
        legend: {
          orient: "horizontal",
          bottom: 0,
          width: "100%",
          textStyle: {
            color: this.$q.dark.isActive ? "white" : "#676767",
          },
        },
        // color: this.$store.state.contacts.ContactsByCountryColor.color,
        color: this.$store.state.market.countryColor,
        series: [
          {
            name: "Countries",
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: true,
                position: "inner",
                formatter: function (param, index) {
                  return param.value;
                },
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "20",
                  fontWeight: "bold",
                },
              },
            },
            labelLine: {
              normal: {
                show: false,
              },
            },
            selectedMode: "single",
            data: this.$store.state.market.countryData,
            // data: this.$store.state.contacts.ContactsByCountry.data,
          },
        ],
      };
    },
  },
  methods: {
    SaveImage(type) {
      const linkSource = this.$refs[type].getDataURL();
      const downloadLink = document.createElement("a");
      document.body.appendChild(downloadLink);
      downloadLink.href = linkSource;
      downloadLink.target = "_self";
      downloadLink.download = type + ".png";
      downloadLink.click();
    },
  },
};
</script>

<style>
.box_1 {
  color: #0dceec;
}

.box_2 {
  color: #fe434f;
}

.box_3 {
  color: #15ca20;
}

.box_4 {
  color: #ff9700;
}

.shadow {
  -webkit-box-shadow: 0 0 10px #bfbfbf !important;
  box-shadow: 0 0 10px #bfbfbf !important;
}

.progress-base {
  height: 8px;
  border-radius: 3px;
  background-color: #e9ecef;
}

.progress-bar-1 {
  height: 8px;
  border-radius: 3px;
  background: #17ead9;
  background: -webkit-linear-gradient(45deg, #17ead9, #6078ea) !important;
  background: linear-gradient(45deg, #17ead9, #6078ea) !important;
}

.progress-bar-2 {
  height: 8px;
  border-radius: 3px;
  background: #f54ea2;
  background: -webkit-linear-gradient(45deg, #f54ea2, #ff7676) !important;
  background: linear-gradient(45deg, #f54ea2, #ff7676) !important;
}

.progress-bar-3 {
  height: 8px;
  border-radius: 3px;
  background: #42e695;
  background: -webkit-linear-gradient(45deg, #42e695, #3bb2b8) !important;
  background: linear-gradient(45deg, #42e695, #3bb2b8) !important;
}

.progress-bar-4 {
  height: 8px;
  border-radius: 3px;
  background: #ffdf40;
  background: -webkit-linear-gradient(45deg, #ffdf40, #ff8359) !important;
  background: linear-gradient(45deg, #ffdf40, #ff8359) !important;
}

.border-top {
  border-top: 1px solid #efefef;
}

.chip_pending {
  background: #ffdf40;
  background: -webkit-linear-gradient(45deg, #ffdf40, #ff8359) !important;
  background: linear-gradient(45deg, #ffdf40, #ff8359) !important;
}

.chip_completed {
  background: #42e695;
  background: -webkit-linear-gradient(45deg, #42e695, #3bb2b8) !important;
  background: linear-gradient(45deg, #42e695, #3bb2b8) !important;
}
</style>