<template lang="">
    <div class="login">
        
        <div class="login-wrapper">
           <h2 class="login-header " :style="{marginLeft:'50px'}">Already have an account? Login😁</h2> 
        <label>Username :<br><input type="text" v-model="username" required></label><br>
        <label>Password  :<br><input type="password" v-model="password" required></label><br>
        <button @click="loginUser()">Submit</button>
    </div>
    </div>
  
</template>
<script>
import router from '@/router';
export default {
    data(){
        return{
            username:'',
            password:''
        }
    },
    methods: {
        loginUser(){
            this.$store.dispatch('loginUser',{username:this.username, password:this.password})
            // alert('Yayyyy user Logged in !')
            // location.reload()
            router.push('/FeedsView')
        }
      }
    
    }

</script>
<style  scoped>
@import url('https://fonts.googleapis.com/css2?family=Nerko+One&display=swap');
input{
    background-color:#A51196 ;
}
label ,input{
    display: flex;
    justify-content: center;
}
    .login-wrapper{
        background-color: #ffffff51;
      width: 550px;
      height: 250px;
      border-radius: 10%;
      margin-top: 2rem;
    }
    .login-header {
        color: #fff;
        font-family: "Nerko One", cursive;
  font-weight: 400;
  font-style: normal;
    }
     .login{
        font-weight: 900;
  font-family: "Nerko One", cursive;
  font-weight: 400;
  font-style: normal;
     }
     button{
        padding: 10px 20px;
  background-color: #3f0639;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 10px; font-weight: 900;
  font-family: "Nerko One", cursive;
  font-weight: 400;
  font-style: normal;
     }
     label{
        font-family: "Nerko One", cursive;
  font-weight: 400;
  font-style: normal;
  color: #fff;
     }
</style>