import { createStore } from 'vuex'
import axios from 'axios'
// import {toast} from 'vue3-toastify'
const apiURL = 'https://dlozify.onrender.com/'
export default createStore({
  state: {
    users:null,
    user:null,
    posts:null,
    comments:null
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
    },
    setComments(state,payload){
      state.comments=payload
    }
  },
  actions: {
    
    async addComment(context,info){
      let {data}=await axios.post(`${apiURL}comment/comment`,info)
      console.log(data);
      alert("Comment added !!")
    },
    async getPosts({commit}){
      try{
        const {data}= await axios.get(`${apiURL}posts`)
commit('setPosts',data)
      }catch(e){
        console.log(`Failed to get posts: ${e.message}`);
      }
    },
    
      async getPost({commit},id){
        try{
          const {data} =await axios.get(`${apiURL}posts/${id}`)
            commit('setPosts', data.data);
            console.log(data);
            
        }catch(e){
          console.log(`Failed to fetch post: ${e.message}`);
        
        
        }
      },
    async getUsers({commit}){
      try{
        const {data} =await axios.get(`${apiURL}users`)
          commit('setUsers', data);
          console.log(data);
          
      }catch(e){
        console.log(`Failed to fetch users: ${e.message}`);
      
      
      }
      },
      async getLimit({commit}){
        try{
          const {data} =await axios.get(`${apiURL}users/limit`)
            commit('setUsers', data);
            console.log(data);
            
        }catch(e){
          console.log(`Failed to fetch users: ${e.message}`);
        
        
        }
        },
      async getUser({commit},id){
        try{
          const data =await axios.get(`${apiURL}users/${id}`)
            commit('setUsers', data);
        }catch(e){
          console.log(`Failed to fetch user: ${e.message}`);
        
        
        }
      },
      
      async addUser(context,info){
      let {data}=await axios.post(`${apiURL}users/register`,info)
      console.log(data);
      // let addedUser =await data.json()
      // commit('setUser')
      alert("User registered !!")
    },
    async addPost(context,info){
      let {data}=await axios.post(`${apiURL}posts/post`,info)
      console.log(data);
      // let addedUser =await data.json()
      // commit('setUser')
      alert("User registered !!")
    },
    async loginUser(context,info){
      let {data} =await axios.post(`${apiURL}users/login`,info)
      console.log(data);
      alert("User logged successfully !")
    },
    async EditUser({commit},id){
      let {data} =await axios.patch(`${apiURL}users/${id}`)
      commit('setUsers',data);
      console.log(data);
      alert("User updated successfully !")
    },
    async DeleteUser({commit},id){
      let {data} =await axios.delete(`${apiURL}users/${id}`)
      commit('setUsers',data.data);
      console.log(data);
      alert("User deleted successfully !")
    }
    },
  
  modules: {
  }
})
