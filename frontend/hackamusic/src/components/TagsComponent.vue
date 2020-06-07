<template>
  <div class="tags">
    <li v-for="tag in tags" :key="tag.id">
      <p class="li">{{tag.name}}</p>
      <img :src="urlImagen + tag.name" />
      <p class="lo">{{tag.url}}</p>
      <p class="lu">{{tag.taggings}}</p>
    </li>
  </div>
</template>

<script>
export default {
  name: "TagsComponent",
  props: {
    tags: Array
  },
  data() {
    //LINK QUE GENERA LA IMAGEN DE FONDO DE CADA ARTISTA AL SUMARLO A LA KEYWORD DE SU NOMBRE
    return {
      urlImagen: "https://source.unsplash.com/random/400x200/?music,genre,"
    };
  }
};
</script>
<style scoped>
.tags {
  padding: 0.667rem;
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  border-radius: 22px;
  justify-content: space-around;
}
.li {
  text-align: center;
  border-radius: 27px;
  background: #63fc3d;
  font-weight: 700;
  box-shadow: 4px 3px 15px hsl(157, 100%, 69%);
}
.lu {
  padding: 0.3rem;
  font-family: Inconsolata, monospace;
  margin: 0.37rem;
  border-radius: 27px;
  background: #ffb041;
  font-weight: 700;
  box-shadow: 4px 3px 15px #ff6363;
}
.lo {
  padding: 0.7rem;
  font-family: Inconsolata, monospace;
  margin: 0.37rem;
  border-radius: 27px;
  background: #63fc3d;
  font-weight: 700;
}
</style>