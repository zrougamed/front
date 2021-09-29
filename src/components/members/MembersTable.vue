<template>
  <div>
    <div class="header">Patients</div>
    <div class="members row justify-between">
   
        
    </div>

    <q-table
      class="my-sticky-header-table"
      row-key="name"
      no-data-label="No Data Available "
      rows-per-page-label="Showing results"
      :rows="membersData"
      :columns="columns"
      :filter-method="myfilterMethod"
      :loading="loading"
      :pagination.sync="paginationControl"
      :visible-columns="visibleColumns"
    >
      <template v-slot:loading>
        <q-inner-loading showing color="primary" />
      </template>

      <template v-slot:body="props">
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
      </template>
    </q-table>
  </div>
</template>

<script>
import { ref } from "vue";
import { useQuasar } from "quasar";
import { useStore } from "vuex";
import Header from "./Header.vue";

export default {
  components: {
    Header,
  },
  setup() {
    const $q = useQuasar();
    const store = useStore();
    store.dispatch("members/getMembersData");
    return {
      current: ref(1),
      addPopup: ref(false),
      mergePopup: ref(false),
      filterPopup: ref(false),
      name: ref(""),
      email: ref(""),
      tab: ref('community'),
      splitterModel: ref(20),
      channels: ref(['community', 'discord','hubspot','github','saleforce']),
      location: ref(""),
      company: ref(""),
      step: ref(1),
      left: ref(true),
      tableFilter: ref('all'),
      community: ref([]),
      // core: ref(false),
      // explore: ref(false),
      // newM: ref(false),
      // teammates: ref(false),
      // noActivities: ref(false),
      visibleColumns: ref([ 'name_image', 'SSN', 'Age', 'Race', 'Gender', 'MaritalStatus', 'HealthcareExpense' , 'HealthcareCoverage' ]),
    };
  },
  data() {
    const store = useStore();
    return {
      loading: false,
      showAddition: false,
      filter: {value: []},
      paginationControl: {
        sortBy: null, // String, column "name" property value
        descending: false,
        page: 1,
        rowsPerPage: 25, // current rows per page being displayed
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
          name: "SSN",
          align: "left",
          label: "SSN",
          field: "SSN",
          sortable: true,
        },
        {
          name: "Age",
          align: "left",
          label: "Age",
          field: "Age",
          sortable: true,
        },
        {
          name: "Race",
          align: "left",
          label: "RACE",
          field: "Race",
          sortable: true,
        },
        {
          name: "Gender",
          align: "left",
          label: "GENDER",
          field: "Gender",
          sortable: true,
        },
        {
          name: "MaritalStatus",
          align: "left",
          label: "Marital Status",
          field: "MaritalStatus",
          sortable: true,
        },
        {
          name: "HealthcareExpense",
          align: "left",
          label: "HealthcareExpense",
          field: "HealthcareExpense",
          sortable: true,
        },
        {
          name: "HealthcareCoverage",
          align: "left",
          label: "HealthcareCoverage Member",
          field: "HealthcareCoverage",
          sortable: true,
        },
      ],
      store,
    };
  },
  computed: {
    membersData() {
      let users = [];
      this.$store.state.members.membersData.forEach(function (element) {
        let user = {};
        Object.keys(element).forEach(function (key) {
          let part = element[key];
          user[key] = part;
        });
        users.push(user);
      });
      return users;
    },
    mergeData(){
        return this.$store.state.members.mergeData
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
    // allMember(){
    //   console.log("all")
    //     this.membersData = this.$store.state.members.membersData;
    // },
    // communityMember(){
    //     var filterData;

    //     filterData = this.$store.state.members.membersData.filter(each =>{
    //         return each.activities > 50
    //     });

    //     let users = [];
    //     filterData.forEach(function (element) {
    //         let user = {};
    //         Object.keys(element).forEach(function (key) {
    //         let part = element[key];
    //         user[key] = part;
    //         });
    //         users.push(user);
    //     });
    //     return users;
    // },
    // coreMember() {
    //   console.log("Hello")
    //   this.filter.value.push('core')
    //   console.log(this.filter.value)
    // },
    // exploreMember() {
    //   console.log("Explore")
    //   this.filter.value.push("explore")
    // },
    myfilterMethod () {
        console.log("Hello")
        if(this.community.includes('core')) {
          return this.membersData.filter(row => row.core)
        }
        if(this.community.includes('explore')) {
          return this.membersData.filter(row => row.explore)
        }
        return this.membersData 
    }
  },
  // watch:{
  //   membersData: function(newVal){
  //     this.memberdata = newVal
  //   }
  // },
  mounted() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  },
};
</script>

