import axios from 'axios';

const baseUrl = 'http://localhost:8080/api/token';

export default {
    use (){},
    dataLogin (email, password) {
        return axios.get(baseUrl + `/user?email=${email}&password=${password}`);
    }
    ,
    dataUser(email, password, first_name, last_name, birthday, gender) {
        return axios.get(baseUrl + `/user_profile?email=${email}&password=${password}&first_name=${first_name}&last_name=${last_name}&birthday=${birthday}&gender=${gender}`);
    }
}