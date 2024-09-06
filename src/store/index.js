/*eslint-disable*/
import { createStore } from 'vuex'
import axios from 'axios'
import {toast} from 'vue3-toastify'
import "vue3-toastify/dist/index.css";
import router from '@/router';

axios.defaults.withCredentials =true
// import {useCookies} from 'vue-cookies'


const apiURL = 'https://dlozify.onrender.com/'
// const apiURL = 'http://localhost:5009/'
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
    
    async addComment({commit},info){
      try{
      let {data}=await axios.post(`${apiURL}comment/comment`,info)
      console.log(data);
      commit('setComments',data)
      alert("Comment added !!")
      }catch(e){
        console.log(`Failed to add comment: ${e.message}`)
      }
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
            commit('setPosts', data);
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
      
      async addUser({commit},info){
        try{

        
      let {data}=await axios.post(`${apiURL}users/register`,info)
      console.log(data);
      // let addedUser =await data.json()
      commit('setUser')
      toast("Success !! User added .", {
        "theme": "dark",
        "type": "success",
        "position": "top-center",
        "dangerouslyHTMLString": true
      })
      }catch(e){
        toast(`Failed to add user: ${e.message}`, {
          "theme": "dark",
          "type": "error",
          "position": "top-center",
          "dangerouslyHTMLString": true
        })
          // console.log(`Failed to add user: ${e.message}`);
      }
    },
    async addPost({commit},info){
      let {data}=await axios.post(`${apiURL}posts/post`,info)
      console.log(data);
      // let addedUser =await data.json()
      commit('setPost',data)
      alert("Post added  !!")
    },
    async loginUser({commit},info){
      try{
        let {data} =await axios.post(`${apiURL}users/login`,info)
      console.log(data);
      commit('setUser',data)
      // $cookies.set('token',data.token)
      toast(` ${data.message} , Token :${data.token} `, {
        "theme": "dark",
        "type": "success",
        "position": "top-center",
        "dangerouslyHTMLString": true
      })
      // router.push('/messages')
      }catch(e){
        toast(` ${data}`, {
          "theme": "dark",
          "type": "error",
          "position": "top-center",
          "dangerouslyHTMLString": true
        })
      }
      // router.push('/')
      
    },
    async EditUser({commit},info){
      let {data} =await axios.patch(`${apiURL}users/${id}`,info)
      commit('setUsers',data);
      console.log(data);
      alert("User updated successfully !")
    },
    async DeleteUser(context,id){
      let {data} =await axios.delete(`${apiURL}users/${id}`)
      // commit('setUsers',data);
      console.log(data);
      // alert("User deleted successfully !")
      // router.push('/settings')
      
    },
    async DeletePost(context,id){
      let {data} =await axios.delete(`${apiURL}posts/${id}`)
      
      console.log(data);
      
      
    }
    },
  
  modules: {
  }
})
