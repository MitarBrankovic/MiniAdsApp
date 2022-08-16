package com.example.demo.service.implementation;

import com.example.demo.dto.SearchAdsDto;
import com.example.demo.model.Ad;
import com.example.demo.repository.AdRepository;
import com.example.demo.service.AdService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class AdServiceImpl implements AdService {

    @Autowired
    private AdRepository adRepository;

    @Override
    public Ad findByName(String name) {
        return adRepository.findByName(name);
    }

    @Override
    public List<Ad> findAll() {
        return adRepository.findAll();
    }

    @Override
    public List<Ad> sortByDate(List<Ad> ads) {
        ads.sort(Comparator.comparing(Ad::getDateOfCreation).reversed());  //(a1, a2) -> a2.getDateOfCreation().compareTo(a1.getDateOfCreation())
        return ads;
    }

    @Override
    public List<Ad> searchAds(SearchAdsDto search) {
        List<Ad> ads = adRepository.findAll();
        if (search.getName().equals("") && search.getCategory().equals("") && search.getMinValue() == 0 && search.getMaxValue() == 0)
            ads = adRepository.findAll();

        if (!search.getName().equals("")) {
            ads =  ads.stream().filter(m -> m.getName().toLowerCase().contains(search.getName().toLowerCase()))
                    .collect(Collectors.toList()); }

        if (!search.getCategory().equals("")) {
            ads =  ads.stream().filter(m -> m.getStatus().toString().toLowerCase().contains(search.getCategory().toLowerCase()))
                    .collect(Collectors.toList()); }

        if (search.getMinValue() != 0) {
            ads =  ads.stream().filter(m -> m.getPrice() >= search.getMinValue())
                    .collect(Collectors.toList()); }

        if (search.getMaxValue() != 0) {
            ads =  ads.stream().filter(m -> m.getPrice() <= search.getMaxValue())
                    .collect(Collectors.toList()); }

        if(search.getIsMine()) {
            ads =  ads.stream().filter(m -> m.getUserApp().getId().equals(search.getUserId()))
                    .collect(Collectors.toList()); }

        return ads;
        }

    @Override
    public void saveAd(Ad ad) {
        adRepository.save(ad);
    }

}
