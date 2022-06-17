export default class viewRegister {
view_profile(user) {

    var xml_tp = new XMLHttpRequest();
    xml_tp.open('GET', "profile.html", true);
    xml_tp.onreadystatechange = function () {
        if (this.readyState !== 4) return;
        if (this.status !== 200) return;
        document.getElementById("g_name").innerHTML = user.name;
        document.getElementById("g_id").innerHTML = user.id;
        document.getElementById("g_email").innerHTML = user.email;
        document.getElementById("g_date").innerHTML = user.date;        
        document.getElementById("g_gender").innerHTML = user.gender;

    };
    xml_tp.send();
}
}