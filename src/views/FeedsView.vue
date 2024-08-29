<template>
  <div class="container">
    <div class="sidebar">
      <div class="logo">
        <img src="https://siphokuhlenyana.github.io/dlozify-pics/DloziLogo.png" alt="Logo"  />
       
      </div>
      <div class="sidebar-menu">
        <nav>
          <router-link to="/"><img src="https://siphokuhlenyana.github.io/dlozify-pics/home.png" alt="" width="100px" height="80px"></router-link>
         <!-- <a href="#homepage"></a> -->
          
        <li>
          <router-link to="/FeedsView"><img src="https://siphokuhlenyana.github.io/dlozify-pics/bookmark.png" alt="" width="100px" height="80px"></router-link>
         
        
        </li>
        <li>
          <router-link to="/notifications"><img src="https://siphokuhlenyana.github.io/dlozify-pics/notification.png" alt="" width="100px" height="80px"></router-link>
         <!-- <a href="#notifications"></a> -->
         
        </li>
        <li>
          <router-link to="/messages"><img src="https://siphokuhlenyana.github.io/dlozify-pics/email.png" alt="" width="100px" height="80px"> </router-link>
        
        </li>
        <li>
         <a href="#login"><img src="https://siphokuhlenyana.github.io/dlozify-pics/account.png" alt="" width="100px" height="80px"></a>
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
          <textarea placeholder="What's on your mind?"></textarea>
          <button class="post-button">Post</button>
        </div> 
        <h2 :style="{color:'#fff'}"> Feeds</h2>
        <div class="post-body">
         
          <!-- <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
  
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://siphokuhlenyana.github.io/dlozify-pics/DloziLogo.png" class="d-block w-10" alt="">
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://siphokuhlenyana.github.io/dlozify-pics/DloziLogo.png" class="d-block w-10" alt="">
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden"></span>
  </button>
</div> -->
{{ $store.state.posts }}
            <div v-for="post in $store.state.posts" :key="post.idpost" class="content">
              <img src="post.userProfile" alt="">
             {{ post.description }}
            </div>
                  </div>
                </div>
              </div>
                
                
                
  </div>
      <div class="footer">
       
        <p>Dlozify©2024</p>
      </div>
    

</template>

<script>
export default {
  name: 'HomePage',
  methods:{
    getPosts(){
      this.$store.dispatch('getPosts')
    }
  },
  mounted(){
    this.getPosts()
  }
};
</script>

<style scoped>
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
  background-image: url('https://siphokuhlenyana.github.io/dlozify-pics/bck-img.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  
  flex-grow: 1;
  padding: 20px;
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
  height: 600px;
  background-color: #a511966e;
  border-radius: 10px;
  
  
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