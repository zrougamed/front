<template>
    <div class="timeline-title">Timeline</div>

    <!-- Loading state-->
    <div v-if="loading" class="q-py-xl">
      <q-skeleton style="margin-bottom: 15px;" />
      <q-skeleton />
    </div>

    <!-- Timeline Content-->
    <q-card-section v-else>

    <!-- Scrolling timeline-->
    <div
      class="scroll q-px-md"
      style="max-height: 800px; overflow-y: scroll, overflow-x: hidden;"
      id="virtual-scroll-target"
    >
      <!-- Timeline data-->
        <q-timeline 
          :items="data"
          separator
          color="grey"
          style="width: 100%;"
        >
          <div v-if="data.length > 0">
            <q-timeline-entry
                v-for="(activity,index) in data"    
                :key="index"
                :avatar="activity.icon"
              >
                <template v-slot:title>
                  <div class="row justify-between">
                    <div class="activity-title">{{activity.title}}</div>
                    <div class="activity-content items-center">
                      {{activity.time_passed}}
                      <q-btn flat dense icon="more_horiz">
                        <q-popup-proxy>
                          <q-banner>
                            Feature is coming soon
                          </q-banner>
                        </q-popup-proxy>
                      </q-btn>
                    </div>
                  </div>
                </template>

                <q-field rounded outlined stack-label>
                  <template v-slot:control>
                    <div
                      class="self-center no-outline activity-content"
                      tabindex="0"
                    >{{activity.content}}</div>
                  </template>
                </q-field>
              </q-timeline-entry>
          </div>

          <!-- Empty state-->
          <div v-else class="row justify-center items-center">
            <img src="~assets/timeline-empty-state.svg"/>
          </div>
          </q-timeline>
      </div>
    </q-card-section>
</template>

<script>
// import { ionMdLogoDiscord } from "@quasar/extras/ionicons-v5";
import { useQuasar } from "quasar";
import { useStore } from "vuex";
export default {
  setup() {
    // const $q = useQuasar();
    // const store = useStore();
    // store.dispatch("members/getActivitiesTimeline");
    
     return {
        personId: "",
     };
  },
  data(){
    return{
      loading: false
    }
  },
  props: ["data"],
  computed: {
    // combined() {
    //   return this.$store.state.members.MemberSelected + this.personId;
    // },
  },
  watch:{
      // combined: function () {
      //   this.$store.dispatch("members/getActivitiesTimeline");
      // },
      data(value) {
          // console.log(value)
      }
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
.timeline
  height: 735px
  padding: 0 10 10 0
.timeline-title
  font-family: Roboto
  font-style: normal
  font-weight: normal
  font-size: 18px
  line-height: 28px
  color: #4A4A4A
.filter 
  font-family: Roboto
  font-style: normal
  font-weight: normal
  font-size: 14px
  line-height: 22px
  color: #656262
.activity-title
  font-family: Roboto
  font-style: normal
  font-weight: normal
  font-size: 14px
  line-height: 26px
.activity-content
  font-family: Roboto
  font-style: normal
  font-weight: normal
  font-size: 14px
  line-height: 26px
  color: #535353

</style>

