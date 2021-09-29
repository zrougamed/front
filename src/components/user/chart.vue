<template>

   
    <div  
        style="margin-top:50px;border-radius:5px;padding-top:30px;padding=left:20px;background-color:#EAEEFB;"
        ref="svgElementContainer" >
    </div>
    
    

</template>
<script>
import  RangeSlider from "./rangeslider";
import { useQuasar } from "quasar";
import { useStore } from "vuex";
import {ref } from 'vue';


const $q = useQuasar();
const store = useStore();
export default {

  name: "Chart",
  props: ["data"],
  setup(){
    const $q = useQuasar();
    const store = useStore();
   
    return{
      store,
    }
  },
  data() {
    
    return {
      chartReference: null,
      selectedRange:[],
      selectedData:[]
    };
  },
  watch: {
    data(value) {
        if (value != null){
            
            
            this.renderChart(value)
            
            
        }
    }
  },
  created() {
    
  },
  methods: {
    renderChart(data) {   

      if (!this.chartReference) {
        this.chartReference = new RangeSlider();
        
      }      
      this.chartReference
        .container(this.$refs.svgElementContainer) // node or css selector
        .svgWidth(this.$refs.svgElementContainer.clientWidth-20)
        .svgHeight(100)
        .data(data)
        .accessor(d=>new Date(d))
        
        .onBrush(d=>{
            // SET One Commit 
            
             this.selectedRange = d.range;
             this.selectedData = d.data;
             this.$store.commit('members/SET_MAX_DATE', d.range[1].toLocaleDateString('fr-CA', { year: 'numeric', month: '2-digit', day: '2-digit' }));
            this.$store.commit('members/SET_MIN_DATE', d.range[0].toLocaleDateString('fr-CA', { year: 'numeric', month: '2-digit', day: '2-digit' }));
             

         }
         
         )
        .render();
    }
  }
};


</script>