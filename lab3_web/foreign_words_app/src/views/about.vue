<template>
    <section id="footer">
        <div class="container">
          <div class="row text-center text-xs-center text-sm-left text-md-left">
            <div class="col-xs-12 col-sm-2 col-md-2">
              <h5>Quick links</h5>
              <ul class="list-unstyled quick-links">
                <li><a href="#headnav"><i class="fa fa-angle-double-right"></i>Home</a></li>
                <li><a href="#profile"><i class="fa fa-angle-double-right"></i>Profile</a></li>
                <li><a href="#app"><i class="fa fa-angle-double-right"></i>App</a></li>
                <li><a href="#register"><i class="fa fa-angle-double-right"></i>Register</a></li>
                <li><a href="#login"><i class="fa fa-angle-double-right"></i>Login</a></li>
              </ul>
            </div>
            <div class="imgres col-xs-12 col-sm-6 col-md-6">
              <img src = "../assets/FARAWAY.png" class  = "img-fluid">
            </div>
            <div class="col-xs-12 col-sm-4 col-md-4">
              <h2 class="page-section-heading text-center text-uppercase text-white">About</h2>
                  <div class="row">
                      <div class="col-xl-12 col-lg-10 col-md-10 col-sm-10  ml-auto">
                        <p class="lead">Faraway is a free web app for everybody to study new words, remember and keep track your progress. You will develop your listening and writing skills. It is the best application for you. Register and join us!</p></div>
                  </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 col-lg-12 col-md-12 mt-2 mt-sm-5">
              <ul class="list-unstyled list-inline social text-center">
                <li class="list-inline-item"><a href="#"><i class="fa fa-facebook"></i></a></li>
                <li class="list-inline-item"><a href="#"><i class="fa fa-twitter"></i></a></li>
                <li class="list-inline-item"><a href="#"><i class="fa fa-instagram"></i></a></li>
                <li class="list-inline-item"><a href="#"><i class="fa fa-google-plus"></i></a></li>
                <li class="list-inline-item"><a href="#" target="_blank"><i class="fa fa-envelope"></i></a></li>
              </ul>
            </div>   
          </div>
        </div>
        <div class="copyright py-4 text-center text-white">
          <small>Copyright © farawaystudy.com 2021</small>
      </div>
    </section>
</template>

<style>
#footer {
    background: #007b5e !important;
    height: 100vh;
    padding-top: 10%;
  }
  #footer h5{
    padding-left: 10px;
    border-left: 3px solid #eeeeee;
    padding-bottom: 6px;
    margin-bottom: 20px;
    color:#ffffff;
  }
  #footer a {
    color: #ffffff;
    text-decoration: none !important;
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
  }
  
  @media (max-width:767px){
    #footer h5 {
    padding-left: 0;
    border-left: transparent;
    padding-bottom: 0px;
    margin-bottom: 10px;
  }
  }
  
  #footer ul.social li{
      padding: 3px 0;
  }
  #footer ul.social li a i {
    margin-right: 5px;
    font-size:25px;
    -webkit-transition: .5s all ease;
    -moz-transition: .5s all ease;
    transition: .5s all ease;
  }
  #footer ul.social li:hover a i {
      font-size:30px;
      margin-top:-10px;
  }
  #footer ul.social li a,
  #footer ul.quick-links li a{
      color:#ffffff;
  }
  #footer ul.social li a:hover{
      color:#eeeeee;
  }
  #footer ul.quick-links li{
      padding: 1px 0;
      -webkit-transition: .5s all ease;
      -moz-transition: .5s all ease;
      transition: .5s all ease;
  }
  #footer ul.quick-links li:hover{
      padding: 1px 0;
      margin-left:5px;
      font-weight:700;
  }
  #footer ul.quick-links li a i{
      margin-right: 5px;
  }
  #footer ul.quick-links li:hover a i {
      font-weight: 700;
  }
  
  #footer .socmedia {
    padding: 0px;
    margin: 0px;
  }
  #footer .copyright {
    background-color: #1a252f;
    margin: 3vh;
  }
</style>