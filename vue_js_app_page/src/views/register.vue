<template>
  <section class="page-section register" id="register">
    <div class="container">
        <div class="row"></div>
        <div class="col-md-12">
          <div class="card"></div>
          <div class="card-header">
              <h1>Register</h1>
              <p>Please fill in this form to create an account.</p>
              <hr>
          </div>
          <div class = "card-body">
              <form class="form-horizontal needs-validation"  novalidate>
                <!--method="post" action="#"-->
                <div class="form-group">
                    <label for="name" class="cols-sm-2 control-label">First Name</label>
                    <div class="cols-sm-10">
                      <div class="input-group">
                          <span class="input-group-addon"><i class="fa fa-user fa" aria-hidden="true"></i></span>
                          <input type="text" class="form-control" name="firstname" id="firstname" placeholder="Enter your Name" required v-model="first_name">
                          <div class="valid-feedback">
                            Looks good!
                          </div>
                      </div>
                    </div>
                </div>
                <div class="form-group">
                    <label for="surname" class="cols-sm-2 control-label">Last Name</label>
                    <div class="cols-sm-10">
                      <div class="input-group">
                          <span class="input-group-addon"><i class="fa fa-user fa" aria-hidden="true"></i></span>
                          <input type="text" class="form-control" name="surname" id="surname" placeholder="Enter your Surame" required v-model="last_name">
                          <div class="valid-feedback">
                            Looks good!
                          </div>
                      </div>
                    </div>
                </div>
                <div class="form-group">
                    <label for="email" class="cols-sm-2 control-label">Email</label>
                    <div class="cols-sm-10">
                      <div class="input-group">
                          <span class="input-group-addon"><i class="fa fa-envelope fa" aria-hidden="true"></i></span>
                          <input type="text" class="form-control" name="email" id="email" placeholder="Enter your Email" required v-model="email">
                          <div class="invalid-feedback">
                            Please provide a valid email.
                          </div>
                      </div>
                    </div>
                </div>
                <div class="form-group">
                    <label for="birthday" class="cols-sm-2 control-label">Birthday</label>
                    <div class="cols-sm-10">
                      <div class="input-group">
                          <span class="input-group-addon"><i class="fa fa-envelope fa" aria-hidden="true"></i></span>
                          <input type="date" class="form-control" name="birthday" id="birthday" placeholder="Enter your Birthday" required v-model="birthday">
                          <div class="invalid-feedback">
                            Please provide a valid birthday.
                          </div>
                      </div>
                    </div>
                </div>
                    <div class="form-group">
                      <label for="gender" class="cols-sm-2 control-label">Gender</label>
                      <div class="cols-sm-10">
                          <div class="input-group">
                            <div class="custom-control custom-radio custom-control-inline">
                                <input type="radio" class="custom-control-input" id="defaultInline1" name="inlineDefaultRadiosExample" @change="onChange($event)" value="male">
                                <label class="custom-control-label" for="defaultInline1">Male</label>
                            </div>
                            <!-- Default inline 2-->
                            <div class="custom-control custom-radio custom-control-inline">
                                <input type="radio" class="custom-control-input" id="defaultInline2" name="inlineDefaultRadiosExample" @change="onChange($event)" value="female">
                                <label class="custom-control-label" for="defaultInline2">Female</label>
                            </div>
                          </div>
                      </div>
                      <div class="form-group">
                          <label for="password" class="cols-sm-2 control-label">Password</label>
                          <div class="cols-sm-10">
                            <div class="input-group">
                                <span class="input-group-addon"><i class="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                                <input type="password" class="form-control" name="password" id="password" placeholder="Enter your Password" autocomplete="on" required>
                                <div class="invalid-feedback">
                                  Please provide a valid Password.
                                </div>
                            </div>
                          </div>
                      </div>
                      <div class="form-group">
                          <label for="confirm" class="cols-sm-2 control-label">Confirm Password</label>
                          <div class="cols-sm-10">
                            <div class="input-group">
                                <span class="input-group-addon"><i class="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                                <input type="password" class="form-control" name="confirm" id="confirm" placeholder="Confirm your Password" autocomplete="on" required>
                                <div class="invalid-feedback">
                                  Please provide a valid Password.
                                </div>
                            </div>
                          </div>
                      </div>
                      <div class="form-group ">
                        <router-link to="/">
                          <input  class="btn btn-primary btn-lg btn-block login-button" id = "reg" type="button" value="Sign Up" @click="signUp">
                        </router-link>
                      </div>
                      <div class="container signin">
                          <p>Already have an account? 
                             <router-link to = "/login">
                                <input type="button" class="btn btn-link" value="Sign in">
                             </router-link>
                          </p>
                      </div>
                    </div>
                    <div id="error" class="h4 text-center text-danger">
                        {{error}}
                    </div>
              </form>
              </div>
          </div>
        </div>
  </section>
</template>

<script>
import ProfileEvent from '../components/backend_profile/profile.js'

export default {
    data() {
        return {
            cnt : 0,
            first_name: "",
            last_name: "",
            birthday: "",
            gender: "",
            email : "",
            password : "",
            confirmPassword : "",
            error : "",
        }
    },
    methods: {
        onChange(event) {
              var data = event.target.value;
              this.gender = data;
        },
        passwordValidity(regCheck, errorDetails) {
            if (this.password.match(regCheck) == null) {
                if (this.cnt > 0) {
                    this.error += " "
                    this.cnt = 0;
                }
                this.error += "invalid password (" + errorDetails + ')';
                this.cnt++;
            }
            if (this.confirmPassword.match(regCheck) == null) {
                if (this.cnt > 0) {
                    this.error += " "
                    this.cnt = 0;
                }
                this.error += "invalid password confirmation (" + errorDetails + ')';
                this.cnt++;
            }
        },
        signUp () {
            let regularForEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            this.error = '';
            this.cnt = 0;
            if (regularForEmail.test(this.email) != true) {
                this.error += "email not correct";
                this.cnt++;
            }
            this.passwordValidity(/[a-z]/, "lowercase missed");
            this.passwordValidity(/[0-9]/, "digits missed");
            if (this.password.length < 6) {
                if (this.cnt > 0) {
                    this.error += " "
                    this.cnt = 0;
                }
                this.error += "insecure password\n";
                this.cnt++;
            }
            if (this.password != this.confirmPassword) {
                if (this.cnt > 0) {
                    this.error += " "
                    this.cnt = 0;
                }
                this.error += "different password & confirm password";
                this.cnt++;
            }
            if (this.cnt == 0) {
                ProfileEvent.dataUser(this.email, this.password, this.first_name, this.last_name, this.birthday, this.gender);
            }
        },
    },
}
</script>

<style >
.registerbtn {
    background-color: #4CAF50;
    color: white;
    padding: 16px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
    opacity: 0.9;
  }
  
  .registerbtn:hover {
    opacity:1;
  }
</style>