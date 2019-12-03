<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">v-model</router-link> |
      <router-link to="/custom-directive">Custom Directive</router-link> |
      <router-link to="/render-props">Render Props</router-link> |
      <router-link to="/plugin">Plugin</router-link> |
      <router-link to="/mixins">Mixins</router-link> |
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
