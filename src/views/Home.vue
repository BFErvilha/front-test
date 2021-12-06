<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div v-for="(product, index) in products" :key="index">
      <p>{{product.title}}</p>
      <p>{{product.currencyId}}</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import axios from "axios";

export default {
  name: 'Home',
  data (){
    return{
      apiUrl: 'https://run.mocky.io/v3/66063904-d43c-49ed-9329-d69ad44b885e',
      products: null,
    }
  },
  created () {
    this.loadProducts()
  },
  methods: {
    async loadProducts () {
      try {
        const res = await axios.get(this.apiUrl)
        this.products = res.data.products
        console.log (this.products)
      } catch (error) {
        console.error(error)
      }
    },
  }
}
</script>
