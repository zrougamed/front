<template>
    <div id="mountNode"  v-bind="drawGraph"></div>
</template>




<script>
import G6 from '@antv/g6';
import { useQuasar } from "quasar";
import { useStore } from "vuex";
const data = {
  nodes: [

  ],
  edges: [

  ]
};



export default {
    setup() {
  
        
        return {
            
        }    
    },
    data(){
        return {
            data,
        }
    },
    mounted() {
            // Begin Legend
            const legendData = {
              nodes: [{
                id: 'patient',
                label: 'Patient',
                order: 0,
                style: {
                  img: 'https://cdn-icons-png.flaticon.com/512/2750/2750657.png',
                }
              }, {
                id: 'outcome',
                label: 'Outcome',
                order: 2,
                style: {
                  fill: '#F08BB4',
                }
              }, {
                id: 'unknown',
                label: 'Unknown',
                order: 2,
                style: {
                  fill: '#65789B',
                }
              }]
            }
            const legend = new G6.Legend({
              data: legendData,
              align: 'center',
              layout: 'horizontal', // vertical
              position: 'bottom-left',
              vertiSep: 12,
              horiSep: 24,
              offsetY: -24,
              padding: [4, 16, 8, 16],
              containerStyle: {
                fill: '#ccc',
                lineWidth: 1
              },
              title: ' ',
              titleConfig: {
                offsetY: -8,
              },
            });
            // END LEGEND

            // Begin ToolTip 
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



            // End Tooltip

            // Begin of Menu 

            const menu = new G6.Menu({
              getContent(e) {
                const outDiv = document.createElement('div');
                outDiv.style.width = '90px';
                outDiv.innerHTML = `<ul>
                    <li>Expand</li>
                    <li>Check</li>
                    <li>About</li>
                  </ul>`
                return outDiv
              },
              handleMenuClick(target, item) {
                console.log(target, item)
              },
            });

            // End of Menu 
            const patientID = this.$store.getters["members/selectedMember"]
            console.log(patientID);


            const width = document.getElementById('mountNode').scrollWidth || 1188 ;
            const height = document.getElementById('mountNode').scrollHeight || 500;
            const graph = new G6.Graph({
            container: 'mountNode',
            width: width,
            height: height,
            fitCenter: true,
            layout: {
              type: 'force',
              
              preventOverlap: true,
              linkDistance: (d) => {
                if (d.source.id === patientID) {
                  return 200;
                }
                
                return 30;
              },
              nodeStrength: (d) => {
                if (d.isLeaf) {
                  return -50;
                }
                return -10;
              },
              edgeStrength: (d) => {
                if (d.source.id === 'node1' || d.source.id === 'node2' || d.source.id === 'node3') {
                  return 0.7;
                }
                return 0.1;
              },
            },
            defaultNode: {
              type: 'image',
              size: [40, 40],
              clipCfg: {
                show: true,
                // Clip type options: circle, ellipse, rect, path
                type: 'circle',
                // circle
                r: 50,
                // clip style
                style: {
                  lineWidth: 60,
                },
              },
            },
            plugins: [legend,tooltip,menu],
            modes: {
              default: ['zoom-canvas', 'drag-canvas', 'drag-node'],
            },
            });
            
            
            const data =  JSON.parse(JSON.stringify(this.$store.getters["members/getUserGraph"]));
            console.log(data);
            graph.read(data);
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
            // graph.on('node:dragend', function (e) {
            //   e.item.get('model').fx = null;
            //   e.item.get('model').fy = null;
            // });
            
    },
    methods:{
      refreshDragedNodePosition(e){
              const model = e.item.get('model');
              model.fx = e.x;
              model.fy = e.y;
            }

    }

}
</script>
