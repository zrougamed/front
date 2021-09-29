<template>
    <div id="mountNode"  ></div>
</template>




<script>
import G6 from '@antv/g6';
import { useQuasar } from "quasar";
import { useStore } from "vuex";




export default {
    name:'graph',
  
  setup(){
    const $q = useQuasar();
    const store = useStore();
    return{
      store,
    }
  },
  data() {
    return {
          graph:null,

    };
  },
    computed:{
      getGraph(){
        return this.$store.state.members.count; 
      },
    },
    mounted() {
       
          this.renderChart(this.$store.state.members.communityGraph);
        
    },
    watch:{
      getGraph: function () {
        console.log("Chart refresh")
        this.graph.read(JSON.parse(JSON.stringify(this.$store.state.members.communityGraph)));
        

      },
    },
    methods:{
      refreshDragedNodePosition(e){
              const model = e.item.get('model');
              model.fx = e.x;
              model.fy = e.y;
            },
      renderChart(value){

            const tooltip = new G6.Tooltip({
              offsetX: 10,
              offsetY: 20,
              getContent(e) {
                const outDiv = document.createElement('div');
                outDiv.style.width = '180px';
                outDiv.innerHTML = `
                  
                  <ul>
                    <li>Label: ${e.item.getModel().label || e.item.getModel().id}</li>
                  </ul>`
                return outDiv
              },
              itemTypes: ['node']
            });
            const width = document.getElementById('mountNode').scrollWidth || 1188 ;
            const height = document.getElementById('mountNode').scrollHeight || 500;
            const graph = new G6.Graph({
            container: 'mountNode',
            width: width,
            height: height,
            fitCenter: true,
            layout: {
              type: 'gForce',
              gpuEnabled: true, 
              // maxIteration: 1000,
              preventOverlap: true,
             
              // tick: () => {
              //       graph.refreshPositions()
              //   }
            },
            fitView:true,
            defaultNode: {
              size: 15,
            },
            plugins: [tooltip],
            modes: {
              default: ['zoom-canvas', 'drag-canvas', 'drag-node'],
            },
            });
            
            
            let data =  JSON.parse(JSON.stringify(value)); // this.$store.state.members.communityGraph
            console.log(data);
            if (data != null){
            graph.read(data);
          } 
            this.graph = graph;
            graph.on('node:dragstart', function (e) {
                  graph.layout();
                  const model = e.item.get('model');
              model.fx = e.x;
              model.fy = e.y;
            });
            graph.on('node:drag', function (e) {
              const model = e.item.get('model');
              model.fx = e.x;
              model.fy = e.y;
            });
      },

    }

}
</script>
