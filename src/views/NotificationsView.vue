<template>

    <div class="container">
        <!-- <div class="sidebar">
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
            <router-link to="/SignInOut"><button @click="SignIn">SignUp/SignIn</button></router-link>
           </nav>
          </div> 
        </div> -->
        <div class="main-content ">
  <h2 :style="{color:'#fff'}">Updates On Comments </h2><br><br>
  <div v-if="cookieExists">
            <div  class="list-group" v-for="comment in $store.state.comment " :key="comment.commentsID" :style="{color:'#fff',width:'70vw',paddingLeft:'2rem'}">
  <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
    <div class="d-flex w-150 justify-content-between">
      <h5 class="mb-1">{{ comment.content }}</h5>
      <small>{{cDate}}</small>
    </div>
    
    <small>Post ID:{{ comment.idpost }}</small><br>
    <small>Comment ID:{{ comment.commentsID }}</small>
    <button @click="DeleteComment(comment.commentsID)"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
</svg></button>
<button ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen-fill" viewBox="0 0 16 16">
  <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001"/>
</svg></button>
  </a>
  </div>
</div>
<div v-else><spinner-view/></div>
        </div>
        
          <!-- <div class="footer">
           
           <footer-view/>
          </div> -->
    </div>
    
    </template>
    
    <script>
    // import FooterView from './FooterView'
import SpinnerView from './SpinnerView.vue'
    export default {
      data() {
        return {
            cDate: new Date(),
            cookieExists:false
        }
      },
      components:{
        SpinnerView 
      },
      
 
      methods: {
          getComments(){
            this.$store.dispatch('getComments')
          },
    checkCookie() {
      const cookie =  this.$cookies.get('token');
      if (cookie) {
        this.cookieExists = true;
      } else {
        this.cookieExists = false;
      }
    },
    DeleteComment(commentsID){
      this.$store.dispatch('DeleteComment',commentsID)
      location.reload();
    }
    
        
        },
        mounted(){
       this.getComments()
       this.checkCookie()
        }
}
    

    </script>
    
    <style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Nerko+One&display=swap'); 
    button{
  padding: 8px 10px;
  background-color: #a51196;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 5px;
  font-weight: 900;
  font-family: "Nerko One", cursive;
  font-weight: 400;
  font-style: normal;
  height: 2rem;
}
    .list-group-item.active {
        background-color: #3f063971;
        border-color: #880E7C;
        height: 150px;
        margin-bottom: 2rem;
        
    }
    .hover-text {
      display: none;
      position: absolute;
      top: 200px; 
      left: 145px;
      color: #fff;
      font-size:large;
      font-weight: 900;
      font-weight: 900;
  font-family: "Nerko One", cursive;
  font-weight: 400;
  font-style: normal;
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
      font-weight: 900;
  font-family: "Nerko One", cursive;
  font-weight: 400;
  font-style: normal;
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
      font-weight: 900;
  font-family: "Nerko One", cursive;
  font-weight: 400;
  font-style: normal;
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
      font-weight: 900;
  font-family: "Nerko One", cursive;
  font-weight: 400;
  font-style: normal;
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
      font-weight: 900;
  font-family: "Nerko One", cursive;
  font-weight: 400;
  font-style: normal;
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
      font-weight: 900;
  font-family: "Nerko One", cursive;
  font-weight: 400;
  font-style: normal;
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
      font-weight: 900;
  font-family: "Nerko One", cursive;
  font-weight: 400;
  font-style: normal;
    }
    img:hover + .hover-textD {
      display: block;
    }
    #email{
      height: 10px;
      font-weight: 900;
  font-family: "Nerko One", cursive;
  font-weight: 400;
  font-style: normal;
    }
    .about{
      margin-left: 20px;
      font-weight: 900;
  font-family: "Nerko One", cursive;
  font-weight: 400;
  font-style: normal;
    }
    input{
        width: 400px;
        height: 50px;
        font-weight: 900;
  font-family: "Nerko One", cursive;
  font-weight: 400;
  font-style: normal;
    }
    label{
        color: #fff;
        font-weight: 900;
  font-family: "Nerko One", cursive;
  font-weight: 400;
  font-style: normal;
    }
    .main-content{
        background: #3F0639;
        /* background: linear-gradient(180deg, #3F0639 0%, #880E7C 72%,#A51196 100%); */
        background-image: url('https://siphokuhlenyana.github.io/dlozify-pics/bck-img.jpg');
        font-weight: 900;
  font-family: "Nerko One", cursive;
  font-weight: 400;
  font-style: normal;
  width: 100vw;
    }
    .container {
      display: flex;
      height: 135vh;
      /* width: 869px; */
         --bs-gutter-x: 0;
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
      padding: 30px;
    
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
      font-weight: 900;
  font-family: "Nerko One", cursive;
  font-weight: 400;
  font-style: normal;
    }
    p{
      color: white;
      font-weight: 900;
  font-family: "Nerko One", cursive;
  font-weight: 400;
  font-style: normal;
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
      font-weight: 900;
  font-family: "Nerko One", cursive;
  font-weight: 400;
  font-style: normal;
      /* padding: 50px; */
     
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
      margin-bottom: 15px;
      
    }
    
    .post-header textarea {
      flex-grow: 1;
      /* padding: 10px; */
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
      /* padding: 20px; */
     
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
    
    font-weight: 900;
  font-family: "Nerko One", cursive;
  font-weight: 400;
  font-style: normal;
    }
    
    .footer ul {
      list-style: none;
      padding: 0;
      /* margin-bottom: 10px; */
    }
    
    .footer ul li {
      display: inline-block;
      margin: 0 10px;
    } 
    
    .footer ul li i {
      font-size: 1.5rem;
    }
    </style>
    
    
    
    
    
    