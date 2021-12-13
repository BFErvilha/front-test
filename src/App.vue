<template>
  <div id="app">
    <VueGithubCorners :repoUrl="repoUrl" :catColor="catColor" :bgColor="bgColor" style="z-index: 1"></VueGithubCorners>
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      repoUrl: 'https://github.com/BFErvilha/finance-challenge',
      catColor: '#fff',
      bgColor: '#873deb'
    }
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

.breadcrumb{
  margin-top: 20px;

  li {
    color: #37104f;
    a{
      text-decoration: none;
      color: #37104f;

      &:hover{
        color: #5a2d82;
      }
      &:active{
        color: #5a2d82;
      }
    }
  }
}
</style>
