<template>
  <v-img :src="picture" class="white--text align-end" height="300px" width="400px">
    <v-card-title>{{title}}</v-card-title>
  </v-img>
</template>
<script>
export default {
  props: {
    picture: String,
    title: String
  }
};
</script>