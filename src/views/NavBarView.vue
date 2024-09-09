<template lang="">
    <div class="row align-items-start">
        <div class="sidebar col-4">
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
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .sidebar {
    background-color:#3F0639;
    width: 61%;
    /* padding: 20px; */
  }
  

  
  .logo img {
    width: 223px;
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
</style>