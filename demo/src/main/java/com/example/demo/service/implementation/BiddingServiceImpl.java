package com.example.demo.service.implementation;

import com.example.demo.model.Bidding;
import com.example.demo.repository.BiddingRepository;
import com.example.demo.service.BiddingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BiddingServiceImpl implements BiddingService {

    @Autowired
    private BiddingRepository biddingRepository;

    @Override
    public List<Bidding> getByAdId(Long adId) {
        return biddingRepository.findByAdId(adId);
    }

    @Override
    public List<Bidding> getByUsername(String username) {
        return biddingRepository.findByUsername(username);
    }

    @Override
    public void saveBidding(Bidding bidding) {
        biddingRepository.save(bidding);
    }

    @Override
    public Bidding getHighestBidByAdId(Long adId) {
        List<Bidding> biddings = biddingRepository.findByAdId(adId);
        Bidding highestBid = biddings.get(0);
        for (Bidding bidding : biddings) {
            if (bidding.getCurrentPrice() > highestBid.getCurrentPrice()) {
                highestBid = bidding;
            }
        }
        return highestBid;
    }
}
