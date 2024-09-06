<template>
  
  <div class="container">
    <div class="sidebar">
      <div class="logo">
        <img src="https://siphokuhlenyana.github.io/dlozify-pics/DloziLogo.png" alt="Logo"  />
       
      </div>
      <div class="sidebar-menu">
        <nav>
          <router-link to="/"><img src="https://siphokuhlenyana.github.io/dlozify-pics/home.png" alt="" width="100px" height="80px"><span class="hover-text">Home</span></router-link><br><br>
   
          
        <li>
          <router-link to="/FeedsView"><img src="https://siphokuhlenyana.github.io/dlozify-pics/bookmark.png" alt="" width="100px" height="80px"> <span class="hover-textP">Post</span></router-link>
         
        
        </li>
        <li>
          <router-link to="/notifications"><img src="https://siphokuhlenyana.github.io/dlozify-pics/notification.png" alt="" width="100px" height="80px"><span class="hover-textN">Notifications</span></router-link>
          
         
        </li>
        <li>
          <router-link to="/messages"><img src="https://siphokuhlenyana.github.io/dlozify-pics/email.png" alt="" width="100px" height="80px"> <span class="hover-textI">Inbox</span> </router-link>
         
        </li>
        <li>
        <router-link to="/account" ><img src="https://siphokuhlenyana.github.io/dlozify-pics/account.png" alt="" width="100px" height="80px"> <span class="hover-textC">Account</span></router-link>
       
      </li>
        <li>
        <router-link to="/about"><img src="https://siphokuhlenyana.github.io/dlozify-pics/information.png" alt="" width="100px" height="80px"><span class="hover-textA">About</span></router-link>
        
      </li>
        <li>
         <router-link to="/settings"><img src="https://siphokuhlenyana.github.io/dlozify-pics/gear.png" alt="" width="100px" height="80px"> <span class="hover-textD">Admin</span></router-link>
        
        </li> 
       </nav>
      </div> 
    </div>
    <div class="main-content ">
<!-- {{ $store.state.users }} -->
<div class="about">
   <h1 :style="{color:'#fff'}"><u>What about Dlozify ?? 🤔</u></h1>
   <p>Dlozify is a mobile app designed to provide a safe and welcoming space for individuals seeking healing,<br>
     spiritual growth, and meaningful connections.<br><br> The app aims to foster a sense of community and belonging,<br>
     allowing users to connect with like-minded individuals who share similar interests and goals.</p>
     <p>Spiritual Healing: Dlozify offers a range of spiritual healing practices, including meditation, yoga, and energy balancing exercises,<br> to help users cultivate inner peace and balance.<br><br>
Meaningful Connections: The app provides a platform for users to connect with others who share similar spiritual interests and goals,<br> fostering meaningful relationships and a sense of community.<br><br>
Safe Space: Dlozify prioritizes user safety and privacy, ensuring a secure and non-judgmental environment for users to explore their spiritual journeys.</p>
 <br>
 <h3 :style="{backgroundColor:'#A51196',marginLeft:'100px',color:'#fff'}">Reach out ..</h3> 
<form
  action="https://formspree.io/f/xdknjkoj"
  method="POST"
>
  <label>
    Your email:
    <input id="email" type="email" name="email" required>
  </label><br>
  <label>
    Your message:<br>
    <textarea name="message" required :style="{width:'400px',height:'60px'}"></textarea>
  </label><br>
  <!-- your other form fields go here -->
  <button type="submit" :style="{borderRadius:'10px',backgroundColor:'#3F0639',color:'#fff'}">Send</button>
</form>

</div>
    </div>
    <img src="https://i.etsystatic.com/12379428/r/il/e9650a/5794649332/il_fullxfull.5794649332_brgd.jpg"  alt="">
  </div>
        <!-- </div>
      </div> -->
      <!-- {{$store.state.users }} -->
      <div class="footer">
       
       <footer-view/>
      </div>
    

</template>

<script>
import FooterView from './FooterView.vue'
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
    methods: {
      addUser(){
        this.$store.dispatch('addUser',this.$data)
      }
    
    }
};
</script>

<style scoped>
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
  left: 130px;
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
#email{
  height: 40px;
}
.about{
  margin-left: 20px;
}
input{
    width: 400px;
    height: 50px;
}
label{
    color: #fff;
}
#mainC{
    background: #3F0639;
    background: linear-gradient(180deg, #3F0639 0%, #880E7C 72%,#A51196 100%);
}
.container {
  display: flex;
  height: 135vh;
  margin: 0;
  --bs-gutter-x:0;
}

.sidebar {
  background-color:#3F0639;
  width: 20%;
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
width: 1645px;

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

