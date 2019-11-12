<template>
  <div class="header" >
      <h1>WeOrg!</h1>
      <span class="fa fa-star checked" id="st1"></span>
      <span class="fa fa-star checked" id="st2"></span>
      <span class="fa fa-star checked" id="st3"></span>
      <div class="topnav">
      
      <li class="dropdown">
        <a href="#Organizer">Category</a>
        <div class="dropdown-content">
          <a href="#">Wedding</a>
          <a href="#">Baptist</a>
          <a href="#">Debut</a>
        </div>
      </li>
      <input type="text" placeholder="Search.." />
      <i class="fa fa-search searchI"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "header",
  components: {}
};
</script>

<style scoped>
.header {
  background-color: var(--main-dark-bg-color);
  color: var(--txt-inverse-color);
  font-size: 16px;
  display: flex;
  height: 200px;
}

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
/* Change the color of links on hover */
.topnav a:hover {
  background-color: rgb(221, 221, 221);
  color: black;
}
/* Style the "active" element to highlight the current page */
.topnav a.active {
  background-color: #2196f3;
  color: white;
}

</style>