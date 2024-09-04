<template lang="">
    <div>
        <h2>Already have an account? Login😁</h2>
        <label>Username :<br><input type="text" v-model="username" required></label><br>
        <label>Password  :<br><input type="password" v-model="password" required></label><br>
        <button @click="loginUser()">Submit</button>
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
<style lang="">
    
</style>