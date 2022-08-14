package com.example.demo.service;

import com.example.demo.model.Ad;

import java.util.List;

public interface AdService {

    Ad findByName(String name);

    List<Ad> findAll();
}
