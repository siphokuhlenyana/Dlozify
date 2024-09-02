<template>
    <div class="container">
        <div class="sidebar">
          <div class="logo">
            <img src="https://siphokuhlenyana.github.io/dlozify-pics/DloziLogo.png" alt="Logo"  />
           
          </div>
          <div class="sidebar-menu">
            <nav>
              <router-link to="/"><img src="https://siphokuhlenyana.github.io/dlozify-pics/home.png" alt="" width="100px" height="80px"></router-link>
            
              
            <li>
              <router-link to="/FeedsView"><img src="https://siphokuhlenyana.github.io/dlozify-pics/bookmark.png" alt="" width="100px" height="80px"></router-link>
             
            
            </li>
            <li>
              <router-link to="/notifications"><img src="https://siphokuhlenyana.github.io/dlozify-pics/notification.png" alt="" width="100px" height="80px"></router-link>
             
             
            </li>
            <li>
              <router-link to="/messages"><img src="https://siphokuhlenyana.github.io/dlozify-pics/email.png" alt="" width="100px" height="80px"> </router-link>
            
            </li>
            <li>
            <router-link to="/account" ><img src="https://siphokuhlenyana.github.io/dlozify-pics/account.png" alt="" width="100px" height="80px"></router-link>
            </li>
            <li>
            <router-link to="/about"><img src="https://siphokuhlenyana.github.io/dlozify-pics/information.png" alt="" width="100px" height="80px"></router-link>
            </li>
            <li>
             <router-link to="/settings"><img src="https://siphokuhlenyana.github.io/dlozify-pics/gear.png" alt="" width="100px" height="80px"></router-link>
            </li> 
           </nav>
          </div> 
        </div>
        <div class="main-content ">
    <!-- {{ $store.state.users }} -->
             
    <h2 class="display-1">User Management</h2>
     
      <table class="table-primary table-bordered border-primary" id="table" :style="{width:'800px',borderColor:'#A51196',borderWidth:'10px',borderStyle:'solid'}">
        <thead :style="{fontWeight:'1000',marginBottom:'1000px'}">
          <tr >
            <th >Profile</th>
            <th>Name</th>
            <th>User Role</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Bio</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.userID">
            <td><img :src="user.userProfile" alt="" width="80px"></td>
            <td :style="{textAlign:'center'}">{{ user.username }}</td>
            <td :style="{textAlign:'center'}">{{ user.userRole }}</td>
            <td :style="{textAlign:'center'}">{{ user.userAge }}</td>
            <td :style="{textAlign:'center'}">{{ user.gender }}</td>
            <td :style="{textAlign:'center'}">{{ user.bio}}</td>
            <td>
              <button @click="EditUser(user)" class="btn " :style="{backgroundColor:'#3F0639',color:'#fff'}"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen-fill" viewBox="0 0 16 16">
  <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001"/>
</svg></button>
              <button @click="deleteUser(user.userID)" class="btn " :style="{backgroundColor:'#3F0639',color:'#fff',marginLeft:'10px'}"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-x" viewBox="0 0 16 16">
  <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m.256 7a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z"/>
  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m-.646-4.854.646.647.646-.647a.5.5 0 0 1 .708.708l-.647.646.647.646a.5.5 0 0 1-.708.708l-.646-.647-.646.647a.5.5 0 0 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 .708-.708"/>
</svg></button>
            </td>
          </tr>
        </tbody>
      </table>
  
      <!-- Edit User Modal -->
      <div v-if="showModal" class="modal fade show" style="display: block;" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Update User</h5>
              <button type="button" class="btn-close" @click="closeModal"></button>
            </div>
            <div class="modal-body">
              <form @submit.prevent="updateUser">
                <div class="mb-3">
                  <label for="text" class="form-label">Profile</label>
                  <input type="text" v-model="user.userProfile" class="form-control"  placeholder="Url link">
                </div>
                <div class="mb-3">
                  <label for="name" class="form-label">Name</label>
                  <input type="text" v-model="currentProduct.name" class="form-control"  required>
                </div>
                <div class="mb-3">
                  <label for="role" class="form-label">Role</label>
                  <input type="text" v-model="currentProduct.name" class="form-control"  required>
                </div>
                <div class="mb-3">
                  <label for="age" class="form-label">Age</label>
                  <input type="number" v-model="currentProduct.name" class="form-control"  required>
                </div>
                <div class="mb-3">
                  <label for="gender" class="form-label">Gender</label>
                  <input type="text" v-model="currentProduct.price" class="form-control" >
                </div>
                <button type="submit" class="btn btn-primary" >Save changes</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div></div>
    </div>
    
            <!-- </div>
          </div> -->
          <!-- {{$store.state.users }} -->
          <div class="footer">
           
           <footer-view/>
          </div>
        
   
    </template>
    
    <script>

