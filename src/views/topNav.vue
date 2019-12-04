 <template>
  <div >
    <v-bottom-navigation dark shift>
      <v-btn icon>
        <span>HOME</span>
        <v-icon @click="goto('/Home')">mdi-home</v-icon>
      </v-btn>
      <v-col cols="12" sm="2" style="margin-top:-20px">
        <v-text-field label="SEARCH" v-model="searchOneEvent" single-line></v-text-field>
      </v-col>

      <v-btn icon>
        <span>Search</span>
        <v-icon v-on:click="searchOne()">mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon style="margin-left:20%">
        <span>Login</span>
        <v-icon @click="goto('/Login')">mdi-login</v-icon>
      </v-btn>
      <v-btn icon>
        <span>Sigup</span>
        <v-icon @click="goto('/Signup')">mdi-clipboard-account</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>

<script>
// import topNav from "../views/topNav.vue";
export default {
  name: "topNav",

  data() {
    return {
      seen: false
      // searchEvent: [],
      //   headers: [
      //     {
      //       text: "Name",
      //       align: "left",
      //       sortable: false,
      //       value: "name"
      //     },
      //     { text: "Address", value: "address", sortable: false },
      //     { text: "Contact", value: "contact", sortable: false },
      //     { text: "Action", value: "event", sortable: false }
      //   ]
      // };
    };
  },
  methods: {
    goto(link) {
      this.$router.push({ path: link });
    }
    //   searchOne() {
    //     var searchEvent = [];

    //     var name = this.searchOneEvent;
    //     this.axios
    //       .get("http://localhost:8002/retrieveName/" + name)
    //       .then(response => {
    //         console.log(response);
    //         var dataT = response.data;
    //         // this.org = dataT
    //         var counter = 0;

    //         for (counter; counter < dataT.length; counter++) {
    //           searchEvent.push({
    //             name: dataT[counter].name,
    //             address: dataT[counter].address,
    //             contact: dataT[counter].contact,
    //             event: dataT[counter].event
    //           });
    //         }
    //         // console.log(org);
    //         this.searchEvent = searchEvent;
    //       })
    //       .catch(error => {
    //         console.log(error);
    //       });

    //     return searchEvent;
    //   }
  } // }
};
</script>
<style scoped>
#bg {
  height: 100%;
  width: 100%;
  top: 0;
  bottom: 0;
  background-image: url("../assets/bg.jpg");
  background-size: cover;
}
</style>