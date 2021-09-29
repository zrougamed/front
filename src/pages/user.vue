<template>
  <q-page class="user">
    <div>
      <Header/>

    </div>

            <div class="row q-col-gutter-md q-pt-sm">
              <div class="col-lg-3 col-md-4 col-sm-12 col-xs-12">
                <UserProfile />
              </div>
              <div class="q-gutter-y-md col-lg-9 col-md-8 col-sm-12 col-xs-12">
                <div><Summary/></div>
                <div><ActivityMap/></div>
          </div>
        </div>

         
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import Header from "../components/user/Header.vue"
import UserProfile from "../components/user/UserProfile.vue";
import Summary from "../components/user/Summary.vue"
import ActivityMap from "../components/user/ActivityMap.vue"
import { ref } from 'vue'
import { useQuasar } from "quasar";
import { useStore } from "vuex";
import { useRoute } from 'vue-router';
// import ActivitiesTimeline from "../components/user/ActivitiesTimeline.vue"

export default defineComponent({
  name: "PageIndex",
  components: {
    Header,
    UserProfile,
    Summary,
    ActivityMap,
  },
  setup () {
    const $q = useQuasar();
    const store = useStore();
    const route = useRoute();
    console.log("Begin commit from user.vue")
    store.commit("members/SET_SELECTED_MEMBER", route.params.id)
    console.log(route.params.id)
    store.commit('members/SET_MAX_DATE', "last");
    store.commit('members/SET_MIN_DATE', "first");
    store.dispatch("members/getUserGraph");
    store.dispatch("members/getActivitiesTimeline");
    store.dispatch("members/getActivitiesMapRange");
    console.log("End commit from user.vue")
    //  tab: ref()
  },
  mounted() {
 
  },
  watch: {
    "this.$route.params.id" : function() {
      this.$store.commit("members/SET_SELECTED_MEMBER", this.$route.params.id)
      console.log("User watch")
    },
  },
});
</script>

<style lang="sass" scoped>
.user
  padding : 40px
</style>