import FooterView from './FooterView.vue';
    
    export default {
      components:{
       
            FooterView
      },
        data(){
            return{
                username:'',
                password:'',
                userProfile:'',
                userRole:'',
                bio:'',
                userAge:'',
                gender:''
              
                
                
            }
        },
        computed:{
            users(){
                return this.$store.state.users
            }
        },
        methods: {
          EditUser(){
            this.$store.dispatch('EditUser',this.$data)
          },
          getUsers(){
      this.$store.dispatch('getUsers')
    },
        
        }
        ,
  mounted(){
    this.getUsers()
    
  }
    };
    </script>
    
    <style scoped>
    #table{
        color: #fff;
        border-collapse: collapse;
  background-color: #d614c35a ; 
  backdrop-filter: blur(50px); 
    }
    
    #mainC{
        background: #3F0639;
        background: linear-gradient(180deg, #3F0639 0%, #880E7C 72%,#A51196 100%);
    }
    .container {
      display: flex;
      height: 115vh;
    }
    
    .sidebar {
      background-color:#3F0639;
      width: 15%;
      /* padding: 20px; */
    }
    
    
    
    .logo img {
      width: 240px;
      height: 150px;
    }
    
    .sidebar-menu {
      list-style: none;
      padding: 0;
    }
    
    .sidebar-menu li {
      margin-bottom: 15px;
    }
    
    .sidebar-menu li i {
      color: #fff;
      font-size: 1.5rem;
      /* margin-right: 10px; */
    }
    
    .sidebar-menu li span {
      color: #fff;
      font-weight: bold;
    }
    p{
      color: white;
    }
    .main-content {
      background-color:rgb(95, 1, 95);
      background: rgb(120,9,121);
      background: linear-gradient(180deg, #3F0639 0%, #880E7C 72%,#A51196 100%);
      /* background-image: url('https://siphokuhlenyana.github.io/dlozify-pics/bck-img.jpg'); */
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      
      flex-grow: 1;
      padding: 50px;
      
    }
    
    /* .post-section {
      /* background-color: #fff; */
      /* padding: 20px;
      border-radius: 10px;
      background-color: #A51196;
    } */
     
    .post-header {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      
    }
    
    .post-header textarea {
      flex-grow: 1;
      padding: 10px;
      border: 1px solid #A51196;
      border-radius: 5px;
      resize: none;
    }
    
    .post-button {
      padding: 10px 20px;
      background-color: #3F0639;
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      margin-left: 10px;
    }
    
    .post-body {
      display: flex;
      align-items: center;
      width: 1200px;
      height: 500px;
      background-color: #a511966e;
      
    
      
      
    }
    
    .post-body img {
      width: 50%;
      height: auto;
      border-radius: 10px;
      
     
    }
    
    .post-content {
      width: 70%;
      padding: 20px;
     
    }
    .post-content h2{
      margin-left:200px;
    }
    
    .post-content h2 {
      margin-bottom: 10px;
    }
    
    .post-actions {
      margin-top: 20px;
    }
    
    .follow-button {
      padding: 10px 20px;
      background-color: #3F0639;
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      margin-right: 10px;
    }
    
    .suggested-users {
      margin-top: 20px;
    }
    
    .suggested-users h3 {
      margin-bottom: 10px;
    }
    
    .user-card {
      display: flex;
    
      /* align-items: ; */
      /* margin-bottom: 5px; */
    }
    h3{
      border: 1px solid #A51196;
      border-radius: 5px;
      background-color: #fff;
      color:#A51196 ;
      padding-top:15px;
    }
    
    .user-card img {
      
      height:150px;
      border-radius: 70%;
      margin-right: 20px;
      margin-left: 80px;
    }
    
    .user-info {
      display: flex;
      align-items: center;
    }
    
    .user-info p {
      margin-right: 10px;
    }
    
    .footer {
      /* margin:200px; */
      background-color: #A51196;
      color: #fff;
      /* padding: 20px; */
      text-align: center;
    /* margin-top: 250px; */
    
    
    }
    
    .footer ul {
      list-style: none;
      padding: 0;
      /* margin-bottom: 10px; */
    }
    
    /* .footer ul li {
      display: inline-block;
      margin: 0 10px;
    } */
    
    .footer ul li i {
      font-size: 1.5rem;
    }
    </style>