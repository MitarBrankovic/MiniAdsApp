import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8080/api/user";

class UserService {

    getUsers(){
        return axios.get(USER_API_BASE_URL + '/getUsers');
    }

    login(user){
        return axios.post(USER_API_BASE_URL + '/login', user);
    }


}

export default new UserService()