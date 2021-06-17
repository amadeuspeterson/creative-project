<template>
  <div id="app">
    <div id="nav">
      <img src="favicon.ico">
      <router-link to="/"><i class="fas fa-home"></i></router-link>
      <router-link to="/Favorite.vue"><i class="fa fa-star"></i></router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
* { margin: 0; }

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#nav {
  padding: 30px;
  width: 100%;
  background-color: #f2f2f2;
  display: flex;
  text-align: center;
}

#nav a {
  font-size: 20px;
  font-weight: bold;
  color: #2c3e50;
}

#nav i {
  padding: 30px;
}

#nav img {
  max-height: 50px;
  padding-right: 50px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
