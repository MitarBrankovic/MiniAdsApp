package com.example.demo.repository;

import com.example.demo.model.Bidding;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BiddingRepository extends JpaRepository<Bidding, Long> {

    List<Bidding> findByAdId(Long adId);
    List<Bidding> findByUsername(String username);
}
