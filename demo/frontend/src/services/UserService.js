import axios from 'axios';
import Swal from 'sweetalert2';
import jwt from 'jwt-decode'

const USER_API_BASE_URL = "http://localhost:8080/api/user";

class UserService {

    constructor() {

        this.state = {
            loggedUser: ""
        }
    }

    parseJwt(token){
      return jwt(token);
    }

    isExpired(){
      if(JSON.parse(localStorage.getItem('jwtToken')) !== null){
          let token = JSON.parse(localStorage.getItem('jwtToken'))
          let expiration = this.parseJwt(token).exp
          return expiration < Date.now() / 1000
      }else{
          return true;
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

    swalError(text) {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'error',
            title: text
          })
    }


}

export default new UserService()