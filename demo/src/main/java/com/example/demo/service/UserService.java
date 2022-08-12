package com.example.demo.service;

import com.example.demo.dto.UserRegistrationDto;
import com.example.demo.model.UserApp;

import java.util.List;

public interface UserService {

    void saveUser(UserRegistrationDto userRegistrationDTO);
    List<UserApp> findAll();
}
