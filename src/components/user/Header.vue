
<template>
  <div class="header row justify-between">
    <div class="row items-center">
      <div>
        <router-link
          v-bind:to="'/patients'"
          tag="button"
          class="members"
          style="text-decoration: none"
        >Patients</router-link>
      </div>
      <div class="q-px-md">
        <q-icon name="chevron_right" />
      </div>
      <div>
        <div class="user-name" v-if="profileData.name === ''">Name</div>
        <div class="user-name" v-else>{{profileData.name}}</div>
      </div>
    </div>
    <div>
      <q-btn
        no-caps 
        unelevated 
        color="white" 
        text-color="primary" 
        align="between"
         class="btn-fixed-width find"
        label="Find similar patients"
        icon="person_search"
        @click="similarPopup = true"
      >
        <q-dialog v-model="similarPopup" transition-show="scale" transition-hide="scale">
          <q-card class="bg-white" style="width: 689px; max-width: 80vw;">
            <q-card-section class="bg-primary text-white">
              <q-toolbar>
                <q-toolbar-title>Similar members</q-toolbar-title>
                <q-btn flat v-close-popup round dense label="Close" />
              </q-toolbar>
            </q-card-section>

            <q-card-section class="q-pa-xl">
              <q-table
                class="my-sticky-header-table"
                row-key="name"
                no-data-label="No Data Available "
                rows-per-page-label="Showing results"
                
                :rows="similarData"
                :columns="columns"
                :filter="filter"
                :loading="loading"
                :pagination.sync="paginationControl"
              >
                <template v-slot:loading>
                  <q-inner-loading showing color="primary" />
                </template>

                <template v-slot:body="props">
                  <!-- <q-item clickable v-ripple> -->
                  <q-tr
                    @click="browseMember(props.row.id)"
                    :props="props"
                    style="cursor: pointer !important;"
                  >
                    <q-td v-for="col in props.cols" :key="col.name" :props="props">
                      <span v-if="col.name !='name_image'">{{ col.value }}</span>

                      <div class="row items-center" v-if="col.name =='name_image'">
                        <q-avatar size="38px">
                          <q-img :src="props.row.name_image[1]" />
                        </q-avatar>
                        <div class="name">{{props.row.name_image[0]}}</div>
                      </div>
                    </q-td>
                  </q-tr>
                  <!-- </q-item> -->
                </template>
              </q-table>
            </q-card-section>
          </q-card>
        </q-dialog>
      </q-btn>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useQuasar } from "quasar";
import { useStore } from "vuex";

export default {
  setup() {
    const $q = useQuasar();
    const store = useStore();
    store.dispatch("members/getUserProfile");
    store.dispatch("members/getSimilarMembersData");
    return {
      similarPopup: ref(false),
      current: ref(1),
      //rowsPage: ref("25 per page"),
      //options: ["10 per page", "25 per page", "50 per page", "100 per page"],
    };
  },
  data() {
    const store = useStore();
    return {
      filter: "",
      loading: false,
      paginationControl: {
        sortBy: null, // String, column "name" property value
        descending: false,
        page: 1,
        rowsPerPage: 10, // current rows per page being displayed
      },
      columns: [
        {
          name: "name_image",
          required: true,
          label: "NAME",
          align: "left",
          style: "min-width: 245px",
          field: (row) => row.name_image,
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          name: "Age",
          align: "left",
          label: "Age",
          field: "Age",
          sortable: true,
        },
      ],
      memberdata: [],
      store,
    };
  },
  computed: {
    gettersProfile() {
      return this.$store.getters.userProfile;
    },
    profileData() {
      return this.$store.state.members.userProfile[0];
    },
    similarData() {
      return this.$store.state.members.similarData;
    },
    combined() {
      return (
        this.$store.state.members.MemberSelected + this.personId
      );
    },
  },
  methods: {
    browseMember(personID) {
      this.$store.commit("members/SET_SELECTED_MEMBER", personID);
      this.$router.push({
        name: 'User',
        params: {id: personID},
      })
    },
  },
  watch:{
    combined: function () {
      this.$store.dispatch("members/getUserProfile");
      this.$store.dispatch("members/getSimilarMembersData");
    },
  }
};
</script>

<style lang="sass" scoped>
.members
  font-family: Roboto
  font-style: normal
  font-weight: bold
  font-size: 24px
  line-height: 26px
  color: #3557D2
.user-name
  font-family: Roboto
  font-style: normal
  font-weight: normal
  font-size: 24px
  line-height: 26px
  color: #4A4A4A
.header
  font-family: Roboto
  font-style: normal
  font-weight: bold
  font-size: 24px
  line-height: 26px
  color: #4A4A4A
  margin-bottom: 25px
.q-banner
  width: 200px
.find
    border: 1px solid #3557D2
    box-sizing: border-box
    border-radius: 4px
.my-sticky-header-table
  height: 627px
  font-family: Roboto
  font-style: normal
  font-weight: normal
  font-size: 16px
  line-height: 24px
  color: #4A4A4A
  .q-table__top,
  .q-table__bottom,
  thead tr:first-child th
    background-color: #d5dcf6
  tr:nth-child(even)
    background-color: rgba(53, 87, 210, 0.03)
    thead tr th
      position: sticky
      z-index: 1
    thead tr:first-child th
      top: 0
    &.q-table--loading thead tr:last-child th
      top: 48px
</style>