<template>
  <div id="form">
  <br>
  <h1>Login</h1>
    <b-form class="logForm" >
      <b-form-group id="input-group-2" label="Email Address:" label-for="input-2" class="input" >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
          
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Password" label-for="input-2" class="input">
        <b-form-input
          id="input-2"
          v-model="form.password"
          required
          placeholder="Enter Password"
          type="password"
          
        ></b-form-input>
        
      </b-form-group>

      

     

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <br>
    
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
          food: null,
          checked: []
        },
        foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>
<style>
  #form{
    width:30%;
    margin-left:35%;
    margin-right:35%;
    margin-top:10%;
    background-color:grey;
    border-radius:10%
  }
  .input{
    width:70%;
    margin-left:15%;
    margin-right:15%
  }
  .logForm{
    margin-top:10%
  }
</style>