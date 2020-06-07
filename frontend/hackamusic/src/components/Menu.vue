 
<template>
  <div class="menu">
    <div id="nav">
      <ul class="aw-navigation">
        <li>
          <router-link :to="{ name: 'Home' }">Home</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'TopTracks' }">Top Tracks</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'TopArtists' }">Top Artists</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'About' }">About</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuCustom"
};
</script>

<style scoped>
.menu {
  border-radius: 22px;

  margin: 0;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
}

.aw-navigation {
  list-style-type: none;
  margin: 0;
  padding: 0;
  color: #fff;
  font-size: 1.222rem;
  text-transform: uppercase;
}
:first-letter {
  color: #dca453;
}
</style>