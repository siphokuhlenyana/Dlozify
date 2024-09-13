<template>
  <div class="container">
    <!-- <div class="sidebar">
      <div class="logo">
        <img
          src="https://siphokuhlenyana.github.io/dlozify-pics/DloziLogo.png"
          alt="Logo"
        />
      </div>
      <div class="sidebar-menu">
        <nav>
          <router-link to="/"
            ><img
              src="https://siphokuhlenyana.github.io/dlozify-pics/home.png"
              alt=""
              width="100px"
              height="80px"
           class="active " /> <span  class="hover-text">Home</span></router-link><br><br>

          <li>
            <router-link to="/FeedsView"
              ><img
                src="https://siphokuhlenyana.github.io/dlozify-pics/bookmark.png"
                alt=""
                width="100px"
                height="80px"
            /><span  class="hover-textP">Posts</span></router-link>
          </li>
          <li>
            <router-link to="/notifications"
              ><img
                src="https://siphokuhlenyana.github.io/dlozify-pics/notification.png"
                alt=""
                width="100px"
                height="80px"
            /><span  class="hover-textN">Notifications</span></router-link>
          </li>
          <li>
            <router-link to="/messages"
              ><img
                src="https://siphokuhlenyana.github.io/dlozify-pics/email.png"
                alt=""
                width="100px"
                height="80px"
              />
              <span  class="hover-textI">Inbox</span></router-link>
          </li>
          <li>
            <router-link to="/account"
              ><img
                src="https://siphokuhlenyana.github.io/dlozify-pics/account.png"
                alt=""
                width="100px"
                height="80px"
            /><span  class="hover-textC">Account</span></router-link>
          </li>
          <li>
            <router-link to="/about"
              ><img
                src="https://siphokuhlenyana.github.io/dlozify-pics/information.png"
                alt=""
                width="100px"
                height="80px"
            /><span  class="hover-textA">About</span></router-link>
          </li>
          <li>
            <router-link to="/settings"
              ><img
                src="https://siphokuhlenyana.github.io/dlozify-pics/gear.png"
                alt=""
                width="100px"
                height="80px"
            /><span  class="hover-textD">Admin</span></router-link>
          </li>
          <router-link to="/SignInOut"><button @click="SignIn">SignUp/SignIn</button></router-link>
        </nav>
      </div>
    </div> -->
    <div class="main-content">
      <div class="post-section" >
        <div class="post-header">
          <textarea placeholder="Search Friends" v-model="username"></textarea>
          <button class="post-button btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="searchUser()">Search</button>
       
       <!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Users</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" v-if="foundUser">
        
    <div v-for="user in foundUser" :key="user.userID">
     <img :src="user.userProfile" alt=""  :style="{width:'100px',height:'100px',borderRadius:'50%'}"> {{ user.username }} ({{ user.gender }})<br>
     {{ user.bio }}
     <button @click="addFriend_request(user.userID)" >+Follow</button>
    </div>
       
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
       
      </div>
    </div>
  </div>
