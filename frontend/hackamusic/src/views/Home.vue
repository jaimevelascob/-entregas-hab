<template>
  <div class="home">
    <Menu></Menu>
    <TagsComponent :tags="tags"></TagsComponent>
  </div>
</template>

<script>
// @ importar las funciones
import api from "@/api/index.js";
import TagsComponent from "@/components/TagsComponent.vue";
import Menu from "@/components/Menu.vue";

export default {
  name: "Home",
  components: {
    TagsComponent,
    Menu
  },
  data() {
    return {
      tags: []
    };
  },
  // Hook
  created() {
    api.getTopTags().then(response => (this.tags = response.data.tags.tag));
  }
};
</script>
