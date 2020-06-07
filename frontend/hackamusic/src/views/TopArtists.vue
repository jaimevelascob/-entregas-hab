<template>
  <div class="home">
    <Menu></Menu>
    <ArtistsComponent :artists="artists"></ArtistsComponent>
  </div>
</template>

<script>
// @ importar las funciones
import api from "@/api/index.js";
import ArtistsComponent from "@/components/ArtistsComponent.vue";
import Menu from "@/components/Menu.vue";

export default {
  name: "TopArtists",
  components: {
    ArtistsComponent,
    Menu
  },
  data() {
    return {
      artists: []
    };
  },
  // Hook
  created() {
    api
      .getArtists()
      .then(response => (this.artists = response.data.topartists.artist));
  }
};
</script>
