<template lang="">
    <div>
        <div v-for="post in $store.state.posts.data" :key="post.idpost"  class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
  {{post.description}}
     </div>
    </div>
</template>
<script>
export default {
    methods:{
   getPost(){
  this.$store.dispatch('getPost')
}       
    },
    mounted() {
        this.getPost()
    },
  
}
</script>
<style lang="">
    
</style>