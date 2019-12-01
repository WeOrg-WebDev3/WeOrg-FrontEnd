<template>
  <v-card>
    <v-row>
      <v-col>
        <img :src="picture" />
      </v-col>
      <v-col cols='10' class="text-left">
        <h1>{{name}}</h1>
          <p>{{description}}</p>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
export default {
  props: {
    name: String,
    description: String,
    picture: String
  }
};
</script>

<style scoped>
  v-row{
    background-color:aqua;
  }
</style>