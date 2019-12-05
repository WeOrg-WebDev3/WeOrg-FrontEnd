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
                <v-btn color="primary" @click="goto('Wedding')">Visit</v-btn>
                <p
                  style="text-align:center;margin-left:30px;font-size:24px;margin-top:10px"
                >Organizers of this Event</p>
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
                <v-btn  @click="goto('Concert')" color="primary">Visit</v-btn>
                <p
                  style="text-align:center;margin-left:20px;font-size:24px;margin-top:10px"
                >Organizers of this Event</p>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="6" sm="4">
            <v-card>
              <v-img src="../assets/ber.jpg" class="white--text align-end" height="300px">
                <v-card-title>BIRTHDAY PARTY</v-card-title>
              </v-img>
              <v-card-actions>
                <v-btn color="primary"  @click="goto('Birthday')">Visit</v-btn>
                <p
                  style="text-align:center;margin-left:20px;font-size:24px;margin-top:10px"
                >Organizers of this Event</p>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <hr>

      <v-container>
        <v-row>
          <v-flex fluid>
            <h1 style="text-align:center;font-size:48px  ">WeOrg</h1>
          </v-flex>
        </v-row>
         <v-row>
          <v-flex fluid>
            <h2 >Web application that helps clients find a fitted organizer for an event.</h2>
          </v-flex>
        </v-row>
        <br>
        <br>
        <v-row>
          <carousel :per-page="7" :mouse-drag="true">
            <slide>
              <sliders v-bind:picture="require('@/assets/con1.jpg')" v-bind:title="'CONCERT'"></sliders>
            </slide>
            <slide>
              <sliders v-bind:picture="require('@/assets/bday3.jpg')" v-bind:title="'BIRTHDAY'"></sliders>
            </slide>

            <slide>
              <sliders v-bind:picture="require('@/assets/wedf.jpg')" v-bind:title="'WEDDING'"></sliders>
            </slide>

            <slide>
              <sliders v-bind:picture="require('@/assets/birthday.jpg')" v-bind:title="'BIRTHDAY'"></sliders>
            </slide>
            <slide>
              <sliders v-bind:picture="require('@/assets/con4.jpg')" v-bind:title="'CONCERT'"></sliders>
            </slide>

            <slide>
              <sliders v-bind:picture="require('@/assets/wedv2.jpg')" v-bind:title="'WEDDING'"></sliders>
            </slide>

            <slide>
              <sliders v-bind:picture="require('@/assets/birthday1.jpg')" v-bind:title="'BIRTHDAY'"></sliders>
            </slide>

            <slide>
              <sliders v-bind:picture="require('@/assets/wedv1.jpg')" v-bind:title="'WEDDING'"></sliders>
            </slide>
            <slide>
              <sliders v-bind:picture="require('@/assets/wedv2.jpg')" v-bind:title="'WEDDING'"></sliders>
            </slide>

            <slide></slide>
          </carousel>
        </v-row>
        <hr>
        <template>
          <v-container fluid>
            <v-row>
              <v-col cols="12" sm="6">
                <v-img id="img" src="../assets/con1.jpg"></v-img>
              </v-col>
              <v-col cols="12" sm="6">
                <h4>When you go to a concert, part of being there is that you're all hearing the same thing. It's about being in a crowd. If you go to a gig and there are two people there, then it's not the same thing.</h4>
              </v-col>
            </v-row>
          </v-container>
        </template>

        <template>
          <v-container fluid>
            <v-row>
              <v-col cols="12" sm="6">
                <h4>The love you've shown me is beyond anything my childhood self could dream up. Its heartwarming , genuine and fierce sometimes all at once. At the same time your love has taught me to find what I spent to long searching for within my own self.</h4>
              </v-col>
              <v-col cols="12" sm="6">
                <v-img id="img" src="../assets/wedv2.jpg"></v-img>
              </v-col>
            </v-row>
          </v-container>
        </template>

        <template>
          <v-container fluid>
            <v-row>
              <v-col cols="12" sm="6">
                <v-img id="img" src="../assets/con2.jpg"></v-img>
              </v-col>
              <v-col cols="12" sm="6">
                <h4>Heres to the night that tured into morning, and the friends who turned into family.</h4>
              </v-col>
            </v-row>
          </v-container>
        </template>

        <template>
          <v-container fluid>
            <v-row>
              <v-col cols="12" sm="6">
                <h4>I mean, eighteen years old is the age of consent in Europe and you can go anywhere and do anything you like. In America, it is dumb. At eighteen you should be able to do anything that you like, except get married.</h4>
              </v-col>
              <v-col cols="12" sm="6">
                <v-img id="img" src="../assets/bday3.jpg"></v-img>
              </v-col>
            </v-row>
          </v-container>
        </template>

        <template>
          <v-container fluid>
            <v-row>
              <v-col cols="12" sm="6">
                <v-img id="img" src="../assets/bday2.jpg"></v-img>
              </v-col>
              <v-col cols="12" sm="6">
                <h4>Dance like the whole world is your stage and every day is your debut.</h4>
              </v-col>
            </v-row>
          </v-container>
        </template>

        <template>
          <v-container fluid>
            <v-row>
              <v-col cols="12" sm="6">
                <h4>Music touches us emotionally where words cant!</h4>
              </v-col>
              <v-col cols="12" sm="6">
                <v-img id="img" src="../assets/con4.jpg"></v-img>
              </v-col>
            </v-row>
          </v-container>
        </template>

        <template>
          <v-container fluid>
            <v-row>
              <v-col cols="12" sm="6">
                <v-img id="img" src="../assets/wedv1.jpg"></v-img>
              </v-col>
              <v-col cols="12" sm="6">
                <h4>Your task is not to seek for love, but merely to seek and find all the barriers within yourself that you have built against it.</h4>
              </v-col>
            </v-row>
          </v-container>
        </template>

        <template>
          <v-container fluid>
            <v-row>
              <v-col cols="12" sm="6">
                <h4>Count your life by smiles, not tears. Count your age by friends, not years. Happy birthday!</h4>
              </v-col>
              <v-col cols="12" sm="6">
                <v-img id="img" src="../assets/bday1.png"></v-img>
              </v-col>
            </v-row>
          </v-container>
        </template>

        <template>
          <v-container fluid>
            <v-row>
              <v-col cols="12" sm="6">
                <v-img id="img" src="../assets/bday4.jpg"></v-img>
              </v-col>
              <v-col cols="12" sm="6">
                <h4>Birthdays are a new start, a fresh beginning and a time to pursue new endeavors with new goals. Move forward with confidence and courage. You are a very special person. May today and all of your days be amazing!</h4>
              </v-col>
            </v-row>
          </v-container>
        </template>

        <template>
          <v-container fluid>
            <v-row>
              <v-col cols="12" sm="6">
                <h4>Everyday we make more progress towards understanding the concert hall.</h4>
              </v-col>
              <v-col cols="12" sm="6">
                <v-img id="img" src="../assets/con3.jpg"></v-img>
              </v-col>
            </v-row>
          </v-container>
        </template>

        <template>
          <v-container fluid>
            <v-row>
              <v-col cols="12" sm="6">
                <v-img id="img" src="../assets/wedf.jpg"></v-img>
              </v-col>
              <v-col cols="12" sm="6">
                <h4>
                  The day I meet you i found my missing piece.
                  You complete me and make me a better person.
                  I love you with all my heart and all my soul
                </h4>
              </v-col>
            </v-row>
          </v-container>
        </template>
        <v-row>
          <template>
            <v-footer dark padless>
              <v-card flat tile class="cyan darken-1  white--text text-center">
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
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<script>
import { Carousel, Slide } from "vue-carousel";
import topNav from "../views/topNav.vue";
import sliders from "../components/slider.vue";
export default {
  
  methods: {
    goto(event) {
      sessionStorage.setItem("orgEvent", event);
      alert(event)
      this.$router.push({ path: "eventOrganizer" });
    },
    
    developer() {
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
h4 {
  margin-top: 15%;
  font-size: 25px;
  font-style: Medium italic;
  text-align: center;
  position: responsive;
}
#bg {
  height: 100%;
  width: 100%;
  top: 0;
  bottom: 0;
  background-image: url("../assets/bg.jpg");
  background-size: cover;
}
#img {
  height: 350px;
  width: 600px;
}
h1 {
  font-style: italic;
  font-size: 30px;
  color: whitesmoke;
}
p {
  text-align: center;
  font-size: 24px;
  color: whitesmoke;
}
h2{
  font-size: 25px;
  color: whitesmoke;
  text-align:center
}
#devs{
  background-color: #0288D1;
}
</style>