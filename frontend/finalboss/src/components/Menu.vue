<template>
  <div class="aw-container">
    <div class="aw-section-link aw-navigation">
      <!-- LOGO-->
      <a class="logo" href="#">Aw!</a>
      <nav class="navigation">
        <ul>
          <!-- RUTA PRODUCTOS-->
          <li>
            <router-link :to="{ name: 'Products' }">Productos</router-link>|
          </li>
          <!-- RUTA CLIENTES-->
          <li>
            <router-link :to="{ name: 'clientes' }">Clientes</router-link>|
          </li>
          <!-- RUTA ADD-CLIENT-->
          <li>
            <router-link :to="{ name: 'addClient' }">Add Client</router-link>|
          </li>
          <!-- RUTA ABOUT-->
          <li>
            <router-link :to="{ name: 'About' }">About</router-link>
          </li>
          <li>
            <!-- NOMBRE USER -->
            <p>{{nombreUsuario}}</p>
            <!-- LOGOUT -->
            <button @click="logoutUser()">LOGOUT</button>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script>
// IMPORTANDO FUNCION CLEARLOGIN
import { clearLogin } from "../api/utils";
// COGER EL TOKEN
import { getIsAdmin } from "../api/utils";
export default {
  name: "Menu",
  data() {
    return {
      nombreUsuario: ""
    };
  },
  methods: {
    logoutUser() {
      this.$router.push("/");
      return clearLogin();
    },
    getUserName() {
      this.nombreUsuario = localStorage.getItem("Usuario");
    }
  },

  created() {
    this.getUserName(), getMenu();
  }
};
</script>
<style scoped>
* {
  color: #333;
  font-size: 1.2rem;
  line-height: 1.6rem;
  margin: 0;
}
:first-letter {
  color: #dca453;
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
button {
  flex-wrap: wrap;
  width: 80px;
  cursor: pointer;
  text-align: center;
  color: white;
  background: #42b983;
  border: 2px solid #d6cdb6;
  border-radius: 20px;
  padding: 0.5rem;
  margin: 0.667rem;
  font-weight: bold;
  overflow-wrap: break-word;
}
.aw-container {
  background: #333;
  color: white;
  padding: 2rem 0;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
}
.navigation ul {
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
  align-items: baseline;
}
.navigation ul li {
  display: inline-block;
}
.navigation ul li a {
  display: block;
  padding: 0.5rem 1rem;
  transition: all 0.4s linear;
  border-radius: 5px;
}
.navigation ul li a:hover {
  background: rgb(100, 100, 100);
}
p {
  color: white;
}
.logo {
  padding: 0.5rem;
  letter-spacing: 15px;
  font-size: 1.2em;
  border: solid 2px #fff;
  border-radius: 10%;
}

@media only screen and (max-width: 767px) {
  .navigation {
    width: 100%;
    margin-top: 1rem;
  }

  .navigation ul.show {
    display: block;
  }
  .navigation ul li a {
    display: block;
    padding: 0.5rem 1rem;
    transition: all 0.4s linear;
    border-radius: 5px;
  }
  .navigation ul li a:hover {
    background: rgb(100, 100, 100);
  }
}
</style>>

