<template>
  <div id="nav">
    <router-link to="/marco">Marco</router-link> |
    <router-link to="/dominik">Dominik</router-link> |
    <router-link to="/Jan">Jan</router-link> |
    <router-link to="/mikail">Mikail</router-link> |
    <router-link to="/niklas">Niklas</router-link> |
    <router-link to="/pitt">Pitt</router-link> |
    <router-link to="/Tobi">Tobias</router-link>
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
