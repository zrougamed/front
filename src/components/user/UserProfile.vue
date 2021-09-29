<template >
  <div>
    <!-- Loading state -->
    <q-card class="my-card q-pa-sm" v-if="loading">
      <q-card-section class="profile-section">
        <div class="column items-center">
          <q-skeleton class="q-ma-md" type="circle" size="120px" />
          <q-skeleton class="user-name" width="50%" />
        </div>
      </q-card-section>
      <q-separator inset></q-separator>
      <!-- Information Section-->
      <q-card-section class="contact-section">
        <div class="row justify-between items-center">
          <div class="contact-title">Info</div>
          <q-btn icon="o_edit" flat dense style size="md" @click="contactPopup = true" />
        </div>
        <q-skeleton style="margin-bottom: 10px;" width="60%" />
        <q-skeleton width="60%" />
      </q-card-section>
    </q-card>
      <!-- Topic Interested Section-->
     

     
    <!-- User Profile Card -->
    <q-card v-else class="my-card q-pa-sm">
      <q-card-section class="profile-section">
        <div class="column items-center">
          <q-avatar class="q-ma-md" size="120px">
            <q-img :src="profileData.profile_img" />
          </q-avatar>
          <div v-if="profileData.name !== ''" class="user-name">{{profileData.name}}</div>
          <div v-else class="user-name">-----</div>
        </div>
      </q-card-section>
      <q-separator inset></q-separator>
      <!-- Information Section-->
      <q-card-section class="contact-section">
      
        <!-- List all the informations-->
        <div class="empty-state" v-if="profileData.isEmpty === true">This member has no links yet</div>
        <div v-else v-for="(info,index) in profileData.information" :key="index">
          
          <div class="row contact-info">
              <q-icon class="contact-icon" :name="info.icon" size="20px"></q-icon>
              {{info.title }} : {{  info.content }} 
          </div>
          
         
        </div>
      </q-card-section>

     
    </q-card>
  </div>
</template>

<script>
/* eslint-disable */
import { ref } from "vue";
import { useQuasar } from "quasar";
import { useStore } from "vuex";
import { mapActions, mapState } from "vuex";


export default {
  props: {},
  setup(props) {
    const $q = useQuasar();
    const store = useStore();
    const visible = ref(false);
    const showContent = ref(false);
    store.dispatch("members/getUserProfile");

    // const nameData = computed(() => root.$store.state.members.userProfile[0]);

    return {
      visible,
      showContent,
      //Popup windows
      contactPopup: ref(false),
      profilePopup: ref(false),
      store,
      //Contact form
      source: ref(null),
      information: ref(null),
      options: ["Email", "Linkedin", "Discord", "Github", "Custom"],
      profileRules: [
        (val) => val.length < 100 || "Can not exceed 100 characters",
      ],
      //informationRules:[val => (val && val.length > 0) || 'Field can not be empty'],
      expanded: ref(false),
      personId: "",
    };
  },
  components: {
    
  },
  data() {
    return {
      bioMore: false,
      loading: false,
      name: "",
      pronouns: "",
      company: "",
      title: "",
      city_state: "",
      country: "",
      about: "",
      linkedin: "",
    };
  },
  created() {},
  computed: {
    gettersProfile() {
      return this.$store.getters.userProfile;
    },
    profileData() {
      return this.$store.state.members.userProfile[0];
    },
    submitInfo() {},
    combined() {
      return this.$store.state.members.MemberSelected + this.personId;
    },
  },
  watch: {
    combined: function () {
      this.$store.dispatch("members/getUserProfile");
    },
    // we should watch activities map and timeline in both ******
    "this.$store.state.members.userProfile[0].name": function () {
      this.name = this.$store.state.members.userProfile[0].name;
    },
    "this.$store.state.members.userProfile[0].information": function () {
      this.pronouns =
        this.$store.state.members.userProfile[0].information[0].content;
      this.company =
        this.$store.state.members.userProfile[0].information[3].content;
      this.title =
        this.$store.state.members.userProfile[0].information[4].content;
      this.city_state =
        this.$store.state.members.userProfile[0].information[1].content;
      this.country =
        this.$store.state.members.userProfile[0].information[1].content;
    },
  },
  methods: {
    init() {},
    fieldsupdate() {
      // let user = this.$store.state.members.MemberSelected;
      // Act on the values
      if (this.personId !== this.$store.state.members.MemberSelected) {
        this.personId = this.$store.state.members.MemberSelected;
      }
      // var c = this.$store.state.members.userProfile[0].information[1].content;
      // c = c.split(" ");

      this.name = this.$store.state.members.userProfile[0].name;
      this.pronouns =
        this.$store.state.members.userProfile[0].information[0].content;
      this.company =
        this.$store.state.members.userProfile[0].information[3].content;
      this.title =
        this.$store.state.members.userProfile[0].information[4].content;
      this.city_state =
        this.$store.state.members.userProfile[0].information[1].content;
      this.country =
        this.$store.state.members.userProfile[0].information[1].content;
      this.city_state = c[0];
      this.country = c[1];

      this.about = this.$store.state.members.userProfile[0].about;
      this.linkedin =
        this.$store.state.members.userProfile[0].information[6].content;
    },
   
  
  
  },
  mounted() {
    // if (this.$store.state.members.MemberSelected == "") {
    //   this.$router.push("Members");
    // }
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  },
};
</script>

<style lang="sass" scoped>
.my-card
  font-family: Roboto
  font-style: normal
  font-weight: normal
  width: 100%
  box-shadow: 0px 2px 5px rgba(119, 119, 119, 0.05)
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
