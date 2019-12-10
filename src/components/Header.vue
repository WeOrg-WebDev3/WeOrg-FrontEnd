<template>
  <div>
    
    <div>
      <v-system-bar color="#00C9FFD1" height="290%">
        <center>
          <h1
            style="margin-left: 55%"
          >Successful events achieve the event goals and exceeds client's expectations.</h1>
        </center>
      </v-system-bar>

      <v-img
        src="../assets/logoWeoRg.png"
        style="height:20%;width:20%;position:relative;margin-top:-19%;margin-bottom:-2%"
      ></v-img>
    </div>

    <!-- <v-app-bar color="grey" dark prominent>
    <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>-->

    <v-spacer></v-spacer>

    <!-- </v-app-bar> -->

    <!--  -->
  </div>
</template>

   
<script>
export default {
  name: "Sidebar"

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
};
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
/* #bga {
  height: 100%;
  width: 100%;
  top: 0;
  bottom: 0;
  background-image: url("../assets/bg.jpg");
  background-size: cover;
} */
</style>



