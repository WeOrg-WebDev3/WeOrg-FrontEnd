 <template>
 
  <v-bottom-navigation dark shift>
    <v-btn icon>
      <span>HOME</span>
      <v-icon @click="goto('/Home')">mdi-home</v-icon>
    </v-btn>
    <v-col cols="12" sm="2" style="margin-top:-20px">
      <v-text-field label="SEARCH" single-line></v-text-field>
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
 
</template>
<script>
// import topNav from "../views/topNav.vue";
export default {
  name:"topNav",
  methods: {
    goto(link) {
      this.$router.push({ path: link });
    }
  }
};
</script>