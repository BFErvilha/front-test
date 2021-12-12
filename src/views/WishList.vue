<template>
  <div>
    <HeaderContainer @searchData="search"/>
    <b-container class="p-5">
      <b-row v-if="hiddenBox === false ">
        <b-col cols="12" md="3" v-for="product in filteredProducts" :key="product.id">
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
  </div>
</template>

<script>
import Product from "../components/Produtcts/Product";
import HeaderContainer from "../components/Header/HeaderContainer";

export default {
  name: "WishList",
  components: {
    Product,
    HeaderContainer
  },
  props:{
    searchData: String
  },
  data (){
    return{
      products: null,
      hiddenBox: null,
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
      try {
        const res = window.localStorage.getItem('WishList')
        this.products = JSON.parse(res)
        this.hiddenBox = false
      } catch (error) {
        console.error(error)
      }
    },
    removeWishlist (e) {
      let i = this.products.map(e => e.id).indexOf(e.id)
      this.products.splice(i, 1)
      this.updateWishlist(this.wishlist)
      if (this.products.length === 0) {
        this.$router.go(this.$router.currentRoute)
      }
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

<style scoped>

</style>
