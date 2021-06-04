<template>
<section id = "profile">
   <div class="container">
      <div class="row">
         <div class="col-md-5 col-lg-5 mb-3">
            <div class = "card">
               <div class="card-body">
                  <div class="fakeimg" id = "fkmg"><img src = "../assets/avatar.png"></div>
                  <h3 class = "gg_n">John Doe</h3>
                  <div id = "g_id"></div>
                  <h3>Achievements</h3>
                  <hr class="d-sm-none">
                  <div class="row">
                     <div class="col-sm-3">
                        <i class="fa fa-trophy"></i>
                     </div>
                     <div class="col-sm-9">
                        <h5>Kenneth Valdez</h5>
                        <span>Description</span>
                        <div class="progress">
                           <div data-percentage="0%" style="width: 50%;" class="progress-bar progress-bar-success" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                     </div>
                  </div>
                  <div class="row">
                     <div class="col-sm-3">
                        <i class="fa fa-trophy"></i>
                     </div>
                     <div class="col-sm-9">
                        <h5>Kenneth Valdez</h5>
                        <span>Description</span>
                        <div class="progress">
                           <div data-percentage="0%" style="width: 50%;" class="progress-bar progress-bar-success" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                     </div>
                  </div>
                  <div class="row">
                     <div class="col-sm-3">
                        <i class="fa fa-trophy"></i>
                     </div>
                     <div class="col-sm-9">
                        <h5>Kenneth Valdez</h5>
                        <span>Description</span>
                        <div class="progress">
                           <div data-percentage="0%" style="width: 50%;" class="progress-bar progress-bar-success" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div class="col-md-7 col-lg-7">
            <div class="col-md-12 col-lg-12">
               <div class="card mb-3">
                  <div class="card-body">
                     <div class="row">
                        <div class="col-sm-3">
                           <h6 class="mb-0">Full Name</h6>
                        </div>
                        <div class="col-sm-9 text-secondary" id = "g_name">
                           John Doe
                        </div>
                     </div>
                     <hr>
                     <div class="row">
                        <div class="col-sm-3">
                           <h6 class="mb-0">Email</h6>
                        </div>
                        <div class="col-sm-9 text-secondary" id = "g_email">
                           fip@jukmuh.al
                        </div>
                     </div>
                     <hr>
                     <div class="row">
                        <div class="col-sm-3">
                           <h6 class="mb-0">Date of birth</h6>
                        </div>
                        <div class="col-sm-9 text-secondary" id = "g_date">
                           01.01.1990
                        </div>
                     </div>
                     <hr>
                     <div class="row">
                        <div class="col-sm-3">
                           <h6 class="mb-0">Gender</h6>
                        </div>
                        <div class="col-sm-9 text-secondary" id = "g_gender">
                           Male
                        </div>
                     </div>
                  </div>
               </div>
               <br>
               <h2>DESCRIPTION</h2>
               <p>Web app for learning, repeating and consolidation of foreign words.</p>
            </div>
         </div>
      </div>
   </div>
</section>
</template>

<style>
#logo img {
    display: block;
    max-width: 15%;
    max-height: 15%;
    padding-left: 0;
    margin-left: 0;
    }
    
.fakeimg img{
    height: 200px;
    background: #aaa;
}

#profile {
    background-color: rgb(165, 221, 221);
    padding-top: 100px;
}


</style>