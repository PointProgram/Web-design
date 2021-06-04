<template>
    <div id="login">
    <h3 class="text-center text-white pt-5">Login form</h3>
    <div class="container">
        <div id="login-row" class="row justify-content-center align-items-center">
            <div id="login-column" class="col-md-6">
                <div id="login-box" class="col-md-12">
                    <form id="login-form" class="form" action="" method="post">
                        <h3 class="text-center text-info">Login</h3>
                        <div class="form-group">
                            <label for="username" class="text-info">Email:</label><br>
                            <input type="text" name="username" id="username" class="form-control" v-model="email">
                        </div>
                        <div class="form-group">
                            <label for="password" class="text-info">Password:</label><br>
                            <input type="password" name="passw" id="passw" class="form-control" autocomplete="on" v-model="password">
                        </div>
                        <div class="form-group">
                            <label for="remember-me" class="text-info"><span>Remember me</span><span><input id="remember-me" name="remember-me" type="checkbox"></span></label><br>
                             <router-link to="/" :disabled="true">
                                <input type="button" name="submit" class="btn btn-info btn-md" value="submit" id = "log_submit" @click="login">
                             </router-link>
                        </div>
                        <div id="register-link" class="text-right">
                             <router-link to = "/register" class = "">
                            <a href="register.html" class="text-info">Register here</a>
                             </router-link>
                        </div>
                    </form>
                    <div class="row mt-3">
                <div class="col-md-4"/>
                <div class="col-md-4">
                    <div id="error" class="h4 text-center text-danger">
                        {{error}}
                    </div>
                </div>
            </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import ProfileEvent from '../components/backend_profile/profile.js'
export default {

    data() {
        return {
            count: 0,
            email: "",
            password: "",
            error: ""
        }
    },
    
    methods: {
        checkPSW (regExp, errDetail) {
            if(this.password.match(regExp) == null) {
                if(this.count > 0) {
                    this.error += " "
                    this.count = 0;
                }
                this.error += "invalid password (" + errDetail + ')';
                this.count++;
            }
        },
        login() {
            if(this.email == "" || this.password == "")
                alert("Empty lines not allowed");
           let regularForEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            this.error = '';
            this.count = 0;
            if (regularForEmail.test(this.email) != true) {
                this.error += "invalid email";
                this.count++;
            }
            this.checkPasswordByRegularExpression(/[a-z]/, "no lowercase");
            this.checkPasswordByRegularExpression(/[0-9]/, "diggits missed");
            if (this.password.length < 6) {
                if (this.count > 0) {
                    this.error += " "
                    this.count = 0;
                }
                this.error += "invalid password (not secure)";
                this.count++;
            }
        
            ProfileEvent.dataLogin(this.email,this.password).then(response => {
                    if (response.data == true & this.count == 0) {
                        console.log("Success login");
                    }
                })
                .catch(function () {
                    return null;
                });
        }
    }
}