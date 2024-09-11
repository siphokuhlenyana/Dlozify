<template lang="">
    <div class="row align-items-start">
       <div class="sidebar">
      <div class="logo">
        <img
          src="https://siphokuhlenyana.github.io/dlozify-pics/DloziLogo.png"
          alt="Logo"
        />
      </div>
      <div class="sidebar-menu">
        <nav>
          <li>
          <router-link to="/"
            ><img
              src="https://siphokuhlenyana.github.io/dlozify-pics/home.png"
              alt=""
              width="100px"
              height="80px"
           class="active " /> <span  class="hover-text">Home</span></router-link></li><br>

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
    </div> 
  </div>
</template>
<script>
export default {
    
}
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
  left: 118px;
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
    .sidebar {
    background-color:#3F0639;
    width: 100%;
    height: 100%;
    padding: 0;

  }
  

  
  .logo img {
    width: 223px;
    height: 150px;
    margin-left: 0rem;
  }
  
  .sidebar-menu {
    list-style: none;
    padding: 0;
  }
  
  .sidebar-menu li {
    margin-bottom: 15px;
    margin-left:1rem;
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

</style>
}