<style lang="sass">
.my-card
    border-radius: 10px
    border: 1px solid #9C9B9C
.merge-card
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1)
    border-radius: 10px
.select-merge
    background: #F5F7FD
.filter-selected
    background: #F5F7FD
    border-bottom: 1px solid #3557D2
.filter-text
    font-family: Roboto
    font-style: normal
    font-weight: normal
    font-size: 18px
    line-height: 28px
    color: #3557D2
.filter-button
    min-height: 36px
    padding: 0px 10px
.profile-img
  margin: 20px
.category
    font-family: Roboto
    font-style: normal
    font-weight: normal
    font-size: 16px
    line-height: 24px
    color: #4A4A4A
.user-name
    align-items: center
    font-weight: bold
    font-size: 24px
    line-height: 26px
    color: #4A4A4A
.header
    font-family: Roboto
    font-style: normal
    font-weight: bold
    font-size: 24px
    line-height: 26px
    margin-bottom: 20px
    color: #1D1D1D
.members
    font-family: Roboto
    font-style: normal
    font-weight: bold
    font-size: 24px
    line-height: 26px
    color: #4A4A4A
    margin-bottom: 50px
.title
    font-family: Roboto
    font-style: normal
    font-weight: bold
    font-size: 32px
    line-height: 26px
    display: flex
    align-items: center
    color: #4A4A4A
.subtitle
    font-family: Roboto
    font-style: normal
    font-weight: normal
    font-size: 14px
    line-height: 22px
    color: #777777
.primary-account
    font-family: Roboto
    font-style: normal
    font-weight: normal
    font-size: 16px
    line-height: 24px
    color: #3557D2
    background: rgba(53, 87, 210, 0.1)
.profile
  align-self: center
.profile-name
    font-family: Roboto
    font-style: normal
    font-weight: bold
    font-size: 24px
    line-height: 26px
    color: #4A4A4A
    align-self: center
.contact-info
  font-size: 14px
  line-height: 22px
  margin: 12px 0
  margin-left: 24px
.contact-icon
  font-size: 22px
  padding-right: 10px
.review-merge
    background: rgba(53, 87, 210, 0.1)
.stats
    font-family: Roboto
    font-style: normal
    font-weight: normal
    font-size: 14px
    line-height: 22px
    color: #4A4A4A
.filter
    border: 1px solid #3557D2
    box-sizing: border-box
    border-radius: 4px
.profileField
    font-family: Roboto
    font-style: normal
    font-weight: bold
    font-size: 18px
    line-height: 28px
    color: #4A4A4A
.my-sticky-header-table
  height: 744px
  font-family: Roboto
  font-style: normal
  font-weight: normal
  font-size: 16px
  line-height: 24px
  color: #4A4A4A
  .q-table__top,
  .q-table__bottom,
  thead tr:first-child th
    background-color: rgba(53, 87, 210, 0.08)
  tr:nth-child(even)
    background-color: rgba(53, 87, 210, 0.03)
    thead tr th
      position: sticky
      z-index: 1
    thead tr:first-child th
      top: 0
    &.q-table--loading thead tr:last-child th
      top: 48px
.name
  font-family: Roboto
  font-style: normal
  font-weight: bold
  font-size: 14px
  line-height: 22px
  margin-left: 14px

.my-sticky-header-table
  /* height or max-height is important */

  .q-table__top,
  .q-table__bottom,
  thead tr:first-child th
    /* bg color is important for th; just specify one */
    background-color: #d5dcf6

  thead tr th
    position: sticky
    z-index: 1
  thead tr:first-child th
    top: 0

  /* this is when the loading indicator appears */
  &.q-table--loading thead tr:last-child th
    /* height of all previous header rows */
</style>