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
            alert('Yayyyy user Logged in !')
            location.reload()
        }
      }
    
    }

</script>
<style  scoped>
    .login-wrapper{

    }
</style>