<template>
  <div class="about">
    <Menu></Menu>
    <div class="er">
      <h1>estuve vago :(</h1>
    </div>
  </div>
</template>
<script>
import Menu from "@/components/Menu.vue";
export default {
  name: "About",
  components: {
    Menu
  }
};
</script>
<style scoped>
.er {
  padding: 20rem;
  background-image: url("https://scontent.flcg1-1.fna.fbcdn.net/v/t1.0-9/71497111_2957718434241792_829890906831192064_o.jpg?_nc_cat=104&_nc_sid=730e14&_nc_ohc=_9u0NwMTH_gAX82xdHb&_nc_ht=scontent.flcg1-1.fna&oh=9d5f8368df982e557110dd076175da99&oe=5F04B587");
}
h1 {
  color: aliceblue;
}
</style>