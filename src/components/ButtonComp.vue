<template >
    <div>
        <button
                      v-if="createView === false"
                      @click="createViewIf(userID)"
                      class="follow-button"
                    >
                      +Follow
                    </button>
                    <button
                      v-if="createView"
                      @click="createViewIf(userID)"
                      class="follow-button"
                    >
                      Followed
                    </button>
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
        }
    }
}
</script>
<style scoped>
    .follow-button {
  padding: 10px 20px;
  background-color: #3f0639;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  /* margin-right: 10px; */
  position: absolute;
  bottom: 0;
  right: 20px;
  top:3px;
  height: 40px;
  
  
}
</style>