<template>
  <div>
    <topNav/>
    <div id="bg">
      <v-container fluid style="width:80%">
        <v-card fluid>
          <v-card-title>
            LIST OF ORGANIZER
            <v-spacer></v-spacer>
            <v-text-field v-model="search" label="Search" single-line hide-details></v-text-field>
          </v-card-title>
          <v-data-table :headers="headers" :items="organizer" :search="search">
            <template v-slot:item.action="{ item }">
              <v-btn @click="retrieveOrg(item.id)">View Profile</v-btn>
            </template>
          </v-data-table>
        </v-card>
      </v-container>
    </div>
  </div>
</template>
<script>
import topNav from "../views/topNav.vue";
export default {
  data() {
    return {
      search: "",
      headers: [
        { text: "Name", value: "name" },
        { text: "Address", value: "address" },
        { text: "Contact", value: "contact" },
        { text: "Event", value: "event" },
        { text: "Action", value: "action" }
      ],
      organizer: []
    };
  },
  methods: {

    retrieveOrg(item) {
      this.$router.push({ path: "visitProfile" });
      sessionStorage.setItem("orgId", item);
      alert(item);
    }
  },
  mounted() {
    var organizer = [];

    this.axios
      .post(`http://localhost:8002/retrieveAll`)
      .then(response => {
        console.log(response);
        var dataT = response.data;
        var counter = 0;

        for (counter; counter < dataT.length; counter++) {
          organizer.push({
            name: dataT[counter].name,
            address: dataT[counter].address,
            contact: dataT[counter].contact,
            event: dataT[counter].event,
            id:dataT[counter]._id
          });
        }

        this.organizer = organizer;
      })
      .catch(error => {
        console.log(error);
      });
    return organizer;
  },
  components: {
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