</div>
        </div>
        <div class="post-body">
          <!-- <img src="https://i.imgur.com/Z5b710A.jpg" alt="Post Image" /> -->

          <div class="post-content">
            <h2 :style="{ color: '#fff', marginBottom: '30px' }">
              A moderated online forum and social network, allowing users to
              connect with peers, share experiences, and find support.<br />Made
              for your comfort!
            </h2>
            <div class="post-actions">
              <div class="suggested-users" >
                <h3
                  id="suggest"
                  :style="{
                    color: '#A51196',
                    marginLeft: '150px',
                    paddingBottom: '25px', width: '800px'
                  }"
                >
                  People you may know 
                </h3>
             <div id="cards" >
                <div class="user-card" v-for="user in getLimit()" :key="user.userID">
                  <img id="img" :style="{width:'200px'}"
                    :src="user.userProfile"
                    alt="" 
                  />
                  <div class="user-info text-center">
                    <p class="text-center" :style="{fontSize:'25px'}">{{ user.username }} </p>

                    <ButtonComp  @create-view-if="createViewIf"/>
                    
                    <!-- <img
                      src="https://siphokuhlenyana.github.io/ImagesPortfolio/20240422_115558(0).jpg"
                      alt="User Image"
                    /> -->
                    <!-- <div class="user-info">
                      <p>Gwiba Mabandla</p>
                      <button
                        v-if="createView === false"
                        @click="createViewIf()"
                        class="follow-button"
                      >
                        +Follow
                      </button>
                      <button
                        v-if="createView"
                        @click="createViewIf()"
                        class="follow-button"
                      >
                        Followed
                      </button>
                      <img
                        src="https://siphokuhlenyana.github.io/ImagesPortfolio/20240422_120223.jpg"
                        alt="User Image"
                      />
                      <div class="user-info">
                        <p>Marcus Adonis</p>
                        <button
                          v-if="createView === false"
                          @click="createViewIf()"
                          class="follow-button"
                        >
                          +Follow
                        </button>
                        <button
                          v-if="createView"
                          @click="createViewIf()"
                          class="follow-button"
                        >
                          Followed
                        </button>
                      </div> -->
                    </div>
                  </div>
              </div>
              <!-- <div v-else><spinner-view/></div> -->
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
  <!-- <div class="footer">
    <footer-view />
  </div> -->
</template>

<script>
import {toast} from 'vue3-toastify'
import "vue3-toastify/dist/index.css";
import ButtonComp from "@/components/ButtonComp.vue";
// import FooterView from "./FooterView.vue";
// import SpinnerView from './SpinnerView.vue';
export default {
  components: { ButtonComp },
  name: "HomePage",
  data() {
    return {
      username:'',
      createView: false,
      foundUser :null,
      userID:''
      
    };
  },
  methods: {
    getLimit() {
      let users= this.$store.state.users 
      console.log(users);
      
      if(users){
      users = users.slice(0, 3);  
      console.log(users + "hehehe");
      
      }
     else{
      users=[]
     }

     return users
     
    },
    createViewIf() {
      toast("Followed this user ! 👌", {
        "theme": "dark",
        "type": "success",
        "position": "top-center",
        "dangerouslyHTMLString": true
      })
      
    },
    getUsers(){
      this.$store.dispatch('getUsers')
      
    } ,
    searchUser() {
      // if(!this.user) return  [];
      this.getUsers();
      this.foundUser = this.user?.filter(user => {
        return user.username.toLowerCase().includes(this.username.toLowerCase())
          
              
      })
      console.log(this.foundUser)
      return this.foundUser
    },
    addFriend_request(userID){
      this.$store.dispatch('addFriend',{userID:userID})
    }
  },
  computed:{
    user(){
      return this.$store.state.users || []
    }

  },
 
    // handleHover() {
    //   this.isHovered = !this.isHovered
    // }
// searchedUsers(sea){
//   let users= $store.state.users;
//   let searchedUsers= users.value.filter(users);
// }
  
  mounted() {
    // this.getLimit();
    this.getUsers();
   
  },
};
</script>

<style scoped>
button{
  padding: 10px 20px;
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
}
@import url('https://fonts.googleapis.com/css2?family=Nerko+One&display=swap');
#img{
  position: relative;
}
.hover-text {
  display: none;
  position: absolute;
  top: 200px; 
  left: 145px;
  color: #fff;
  font-size:large;
  font-weight: 900;
  font-family: "Nerko One", cursive;
  font-weight: 400;
  font-style: normal;
}
img:hover + .hover-text {
  display: block;
}
img:active {

  color: #fff;
  background-color: #a51196;
  padding: 10px;
  border-radius: 5px;
}
.hover-textP {
  display: none;
  position: absolute;
  top: 300px; 
  left: 145px;
  color: #a51196;
  font-size:large;
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
  font-family: "Nerko One", cursive;
  font-weight: 400;
  font-style: normal;
}
img:hover + .hover-textD {
  display: block;
}

