import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import login from '../components/Login'
import SignUp from '../components/SignUp'
import About from '../components/About'
// import SearchBar from '../components/searchBar'

Vue.use(Router)

export default new Router({
  mode: 'history',

  routes: [
    { 
      path: '/', 
      component: Home
    },
    { 
      path: '/About', 
      component: About
    },

    {
      path: '/login',
      component: login,
      props: (route) => ({ name: route.query.name })
    },

    {
      path: '/signup',
      component: SignUp,
      props: (route) => ({ name: route.query.name })
    },
    // {
    //   path: '/personalinfo',
    //   component: PersonalInfo,
    //   props: (route) => ({ name: route.query.name })
    // }
  ]
})
