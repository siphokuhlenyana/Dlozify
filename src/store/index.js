import { createStore } from 'vuex'
import axios from 'axios'
// import {toast} from 'vue3-toastify'
const apiURL = 'https://dlozify.onrender.com/'
export default createStore({
  state: {
    users:null,
    user:null,
    posts:[]
  },
  getters: {

  },
  mutations: {
    setUsers(state,payload){
      state.users=payload
    },
    setUser(state,payload){
      state.user=payload
    },
    setPosts(state,payload){
      state.posts=payload
    }
  },
  actions: {
    async getPosts({commit}){
      try{
        const data= await axios.get(`${apiURL}posts`)
commit('setPosts',data)
      }catch(e){
        console.log(`Failed to get posts: ${e.message}`);
      }
    },
    async getUsers({commit}){
      try{
        const datap =await axios.get(`${apiURL}users`)
          commit('setUsers', datap.data);
      }catch(e){
        console.log(`Failed to fetch products: ${e.message}`);
      
      
      }
      },
      async getUser({commit},id){
        try{
          const data =await axios.get(`${apiURL}users/${id}`)
            commit('setUsers', data.data);
        }catch(e){
          console.log(`Failed to fetch products: ${e.message}`);
        
        
        }
      }
    },
  
  modules: {
  }
})
