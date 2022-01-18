<template>
  <q-page class="user">
        <div class="row q-col-gutter-md q-pt-sm">
              <div class="col-lg-3 col-md-4 col-sm-12 col-xs-12">   
                <q-card>
                    <q-form @submit="onSubmit" class="q-gutter-md">
                            <q-card-section class="profile-section">
                                    Community Explore
                            </q-card-section>
                            <q-separator inset></q-separator>
                            <!-- Information Section-->
                            <q-card-section class="contact-section">
                                
                                <div class="contact-title">Vertices</div>
                                <div class="q-gutter-sm">
                                    <q-select
                                        filled
                                        name="v_type"
                                        v-model="model"
                                        use-input
                                        use-chips
                                        multiple
                                        input-debounce="0"
                                        :options="VerticesOptions"
                                        @filter="filterFn"
                                        />  
                                </div>
                            </q-card-section>
                            <q-card-section class="contact-section">
                            
                                <div class="contact-title">Edges</div>
                                    <div class="q-gutter-sm">
                                        <q-select
                                            filled
                                            name="e_type"
                                            v-model="modelEdges"
                                            use-input
                                            use-chips
                                            multiple
                                            input-debounce="0"
                                            
                                            :options="EdgesOptions"
                                            @filter="filterFnEdges"
                                    
                                            />
                                </div>
                            
                            </q-card-section>
                            <q-card-section class="profile-section">
                                <div class="column items-center">
                                    <q-btn label="Submit" type="submit" color="primary"/>
                                </div>
                            </q-card-section>
                    </q-form>
                </q-card>
            </div>
            <div class="q-gutter-y-md col-lg-9 col-md-8 col-sm-12 col-xs-12">
                    <!-- COL GRAPH and table --> 
                            <q-card class="my-card">
                                <graph :data="GraphData"></graph> 
                                <!-- TABLE -->
                                <q-table
                                    title="Patients per Community"
                                    :rows="patientData"
                                    table-class="text-grey-8"
                                    table-header-class="text-grey-9"
                                    :columns="columns"
                                    
                                    :filter="filter"
                                    v-model="pagination"
                                    :loading="loading"
                                    >
                                    <template v-slot:top-left="props">
                                        <div :class="$q.dark.isActive?'text-white':'text-grey-7'" class="text-h6">All Activities</div>
                                    </template>
                                    <template v-slot:loading>
                                      <q-inner-loading showing color="primary" />
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
                                        ><span class="full-width inline-block flex flex-center text-center">{{props.row.status}}</span>
                                        </q-chip>
                                        </q-td>
                                    </template>
                                    
                                </q-table>
                                  <!-- END TABLE -->                       
                            </q-card>
                    <!-- END GRAPH --> 
            </div>
        </div>

         
  </q-page>


</template>

<script>
import { ref } from 'vue'
import { useQuasar } from "quasar";
import { useStore } from "vuex";
import { useRoute } from 'vue-router';
import graph from "../components/algos/graph.vue";

const columns = [
              {
                name: "@label",
                label: "Community",
                align: "left",
                sortable: true,
                field: "@label"
              },
              {
                name: "communitySize",
                label: "Community Size",
                align: "left",
                sortable: true,
                field: "communitySize"
              },
              {
                name: "lastName",
                label: "Last Name",
                align: "left",
                sortable: true,
                field: "lastName"
              },
              {
                name: "firstName",
                label: "First Name",
                align: "left",
                sortable: true,
                field: "firstName"
              },
              {
                name: "ssn",
                label: "SSN",
                align: "left",
                sortable: true,
                field: "ssn"
              },
              {
                name: "passport",
                label: "passport",
                align: "left",
                sortable: true,
                field: "passport"
              },];
const Vertices = ['Address','Patient','Gender','Race','Ethnicity','City','State','ZipCode','SnomedCode','Allergies','Device','Medication','Procedures','Careplans','Conditions','Immunizations','Observations','Organizations','Providers','ImagingStudies','Payer','Encounter','Notes','Symptoms','Attribute']
const Edges = ['PATIENT_HAS_ATTRIBUTE','PATIENT_HAS_SYMPTOM','PATIENT_NOTE','ADDRESS_CITY','ADDRESS_COUNTY','ADDRESS_ZIPCODE','STATE_HAS_COUNTY','COUNTY_HAS_CITY','CITY_HAS_ZIPCODE','PATIENT_GENDER','PATIENT_ADDRESS','PATIENT_RACE','PATIENT_ETHNICITY','PATIENT_HAS_ALLERGY','ENCOUNTER_FOR_ALLERGY','ALLERGY_CODE','PATIENT_HAS_DEVICE','ENCOUNTER_FOR_DEVICE','DEVICE_CODE','PATIENT_HAS_MEDICATION','MEDICATION_PAYER','ENCOUNTER_FOR_MEDICATION','MEDICATION_REASON_CODE','MEDICATION_CODE','PROCEDURE_CODE','PROCEDURE_REASON_CODE','PATIENT_HAS_PROCEDURE','ENCOUNTER_FOR_PROCEDURE','PATIENT_HAS_CAREPLAN','ENCOUNTER_FOR_CAREPLAN','CAREPLAN_CODE','CAREPLAN_REASON_CODE','PATIENT_HAS_CONDITION','ENCOUNTER_FOR_CONDITION','CONDITION_CODE','PATIENT_HAS_IMMUNIZATION','ENCOUNTER_FOR_IMMUNIZATION','IMMUNIZATION_CODE','OBSERVATION_FOR_PATIENT','ENCOUNTER_FOR_OBSERVATION','OBSERVATION_CODE','ORGANIZATION_ADDRESS','PROVIDER_HAS_ORGANIZATION','PROVIDER_GENDER','PROVIDER_ADDRESS','PATIENT_HAS_IMAGING','ENCOUNTER_FOR_IMAGING','IMAGING_CODE','PAYER_TRANSITION','PAYER_ADDRESS','ENCOUNTER_FOR_PATIENT','ENCOUNTER_UNDER_ORGANIZATION','ENCOUNTER_HAS_PROVIDER','ENCOUNTER_HAS_PAYER','ENCOUNTER_CODE','ENCOUNTER_REASON_CODE'];

