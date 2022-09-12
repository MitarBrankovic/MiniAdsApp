package com.example.demo.controller;

import com.example.demo.dto.BiddingDto;
import com.example.demo.model.Bidding;
import com.example.demo.service.BiddingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.List;

@Controller
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/bidding")
public class BiddingController {

    @Autowired
    private BiddingService biddingService;

    @RequestMapping("/getByAdId/{adId}")
    @GetMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<Bidding>> getByAdId(@PathVariable("adId") Long adId){
        return new ResponseEntity<>(biddingService.getByAdId(adId), HttpStatus.OK);
    }

    @RequestMapping("/getByUsername/{username}")
    @GetMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<Bidding>> getByUsername(@PathVariable("username") String username){
        return new ResponseEntity<>(biddingService.getByUsername(username), HttpStatus.OK);
    }

    @RequestMapping("/create")
    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity create(@RequestBody BiddingDto biddingDto){
        Bidding bidding = new Bidding(biddingDto.getUsername(), biddingDto.getCurrentPrice(), biddingDto.getAdId(), LocalDateTime.now().truncatedTo(ChronoUnit.SECONDS));
        biddingService.saveBidding(bidding);
        return new ResponseEntity(HttpStatus.CREATED);
    }

    @RequestMapping("/getHighestBidByAdId/{adId}")
    @GetMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Bidding> getHighestBidByAdId(@PathVariable("adId") Long adId){
        try {
            return new ResponseEntity<>(biddingService.getHighestBidByAdId(adId), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
}
