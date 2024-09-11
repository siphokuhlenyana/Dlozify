<template>
  <div>
    <button  v-if="createView === false" @click="SignIn">SignUp/SignIn</button>
    <button v-if="createView" @click="logOut">Logout </button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            createView:false
        }
    },
    methods:{
        createViewIf(){
            this.createView = !this.createView;
            this.$emit('createViewIf')
        },
        logOut(){
            this.$cookies.remove('token')
        }
    }
}
</script>

<style>

</style>