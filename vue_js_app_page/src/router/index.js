import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/about.vue'
import Application from '../views/application.vue'
import Index from '../views/index.vue'
import Login from '../views/login.vue'
import Profile from '../views/profile.vue'
import Register from '../views/register.vue'

Vue.use(VueRouter)

const routes = [
    {
      path: '/',
      name: 'Index',
      component: Index,
      meta: {
        authenticator: false
      }
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      meta: {
        authenticator: false
      }
    },
    {
      path: '/application',
      name: 'Application',
      component: Application,
      meta: {
        authenticator: false
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: { 
        navigation : false,
        authenticator: false 
      }
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile,
        meta: {
          authenticator: false
        }
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
        meta: { navigation : false }
    }
  ]

  const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })
  
  export default router