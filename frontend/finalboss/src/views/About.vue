<template>
  <div class="main">
    <!-- NOMBRE DE LA PAGINA -->
    <vue-headful title="About" description="About page" />
    <!-- /NOMBRE DE LA PAGINA -->
    <!-- MENU -->
    <Menu></Menu>
    <!-- /MENU -->
    <div class="about">
      <h1 id="f" class="h">SEE YOU</h1>
      <img
        src="https://media1.tenor.com/images/8b2cb165eff1ea30ac5900c78121c27a/tenor.gif?itemid=11058796"
        alt="gif"
      />
      <h1 id="r" class="h">SOON</h1>
    </div>
    <!-- FOOTER -->
    <Footer></Footer>
    <!-- /FOOTER -->
  </div>
</template>
<script>
import axios from "axios";

// IMPORTANDO MENU
import Menu from "@/components/Menu.vue";

// IMPORTANDO FOOTER
import Footer from "@/components/Footer.vue";

export default {
  name: "About",
  components: {
    Menu,
    Footer
  }
};
</script>

<style scoped>
.main {
  padding-top: 17rem;
}
img {
  border-radius: 45%;
  box-shadow: 4px 3px 25px #ff8263;
  padding: 0.15rem;
}
.about {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 5.5rem;
  padding-bottom: 7rem;
}

#r {
  width: 20%;
  color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-transform: rotate(17deg);
  transform: rotate(17deg);
  cursor: pointer;
  -webkit-animation: pulsate 3s ease-in-out;
  -webkit-animation-iteration-count: infinite;
  opacity: 0.3;
  box-shadow: 4px 3px 15px #ed63ff;
}
#f {
  width: 20%;
  color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-transform: rotate(17deg);
  transform: rotate(17deg);
  cursor: pointer;
  -webkit-animation: pulsate 3s ease-in-out;
  -webkit-animation-iteration-count: infinite;
  opacity: 0.3;
  box-shadow: 4px 3px 15px #87ff63;
}
@-webkit-keyframes pulsate {
  0% {
    opacity: 0.4;
  }
  50% {
    opacity: 0.1;
  }
  100% {
    opacity: 0.4;
  }
}
</style>
