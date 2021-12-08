<template>
  <div id="app">
    <b-container fluid class="header">
      <Header />
    </b-container>
    <router-view/>
  </div>
</template>

<script>
import Header from "./components/Header/Header";

export default {
  components: {
    Header
  }
}
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.header{
  height: 180px;
  background-color: #5a2d82;
  border-top: 5px solid #37104f;
  padding: 20px 50px;
}
</style>
