<template>
    <q-page class="merge">
    <div class="row justify-between">
        <div class="header">Merge members</div>
        <q-btn flat no-caps color="primary" class="btn-fixed-width" icon="arrow_back" align="between" to="/members" label="Go back to members table"/>
    </div>
    <div class="subtitle q-">Select similar profiles and links to merge into one account.</div>
    <q-carousel
        v-model="slide"
        swipeable
        animated
        control-color="primary"
        ref="carousel"
        height="auto"
        class="merge-slide text-secondary rounded-borders"
        >
        <div v-for="(merge,index) in mergeData" :key="index" :name="index">
            <div class="row justify-between no-wrap">
                <div class="col-4">
                    <div class="q-pb-sm category">Primary account</div>
                    <q-card class="merge-card column justify-between" style="height: 580px">
                        <q-card-section>
                            <div class="profile-section">
                                <div class="column items-center">
                                    <q-avatar class="primary-img" size="80px">
                                        <q-img :src="merge.primary.profile_img" />
                                    </q-avatar>
                                    <div class="primary-name">{{merge.primary.name}}</div>                                        
                                </div>
                            </div>
                        </q-card-section>
                        <q-card-section>
                            <div v-for="info in merge.primary.information" :key="info.type">
                                <div
                                    class="row contact-info"
                                    v-if="!!info.content && info.type !== 'Email' && info.content.length > 0"
                                >
                                    <q-icon class="contact-icon" :name="info.icon" size="20px"></q-icon>
                                    <div v-if="validURL(info.content)">
                                    <a
                                        style="text-decoration: none;"
                                        v-if="info.type === 'Discord' || info.type === 'Twitter' || info.type === 'Linkedin'"
                                        :href="info.content"
                                    >{{info.type}}</a>
                                    <a style="text-decoration: none;" v-else :href="info.content">{{info.content}}</a>
                                    </div>
                                    <div v-else>{{info.content}}</div>
                                </div>

                                <div v-else-if="info.type === 'Email'" class="row contact-info">
                                    <q-icon class="contact-icon" :name="info.icon" size="20px"></q-icon>
                                    <div>{{info.content}}</div>
                                    <div class="q-px-md"><q-badge rounded align="middle">{{info.count}}+</q-badge></div>
                                </div>
                            </div>
                        </q-card-section>
                        <q-card-section>
                            * For more info, check out the member profile. 
                        </q-card-section>
                    </q-card>
                </div>
                <div
                    class="scroll col-8 items-center q-pl-lg"
                    style="max-height: 612px; overflow-y: scroll, overflow-x: hidden;"
                    id="virtual-scroll-target">
                        <div v-if="merge.accounts.length > 0">
                            <div class="q-pb-sm category justify-start">Similar accounts</div>
                            <div v-for="(item, index) in merge.accounts" :key="index" class="q-pb-lg">
                                <div class="row">
                                        <q-item 
                                        active-class="select-merge" 
                                        :active="accountSelected.includes(index)"
                                        @click="selectAccount(index)"
                                        clickable 
                                        class="merge-card q-pa-md row items-ceter col-11"
                                        >
                                            <q-icon class="contact-icon" :name="item.icon" size="20px"></q-icon>
                                            <div>{{item.content}}</div>
                                        </q-item>
                                </div>
                            </div>
                        </div>
                        <div v-if="merge.members.length > 0">
                            <div class=" q-pb-sm category">Similar members</div>
                            <div v-for="(item, index) in merge.members" :key="index"  class="row q-pb-lg">
                                <q-item
                                active-class="select-merge" 
                                :active="memberSelected.includes(index)"
                                @click="selectMember(index)"
                                clickable  
                                class="merge-card col-11"
                                >
                                    <div class="row justify-between items-center">
                                        <div class="column col items-center">
                                            <q-avatar class="q-ma-md" size="60px">
                                                <q-img :src="item.profile_img" />
                                            </q-avatar>
                                            <div class="user-name">{{item.name}}</div>                                        
                                        </div>
                                        <div class="col">
                                            <div v-for="info in item.information" :key="info.type" class="q-px-lg">
                                                <div
                                                    class="row contact-info"
                                                    v-if="!!info.content && info.type !== 'Email' && info.content.length > 0"
                                                >
                                                    <q-icon class="contact-icon" :name="info.icon" size="20px"></q-icon>
                                                    <div v-if="validURL(info.content)">
                                                    <a
                                                        style="text-decoration: none;"
                                                        v-if="info.type === 'Discord' || info.type === 'Twitter' || info.type === 'Linkedin'"
                                                        :href="info.content"
                                                    >{{info.type}}</a>
                                                    <a style="text-decoration: none;" v-else :href="info.content">{{info.content}}</a>
                                                    </div>
                                                    <div v-else>{{info.content}}</div>
                                                </div>

                                                <div v-else-if="info.type === 'Email'">
                                                    <q-tree :nodes="info.content" node-key="label" no-connectors />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </q-item>
                            </div>
                        </div>
                </div>
            </div>
        </div>
        <template v-slot:control>
            <q-carousel-control 
            class="row justify-center q-gutter-md"
            style="position: relative"
            >
                <q-btn text-color="black" icon="arrow_back" @click="$refs.carousel.previous(); resetSelection();" />
                <q-btn filled unelevated no-caps color="primary" align="between" class="btn-fixed-width" label="Merge"/>
                <q-btn text-color="black" icon="arrow_forward" @click="$refs.carousel.next(); resetSelection();"/>
            </q-carousel-control>
            <div class="text-secondary text-center" >{{mergeData.length}} suggestions</div>
        </template>
    </q-carousel>
    </q-page>
