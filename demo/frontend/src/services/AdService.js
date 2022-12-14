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

    getAd(adId){
        return axios.get(AD_API_BASE_URL + '/getAd/' + adId);
    }

    deleteAd(adId){
        return axios.delete(AD_API_BASE_URL + '/deleteAd/' + adId);
    }

    updateAd(adId, dto){
        return axios.put(AD_API_BASE_URL + '/updateAd/'+ adId, dto);
    }

    getAdsByUser(userId){
        return axios.get(AD_API_BASE_URL + '/getAdsByUser/' + userId);
    }
}



export default new AdService();