#suggest {
  text-align: center;
  font-family: "Nerko One", cursive;
  font-weight: 400;
  font-style: normal;
}
.container {
  display: flex;
  height: 125vh;
  padding: 0;
  margin: 0;
  --bs-gutter-x: 0;
  margin-right: 80rem;
}

.sidebar {
  background-color: #3f0639;
  width: 18%;
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
p {
  color: white;
}
.main-content {
  background-color: rgb(95, 1, 95);
  background: rgb(120, 9, 121);
  background: linear-gradient(180deg, #3f0639 0%, #880e7c 72%, #a51196 100%);
  background-image: url("https://siphokuhlenyana.github.io/dlozify-pics/bck-img.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  /* flex-grow: 1; */
  padding: 25px;
  padding-top: 50px;
  font-family: "Nerko One", cursive;
  font-weight: 400;
  font-style: normal;
  width: 100vw;
  height: 100%;
}
/* @media (max-width: 300px) {
  
  .post-body {
    max-width: 70%;
  }
  .post-content {
    max-width: 70%;
  }
  .main-content{
    max-width: 70%;
  }
  
} */

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
  font-family: "Nerko One", cursive;
  font-weight: 400;
  font-style: normal;
}

.post-header textarea {
  flex-grow: 1;
  padding: 10px;
  border: 1px solid #a51196;
  border-radius: 5px;
  resize: none;
  font-family: "Nerko One", cursive;
  font-weight: 400;
  font-style: normal;
}

.post-button {
  padding: 10px 20px;
  background-color: #3f0639;
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
.post-content h2 {
  margin-left: 200px;
}

.post-content h2 {
  margin-bottom: 10px;
}

.post-actions {
  margin-top: 20px;
}

.follow-button {
  padding: 10px 20px;
  background-color: #3f0639;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  /* margin-right: 10px; */
  position: absolute;
  bottom: 0;
  right: 20px;
  top:3px;
  height: 40px;
  font-family: "Nerko One", cursive;
  font-weight: 400;
  font-style: normal;
  
}

.suggested-users {
  margin-top: 20px;
  transition: all 0.5s ease-in-out;
  font-family: "Nerko One", cursive;
  font-weight: 400;
  font-style: normal;
 
}
.suggested-users:hover {
  transform: scale(1.1); /* adjust the effect as needed */
}

.suggested-users h3 {
  margin-bottom: 10px;
}
#cards{
   display: grid;
  grid-template-columns: repeat(3,1fr); 
  margin-left: 200px;
  grid-gap: 40px;
}
.user-card {
display: flex;
flex-direction: column;
position: relative;

}
  /* align-items: ; */
  /* margin-bottom: 5px; */

h3 {
  border: 1px solid #a51196;
  border-radius: 5px;
  background-color: #fff;
  color: #a51196;
  padding-top: 15px;
  font-family: "Nerko One", cursive;
  font-weight: 400;
  font-style: normal;
}

.user-card img {
  height: 150px;
  border-radius: 70%;
  /* margin-right: 20px;
  margin-left: 80px; */
}

.user-info {
  display: flex;
  align-items: center;
  font-family: "Nerko One", cursive;
  font-weight: 400;
  font-style: normal;
}

.user-info p {
  margin-left: 70px;
  text-align: center;
  font-family: "Nerko One", cursive;
  font-weight: 400;
  font-style: normal;
}

.footer {
  /* margin:200px; */
  background-color: #a51196;
  color: #fff;
  /* padding: 20px; */
  text-align: center;
  /* margin-top: 250px; */
  height: 80px;
  padding-top: 50px;
  width: 1551px;
  font-family: "Nerko One", cursive;
  font-weight: 400;
  font-style: normal;
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
