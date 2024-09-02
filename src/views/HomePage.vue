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
      <div class="main-content" >
        <div class="post-section">
           <div class="post-header">
            <textarea placeholder="Search Friends"></textarea>
            <button class="post-button">Search</button>
          </div>
          <div class="post-body">
            <!-- <img src="https://i.imgur.com/Z5b710A.jpg" alt="Post Image" /> -->
            
            <div class="post-content">
              <h2 :style="{color:'#fff',marginBottom:'30px'}">A moderated online forum and social network, allowing users to connect with peers, share experiences, and find support.<br>Made for your comfort!</h2>
              <div class="post-actions">
                
                <div class="suggested-users">
                  <h3 id="suggest" :style="{color:'#A51196',marginLeft:'150px',paddingBottom:'25px'}">Suggested to follow</h3>
                  <div class="user-card">
                    <img src="https://siphokuhlenyana.github.io/ImagesPortfolio/asanda.jpg" alt="" />
                    <div class="user-info">
                      <p>Asanda Mehlo</p>
                      <button  v-if="createView === false" @click="createViewIf()" class="follow-button" >+Follow</button>
                      <button v-if="createView" @click="createViewIf()" class="follow-button">Followed</button>
                      <img src="https://siphokuhlenyana.github.io/ImagesPortfolio/20240422_115558(0).jpg" alt="User Image" />
                    <div class="user-info">
                      <p>Gwiba Mabandla</p>
                      <button v-if="createView === false" @click="createViewIf()" class="follow-button">+Follow</button>
                      <button v-if="createView" @click="createViewIf()" class="follow-button">Followed</button>
                      <img src="https://siphokuhlenyana.github.io/ImagesPortfolio/20240422_120223.jpg" alt="User Image" />
                    <div class="user-info">
                      <p>Marcus Adonis</p>
                      <button v-if="createView === false" @click="createViewIf()" class="follow-button">+Follow</button>
                      <button v-if="createView" @click="createViewIf()" class="follow-button">Followed</button>
                    </div>
                    </div>
                    </div>
                  </div>
                </div>
                  
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
  components: { FooterView },
    name: 'HomePage',
    data() {
    return {
      createView: false,
    }
  },
    methods:{
      getUsers(){
        this.$store.dispatch('getUsers')
      },
      createViewIf() {
      this.createView = !this.createView;
      alert('Followed this user ! 👌')
    }
    },
    mounted(){
      this.getUsers()
    }
  };
  </script>
  
  <style scoped>
  #suggest{
    text-align: center;
  }
  .container {
    display: flex;
    height: 115vh;
    padding: 0;
    
  }
  
  .sidebar {
    background-color:#3F0639;
    width: 15%;
    /* padding: 20px; */
  }
  

.logo img {
    width: 250px;
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
  } 
  p{
    color: white;
  }
  .main-content {
    background-color:rgb(95, 1, 95);
    background: rgb(120,9,121);
    background: linear-gradient(180deg, #3F0639 0%, #880E7C 72%,#A51196 100%);
    background-image: url('https://siphokuhlenyana.github.io/dlozify-pics/bck-img.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    
    flex-grow: 1;
    padding: 50px;
    padding-top:50px;
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
    margin-top: 0;
    
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
height: 80px;
padding-top: 50px;


 
  
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
  
  /* .footer ul li i {
    font-size: 2rem;
  } */
  </style>