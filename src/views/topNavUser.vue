 <template>
  <v-bottom-navigation dark shift>
    <v-btn icon>
      <span>HOME</span>
      <v-icon >mdi-home</v-icon>
    </v-btn>
    

    
    <v-btn icon >
      <span> View Inqueries</span>
      <v-icon>mdi-login</v-icon>
    </v-btn>
    <v-btn icon>
      <span>View Porfolio</span>
      <v-icon >mdi-clipboard-account</v-icon>
    </v-btn>
  </v-bottom-navigation>
 
</template>
<script>
// import topNav from "../views/topNav.vue";
export default {
  name:"topNavUser",
  methods: {
    goto(link) {
      this.$router.push({ path: link });
    }
  }
};
</script>