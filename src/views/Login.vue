<template>
  <div>
    <topNav />

    <v-app class="form" id="inspire">
      <v-content id="bg">
        <v-container style="margin-top:5%">
          <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="6">
              <v-card class="elevation-12">
                <v-toolbar color="secondary" dark flat>
                  <v-toolbar-title>LOGIN</v-toolbar-title>
                  <v-spacer />
                </v-toolbar>
                <v-card-text>
                  <v-form>
                    <v-text-field
                      v-model="email"
                      label="Email"
                      name="login"
                      prepend-icon="mdi-account"
                      type="text"
                      :rules="emailRules"
                      required
                    ></v-text-field>
                    <v-text-field
                      v-model="password"
                      id="password"
                      label="Password"
                      name="password"
                      prepend-icon="mdi-lock"
                      type="password"
                      :rules="passwordRules"
                      required
                    ></v-text-field>
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer />
                  <v-btn v-on:click="login" color="secondary">Login</v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>


<script>
import topNav from "../views/topNav.vue";
import axios from "axios";

export default {
  name: "btnLogin",
  data: () => ({
    valid: true,
    password: "",
    passwordRules: [
      v => !!v || "password  is required",
      v => (v && v.length >= 8) || "Name must be less  8 numbers"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ]
  }),
  methods: {
     login() {
      axios
        .post("http://localhost:8002/signin", {
          email: this.email,
          password: this.password
        })
        .then(response => {
          console.log(response.data,'data')
          
          console.log(response.data.img);
          if(response.data.auth == true){
          this.$router.push({ path: "personalAccount" });
          sessionStorage.setItem("token", response.data.token);
          sessionStorage.setItem("id", response.data._id);
          }else{
            alert("Invalid Password and Email")
          }
        });
    }
  },
  props: {},
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
