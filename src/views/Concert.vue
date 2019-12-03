<template>
<div id="bg">
<topNav/>
  <v-container fluid>
    <v-data-table :headers="headers" :items="org">
    </v-data-table>
  </v-container>
  <button @click="goto('/visitProfile')">visit</button>
  </div>
</template>


<script>
import topNav from "../views/topNav"
export default {
  data() {
    return {
      org: [],
      headers: [
        {
          text: "Name",
          align: "left",
          sortable: false,
          value: "name"
        },
        { text: "Address", value: "address",sortable: false, },
        { text: "Contact", value: "contact",sortable: false, },
        { text: "Action", value: "event" ,sortable: false,}
      ]
    };
  },

  methods: {
    addOrg() {
      var org = [];
      var event = "Concert";
      this.axios
        .get("http://localhost:8002/retrieveOneEvent/"+ event)
        .then(response => {
          console.log(response);
          var dataT = response.data;
          // this.org = dataT
          var counter = 0;

          for (counter; counter < dataT.length; counter++) {
            org.push({
              name: dataT[counter].name,
              address: dataT[counter].address,
              contact: dataT[counter].contact,
              event: dataT[counter].event
            });
          }
          // console.log(org);
          this.org = org;
        })
        .catch(error => {
          console.log(error);
        });

      return org;
    },
    goto(link){
      this.$router.push({path:link});
    }
  },
   mounted() {
      this.addOrg();
    },components:{
      topNav
    }
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