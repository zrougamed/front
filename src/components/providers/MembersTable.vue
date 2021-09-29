<template>
  <div>
    <div class="header">Providers</div>
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
const columns = [
        {
          name: "name_image",
          required: true,
          label: "name",
          align: "left",
          field: (row) => row.name_image,
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          name: "organization",
          required: true,
          align: "left",
          label: "Organization",
          field: "organization",
          sortable: true,
        },
        {
          required: true,
          name: "specialty",
          align: "left",
          label: "Specialty",
          field: "specialty",
          sortable: true,
        },
        {
          required: true,
          name: "gender",
          align: "left",
          label: "Gender",
          field: "gender",
          sortable: true,
        },
        {
          required: true,
          name: "encounters",
          align: "left",
          label: "Encounters",
          field: "encounters",
          sortable: true,
        },
      
        
      ]
export default {
  components: {
    Header,
  },
  setup() {
    const $q = useQuasar();
    const store = useStore();
    store.dispatch("providers/getMembersData");
    return {
      current: ref(1),
      addPopup: ref(false),
      mergePopup: ref(false),
      filterPopup: ref(false),
      name: ref(""),
      email: ref(""),
      tab: ref('community'),
      splitterModel: ref(20),
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
      columns: columns,
      store,
    };
  },
  computed: {
    membersData() {
      let users = [];
      this.$store.state.providers.membersData.forEach(function (element) {
        let user = {};
        Object.keys(element).forEach(function (key) {
          let part = element[key];
          user[key] = part;
        });
        users.push(user);
      });
      return users;
    },
   
  },
  methods: {
  
  },
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