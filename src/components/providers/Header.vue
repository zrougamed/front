<template>
    <div>
    <div class="header">Members</div>
    <div class="members row justify-between">
        
        <div class="row">
            
            

         
        </div>
    </div>
    </div>
</template>

<script>
import { ref } from "vue";
import { useQuasar } from "quasar";
import { useStore } from "vuex";

export default {
  setup(){
      return{
        //Popup windows
        addPopup: ref(false),
        mergePopup: ref(false),
        filterPopup: ref(false),
        name: ref(""),
        email: ref(""),
        tab: ref('community'),
        splitterModel: ref(20),
        community: ref(['core_members']),
        channels: ref(['community', 'discord','hubspot','github','saleforce']),
        location: ref(""),
        company: ref(""),
        step: ref(1),
        left: ref(true),
        tableFilter: ref('all'),
      }
  },
  data(){
      return{
          showAddition: false,
      }
  },
  methods:{
    allMember(){
        this.membersData = this.$store.state.members.membersData;
    },
    communityMember(){
        var filterData;

        filterData = this.$store.state.members.membersData.filter(each =>{
            return each.activities > 50
        });

        let users = [];
        filterData.forEach(function (element) {
            let user = {};
            Object.keys(element).forEach(function (key) {
            let part = element[key];
            user[key] = part;
            });
            users.push(user);
        });
        return users;
    }
  },
  computed:{
    mergeData(){
        return this.$store.state.members.mergeData
    },
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
  }
};
</script>

<style lang="sass" scoped>
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
</style>