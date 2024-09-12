<template>
  <div v-if="$cookies.get('token')">
      <button @click="logOut">Logout </button>
    </div>
    <div v-else>
        <button @click="SignIn" >SignUp/SignIn</button>
  </div>
</template>

<script>
import {toast} from 'vue3-toastify'
export default {
    data() {
        return {
            // createView:false
        }
    },
    methods:{
        createViewIf(){
            this.createView = !this.createView;
            this.$emit('createViewIf')
        },
        logOut(){
            this.$cookies.remove('token')
            location.reload();
            toast("You have Logged out successfully !", {
        "theme": "dark",
        "type": "success",
        "position": "top-center",
        "dangerouslyHTMLString": true
      })
        }
    }
}
</script>

<style scoped>
button{
  padding: 10px 20px;
  background-color: #a51196;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 25px;
  font-weight: 900;
  font-family: "Nerko One", cursive;
  font-weight: 400;
  font-style: normal;
}
</style>