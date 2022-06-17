import viewWindow from '../view/viewWindow.js';

let View = new viewWindow();
const about_lnk = document.getElementById('about_link');
const app_lnk = document.getElementById('app_link');
const index_lnk = document.getElementById('index_link');
const login_lnk = document.getElementById('login_link');
const profile_lnk = document.getElementById('profile_link');
const register_lnk = document.getElementById('register_link');
const logout_lnk = document.getElementById('logout_link');
const home_lnk = document.getElementById('home_link');

    if(about_lnk) {
        about_lnk.addEventListener('click', {
            handleEvent: function (event) {
                View.about();
            }
        });
    }

    if(app_lnk) {
        app_lnk.addEventListener('click', {
            handleEvent: function (event) {
                View.app();
            }
        });
    }

    if(index_lnk) {
        index_lnk.addEventListener('click', {
            handleEvent: function (event) {
                View.index();
            }
        });
    }
    if(home_lnk) {
        home_lnk.addEventListener('click', {
            handleEvent: function (event) {
                View.index();
            }
        });
    }

    if(login_lnk) {
        login_lnk.addEventListener('click', {
            handleEvent: function (event) {
                View.login();
            }
        });
    }

    if(profile_lnk) {
        profile_lnk.addEventListener('click', {
            handleEvent: function (event) {
                View.profile();
            }
        });
    }
    if(register_lnk) {
        register_lnk.addEventListener('click', {
            handleEvent: function (event) {
                View.register();
            }
        });
    }
    if(logout_lnk) {
        logout_lnk.addEventListener('click', {
            handleEvent: function (event) {
                View.register();
            }
        });
    }

    