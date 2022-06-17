<template>
<div>
  <div v-if = "showNavigation">
  <section class = "navmenu" id = "title">
    <nav class="navbar navbar-custom navbar-icon-top navbar-expand-lg fixed-top navbar-light">
      <router-link to = "/" class = "">
      <a class="navbar-brand navbar-i" id = "home_link">Faraway</a>
      </router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link to = "/" class = "">
              <a class="nav-link" id = "index_link">
                <i class="fa fa-home"></i>
                  Home
                <span class="sr-only">(current)</span>
              </a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to = "/profile" class = "">
            <a class="nav-link" id = "profile_link">
              <i class="fa fa-arrow-circle-down">
              </i>
              Profile
            </a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to = "/application" class = "">
            <a class="nav-link"  id = "app_link">
              <i class="fa fa-arrow-circle-down">
              </i>
              App
            </a>
            </router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i class="fa fa-chevron-circle-down">
              </i>
              More
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <router-link to = "/login" class = "">
              <a class="dropdown-item" id = "logout_link">Sign out</a>
              </router-link>
              <div class="dropdown-divider"></div>
              <router-link to = "/about" class = "">
              <a class="dropdown-item" id = "about_link">About</a>
              </router-link>
            </div>
          </li>
        </ul>
        <ul class="navbar-nav ">
          <li class="nav-item">
            <a class="nav-link" href="#">
              <i class="fa fa-bell">
                <span class="badge badge-info">11</span>
              </i>
              Messages
            </a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
  </section>
  </div>
   <router-view/>
  </div>
</template>

<script>
import config from './config.js';

export default {
  name: 'App',
  beforeMount() {
    this.$store.dispatch('INIT_TODO', config.STORAGE);
  },
  computed: {
    showNavigation() {
      return this.$route.meta.navigation!==false;
    }

  }
}
</script>

<style>
* {
  box-sizing: border-box;
  scroll-behavior: smooth;
}

nav {
  display: block;
}

section {
  display: block;
  padding-top: 45px;
}
.nowrap {
  white-space: nowrap ;
}
.sr {
  white-space: nowrap ;
}

a {
  cursor: pointer;
}
.navbar-i {
  color: #102550;
 }

.navbar-i:hover {
  color: #1B75DB;
 }

.navbar-custom {
background-color: #FF9933;
}

.navbar-custom .navbar-nav .nav-link {
  color: #102550;
  padding: 1rem 1rem;
}

.navbar-custom:hover .navbar-nav:hover .nav-link:hover {
  color: #1B75DB;
}

.navbar-icon-top .navbar-nav .nav-link > .fa {
  position: relative;
  width: 36px;
  font-size: 24px;
}

.navbar-icon-top .navbar-nav .nav-link > .fa > .badge {
  font-size: 0.75rem;
  position: absolute;
  right: 0;
  font-family: sans-serif;
}

.navbar-icon-top .navbar-nav .nav-link > .fa {
  top: 3px;
  line-height: 12px;
}

.navbar-icon-top .navbar-nav .nav-link > .fa > .badge {
  top: -10px;
}

@media (min-width: 576px) {
  .navbar-icon-top.navbar-expand-sm .navbar-nav .nav-link {
    text-align: center;
    display: table-cell;
    height: 70px;
    vertical-align: middle;
    padding-top: 0;
    padding-bottom: 0;
  }

  .navbar-icon-top.navbar-expand-sm .navbar-nav .nav-link > .fa {
    display: block;
    width: 48px;
    margin: 2px auto 4px auto;
    top: 0;
    line-height: 24px;
  }

  .navbar-icon-top.navbar-expand-sm .navbar-nav .nav-link > .fa > .badge {
    top: -7px;
  }
}

@media (min-width: 768px) {
  .navbar-icon-top.navbar-expand-md .navbar-nav .nav-link {
    text-align: center;
    display: table-cell;
    height: 70px;
    vertical-align: middle;
    padding-top: 0;
    padding-bottom: 0;
  }

  .navbar-icon-top.navbar-expand-md .navbar-nav .nav-link > .fa {
    display: block;
    width: 48px;
    margin: 2px auto 4px auto;
    top: 0;
    line-height: 24px;
  }

  .navbar-icon-top.navbar-expand-md .navbar-nav .nav-link > .fa > .badge {
    top: -7px;
  }
}
@media (min-width: 992px) {
  .navbar-icon-top.navbar-expand-lg .navbar-nav .nav-link {
    text-align: center;
    display: table-cell;
    height: 70px;
    vertical-align: middle;
    padding-top: 0;
    padding-bottom: 0;
  }

  .navbar-icon-top.navbar-expand-lg .navbar-nav .nav-link > .fa {
    display: block;
    width: 48px;
    margin: 2px auto 4px auto;
    top: 0;
    line-height: 24px;
  }

  .navbar-icon-top.navbar-expand-lg .navbar-nav .nav-link > .fa > .badge {
    top: -7px;
  }
}

