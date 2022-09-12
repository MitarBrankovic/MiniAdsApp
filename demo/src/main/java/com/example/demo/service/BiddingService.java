package com.example.demo.service;

import com.example.demo.model.Bidding;

import java.util.List;

public interface BiddingService {
    List<Bidding> getByAdId(Long adId);

    List<Bidding> getByUsername(String userId);

    void saveBidding(Bidding bidding);

    Bidding getHighestBidByAdId(Long adId);
}
