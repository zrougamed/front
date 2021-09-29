// import createPersistedState from 'vuex-persistedstate'
import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'
import discord from './discord'
import contacts from './contacts'
import members from './members'
import dashboard from './dashboard'
import providers from './providers'
import { LocalStorage } from 'quasar';

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      discord,
      contacts,
      members,
      dashboard,
      providers,
    },
    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    //plugins: [createPersistedState()]
    strict: process.env.DEBUGGING
  })
  return Store
})
