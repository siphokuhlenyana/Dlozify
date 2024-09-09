<template>
    <div class="container">
        <div class="sidebar">
          <div class="logo">
            <img src="https://siphokuhlenyana.github.io/dlozify-pics/DloziLogo.png" alt="Logo"  />
           
          </div>
          <div class="sidebar-menu">
            <nav>
              <router-link to="/"><img src="https://siphokuhlenyana.github.io/dlozify-pics/home.png" alt="" width="100px" height="80px"></router-link><br><br>
            
              
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
    
    <h2 class="display-2" :style="{color:'#fff'}">Admin</h2>
     <button :style="{marginLeft:'480px'}" @click="user = !user">User /Post Settings</button>
      <table v-if="user" class="table-primary table-bordered border-primary" id="table" :style="{width:'800px',borderColor:'#A51196',borderWidth:'10px',borderStyle:'solid',backgroundColor:'A51196'}">
        <thead :style="{fontWeight:'1000',marginBottom:'1000px'}">
          <tr >
            <th><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-square-fill" viewBox="0 0 16 16">
  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"/>
</svg></th>
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
            <td> <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..."></td>
            <td><img :src="user.userProfile" alt="" width="80px"></td>
            <td :style="{textAlign:'center'}">{{ user.username }}</td>
            <td :style="{textAlign:'center'}">{{ user.userRole }}</td>
            <td :style="{textAlign:'center'}">{{ user.userAge }}</td>
            <td :style="{textAlign:'center'}">{{ user.gender }}</td>
            <td :style="{textAlign:'center'}">{{ user.bio}}</td>
            <td>
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" :style="{backgroundColor:'#3F0639',color:'#fff'}"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen-fill" viewBox="0 0 16 16">
  <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001"/>
</svg></button>
              <button @click="DeleteUser(user.userID)" class="btn " :style="{backgroundColor:'#3F0639',color:'#fff',marginLeft:'10px'}"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-x" viewBox="0 0 16 16">
  <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m.256 7a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z"/>
  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m-.646-4.854.646.647.646-.647a.5.5 0 0 1 .708.708l-.647.646.647.646a.5.5 0 0 1-.708.708l-.646-.647-.646.647a.5.5 0 0 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 .708-.708"/>
</svg></button>
            </td>
          </tr>
        </tbody>
      </table>
      <div v-else>
        <h2 class="display-5" :style="{color:'#fff'}">Post Management</h2>
        <table  class="table-primary table-bordered border-primary" id="table" :style="{width:'1200px',height:'100px',borderColor:'#A51196',borderWidth:'10px',borderStyle:'solid',backgroundColor:'A51196'}">
        <thead :style="{fontWeight:'1000',marginBottom:'1000px'}">
          <tr >
            <th><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-square-fill" viewBox="0 0 16 16">
  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"/>
</svg></th>
               
               <th>Url Link</th>
            <th >Description</th>
            
            
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="post in $store.state.posts" :key="post.idpost">
            <td> <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..."></td>
            <td :style="{textAlign:'center'}"><img :src="post.url" alt="" width="150px" height="150px"></td>
            <td :style="{textAlign:'center'}">{{ post.description }}</td>
            
            
            <td>
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" :style="{backgroundColor:'#3F0639',color:'#fff'}"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen-fill" viewBox="0 0 16 16">
  <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001"/>
</svg></button>
              <button @click="DeletePost(post.idpost)" class="btn " :style="{backgroundColor:'#3F0639',color:'#fff',marginLeft:'10px'}"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-x" viewBox="0 0 16 16">
  <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m.256 7a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z"/>
  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m-.646-4.854.646.647.646-.647a.5.5 0 0 1 .708.708l-.647.646.647.646a.5.5 0 0 1-.708.708l-.646-.647-.646.647a.5.5 0 0 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 .708-.708"/>
</svg></button>
            </td>
          </tr>
        </tbody>
      </table>

      </div>
      <!-- Edit User Modal -->
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Update User</h5>
             
            </div>
            <div class="modal-body">
              <form @submit.prevent="updateUser">
                <div class="mb-3">
                  <label for="text" class="form-label">Profile</label>
                  <input type="text" v-model="userProfile" class="form-control"  placeholder="Url link">
                </div>
                <div class="mb-3">
                  <label for="name" class="form-label">Username</label>
                  <input type="text" v-model="username" class="form-control"  >
                </div>
                <div class="mb-3">
                  <label for="role" class="form-label">Role</label>
                  <input type="text" v-model="userRole" class="form-control"  >
                </div>
                <div class="mb-3">
                  <label for="age" class="form-label">Age</label>
                  <input type="number" v-model="userAge" class="form-control"  >
                </div>
                <div class="mb-3">
                  <label for="gender" class="form-label">Gender</label>
                  <input type="text" v-model="gender" class="form-control" >
                </div>
                <div class="mb-3">
                  <label for="gender" class="form-label">Bio</label>
                  <input type="text" v-model="bio" class="form-control" >
                </div>
                <button @click="EditUser()" type="submit" class="btn btn-primary" >Save changes</button>
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    
    </div>
    
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
                gender:'',
                user:true
              
                
                
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
        //   closeModal(){
        //    this.showModal.value=false
        //   },
          DeleteUser(userID){
            this.$store.dispatch('DeleteUser',userID)
            location.reload;
          },
          DeletePost(idpost){
            this.$store.dispatch('DeletePost',idpost)
            location.reload;
          },
          
          getUsers(){
      this.$store.dispatch('getUsers')
    },
    getPosts(){
      this.$store.dispatch('getPosts')
    }
        
        }
        ,
  mounted(){
    this.getUsers()
    // this.DeleteUser()
    this.getPosts()
    
  }
    };
    </script>
    
    <style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Nerko+One&display=swap');
    .hover-text {
  display: none;
  position: absolute;
  top: 200px; 
  left: 145px;
  color: #fff;
  font-size:large;
  font-weight: 900;
}
img:hover + .hover-text {
  display: block;
}
.hover-textP {
  display: none;
  position: absolute;
  top: 300px; 
  left: 145px;
  color: #a51196;
  font-size:large;
}
img:hover + .hover-textP {
  display: block;
}
.hover-textN {
  display: none;
  position: absolute;
  top: 400px; 
  left: 135px;
  color: #a51196;
  font-size:large;
}
img:hover + .hover-textN {
  display: block;
}
.hover-textI {
  display: none;
  position: absolute;
  top: 500px; 
  left: 145px;
  color: #a51196;
  font-size:large;
}
img:hover + .hover-textI {
  display: block;
}
.hover-textC {
  display: none;
  position: absolute;
  top: 600px; 
  left: 145px;
  color: #a51196;
  font-size:large;
}
img:hover + .hover-textC {
  display: block;
}
.hover-textA {
  display: none;
  position: absolute;
  top: 700px; 
  left: 145px;
  color: #a51196;
  font-size:large;
}
img:hover + .hover-textA {
  display: block;
}
.hover-textD {
  display: none;
  position: absolute;
  top: 800px; 
  left: 145px;
  color: #a51196;
  font-size:large;
}
img:hover + .hover-textD {
  display: block;
}
    #table{
        color: #fff;
        border-collapse: collapse;

  backdrop-filter: blur(50px); 
    }
    .border-primary{
      border-color: #A51196;
    }
    
    #mainC{
        background: #3F0639;
        background: linear-gradient(180deg, #3F0639 0%, #880E7C 72%,#A51196 100%);
    }
    .container {
      display: flex;
      height: 115vh;
      margin: 0;
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