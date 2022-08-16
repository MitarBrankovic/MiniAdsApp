import axios from 'axios';

const AD_API_BASE_URL = "http://localhost:8080/api/ad";

class AdService {

    constructor() {

        this.state = {
        }
    }

    getAllAds(){
        return axios.get(AD_API_BASE_URL + '/getAllAds');
    }

    searchAds(search){
        return axios.post(AD_API_BASE_URL + '/searchAds', search);
    }

    addAd(ad){
        return axios.post(AD_API_BASE_URL + '/addAd', ad);
    }
}



export default new AdService();