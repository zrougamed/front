(self["webpackChunkPatient360App"]=self["webpackChunkPatient360App"]||[]).push([[66],{9066:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>zt});var a=s(3673);const i=(0,a.HX)("data-v-9ce66932");(0,a.dD)("data-v-9ce66932");const o={class:"row q-col-gutter-md q-pt-sm"},r={class:"col-lg-3 col-md-4 col-sm-12 col-xs-12"},n={class:"q-gutter-y-md col-lg-9 col-md-8 col-sm-12 col-xs-12"};(0,a.Cn)();const l=i(((e,t,s,l,m,c)=>{const d=(0,a.up)("Header"),u=(0,a.up)("UserProfile"),p=(0,a.up)("Summary"),h=(0,a.up)("ActivityMap"),g=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(g,{class:"user"},{default:i((()=>[(0,a.Wm)("div",null,[(0,a.Wm)(d)]),(0,a.Wm)("div",o,[(0,a.Wm)("div",r,[(0,a.Wm)(u)]),(0,a.Wm)("div",n,[(0,a.Wm)("div",null,[(0,a.Wm)(p)]),(0,a.Wm)("div",null,[(0,a.Wm)(h)])])])])),_:1})}));var m=s(2942);const d=(0,a.HX)("data-v-7798a33b");(0,a.dD)("data-v-7798a33b");const u={class:"header row justify-between"},p={class:"row items-center"},h=(0,a.Uk)("Patients"),g={class:"q-px-md"},f={key:0,class:"user-name"},b={key:1,class:"user-name"},v=(0,a.Uk)("Similar members"),y={key:0},w={key:1,class:"row items-center"},W={class:"name"};(0,a.Cn)();const _=d(((e,t,s,i,o,r)=>{const n=(0,a.up)("router-link"),l=(0,a.up)("q-icon"),c=(0,a.up)("q-toolbar-title"),_=(0,a.up)("q-btn"),$=(0,a.up)("q-toolbar"),x=(0,a.up)("q-card-section"),D=(0,a.up)("q-inner-loading"),k=(0,a.up)("q-img"),S=(0,a.up)("q-avatar"),q=(0,a.up)("q-td"),M=(0,a.up)("q-tr"),C=(0,a.up)("q-table"),P=(0,a.up)("q-card"),Z=(0,a.up)("q-dialog"),j=(0,a.Q2)("close-popup");return(0,a.wg)(),(0,a.j4)("div",u,[(0,a.Wm)("div",p,[(0,a.Wm)("div",null,[(0,a.Wm)(n,{to:"/members",tag:"button",class:"members",style:{"text-decoration":"none"}},{default:d((()=>[h])),_:1})]),(0,a.Wm)("div",g,[(0,a.Wm)(l,{name:"chevron_right"})]),(0,a.Wm)("div",null,[""===r.profileData.name?((0,a.wg)(),(0,a.j4)("div",f,"Name")):((0,a.wg)(),(0,a.j4)("div",b,(0,m.zw)(r.profileData.name),1))])]),(0,a.Wm)("div",null,[(0,a.Wm)(_,{"no-caps":"",unelevated:"",color:"white","text-color":"primary",align:"between",class:"btn-fixed-width find",label:"Find similar patients",icon:"person_search",onClick:t[2]||(t[2]=e=>i.similarPopup=!0)},{default:d((()=>[(0,a.Wm)(Z,{modelValue:i.similarPopup,"onUpdate:modelValue":t[1]||(t[1]=e=>i.similarPopup=e),"transition-show":"scale","transition-hide":"scale"},{default:d((()=>[(0,a.Wm)(P,{class:"bg-white",style:{width:"689px","max-width":"80vw"}},{default:d((()=>[(0,a.Wm)(x,{class:"bg-primary text-white"},{default:d((()=>[(0,a.Wm)($,null,{default:d((()=>[(0,a.Wm)(c,null,{default:d((()=>[v])),_:1}),(0,a.wy)((0,a.Wm)(_,{flat:"",round:"",dense:"",label:"Close"},null,512),[[j]])])),_:1})])),_:1}),(0,a.Wm)(x,{class:"q-pa-xl"},{default:d((()=>[(0,a.Wm)(C,{class:"my-sticky-header-table","row-key":"name","no-data-label":"No Data Available ","rows-per-page-label":"Showing results",rows:r.similarData,columns:o.columns,filter:o.filter,loading:o.loading,pagination:o.paginationControl},{loading:d((()=>[(0,a.Wm)(D,{showing:"",color:"primary"})])),body:d((e=>[(0,a.Wm)(M,{onClick:t=>r.browseMember(e.row.id),props:e,style:{cursor:"pointer !important"}},{default:d((()=>[((0,a.wg)(!0),(0,a.j4)(a.HY,null,(0,a.Ko)(e.cols,(t=>((0,a.wg)(),(0,a.j4)(q,{key:t.name,props:e},{default:d((()=>["name_image"!=t.name?((0,a.wg)(),(0,a.j4)("span",y,(0,m.zw)(t.value),1)):(0,a.kq)("",!0),"name_image"==t.name?((0,a.wg)(),(0,a.j4)("div",w,[(0,a.Wm)(S,{size:"38px"},{default:d((()=>[(0,a.Wm)(k,{src:e.row.name_image[1]},null,8,["src"])])),_:2},1024),(0,a.Wm)("div",W,(0,m.zw)(e.row.name_image[0]),1)])):(0,a.kq)("",!0)])),_:2},1032,["props"])))),128))])),_:2},1032,["onClick","props"])])),_:1},8,["rows","columns","filter","loading","pagination"])])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})])])}));var $=s(9594),x=s(8825),D=s(7874);const k={setup(){(0,x.Z)();const e=(0,D.oR)();return e.dispatch("members/getUserProfile"),e.dispatch("members/getSimilarMembersData"),{similarPopup:(0,$.iH)(!1),current:(0,$.iH)(1)}},data(){const e=(0,D.oR)();return{filter:"",loading:!1,paginationControl:{sortBy:null,descending:!1,page:1,rowsPerPage:10},columns:[{name:"name_image",required:!0,label:"NAME",align:"left",style:"min-width: 245px",field:e=>e.name_image,format:e=>`${e}`,sortable:!0},{name:"Age",align:"left",label:"Age",field:"Age",sortable:!0}],memberdata:[],store:e}},computed:{gettersProfile(){return this.$store.getters.userProfile},profileData(){return this.$store.state.members.userProfile[0]},similarData(){return this.$store.state.members.similarData},combined(){return this.$store.state.members.MemberSelected+this.personId}},methods:{browseMember(e){this.$store.commit("members/SET_SELECTED_MEMBER",e),this.$router.push({name:"User",params:{id:e}})}},watch:{combined:function(){this.$store.dispatch("members/getUserProfile"),this.$store.dispatch("members/getSimilarMembersData")}}};var S=s(4554),q=s(4607),M=s(6778),C=s(151),P=s(5589),Z=s(9570),j=s(3747),Q=s(6429),E=s(6941),A=s(3414),T=s(8186),I=s(3884),z=s(5096),R=s(4027),H=s(5607),B=s(677),U=s(6489),V=s(7518),L=s.n(V);k.render=_,k.__scopeId="data-v-7798a33b";const N=k;L()(k,"components",{QIcon:S.Z,QBtn:q.Z,QDialog:M.Z,QCard:C.Z,QCardSection:P.Z,QToolbar:Z.Z,QToolbarTitle:j.Z,QTable:Q.Z,QInnerLoading:E.Z,QItem:A.Z,QTr:T.Z,QTd:I.Z,QAvatar:z.Z,QImg:R.Z,QBanner:H.Z}),L()(k,"directives",{ClosePopup:B.Z,Ripple:U.Z});const O=(0,a.HX)("data-v-66036980");(0,a.dD)("data-v-66036980");const F={class:"column items-center"},X={class:"row justify-between items-center"},Y=(0,a.Wm)("div",{class:"contact-title"},"Info",-1),K={class:"column items-center"},G={key:0,class:"user-name"},J={key:1,class:"user-name"},ee={key:0,class:"empty-state"},te={class:"row contact-info"};(0,a.Cn)();const se=O(((e,t,s,i,o,r)=>{const n=(0,a.up)("q-skeleton"),l=(0,a.up)("q-card-section"),c=(0,a.up)("q-separator"),d=(0,a.up)("q-btn"),u=(0,a.up)("q-card"),p=(0,a.up)("q-img"),h=(0,a.up)("q-avatar"),g=(0,a.up)("q-icon");return(0,a.wg)(),(0,a.j4)("div",null,[o.loading?((0,a.wg)(),(0,a.j4)(u,{key:0,class:"my-card q-pa-sm"},{default:O((()=>[(0,a.Wm)(l,{class:"profile-section"},{default:O((()=>[(0,a.Wm)("div",F,[(0,a.Wm)(n,{class:"q-ma-md",type:"circle",size:"120px"}),(0,a.Wm)(n,{class:"user-name",width:"50%"})])])),_:1}),(0,a.Wm)(c,{inset:""}),(0,a.Wm)(l,{class:"contact-section"},{default:O((()=>[(0,a.Wm)("div",X,[Y,(0,a.Wm)(d,{icon:"o_edit",flat:"",dense:"",style:"",size:"md",onClick:t[1]||(t[1]=e=>i.contactPopup=!0)})]),(0,a.Wm)(n,{style:{"margin-bottom":"10px"},width:"60%"}),(0,a.Wm)(n,{width:"60%"})])),_:1})])),_:1})):((0,a.wg)(),(0,a.j4)(u,{key:1,class:"my-card q-pa-sm"},{default:O((()=>[(0,a.Wm)(l,{class:"profile-section"},{default:O((()=>[(0,a.Wm)("div",K,[(0,a.Wm)(h,{class:"q-ma-md",size:"120px"},{default:O((()=>[(0,a.Wm)(p,{src:r.profileData.profile_img},null,8,["src"])])),_:1}),""!==r.profileData.name?((0,a.wg)(),(0,a.j4)("div",G,(0,m.zw)(r.profileData.name),1)):((0,a.wg)(),(0,a.j4)("div",J,"-----"))])])),_:1}),(0,a.Wm)(c,{inset:""}),(0,a.Wm)(l,{class:"contact-section"},{default:O((()=>[!0===r.profileData.isEmpty?((0,a.wg)(),(0,a.j4)("div",ee,"This member has no links yet")):((0,a.wg)(!0),(0,a.j4)(a.HY,{key:1},(0,a.Ko)(r.profileData.information,((e,t)=>((0,a.wg)(),(0,a.j4)("div",{key:t},[(0,a.Wm)("div",te,[(0,a.Wm)(g,{class:"contact-icon",name:e.icon,size:"20px"},null,8,["name"]),(0,a.Uk)(" "+(0,m.zw)(e.content),1)])])))),128))])),_:1})])),_:1}))])}));s(4303),s(7280);const ae=(0,a.HX)("data-v-092adc78");(0,a.dD)("data-v-092adc78");const ie={key:0,class:"language-chart"},oe={class:"language-bar"},re={key:1,class:"empty-bar"};(0,a.Cn)();const ne=ae(((e,t,s,i,o,r)=>r.interestedData.length>0?((0,a.wg)(),(0,a.j4)("div",ie,[(0,a.Wm)("div",oe,[((0,a.wg)(!0),(0,a.j4)(a.HY,null,(0,a.Ko)(r.interestedData,(e=>((0,a.wg)(),(0,a.j4)("span",{style:e.styleText},null,4)))),256))])])):((0,a.wg)(),(0,a.j4)("div",re)))),le={name:"LanguageChart",data(){return{mycolor:"#"+(16777215*Math.random()<<0).toString(16),interestedData:null}},computed:{interestedData(){return this.$store.state.members.userProfile[0].topic_interested}}};le.render=ne,le.__scopeId="data-v-092adc78";const me=le,ce={props:{},setup(e){(0,x.Z)();const t=(0,D.oR)(),s=(0,$.iH)(!1),a=(0,$.iH)(!1);return t.dispatch("members/getUserProfile"),{visible:s,showContent:a,contactPopup:(0,$.iH)(!1),profilePopup:(0,$.iH)(!1),store:t,source:(0,$.iH)(null),information:(0,$.iH)(null),options:["Email","Linkedin","Discord","Github","Custom"],profileRules:[e=>e.length<100||"Can not exceed 100 characters"],expanded:(0,$.iH)(!1),personId:""}},components:{LanguageChart:me},data(){return{bioMore:!1,loading:!1,name:"",pronouns:"",company:"",title:"",city_state:"",country:"",about:"",linkedin:""}},created(){},computed:{gettersProfile(){return this.$store.getters.userProfile},profileData(){return this.$store.state.members.userProfile[0]},submitInfo(){},combined(){return this.$store.state.members.MemberSelected+this.personId}},watch:{combined:function(){this.$store.dispatch("members/getUserProfile")},"this.$store.state.members.userProfile[0].name":function(){this.name=this.$store.state.members.userProfile[0].name},"this.$store.state.members.userProfile[0].information":function(){this.pronouns=this.$store.state.members.userProfile[0].information[0].content,this.company=this.$store.state.members.userProfile[0].information[3].content,this.title=this.$store.state.members.userProfile[0].information[4].content,this.city_state=this.$store.state.members.userProfile[0].information[1].content,this.country=this.$store.state.members.userProfile[0].information[1].content}},methods:{init(){},fieldsupdate(){this.personId!==this.$store.state.members.MemberSelected&&(this.personId=this.$store.state.members.MemberSelected),this.name=this.$store.state.members.userProfile[0].name,this.pronouns=this.$store.state.members.userProfile[0].information[0].content,this.company=this.$store.state.members.userProfile[0].information[3].content,this.title=this.$store.state.members.userProfile[0].information[4].content,this.city_state=this.$store.state.members.userProfile[0].information[1].content,this.country=this.$store.state.members.userProfile[0].information[1].content,this.city_state=c[0],this.country=c[1],this.about=this.$store.state.members.userProfile[0].about,this.linkedin=this.$store.state.members.userProfile[0].information[6].content},validURL(e){var t=new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i");return!!t.test(e)},deleteRow(e){this.$store.state.members.userProfile[0].information.splice(e,1)},addRow(e){this.profileData.information.push({type:this.source,content:this.information})},submitProfileForm(){console.log(typeof this.name),console.log(typeof this.pronouns),console.log(this.company),console.log(this.title),console.log(typeof this.city_state),console.log(""===this.country),console.log(this.about),console.log(this.linkedin);let e={name:this.name,pronouns:this.pronouns,company:this.company,title:this.title,city:this.city_state,country:this.country,about:this.about,linkedin:this.linkedin};this.$store.dispatch("members/editProfile",e)}},mounted(){this.loading=!0,setTimeout((()=>{this.loading=!1}),1e3)}};var de=s(4103),ue=s(5869);ce.render=se,ce.__scopeId="data-v-66036980";const pe=ce;L()(ce,"components",{QCard:C.Z,QCardSection:P.Z,QSkeleton:de.ZP,QSeparator:ue.Z,QBtn:q.Z,QAvatar:z.Z,QImg:R.Z,QIcon:S.Z});const he=(0,a.HX)("data-v-299160f7");(0,a.dD)("data-v-299160f7");const ge={key:0,class:"summary row content-between q-gutter-x-md wrap"},fe={class:"col"},be={class:"column items-center"},ve={class:"col"},ye={class:"column items-center"},we={class:"col"},We={class:"column items-center"},_e={class:"col"},$e={class:"column items-center"},xe={key:1,class:"summary row content-between q-gutter-x-md wrap"},De={class:"col"},ke={key:0,class:"stats"},Se={key:1,class:"stats"},qe=(0,a.Wm)("div",{class:"stats-subtitle"},"Since first seen",-1),Me={class:"col"},Ce={key:0,class:"stats"},Pe={key:1,class:"stats"},Ze=(0,a.Wm)("div",{class:"stats-subtitle"},"Last seen",-1),je={class:"col"},Qe={key:0,class:"stats"},Ee={key:1,class:"stats"},Ae=(0,a.Wm)("div",{class:"stats-subtitle"},"Social Security Number",-1),Te={class:"col"},Ie={key:0,class:"stats"},ze={key:1,class:"stats"},Re=(0,a.Wm)("div",{class:"stats-subtitle"},"Age",-1);(0,a.Cn)();const He=he(((e,t,s,i,o,r)=>{const n=(0,a.up)("q-skeleton"),l=(0,a.up)("q-card"),c=(0,a.up)("q-card-section");return o.loading?((0,a.wg)(),(0,a.j4)("div",ge,[(0,a.Wm)("div",fe,[(0,a.Wm)(l,{class:"empty-state"},{default:he((()=>[(0,a.Wm)("div",be,[(0,a.Wm)(n,{class:"col center-top",style:{"margin-bottom":"16px"},width:"70%"}),(0,a.Wm)(n,{class:"col center-bottom",width:"50%"})])])),_:1})]),(0,a.Wm)("div",ve,[(0,a.Wm)(l,{class:"empty-state"},{default:he((()=>[(0,a.Wm)("div",ye,[(0,a.Wm)(n,{class:"col center-top",style:{"margin-bottom":"16px"},width:"70%"}),(0,a.Wm)(n,{class:"col center-bottom",width:"50%"})])])),_:1})]),(0,a.Wm)("div",we,[(0,a.Wm)(l,{class:"empty-state"},{default:he((()=>[(0,a.Wm)("div",We,[(0,a.Wm)(n,{class:"col center-top",style:{"margin-bottom":"16px"},width:"70%"}),(0,a.Wm)(n,{class:"col center-bottom",width:"50%"})])])),_:1})]),(0,a.Wm)("div",_e,[(0,a.Wm)(l,{class:"empty-state"},{default:he((()=>[(0,a.Wm)("div",$e,[(0,a.Wm)(n,{class:"col center-top",style:{"margin-bottom":"16px"},width:"70%"}),(0,a.Wm)(n,{class:"col center-bottom",width:"50%"})])])),_:1})])])):((0,a.wg)(),(0,a.j4)("div",xe,[(0,a.Wm)("div",De,[(0,a.Wm)(l,{class:"my-card"},{default:he((()=>[(0,a.Wm)(c,{class:"text-center"},{default:he((()=>["N/A years"!==r.summaryData.firstSeen?((0,a.wg)(),(0,a.j4)("div",ke,(0,m.zw)(r.summaryData.firstSeen),1)):((0,a.wg)(),(0,a.j4)("div",Se,"-----")),qe])),_:1})])),_:1})]),(0,a.Wm)("div",Me,[(0,a.Wm)(l,{class:"my-card"},{default:he((()=>[(0,a.Wm)(c,{class:"text-center"},{default:he((()=>["N/A day"!==r.summaryData.lastSeen?((0,a.wg)(),(0,a.j4)("div",Ce,(0,m.zw)(r.summaryData.lastSeen),1)):((0,a.wg)(),(0,a.j4)("div",Pe,"-----")),Ze])),_:1})])),_:1})]),(0,a.Wm)("div",je,[(0,a.Wm)(l,{class:"my-card"},{default:he((()=>[(0,a.Wm)(c,{class:"text-center"},{default:he((()=>["N/A"!==r.summaryData.interestScore?((0,a.wg)(),(0,a.j4)("div",Qe,(0,m.zw)(r.summaryData.interestScore),1)):((0,a.wg)(),(0,a.j4)("div",Ee,"-----")),Ae])),_:1})])),_:1})]),(0,a.Wm)("div",Te,[(0,a.Wm)(l,{class:"my-card"},{default:he((()=>[(0,a.Wm)(c,{class:"text-center"},{default:he((()=>[0!==r.summaryData.engagementScore?((0,a.wg)(),(0,a.j4)("div",Ie,(0,m.zw)(r.summaryData.engagementScore)+" %",1)):((0,a.wg)(),(0,a.j4)("div",ze,"-----")),Re])),_:1})])),_:1})])]))})),Be={setup(){(0,x.Z)();const e=(0,D.oR)();return e.dispatch("members/getSummary"),{personId:""}},data(){return{loading:!1}},watch:{combineds:function(){this.$store.dispatch("members/getSummary")}},computed:{combineds(){return this.$store.state.members.MemberSelected+this.personId},gettersSummary(){return this.$store.getters.allSummary},summaryData(){return this.$store.state.members.summary[0]}},mounted(){this.loading=!0,setTimeout((()=>{this.loading=!1}),1e3)}};Be.render=He,Be.__scopeId="data-v-299160f7";const Ue=Be;L()(Be,"components",{QCard:C.Z,QSkeleton:de.ZP,QCardSection:P.Z});const Ve=(0,a.HX)("data-v-fb3b5886");(0,a.dD)("data-v-fb3b5886");const Le={class:"row justify-between items-center"},Ne=(0,a.Uk)("Activities Map"),Oe={class:"filter row items-center"},Fe=(0,a.Uk)("Filter:"),Xe={class:"filter-options"},Ye={class:"row justify-end q-pr-md"},Ke={key:0,class:"column items-center justify-center",style:{height:"250px"}},Ge=(0,a.Wm)("div",null,"Loading",-1),Je={class:"column",style:{height:"250px"}},et={ref:"scatterChart",id:"scatterChart",style:{height:"400px"}};(0,a.Cn)();const tt=Ve(((e,t,s,i,o,r)=>{const n=(0,a.up)("q-card-section"),l=(0,a.up)("q-text"),c=(0,a.up)("q-checkbox"),d=(0,a.up)("q-badge"),u=(0,a.up)("q-spinner"),p=(0,a.up)("Chart"),h=(0,a.up)("ActivitiesTimeline"),g=(0,a.up)("q-card");return(0,a.wg)(),(0,a.j4)(g,{class:"my-card"},{default:Ve((()=>[(0,a.Wm)("div",Le,[(0,a.Wm)(n,{class:"map-title"},{default:Ve((()=>[Ne])),_:1}),(0,a.Wm)(n,null,{default:Ve((()=>[(0,a.Wm)("div",Oe,[(0,a.Wm)(l,null,{default:Ve((()=>[Fe])),_:1}),(0,a.Wm)("div",Xe,[(0,a.Wm)(c,{modelValue:i.selection,"onUpdate:modelValue":t[1]||(t[1]=e=>i.selection=e),val:"Birthday",label:"Birthday"},null,8,["modelValue"]),(0,a.Wm)(c,{modelValue:i.selection,"onUpdate:modelValue":t[2]||(t[2]=e=>i.selection=e),val:"Observation",label:"Observation"},null,8,["modelValue"]),(0,a.Wm)(c,{modelValue:i.selection,"onUpdate:modelValue":t[3]||(t[3]=e=>i.selection=e),val:"Condition",label:"Condition"},null,8,["modelValue"]),(0,a.Wm)(c,{modelValue:i.selection,"onUpdate:modelValue":t[4]||(t[4]=e=>i.selection=e),val:"Immunization",label:"Immunization"},null,8,["modelValue"])])])])),_:1})]),(0,a.Wm)("div",Ye,[(0,a.Wm)(d,{class:"total-activities"},{default:Ve((()=>[(0,a.Uk)("Activities by Sources: "+(0,m.zw)(r.addTotal),1)])),_:1})]),o.loading?((0,a.wg)(),(0,a.j4)("div",Ke,[(0,a.Wm)(u,{color:"primary",size:"3em"}),Ge])):(0,a.kq)("",!0),(0,a.Wm)("div",null,[(0,a.Wm)("div",Je,[(0,a.Wm)(n,{class:"col"},{default:Ve((()=>[(0,a.Wm)("div",et,null,512)])),_:1})])]),(0,a.Wm)(n,null,{default:Ve((()=>[(0,a.Wm)(p,{data:o.updates},null,8,["data"])])),_:1}),(0,a.Wm)(n,null,{default:Ve((()=>[(0,a.Wm)(h,{data:o.timelineData},null,8,["data"])])),_:1})])),_:1})}));var st=s(1105),at=s.n(st);const it=(0,a.HX)("data-v-ef44268c");(0,a.dD)("data-v-ef44268c");const ot=(0,a.Wm)("div",{class:"timeline-title"},"Timeline",-1),rt={key:0,class:"q-py-xl"},nt={class:"scroll q-px-md",style:{"max-height":"800px","overflow-y":"scroll, overflow-x: hidden"},id:"virtual-scroll-target"},lt={key:0},mt={class:"row justify-between"},ct={class:"activity-title"},dt={class:"activity-content items-center"},ut=(0,a.Uk)(" Feature is coming soon "),pt={class:"self-center no-outline activity-content",tabindex:"0"},ht={key:1,class:"row justify-center items-center"},gt=(0,a.Wm)("img",{src:at()},null,-1);(0,a.Cn)();const ft=it(((e,t,s,i,o,r)=>{const n=(0,a.up)("q-skeleton"),l=(0,a.up)("q-banner"),c=(0,a.up)("q-popup-proxy"),d=(0,a.up)("q-btn"),u=(0,a.up)("q-field"),p=(0,a.up)("q-timeline-entry"),h=(0,a.up)("q-timeline"),g=(0,a.up)("q-card-section");return(0,a.wg)(),(0,a.j4)(a.HY,null,[ot,o.loading?((0,a.wg)(),(0,a.j4)("div",rt,[(0,a.Wm)(n,{style:{"margin-bottom":"15px"}}),(0,a.Wm)(n)])):((0,a.wg)(),(0,a.j4)(g,{key:1},{default:it((()=>[(0,a.Wm)("div",nt,[(0,a.Wm)(h,{items:s.data,separator:"",color:"grey",style:{width:"100%"}},{default:it((()=>[s.data.length>0?((0,a.wg)(),(0,a.j4)("div",lt,[((0,a.wg)(!0),(0,a.j4)(a.HY,null,(0,a.Ko)(s.data,((e,t)=>((0,a.wg)(),(0,a.j4)(p,{key:t,avatar:e.icon},{title:it((()=>[(0,a.Wm)("div",mt,[(0,a.Wm)("div",ct,(0,m.zw)(e.title),1),(0,a.Wm)("div",dt,[(0,a.Uk)((0,m.zw)(e.time_passed)+" ",1),(0,a.Wm)(d,{flat:"",dense:"",icon:"more_horiz"},{default:it((()=>[(0,a.Wm)(c,null,{default:it((()=>[(0,a.Wm)(l,null,{default:it((()=>[ut])),_:1})])),_:1})])),_:1})])])])),default:it((()=>[(0,a.Wm)(u,{rounded:"",outlined:"","stack-label":""},{control:it((()=>[(0,a.Wm)("div",pt,(0,m.zw)(e.content),1)])),_:2},1024)])),_:2},1032,["avatar"])))),128))])):((0,a.wg)(),(0,a.j4)("div",ht,[gt]))])),_:1},8,["items"])])])),_:1}))],64)})),bt={setup(){return{personId:""}},data(){return{loading:!1}},props:["data"],computed:{combined(){return this.$store.state.members.MemberSelected+this.personId}},watch:{combined:function(){this.$store.dispatch("members/getActivitiesTimeline")},data(e){}},mounted(){this.loading=!0,setTimeout((()=>{this.loading=!1}),1e3)}};var vt=s(1432),yt=s(3424),wt=s(3944),Wt=s(6115);bt.render=ft,bt.__scopeId="data-v-ef44268c";const _t=bt;L()(bt,"components",{QSkeleton:de.ZP,QCardSection:P.Z,QTimeline:vt.Z,QTimelineEntry:yt.Z,QBtn:q.Z,QPopupProxy:wt.Z,QBanner:H.Z,QField:Wt.Z});var $t=s(9350);const xt={style:{"margin-top":"50px","border-radius":"5px","padding-top":"30px","padding=left":"20px","background-color":"#EAEEFB"},ref:"svgElementContainer"};function Dt(e,t,s,i,o,r){return(0,a.wg)(),(0,a.j4)("div",xt,null,512)}var kt=s(949),St=s.n(kt);(0,x.Z)(),(0,D.oR)();const qt={name:"Chart",props:["data"],setup(){(0,x.Z)();const e=(0,D.oR)();return{store:e}},data(){return{chartReference:null,selectedRange:[],selectedData:[]}},watch:{data(e){null!=e&&this.renderChart(e)}},created(){},methods:{renderChart(e){this.chartReference||(this.chartReference=new(St())),this.chartReference.container(this.$refs.svgElementContainer).svgWidth(this.$refs.svgElementContainer.clientWidth-20).svgHeight(100).data(e).accessor((e=>new Date(e))).onBrush((e=>{this.$store.commit("members/SET_MAX_DATE",e.range[1].toLocaleDateString("fr-CA",{year:"numeric",month:"2-digit",day:"2-digit"})),this.$store.commit("members/SET_MIN_DATE",e.range[0].toLocaleDateString("fr-CA",{year:"numeric",month:"2-digit",day:"2-digit"})),this.selectedRange=e.range,this.selectedData=e.data})).render()}}};qt.render=Dt;const Mt=qt,Ct=((0,x.Z)(),(0,D.oR)()),Pt={name:"ScatterChart",components:{Chart:Mt,ActivitiesTimeline:_t},setup(){(0,x.Z)();const e=(0,D.oR)();return e.dispatch("members/getActivitiesTimeline"),e.dispatch("members/getActivitiesMapRange"),{all:(0,$.iH)(!0),selection:(0,$.iH)(["Birthday","Observation","Encounter","Condition","Immunization"]),store:e,personId:""}},data(){return{options:{},loading:!1,model:!1,scatter_chart:null,store:Ct,updates:null,chartReference:null,selectedRange:[],selectedData:[],timelineData:[],totalActivities:0}},computed:{summaryData(){return this.$store.state.members.summary[0]},gettersMap(){return this.$store.getters.allMap},mapData(){return this.$store.state.members.activitiesMap},combined(){return this.$store.state.members.selectedMaxDate+this.$store.state.members.selectedMinDate+this.selection},combineds(){return this.$store.state.members.MemberSelected+this.personId},addTotal(){return this.timelineData.length}},watch:{combineds:function(){this.$store.dispatch("members/getActivitiesTimeline"),this.$store.dispatch("members/getActivitiesMapRange")},"store.state.members.activitiesTimeline":function(){this.timelineData=this.$store.state.members.activitiesTimeline},"$store.state.members.activitiesMap":function(){var e=this.$store.state.members.activitiesMap.dates,t=this.$store.state.members.activitiesMap.sources,s=this.$store.state.members.activitiesMap.data,a=[],i=[],o=[];this.updates=this.$store.state.members.activitiesMap.AllDates,this.timelineData=this.$store.state.members.activitiesTimeline,t.forEach((function(t,s){a.push({textBaseline:"middle",top:100*(s+.5)/8+"%",text:t}),i.push({left:130,type:"category",boundaryGap:!1,data:e,top:100*s/8+5+"%",height:"0%"}),o.push({singleAxisIndex:s,coordinateSystem:"singleAxis",type:"scatter",data:[],symbolSize:function(e){return e>1e3?.01*e:e>100?.08*e:e>=10?.5*e:e>=3?3*e:7*e}})})),s.forEach((function(e){o[e[0]].data.push(e[1])}));let r={legend:{orient:"vertical",left:"left"},tooltip:{position:"top"},title:a,singleAxis:i,series:o,textStyle:{fontFamily:"Roboto",fontSize:6,fontStyle:"normal",fontWeight:"normal"}},n=document.getElementById("scatterChart");$t.B9(n),this.scatter_chart=$t.S1(n),this.options&&this.scatter_chart.setOption(r)},combined:function(){var e=[],t=0,s=this.$store.state.members.activitiesMap.dates.length;if(""!=this.$store.state.members.selectedMaxDate&&""!=this.$store.state.members.selectedMinDate){t=this.$store.state.members.activitiesMap.dates.indexOf(this.$store.state.members.selectedMinDate),t<0&&(t=0);s=this.$store.state.members.activitiesMap.dates.indexOf(this.$store.state.members.selectedMaxDate);s>this.$store.state.members.activitiesMap.dates.length&&(s=this.$store.state.members.activitiesMap.dates.length);var a=this.$store.state.members.activitiesMap.dates.slice(t,s),i=this.$store.state.members.activitiesMap.sources;const e=this.$store.state.members.selectedMinDate,o=this.$store.state.members.selectedMaxDate;this.timelineData=this.$store.state.members.activitiesTimeline.filter((function(t){return t.filter<=o&&t.filter>=e}))}else{a=this.$store.state.members.activitiesMap.dates,i=this.$store.state.members.activitiesMap.sources;var o=[],r=[],n=[];this.timelineData=this.$store.state.members.activitiesTimeline}var l=Object.values(this.selection),m=JSON.parse(JSON.stringify(this.timelineData));this.timelineData=m.filter((function(e){return l.includes(e.activity_source)}));for(var c=0;c<i.length;c++){const a=this.$store.state.members.activitiesMap.data.length/i.length;l.includes(i[c])&&(e=e.concat(this.$store.state.members.activitiesMap.data.slice(t+c*a,s+c*a)))}o=[],r=[],n=[];this.updates=this.$store.state.members.activitiesMap.AllDates,i.forEach((function(e,t){o.push({textBaseline:"middle",top:100*(t+.5)/8+"%",text:e}),r.push({left:130,type:"category",boundaryGap:!1,data:a,top:100*t/8+5+"%",height:"0%"}),n.push({singleAxisIndex:t,coordinateSystem:"singleAxis",type:"scatter",data:[],symbolSize:function(e){return e>1e3?.01*e:e>100?.08*e:e>=10?.5*e:e>=3?3*e:7*e}})})),e.forEach((function(e){n[e[0]].data.push(e[1])}));let d={tooltip:{position:"top"},title:o,singleAxis:r,series:n,textStyle:{fontFamily:"Roboto",fontSize:6,fontStyle:"normal",fontWeight:"normal"}},u=document.getElementById("scatterChart");$t.B9(u),this.scatter_chart=$t.S1(u),this.options&&this.scatter_chart.setOption(d)}},methods:{},mounted(){this.loading=!0,setTimeout((()=>{this.loading=!1}),1e3)}};var Zt=s(1420),jt=s(9721),Qt=s(9754),Et=s(2064);Pt.render=tt,Pt.__scopeId="data-v-fb3b5886";const At=Pt;L()(Pt,"components",{QCard:C.Z,QCardSection:P.Z,QCheckbox:Zt.Z,QBadge:jt.Z,QSpinner:Qt.Z,QSlider:Et.Z});const Tt=(0,a.aZ)({name:"PageIndex",components:{Header:N,UserProfile:pe,Summary:Ue,ActivityMap:At},mounted(){console.log("Begin commit from user.vue"),this.$store.commit("members/SET_SELECTED_MEMBER",this.$route.params.id),console.log(this.$route.params.id),console.log("End commit from user.vue")},watch:{"this.$route.params.id":function(){this.$store.commit("members/SET_SELECTED_MEMBER",this.$route.params.id),console.log("User watch")}}});var It=s(4379);Tt.render=l,Tt.__scopeId="data-v-9ce66932";const zt=Tt;L()(Tt,"components",{QPage:It.Z})},1105:(e,t,s)=>{e.exports=s.p+"img/timeline-empty-state.913d3982.svg"}}]);