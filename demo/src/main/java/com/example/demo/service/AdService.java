package com.example.demo.service;

import com.example.demo.dto.NewAddDto;
import com.example.demo.dto.SearchAdsDto;
import com.example.demo.model.Ad;

import java.util.List;

public interface AdService {

    Ad findByName(String name);

    List<Ad> findAll();

    List<Ad> sortByDate(List<Ad> ads);

    List<Ad> searchAds(SearchAdsDto search);

    void saveAd(Ad ad);

    Ad findById(Long id);

    void deleteAd(Long id);

    void updateAd(Long id, NewAddDto adDto);
}
