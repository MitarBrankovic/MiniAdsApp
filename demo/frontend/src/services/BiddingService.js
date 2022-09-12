import axios from 'axios';

const AD_API_BASE_URL = "http://localhost:8080/api/bidding";

class BiddingService {

    constructor() {

        this.state = {
        }
    }

    bid(biddingDto){
        return axios.post(AD_API_BASE_URL + '/create', biddingDto);
    }

    getAllBidsByAdId(adId){
        return axios.get(AD_API_BASE_URL + '/getByAdId/' + adId);
    }

    getHighestBidByAdId(adId){
        return axios.get(AD_API_BASE_URL + '/getHighestBidByAdId/' + adId);
    }
}

export default new BiddingService();