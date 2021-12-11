<template>
  <b-container class="p-5">
    <b-row v-if="products !== null ">
      <b-col cols="3" v-for="product in products" :key="product.id">
        <Product
            :product="product"
            :wishlistpage="true"
            @remove="removeWishlist"
        />
      </b-col>
    </b-row>
    <b-row v-else>
      <b-col cols="12" class="text-center">
        <h2>Nenhum item na Lista de Desejos</h2>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Product from "../components/Produtcts/Product";

export default {
  name: "WishList",
  components: {
    Product
  },
  data (){
    return{
      products: null,
    }
  },
  created () {
    this.loadProducts()
  },
  methods: {
    async loadProducts () {
      try {
        const res = window.localStorage.getItem('WishList')
        this.products = JSON.parse(res)
      } catch (error) {
        console.error(error)
      }
    },
    removeWishlist (e) {
      let i = this.products.map(e => e.id).indexOf(e.id)
      this.products.splice(i, 1)
      this.updateWishlist(this.wishlist)
    },
    updateWishlist (wishlist) {
      let storage = window.localStorage;
      storage.setItem('WishList', JSON.stringify(wishlist))
    },
  }
}
</script>

<style scoped>

</style>
