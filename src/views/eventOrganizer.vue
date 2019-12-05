<template>
<div id="bg"> 
<topNav/>
<div >
  <v-container fluid style="width:70%">
    <center><h2>{{org[0].event}} Organizers</h2></center>
    <v-data-table :headers="headers" :items="org">
      <template v-slot:item.action="{ item }">
        
     
      <v-btn @click="retrieveOrg(item.id)">View Profile</v-btn>
     
    </template>
    </v-data-table>
  </v-container>

  </div>
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
        { text: "Action", value: "action" ,sortable: false,}
      ]
    };
  },

  methods: {
    addOrg() {
      var org = [];
      let event=sessionStorage.getItem("orgEvent");
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
              event: dataT[counter].event,
              id:dataT[counter]._id
            });
          }
          console.log(org);
          this.org = org;
        })
        .catch(error => {
          console.log(error);
        });

      return org;
    },
    retrieveOrg(item){
     this.$router.push({ path: "visitProfile" });
    sessionStorage.setItem("orgId", item);
    alert(item)
     
      
      
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