<template>
  <div class="main">
    <!-- MENU -->
    <Menu></Menu>
    <h2>Lista de Productos</h2>
    <!-- IMPORTANDO PRODUCTOS -->
    <productos :products="products"></productos>
    <!-- FOOTER -->
    <Footer></Footer>
    <!-- /FOOTER -->
  </div>
</template>

<script>
import axios from "axios";
import productos from "@/components/showProducts.vue";
// IMPORTANDO MENU
import Menu from "@/components/Menu.vue";
// IMPORTANDO Footer
import Footer from "@/components/Footer.vue";

export default {
  name: "Products",
  components: {
    productos,
    Menu,
    Footer
  },
  data() {
    return {
      products: []
    };
  },
  methods: {
    getProducts() {
      let self = this;
      axios
        .get("http://localhost:3000/productos")
        .then(function(response) {
          self.products = response.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  created() {
    this.getProducts();
  }
};
</script>

<style scoped>
.main {
  padding-top: 10rem;
}

h2 {
  padding: 1rem;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-transform: rotate(15deg);
  transform: rotate(15deg);
  cursor: pointer;
  -webkit-transition: opacity 0.3s ease;
  transition: opacity 0.3s ease;
}
h2:hover {
  opacity: 0.7;
}
</style>>