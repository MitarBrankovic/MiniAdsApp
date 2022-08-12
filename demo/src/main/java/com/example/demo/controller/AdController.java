package com.example.demo.controller;

import com.example.demo.model.Ad;
import com.example.demo.service.AdService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.websocket.server.PathParam;

@Controller
@CrossOrigin(origins = "https://localhost:4200")
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
}
