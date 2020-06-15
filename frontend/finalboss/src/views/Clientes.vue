<template>
  <div class="main">
    <!-- MENU -->
    <Menu></Menu>
    <h2>Lista de clientes</h2>
    <!-- CLIENTES -->
    <clients :clients="clients" v-on:edit="openModal" v-on:delete="deleteClients"></clients>
    <!-- /CLIENTES -->

    <!-- MODAL PARA EDITAR -->
    <div class="modal" v-show="modal">
      <div class="modalBox" v-on:edit="showEditText">
        <h3>Editar cliente</h3>
        <p v-show="required">Tienes datos sin completar</p>

        <div>
          <label for="newNombre">Nombre:</label>
          <input v-model="newNombre" placeholder="Nombre" />
        </div>

        <div>
          <label for="newApellido">Apellido:</label>
          <input v-model="newApellido" placeholder="Apellido" />
        </div>

        <div>
          <label for="newCiudad">Ciudad:</label>
          <input v-model="newCiudad" placeholder="Ciudad" />
        </div>

        <div>
          <label for="newEmpresa">Empresa:</label>
          <input v-model="newEmpresa" placeholder="Empresa" />
        </div>

        <div>
          <button @click="editClient()" class="update">UPDATE</button>
          <button @click="closeModal()" class="update">CERRAR</button>
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
    Footer
  },
  data() {
    return {
      clients: [],
      modal: false,
      newCiudad: "",
      newEmpresa: "",
      newApellido: "",
      newNombre: "",
      id: null,
      correctData: false,
      required: false
    };
  },
  methods: {
    //COMPROBAR QUE LOS DATOS NO ESTÁN VACIOS
    validatingData() {
      if (
        this.newCiudad === "" ||
        this.newEmpresa === "" ||
        this.newApellido === "" ||
        this.newNombre === ""
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
          id: this.id
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
      this.id = data.id;
      this.newCiudad = data.ciudad;
      this.newEmpresa = data.empresa;
      this.newNombre = data.nombre;
      this.newApellido = data.apellido;
    },
    // EDITAR CLIENTE
    editClient() {
      this.validatingData();
      if (this.correctData == true) {
        let self = this;
        axios
          .put("http://localhost:3000/clientes/update/" + self.id, {
            id: self.id,
            nombre: self.newNombre,
            apellido: self.newApellido,
            ciudad: self.newCiudad,
            empresa: self.newEmpresa
          })
          // if works
          .then(function(response) {
            self.emptyFields();
            // Swal.fire({
            //   icon: "success",
            //   title: "Cliente editadovich",
            //   showConfirmButton: false,
            //   timer: 1500
            // }).then(result => location.reload());
          })
          // if not works
          .catch(function(error) {
            console.log(error);
          });
      }
    },
    // ABRIR MODAL
    openModal() {
      this.modal = true;
    },
    // CERRAR MODAL
    closeModal() {
      this.modal = false;
    },
    // Limpiar campos
    emptyFields() {
      (this.newCiudad = ""),
        (this.newEmpresa = ""),
        (this.newApellido = ""),
        (this.newNombre = "");
    }
  },
  created() {
    this.getClients();
  }
};
</script>

<style scoped>
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
p {
  color: rebeccapurple;
}

h2 {
  padding: 1rem;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-transform: rotate(deg);
  transform: rotate(17deg);
  cursor: pointer;
  -webkit-transition: opacity 0.3s ease;
  transition: opacity 0.3s ease;
}
h2:hover {
  opacity: 0.7;
}
</style>
