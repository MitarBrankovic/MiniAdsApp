package com.example.demo.service.implementation;

import com.example.demo.model.Ad;
import com.example.demo.repository.AdRepository;
import com.example.demo.service.AdService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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
}
