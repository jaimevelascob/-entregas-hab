<template>
  <div class="main">
    <!-- NOMBRE DE LA PAGINA -->
    <vue-headful title="Home" description="Home page" />
    <!-- /NOMBRE DE LA PAGINA -->
    <!-- MENU -->
    <Menu></Menu>
    <!-- /MENU -->
    <!-- LOGIN -->
    <Login></Login>
    <!-- /LOGIN -->
  </div>
</template>

<script>
import axios from "axios"; // Importando AXIOS
import Login from "@/components/Login.vue";
// IMPORTANDO MENU
import Menu from "@/components/Menu.vue";

export default {
  name: "Home",
  components: {
    Login,
    Menu
  }
};
</script>

<style scoped>
.main {
  padding-top: 8rem;
}

@media only screen and (max-width: 767px) {
}
</style>