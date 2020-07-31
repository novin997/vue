<template>
  <div id="app">
    <b-navbar class="navbar" variant="dark" type="light">
        <b-link class="m-2 text-white" to ="/">
          Home
        </b-link>
        <b-link class="m-2 text-white" to ="/animelist">
          AnimeList
        </b-link>
    </b-navbar>
    <router-view />
  </div>
</template>

<style lang="scss">
  @import 'node_modules/bootstrap/scss/bootstrap';
  @import 'node_modules/bootstrap-vue/src/index.scss';

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .navbar a:hover{
    text-decoration:none;
  }

</style>
