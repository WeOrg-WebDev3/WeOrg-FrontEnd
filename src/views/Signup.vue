<template>
  <!-- <div id="signup"> -->
    <form class="signupform">
      <h1 class="sign">Sign Up</h1>
      <label>
        <p class="label-txt">NAME</p>
        <input
          type="text"
          class="input"
          name="name"
      
          autocomplete="off" required
        >
        <div class="line-box">
          <div id="username" class="line"></div>
        </div>
      </label>
      <label>
        <p class="label-txt">ADDRESS</p>
        <input
          type="text"
          class="input"
          name="Address"
          autocomplete="off" required
        >
        <div class="line-box">
          <div id="username" class="line"></div>
        </div>
         
      </label>
      <label>
        <p class="label-txt">CONTACT NUMBER</p>
        <input
          type="number"
          class="input"
          name="number"
          autocomplete="off" required
        >
        <div class="line-box">
          <div id="username" class="line"></div>
        </div>
      </label>
      <label>
        <p class="label-txt">EMAIL</p>
        <input type="email" class="input" name="email" required>
        <div class="line-box">
          <div class="line"></div>
        </div>
      </label>
      <label>
        <p class="label-txt">EVENT</p>
        <input
          type="text"
          class="input"
          name="username"
          autocomplete="off" required
        >
        <div class="line-box">
          <div id="username" class="line"></div>
        </div>
      </label>
      <label>
        <p class="label-txt">UPLOAD PHOTO</p>
        <input
          type="file"
          class="input"
          accept="image/*"
          name="username"
          autocomplete="off" required
        >
        <div class="line-box">
          <div id="username" class="line"></div>
        </div>
      </label>
      

      <button type="submit">submit</button>
    </form>
  <!-- </div> -->
</template>
<script>
// import $ from "jquery";
// import axios from "axios";

export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      address: "",
      contact: "",
      email: "",
      event: "",
      err: false,
      isValid: false
    };
  },
  
};
</script>
<style scoped>
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .5s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
.signupform {
  border: 1px solid lightgrey;
  width: 380px;
  height: 1000px;
  margin-top: 20px;
  margin-bottom: 40px;
  margin-right: 10%;
  margin-left: 10%;
  background: white;
  padding: 45px;
  text-align: center;
  float: right;
  -webkit-box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1);
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  position: relative;
}

.input {
  font-weight: normal;
}

.err {
  font-weight: normal;
  color: red;
  font-size: 13px;
  width: 100%;
  position:absolute;
  right:0px;
}

.posts {
  height: 1000px;
  background-color: white;
}

.container {
  /* background-image: linear-gradient(to bottom right, white, #d9dcde); */
  margin: 0;
  padding-top: 0;
  height: 1000px;
  width: 100%;
}

label {
  display: block;
  position: relative;
  margin: 40px 0px;
}
.label-txt {
  position: absolute;
  top: -1.6em;
  padding: 10px;
  font-weight: normal;
  font-family: sans-serif;
  font-size: 1em;
  letter-spacing: 1px;
  color: rgb(120, 120, 120);
  transition: ease 0.3s;
}
.input {
  width: 100%;
  padding: 10px;
  background: transparent;
  border: none;
  outline: none;
  text-align: left;
}

.line-box {
  position: relative;
  width: 100%;
  height: 1px;
  background: #bcbcbc;
}

.line {
  position: absolute;
  width: 0%;
  height: 2px;
  top: 0px;
  transform: translateX(0%);
  background: black;
  transition: ease 0.6s;
}

.input:focus + .line-box .line {
  width: 100%;
}

.label-active {
  top: -3em;
}

button {
  display: inline-block;
  padding: 12px 24px;
  background: rgb(220, 220, 220);
  font-weight: bold;
  color: rgb(120, 120, 120);
  border: none;
  outline: none;
  border-radius: 3px;
  cursor: pointer;
  transition: ease 0.3s;
}

button:hover {
  background: #5d5f61;
  color: #ffffff;
}

.sign {
  padding: 0px;
  margin-top: 0;
  margin-bottom: 60px;
}
</style>