
<template>
 <div>
    <topNavUser/>
    
    <div id="bg">
     
   
    <v-container fluid>
      
      <v-row dense>
        <v-col cols="6" sm="12">
          <v-card>
            <v-img src="../assets/wed.jpg" class="white--text align-end" height="300px"></v-img>
            <v-img
              src="../assets/cons.jpg"
              style="height:220px;width:200px;possition:relative;margin-top:-10%;margin-left:42.5%"
            ></v-img><br>
            <center>
              <h1>Mellyne Grace R. Nadela</h1>
            </center>
            <hr>
            <h2 style="margin-left:50px">Personal Information</h2> <br><div style="margin-left:20px">
              
     
        <v-icon>mdi-map-marker</v-icon><span>Lumapao Canlaon City, Negros Oriental</span><br>
        <v-icon>mdi-email</v-icon><span>mgnadela@gmail.com</span><br>
        <v-icon>mdi-cellphone-iphone</v-icon><span>09756818441</span><br>

        <v-icon>mdi-calendar-today</v-icon><span>Wedding</span><br>
        <v-icon>mdi-cash</v-icon><span>1000-2000</span><br>
        <v-icon>mdi-gift</v-icon><span>Free Picturial</span><br>
         
      </div>
    
            
          </v-card>
        </v-col>
       
      </v-row>
    </v-container>
    

   
     

      <hr />

     

     
        <template >
      <v-row style="width:90%;margin-left:5%;margin-right:5%;margin-top:5%">
        
        <v-col >
          <v-card >
            <v-container fluid>
                <h2>My Porfolio</h2>
              <v-row>
                    
                <v-col v-for="n in 9" :key="n" class="d-flex child-flex" cols="4">
                  <v-card flat tile class="d-flex">
                    <v-img
                      :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                      :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                      aspect-ratio="1"
                      class="grey lighten-2"
                    >
                      <template v-slot:placeholder>
                        <v-row class="fill-height ma-0" align="center" justify="center">
                          <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                        </v-row>
                      </template>
                    </v-img>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </template>

      <hr />
    </div>
      </div>

</template>
<script>
import topNavUser from "../views/topNavUser.vue"
export default {
  name:"personalAccount",
  components:{
    topNavUser

  }
}
</script>

<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 1000px;
  margin: auto;

  font-family: arial;
}

.title {
  color: grey;
  font-size: 18px;
}

button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 10px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}

a {
  text-decoration: none;
  font-size: 22px;
  color: black;
}

button:hover,
a:hover {
  opacity: 0.7;
}

p {
  font-size: medium;
}
img {
  width: 300px;
}

.row {
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;
}

/* Create two equal columns that sits next to each other */
.column {
  flex: 50%;
  padding: 0 4px;
}

.column img {
  margin-top: 8px;
  vertical-align: middle;
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
 

 
