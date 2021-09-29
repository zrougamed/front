/* ToDo : work on Vue Call in the mutations , no yet implemented */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-unsafe-return */

import { api } from '../../boot/axios'
import { LocalStorage } from "quasar";


const state = {
  count : 0,
  communityTable : [],
  communityGraph : null,
  dataGraph : {edges:[],nodes:[]},
  selectedMinDate: '',
  selectedMaxDate: '',
  MemberSelected: "",
  searchOptions: [],
  similarData: [
  ],
  membersData: [
    
  ],
  mergeData: [
    {
      primary: {
        profile_img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGZGbRNgG_g82yO7ammcXwvtEUDz-0fFxM5_aUUkJoCWT9Q5VBR3cTO9QsPJ4VW1nT0ZM&usqp=CAU',
        name: 'Jon Herke',
        information: [
          {
            type: "",
            content: '',
            icon: ''
          },
          {
            type: "",
            content: "",
            icon: ''
          },
          {
            type: "",
            content: '',
            icon: ''
          },
          {
            type: "",
            content: '',
            icon: ''
          },
          {
            type: "",
            content: '',
            icon: ''
          },
          {
            type: "Discord",
            content: 'yuz101',
            icon: 'fab fa-discord'
          },
          {
            type: "Email",
            content: 'yuz101@ucsd.edu',
            icon: 'fas fa-envelope-square',
            count: 4,
          },
          {
            type: "",
            content: '',
            icon: ''
          },
          {
            type: "",
            content: '',
            icon: ''
          },
          {
            type: "",
            content: '',
            icon: ''
          },
        ],
        joined_date: 'N/A',
        totalActivities: 0,
        lastSeen: 'N/A day',
        interestScore: 'N/A',
        engagementScore: 0,
      },
      members: [
        {
          profile_img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGZGbRNgG_g82yO7ammcXwvtEUDz-0fFxM5_aUUkJoCWT9Q5VBR3cTO9QsPJ4VW1nT0ZM&usqp=CAU',
          name: 'Jon Herke',
          information: [
            {
              type: "",
              content: '',
              icon: ''
            },
            {
              type: "",
              content: "",
              icon: ''
            },
            {
              type: "",
              content: '',
              icon: ''
            },
            {
              type: "",
              content: '',
              icon: ''
            },
            {
              type: "",
              content: '',
              icon: ''
            },
            {
              type: "Discord",
              content: 'yuz101',
              icon: 'fab fa-discord'
            },
            {
              type: "Email",
              content: [
                {
                  label: 'yuz101@ucsd.edu',
                  icon: 'fas fa-envelope-square',
                  children: [
                    {
                      label: 'kevin101@ucsd.edu',
                    },
                    {
                      label: 'aven@ucsd.edu',
                    },
                    {
                      label: 'steven@ucsd.edu',
                    }
                  ]
                }
              ],
            },
            {
              type: "",
              content: '',
              icon: ''
            },
            {
              type: "",
              content: '',
              icon: ''
            },
            {
              type: "",
              content: '',
              icon: ''
            },
          ],
          joined_date: 'N/A',
          totalActivities: 0,
          lastSeen: 'N/A day',
          interestScore: 'N/A',
          engagementScore: 0,
        },
        {
          type: "Person",
          profile_img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGZGbRNgG_g82yO7ammcXwvtEUDz-0fFxM5_aUUkJoCWT9Q5VBR3cTO9QsPJ4VW1nT0ZM&usqp=CAU',
          name: 'Jon Herke',
          information: [
            {
              type: "",
              content: '',
              icon: ''
            },
            {
              type: "",
              content: "",
              icon: ''
            },
            {
              type: "",
              content: '',
              icon: ''
            },
            {
              type: "",
              content: '',
              icon: ''
            },
            {
              type: "",
              content: '',
              icon: ''
            },
            {
              type: "Discord",
              content: 'yuz101',
              icon: 'fab fa-discord'
            },
            {
              type: "Email",
              content: [
                {
                  label: 'yuz101@ucsd.edu',
                  icon: 'fas fa-envelope-square',
                  children: [
                    {
                      label: 'kevin101@ucsd.edu',
                    },
                    {
                      label: 'aven@ucsd.edu',
                    },
                    {
                      label: 'steven@ucsd.edu',
                    }
                  ]
                }
              ],
            },
            {
              type: "",
              content: '',
              icon: ''
            },
            {
              type: "",
              content: '',
              icon: ''
            },
            {
              type: "",
              content: '',
              icon: ''
            },
          ],
          joined_date: 'N/A',
          totalActivities: 0,
          lastSeen: 'N/A day',
          interestScore: 'N/A',
          engagementScore: 0,
        },
        {
          type: "Person",
          profile_img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGZGbRNgG_g82yO7ammcXwvtEUDz-0fFxM5_aUUkJoCWT9Q5VBR3cTO9QsPJ4VW1nT0ZM&usqp=CAU',
          name: 'Jon Herke',
          information: [
            {
              type: "",
              content: '',
              icon: ''
            },
            {
              type: "",
              content: "",
              icon: ''
            },
            {
              type: "",
              content: '',
              icon: ''
            },
            {
              type: "",
              content: '',
              icon: ''
            },
            {
              type: "",
              content: '',
              icon: ''
            },
            {
              type: "Discord",
              content: 'yuz101',
              icon: 'fab fa-discord'
            },
            {
              type: "Email",
              content: [
                {
                  label: 'yuz101@ucsd.edu',
                  icon: 'fas fa-envelope-square',
                  children: [
                    {
                      label: 'kevin101@ucsd.edu',
                    },
                    {
                      label: 'aven@ucsd.edu',
                    },
                    {
                      label: 'steven@ucsd.edu',
                    }
                  ]
                }
              ],
            },
            {
              type: "",
              content: '',
              icon: ''
            },
            {
              type: "",
              content: '',
              icon: ''
            },
            {
              type: "",
              content: '',
              icon: ''
            },
          ],
          joined_date: 'N/A',
          totalActivities: 0,
          lastSeen: 'N/A day',
          interestScore: 'N/A',
          engagementScore: 0,
        },
      ],
      accounts: [
        {
          type: "Email",
          content: "yuz101@ucsd.edu",
          icon: "",
        },
        {
          type: "Github",
          content: "yuz101",
          icon: "",
        },
      ]
    },
    {
      primary: {
        type: "Person",
        profile_img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGZGbRNgG_g82yO7ammcXwvtEUDz-0fFxM5_aUUkJoCWT9Q5VBR3cTO9QsPJ4VW1nT0ZM&usqp=CAU',
        name: 'Jon Herke',
        information: [
          {
            type: "",
            content: '',
            icon: ''
          },
          {
            type: "",
            content: "",
            icon: ''
          },
          {
            type: "",
            content: '',
            icon: ''
          },
          {
            type: "",
            content: '',
            icon: ''
          },
          {
            type: "",
            content: '',
            icon: ''
          },
          {
            type: "Discord",
            content: 'yuz101',
            icon: 'fab fa-discord'
          },
          {
            type: "Email",
            content: 'yuz101@ucsd.edu',
            icon: 'fas fa-envelope-square',
            count: 3,
          },
          {
            type: "",
            content: '',
            icon: ''
          },
          {
            type: "",
            content: '',
            icon: ''
          },
          {
            type: "",
            content: '',
            icon: ''
          },
        ],
        joined_date: 'N/A',
        totalActivities: 0,
        lastSeen: 'N/A day',
        interestScore: 'N/A',
        engagementScore: 0,
      },
      members: [
        {
          type: "Person",
          profile_img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGZGbRNgG_g82yO7ammcXwvtEUDz-0fFxM5_aUUkJoCWT9Q5VBR3cTO9QsPJ4VW1nT0ZM&usqp=CAU',
          name: 'Jon Herke',
          information: [
            {
              type: "",
              content: '',
              icon: ''
            },
            {
              type: "",
              content: "",
              icon: ''
            },
            {
              type: "",
              content: '',
              icon: ''
            },
            {
              type: "",
              content: '',
              icon: ''
            },
            {
              type: "",
              content: '',
              icon: ''
            },
            {
              type: "Discord",
              content: 'yuz101',
              icon: 'fab fa-discord'
            },
            {
              type: "Email",
              content: [
                {
                  label: 'yuz101@ucsd.edu',
                  icon: 'fas fa-envelope-square',
                  children: [
                    {
                      label: 'kevin101@ucsd.edu',
                    },
                    {
                      label: 'aven@ucsd.edu',
                    },
                    {
                      label: 'steven@ucsd.edu',
                    }
                  ]
                }
              ],
            },
            {
              type: "",
              content: '',
              icon: ''
            },
            {
              type: "",
              content: '',
              icon: ''
            },
            {
              type: "",
              content: '',
              icon: ''
            },
          ],
          joined_date: 'N/A',
          totalActivities: 0,
          lastSeen: 'N/A day',
          interestScore: 'N/A',
          engagementScore: 0,
        },
      ],
      accounts: [
        //if empty
      ]
    },
  ],
  PersonData: [],
  userProfile: [
    {
      profile_img: 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y',
      name: '',
      information: [
        {
          type: "",
          content: '',
          icon: ''
        },
        {
          type: "",
          content: "",
          icon: ''
        },
        {
          type: "",
          content: '',
          icon: ''
        },
        {
          type: "",
          content: '',
          icon: ''
        },
        {
          type: "",
          content: '',
          icon: ''
        },
        {
          type: "",
          content: '',
          icon: ''
        },
        {
          type: "",
          content: [],
        },
        {
          type: "",
          content: '',
          icon: ''
        },
        {
          type: "",
          content: '',
          icon: ''
        },
        {
          type: "",
          content: '',
          icon: ''
        },
      ],
      about: '',
      topic_interested: [],
      joined_date: 'N/A',
      member_for: 'N/A',
      isEmpty: true,
    },
  ],
  summary: [
    {
      totalActivities: 0,
      firstSeen: 'N/A years',
      lastSeen: 'N/A day',
      interestScore: 'N/A',
      engagementScore: 0,
    }
  ],
  activitiesMap: {
    dates: [],
    sources: [],
    data: [],
    AllDates: [],
    isEmpty: true,
    forum: '',
    discord: '',
    github: '',
    hubspot: '',
    salesforce: '',
  },
  activitiesTimeline: [],
}

