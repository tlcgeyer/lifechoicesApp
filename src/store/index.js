import { createStore } from 'vuex'
import axios from 'axios;'
import sweet from 'sweetalert'
import {useCookies}  'vue3-cookies'
const {cookies} = useCookies()
const lifeURL = 'https://lifechoicesapp-kril.onrender.com/'



export default createStore({
  state: {
    users:null,
    user:null,
    product:null,
    products:null
  },
  getters: {
  },
  mutations: {
    setUsers(state,value) {
      state.users= value
    },
    setUser(state,value) {
      state.user= value
    },
    setProduct(state,value) {
      state.product= value
    },
    setProducts(state,value) {
      state.products= value
    },


  },
  actions: {
  },
  modules: {
  }
})
