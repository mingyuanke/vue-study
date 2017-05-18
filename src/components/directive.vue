<template>
  <div class="directive">
    <label for="test">输入</label><input id="test" v-model="msg"/>
    <label for="show">显示</label><input id="show" v-my-model="msg"><br>
    <span>{{msg2}}</span>
    <button v-on:click="changeMsg">update</button>
  </div>
</template>

<script>
  export default {
    name: 'directive',
    data () {
      return {
        msg: 'directive',
        msg2: 'update'
      }
    },
    methods:{
        changeMsg(){
            this.msg2=new Date().getTime().toString()
        }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .directive{

  }
</style>
