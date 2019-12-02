<template>
  <v-card id="bg">
    <v-row>
      <v-col>
        <img  :src="picture" id="image" />
      </v-col>
      <v-col cols='12'  sm="6" class="text-left">
        <h1 style="margin-top:25%">{{info}}</h1> 
      </v-col>
       <v-col  cols='12'  sm="6" class="text-left">
        <h1 style="margin-left:7%">{{name}}</h1>
        <p style="margin-left:13%">{{description}}</p>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
export default {
  props: {
    name: String,
    description: String,
    picture: String,
    info:String
  }
};
</script>

<style scoped>
  v-row{
    background-color:aqua;
  }

  #image{
    margin-left: 5%;
    border-radius: 50%;
  }
</style>