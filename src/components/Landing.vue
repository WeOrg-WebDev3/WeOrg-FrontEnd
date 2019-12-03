<template>
  <div>
    <topNav/>
    <div id="bg">
      <span></span>
      <v-container fluid>
        <v-row dense>
          <v-col cols="6" sm="4">
            <v-card>
              <v-img src="../assets/wed.png" class="white--text align-end" height="300px">
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
        <carousel :per-page="7"  :mouse-drag="true">
        <slide>      
            <sliders
              v-bind:picture="require('@/assets/cons.jpg')"
              v-bind:title="'CONCERT'"
            ></sliders>
        </slide>
        <slide>
              <sliders
              v-bind:picture="require('@/assets/concert1.jpg')"
              v-bind:title="'CONCERT'"
            ></sliders>
        </slide>
        <slide>
              <sliders
              v-bind:picture="require('@/assets/birthday1.jpg')"
              v-bind:title="'BIRTHDAY'"
            ></sliders>
        </slide>           
        
          <slide>
              <sliders
              v-bind:picture="require('@/assets/concert2.jpg')"
              v-bind:title="'CONCERT'"
            ></sliders>
        </slide>           
    
          <slide>
        
              <sliders
              v-bind:picture="require('@/assets/birthday.jpg')"
              v-bind:title="'BIRTHDAY'"
            ></sliders>
        </slide>           
     
          <slide>
              <sliders
              v-bind:picture="require('@/assets/wedding2.jpg')"
              v-bind:title="'WEDDING'"
            ></sliders>
        </slide>           
    
          <slide>
              <sliders
              v-bind:picture="require('@/assets/birthday1.jpg')"
              v-bind:title="'BIRTHDAY'"
            ></sliders>
        </slide>           
        
          <slide>
              <sliders
              v-bind:picture="require('@/assets/wedding1.jpg')"
              v-bind:title="'WEDDING'"
            ></sliders>
        </slide> 
         <slide>
              <sliders
              v-bind:picture="require('@/assets/wedding1.jpg')"
              v-bind:title="'WEDDING'"
            ></sliders>
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
import sliders from "../components/slider.vue";

export default {
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
      Slide,
      sliders

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