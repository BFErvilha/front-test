<template>
  <div>
    <header-container @searchData="search"/>
    <b-container class="p-5">
      <b-row>
        <b-col cols="12" md="3" v-for="(product, index) in filteredProducts" :key="index">
          <Product
              :product="product"
              :wishlistpage="false"
              @add="addWishilist"
              @remove="removeWishlist"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src

import axios from "axios";
import Product from "../components/Produtcts/Product";
import HeaderContainer from "../components/Header/HeaderContainer";

export default {
  name: 'Home',
  components: {
    Product,
    HeaderContainer
  },
  props:{
    searchData: String
  },
  data (){
    return{
      apiUrl: 'https://run.mocky.io/v3/66063904-d43c-49ed-9329-d69ad44b885e',
      products: null,
      wishlist: [],
      colorLoading: '#5a2d82',
      searchQuery: '',
    }
  },
  created () {
    this.loadProducts()
  },
  computed: {
    filteredProducts (){
      if (this.searchQuery) {
        return this.products.filter(product => {
          return product.title.toLowerCase().includes(this.searchQuery)
        })
      }else {
        return this.products
      }
    }
  },
  methods: {
    async loadProducts () {
      this.$vs.loading({
        color: this.colorLoading
      })
      try {
        const res = await axios.get(this.apiUrl)
        this.products = res.data.products
        console.log (this.products)
        this.$vs.loading.close()
      } catch (error) {
        console.error(error)
      } finally {
        this.$vs.loading.close()
      }
    },
    addWishilist (e) {
      this.wishlist.push(e)
      this.updateWishlist(this.wishlist)
    },
    removeWishlist (e) {
      let i = this.wishlist.map(e => e.id).indexOf(e.id)
      this.wishlist.splice(i, 1)
      this.updateWishlist(this.wishlist)
    },
    updateWishlist (wishlist) {
      let storage = window.localStorage;
      storage.setItem('WishList', JSON.stringify(wishlist))
    },
    search(e) {
      this.searchQuery = e
    }
  }
}
</script>