.btn-primary {
  background-color: #444;
  color: #ddd;
  border: 1px solid #ddd
}

.btn-primary:hover {
  background-color: #2088FF;
  border: 1px solid #21bf73
}

.btn-success {
  padding: 5px 25px;
  background-color: #1B75DB
}

#header {
  transition: all 0.5s;
  z-index: 997;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

#header.header-scrolled, #header.header-inner-pages {
  background: rgba(40, 40, 40, 0.9);
}

#header .logo {
  font-size: 28px;
  margin: 0;
  padding: 0;
  line-height: 1;
  font-weight: 700;
  letter-spacing: 0.5px;
}

#header .logo a {
  color: #fff;
}

#header .logo img {
  max-height: 40px;
}

@media (max-width: 992px) {
  #header {
    border: 0;
    padding: 15px 0;
  }
}

#headnav {
  width: 100%;
  height: 100vh;
  background: url("./assets/back.png") top center;
  background-size: cover;
  position: relative;
}

#headnav:before {
  content: "";
  /*background: rgba(255, 255, 255, 0.2);*/
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
}

#headnav .container {
  padding-top: 72px;
  position: relative;
  text-align: center;
}

#headnav h1 {
  margin: 45px 0 10px 0;
  font-size: 48px;
  font-weight: 700;
  line-height: 56px;
  color: #28A745;
}

#headnav h2 {
  color: #28A745;
  margin-bottom: 40px;
  font-size: 24px;
}

#headnav .btn {
  width: 94px;
  height: 94px;
  margin: 0 auto;
  background: radial-gradient(#1B75DB 50%, rgba(0, 153, 97, 0.4) 52%);
  border-radius: 50%;
  display: block;
  overflow: hidden;
  position: relative;
}

#headnav .btn::after {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-40%) translateY(-50%);
  width: 0;
  height: 0;
  z-index: 100;
  transition: all 400ms cubic-bezier(0.55, 0.055, 0.675, 0.19);
}

#headnav .btn::before {
  content: '';
  position: absolute;
  width: 120px;
  height: 120px;
  -webkit-animation-delay: 0s;
  animation-delay: 0s;
  -webkit-animation: pulsate-btn 3s;
  animation: pulsate-btn 3s;
  -webkit-animation-direction: forwards;
  animation-direction: forwards;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-timing-function: steps;
  animation-timing-function: steps;
  opacity: 1;
  border-radius: 50%;
  border: 5px solid rgba(0, 153, 97, 0.7);
  top: -15%;
  left: -15%;
  background: rgba(198, 16, 0, 0);
}

#headnav .btn:hover::after {
  border-left: 15px solid #1B75DB;
  transform: scale(20);
}

#headnav .btn:hover::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-40%) translateY(-50%);
  width: 0;
  height: 0;
  border: none;
  z-index: 200;
  -webkit-animation: none;
  animation: none;
  border-radius: 0;
}

@media (min-width: 1024px) {
  #headnav {
    background-attachment: fixed;
  }
}

@media (max-width: 768px) {
  #headnav h1 {
    font-size: 28px;
    line-height: 36px;
  }
  #headnav h2 {
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 30px;
  }
}

@-webkit-keyframes pulsate-btn {
  0% {
    transform: scale(0.6, 0.6);
    opacity: 1;
  }
  100% {
    transform: scale(1, 1);
    opacity: 0;
  }
}

@keyframes pulsate-btn {
  0% {
    transform: scale(0.6, 0.6);
    opacity: 1;
  }
  100% {
    transform: scale(1, 1);
    opacity: 0;
  }
}
  
/* Add padding to containers */
.container {
  padding: 16px;
}

/* Full-width input fields */
input[type=text], input[type=password] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

input[type=text]:focus, input[type=password]:focus {
  background-color: #ddd;
  outline: none;
}

/* Overwrite default styles of hr */
hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

/* Add a blue text color to links */
a {
  color: dodgerblue;
}

/* Set a grey background color and center the text of the "sign in" section */
.signin {
  background-color: #f1f1f1;
  text-align: center;
}

</style>