</template>

<script>
import { ref } from "vue";
import { useQuasar } from "quasar";
import { useStore } from "vuex";

export default {
  setup(){
      return{
        slide: ref(0),
        accountSelected: ref([]),
        memberSelected: ref([]),
      }
  },
  methods:{
      validURL(str) {
      var pattern = new RegExp(
        "^(https?:\\/\\/)?" + // protocol
          "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
          "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
          "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
          "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
          "(\\#[-a-z\\d_]*)?$",
        "i"
      ); // fragment locator
      return !!pattern.test(str);
    },
    selectAccount(index){
        if(this.accountSelected.includes(index)){
            this.accountSelected.splice(this.accountSelected.indexOf(index), 1);
        }else{
            this.accountSelected.push(index);
        } 
    },
    selectMember(index){
        if(this.memberSelected.includes(index)){
            this.memberSelected.splice(this.memberSelected.indexOf(index), 1);
        }else{
            this.memberSelected.push(index);
        } 
    },
    resetSelection(){
        this.accountSelected = ref([]);
        this.memberSelected =  ref([]);
    }
  },
  computed:{
      mergeData(){
          return this.$store.state.members.mergeData
      }
  }
};
</script>

<style lang="sass" scoped>
.merge
    padding : 40px
.merge-card
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1)
    border-radius: 10px
    background: #FFFFFF
.merge-slide
    background: none
.select-merge
    background: #F5F7FD
    border: 1px solid #3557D2
    box-sizing: border-box
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1)
    border-radius: 10px
.header
    font-family: Roboto
    font-style: normal
    font-weight: bold
    font-size: 24px
    line-height: 26px
    margin-bottom: 10px
    color: #1D1D1D
.category
    font-family: Roboto
    font-style: normal
    font-weight: normal
    font-size: 16px
    line-height: 24px
    color: #4A4A4A
.primary-img
    margin: 20px
.primary-name
    align-items: center
    font-weight: bold
    font-size: 18px
    line-height: 24px
    color: #4A4A4A
.user-name
    align-items: center
    font-weight: bold
    font-size: 16px
    line-height: 24px
    color: #4A4A4A
.subtitle
    font-family: Roboto
    font-style: normal
    font-weight: normal
    font-size: 18px
    line-height: 28px
    margin-bottom: 20px
    color: #777777
.primary-account
    font-family: Roboto
    font-style: normal
    font-weight: normal
    font-size: 16px
    line-height: 24px
    color: #3557D2
    background: rgba(53, 87, 210, 0.1)
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
</style>