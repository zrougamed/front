// import { api } from '../../boot/axios'

// const state = {
//   ContactsByCountry: [
//     // {
//     //   name: "UNITED STATES",
//     //   value: 120,
//     //   select: false
//     // },
//     // {
//     //   name: "INDIA",
//     //   value: 16,
//     //   select: false
//     // },
//     // {
//     //   name: "UNITED KINGDOM",
//     //   value: 11,
//     //   select: true
//     // },
//     // {
//     //   name: "CHINA",
//     //   value: 7,
//     //   select: false
//     // },
//     // {
//     //   name: "AUSTRALIA",
//     //   value: 6,
//     //   select: false
//     // }
//   ],
//   // ContactsByCountryColor: [
//   //   "#8ECAE6",
//   //   "#219EBC",
//   //   "#023047",
//   //   "#FFB703",
//   //   "#FB8500",
//   // ],
//   ContactsByTitle: [],
// }

// const getters = {
//   // functions fiter
//   countryData: (state) => state.ContactsByCountry.data,
//   countryColor: (state) => state.ContactsByCountryColor.color,
//   ContactsByTitle: (state) => state.ContactsByTitle,
// }

// const actions = {
//   // can be asycn
//   getContactByCountry({ commit }) {
//     api.get('/contacts/country')
//       .then((response) => {
//         commit('SET_CONTACT_BY_COUNTRY', response.data)
//       })
//       .catch((e) => {
//         console.log(e);
//         //todo: log class to catch error
//       })
//   },
//   // getContactByCountryColor({ commit }) {
//   //   api.get('/contacts/countryColor')
//   //     .then((response) => {
//   //       commit('SET_CONTACT_BY_COUNTRY_COLOR', response.data)
//   //     })
//   //     .catch((e) => {
//   //       console.log(e);
//   //       //todo: log class to catch error
//   //     })
//   // },
//   getContactsByTitle({ commit }) {
//     api.get('/contacts/title')
//       .then((response) => {
//         commit('SET_CONTACT_BY_INDUSTY', response.data)
//       })
//       .catch((e) => {
//         console.log(e);
//         //todo: log class to catch error
//       })
//   },
// }

// const mutations = {
//   // cannot be asycn
//   SET_CONTACT_BY_COUNTRY(state, response) {
//     state.ContactsByCountry = response
//   },
//   SET_CONTACT_BY_TITLE(state, response) {
//     state.ContactsByTitle = response
//   },
//   // SET_CONTACT_BY_COUNTRY_COLOR(state, response) {
//   //   state.ContactsByCountryColor = response
//   // },
// }
// export default {
//   namespaced: true,
//   state,
//   getters,
//   mutations,
//   actions
// }