import User from "../model/modelR.js";

export default class controllerRegister {
    get_val_gender() {

        var radios = document.getElementsByName('inlineDefaultRadiosExample');
            if (radios[0].checked) {
                return "Male";
            }
            if(radios[1].checked) {
                return "Female";
            }
        
    }

    validate_data(f_name, l_name, _email, _date, _psw, _psw_re) {
        let errors = 0;
        let q = new Date();
        let m = q.getMonth();
        let d = q.getDay();
        let y = q.getFullYear();

        let date_today = new Date(y,m,d);
        if(/\S+@\S+\.\S+/.test(email)) {
            alert("Incorrect email value");
            errors++;
        }
        if(f_name.length < 3) {
            alert("Incorrect first name value");
            errors++;
        }
        if(l_name.length < 3) {
            alert("Incorrect last name value");
            errors++;
        }
        if (/\s/.test(_psw) || !_psw.length || (/[a-zA-Z]/.test(_psw) && !/\d/.test(_psw)) || (!/[a-zA-Z]/.test(_psw) && /\d/.test(_psw))) {
            alert("Incorrect password value");
            errors++;
        }
        if(_psw != _psw_re) {
            alert("Incorrect passwords are not equal");
            errors++;
        }
        if(date_today > _date) {
            alert("Incorrect date value")
            errors++;
        }
        if(errors > 0)
            return true;
        else
            return false; 
    }

    getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "Cookie error";
    }

    setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    register_form() {;
        const fname = document.getElementById('firstname').value;
        const lname = document.getElementById('surname').value;
        const e_mail = document.getElementById('email').value;
        const date = document.getElementById('birthday').value;
        const gender = this.get_val_gender();
        const passw = document.getElementById('password').value;
        const passw_re = document.getElementById('confirm').value;
        
        if (this.validate_data(fname, lname, e_mail, date, passw, passw_re))
            return;
        let new_user = new User(fname + " " + lname,e_mail, date, gender,passw);
        
        this.setCookie("name_", new_user.name, 20);
        this.setCookie("email_",new_user.email, 20);
        this.setCookie("id_", "ID#: " + new_user.id, 20);
        this.setCookie("date", new_user.date, 20);
        this.setCookie("gender", new_user.gender, 20);
        this.setCookie("password", new_user.password, 20);

        window.open('../html/profile.html', "_self");
    }

    login_form() {

        if (this.getCookie("email_") === document.getElementById('username').value &&
            this.getCookie("password") === document.getElementById('passw').value) {

            window.open('../html/profile.html', "_self");
        } else {
            alert("Incorrect value of login or password");
        }
    }

    get_profile_info(){
        let user = new User();
        
        user.name = this.getCookie("name_");
        user.id = this.getCookie("id_");
        user.email = this.getCookie("email_");
        user.date = this.getCookie("date");
        user.gender = this.getCookie("gender");
        user.password = this.getCookie("password");

        return user;
    }
}