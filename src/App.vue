<template>
  <div id="app">
    <img src="./assets/logo.png">
    <ul>
      <li><a href="/#/">basis</a></li>
      <li><a href="/#/vuexpage" >Vuex</a></li>
      <li><a href="/#/resources" >Resources</a></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    font-size: 30px;
    color: #42b983;
    text-decoration: none;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
