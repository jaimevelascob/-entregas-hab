 
<template>
  <div class="register">
    <!-- IMPORTANDO MENU -->
    <Menu></Menu>
    <!-- /IMPORTANDO MENU -->

    <!-- NOMBRE DE LA PAGINA -->
    <vue-headful title="Register" description="Register page" />
    <!-- /NOMBRE DE LA PAGINA -->
    <div class="registerBox">
      <h2>Registrate</h2>
      <p class="color1" v-show="required">Tienes datos sin completar</p>
      <p class="color2" v-show="match">No seas autista</p>
      <input type="email" name="email" v-model="email" placeholder="Email..." />
      <br />
      <input type="password" name="password" v-model="password" placeholder="Password..." />
      <br />
      <input
        type="password"
        name="password"
        v-model="repeatpassword"
        placeholder="Repeat password..."
      />
      <br />
      <div>
        <button @click="addUser(email, password)">Registro</button>
        <router-link :to="{ name: 'Login' }">Login</router-link>
      </div>
    </div>
  </div>
</template>
  
<script>
import axios from "axios"; // Importando AXIOS
// IMPORTANDO MENU
import Menu from "@/components/Menu.vue";

export default {
  name: "Register",
  components: {
    Menu
  },
  data() {
    return {
      email: "",
      password: "",
      repeatpassword: "",
      correctData: false,
      required: false,
      match: false
    };
  },
  methods: {
    //COMPROBAR QUE LOS DATOS NO ESTÁN VACIOS
    validatingData() {
      if (
        this.email === "" ||
        this.password === "" ||
        this.repeatpassword === ""
      ) {
        this.correctData = false;
        this.required = true;

        // SI LA PASS NO ES =
      } else if (this.password != this.repeatpassword) {
        this.match = true;

        // SI LA PASS ES =
      } else {
        this.correctData = true;
        this.required = false;
        this.match = false;
      }
    },
    //AÑADIR NUEVO USUARIO A LA BBDD
    addUser(email, password) {
      this.validatingData();
      if (this.correctData == true) {
        let self = this;
        axios
          .post("http://localhost:3000/users", {
            email: self.email,
            password: self.password
          })
          .then(function(response) {
            self.emptyFields();
          })
          .catch(function(error) {
            console.log(error);
          });
      } else {
        console.log("No has rellenado todos los campos");
      }
    },
    //LIMPIAR CAMPOS INPUT
    emptyFields() {
      (this.email = ""), (this.password = "");
      //MENSAJE SWAL
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
.register {
  padding: 1rem;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.registerBox {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  margin: 0 auto;
}

img {
  height: 500px;
  width: 500px;
  border-radius: 20px;
}
input {
  width: 40%;
  align-self: center;
  margin: 0.5rem;
  border: 2px solid white;
  border-radius: 20px;
}
input:focus {
  outline: none;
}
button {
  width: 80px;
  cursor: pointer;
  text-align: center;
  color: white;
  background: #3faf28;
  border: 2px solid #d6cdb6;
  border-radius: 20px;
  padding: 0.5rem;
  margin: 0.667rem;
  font-weight: bold;
}
button:hover {
  background-color: #008cba;
  color: white;
  border: 2px solid gray;
}
button:focus {
  outline: none;
}
a {
  color: #42b983;
  text-decoration: none;
}
.color1 {
  color: #ff0000;
}
.color2 {
  color: rebeccapurple;
}
h2 {
  padding-bottom: 1rem;
  font-size: 2rem;
}
</style>