<template>
  <vs-card actionable class="cardx">
    <div class="favorite">
      <span class="material-icons">favorite</span>
    </div>

    <div slot="media">
      <img :src="pdt.image">
    </div>
    <div>
      <span>{{pdt.title}}</span>
    </div>
  </vs-card>
</template>

<script>
export default {
  name: "Product",
  props: {
    product: Object
  },
  data() {
    return {
      pdt: null
    }
  },
  created() {
    this.pdt = this.product
  }
}
</script>

<style scoped lang="scss">

.favorite{
  background: #000000;
  display: inline-block;
  height: 40px;
  position: relative;
  width: 30px;
  border-radius: .375rem .375rem 0 0 !important;

  float: left;
  top: -300px;
  left: -2px;

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
}
</style>
