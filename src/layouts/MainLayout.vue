
<template>
  <q-layout view="lHh LpR lFf">
    <q-header reveal class="bg-white">
      <q-toolbar class="q-pa-md">
        <q-btn @click="left = !left" flat round dense color="primary" icon="menu" class="q-mr-sm" />
        <!-- search bar -->
        <q-select
          :options="options"
          use-input
          hide-selected
          fill-input
          input-debounce="0"
          borderless
          placeholder="Search members..."
          @filter="filterFn"
          hide-dropdown-icon
          allowFiltering="true"
          style="width: 581px;  margin-left: 28px; color:black"
        >
          <template v-slot:option="scope">
            <q-item
              @click="searchBrowe(scope.opt.id)"
              v-bind="scope.itemProps"
              v-on="scope.itemEvents"
            >
              <q-item>
                <q-item-section avatar>
                  <q-avatar>
                    <q-img :src="scope.opt.profile_img" />
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <q-item-label v-html="scope.opt.label" />
                </q-item-section>
              </q-item>
            </q-item>
          </template>

          <template v-slot:prepend>
            <q-icon name="search"></q-icon>
          </template>

          <template v-slot:no-option>
            <q-item>
              <q-item-section class="text-grey">No results</q-item-section>
            </q-item>
          </template>
        </q-select>

        <q-space />

        <!-- header logout icon -->
        <div class="q-gutter-sm row items-center no-wrap">
          <!-- Text -->
          <q-toolbar-title style="color:black !important">{{ names }}</q-toolbar-title>
          <!-- Button -->
          <q-btn round flat>
            <div class="row items-center no-wrap">
              <q-avatar size="26px">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGZGbRNgG_g82yO7ammcXwvtEUDz-0fFxM5_aUUkJoCWT9Q5VBR3cTO9QsPJ4VW1nT0ZM&usqp=CAU"
                />
              </q-avatar>
              <q-icon color="black" name="arrow_drop_down" />
            </div>
            <q-menu>
              <q-list style="min-width: 100px">
                <q-item clickable v-close-popup>
                  <q-item-section>Settings</q-item-section>
                </q-item>
                <q-item clickable v-close-popup @click="logoutNotify" to="/">
                  <q-item-section>Log out</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <!-- drawer -->
    <q-drawer class="left-navigation" show-if-above v-model="left" side="left" :width="200">
      <div class="full-height" :class="$q.dark.isActive ? 'drawer_dark' : 'drawer_normal'">
        <div style="height: calc(100% - 117px);">
          <q-toolbar class="q-pa-md items-end">
            <img src="~assets/patient360.svg" />
          </q-toolbar>

          <q-scroll-area style="height:100%;">
            <q-list padding class="text-black">
              <q-item
                active-class="tab-active"
                to="/dashboard"
                class="q-ma-sm navigation-item"
                clickable
                v-ripple
              >
                <q-item-section avatar>
                  <q-icon name="dashboard" />
                </q-item-section>

                <q-item-section>Dashboard</q-item-section>
              </q-item>

              <q-item
                active-class="tab-active"
                to="/patients"
                class="q-ma-sm navigation-item"
                clickable
                v-ripple
              >
                <q-item-section avatar>
                  <q-icon name="people" />
                </q-item-section>

                <q-item-section>Patients</q-item-section>
              </q-item>
              <q-item
                active-class="tab-active"
                to="/providers"
                class="q-ma-sm navigation-item"
                clickable
                v-ripple
              >
                <q-item-section avatar>
                  <q-icon name="local_hospital" />
                </q-item-section>

                <q-item-section>Providers</q-item-section>
              </q-item>
               <q-item
                active-class="tab-active"
                to="/community"
                class="q-ma-sm navigation-item"
                clickable
                v-ripple
              >
                <q-item-section avatar>
                  <q-icon name="share" />
                </q-item-section>

                <q-item-section>Community</q-item-section>
              </q-item>
            </q-list>
          </q-scroll-area>
        </div>
      </div>
    </q-drawer>

    <!-- route -->
    <q-page-container>
      <q-page class="row no-wrap">
        <div class="col">
          <div class="full-height">
            <q-scroll-area class="col q-pr-sm full-height" visible>
              <router-view />
            </q-scroll-area>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { ref } from "vue";
import { QSelect, QField, useQuasar } from "quasar";
import { useStore } from "vuex";
import { LocalStorage } from "quasar";

export default {
  components: {
    QSelect,
    QField,
  },
  setup() {
    const $q = useQuasar();
    const store = useStore();
    store.dispatch("members/getAllPersons");
    const options = ref(status);
    return {
      model: ref(null),
      options,
    };
  },
  data() {
    const $q = useQuasar();
    const store = useStore();
    const names = LocalStorage.getItem("name");
    return {
      names: names,
      left: false,
    };
  },
  computed: {
    status: {
      get() {
        //console.log(this.$store.state.members.searchOptions)
        return this.$store.state.members.searchOptions;
      },
    },
  },
  methods: {
    getSearchData(value) {
      // console.log(value);
      let users = [];
      this.$store.state.members.searchOptions.forEach(function (element) {
        let user = {};
        Object.keys(element).forEach(function (key) {
          let value = element[key];
          user[key] = value;
        });
        users.push(user);
      });
      // console.log(users);
      return users;
    },
    logoutNotify() {
      LocalStorage.remove("login");
      this.$q.notify({
        message: "Logged out",
      });
    },
    searchBrowe(personID) {
      this.$store.commit("members/SET_SELECTED_MEMBER", personID);
      this.$router.push({
        name: "User",
        params: { id: personID },
      });
    },
    filterFn(val, update, abort) {
      update(() => {
        const needle = val.toLowerCase();
        this.options = this.$store.state.members.searchOptions.filter(
          (v) => v.label.toLowerCase().indexOf(needle) > -1
        );
      });
    },
  },
  watch: {},
};
</script>

<style>
.q-drawer {
  background-size: cover !important;
}

.drawer_normal {
  background-color: #ffffff;
}

.drawer_dark {
  background-color: #ffffff;
}

.navigation-item {
  border-radius: 5px;
  color: #4a4a4a;
}
.left-navigation {
  color: #4a4a4a;
  font-family: "Roboto";
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 28px;
}

.tab-active {
  color: #3557d2 !important;
  position: relative;

  border: 0;
  /*text: #3557D2  !important;*/

  /* == */
  border-left: 10px solid #3557d2;

  margin-left: -4px;
}

body {
  background: rgba(53, 87, 210, 0.05) !important;
}
</style>
