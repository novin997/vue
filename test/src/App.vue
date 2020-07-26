<template>
  <div id="app">
    <div id="nav">
      <h1>Novin's Anime Webpage</h1>
      <div class="navlink">
        <router-link to="/">Home</router-link> |
        <router-link to="/animelist">AnimeList</router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  background-color: lime;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  & > * {
    margin:10px;
  }

  h1 {
    color:black;
    margin-right:auto;
    margin-left:200px;
  }

  .navlink{
    margin:auto;

    a {
      font-weight: bold;
      color: white;

      &.router-link-exact-active {
        color: dimgray;
      }
    }
  }
}
</style>
