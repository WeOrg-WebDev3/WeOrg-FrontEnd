
<template>
  <div>
    <v-bottom-navigation dark shift>
      <v-btn icon style="margin-left:90%" v-on:click="goto('/Home')">
        <span>Logout</span>
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-bottom-navigation>

    <div id="bg">
      <v-container fluid>
        <v-row dense>
          <v-col cols="6" sm="12">
            <v-card>
              <v-img src="../assets/bg.jpg" class="white--text align-end" height="300px"></v-img>

              <v-img
                :src="`http://localhost:8002/files/${orgs.img}`"
                style="height:220px;width:200px;possition:relative;margin-top:-10%;margin-left:42.5%"
              ></v-img>
              <br />
              <center>
                <h1>{{orgs.name}}</h1>
              </center>
              <hr />
              <h2 style="margin-left:50px">Personal Information</h2>
              <br />
              <div style="margin-left:20px">
                <v-icon>mdi-map-marker</v-icon>
                <span>{{orgs.address}}</span>
                <br />
                <v-icon>mdi-email</v-icon>
                <span>{{orgs.email}}</span>
                <br />
                <v-icon>mdi-cellphone-iphone</v-icon>
                <span>{{orgs.contact}}</span>
                <br />

                <v-icon>mdi-calendar-today</v-icon>

                <span>{{orgs.event}}</span>
                <br />
                <v-icon>mdi-cash</v-icon>
                <span>{{orgs.price}}</span>
                <br />
                <v-icon>mdi-gift</v-icon>
                <span>{{orgs.packages}}</span>
                <br />
                <v-card-actions>
                  <template>
                    <v-row justify="center">
                      <v-dialog v-model="dialog" persistent max-width="600px">
                        <template v-slot:activator="{ on }">
                          <v-btn color="primary" max-width="30%" dark v-on="on">Edit</v-btn>
                          <v-btn
                            color="primary"
                            max-width="30%"
                            v-on:click="viewInquires()"
                          >View Inquires</v-btn>
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
                <v-container fluid style="width:70%">
                  <v-data-table :headers="headers" :items="inquery">
                    <template v-slot:item.action="{ item }">
                      <v-btn @click="deleteInq(inquery[0].name)">Delete</v-btn>
                    </template>
                  </v-data-table>
                </v-container>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <hr />

      <template>
        <div>
          <v-row style="width:90%;margin-left:5%;margin-right:5%;margin-top:5%">
            <v-col>
              <v-card>
                <v-container fluid>
                  <h2 id="porfolio">My Porfolio</h2>
                  <v-row>
                    <v-file-input label="Documentation" type="file" required></v-file-input>
                    <br />
                    <v-btn @click="addPhoto()" color="primary" style="width:50%">Add Photo</v-btn>
                    <v-col v-for="n in 9" :key="n" class="d-flex child-flex" cols="4">
                      <v-card flat tile class="d-flex">
                        <v-img>
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
  name: "personal",
  data() {
    return {
      orgs: {},
      inquery: [],

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
      eaddress: "",
      headers: [
        {
          text: "Name",
          align: "left",
          sortable: false,
          value: "name"
        },

        { text: "Address", value: "address", sortable: false },
        { text: "Contact", value: "contact", sortable: false },

        { text: "Message", value: "message", sortable: false },
        { text: "Action", value: "action", sortable: false }
      ]
    };
  },

  methods: {
    goto(link) {
      alert("Successfully Logout");
      this.$router.push({ path: link });
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
          this.getData();
        });
    },
    viewInquires() {
      var inquery = [];

      let id = sessionStorage.getItem("id");
      this.axios
        .post(`http://localhost:8002/retriveprofile/${id}`)
        .then(response => {
          var dataT = response.data.inquires;
          console.log(dataT, "shdjhs");
          var counter = 0;

          for (counter; counter < dataT.length; counter++) {
            inquery.push({
              name: dataT[counter].name,
              address: dataT[counter].address,
              contact: dataT[counter].contact,
              message: dataT[counter].message
            });
          }
          // console.log(org);
          this.inquery = inquery;
          console.log(inquery, "final");
        })
        .catch(error => {
          console.log(error);
        });

      return inquery;
    },
    addPhoto() {
      let id = sessionStorage.getItem("id");
   
      let uploads = new FormData();

      this.axios
        .post(`http://localhost:8002/retrivephoto/${id}`, uploads, {
          headers: { "Content-Type": "multipart/form-data" }
        })
        .then(response => {
          console.log(response.data.randomphoto, "dhkjash");
        })
        .catch(error => {
          console.log(error);
        });
    },
    deleteInq(Iemail) {
     
      this.axios
        .delete("http://localhost:8002/deleteInquiry/" + Iemail)
        .then(response => {

          const index = this.inquery.indexOf(Iemail)
        confirm('Are you sure you want to delete this inquiry?') && this.inquery.splice(index, 1)
          console.log(Iemail, "dhkjash");
        })
        .catch(error => {
          console.log(error);
        });
    },
    getData() {
      var orgs = [];
     
    let id = sessionStorage.getItem("id");
    this.axios
      .post(`http://localhost:8002/retriveprofile/${id}`)
      .then(response => {
        console.log(response.data);
        var dataT = response.data;
        this.orgs = dataT;
      })
      .catch(error => {
        console.log(error);
      });
    }
  },
  components: {},
  created() {
    window.addEventListener("getData", this.getData);
    this.getData();
  }
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
 

 
