<template>
  <div class="error">
    <Menu></Menu>

    <p>ERROR 404 - NOT FOUND</p>
  </div>
</template>
<script>
//IMPORTANDO EL MENU DE LINKS SUPERIOR
import Menu from "@/components/Menu.vue";
export default {
  name: "Error",
  components: {
    Menu
  }
};
</script>

<style scoped>
.error {
  color: rgb(173, 165, 165);
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>