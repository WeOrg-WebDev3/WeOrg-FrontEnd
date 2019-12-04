<template>
  <div>
    <topNav/>
    <div id="bg">
      <span></span>
      <v-container fluid>
        <v-row dense>
          <v-col cols="6" sm="4">
            <v-card>
              <v-img src="../assets/wed.jpg" class="white--text align-end" height="300px">
                <v-card-title>WEDDING</v-card-title>
              </v-img>
              <v-card-actions>
                <v-btn color="primary" v-on:click="Wedding()">Visit</v-btn>
                <p style="text-align:center;margin-left:30px;font-size:24px;margin-top:10px">Organizers of this Event</p>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="6" sm="4">
            <v-card>
              <v-img src="../assets/cons.jpg" class="white--text align-end" height="300px">
                <v-card-title>CONCERT</v-card-title>
              </v-img>
              <v-card-actions>
                <v-btn v-on:click="Concert()" color="primary">Visit</v-btn>
                   <p style="text-align:center;margin-left:20px;font-size:24px;margin-top:10px">Organizers of this Event</p>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="6" sm="4">
            <v-card>
              <v-img src="../assets/ber.jpg" class="white--text align-end" height="300px">
                <v-card-title>BIRTHDAY PARTY</v-card-title>
              </v-img>
              <v-card-actions>
                <v-btn color="primary" v-on:click="Birthday()">Visit</v-btn>
                   <p style="text-align:center;margin-left:20px;font-size:24px;margin-top:10px">Organizers of this Event</p>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
        
      </v-container>
      <hr />
   
    <v-container>
      <v-row> 
            <v-flex fluid>
              <h1 style="text-align:center;font-size:48px  ">WeOrg</h1>
              </v-flex>
              <p style="text-align:center;font-size:24px">Is a web application that aids the Organizer from the the different fields of event to accomodate clients to eliminate time and effort to find for clients. Clients has the highest benefit since it would be easy for them to access different services in a much easy way.</p>
      </v-row>
      <v-row >
        <carousel :per-page="5" :mouse-drag="true" style="">
        
        <slide>
          <v-img src="../assets/concert2.jpg" class="white--text align-end" height="300px" width="400px">
                <v-card-title>CONCERT</v-card-title>
              </v-img>
        </slide>
        <slide>
          <v-img src="../assets/concert3.jpg" class="white--text align-end" height="300px" width="400px">
                <v-card-title>CONCERT</v-card-title>
              </v-img>
        </slide>           
        

          <slide>
          <v-img src="../assets/birthday2.jpg" class="white--text align-end" height="300px" width="400px">
                <v-card-title>BIRTHDAY</v-card-title>
              </v-img>
        </slide>           
     
          <slide>
          <v-img src="../assets/birthday3.jpg" class="white--text align-end" height="300px" width="400px">
                <v-card-title>BIRTHDAY</v-card-title>
              </v-img>
        </slide>           
    
                
        
          <slide>
          <v-img src="../assets/wedding2.jpg" class="white--text align-end" height="300px" width="400px">
                <v-card-title>WEDDING</v-card-title>
              </v-img>
        </slide> 
         <slide>
          <v-img src="../assets/wedding3.jpg" class="white--text align-end" height="300px" width="400px">
                <v-card-title>WEDDING</v-card-title>
              </v-img>
        </slide>           
        <slide>

          
        </slide>
      </carousel>
          </v-row>
          <v-row>
        <v-card>
          <v-btn v-on:click="developer()">developers</v-btn>
        </v-card>
      </v-row>
      
    </v-container>
     </div>
  </div>


</template>
<script>
import { Carousel, Slide } from 'vue-carousel';
import topNav from "../views/topNav.vue";

export default {
  data(){
    return{
      name:"home",
      
    }
  },
  methods: {
    Concert() {
      this.$router.push({ path: "Concert" });
    },
    Birthday() {
      this.$router.push({ path: "Birthday" });
    },
    Wedding() {
      this.$router.push({ path: "Wedding" });
    },

    developer(){
      this.$router.push({ path: "about" });
    }
  },
  components: {
      topNav,
      Carousel,
      Slide

    }
};
</script>



<style scoped>
.bottom-gradient {
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.4) 0%,
    transparent 72px
  );
}

.repeating-gradient {
  background-image: repeating-linear-gradient(
    -45deg,
    rgba(255, 0, 0, 0.25),
    rgba(255, 0, 0, 0.25) 5px,
    rgba(0, 0, 255, 0.25) 5px,
    rgba(0, 0, 255, 0.25) 10px
  );
}
#left {
  float: left;
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