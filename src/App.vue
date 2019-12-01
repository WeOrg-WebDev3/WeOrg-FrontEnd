<template>
  <v-app>
    <Header />
    <router-view />
    <template>
  
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
    loginNa() {
     
    }
  }
};
</script>
