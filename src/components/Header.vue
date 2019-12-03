<template>
  <div> 
    <v-system-bar height="250%" id="bg"></v-system-bar>
    <v-img src="../assets/weOrg.png" style="heigth:20%;width:20%;position:relative;margin-top:10px%;margin-bottom:-2%"></v-img>
     
        
     
    <!-- <v-app-bar color="grey" dark prominent>
    <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>-->

    <v-spacer></v-spacer>
    

    <!-- </v-app-bar> -->

    <!--  -->

     
 </div>
</template>

   
<script>
export default {
  name: "Sidebar",

  // computed: {
  //   color () {
  //     switch (this.bottomNav) {
  //       case 0: return 'blue-grey'
  //       case 1: return 'teal'
  //       case 2: return 'brown'
  //       case 3: return 'indigo'
  //     }
  //   },
  // },
  
  }
  // },
  // data: () => ({
  //   drawer: false,
  //   group: null,
  //   items: [
  //     {
  //       title: "Birthday",
  //       to: "/Birthday "
  //     },
  //     {
  //       title: "Burial",
  //       to: "/Burial"
  //     },
  //     {
  //       title: "Baptist",
  //       to: "/Baptist"
  //     },
  //     {
  //       title: "Wedding",
  //       to: "/Wedding"
  //     }
  //   ]
  // }),
  // methods:{
  //   search(){
  //     axios.get
  //   }
  // },
  // watch: {
  //   group() {
  //     this.drawer = false;
  //   }
  // }

</script>
<style scoped>
li {
  display: block;
}

li:hover {
  color: red;
}
#bg {
  height: 100%;
  width: 100%;
  top: 0;
  bottom: 0;
  background-image: url("../assets/bg.jpg");
  background-size: cover;
}

</style>



