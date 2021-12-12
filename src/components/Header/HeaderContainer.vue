<template>
  <div>
    <b-container fluid class="header">
      <Header @search="search"/>
    </b-container>
    <b-container>
      <b-breadcrumb>
        <b-breadcrumb-item to="/">
          <b-icon icon="house-fill" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon> Home
        </b-breadcrumb-item>
        <b-breadcrumb-item v-for="item in items" :key="item.path" :to="item.path">{{ item.meta.breadcrumb }}</b-breadcrumb-item>
      </b-breadcrumb>
    </b-container>
  </div>
</template>

<script>
import Header from "./Header";

export default {
  name: "HeaderContainer",
  components:{
    Header
  },
  data () {
    return{
      items: [],
    }
  },
  created () {
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
    },
    search (e) {
      this.$emit('searchData', e)
    }
  }
}
</script>

<style scoped>

</style>
