
<template>
  <div id="bg">
    <topNavUser />
    <div >
      <v-container fluid style="width:50%">
        <v-row dense>
          <v-col cols="6" sm="12">
            <v-card>
              <v-img src="../assets/bg.jpg" class="white--text align-end" height="300px"></v-img>
                       <v-img
                :src="`http://localhost:8002/files/${orgs[0].img}`"
                class="center"
                style="height:220px;width:200px;possition:relative;margin-top:-10%;"
              ></v-img>
              <br />
              <center>
                <h1>{{orgs[0].name}}</h1>
              </center>
              <hr />
              <h2 style="margin-left:50px">Personal Information</h2>
              <br />
              <div style="margin-left:20px">
                <v-icon>mdi-map-marker</v-icon>
                <span>{{orgs[0].address}}</span>
                <br />
                <v-icon>mdi-email</v-icon>
                <span>{{orgs[0].email}}</span>
                <br />
                <v-icon>mdi-cellphone-iphone</v-icon>
                <span>{{orgs[0].contact}}</span>
                <br />

                <v-icon>mdi-calendar-today</v-icon>

                <span>{{orgs[0].event}}</span>
                <br />
                <v-icon>mdi-cash</v-icon>
                <span>{{orgs[0].price}}</span>
                <br />
                <v-icon>mdi-gift</v-icon>
                <span>{{orgs[0].packages}}</span>
                <br />
              </div>

              <template>
                <v-row justify="center">
                  <v-dialog v-model="dialog" persistent max-width="630px">
                    <template v-slot:activator="{ on }">
                      <v-btn color="primary" width="30%" style="margin-left:65%;margin-bottom:2%" dark v-on="on">Inquire</v-btn>
                    </template>
                    <template>
                      <v-card class="elevation-12">
                        <v-toolbar color="secondary" dark flat>
                          <v-toolbar-title>INQUIRE</v-toolbar-title>
                        </v-toolbar>
                        <v-card-text>
                          <v-form ref="form" v-model="valid">
                            <v-text-field v-model="iname" :rules="nameRules" label="Name" required></v-text-field>
                            <v-text-field
                              v-model="iaddress"
                              :rules="nameRules"
                              label="Address"
                              required
                            ></v-text-field>

                            <v-text-field
                              v-model="icontact"
                              :rules="numberRules"
                              label="Contact Number"
                              type="number"
                              min="0"
                              required
                            ></v-text-field>
                            
                           
                            <v-textarea
                              v-model="imessage"
                              outlined
                              name="input-7-4"
                              label="Write Message"
                            ></v-textarea>

                            <v-card-actions>
                              <v-btn
                                color="secondary"
                                width="50%"
                                text
                                @click="dialog = false"
                              >Close</v-btn>
                              <v-btn
                                color="primary"
                                width="50%"
                                text
                                @click="dialog = false;addInquery()"
                              >Send</v-btn>
                            </v-card-actions>
                          </v-form>
                        </v-card-text>
                      </v-card>
                    </template>
                  </v-dialog>
                </v-row>
              </template>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>

     <template>
        <v-btn @click="viewPorfolio">Show Photos</v-btn>
       <v-row>
         <v-col cols="12" sm="6" offset-sm="3">
           <v-card>
            <v-container fluid>
             
              <v-col v-for="(image, imageIndex) in orgporfolio" :key="imageIndex">
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
            </v-container>
           </v-card>
         </v-col>        
       </v-row>
      </template>
  </div>
</template>
<script>
import topNavUser from "../views/topNav.vue";
export default {
  name: "visitProfile",
  data() {
    return {
      orgs: [],
      valid: true,
      dialog: false,
      orgporfolio:[],
      iname: "",
      imessage: "",
      iaddress:"",

     
      nameRules: [v => !!v || "Name is required"],
      icontact: "",
      numberRules: [
        v => !!v || "Contact Number is required",
        v => (v && v.length <= 11) || "Name must be less  11 numbers",
        v => (v && v.length >= 11) || "Name must be less  11 numbers"
      ],
     
     
    };
  },
  components: {
    topNavUser
  },
  methods: {
    addInquery() {
      let id = sessionStorage.getItem("orgId");
      
      let inquer = {
        name:this.iname,
        address:this.iaddress,
        email:this.iemail,
        contact:this.icontact,
        message:this.imessage
      }
      this.axios
        .post(`http://localhost:8002/retriveinquiries/${id}`,inquer)
        .then(response => {
          console.log(response);
          
          //console.log(orgs[0],'array')
        })
        .catch(error => {
          console.log(error);
        });

     
    },
    viewPorfolio(){
      let id = sessionStorage.getItem("orgId");
      this.axios
        .post(`http://localhost:8002/retriveprofile/${id}`)
        .then(response => {
         
          var dataT = response.data.randomphoto;
          console.log(dataT, "shdjhs");
          this.orgporfolio = dataT;
        })
        .catch(error => {
          console.log(error);
        });

       
        
      
       
        return this.orgporfolio;

    }
  },
  mounted() {
    var orgs = [];
    let id = sessionStorage.getItem("orgId");
    this.axios
      .post(`http://localhost:8002/retriveprofile/${id}`)
      .then(response => {
        console.log(response);
        var dataT = response.data;
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
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
</style>
 

 
