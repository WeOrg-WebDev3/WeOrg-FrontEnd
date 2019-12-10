<template>
  <v-app>
    <Header/>
    <router-view/>
    <template>
      <template>
        <v-footer dark padless>
          <v-card flat tile class="cyan darken-1 white--text text-center">
            <v-card-text>
              <v-btn id="devs" v-on:click="developer()">developers</v-btn>
            </v-card-text>

            <v-card-text
              class="white--text pt-2"
            >WeOrg is a web application that is developed by four scholars of Passerelles Numeriques Philippines. This is to aids the Organizer from the the different fields of events to accommodate clients to eliminate time and effort to find for clients. Clients has the highest benefit since it would be easy for them to acquire different services in a much easier way.</v-card-text>

            <v-divider></v-divider>

            <v-card-text class="white--text">
              {{ new Date().getFullYear() }} —
              <strong>WeOrg!</strong>
            </v-card-text>
          </v-card>
        </v-footer>
      </template>
    </template>
  </v-app>
</template>
  

<script>
import Header from "./components/Header.vue";
export default {
  name: "App",

  components: {
    Header
  },

  data: () => ({

    //
  }),
  methods: {
    developer() {
      this.$router.push({ path: "about" });
    }
  }
};
</script>
