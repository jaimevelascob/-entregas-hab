<template>
  <div>
    <div class="client" v-for="product in products" :key="product.id">
      <div class="esq">
        <div class="isq">
          <p class="id">ID: {{ product.id }}</p>
          <p>Nombre: {{ product.nombre }}</p>
          <p>Descripcion: {{ product.descripcion }}</p>
          <p
            :class="{ green: product.estado=== 'disponible', red: product.estado=== 'no disponible'}"
          >Estado: {{ product.estado }}</p>
          <p>Precio: {{ product.precio }}</p>
          <img :src="product.img" />
          <p
            :class="{ green: product.stock > '1', red: product.stock = '0'}"
          >Stock: {{ product.stock }}</p>
          <button @click="getClient()">comprar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "showProducts",
  props: {
    products: Array
  },
  methods: {
    getClient() {
      Swal.fire({
        icon: "success",
        title: "Cliente editadovich",
        showConfirmButton: false,
        timer: 1500
      }).then(result => location.reload());
    }
  }
};
</script>

<style scoped>
.red {
  color: red;
}
.green {
  color: green;
}
.id {
  display: block;
}
button {
  width: 100px;
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
.client {
  display: block;
  background-color: #f3f3f3;
  width: 100%;
  border-radius: 10px;
  margin-bottom: 30px;
  box-shadow: 0px 2px 5px rgb(255, 196, 196);
}
img {
  width: 400px;
}
@media screen and (min-width: 768px) {
  .client {
    width: 32%;
    float: left;
    margin-right: 2%;
  }
  .client:last-child {
    margin-right: 0;
  }
}
.esq {
  justify-content: space-between;
  display: flex;
  padding-top: 6rem;
  padding-bottom: 7.5rem;
  width: 100%;
  align-items: center;
  flex-direction: column;
}
.isq {
}
</style>
