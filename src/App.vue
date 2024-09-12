<template> 
<div class="container">
<nav-bar-view/>
  <router-view/> 
  </div>
  
<!-- <div class="row">  -->
  <!-- <div class="col-md-3 order-1 order-md-2">

  
 </div>  -->
 <!-- <div class="row flex-column-reverse flex-md-row" > -->
  <!-- <spinner-view/> -->
   
     
   <!-- <home-page/> -->
 <!-- </div>  -->
 
 <footer-view/> 
  <!-- <div class="col-12 bg-dark text-white p-2 fixed-bottom"> -->
   
  
 
 

  
 

</template>
<script>
// import SpinnerView from './views/SpinnerView.vue';

// import HomePage from './views/HomePage.vue';
import NavBarView from './views/NavBarView.vue';
import FooterView from './views/FooterView.vue';
export default{
  components:{
    // SpinnerView

NavBarView,
FooterView
    // HomePage
  }
}
</script>
<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin: 0;
  box-sizing: border-box;
  

}
body{
  padding: 0;
  margin: 0;
  margin-left: 0;
}
.container{
  display: flex;
  width: 100vw;
  margin: 0;
}

</style>
