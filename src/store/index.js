import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loggingstatus:0 ,
    loginList:[]
  },
  mutations: {
    setLoggingstatus(state,loggingstatus){
      state.loggingstatus=loggingstatus
    }, setLoginList(state,loginList){
      state.loginList=loginList
    }
  },
  actions: {
  },
  modules: {
  }
})
