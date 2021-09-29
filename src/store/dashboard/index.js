/* ToDo : work on Vue Call in the mutations , no yet implemented */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { api } from '../../boot/axios'

const state = {
    geoMap: null,
    race:null,
    patients: "N/A",
    providers: "N/A",
    statisticTable: [],
}

const getters = {
  // allDashboard: (state) => state.dashboard,

}

const actions = {
  getDashboard({ commit }) {
    var body = new FormData();
    const token = localStorage.getItem("access_token");
    api.post('/dashboard',body, { headers: { 'Authorization': `Bearer ${token}` } })
      .then((response) => {
        commit('SET_DASHBOARD', response.data)
      })
      .catch((e) => {
        console.log(e);
        //todo: log class to catch error
      })
  },
 
}

const mutations = {
  SET_DASHBOARD(state, response) {
    state.geoMap = response["geoMap"]
    state.race = response["race"]
    state.patients = response["patients"]
    state.providers = response["providers"]
    state.statisticTable = response["statisticTable"]

  },
  
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}