<template>
  <div id="app">
    <b-container fluid class="header">
      <Header />
    </b-container>
    <b-container>
      <b-breadcrumb>
        <b-breadcrumb-item to="/">
          <b-icon icon="house-fill" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon> Home
        </b-breadcrumb-item>
        <b-breadcrumb-item v-for="item in items" :key="item.path" :to="item.path">{{ item.meta.breadcrumb }}</b-breadcrumb-item>
      </b-breadcrumb>
    </b-container>
    <router-view/>
  </div>
</template>

<script>
import Header from "./components/Header/Header";

export default {
  components: {
    Header
  },
  data() {
    return{
      items: [],
    }
  },
  created() {
    this.getRoute()
  },
  watch:{
    $route(){
      this.getRoute()
    }
  },
  methods: {
    getRoute () {
      this.items = this.$route.matched;
      console.log(this.$route)
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
