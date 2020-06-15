<template>
  <div class="aw-container">
    <div class="aw-section-link aw-navigation">
      <!-- LOGO-->
      <!-- <a class="logo" href="#">Aw!</a> -->
      <nav class="navigation">
        <ul class="real">
          <!-- RUTA PRODUCTOS-->
          <li>
            <router-link :to="{ name: 'Products' }">Productos</router-link>
          </li>
          <!-- RUTA CLIENTES-->
          <li>
            <router-link :to="{ name: 'clientes' }">Clientes</router-link>
          </li>
          <!-- RUTA ADD-CLIENT-->
          <li>
            <router-link :to="{ name: 'addClient' }">Add Client</router-link>
          </li>
          <!-- RUTA ABOUT-->
          <li>
            <router-link :to="{ name: 'About' }">About</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
/* footer */
* {
  background: rgba(0, 0, 0, 0.8);
  font-size: 1.2rem;
  line-height: 1.6rem;
  margin: 0;
  margin-top: 10px;
  width: 100%;
  height: 175px;
}
:first-letter {
  color: #dca453;
}
.real {
}
.container {
  width: 85%;
  max-width: 850px;
  margin: 0 auto;
}

.aw-navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

a {
  color: white;
  text-decoration: none;
}
.aw-container {
  display: flex;
  align-items: flex-start;
  height: 200px;
}
.navigation ul {
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
  align-items: center;
  text-align: center;
}
.navigation ul li a {
  display: grid;
  align-items: center;
  transition: all 0.4s linear;
  text-align: center;
  border-radius: 5px;
}
.navigation ul li a:hover {
  background: rgb(100, 100, 100);
}

.logo {
  padding: 0.5rem;
  letter-spacing: 15px;
  font-size: 1.2em;
  border: solid 2px #fff;
  border-radius: 10%;
}
</style>>

