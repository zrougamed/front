
<template>
<q-card flat bordered class="shadow q-pa-none q-ma-none">
    <q-card-section class="row">
        <div :class="!$q.dark.isActive? 'text-grey-7':'text-white'" class="text-h6 col-12">Patient's Locations
     
        </div>
    </q-card-section>

    <q-separator class="full-width" inset></q-separator>

    <q-card-section>
      
    
    <v-chart v-if='options' :option="options"  id="sales_goals" autoresize style="height:320px"/>
    </q-card-section>
</q-card>
</template>




<script>



/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-plus-operands */


import * as echarts from 'echarts';
import {exportFile} from 'quasar';
import { VueEcharts } from 'vue3-echarts';
import { ref } from 'vue'
import { use,registerMap,registerTheme,connect,disconnect} from "echarts/core";
import {MapChart} from "echarts/charts";
import {
  GridComponent,
  PolarComponent,
  GeoComponent,
  TooltipComponent,
  
  TitleComponent,
  VisualMapComponent,
  DatasetComponent,
  ToolboxComponent,
  DataZoomComponent
} from "echarts/components";
import { CanvasRenderer, SVGRenderer } from "echarts/renderers";

import worldMap from "./world.json";
// import chinaMap from "./china.json";

use([
  // BarChart,
  // LineChart,
  // PieChart,
  MapChart,
  // RadarChart,
  // ScatterChart,
  // EffectScatterChart,
  // LinesChart,
  GridComponent,
  PolarComponent,
  GeoComponent,
  TooltipComponent,

  TitleComponent,
  VisualMapComponent,
  DatasetComponent,
  CanvasRenderer,
  SVGRenderer,
  ToolboxComponent,
  DataZoomComponent
]);
registerMap("world", worldMap);
// registerMap("china", chinaMap);

export default {
  name: "mapchart",
  props: ["options"],
  components: {
      'v-chart':  VueEcharts
  },
  computed:{

  },
 watch: {
    options(value) {
        if (value != null){
           
                  
            
            
        }
    }
  },
}
</script>