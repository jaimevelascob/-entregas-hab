<template>
  <div class="rouf">
    <div class="client" v-for="product in products" :key="product.id">
      <div class="rof">
        <div class="esq">
          <div class="isq">
            <ul class="random">
              <p class="id">ID: {{ product.id }}</p>
              <p>Nombre: {{ product.nombre }}</p>
              <p>Descripcion: {{ product.descripcion }}</p>
              <p
                :class="{
                  green: product.estado === 'disponible',
                  red: product.estado === 'no disponible',
                }"
              >
                Estado: {{ product.estado }}
              </p>
              <p>Precio: {{ product.precio }}</p>
              <ul class="wik">
                <img :src="product.img" />
              </ul>
              <p
                :class="{
                  green: product.stock > '1',
                  red: (product.stock = '0'),
                }"
              >
                Stock: {{ product.stock }}
              </p>
              <button @click="buyProduct">comprar</button>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "showProducts",
  props: {
    products: Array,
    result: "",
  },
  methods: {
    buyProduct() {
      this.$emit("buy");
    },
  },
};
</script>

<style scoped>
.red {
  color: red;
}
.rouf {
  display: flex;
}
.green {
  color: green;
}
.id {
  display: block;
}
.random {
  display: flex;
  flex-direction: column;
  align-items: center;
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
  border-radius: 10px;
  margin-bottom: 30px;
  box-shadow: 0px 2px 5px rgb(255, 196, 196);
}
img {
  position: static;
  width: 300px;
  margin-bottom: 1rem;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.isq {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
@media only screen and (max-width: 768px) {
  .rouf {
    flex-direction: column;
    justify-content: space-between;
    display: flex;
    width: 100%;
  }
  .random {
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 2px 40px rgb(255, 196, 196);
  }
  .esq {
    width: 100%;
    box-shadow: 0px 2px 0px rgb(255, 251, 196);
  }
}
</style>
