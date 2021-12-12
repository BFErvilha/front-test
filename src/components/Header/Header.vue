<template>
  <b-container>
    <b-row>
      <b-col>
        <b-navbar toggleable="lg">
          <b-navbar-brand href="#">
            MagaNet
          </b-navbar-brand>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item href="#">
                <span class="material-icons ajust-icon">location_on</span>
                Cidade: São Paulo
              </b-nav-item>
              <b-nav-item href="#">
                <span class="material-icons ajust-icon">call</span>
                Central de Atendimento
              </b-nav-item>
              <b-nav-item :to="'/wishlist'">
                  <span class="material-icons ajust-icon">favorite</span>
                  Lista de desejos
              </b-nav-item>
            </b-navbar-nav>
          </b-collapse>
          <div class="input-position">
            <vs-input icon="search" placeholder="Buscar" v-model="search" @input="$emit('search', search)"/>
          </div>
        </b-navbar>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Header",
  data:()=>({
    activeItem: 0,
    search: null
  }),
}
</script>

<style scoped lang="scss">

  .navbar-brand{
    font-family: 'COCOGOOSE', sans-serif !important;
    color: white!important;
    font-size: 30px;
  }

  .navbar-nav{
    margin: 0 auto;
    justify-content: space-between!important;
    width: 70%;

    li{
      a{
        color: white!important;
        font-family: 'COCOGOOSE', sans-serif !important;
        font-weight: lighter;
      }
    }
  }

  .ajust-icon{
    float: left;
    margin-right: 7px;
  }

</style>
