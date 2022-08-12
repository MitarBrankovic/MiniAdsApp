package com.example.demo.service;

import com.example.demo.dto.UserRegistrationDto;
import com.example.demo.model.UserApp;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.security.SecureRandom;
import java.util.List;

@Service
public class UserServiceImpl implements UserService, UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public void saveUser(UserRegistrationDto userRegistrationDTO) {
        int strength = 10; // work factor of bcrypt
        BCryptPasswordEncoder bCryptPasswordEncoder =
                new BCryptPasswordEncoder(strength, new SecureRandom());
        String encodedPassword = bCryptPasswordEncoder.encode(userRegistrationDTO.getPassword());

        userRepository.save(new UserApp(userRegistrationDTO.getUsername(),
                encodedPassword,
                userRegistrationDTO.getFirstName(),
                userRegistrationDTO.getLastName()));
    }

    @Override
    public List<UserApp> findAll() {
        return userRepository.findAll();
    }


    public UserApp loadUserByUsername(String username){
        return userRepository.findByUsername(username);
    }
}

