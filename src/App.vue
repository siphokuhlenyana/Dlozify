<template> 

<!-- <div class="row"> -->
<!-- <div class="col-md-3">
  <nav-bar-view/>
 </div> -->
 <!-- <div class="col-md-9">
   <home-page/>
 </div> -->
 
  <router-view/>
 

  <!-- <footer-view/> -->
 
<!-- </div> -->
</template>
<script>
// import HomePage from './views/HomePage.vue';
// import NavBarView from './views/NavBarView.vue';
export default{
  components:{
// // NavBarView,
//     HomePage
  }
}
</script>
<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  

}
body{
  padding: 0;
  margin: 0;
}
</style>
