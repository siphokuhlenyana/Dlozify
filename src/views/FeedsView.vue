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
              height="80px" /><span class="hover-text">Home</span></router-link
          ><br /><br />
         

          <li>
            <router-link to="/FeedsView"
              ><img
                src="https://siphokuhlenyana.github.io/dlozify-pics/bookmark.png"
                alt=""
                width="100px"
                height="80px"
            /><span class="hover-textP">Posts</span></router-link>
          </li>
          <li>
            <router-link to="/notifications"
              ><img
                src="https://siphokuhlenyana.github.io/dlozify-pics/notification.png"
                alt=""
                width="100px"
                height="80px"
            /><span class="hover-textN">Notifications</span></router-link>
           
          </li>
          <li>
            <router-link to="/messages"
              ><img
                src="https://siphokuhlenyana.github.io/dlozify-pics/email.png"
                alt=""
                width="100px"
                height="80px"
              />
              <span class="hover-textI">Inbox</span></router-link>
          </li>
          <li>
            <router-link to="/account"
              ><img
                src="https://siphokuhlenyana.github.io/dlozify-pics/account.png"
                alt=""
                width="100px"
                height="80px"
            /><span class="hover-textC">Account</span></router-link>
          </li>
          <li>
            <router-link to="/about"
              ><img
                src="https://siphokuhlenyana.github.io/dlozify-pics/information.png"
                alt=""
                width="100px"
                height="80px"
            /><span class="hover-textA">About</span></router-link>
          </li>
          <li>
            <router-link to="/settings"
              ><img
                src="https://siphokuhlenyana.github.io/dlozify-pics/gear.png"
                alt=""
                width="100px"
                height="80px"
            /><span class="hover-textD">Admin</span></router-link>
          </li>
          <router-link to="/SignInOut"><button @click="SignIn">SignUp/SignIn</button></router-link>
        </nav>
      </div>
    </div> -->
    <div class="main-content">
      <div class="post-section">
        <div class="post-header">
          <textarea placeholder="What's on your mind?" v-model="description"></textarea>
          <button  type="button" class=" post-button btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
</svg></button>
<!-- Modal to add url link -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Url</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <input type="text" name="" id="urlLink" v-model="url" placeholder="Url link">
      </div>
      
    </div>
  </div>
</div>
          <button class="post-button" @click="addPost()">Post</button>
        </div>
        <h1 :style="{ color: '#3F0639', marginLeft: '600px' }">Feeds</h1>
        <!-- <div class="post-body" v-for="post in $store.state.posts.data" :key="post.idpost" >
          {{ post.description}}
          <img src="post.url" alt=""> -->
          <!-- <div class="dropdown"> -->
  <button @click="sortArray()"  :style="{backgroundColor: '#3F0639',color:'#fff'}">
    Sort 
  </button>
  
<!-- </div> -->

        <div class="card-container" v-if="cookieExists" >
         
          <div
            class="card"
            style="
              width: 19rem;
              border-color: purple;
              border-width: 2px;
              border-style: solid;
            "
            v-for="post in $store.state.posts"
            :key="post.idpost"
          >
          <!-- <comp :postInfo="post"/> -->
            <img
             
              :src="post.url"
              class="card-img-top"
              alt=""
              :style="{ width: '19rem', height: '150px',borderRadius:'0px 0px 2px 2px'}"
            />
            

            <div class="card-body" :style="{ backgroundColor: '#a511966e' }">
              <!-- <p class="card-text">{{ post.description }}</p> -->
              <input
                type="text"
                id="comment"
                placeholder="Comment"
                :style="{ color: '#fff' }"
                v-model="content"
              /><br />
              <button @click="showAlert" class="like">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-hand-thumbs-up"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2 2 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a10 10 0 0 0-.443.05 9.4 9.4 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a9 9 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.2 2.2 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.9.9 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"
                  />
                </svg>
              </button>
              <!-- {{ post.idpost }} -->
              <button id="send" @click="addComment(post.idpost)">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-send-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z"
                  />
                </svg></button
              ><br />
              
              <button
                id="view"
                v-if="createView === false"
                @click="createViewIf(idpost)"
              >
                View
              </button>
              <button id="view" v-if="createView" @click="createViewIf(idpost)">
                Hide
              </button>
              <!-- <p v-else> 
                     {{post.description}}
                     </p> -->

              <div id="view">
                <div v-show="createView">
                  <h5 :style="{backgroundColor:'#a51196'}">{{ post.description }}</h5>
                </div>
              </div>
            </div>
          </div>
          <!-- <div v-else>{{ post }}</div> -->

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
</div>  -->
          <!-- {{ $store.state.posts }} -->
          <!-- <div v-for="post in $store.state.posts" :key="post.idpost" class="content" :style="{width:'50px'}">
              <img src="post.url" alt="">
             {{ post.description }}

            </div>
                  </div>
                </div> -->
        </div>
        <div v-else><spinner-view /></div>
      
      
      </div>
    </div>
    <!-- <div class="footer">
      <footer-view /> -->
      <!-- <p>Dlozify©2024</p> -->
    <!-- </div> -->
  </div>
