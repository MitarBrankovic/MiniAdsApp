package com.example.demo.controller;

import com.example.demo.dto.SearchAdsDto;
import com.example.demo.model.Ad;
import com.example.demo.service.AdService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.websocket.server.PathParam;
import java.util.List;

@Controller
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/ad")
public class AdController {

    @Autowired
    private AdService adService;


    @RequestMapping("/getAd")
    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Ad> findAd(@PathParam("name") String name){
        Ad ad = adService.findByName(name);
        return new ResponseEntity<>(ad, HttpStatus.OK);
    }

    @GetMapping("/getAllAds")
    public ResponseEntity<List<Ad>> getAllAds(){
        List<Ad> sortedAds = adService.sortByDate(adService.findAll());
        return new ResponseEntity<>(sortedAds, HttpStatus.OK);
    }

    @PostMapping("/searchAds")
    public ResponseEntity<List<Ad>> searchAds(@RequestBody SearchAdsDto search){
        List<Ad> sortedAds = adService.sortByDate(adService.searchAds(search));
        return new ResponseEntity<>(sortedAds, HttpStatus.OK);
    }
}
