import { createStore } from 'vuex'
import axios from 'axios'
// import {toast} from 'vue3-toastify'
const apiURL = 'https://dlozify.onrender.com/'
export default createStore({
  state: {
    users:null,
    user:[]
  },
  getters: {

  },
  mutations: {
    setUsers(state,payload){
      state.users=payload
    }
  },
  actions: {
    async getUsers({commit}){
      try{
        const datap =await axios.get(`${apiURL}users`)
          commit('setUsers', datap.data);
      }catch(e){
        console.log(`Failed to fetch products: ${e.message}`);
      
      
      }
      }
    },
  
  modules: {
  }
})
