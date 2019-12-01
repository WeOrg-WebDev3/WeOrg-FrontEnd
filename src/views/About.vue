<template>

<div>
  <topNav/>


  <div class="about">
    <dev v-bind:picture = "require('@/assets/princess.png')" v-bind:name="'Princess Joy Duran'"  v-bind:description="'Project Manager'"></dev>
    <dev v-bind:picture = "require('@/assets/lorly.png')" v-bind:name="'Lorly S. Sugal'" v-bind:description="'Project Developer'"></dev>
    <dev v-bind:picture = "require('@/assets/mellyne.png')" v-bind:name="'Mellyne Grace Nadela'" v-bind:description="'Project Developer'"></dev>
    <dev v-bind:picture = "require('@/assets/jacky.png')" v-bind:name="'Jakeniel Erim'" v-bind:description="'Project Developer'"></dev>
  </div>
</div>
</template>

<script>
import dev from "@/components/developers";
import topNav from "../views/topNav"
export default {
  components:{
    dev,topNav
  }
};
</script>

<style scoped>
</style>


