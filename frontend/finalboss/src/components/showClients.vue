<template>
  <div>
    <div class="client" v-for="(client, index) in clients" :key="client.id">
      <div class="esq">
        <p>ID: {{ client.id }}</p>
        <p>Nombre: {{ client.nombre }}</p>
        <p>Apellido: {{ client.apellido }}</p>
        <p>Ciudad: {{ client.ciudad }}</p>
        <p>Empresa: {{ client.empresa }}</p>
        <button @click="editClientEvent(index)">EDIT</button>
        <button @click="deleteClientEvent(index)">DELETE</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "showClients",
  props: {
    clients: Array
  },
  methods: {
    editClientEvent(index) {
      //SAVING INFO INTO SELECTED NOTE
      let data = this.clients[index];
      //SENDING NOTE'S INFO TO VIEW
      this.$emit("edit", data);
    },
    deleteClientEvent(index) {
      let data = this.clients[index].id;

      this.$emit("delete", data);
    }
  }
};
</script>

<style scoped>
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
</style>
