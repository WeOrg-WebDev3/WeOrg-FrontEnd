<template>
<div id="navtop">
  <b-navbar type="dark" variant="dark">
    <b-navbar-nav>
       <router-link class="li1" to="/" tag="div">Home</router-link>
      <router-link class="li2" to="/About" tag="div">About</router-link>
      <b-nav-item-dropdown text="Categories" right class="dpd">
        <b-dropdown-item  to="/Burial">Burial</b-dropdown-item>
        <b-dropdown-item to="/Birthday">Birthday</b-dropdown-item>
         <b-dropdown-item  to="/Baptist">Baptist</b-dropdown-item>
          <b-dropdown-item  to="/Wedding">Wedding</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
    <b-nav-form class="search">
    
    
      <b-form-input class="mr-sm-2" placeholder="Search"></b-form-input>
      <b-button variant="outline-success" class="my-2 my-sm-0" type="submit" c>Search</b-button>
    </b-nav-form>
  </b-navbar>
  
</div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
.navtop{
  width:50%;
  margin-left:25%;
  margin-right:25%
}
.li1 {
 margin-top: 7px;
  margin-left:200%;
  color:white
}
.li2 {
 margin-top: 8px;
  margin-left:20%;
  color:white}
.li2:hover {
  color:blue

}
.li1:hover {
  color:blue

}
  
.dpd{
  margin-left:20%
  
}
.search {
  margin-left:37%
}
</style>
