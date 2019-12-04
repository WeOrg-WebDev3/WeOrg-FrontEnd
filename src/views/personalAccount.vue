
<template>
  <div>
    <v-bottom-navigation dark shift>
      <v-btn icon>
        <span>HOME</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn icon>
        <span>View Inqueries</span>
        <v-icon>mdi-login</v-icon>
      </v-btn>
      <v-btn icon>
        <span>View Porfolio</span>
        <v-icon a:href="#porfolio">mdi-clipboard-account</v-icon>
      </v-btn>
    </v-bottom-navigation>

    <div id="bg">
      <v-container fluid>
        <v-row dense>
          <v-col cols="6" sm="12">
            <v-card>
              <v-img src="../assets/wed.png" class="white--text align-end" height="300px"></v-img>
              <v-btn
                style="position:relative;margin-top:-48%;width:10%;margin-left:89%"
                color="red"
                v-on:click="goto('/Home')"
              >Logout</v-btn>

              <v-img
                src="../assets/cons.jpg"
                style="height:220px;width:200px;possition:relative;margin-top:-10%;margin-left:42.5%"
              ></v-img>
              <br>
              <center>
                <h1>{{orgs[0].name}}</h1>
              </center>
              <hr>
              <h2 style="margin-left:50px">Personal Information</h2>
              <br>
              <div style="margin-left:20px">
                <v-icon>mdi-map-marker</v-icon>
                <span>{{orgs[0].address}}</span>
                <br>
                <v-icon>mdi-email</v-icon>
                <span>{{orgs[0].email}}</span>
                <br>
                <v-icon>mdi-cellphone-iphone</v-icon>
                <span>{{orgs[0].contact}}</span>
                <br>

                <v-icon>mdi-calendar-today</v-icon>

                <span>{{orgs[0].event}}</span>
                <br>
                <v-icon>mdi-cash</v-icon>
                <span>{{orgs[0].price}}</span>
                <br>
                <v-icon>mdi-gift</v-icon>
                <span>{{orgs[0].packages}}</span>
                <br>
                <v-card-actions>
                  <template>
                    <v-row justify="center">
                      <v-dialog v-model="dialog" persistent max-width="600px">
                        <template v-slot:activator="{ on }">
                          <v-btn color="primary" max-width="30%" dark v-on="on">Edit</v-btn>
                        </template>
                        <v-card>
                          <v-card-title>
                            <span class="headline">Edit Profile</span>
                          </v-card-title>
                          <v-card-text>
                            <v-container>
                              <v-form ref="form" v-model="valid">
                                <v-text-field
                                  v-model="ename"
                                  :rules="nameRules"
                                  label="Name"
                                  required
                                ></v-text-field>
                                <v-text-field
                                  v-model="eaddress"
                                  :rules="nameRules"
                                  label="Address"
                                  required
                                ></v-text-field>
                               
                                <v-text-field
                                  v-model="econtact"
                                  :rules="numberRules"
                                  label="Contact Number"
                                  type="number"
                                  min="0"
                                  required
                                ></v-text-field>

                                <v-text-field
                                  v-model="eprice"
                                  label="Fee Range"
                                  type="number"
                                  min="1"
                                  required
                                ></v-text-field>
                                <v-text-field
                                  v-model="epackages"
                                  :rules="packageRules"
                                  label="Package"
                                  required
                                ></v-text-field>
                              </v-form>
                            </v-container>
                          </v-card-text>
                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                              color="blue darken-1"
                              text
                              @click="dialog = false"
                              width="50%"
                            >Close</v-btn>
                            <v-btn
                              color="blue darken-1"
                              text
                              @click="dialog = false,saveEdit()"
                              width="50%"
                            >Save</v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                    </v-row>
                  </template>
                </v-card-actions>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <hr>

      <template>
        <div>
          <v-row style="width:90%;margin-left:5%;margin-right:5%;margin-top:5%">
            <v-col>
              <v-card>
                <v-container fluid>
                  <h2 id="porfolio">My Porfolio</h2>
                  <v-row>
                    <v-col v-for="n in 9" :key="n" class="d-flex child-flex" cols="4">
                      <v-card flat tile class="d-flex">
                        <v-img
                          :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                          :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                          aspect-ratio="1"
                          class="grey lighten-2"
                        >
                          <template v-slot:placeholder>
                            <v-row class="fill-height ma-0" align="center" justify="center">
                              <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                            </v-row>
                          </template>
                        </v-img>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </template>
    </div>
  </div>
