<template>
<div class="home">
  <Menu></Menu>
  <body>
    <TracksComponent :tracks="tracks"></TracksComponent>
  </body>
</div>
</template>

<script>
// @ importar las funciones
import api from "@/api/index.js";
import TracksComponent from "@/components/TracksComponent.vue";
import Menu from "@/components/Menu.vue";

export default {
  name: "TopTracks",
  components: {
    TracksComponent,
    Menu
  },
  data() {
    return {
      tracks: []
    };
  },
  // Hook
  created() {
    api
      .getTopTracks()
      .then(response => (this.tracks = response.data.tracks.track));
  }
};
</script>
