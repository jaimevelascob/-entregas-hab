<template>
  <div class="error">
    <!-- NOMBRE DE LA PAGINA -->
    <vue-headful title="Error" description="Error page of web" />
    <!-- /NOMBRE DE LA PAGINA -->
    <!-- IMPORTANDO MENU -->
    <Menu></Menu>
    <!-- /MENU -->
    <div class="ra">
      <div class="re">
        <div class="h">
          <h1 id="f" class="h">ERROR</h1>
          <img
            src="https://media1.tenor.com/images/2f57d8dc4113293da5a4f8b3635a968e/tenor.gif?itemid=12154897"
            alt="gif"
          />
          <h1 id="r" class="h">ERROR</h1>
        </div>
      </div>
    </div>
    <!-- MENU -->
    <!-- IMPORTANDO Footer -->
    <Footer></Footer>
  </div>
</template>

<script>
// IMPORTANDO MENU
import Menu from "@/components/Menu.vue";

// IMPORTANDO FOOTER
import Footer from "@/components/Footer.vue";

export default {
  name: "Error",
  components: {
    Menu,
    Footer,
  },
};
</script>

<style scoped>
.error {
  padding-top: 15rem;
}
.h {
  justify-content: space-between;
  display: flex;
  padding-top: 6rem;
  padding-bottom: 7.5rem;
  width: 100%;
  align-items: center;
}
.ra {
  align-items: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.re {
  display: inline-block;
}
img {
  box-shadow: 4px 3px 15px #000000;
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
  color: rgb(81, 255, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-transform: rotate(170deg);
  transform: rotate(170deg);
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
@media screen and (min-width: 768px) {
  .ra {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 5.5rem;
    padding-bottom: 7rem;
  }
}
</style>
