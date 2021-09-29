/* ToDo : work on Vue Call in the mutations , no yet implemented */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-unsafe-return */

import { api } from '../../boot/axios'
import { LocalStorage } from "quasar";


const state = {
  membersData: [],
}

const getters = {
  allMembers: (state) => state.membersData,
}

const actions = {
  getMembersData({ commit }) {
    // var body = new FormData();
    const token = localStorage.getItem("access_token");
    // console.log(token);
    api.post('/providers/membersData', {}, { headers: { 'Authorization': `Bearer ${token}` } })
      .then((response) => {
        commit('SET_MEMBERSDATA', response.data)
      })
      .catch((e) => {
        // console.log(e);
        //todo: log class to catch error

        LocalStorage.remove("login");
        this.$router.push('/login')
      })
  },
  

}

const mutations = {
 
  SET_MEMBERSDATA(state, response) {
    state.membersData = response
  },

}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}


