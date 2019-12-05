<template>
  <div  id="bg">
    <topNav />
    <v-card style="margin-left:10%; margin-right:10%;margin-top:3%" color="#29b6f6">
      <div class="about">
        <v-row>
          <v-col cols="12" sm="6">
            <v-col>
            <dev
            style="margin-top:2%;margin-left:3%"
              v-bind:picture="require('@/assets/princess.png')"
              v-bind:name="'Princess Joy Duran'"
              v-bind:description="'Project Developer'"
              v-bind:info ="'Once you choose survival over your dream, you lose your dream'"
            >
            </dev>
            </v-col>
            <v-col>
            <dev
            style="margin-top:3% ;margin-left:3%"
              v-bind:picture="require('@/assets/lorly.jpg')"
              v-bind:name="'Lorly S. Sugal'"
              v-bind:description="'Project Developer'"
              v-bind:info ="'Love Yourself and everything will follow.'"
            ></dev>
          </v-col>
          </v-col>
          <v-col cols="12" sm="6">
            <v-col>
            <dev
             style="margin-top: 2%;margin-right:3%"
              v-bind:picture="require('@/assets/mellyne.jpg')"
              v-bind:name="'Mellyne Grace Nadela'"
              v-bind:description="'Project Developer'"
              v-bind:info ="'Trust and Believe in Yourself, because no one else will.'"
            ></dev>
            </v-col>
            <v-col>
            <dev
            style="margin-top:3% ;margin-right:3%"
              v-bind:picture="require('@/assets/jacky.jpg')"
              v-bind:name="'Jakeniel Erim'"
              v-bind:description="'Project Developer'"
              v-bind:info ="'A negative mind will never give you a positive life'"
            ></dev>
            </v-col>
          </v-col>
        </v-row>
      </div>
    </v-card>
  </div>
</template>

<script>
import dev from "@/components/developers";
import topNav from "../views/topNav";
export default {
  components: {
    dev,
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


