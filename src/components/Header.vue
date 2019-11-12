<template>
  <div class="head">
    <h1>WeOrg!</h1>
    
    <router-link class="navBtn" to="/Login" tag="div">Login</router-link>
      <router-link class="navBtn" to="/SignUp" tag="div">SignUp</router-link>
    <span class="fa fa-star checked" id="st1"></span>
    <span class="fa fa-star checked" id="st2"></span>
    <span class="fa fa-star checked" id="st3"></span>
    <div class="topnav">
      <router-link class="navBtn" to="/" tag="div">Home</router-link>
      <router-link class="navBtn" :to="'/About'" tag="div">About</router-link>
      
       <router-link class="navBtn" to="/" tag="div">Organizers</router-link>
    
     
      <input type="text" placeholder="Search..">
      <i class="fa fa-search searchI"></i>
    
    </div>
  </div>
</template>
<script>
export default {
  name: "my",
  props: {
    msg: String
  }
};
</script>
<style>
.topnav {
  overflow: hidden;
  background-color: #e9e9e9;
  width: 75%;
  margin-left: 15%;
  padding: 4px;
  margin-top: 8%;
}
/* Style the links inside the navigation bar */
.navBtn {
  float: left;
  display: block;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav .navBtn:hover {
  background-color:gray;
  color:black
}
/* Style the "active" element to highlight the current page
.topnav .navBtn.active {
  background-color: #2196f3;
  color: rgb(255, 255, 255);
} */
/* Style the search box inside the navigation bar */
.topnav input[type="text"] {
  float: left;
  padding: 6px;
  border: none;
  margin-top: 8px;
  margin-left: 5%;
  font-size: 17px;
  width: 50%;
}
/* When the screen is less than 600px wide, stack the links and the search field vertically instead of horizontally */
@media screen and (max-width: 200px) {
  .topnav a,
  .topnav input[type="text"] {
    float: none;
    display: block;
    text-align: left;
    width: 100%;
    margin: 0;
    padding: 14px;
  }
  .topnav input[type="text"] {
    border: 1px solid #ccc;
  }
}
.head {
  padding: 45px;
  background: #1a7bbc;
  color: white;
  font-size: 30px;
}
h1 {
  float: left;
  margin-top: -20px;
  color: black;
}
.checked {
  color: orange;
}
i {
  color: black;
  position: relative;
  margin-bottom: 15px;
  margin-top: 8px;
  margin-left: -30px;
}
#st1 {
  float: left;
  margin-left: -175px;
  margin-top: 60px;
}
#st2 {
  float: left;
  margin-left: -125px;
  margin-top: 60px;
}
#st3 {
  float: left;
  margin-left: -75px;
  margin-top: 60px;
}
li {
  float: left;
}
li a,
.dropbtn {
  display: inline-block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}
li a:hover,
.dropdown:hover .dropbtn {
  background-color: red;
}
li.dropdown {
  display: inline-block;
}
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}
.dropdown-content a:hover {
  background-color: #f1f1f1;
}
.dropdown:hover .dropdown-content {
  display: block;
}
img {
  widows: 10px;
}

</style>