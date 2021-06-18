<template>
  <div id="app">
    <div id="nav">
      <img src="favicon.ico">
      <router-link to="/"><i class="fas fa-home"></i></router-link>
      <router-link to="/Favorites.vue"><i class="fa fa-star"></i></router-link>
    </div>
    <div id="page">
      <router-view />
    </div>
    <div id="footer">
      <a href="https://github.com/amadeuspeterson/creative-project">GitHub</a>
    </div>
  </div>
</template>

<style>
* { margin: 0; }

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #42b983;
}

#nav {
  padding: 30px;
  width: 100%;
  background-color: #f2f2f2;
  display: flex;
  text-align: center;
}

#page {
  display: block;
  background-color: white;
  width: 94%;
  min-height: 700px;
  margin: auto;
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

#footer {
  align-items: center;
  background: #f2f2f2;
}
</style>
