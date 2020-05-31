<template>
  <div class="home">
    <!-- BARRA DE BUSQUEDA -->
    <header class="aw-container">
      <h1 class="aw-pulsate">Ricky y morty</h1>
      <div class="search">
        <label class="klk aw-pulsate" for="bySearch">Looking For:</label>

        <input
          v-model="search"
          id="search"
          name="bySearch"
          type="search"
          placeholder="Write Name..."
        />
        <input
          v-model="id"
          id="searchChar"
          name="bySearchId"
          type="search"
          placeholder="Search Id..."
        />
        <button @click="searchChar(id)">search by id</button>
        <h2>PERSONAJE</h2>

        <!-- rip id 😔-->
        <p v-for="item in char" :key="item.id">{{item.name}}</p>
      </div>
    </header>

    <!-- TARJETOVICHS -->
    <CharCard :chars="filteredChars" class="home"></CharCard>
  </div>
</template>

<script>
// @ is an alias to /src
import CharCard from "@/components/CharCard.vue";
import CharCardId from "@/components/CharCard.vue";

import api from "@/api/api.js";
export default {
  name: "Home",
  components: {
    CharCard,
    CharCardId
  },
  data() {
    return {
      chars: [],
      search: "",
      char: [],
      id: null
    };
  },
  methods: {
    searchChar(id) {
      api.getChar(id).then(response => (this.char = response.data));
    }
  },
  computed: {
    filteredChars() {
      //SI NO ESCRIBIMOS NADA
      if (!this.search) {
        return this.chars;
      }
      //  FILTER PARA FILTRAR LAS BUSQUEDAS DEL ARRAY
      return this.chars.filter(
        char =>
          char.name.toLowerCase().includes(this.search.toLowerCase()) ||
          char.gender.toLowerCase().includes(this.search.toLowerCase()) ||
          char.status.toLowerCase().includes(this.search.toLowerCase())
      );
    }
  },
  created() {
    api.getAll().then(response => (this.chars = response.data.results));
  }
};
</script>
<style scoped>
* {
  font-family: "Shadows Into Light", cursive;
}

h1 {
  text-align: center;
  box-shadow: 20px 10px 30px #63ffea;
}
h1::first-letter {
  color: #ffb041;
}
.klk {
  font-size: 1.4em;
  padding: 0.527rem;
  box-shadow: 0px 20px 30px #000000;
  color: #000000;
}
.home {
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-image: url("https://i.pinimg.com/originals/96/0c/ef/960cefa15505bbb8c0cc2a38ad341546.png");
}
.aw-pulsate {
  -webkit-animation: pulsate 3s ease-in-out;
  -webkit-animation-iteration-count: infinite;
  opacity: 0.3;
}
@-webkit-keyframes pulsate {
  0% {
    opacity: 8;
  }
  50% {
    opacity: 0.3;
  }
  100% {
    opacity: 8;
  }
}
.aw-container {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0.667rem;
  font-size: 2em;
  align-items: baseline;
  background-image: url("https://i.pinimg.com/originals/76/d3/a8/76d3a8142c79d2c938c4c05de8f9fd42.jpg");
  box-shadow: 4px 3px 15px #ed63ff;
}
</style>
