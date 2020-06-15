<template>
  <div>
    <div class="client" v-for="product in products" :key="product.id">
      <div class="esq">
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
  display: inline-block;
  background-color: #f3f3f3;
  width: 100%;
  max-width: 500px;
  border-radius: 10px;
  margin-bottom: 50px;
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
  min-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
