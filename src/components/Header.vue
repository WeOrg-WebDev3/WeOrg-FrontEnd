<template>
  <div>
    <v-system-bar color="#0065FFB6" height="150%"></v-system-bar>
     
        
     
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
</style>



