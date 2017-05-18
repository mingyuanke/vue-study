<template>
  <div class="filter">
    <span>{{msg| uppercase}}</span>
  </div>
</template>

<script>
  export default {
    name: 'filter',
    data () {
      return {
        msg: 'Welcome to Your Vue.js filter',

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.filter{

}
</style>
