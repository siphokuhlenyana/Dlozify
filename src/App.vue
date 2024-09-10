<template> 
<div class="container-fluid">
<div class="row"> 
  <!-- <div class="col-md-3 order-1 order-md-2">

  <nav-bar-view/>
 </div>  -->
 <div class="row flex-column-reverse flex-md-row" >
  <!-- <spinner-view/> -->
     <router-view/>
     
   <!-- <home-page/> -->
 </div> 
 
 
  <div class="col-12 bg-dark text-white p-2 fixed-bottom">
    <footer-view/> 
  </div>
 
 

  
 </div>
</div>
</template>
<script>
// import SpinnerView from './views/SpinnerView.vue';

// import HomePage from './views/HomePage.vue';
// import NavBarView from './views/NavBarView.vue';
export default{
  components:{
    // SpinnerView

// NavBarView
    // HomePage
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
  margin-left: 0;
}
.row{
  padding: 0;
}
</style>
