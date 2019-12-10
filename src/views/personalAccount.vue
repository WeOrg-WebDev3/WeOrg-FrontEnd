
<template>
  <div>
    <v-bottom-navigation dark shift>
      <v-btn icon style="margin-left:90%" v-on:click="goto('/Home')">
        <span>Logout</span>
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-bottom-navigation>

    <div id="bg">
      <v-container fluid style="width:90%">
        <v-row dense>
          <v-col cols="6" sm="12">
            <v-card>
              <v-img src="../assets/bg.jpg" class="white--text align-end" height="300px"></v-img>

              <v-img
                :src="`http://localhost:8002/files/${orgs.img}`"
                style="height:220px;width:200px;possition:relative;margin-top:-10%;margin-left:42.5%"
              ></v-img>
              <br>
              <center>
                <h1>{{orgs.name}}</h1>
              </center>
              <hr>
              <h2 style="margin-left:50px">Personal Information</h2>
              <br>
              <div style="margin-left:20px">
                <v-icon>mdi-map-marker</v-icon>
                <span>{{orgs.address}}</span>
                <br>
                <v-icon>mdi-email</v-icon>
                <span>{{orgs.email}}</span>
                <br>
                <v-icon>mdi-cellphone-iphone</v-icon>
                <span>{{orgs.contact}}</span>
                <br>

                <v-icon>mdi-calendar-today</v-icon>

                <span>{{orgs.event}}</span>
                <br>
                <v-icon>mdi-cash</v-icon>
                <span>{{orgs.price}}</span>
                <br>
                <v-icon>mdi-gift</v-icon>
                <span>{{orgs.packages}}</span>
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
                            <v-btn @click="dialog = false" width="30%">Close</v-btn>
                            <v-btn
                              @click="dialog = false,saveEdit()"
                              :disabled="!isComplete"
                              width="30%"
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

      <template>
        <v-container fluid style="width:70%;background-color:grey">
          <v-data-table :headers="headers" :items="orgs.inquires" color="grey">
            <template v-slot:item.action="{ item }"></template>
          </v-data-table>
        </v-container>
      </template>
      <br>
      <hr>
      <template>
        <v-container fluid style="width:100%">
          <!-- <v-row>
            <v-col >
              <v-card>
                <v-col v-for="(image, imageIndex) in orgs.randomphoto" :key="imageIndex" cols="12" sm="3" offset-sm="3">
                  <v-card flat tile class="d-flex">
                    <v-img
                      @click="index = imageIndex"
                      :src="`http://localhost:8002/files/${image}`"
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
              </v-card>
            </v-col>
          </v-row>-->
          <v-row>
            <v-col cols="12" sm="10" offset-sm="1">
              <v-card>
                <v-container fluid style="width:100%">
                  <v-row>
                    <v-col
                      v-for="(image, imageIndex) in orgs.randomphoto"
                      :key="imageIndex"
                      class="d-flex child-flex"
                      cols="3"
                    >
                      <v-card flat tile class="d-flex">
                         <v-img
                      @click="index = imageIndex"
                      :src="`http://localhost:8002/files/${image}`"
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
                <v-file-input v-model="addrandomphoto" label="Documentation" type="file" required></v-file-input>
          <br>
          <v-btn @click="addPhoto()" color="primary" style="width:20%">Add Photo</v-btn>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </template>

      <template>
        <v-container fluid style="width:50%">
          
        </v-container>
      </template>
    </div>
  </div>
</template>

<script>
// import VueGallery from "vue-gallery";
export default {
  name: "personal",
  data() {
    return {
      orgs: {},
      inquery: [],
      photosPorfolio: [],
      addrandomphoto: [],
      index: null,
      dialog: false,
      valid: true,
      ename: "",
      nameRules: [v => !!v || "Name is required"],
      econtact: "",
      numberRules: [
        v => !!v || "Contact Number is required",
        v =>
          (v && v.length <= 11) ||
          "Your Contact number is invalid it should be 11 numbers",
        v =>
          (v && v.length >= 11) ||
          "Your Contact number is invalid it should be 11 numbers"
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

        { text: "Message", value: "message", sortable: false }
      ]
    };
  },

  methods: {
    goto(link) {
      alert("Successfully Logout");
      sessionStorage.removeItem("token");
      this.$router.push({ path: link });
    },
    saveEdit() {
      let id = sessionStorage.getItem("id");
      console.log(id, "hghghgh");
      let editCred = {
        name: this.ename,
        address: this.eaddress,
        contact: this.econtact,
       
        price: this.eprice,
        packages: this.epackages
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
      let data = this.addrandomphoto;

      console.log(data);
      let uploads = new FormData();
      uploads.append("img", this.addrandomphoto);
      this.axios
        .post("http://localhost:8002/addporfolio/" + id, uploads, {
          headers: { "Content-Type": "multipart/form-data" }
        })
        .then(response => {
          console.log(response);
          this.getData();
        })
        .catch(error => {
          console.log(error);
        });
    },
    deleteInq(Iemail) {
      this.axios
        .delete("http://localhost:8002/deleteInquiry/" + Iemail)
        .then(response => {
          const index = this.inquery.indexOf(Iemail);
          confirm("Are you sure you want to delete this inquiry?") &&
            this.inquery.splice(index, 1);
          console.log(Iemail, "dhkjash");
        })
        .catch(error => {
          console.log(error);
        });
      console.log(response);
    },

    getData() {
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
  components: {
    // gallery: VueGallery
  },
  created() {
    window.addEventListener("getData", this.getData);
    this.getData();
  },
  computed: {
    isComplete() {
      return (
        this.ename &&
        this.eaddress &&
        this.econtact &&
        this.eprice &&
        this.epackages
      );
    }
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
.image {
  width: 50%;
  height: 100%;
  border: 1px solid #ebebeb;
  margin: 5px;
}
</style>
 

 