</template>

<script>
// import FooterView from "./FooterView.vue";
import SpinnerView from "./SpinnerView.vue";
export default {
  components: { SpinnerView },
  name: "FeedsView",
  data() {
    return {
      createView: false,
      content: "",
      description:"",
      url:"",
      cookieExists: false
    };
  },
  methods: {
    checkCookie() {
      const cookie = this.$cookies.get('token');
      if (cookie) {
        this.cookieExists = true;
      } else {
        this.cookieExists = false;
      }
    },
    getPosts() {
      this.$store.dispatch("getPosts");
    },
    showAlert() {
      alert("Post liked ❤️❤️❤️❤️❤️❤️❤️!");
    },
    getPost() {
      this.$store.dispatch("getPost");
    },
    createViewIf() {
      this.createView = !this.createView;
    },
    // },
    addComment(idpost){
      // console.log(idpost,this.content);
      
      this.$store.dispatch('addComment',{idpost:idpost,content:this.content})
      location.reload();

      // alert("Post liked ❤️❤️❤️❤️❤️❤️❤️!");

    },
    addPost(){
      this.$store.dispatch('addPost',this.$data)
      location.reload();
    },
    sortArray(post) {
  return post.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });
}
    
  },
  mounted() {
    this.getPosts();
    this.getPost();
    // this.addComment()
    this.checkCookie();
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nerko+One&display=swap');
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
  left: 130px;
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
#view {
  background-color: #3f0639;
  width: 16rem;
  color: #fff;
  margin-top: 1rem;
}
#comment {
  background-color: #a51196;
  margin-right: 30px;
  border-radius: 10px;
  width: 250px;

}
.like {
  background-color: #3f0639;
  border-radius: 10px;
  margin-left: 20px;
  color: #fff;
}
#send {
  background-color: #3f0639;
  border-radius: 10px;
  margin-left: 80px;
  color: #fff;
}
.card {
  margin: 10px;
 font-weight: 900;
  font-family: "Nerko One", cursive;
  font-weight: 400;
  font-style: normal;

}


.card-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  /* display: flex;
  justify-content: space-between;
  flex-direction:row;
  flex-wrap: wrap; */
  /* width: 200px; */

}

.container {
  display: flex;
  height: 250vh;
  margin: 0;
  padding: 0;
  --bs-gutter-x: 0;
}

.sidebar {
  background-color: #3f0639;
  width: 18%;
  /* padding: 20px; */
}

.logo img {
  width: 240px;
  height: 150px;
}

.sidebar-menu {
  list-style: none;
  padding: 0;
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
  

  flex-grow: 1;
  padding: 40px;
  font-weight: 900;
  font-family: "Nerko One", cursive;
  font-weight: 400;
  font-style: normal;
  /* width: 1200vw; */
 
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
  border: 1px solid #a51196;
  border-radius: 5px;
  resize: none;
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
  width: 900px;
  height: 300px;
  background-color: #a511966e;
  border-radius: 10px;
  color: #fff;
}

.post-body img {
  width: 50%;
  height: auto;
  border-radius: 10px;
}

.post-content {
  width: 70%;
  padding: 20px;
  font-weight: 900;
  font-family: "Nerko One", cursive;
  font-weight: 400;
  font-style: normal;
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
h3 {
  border: 1px solid #a51196;
  border-radius: 5px;
  background-color: #fff;
  color: #a51196;
  padding-top: 15px;
  font-weight: 900;
  font-family: "Nerko One", cursive;
  font-weight: 400;
  font-style: normal;
}

.user-card img {
  height: 150px;
  border-radius: 70%;
  margin-right: 20px;
  margin-left: 80px;
}

.user-info {
  display: flex;
  align-items: center;
  font-weight: 900;
  font-family: "Nerko One", cursive;
  font-weight: 400;
  font-style: normal;
}

.user-info p {
  margin-right: 10px;
  font-weight: 900;
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

/* .footer ul li {
  display: inline-block;
  margin: 0 10px;
} */

.footer ul li i {
  font-size: 1.5rem;
}
</style>
