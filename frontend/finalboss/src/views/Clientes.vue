<template>
  <div class="main">
    <!-- NOMBRE DE LA PAGINA -->
    <vue-headful title="Clientes" description="Clientes page" />
    <!-- /NOMBRE DE LA PAGINA -->
    <!-- MENU -->
    <div>
      <Menu></Menu>
    </div>
    <!-- /MENU -->
    <ul class="hhh">
      <h2>Lista de clientes</h2>
    </ul>
    <!-- CLIENTES -->
    <clients
      :clients="clients"
      v-on:edit="openModal"
      v-on:delete="deleteClients"
    ></clients>
    <!-- /CLIENTES -->

    <!-- MODAL PARA EDITAR -->
    <div class="modal" v-show="modal">
      <div class="modalBox" v-on:edit="showEditText">
        <div class="ez">
          <h3 class="rem">Editar cliente</h3>
          <p v-show="required">Tienes datos sin completar</p>
          <li class="al">
            <label for="newName">Nombre:</label>
            <input v-model="newName" placeholder="Nombre" />
          </li>
          <li class="al">
            <label for="newSurname">Apellido:</label>
            <input v-model="newSurname" placeholder="Apellido" />
          </li>
          <li class="al">
            <label for="newCity">Ciudad:</label>
            <input v-model="newCity" placeholder="Ciudad" />
          </li>
          <li class="al">
            <label for="newCompany">Empresa:</label>
            <input v-model="newCompany" placeholder="Empresa" />
          </li>
          <div>
            <button
              @click="editClient(newName, newSurname, newCity, newCompany)"
              class="update"
            >
              UPDATE
            </button>
            <button @click="closeModal()" class="update">CERRAR</button>
          </div>
        </div>
      </div>
    </div>
    <!-- Footer -->
    <Footer></Footer>
    <!-- /Footer -->
    <!-- /MODAL PARA EDITAR -->
  </div>
</template>

<script>
//IMPORTANDO AXIOS
import axios from "axios";
//IMPORTANDO CLIENTES
import clients from "@/components/showClients.vue";
//IMPORTANDO SWEETALERT
import Swal from "sweetalert2";
// IMPORTANDO MENU
import Menu from "@/components/Menu.vue";
// IMPORTANDO Footer
import Footer from "@/components/Footer.vue";

export default {
  name: "Clientes",
  components: {
    clients,
    Menu,
    Footer,
  },
  data() {
    return {
      clients: [],
      modal: false,
      newName: "",
      newSurname: "",
      newCity: "",
      newCompany: "",
      id: null,
      correctData: false,
      required: false,
    };
  },
  methods: {
    // COMPROBAR QUE LOS DATOS NO ESTÁN VACIOS
    validatingData() {
      if (
        this.newName === "" ||
        this.newSurname === "" ||
        this.newCity === "" ||
        this.newCompany === ""
      ) {
        this.correctData = false; // NON ENVIAR
        this.required = true; // MOSTRA O MENSAXE
      } else {
        this.correctData = true; // ENVIAR
        this.required = false; // NON MOSTRA O MENSAXE
      }
    },
    //COGER CLIENTES
    getClients() {
      let self = this;
      axios
        .get("http://localhost:3000/clientes")
        .then(function(response) {
          self.clients = response.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    // ELIMINAR CLIENTE
    deleteClients(data) {
      let self = this;
      this.id = data;
      axios
        .delete("http://localhost:3000/clientes/del/" + this.id, {
          id: this.id,
        })
        .then(function(response) {
          console.log(response);
          location.reload();
        })
        .catch(function(error) {
          console.log(error);
        });
    },

    showEditText(data) {
      this.newName = data.nombre;
      this.newSurname = data.apellido;
      this.newCity = data.ciudad;
      this.newCompany = data.empresa;
      this.id = data.id;
    },
    // FUNCIÓN PARA ACTUALIZAR/EDITAR
    editClient(newName, newSurname, newCity, newCompany) {
      this.validatingData();
      if (this.correctData == true) {
        let self = this;
        axios
          .put("http://localhost:3000/clientes/update/" + self.id, {
            id: self.id,
            nombre: self.newName,
            apellido: self.newSurname,
            ciudad: self.newCity,
            empresa: self.newCompany,
          })
          .then(function(response) {
            self.emptyFields();
            Swal.fire({
              icon: "success",
              title: "Dicho y hecho",
              showConfirmButton: false,
              timer: 1500,
            }).then((result) => location.reload());
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    },
    // ABRIR MODAL
    openModal(data) {
      this.modal = true;
      this.showEditText(data);
    },
    // CERRAR MODAL
    closeModal() {
      this.modal = false;
    },
    // Limpiar campos
    emptyFields() {
      this.newName = "";
      this.newSurname = "";
      this.newCity = "";
      this.newCompany = "";
    },
  },
  created() {
    this.getClients();
  },
};
</script>

<style scoped>
button {
  width: 100px;
  cursor: pointer;
  text-align: center;
  color: white;
  background: #af2851;
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
.modal {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
}

.modalBox {
  background: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}

.ez {
  display: flex;
  flex-direction: column;
  align-items: center;
}
p {
  color: rebeccapurple;
}
li {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #28af45;
}
h2 {
  padding: 1rem;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* -webkit-transform: rotate(15deg);
  transform: rotate(15deg); */
  cursor: pointer;
  -webkit-transition: opacity 0.3s ease;
  transition: opacity 0.3s ease;
}
.rem {
  cursor: pointer;
  -webkit-animation: pulsate 3s ease-in-out;
  -webkit-animation-iteration-count: infinite;
  opacity: 0.3;
}
.hhh {
  align-items: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
h2:hover {
  opacity: 0.7;
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
