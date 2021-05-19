import controllerRegister from './controller/controllerRegister.js';
import viewRegister from './view/viewRegister.js';

let ViewRegister = new viewRegister();

let ControllerRegister = new controllerRegister();

const profie_load = window.location.pathname;
const btn_load = document.getElementById('reg');
const btn_login =  document.getElementById('log_submit');

if(btn_load) {
    btn_load.addEventListener('click', {
        handleEvent: function (event) {
            ControllerRegister.register_form();
        }
    });
}

if(btn_login) {
    btn_login.addEventListener('click', {
        handleEvent: function (event) {
            ControllerRegister.login_form();
        }
    });
}

if(profie_load === "/html/profile.html") {
    ViewRegister.view_profile(ControllerRegister.get_profile_info());
}