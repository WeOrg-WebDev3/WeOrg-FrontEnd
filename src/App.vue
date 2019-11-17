<template>
  <div id="app">
  
    
      <router-link class="navBtn1" to="/Login" tag="div">Login</router-link>
      <router-link class="navBtn2" to="/Signup" tag="div">SignUp</router-link>
    
  
 
  <Head/>
    
    <router-view/>
  </div>
</template>

<script>
import Head from './components/Header.vue'

export default {
  name: 'app',
  components: {
    Head,
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}

.navBtn1 {
  color:black;
  position:relative;
 
  margin-left: 90%
}
.navBtn2 {
  margin-left:90%;
  color:black;
  position:relative;
  }

  

</style>
