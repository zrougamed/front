(self["webpackChunkPatient360App"]=self["webpackChunkPatient360App"]||[]).push([[392],{9392:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>x});var r=t(3673);const s=(0,r.HX)("data-v-2e59e966"),i=s(((e,a,t,i,l,n)=>{const o=(0,r.up)("MembersTable"),m=(0,r.up)("q-page");return(0,r.wg)(),(0,r.j4)(m,{class:"memebers"},{default:s((()=>[(0,r.Wm)("div",null,[(0,r.Wm)(o)])])),_:1})}));var l=t(2942);const n=(0,r.Wm)("div",{class:"header"},"Patients",-1),o=(0,r.Wm)("div",{class:"members row justify-between"},null,-1),m={key:0},c={key:1,class:"row items-center"},u={class:"name"};function d(e,a,t,s,i,d){const b=(0,r.up)("q-inner-loading"),p=(0,r.up)("q-img"),g=(0,r.up)("q-avatar"),h=(0,r.up)("q-td"),f=(0,r.up)("q-tr"),H=(0,r.up)("q-table");return(0,r.wg)(),(0,r.j4)("div",null,[n,o,(0,r.Wm)(H,{class:"my-sticky-header-table","row-key":"name","no-data-label":"No Data Available ","rows-per-page-label":"Showing results",rows:d.membersData,columns:i.columns,"filter-method":d.myfilterMethod,loading:i.loading,pagination:i.paginationControl,"visible-columns":s.visibleColumns},{loading:(0,r.w5)((()=>[(0,r.Wm)(b,{showing:"",color:"primary"})])),body:(0,r.w5)((e=>[(0,r.Wm)(f,{onClick:a=>d.browseMember(e.row.id),props:e,style:{cursor:"pointer !important"}},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.j4)(r.HY,null,(0,r.Ko)(e.cols,(a=>((0,r.wg)(),(0,r.j4)(h,{key:a.name,props:e},{default:(0,r.w5)((()=>["name_image"!=a.name?((0,r.wg)(),(0,r.j4)("span",m,(0,l.zw)(a.value),1)):(0,r.kq)("",!0),"name_image"==a.name?((0,r.wg)(),(0,r.j4)("div",c,[(0,r.Wm)(g,{size:"38px"},{default:(0,r.w5)((()=>[(0,r.Wm)(p,{src:e.row.name_image[1]},null,8,["src"])])),_:2},1024),(0,r.Wm)("div",u,(0,l.zw)(e.row.name_image[0]),1)])):(0,r.kq)("",!0)])),_:2},1032,["props"])))),128))])),_:2},1032,["onClick","props"])])),_:1},8,["rows","columns","filter-method","loading","pagination","visible-columns"])])}var b=t(9594),p=t(8825),g=t(7874);const h=(0,r.HX)("data-v-3df66b22");(0,r.dD)("data-v-3df66b22");const f=(0,r.Wm)("div",{class:"header"},"Members",-1),H=(0,r.Wm)("div",{class:"members row justify-between"},[(0,r.Wm)("div",{class:"row"})],-1);(0,r.Cn)();const w=h(((e,a,t,s,i,l)=>((0,r.wg)(),(0,r.j4)("div",null,[f,H])))),v={setup(){return{addPopup:(0,b.iH)(!1),mergePopup:(0,b.iH)(!1),filterPopup:(0,b.iH)(!1),name:(0,b.iH)(""),email:(0,b.iH)(""),tab:(0,b.iH)("community"),splitterModel:(0,b.iH)(20),community:(0,b.iH)(["core_members"]),channels:(0,b.iH)(["community","discord","hubspot","github","saleforce"]),location:(0,b.iH)(""),company:(0,b.iH)(""),step:(0,b.iH)(1),left:(0,b.iH)(!0),tableFilter:(0,b.iH)("all")}},data(){return{showAddition:!1}},methods:{allMember(){this.membersData=this.$store.state.members.membersData},communityMember(){var e;e=this.$store.state.members.membersData.filter((e=>e.activities>50));let a=[];return e.forEach((function(e){let t={};Object.keys(e).forEach((function(a){let r=e[a];t[a]=r})),a.push(t)})),a}},computed:{mergeData(){return this.$store.state.members.mergeData},membersData(){let e=[];return this.$store.state.members.membersData.forEach((function(a){let t={};Object.keys(a).forEach((function(e){let r=a[e];t[e]=r})),e.push(t)})),e}}};v.render=w,v.__scopeId="data-v-3df66b22";const y=v,D={components:{Header:y},setup(){(0,p.Z)();const e=(0,g.oR)();return e.dispatch("members/getMembersData"),{current:(0,b.iH)(1),addPopup:(0,b.iH)(!1),mergePopup:(0,b.iH)(!1),filterPopup:(0,b.iH)(!1),name:(0,b.iH)(""),email:(0,b.iH)(""),tab:(0,b.iH)("community"),splitterModel:(0,b.iH)(20),channels:(0,b.iH)(["community","discord","hubspot","github","saleforce"]),location:(0,b.iH)(""),company:(0,b.iH)(""),step:(0,b.iH)(1),left:(0,b.iH)(!0),tableFilter:(0,b.iH)("all"),community:(0,b.iH)([]),visibleColumns:(0,b.iH)(["name_image","SSN","Age","Race","Gender","MaritalStatus","HealthcareExpense","HealthcareCoverage"])}},data(){const e=(0,g.oR)();return{loading:!1,showAddition:!1,filter:{value:[]},paginationControl:{sortBy:null,descending:!1,page:1,rowsPerPage:25},columns:[{name:"name_image",required:!0,label:"NAME",align:"left",style:"min-width: 245px",field:e=>e.name_image,format:e=>`${e}`,sortable:!0},{name:"SSN",align:"left",label:"SSN",field:"SSN",sortable:!0},{name:"Age",align:"left",label:"Age",field:"Age",sortable:!0},{name:"Race",align:"left",label:"RACE",field:"Race",sortable:!0},{name:"Gender",align:"left",label:"GENDER",field:"Gender",sortable:!0},{name:"MaritalStatus",align:"left",label:"Marital Status",field:"MaritalStatus",sortable:!0},{name:"HealthcareExpense",align:"left",label:"HealthcareExpense",field:"HealthcareExpense",sortable:!0},{name:"HealthcareCoverage",align:"left",label:"HealthcareCoverage Member",field:"HealthcareCoverage",sortable:!0}],store:e}},computed:{membersData(){let e=[];return this.$store.state.members.membersData.forEach((function(a){let t={};Object.keys(a).forEach((function(e){let r=a[e];t[e]=r})),e.push(t)})),e},mergeData(){return this.$store.state.members.mergeData}},methods:{browseMember(e){this.$store.commit("members/SET_SELECTED_MEMBER",e),this.$router.push({name:"User",params:{id:e}})},myfilterMethod(){return console.log("Hello"),this.community.includes("core")?this.membersData.filter((e=>e.core)):this.community.includes("explore")?this.membersData.filter((e=>e.explore)):this.membersData}},mounted(){this.loading=!0,setTimeout((()=>{this.loading=!1}),1e3)}};var E=t(6429),M=t(6941),_=t(8186),k=t(3884),C=t(5096),S=t(4027),P=t(7518),W=t.n(P);D.render=d;const j=D;W()(D,"components",{QTable:E.Z,QInnerLoading:M.Z,QTr:_.Z,QTd:k.Z,QAvatar:C.Z,QImg:S.Z});const A=(0,r.aZ)({name:"PageIndex",components:{Header:y,MembersTable:j}});var q=t(4379);A.render=i,A.__scopeId="data-v-2e59e966";const x=A;W()(A,"components",{QPage:q.Z})}}]);