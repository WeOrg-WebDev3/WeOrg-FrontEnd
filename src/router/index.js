import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import login from '../views/Login'
import Signup from '../views/Signup'
import About from '../views/About'
import Burial from '../views/Burial'
import Birthday from '../views/Birthday'
import Baptist from '../views/Baptist'
import Wedding from '../views/Wedding'

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
        path: '/Home', 
        component: Home
      },
    { 
      path: '/About', 
      component: About
    },

    {
      path: '/Login',
      component: login,
      props: (route) => ({ name: route.query.name })
    },
    {
        path: '/Signup',
        component: Signup,
        props: (route) => ({ name: route.query.name })
      },
    { 
        path: '/Burial', 
        component: Burial
      },
      { 
        path: '/Birthday', 
        component: Birthday
      },
      { 
        path: '/Baptist', 
        component: Baptist
      },
      {
          path: '/Wedding',
          component: Wedding
      }


    // {
    //   path: '/signup',
    //   component: SignUp,
    //   props: (route) => ({ name: route.query.name })
    // },
    // {
    //   path: '/personalinfo',
    //   component: PersonalInfo,
    //   props: (route) => ({ name: route.query.name })
    // }
  ]
})