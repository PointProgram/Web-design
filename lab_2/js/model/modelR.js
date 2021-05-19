export default class User {
    constructor(name, email, date, gender, password) {
        this.name = name;
        this.id = Math.round(Math.random() * 100000).toString();
        this.email = email;
        this.gender = gender;
        this.date = date;
        this.password = password;
    }
}