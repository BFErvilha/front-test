<template>
  <b-container class="p-5">
    <b-row>
      <b-col cols="3" v-for="(product, index) in products" :key="index">
        <Product :product="product" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
// @ is an alias to /src

import axios from "axios";
import Product from "../components/Produtcts/Product";

export default {
  name: 'Home',
  components: {
    Product
  },
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
