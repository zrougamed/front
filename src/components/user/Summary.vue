<template>
  <!--Loading state-->
    <div class="summary row content-between q-gutter-x-md wrap" v-if="loading">
        <div class="col">
          <q-card class="empty-state">
            <div class="column items-center">
              <q-skeleton class="col center-top" style="margin-bottom: 16px;" width="70%" />
              <q-skeleton class="col center-bottom" width="50%"/>
            </div>
          </q-card>
        </div>
        <div class="col">
          <q-card class="empty-state">
            <div class="column items-center">
              <q-skeleton class="col center-top" style="margin-bottom: 16px;" width="70%" />
              <q-skeleton class="col center-bottom" width="50%" />
            </div>
          </q-card>
        </div>
        <div class="col">
          <q-card class="empty-state">
            <div class="column items-center">
              <q-skeleton class="col center-top" style="margin-bottom: 16px;" width="70%" />
              <q-skeleton class="col center-bottom" width="50%" />
            </div>
          </q-card>
        </div>
        <div class="col">
          <q-card class="empty-state">
            <div class="column items-center">
              <q-skeleton class="col center-top" style="margin-bottom: 16px;"  width="70%" />
              <q-skeleton class="col center-bottom" width="50%" />
            </div>
          </q-card>
        </div>
  </div>

  <!-- Summary Cards-->
  <div v-else class="summary row content-between q-gutter-x-md wrap">
        <div class="col">
          <q-card class="my-card">
            <q-card-section class="text-center">
              <div class="stats" v-if="summaryData.firstSeen !== 'N/A years'">{{summaryData.firstSeen}}</div>
              <div class="stats" v-else>-----</div>
              <div class="stats-subtitle">Since first seen</div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col">
          <q-card class="my-card">
            <q-card-section class="text-center">
              <div class="stats" v-if="summaryData.lastSeen !== 'N/A day'">{{summaryData.lastSeen}}</div>
              <div class="stats" v-else>-----</div>
              <div class="stats-subtitle">Last seen</div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col">
          <q-card class="my-card">
            <q-card-section class="text-center">
              <div class="stats" v-if="ProfileData.information[9].content !== '0'">{{ ProfileData.information[9].content }}</div>
              <div class="stats" v-else>-----</div>
              <div class="stats-subtitle" v-if="ProfileData.information[9].content !== 0 ">{{ ProfileData.information[9].title }}</div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col">
          <q-card class="my-card">
            <q-card-section class="text-center">
              <div class="stats" v-if="ProfileData.information[0].content !== 0 ">{{ ProfileData.information[0].content }}</div>
              <div class="stats" v-else>-----</div>
              <div class="stats-subtitle" v-if="ProfileData.information[0].content !== 0 ">{{ ProfileData.information[0].title }}</div> 
            </q-card-section>
          </q-card>
        </div>
  </div> 
</template>

<script>
import { useQuasar } from "quasar";
import { useStore } from "vuex";

export default {
  setup() {
    
    const $q = useQuasar();
    const store = useStore();
    store.dispatch("members/getSummary");
    return {
      personId:"",
      store,
    };
  },
  data(){
    return{
      loading: false,
    }
  },
  watch : {
    combineds: function () {
      this.$store.dispatch("members/getSummary");
    },
  },
  computed: {
    combineds() {
      return this.$store.state.members.MemberSelected + this.personId;
    },
    gettersSummary() {
      return this.$store.getters.allSummary;
    },
    ProfileData() {
      return this.$store.state.members.userProfile[0];
    },
    summaryData() {
      return this.$store.state.members.summary[0];
    },
  },
  mounted() {
    this.loading = true
    setTimeout(() => {
      this.loading = false
    }, 1000)
  },
};
</script>

<style lang="sass" scoped>
.my-card
  width: auto
  height: 142px
  display: flex
  justify-content: center
  align-items: center
  padding: auto
  box-shadow: none
  border-radius: 10px
.empty-state
  width: auto
  height: 142px
  padding: auto
  box-shadow: none
  border-radius: 10px
.center-top
  position: absolute
  top: 40%
  left: 50%
  transform: translate(-50%, -50%)
.center-bottom
  position: absolute
  top: 60%
  left: 50%
  transform: translate(-50%, -50%)
.stats
  font-family: Roboto
  font-style: normal
  font-weight: bold
  font-size: 24px
  line-height: 26px
  color: #4A4A4A
.stats-subtitle
  font-family: Roboto
  font-style: normal
  font-weight: normal
  font-size: 16px
  line-height: 24px
  color: #6A6A6B
</style>