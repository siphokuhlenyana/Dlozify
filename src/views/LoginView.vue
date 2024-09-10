<template lang="">
    <div>
        <h2 class="login-header ">Already have an account? Login😁</h2>
        <div class="login-wrapper">
            
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
    /* .login-wrapper{

    } */
     button{
        padding: 10px 20px;
  background-color: #3f0639;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 10px;
     }
</style>