const getters = {
  getCommunityTable: (state) => state.communityTable,
  getCommunityGraph: (state) => state.communityGraph,
  getUserGraph: (state) => state.dataGraph,
  getminDate: (state) => state.selectedMinDate,
  getmaxDate: (state) => state.selectedMaxDate,
  selectedMember: (state) => state.MemberSelected,
  allProfile: (state) => state.userProfile,
  allSummary: (state) => state.summary,
  allMap: (state) => state.activitiesMap,
  allTimeline: (state) => state.activitiesTimeline,
  allMembers: (state) => state.membersData,
  allSimilarMembers: (state) => state.similarData,
  allUsers: (state) => state.searchOptions,
  getSearchPerson: (state) => (personName) => {
    state.searchOptions.filter(obj => {
      if (obj.label == personName) { return obj.id; }
    })
    // return state.searchOptions.find(person => person.label == personName)
  },
}

const actions = {
  editProfile({ commit }, payload) {
    var body = new FormData();
    body.append("person_id", state.MemberSelected);
    body.append("name", JSON.stringify(payload.name));
    body.append("pronouns", JSON.stringify(payload.pronouns));
    body.append("title", JSON.stringify(payload.title));
    body.append("company", JSON.stringify(payload.company));
    body.append("city", JSON.stringify(payload.city));
    body.append("country", JSON.stringify(payload.country));
    body.append("bio", JSON.stringify(payload.about));
    body.append("linkedin", JSON.stringify(payload.linkedin));
    // body.append("person_id", state.MemberSelected);
    // body.append("name", payload.name);
    // body.append("pronouns", payload.pronouns);
    // body.append("title", payload.title);
    // body.append("company", payload.company);
    // body.append("city", payload.city);
    // body.append("country", payload.country);
    // body.append("bio", payload.about);
    // body.append("linkedin", payload.linkedin);

    // console.log("Vuex")
    // console.log(payload.country)

    const token = localStorage.getItem("access_token");
    // console.log("body bottom")
    // console.log(body)

    api.post('/users/editOneUser', body, { headers: { 'Authorization': `Bearer ${token}` } })
      .then((response) => {
        commit('SET_USER_PROFILE', response.data)
      })
      .catch((e) => {
        console.log(e);
        LocalStorage.remove("login");
        this.$router.push('/login')

        // TODO log class to catch error
      })
  },
  getUserProfile({ commit }) {
    var body = new FormData();
    body.append("person_id", state.MemberSelected);
    body.append("minDate", "2021-06-30");
    body.append("maxDate", "2021-08-01");
    const token = localStorage.getItem("access_token");
    api.post('/users/userProfile', body, { headers: { 'Authorization': `Bearer ${token}` } })
      .then((response) => {
        commit('SET_USER_PROFILE', response.data)
      })
      .catch((e) => {
        LocalStorage.remove("login");
        this.$router.push('/login')

      })
  },
  getUserGraph({ commit }) {
    var body = new FormData();
    body.append("person_id", state.MemberSelected);
    const token = localStorage.getItem("access_token");
    api.post('/graph', body, { headers: { 'Authorization': `Bearer ${token}` } })
      .then((response) => {
        commit('SET_USER_GRAPH', response.data)
      })
      .catch((e) => {
        LocalStorage.remove("login");
        this.$router.push('/login')
      })
  },
  getCommunityGraph({ commit },obj) {
    var body = new FormData();
    body.append("vertices", obj.vertices);
    body.append("edges", obj.edges);
    const token = localStorage.getItem("access_token");
    api.post('/community', body, { headers: { 'Authorization': `Bearer ${token}` } })
      .then((response) => {
        commit('SET_COM_GRAPH', response.data)
      })
      .catch((e) => {
        LocalStorage.remove("login");
        this.$router.push('/login')
      })
  },
  getActivitiesTimeline({ commit }) {
    var body = new FormData();
    body.append("person_id", state.MemberSelected);
    body.append("minDate", "1971-01-01"); // this only works with really old time the date after 2021-06-30 are gone
    body.append("maxDate", "2021-08-01");
    const token = localStorage.getItem("access_token");
    api.post('/users/userTimeline', body, { headers: { 'Authorization': `Bearer ${token}` } })
      .then((response) => {
        commit('SET_ACTIVITIESTIMELINE', response.data)
      })
      .catch((e) => {
        LocalStorage.remove("login");
        this.$router.push('/login')
        // console.log(e);
        // TODO log class to catch error
      })
  },
  getSummary({ commit }) {
    var body = new FormData();
    body.append("person_id", state.MemberSelected);
    const token = localStorage.getItem("access_token");
    api.post('/users/userSummary', body, { headers: { 'Authorization': `Bearer ${token}` } })
      .then((response) => {
        commit('SET_SUMMARY', response.data)
      })
      .catch((e) => {
        LocalStorage.remove("login");
        this.$router.push('/login')
      })
  },
  getActivitiesMap({ commit }) {
    var body = new FormData();
    // console.log("state.MemberSelected");
    // console.log(state.MemberSelected);

    body.append("person_id", state.MemberSelected);

    body.append("minDate", "2021-01-01");
    body.append("maxDate", "2021-08-03");
    const token = localStorage.getItemItem("access_token");
    api.post('/users/userActivities', body, { headers: { 'Authorization': `Bearer ${token}` } })
      .then((response) => {
        commit('SET_ACTIVITIESMAP', response.data)
      })
      .catch((e) => {
        LocalStorage.remove("login");
        this.$router.push('/login')
      })
  },
  getMembersData({ commit }) {
    // var body = new FormData();
    const token = localStorage.getItem("access_token");
    // console.log(token);
    api.post('/users/membersData', {}, { headers: { 'Authorization': `Bearer ${token}` } })
      .then((response) => {
        commit('SET_MEMBERSDATA', response.data)
      })
      .catch((e) => {
        LocalStorage.remove("login");
        this.$router.push('/login')
      })
  },
  getAllPersons({ commit }) {
    const token = localStorage.getItem("access_token");
    api.post('/users/searchMembersData', {}, { headers: { 'Authorization': `Bearer ${token}` } })
      .then((response) => {
        commit('SET_SEARCHOPTIONS', response.data)
      })
      .catch((e) => {
        LocalStorage.remove("login");
        this.$router.push('/login')
      })
  },
  updateAttributes({ commit }, payload) {
    var body = new FormData();
    body.append("person_id", state.MemberSelected);
    body.append('object', payload.object)
    body.append('value', payload.value)
    const token = localStorage.getItem("access_token");
    api.post("/users/updateAttributes", body, { headers: { 'Authorization': `Bearer ${token}` } })
      .then((response) => {
        commit('SET_USER_PROFILE', response.data)
      })
      .catch((e) => {
        LocalStorage.remove("login");
        this.$router.push('/login')
      })
  },
  getActivitiesMapRange({ commit }) {
    var body = new FormData();
    // console.log(state.MemberSelected);

    body.append("person_id", state.MemberSelected);

    // body.append("minDate", "2021-01-01");
    // body.append("maxDate", "2021-08-03");
    const token = localStorage.getItem("access_token");
    api.post('/users/getUserActivities', body, { headers: { 'Authorization': `Bearer ${token}` } })
      .then((response) => {
        commit('SET_ACTIVITIESMAP', response.data)
      })
      .catch((e) => {
        LocalStorage.remove("login");
        this.$router.push('/login')
      })
  },
  getSimilarMembersData({ commit }, payload) {
    var body = new FormData();
    body.append("person_id", state.MemberSelected);
    const token = localStorage.getItem("access_token");
    // console.log(token);
    api.post('/users/similarMembersData', body, { headers: { 'Authorization': `Bearer ${token}` } })
      .then((response) => {
        commit('SET_SIMILAR_MEMBERSDATA', response.data)
      })
      .catch((e) => {
        LocalStorage.remove("login");
        this.$router.push('/login')
      })
  },

}

const mutations = {
  SET_USER_GRAPH(state, response) {
    state.dataGraph = response
  },
  SET_COM_GRAPH(state, response) {
    state.communityGraph = response["graph"]
    state.communityTable = response["table"]
    state.count += 1  // was used for debugging
  },
  SET_SELECTED_MEMBER(state, response) {
    state.MemberSelected = response
  },
  SET_MAX_DATE(state, response) {
    state.selectedMaxDate = response
  },
  SET_MIN_DATE(state, response) {
    state.selectedMinDate = response
  },
  SET_USER_PROFILE(state, response) {
    state.userProfile = response
  },
  SET_ACTIVITIESTIMELINE(state, response) {
    state.activitiesTimeline = response
  },
  SET_SUMMARY(state, response) {
    state.summary = response
  },
  SET_ACTIVITIESMAP(state, response) {
    state.activitiesMap = response
  },
  SET_MEMBERSDATA(state, response) {
    state.membersData = response
  },
  SET_PERSONDATA(state, response) {
    state.PersonData = response
  },
  SET_SEARCHOPTIONS(state, response) {
    state.searchOptions = response
  },
  SET_SIMILAR_MEMBERSDATA(state, response) {
    state.similarData = response
  },

}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}


