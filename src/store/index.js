import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token:'',
    userinfo:JSON.parse(sessionStorage.getItem("userinfo"))
  },
  mutations: {
    //setter
    SET_TOKEN:(state, token) => {
      state.token = token
      localStorage.setItem("token",token)
    },
    SET_USERINFO:(state, userinfo) => {
      state.userinfo = userinfo
      sessionStorage.setItem("userinfo", JSON.stringify(userinfo))
    },
    REMOVE_INFO:(state) =>{
      state.token = ''
      state.userInfo = {}
      localStorage.setItem("token",'')
      sessionStorage.setItem("userinfo",JSON.stringify(''))
    }
  },
  getters:{
    getUser: state => {
      return state.userinfo
    },

    gettoken: state => {
      return state.token
    }

  },
  actions: {
  },
  modules: {
  }
})
