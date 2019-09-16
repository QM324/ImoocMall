<template>
  <div id="app">
    <img src="./assets/logo.png">
     <router-view class="main"></router-view>
    <router-view name='title' class="left"></router-view>
    <router-view name='img' class="right"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.left,.right,.main{
  width: 49%;
  float: left;
  border: 1px solid red;
}
</style>
