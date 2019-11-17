<template>
  <div class="About">
    <b-row>
    <div v-for="(developer, ind) in developers" :key="ind">
   <img v-bind:src="developer.url"><h4>{{developer.name}}</h4><br><h3>{{developer.des}}</h3>
    </div>
    </b-row>
  </div>

</template>

<script>
  export default {
    name: 'About',
    data(){
      return{
        developers: [
      {
       
        url:require("../assets/img1.jpg"),
        name:"Lorly Sugal",
        des:"Back-end Developer",
      },
      {
       
        url:require("../assets/img2.png"),
        name:"Princess JOy Duran",
        des:"Project Manager",
      },
      {
        
        url:require("../assets/img3.png"),
        name:"Jakeniel Erim",
        des:"Database",
      },
      {
       
        url:require("../assets/img4.jpg"),
        name:"Mellyne Grace Nadela",
        des:"Front-end Developer",
      },

      
    ]
      }
      
    }
  }
</script>

<style scoped>
    .about{
        padding: 20px;
    }
    img{
      padding: 10%;
      width: 200px;
      height: auto;
      border-radius: 50%
      
    }
    h4{
      margin-left:20%;
      font-style:oblique

    }
    h3{
      margin-left: 20%;
      color:grey;
      font-size: 20px;
      font-family: fantasy
    }

</style>