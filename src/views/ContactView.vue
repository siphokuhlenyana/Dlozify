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
<!-- {{ $store.state.users }} -->
<!-- <h1 :style="{color:'#fff',display:'flex',justifyContent:'center',marginTop:'2rem'}">📬 Requests </h1> -->
  
<h3 :style="{backgroundColor:'#A51196',marginLeft:'100px',color:'#fff'}">Reach out ..</h3> 
<div id="form">
  <form
  action="https://formspree.io/f/xdknjkoj"
  method="POST"
>
 
<label>
    Name:
    <input id="email" type="text" name="name" required>
  </label><br>
  <label>
    Your Surname:
    <input id="email" type="text" name="surname" required>
  </label><br>
  <label>
    Your age:
    <input id="email" type="number" name="age" required>
  </label><br>
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
  
        <!-- </div>
      </div> -->
      <!-- {{$store.state.users }} -->
      <!-- <div class="footer">
       
       <footer-view/>
      </div> -->
    
</div>
</template>

<script>
// import FooterView from './FooterView' 
export default {
  components:{
    // FooterView
  },
  
    methods: {
      getUser(){
        this.$store.dispatch('getUser')
      }
    
    },
    mounted(){
   this.getUser()
    }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nerko+One&display=swap'); 
#form{
  background-color: #ffffff51;
      width: 800px;
      height: 650px;
      border-radius: 10%;
      margin-top: 2rem;
      display: flex;
      justify-content: center;
}
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
#mainC{
    background: #3F0639;
    background: linear-gradient(180deg, #3F0639 0%, #880E7C 72%,#A51196 100%);
    font-weight: 900;
  font-family: "Nerko One", cursive;
  font-weight: 400;
  font-style: normal;
}
.container {
  display: flex;
  height: 125vh;
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
  /* padding: 50px; */
  font-weight: 900;
  font-family: "Nerko One", cursive;
  font-weight: 400;
  font-style: normal;
  width: 100vw;
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