</template>

    
<script>
export default {
  name: "",
  data() {
    return {
      orgs: [],
      dialog: false,
      valid: true,
      ename: "",
      nameRules: [v => !!v || "Name is required"],
      econtact: "",
      numberRules: [
        v => !!v || "Contact Number is required",
        v => (v && v.length <= 11) || "Name must be less  11 numbers",
        v => (v && v.length >= 11) || "Name must be less  11 numbers"
      ],
      epackages: "",
      packageRules: [v => !!v || "Package is important"],

     
      eevent: "",
      eventRules: [
        v => !!v || "Event is required",
        v =>
          v == "Birthday" ||
          v == "birthday" ||
          v == "Wedding" ||
          v == "wedding" ||
          v == "Concert" ||
          v == "concert" ||
          "Events must be (Birthday,Wedding or Concert)"
      ],
      eprice: "",
      eaddress: ""
    };
  },

  methods: {
    goto(link) {
      this.$swal({
        title: "Are you sure you Want to logout?",
        text: "You can't revert your action",
        type: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes!",
        cancelButtonText: "Cancel",
        showCloseButton: true,
        showLoaderOnConfirm: true
      }).then(result => {
        if (result.value) {
          this.$swal("Logout", "You successfully Logout", "success");
          this.$router.push({ path: link });
        } else {
          this.$swal("Cancelled", "info");
        }
      });
    },
    saveEdit() {
      let id = sessionStorage.getItem("id");
      console.log(id, "hghghgh");
      let editCred = {
        name: this.ename,
        address: this.eaddress,
       
        contact: this.econtact,
        event: this.eevent,
        price: this.eprice,
        package: this.epackages
      };
      this.axios
        .put(`http://localhost:8002/Update/${id}`, editCred)
        .then(response => {
          console.log(response);
        });
        
    }
  },
  components: {},
  mounted() {
    var orgs = [];
    let id = sessionStorage.getItem("id");
    this.axios
      .post(`http://localhost:8002/retriveprofile/${id}`)
      .then(response => {
        console.log(response);
        var dataT = response.data;
        // this.org = dataT
        //var counter = 0;

        //for (counter; counter < dataT.length; counter++) {
        // orgs.push({
        //   name: dataT.name,
        //   address: dataT.address,
        //   email: dataT.email,
        //   contact: dataT.contact,
        //   event: dataT.event,
        //    price: dataT.price,
        //     packages: dataT.packages,

        // });
        orgs.push(dataT);
        //}
        // console.log(org);
        this.orgs = orgs;
        //console.log(orgs[0],'array')
      })
      .catch(error => {
        console.log(error);
      });

    return orgs;
  }
  
  // this.axios.get(`http://localhost:8002/retriveprofile/${id}`).then(
  //   response=>{
  //     console.log(response.data)
};
</script>




<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 1000px;
  margin: auto;

  font-family: arial;
}

.title {
  color: grey;
  font-size: 18px;
}

button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 10px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}

a {
  text-decoration: none;
  font-size: 22px;
  color: black;
}

button:hover,
a:hover {
  opacity: 0.7;
}

p {
  font-size: medium;
}
img {
  width: 300px;
}

.row {
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;
}

/* Create two equal columns that sits next to each other */
.column {
  flex: 50%;
  padding: 0 4px;
}

.column img {
  margin-top: 8px;
  vertical-align: middle;
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
 

 
