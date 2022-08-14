import axios from 'axios';
import Swal from 'sweetalert2';

const USER_API_BASE_URL = "http://localhost:8080/api/user";

class UserService {

    constructor() {

        this.state = {
            loggedUser: ""
        }
    }

    getUsers(){
        return axios.get(USER_API_BASE_URL + '/getUsers');
    }

    login(user){
        return axios.post(USER_API_BASE_URL + '/login', user);
    }

    register(registerDto){
        return axios.post(USER_API_BASE_URL + '/register', registerDto);
    }

    swalSuccess(text) {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'success',
            title: text
          })
    }


}

export default new UserService()