<template>
  <div>
    <!-- TARJETA DE PERSONAJE -->
    <div class="card #aw-gallery" v-for="char in chars" :key="char.id">
      <h2>{{ char.name }}</h2>
      <li>
        <img :src="char.image" alt />
      </li>
      <p class="lu">
        <strong>id:</strong>
        {{char.id}}
      </p>
      <p class="li">
        <strong>Status:</strong>
        {{char.status}}
      </p>
      <p class="li">
        <strong>Specie:</strong>
        {{char.species}}
      </p>
      <p class="li">
        <strong>Gender:</strong>
        {{char.gender}}
      </p>
      <p class="lu">
        <strong>Origin:</strong>
        {{char.origin.name}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CharCard",
  props: {
    chars: Array
  }
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap");

* {
  font-family: "Shadows Into Light", cursive;
}
.card {
  display: block;
  box-shadow: 8px 15px 10px #ff6363;
  width: 20%;
  border: 1px solid rgb(0, 174, 255);
  margin: 1rem;
  background-color: #050000;
  color: white;
  cursor: pointer;
  flex-wrap: wrap;
  margin: 0.667rem;
  padding: 0;
  background-image: url("https://png.pngtree.com/thumb_back/fw800/back_our/20190620/ourmid/pngtree-simple-cotton-cloud-diaper-psd-layered-main-picture-background-material-image_149866.jpg");
}

.card li {
  width: 80%;
  position: relative;
  overflow-x: hidden;
  list-style-type: none;
}

.card li img {
  width: 100%;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

.card li:hover img {
  -webkit-transform: scale(0.8);
  transform: scale(0.8);
}
h2::first-letter {
  color: #ffb041;
}
.card li:after {
  display: block;
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
}

.card li:hover:after {
  width: 0;
  height: 50%;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.li {
  display: inline-block;
  padding: 0.7rem;
  font-family: Inconsolata, monospace;
  margin: 0.37rem;
  border-radius: 27px;
  background: #63fc3d;
  font-weight: 700;
  box-shadow: 4px 3px 15px hsl(157, 100%, 69%);
}
img {
  border-radius: 77px;
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