<template>
  <div>
    <!-- MENU -->
    <Menu></Menu>
    <div id="aw-contact" class="klk">
      <p v-show="required">Tienes datos sin completar</p>
      <label for="nombre"></label>
      <input type="text" name="nombre" placeholder="Nombre del cliente" v-model="nombre" />
      <br />
      <label for="apellido"></label>
      <input type="text" name="apellido" placeholder="Apellido del cliente" v-model="apellido" />
      <br />
      <label for="ciudad"></label>
      <input type="text" name="ciudad" placeholder="Ciudad del cliente" v-model="ciudad" />
      <br />
      <label for="empresa"></label>
      <input type="text" name="empresa" placeholder="Empresa del cliente" v-model="empresa" />
      <br />
      <button @click="addClient(nombre, apellido, ciudad, empresa)">CREAR</button>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src

import axios from "axios"; // Importando AXIOS

//IMPORTANDO SWEETALERT
import Swal from "sweetalert2";
// IMPORTANDO MENU
import Menu from "@/components/Menu.vue";
// IMPORTANDO Footer
import Footer from "@/components/Footer.vue";

export default {
  name: "AddClient",
  components: {
    Menu,
    Footer
  },
  data() {
    return {
      nombre: "",
      apellido: "",
      ciudad: "",
      empresa: "",
      correctData: false,
      required: false
    };
  },
  methods: {
    validatingData() {
      if (
        this.nombre === "" ||
        this.apellido === "" ||
        this.ciudad === "" ||
        this.empresa === ""
      ) {
        this.correctData = false;
        this.required = true;
      } else {
        this.correctData = true;
        this.required = false;
      }
    },
    addClient(nombre, apellido, ciudad, empresa) {
      this.validatingData();
      if (this.correctData == true) {
        let self = this;
        axios
          .post("http://localhost:3000/add", {
            nombre: self.nombre,
            apellido: self.apellido,
            ciudad: self.ciudad,
            empresa: self.empresa
          })
          .then(function(response) {
            self.emptyFields();
            Swal.fire({
              icon: "success",
              title: "Dicho y hecho",
              showConfirmButton: false,
              timer: 1500
            }).then(result => location.reload());
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    },
    emptyFields() {
      (this.nombre = ""),
        (this.apellido = ""),
        (this.ciudad = ""),
        (this.empresa = "");
    }
  }
};
</script>
<style scoped>
.klk {
  padding-top: 6rem;
  padding-right: 12.8px;
  padding-left: 12.8px;
}
label {
  display: flex;
}
input {
  display: block;
  width: 100%;
  height: 2em;
  padding: 0 0.5em;
  border-radius: 3px;
}
#aw-contact label *::-webkit-input-placeholder {
  color: #ccc;
  font-style: italic;
}
#aw-contact label *::-moz-placeholder {
  color: #ccc;
  font-style: italic;
}
#aw-contact label *:-ms-input-placeholder {
  color: #ccc;
  font-style: italic;
}
#aw-contact label *:-moz-input-placeholder {
  color: #ccc;
  font-style: italic;
}
#aw-contact label {
  resize: none;
  height: 100px;
}
#aw-contact button {
  border: none;
  margin-top: 20px;
  padding: 10px 30px;
  color: #fff;
  background-color: #dca352;
  box-shadow: inset 0 -3px 0 0 #c79652;
  text-transform: uppercase;
  font-size: 16px;
  cursor: pointer;
  outline: none;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
#aw-contact button:hover {
  color: #f5f5f5;
  box-shadow: inset 0 -3px 0 0 #a27c47;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

p {
  color: rebeccapurple;
}
</style>
