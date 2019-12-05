<template>
  <v-card id="bg">
    <v-row>
      <v-col>
        <img  :src="picture" id="image" />
      </v-col>
      <v-col cols='12' sm="6" class="text-left">
        <h1 style="margin-left:7%" >{{name}}</h1>
        <p>{{description}}</p>
      </v-col>
    </v-row>
    <v-row>
  <v-col  cols='12' >
         <h4 style="margin-top:-5%;">{{info}}</h4>  
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
    background-color:#1E88E5;
  }

  #image{
    margin-left: 5%;
    border-radius: 50%;
  }
  h4{
    font-size:20px;
    text-align: center;
  }
  p{
    margin-left: 7%;

  }
</style>