<template>
  <div class="row q-my-md shadow" style="border-radius: 4px;border: 1px solid rgba(0, 0, 0, 0.12);">
        <div class="col-md-3 col-lg-3 col-sm-12 col-xs-12 box_1">
          <q-card class="no-shadow q-pa-sm">
            <q-item class="q-pb-none q-pt-xs">
              <q-item-section>
                <q-item-label class="text-h4" style="font-weight: 500;letter-spacing: 3px;">{{ patients }}</q-item-label>
                <q-item-label :class="!$q.dark.isActive? 'text-grey-7':'text-white'" style="letter-spacing: 1px;">Total Patients</q-item-label>
              </q-item-section>

              <q-item-section side>
                <q-icon name="o_personal_injury" class="box_1" size="60px"></q-icon>
              </q-item-section>
            </q-item>
            <q-item class="q-py-xs" style="min-height: unset">
             
            </q-item>
          </q-card>
        </div>
        <div class="col-md-3 col-lg-3 col-sm-12 col-xs-12 box_2" style="border-left: 1px solid #efefef;"
             v-bind:class="{'border-top': $q.platform.is.mobile}">
          <q-card class="no-shadow q-pa-sm">
            <q-item class="q-pb-none q-pt-xs">
              <q-item-section>
                <q-item-label class="text-h4" style="font-weight: 500;letter-spacing: 3px;">{{ providers }}</q-item-label>
                <q-item-label :class="!$q.dark.isActive? 'text-grey-7':'text-white'" style="letter-spacing: 1px;">Total Providers</q-item-label>
              </q-item-section>

              <q-item-section side>
                <q-icon name="o_medical_services" class="box_2" size="60px"></q-icon>
              </q-item-section>
            </q-item>
            <q-item class="q-py-xs" style="min-height: unset">
             
            </q-item>
          </q-card>
        </div>
        <div class="col-md-3 col-lg-3 col-sm-12 col-xs-12 box_3" style="border-left: 1px solid #efefef;"
             v-bind:class="{'border-top': $q.platform.is.mobile}">
          <q-card class="no-shadow q-pa-sm">
            <q-item class="q-pb-none q-pt-xs">
              <q-item-section>
                <q-item-label class="text-h4" style="font-weight: 500;letter-spacing: 3px;">80</q-item-label>
                <q-item-label :class="!$q.dark.isActive? 'text-grey-7':'text-white'" style="letter-spacing: 1px;">Total Providers</q-item-label>
              </q-item-section>

              <q-item-section side>
                <q-icon name="o_account_balance" class="box_3" size="60px"></q-icon>
              </q-item-section>
            </q-item>
            <q-item class="q-py-xs" style="min-height: unset">
              
            </q-item>
          </q-card>
        </div>
        <div class="col-md-3 col-lg-3 col-sm-12 col-xs-12 box_4" style="border-left: 1px solid #efefef;"
             v-bind:class="{'border-top': $q.platform.is.mobile}">
          <q-card class="no-shadow q-pa-sm">
            <q-item class="q-pb-none q-pt-xs">
              <q-item-section>
                <q-item-label class="text-h4" style="font-weight: 500;letter-spacing: 3px;">720</q-item-label>
                <q-item-label :class="!$q.dark.isActive? 'text-grey-7':'text-white'" style="letter-spacing: 1px;">Total organizations</q-item-label>
              </q-item-section>

              <q-item-section side>
                <q-icon name="o_people" class="box_4" size="60px"></q-icon>
              </q-item-section>
            </q-item>
            <q-item class="q-py-xs" style="min-height: unset">
              
            </q-item>
          </q-card>
        </div>
      </div>
</template>

<script>
import { defineComponent } from 'vue';
import { useQuasar } from "quasar";
import { useStore } from "vuex";

export default  {
  name: 'statsLine',
   setup() {
    const $q = useQuasar();
    const store = useStore();
    store.dispatch("dashboard/getDashboard");
    return {
    }
   },
   data() {
    const store = useStore();
    return {
      loading: false,
      patients: "N/A",
      providers: "N/A",
    }
   },
   computed: {
    patients() {
 
      return this.$store.state.dashboard.patients;
      
    },
     providers() {
    
      return this.$store.state.dashboard.providers;
      
    },
    }, 
}
</script>

<style scoped>
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
