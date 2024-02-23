import { createStore } from 'vuex'
import axios from 'axios'
import sweet from 'sweetalert'
import {useCookies} from 'vue3-cookies'
const {cookies} = useCookies()
import router from '@/router'
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
    }

  },
  actions: {
    async register(context, payload) { //post is when adding a user
      try {
        let {msg} = (await axios.post(`${lifeURL}/users/register`, payload)).data
          if(msg) {
        context.dispatch('fetchUsers')
        sweet({
          title: 'Registration',
          text: msg,
          icon: "success",
          timer: 2000
        })

        router.push({ name:'login'})
      }
      }catch(e) {
        sweet({
          title: 'Error',
          text: 'Please try again later',
          icon: "error",
          timer: 2000
        })
      }
    }
    async fetchUsers(context) {
      try{
        let {results} = (await axios.get(`${lifeURL}users`)).data
        if(results) {
          context.commit('setUsers', results)
        }
      }catch(e) {
        sweet({
          title: 'Error',
          text: 'An error occurred when retrieving users',
          icon: "error",
          timer: 2000
        })
      }
    }
  },
  modules: {
  }
})