const VerticesOptions = ref(Vertices);
const EdgesOptions = ref(Edges);
const GraphData = ref();
export default {
    components: {
          graph,
    },
    setup() {
       const $q = useQuasar();
        const store = useStore();
        const route = useRoute();
        
        return {
            store,
        }
    },
    data(){
      return {
        columns,
       GraphData,
        model: ref(null),
        
        patientData: [],
        columns,
        modelEdges: ref(null),
        VerticesOptions,
        EdgesOptions,
      }
    },
    computed:{
      patientData () {
       return this.$store.state.members.communityTable
      },
    },
    watch:{
      "this.$store.state.members.communityTable": {
        handler(val){
       // do stuff
       
       patientData = this.$store.state.members.communityTable
       
        this.GraphData = this.$store.state.members.communityGraph
       return patientData
        },
        deep: true
        
      },
          "this.$store.state.members.communityGraph": {
        handler(val){
       // do stuff
       
       
       this.GraphData = this.$store.state.members.communityGraph
        console.log("Loaded !")
       return GraphData
        },
        deep: true
        
      },
    },
    methods:{
            filterFnEdges (val, update) {
                update(() => {
                if (val === '') {
                    this.EdgesOptions.value = Edges
                }
                else {
                    const needle = val.toLowerCase()
                    this.EdgesOptions.value = Edges.filter(
                    v => v.toLowerCase().indexOf(needle) > -1
                    )
                }
                })
            },
             onSubmit (evt) {
               
              console.log(evt);
              //evt.preventDefault();
              
                let vertices = []
                let edges = []
                for (let element of evt.srcElement) {
                  if (element.name == "v_type"){
                    for (let option of element) {
                      vertices.push(option.value);
                    }
                  }
                  if (element.name == "e_type"){
                    for (let option of element) {
                      edges.push(option.value);
                    }
                  }
                }
                edges = edges.join('|')
                vertices = vertices.join('|')
                console.log(edges);
                console.log(vertices);

                this.store.dispatch("members/getCommunityGraph",{"edges":edges,"vertices":vertices});

            },
            filterFn (val, update) {
                update(() => {
                if (val === '') {
                    this.VerticesOptions.value = Vertices
                }
                else {
                    const needle = val.toLowerCase()
                    this.VerticesOptions.value = Vertices.filter(
                    v => v.toLowerCase().indexOf(needle) > -1
                    )
                }
                })
            }
    }
}
</script>


<style lang="sass" scoped>

.user
  padding : 40px


.my-card
  font-family: Roboto
  font-style: normal
  font-weight: normal
  width: 100%
  box-shadow: 0px 2px 10px rgba(119, 119, 119, 0.05)
  border-radius: 10px
.profile-section
  margin-top: 10px
  margin-bottom: 10px
.user-name
  align-items: center
  font-weight: bold
  font-size: 24px
  line-height: 26px
  color: #4A4A4A
.contact-section
  margin-top: 10px
  margin-bottom: 10px
.contact-title
  font-size: 18px
  line-height: 28px
.contact-info
  font-size: 14px
  line-height: 22px
  margin: 12px 0
  margin-left: 24px
.contact-email
  margin: 6px 0
.contact-icon
  font-size: 22px
  padding-right: 10px
.about-section
  margin-top: 10px
  margin-bottom: 10px
.about-title
  font-size: 18px
  line-height: 28px
  margin-bottom: 12px
.about-info
  font-size: 16px
  line-height: 24px
  color: #6A6A6B
.interest-section
  margin-top: 10px
  margin-bottom: 10px
.topic-interested
  font-size: 18px
  line-height: 28px
  margin-bottom: 12px
.interested
  font-family: Roboto
  font-style: normal
  font-weight: normal
  font-size: 16px
  line-height: 12px
  color: #6A6A6B
.empty-interest
  font-family: Roboto
  font-style: normal
  font-weight: normal
  font-size: 16px
  line-height: 24px
  color: #6A6A6B
.user-section
  margin: 6px 0
ul
  line-height: 12px
li
  font-size: 24px
li span
  font-size: 16px
q-card
  border-radius: 10px
</style>
