<template>
    <vs-card actionable class="cardx">
      <div v-if="wishlistpage === false" @click="addItem" class="favorite">
        <span class="material-icons" :class=" isWishlist ? 'color-red' : ' '">favorite</span>
      </div>

      <div v-if="wishlistpage === true" @click="removeItem" class="remove">
        <span class="material-icons-outlined">cancel</span>
      </div>

      <div class="product-img">
        <img :src="pdt.image">
      </div>
      <div class="product-info">
        <h3 class="title">
          {{pdt.title}}
        </h3>
        <p>
          {{ pdt.currencyFormat }} {{ formatPrice(pdt.price) }}
        </p>
      </div>
    </vs-card>
</template>

<script>


export default {
  name: "Product",
  props: {
    product: Object,
    isWishlist: Boolean,
    wishlistpage: Boolean
  },
  data() {
    return {
      pdt: {},
    }
  },
  created() {
    this.pdt = this.product
  },
  methods: {
    formatPrice(value) {
      let val = (value/1).toFixed(2).replace('.', ',')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    },
    addItem() {
      console.log(this.pdt)
      if(this.isWishlist) {
        this.removeItem()
      } else {
        this.$emit('add', this.pdt)
        this.isWishlist = true
      }
    },
    removeItem(){
      console.log(this.pdt)
      this.$emit('remove', this.pdt)
      this.isWishlist = false
      }
    }
}
</script>

<style scoped lang="scss">

.remove{

  position: relative;
  float: right;
  top: -5 px;
  z-index: 10;
  right: -5 px;

  span {
    &:hover{
      color: #ff4141;
    }
  }
}

.favorite{
  background: #000000;
  display: inline-block;
  height: 40px;
  position: relative;
  width: 30px;
  border-radius: .375rem .375rem 0 0 !important;

  float: left;
  top: -15px;
  z-index: 10;

  &:after{
    border-bottom: 14px solid #000000;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-bottom-radius: .375rem;
    content: "";
    height: 0;
    left: 0;
    position: absolute;
    top: 40px;
    width: 0;
    transform: rotate(180deg);
  }

  span{
    color: white!important;
    margin-top: 9px;
  }

  .color-red{
    color: red!important;
  }
}

.product-img{
  width: 150px;
  height: 120px;
  margin: 0 auto;

  img{
    width: 100%;
    border-radius: .375rem;
  }
}

.product-info {
  margin-top: 40px;

  h3{
    font-size: 16px;
    font-weight: bold;
    font-family: Avenir, Helvetica, Arial, sans-serif;
  }

  p{
    color: #ffd110;
    font-weight: bold;
    margin-top: 30%;
    font-size: 16px;
  }
}
</style>
