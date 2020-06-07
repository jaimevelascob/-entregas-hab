<template>
  <div class="tags">
    <li v-for="artist in artists" :key="artist.id">
      <p class="li">{{artist.name}}</p>
      <p class="lo">{{artist.listeners}}</p>
      <img :src="urlImagen + artist.name" />
    </li>
  </div>
</template>

<script>
export default {
  name: "ArtistsComponent",
  props: {
    artists: Array
  },
  data() {
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